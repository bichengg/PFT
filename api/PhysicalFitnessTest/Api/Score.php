<?php
/**
 * 成绩接口服务类
 *
 * @author: 
 */

class Api_Score extends PhalApi_Api {

	public function getRules() {
        return array(
            'getInfo' => array(
                'token' => array('name' => 'token', 'source' => 'get', 'type' => 'string', 'require' => true),
                'year'  => array('name' => 'year', 'source' => 'get', 'type' => 'string',  'require' => false),   
            ),
            'insert' => array(
                'token' => array('name' => 'token', 'source' => 'post', 'type' => 'string', 'require' => true),
                'num'  => array('name' => 'num', 'type' => 'int', 'source' => 'post', 'require' => false),   
                'name'  => array('name' => 'name','type' => 'string', 'source' => 'post', 'require' => false),
                'pwd'  => array('name' => 'pwd', 'type' => 'string', 'source' => 'post', 'require' => false),   
            ),
            'update' => array(
                'token' => array('name' => 'token', 'source' => 'post', 'type' => 'string', 'require' => true),
                'scoreId' => array('name' => 'id', 'source' => 'post', 'type' => 'string', 'require' => true),
                'num'  => array('name' => 'num', 'type' => 'int', 'source' => 'post', 'require' => false),   
                'name'  => array('name' => 'name','type' => 'string', 'source' => 'post', 'require' => false),
                'pwd'  => array('name' => 'pwd', 'type' => 'string', 'source' => 'post', 'require' => false),   
            ),
        );
	}
	
    /**
	 * 成绩信息获取 无id 返回列表
	 * @return 
	 */
    public function getInfo(){
        $model = new Model_Default();
        $adminId = $model->checkAdminId($this->token);
        if (empty($adminId)) {
            return ;
        }

        $rs = array('code' => 0, 'msg' => '', 'info' => array());
        
        $info = array();
        
        $sql_subject='';
        $subjectList=DI()->notorm->subject->select('*')->order("id asc")->fetchRows();
        
            foreach($subjectList as $ele){
                $sql_subject.=",MAX(
                    CASE
                    WHEN a.subject_id = ".$ele['id']." THEN
                        `value`
                    END
                ) AS ".$ele['name'];
            }
        $sql = "SELECT 
                b.grade_num,b.class_num,b.class_name,b.student_code,b.nation,b.name,b.sex,b.born,b.address ".$sql_subject."
            FROM
                pft_score AS a
            RIGHT JOIN pft_student AS b ON a.student_id = b.id
            WHERE b.school_year = :year
            GROUP BY
                b.id";
        //$params = array(':userId' => $userId, ':start' => $start, ':num' => $num);
        if($this->year){
            $params = array(':year' => $this->year);
        }
        else{
            $params = array(':year' => date("Y"));
        }
        $info= DI()->notorm->example->queryAll($sql,$params);
        if (empty($info)) {
            DI()->logger->debug('user not found', $this->scoreId);

            $rs['code'] = 1;
            $rs['msg'] = T('user not exists');
            return $rs;
        }

        $rs['info'] = $info;

        return $rs;
    }
    /**
	 * 成绩新增
     * @desc 
	 * @return  id
	 */
    public function insert(){
        $model = new Model_Default();
        $adminId = $model->checkAdminId($this->token);
        if (empty($adminId)) {
            return ;
        }
        $data = array(
            'id' => new NotORM_Literal('uuid()'),
            'num'  => $this->num,                                            
            'name'  => $this->name,
            'pwd'  => $this->pwd,
            'time'  => date('Y-m-d H:i:s')
        );
        $rs   = DI()->notorm->score->insert($data);    
        $rs['msg'] = T('add ok');           
        return $rs['id'];  
    }
    /**
	 * 成绩更改
     * @desc 
	 * @return  id
	 */
    public function update(){
        $model = new Model_Default();
        $adminId = $model->checkAdminId($this->token);
        if (empty($adminId)) {
            return ;
        }
        $data = array(
            'num'  => $this->num,                                            
            'name'  => $this->name,
            'pwd'  => $this->pwd,
            'time'  => date('Y-m-d H:i:s')
        );
        $rs   = DI()->notorm->score->where('id', $this->scoreId)->update($data);
        if($rs === false){
            throw new PhalApi_Exception_BadRequest('修改数据失败');
        }
    }
}
