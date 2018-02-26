'use strict';

/* Controllers */

app
    .controller('StudentCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', function (APP, $scope, $modal, toaster, $http) {

        $scope.student.status = 0;
        $scope.student.size = 10;

        $scope.getStudentList();


        $scope.count = 0;
        $scope.importStudent = function () {
            var arr = $scope.jsonStudent;
            for (var i = 0; i < arr.length; i++) {
                var ele = {
                    token: APP.token,
                    school_year: $scope.student.year,
                    grade_num: arr[i]['年级编号'],
                    class_num: arr[i]['班级编号'],
                    class_name: arr[i]['班级名称'],
                    student_code: arr[i]['学籍号'],
                    nation: arr[i]['民族代码'],
                    name: arr[i]['姓名'],
                    sex: arr[i]['性别'],
                    born: arr[i]['出生日期'],
                    address: arr[i]['家庭住址'],
                    //score: '{"test_height": 100,"test_weight": 99}'
                }
                //上传
                $http({
                    url: APP.baseurl + '?service=Student.insert',
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