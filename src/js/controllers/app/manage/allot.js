'use strict';

/* Controllers */

app
    .controller('AllotCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', function (APP, $scope, $modal, toaster, $http) {

        $scope.student.status = 0;
        $scope.student.size = 10;

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
            var arr = $scope.jsonStudent;
            for (var i = 0; i < arr.length; i++) {
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
                    if (res.ret == 200)
                        $scope.count++;
                    else
                        toaster.pop('error', '失败', res.msg);
                    //最后一步刷新列表
                    if ($scope.count == arr.length) {
                        $scope.getStudentList();
                    }
                }).error(function (res) {
                    toaster.pop('error', '失败', res);
                });
            };


        };





    }]);