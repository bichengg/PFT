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
        );
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
        return $rs['id'];  
    }
}
