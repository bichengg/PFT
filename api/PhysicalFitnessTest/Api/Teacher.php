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
                'current' => array('name' => 'current', 'source' => 'get', 'type' => 'int', 'require' => false),
                'size' => array('name' => 'size', 'source' => 'get', 'type' => 'int', 'require' => false),
                'teacherName' => array('name' => 'name', 'source' => 'get', 'type' => 'string', 'require' => false)
            ),
            'insert' => array(
                'num'  => array('name' => 'num', 'type' => 'int', 'source' => 'post', 'require' => false, 'default'=>'2', 'desc' => '教师工号'),   
                'name'  => array('name' => 'name','type' => 'string', 'source' => 'post', 'require' => false, 'desc' => '教师姓名'),
                'pwd'  => array('name' => 'pwd', 'type' => 'string', 'source' => 'post', 'require' => false, 'default'=>'123', 'desc' => '密码'),   
            ),
            'update' => array(
                'teacherId' => array('name' => 'id', 'source' => 'post', 'type' => 'string', 'require' => true),
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
        $current=$this->current;
        $size=$this->size?$this->size:10;

        if($current<=1){
            $current=0;
        }else{
            $current=($current-1)*$size;
        }

        $teachers=DI()->notorm->teacher->select('*');
        if ($this->teacherId) {
            $info = $teachers->where('id = ?', $this->teacherId)->order('time desc')->fetchRow();
        }
        else if($this->teacherName) {
            $info = $teachers->where('name like ?', '%'.$this->teacherName.'%')->limit($current, $size)->order('time desc')->fetchRows();
        }
        else{
            $info = $teachers->order("time desc")->limit($current, $size)->order('time desc')->fetchRows();
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
        $data = array(
            'id' => new NotORM_Literal('uuid()'),
            'num'  => $this->num,                                            
            'name'  => $this->name,
            'pwd'  => $this->pwd,
            'time'  => date('Y-m-d H:i:s')
        );
        $rs   = DI()->notorm->teacher->insert($data);    
        $rs['msg'] = T('add ok');           
        return $rs['id'];  
    }
    /**
	 * 教师更改
     * @desc 
	 * @return  id
	 */
    public function update(){
        $data = array(
            'num'  => $this->num,                                            
            'name'  => $this->name,
            'pwd'  => $this->pwd,
            'time'  => date('Y-m-d H:i:s')
        );
        $rs   = DI()->notorm->teacher->where('id', $this->teacherId)->update($data);
        if($rs === false){
            throw new PhalApi_Exception_BadRequest('修改数据失败');
        }
    }
}
