<?php
/**
 * 默认接口服务类
 *
 * @author: 
 */

class Api_Default extends PhalApi_Api {

	public function getRules() {
        return array(
            'index' => array(
                'username' 	=> array('name' => 'bicheng', 'default' => 'PHPer', ),
            ),
            'getUserInfo' => array(
                'userId' => array('name' => 'user_id', 'type' => 'int', 'min' => 1, 'require' => true),
            ),
            'insertUser' => array(
                'name'  => array('name' => 'name', 'require' => true, 'desc' => '用户名称'),
            ),
        );
	}
	
	/**
	 * 默认接口服务
	 * @return string title 标题
	 * @return string content 内容
	 * @return string version 版本，格式：X.X.X
	 * @return int time 当前时间戳
	 */
	public function index() {
        return array(
            'title' => 'Hello World!',
            'content' => T('{name}', array('name' => $this->username)),
            'version' => PHALAPI_VERSION,
            'time' => $_SERVER['REQUEST_TIME'],
        );
	}
    /**
	 * 用户信息获取
	 * @return 
	 */
    public function getUserInfo(){

        $rs = array('code' => 0, 'msg' => '', 'info' => array());

        $domain = new Domain_Default();
        $info = array();
        $userId = intval($userId);
        if ($userId <= 0) {
            return $info;
        }
        $model = DI()->notorm->user->select('*')->where('id = ?', $userId)->fetch();
        $info = $model->getByUserId($userId);

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
	 * @return id
	 */
    public function insertUser(){
        $data = array(                                               //用数组构成需要插入键值一一对应
            'name'  => $this->name
        );
        $rs   = DI()->notorm->user->insert($data);                  //执行数据库操作user代表的是表,返回结果是插入成功的值
       
        return $rs['id'];                                           //返回插入的id
    }
}
