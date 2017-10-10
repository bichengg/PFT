<?php
/**
 * 默认接口服务类
 *
 * @author: 
 */

class Domain_Default {

	public function getBaseInfo($userId)
    {
        $rs = array();

        $userId = intval($userId);
        if ($userId <= 0) {
            return $rs;
        }

        $model = new Model_Default ();
        $rs = $model->getByUserId($userId);

        return $rs;
    }
}
