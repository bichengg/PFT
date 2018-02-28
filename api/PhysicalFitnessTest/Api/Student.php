<?php
/**
 * 学生接口服务类
 *
 * @author: 
 */

class Api_Student extends PhalApi_Api {

	public function getRules() {
        return array(
            
            'getInfo' => array(
                'token' => array('name' => 'token', 'source' => 'get', 'type' => 'string', 'require' => true),
                'studentId' => array('name' => 'id', 'source' => 'get', 'type' => 'string', 'require' => false),
                'current' => array('name' => 'current', 'source' => 'get', 'type' => 'int', 'require' => false, 'default'=>1),
                'size' => array('name' => 'size', 'source' => 'get', 'type' => 'int', 'require' => false),
                'studentName' => array('name' => 'name', 'source' => 'get', 'type' => 'string', 'require' => false),
                'year' => array('name' => 'year', 'source' => 'get', 'type' => 'string', 'require' => false),
                'status' => array('name' => 'status', 'source' => 'get', 'type' => 'string', 'require' => false)
            ),
            'insert' => array(
                'token' => array('name' => 'token', 'source' => 'post', 'type' => 'string', 'require' => true),
                'school_year'  => array('name' => 'school_year', 'type' => 'int', 'source' => 'post', 'require' => false),  
                'grade_num'  => array('name' => 'grade_num', 'type' => 'int', 'source' => 'post', 'require' => false),   
                'class_num'  => array('name' => 'class_num','type' => 'string', 'source' => 'post', 'require' => false),
                'class_name'  => array('name' => 'class_name', 'type' => 'string', 'source' => 'post', 'require' => false),   
                'student_code'  => array('name' => 'student_code', 'type' => 'string', 'source' => 'post', 'require' => false),  
                'nation'  => array('name' => 'nation', 'type' => 'string', 'source' => 'post', 'require' => false),  
                'name'  => array('name' => 'name', 'type' => 'string', 'source' => 'post', 'require' => false),  
                'sex'  => array('name' => 'sex', 'type' => 'string', 'source' => 'post', 'require' => false),  
                'born'  => array('name' => 'born', 'type' => 'string', 'source' => 'post', 'require' => false),  
                'address'  => array('name' => 'address', 'type' => 'string', 'source' => 'post', 'require' => false),  
                'score'  => array('name' => 'score', 'type' => 'string', 'source' => 'post', 'require' => false), 
            ),
            'update' => array(
                'token' => array('name' => 'token', 'source' => 'post', 'type' => 'string', 'require' => true),
                'teacher_id' => array('name' => 'teacher_id', 'source' => 'post', 'type' => 'string', 'require' => false),
                'teacher_class' => array('name' => 'teacher_class', 'source' => 'post', 'type' => 'string', 'require' => false),
                'student_code'  => array('name' => 'student_code', 'type' => 'string', 'source' => 'post', 'require' => false),  
                'school_year'  => array('name' => 'school_year', 'type' => 'int', 'source' => 'post', 'require' => false),  
            ),
        );
	}
	
    /**
	 * 学生信息获取 无id 返回列表
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
        $current=$this->current;
        $size=$this->size;

        if($current<=1){
            $current=0;
        }else{
            $current=($current-1)*$size;
        }

        // $info = DI()->notorm->student->select('*, teacher.*');
        // if ($this->studentId) {
        //     $info = $info->where('id = ?', $this->studentId)->order('student_code desc')->fetchRow();
        // }
        // else{
        //     if($this->studentName) {
        //         $info = $info->where('name like ?', '%'.$this->studentName.'%');
        //     }
        //     if($this->year) {
        //         $info = $info->where('school_year', $this->year);
        //     }
        //     if($this->status != null) {
        //         $info = $info->where('status', $this->status);
        //     }
        //     $info = $info->order("student_code desc");
        //     if($size) {
        //         $info = $info->limit($current, $size);
        //     }
        //     $info = $info->fetchRows();
        // }


        $sql='select s.*,t.id as teacherId,t.name as teacherName from pft_student as s left join pft_teacher as t on s.teacher_id=t.id where 1=1';
        if ($this->studentId) {
            $sql .= ' and s.id = :studentId order by s.student_code desc';
        }
        else{
            if($this->studentName) {
                $sql .= ' and s.name like %:studentName%';
            }
            if($this->year) {
                $sql .= ' and s.school_year = :year';
            }
            if($this->status != null) {
                $sql .= ' and s.status = :status';
            }
            $sql .= ' order by s.student_code desc';
            if($size) {
                $sql .= ' limit :current,:size';
            }
        }
        $params = array(':studentId' => $this->studentId, ':studentName' => $this->studentName, ':year' => $this->year, ':status' => $this->status, ':size' => $size, ':current' => $current);
        $info = DI()->notorm->example->queryAll($sql,$params);

        if (empty($info)) {
            DI()->logger->debug('students not found', $this->studentId);

            $rs['code'] = 1;
            $rs['msg'] = T('students not exists');
            return $rs;
        }

        $rs['info'] = $info;

        return $rs;
    }
    /**
	 * 学生新增
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
            'school_year' => $this->school_year,   
            'grade_num'  => $this->grade_num,                                            
            'class_num'  => $this->class_num,
            'class_name'  => $this->class_name,
            'student_code'  => $this->student_code,
            'nation'  => $this->nation,
            'name'  => $this->name,
            'sex'  => $this->sex,
            'born'  => $this->born,
            'address'  => $this->address,
            'time'  => date('Y-m-d H:i:s')
        );
        if($this->score){
            $data = array_merge($data ,json_decode($this->score, true));
        }
        $rs   = DI()->notorm->student->insert($data);    
        $rs['msg'] = T('add ok');           
        return $rs['id'];  
    }
    /**
	 * 学生更改
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
            'teacher_class'  => $this->teacher_class,  
            'teacher_id'  => $this->teacher_id,                                            
            'student_code'  => $this->student_code,                                          
            'school_year'  => $this->school_year,
            'time'  => date('Y-m-d H:i:s')
        );
        $rs   = DI()->notorm->student->where('student_code', $this->student_code)->where('school_year', $this->school_year)->update($data);
        if($rs === false){
            throw new PhalApi_Exception_BadRequest('修改数据失败');
        }
    }
}
