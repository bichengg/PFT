<?php
/**
 * 默认接口服务类
 *
 * @author: 
 */

class Model_Default {
	public function getByUserId($userId)
    {
        return DI()->notorm->user->select('*')->where('id = ?', $userId)->fetch();
    }
}
