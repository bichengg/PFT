<?php
/**
 * 教师接口服务类
 *
 * @author: 
 */

class Api_Teacher extends PhalApi_Api {

	public function getRules() {
        return array(
            'getInfo' => array(
                'teacherId' => array('name' => 'id', 'source' => 'get', 'type' => 'string', 'require' => false),
            ),
            'insert' => array(
                'num'  => array('name' => 'num', 'type' => 'int', 'source' => 'post', 'require' => false, 'default'=>'2', 'desc' => '教师工号'),   
                'name'  => array('name' => 'name','type' => 'string', 'source' => 'post', 'require' => false, 'desc' => '教师姓名'),
                'pwd'  => array('name' => 'pwd', 'type' => 'string', 'source' => 'post', 'require' => false, 'default'=>'123', 'desc' => '密码'),   
            ),
        );
	}
	
    /**
	 * 教师信息获取 无id 返回列表
	 * @return 
	 */
    public function getInfo(){

        $rs = array('code' => 0, 'msg' => '', 'info' => array());

        
        $info = array();

        
        if (!$this->teacherId) {
            $info = DI()->notorm->teacher->select('*')->order("time desc")->fetchRows();
            
        }
        else{
            $info = DI()->notorm->user->select('*')->where('id = ?', $teacherId)->fetchRow();
        }


        if (empty($info)) {
            DI()->logger->debug('user not found', $this->teacherId);

            $rs['code'] = 1;
            $rs['msg'] = T('user not exists');
            return $rs;
        }

        $rs['info'] = $info;

        return $rs;
    }
    /**
	 * 教师新增
     * @desc 
	 * @return  id
	 */
    public function insert(){
        $data = $_POST;
        $data = array(
            'id' => new NotORM_Literal('uuid()'),
            'num'  => $this->num,                                            
            'name'  => $this->name,
            'pwd'  => $this->pwd,
            'time'  => date('Y-m-d H:i:s')
        );
        $rs   = DI()->notorm->teacher->insert($data);    
        $rs['msg'] = T('user not exists');           
        return $rs['id'];  
    }
}
