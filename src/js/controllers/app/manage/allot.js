'use strict';

/* Controllers */

app
    .controller('AllotCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', function (APP, $scope, $modal, toaster, $http) {

        $scope.student.status = '';
        $scope.student.size = 10;
        $scope.student.json = [];
        $scope.student.jsonReady = true;
        $scope.getStudentList();
        $scope.getTeacherList = function () {
            $http({
                method: "get",
                url: APP.baseurl + '?service=Teacher.getInfo',
                params: {
                    token: APP.token,
                    year: $scope.student.year,
                    size: 0
                }
            }).success(function (res) {
                if (res.data)
                    $scope.teacherList = res.data.info;
            }).error(function (res) {
                console.log(res)
            });
        };
        $scope.getTeacherList();

        $scope.count = 0;
        $scope.importStudent = function () {
            var arr = $scope.student.json;
            var i = $scope.count;

            var ele = {
                token: APP.token,
                school_year: $scope.student.year,
                teacher_id: $scope.student.teacher,
                student_code: arr[i]['student_code']
            }
            //上传
            $http({
                url: APP.baseurl + '?service=Student.update',
                method: 'post',
                data: ele
            }).success(function (res) {
                if (res.ret == 200) {
                    $scope.count++;
                    if (i == arr.length - 1) {
                        $scope.getStudentList();
                        toaster.pop('success', '分配成功', '共分配' + $scope.count + '名学生');
                        $scope.count = 0;
                        return;
                    } else {
                        $scope.importStudent();
                    }
                } else
                    toaster.pop('error', '失败', res.msg);

            }).error(function (res) {
                toaster.pop('error', '失败', res);
            });



        };





    }]);