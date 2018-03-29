<?php
/**
 * 用户接口服务类
 *
 * @author: 
 */

class Api_User extends PhalApi_Api {

	public function getRules() {
        return array(
            'getInfo' => array(
                'userId' => array('name' => 'id', 'source' => 'post', 'type' => 'string', 'require' => true),
            ),
            'insert' => array(
                'name'  => array('name' => 'name', 'source' => 'post', 'require' => false, 'desc' => '用户名称'),
                'type'  => array('name' => 'type', 'type' => 'int', 'require' => false, 'default'=>'2', 'desc' => '用户类型'),    
            ),
            'checkLogin' => array(
                'username' => array('name' => 'username', 'source' => 'post', 'type' => 'string', 'require' => false),
                'password' => array('name' => 'password', 'source' => 'post', 'type' => 'string', 'require' => false),
            ),
            'checkLoginTeacher' => array(
                'username' => array('name' => 'username', 'source' => 'post', 'type' => 'string', 'require' => false),
                'password' => array('name' => 'password', 'source' => 'post', 'type' => 'string', 'require' => false),
            ),
            'checkLoginStudent' => array(
                'username' => array('name' => 'username', 'source' => 'post', 'type' => 'string', 'require' => false),
                'password' => array('name' => 'password', 'source' => 'post', 'type' => 'string', 'require' => false),
            ),
        );
	}
	/**
	 * 管理员登录验证
	 * @return 
	 */
    public function checkLogin(){

        $rs = array('code' => 0, 'msg' => '', 'info' => array());

        
        $info = array();

        $info = DI()->notorm->admin->select('*')->where('name = ?', $this->username)->where('password = ?', $this->password)->fetchOne();

        if (empty($info)) {
            DI()->logger->debug('user not found', $this->username);

            $rs['code'] = 1;
            $rs['msg'] = T('user not exists');
            return $rs;
        }

        $rs['info'] = $info['id'];

        return $rs;
    }
	/**
	 * 老师登录验证
	 * @return 
	 */
    public function checkLoginTeacher(){

        $rs = array('code' => 0, 'msg' => '', 'info' => array());

        
        $info = array();

        $info = DI()->notorm->teacher->select('*')->where('name = ?', $this->username)->where('pwd = ?', $this->password)->fetchOne();

        if (empty($info)) {
            DI()->logger->debug('user not found', $this->username);

            $rs['code'] = 1;
            $rs['msg'] = T('teacher not exists');
            return $rs;
        }

        $rs['info'] = $info;

        return $rs;
    }
	/**
	 * 学生登录验证
	 * @return 
	 */
    public function checkLoginStudent(){

        $rs = array('code' => 0, 'msg' => '', 'info' => array());

        
        $info = array();

        $info = DI()->notorm->student->select('*')->where('student_code = ?', $this->username)->where('born = ?', $this->password)->order('grade_num asc')->fetchRows();

        if (empty($info)) {
            DI()->logger->debug('student not found', $this->username);

            $rs['code'] = 1;
            $rs['msg'] = T('student not exists');
            return $rs;
        }

        $rs['info'] = $info;

        return $rs;
    }
    /**
	 * 用户信息获取
	 * @return 
	 */
    public function getInfo(){

        $rs = array('code' => 0, 'msg' => '', 'info' => array());

        
        $info = array();

        $userId = intval($this->userId);
        if ($userId <= 0) {
            return $rs;
        }
        $info = DI()->notorm->user->select('*')->where('id = ?', $userId)->fetchRow();

        if (empty($info)) {
            DI()->logger->debug('user not found', $this->userId);

            $rs['code'] = 1;
            $rs['msg'] = T('user not exists');
            return $rs;
        }

        $rs['info'] = $info;

        return $rs;
    }
    /**
	 * 用户新增
     * @desc  0:管理员;1:老师;2:学生
	 * @return  id
	 */
    public function insert(){
         $data = $_POST;
        $data = array(
            'id' => new NotORM_Literal('uuid()'),                                               
            'name'  => $this->name,
            'type'  => $this->type
        );
        $rs   = DI()->notorm->user->insert($data);    
        $rs['msg'] = T('user not exists');           
        return $rs['id'];  
    }
}
