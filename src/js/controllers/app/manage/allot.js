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
        var unGet = 0;
        $scope.importStudent = function () {
            var arr = $scope.student.json;
            var i = $scope.count;
            var ele = {
                token: APP.token,
                school_year: $scope.student.year,
                teacher_id: $scope.student.teacher,
                student_code: arr[i]['student_code'],
                teacher_class: $scope.student.teacher_class
            }
            //上传
            $http({
                url: APP.baseurl + '?service=Student.update',
                method: 'post',
                data: ele
            }).success(function (res) {
                if (res.ret == 200) {
                    if (res.data == 0) {
                        unGet++;
                    }
                    $scope.count++;
                    if (i == arr.length - 1) {
                        $scope.getStudentList();
                        toaster.pop('success', '分配成功', '共分配' + $scope.count + '名学生其中有' + unGet + '名学生的学籍号未匹配到，请检查输入的学籍号是否有误~');
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

        $scope.removeTeacher = function (student_code) {
            $http({
                url: APP.baseurl + '?service=Student.update',
                method: 'post',
                data: {
                    token: APP.token,
                    school_year: $scope.student.year,
                    teacher_id: '',
                    student_code: student_code,
                    teacher_class: ''
                }
            }).success(function (res) {
                if (res.ret == 200) {
                    toaster.pop('success', '解除成功', '学籍号' + student_code + '解除老师绑定');
                    $scope.getStudentList();
                } else
                    toaster.pop('error', '失败', res.msg);

            }).error(function (res) {
                toaster.pop('error', '失败', res);
            });
        }

        $scope.addTeacher = function (student_code) {
            if ($scope.student.teacher && $scope.student.teacher_class) {
                $http({
                    url: APP.baseurl + '?service=Student.update',
                    method: 'post',
                    data: {
                        token: APP.token,
                        school_year: $scope.student.year,
                        teacher_id: $scope.student.teacher,
                        student_code: student_code,
                        teacher_class: $scope.student.teacher_class
                    }
                }).success(function (res) {
                    if (res.ret == 200) {
                        toaster.pop('success', '绑定成功', '绑定' + $scope.student.teacher + '老师');
                        $scope.getStudentList();
                    } else
                        toaster.pop('error', '失败', res.msg);

                }).error(function (res) {
                    toaster.pop('error', '失败', res);
                });
            } else {
                toaster.pop('error', '失败', '未选择老师或填写班级，请在列表上方选择老师及填入班级名称~');
            }
        }



        $scope.bindTeacherOhterWay = function (size) {
            $scope.student.json = [];
            var modalInstance = $modal.open({
                templateUrl: 'tpl/manage/allot/bind.html',
                controller: 'bindTeacherOhterWayCtrl',
                size: size
            });
            modalInstance.result.then(function (res) {
                console.log(res.length)
                if (typeof res === 'object' && res.length > 0) {
                    $scope.student.json = res;
                    $scope.importStudent();
                }
            });

        };

    }]);

app.controller('bindTeacherOhterWayCtrl', ['APP', '$scope', '$modalInstance', '$http', 'toaster', function (APP, $scope, $modalInstance, $http, toaster) {
    $scope.student = [{
        'student_code': ''
    }];
    $scope.ok = function () {
        for (var i = 0; i < $scope.student.length; i++) {
            if ($scope.student[i].student_code == '') {
                toaster.pop('error', '失败', '学籍号不能为空！');
                return;
            }
        }
        $modalInstance.close($scope.student);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);