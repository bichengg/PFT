'use strict';

/* Controllers */

app
    .controller('Teacher2stuCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', '$q', 'Subject', function (APP, $scope, $modal, toaster, $http, $q, Subject) {
        $scope.teacher = angular.fromJson(localStorage.getItem('teacher'));
        $scope.token = sessionStorage.getItem('token');
        $scope.student.status = '';
        $scope.student.size = 0;


        $scope.getStudentListByTeacherId = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: "get",
                url: APP.baseurl + '?service=Student.getInfo',
                params: {
                    teacher_id: $scope.teacher.id,
                    year: $scope.student.year,
                    status: $scope.student.status,
                    size: $scope.student.size,
                    current: $scope.student.current,
                    teacherClass: $scope.teacher.class.teacher_class
                }
            }).success(function (res) {
                deferred.resolve(res);
                if (res.data)
                    $scope.student.resJson = res.data.info;
            }).error(function (res) {
                deferred.reject(res);
                console.log(res)
            });
            return promise;
        };
        $scope.getClassListByTeacherId = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: "get",
                url: APP.baseurl + '?service=Teacher.getClassInfo',
                params: {
                    token: $scope.token || '',
                    teacherId: $scope.teacher.id,
                    year: $scope.student.year
                }
            }).success(function (res) {
                deferred.resolve(res);
                if (res.data) {
                    $scope.classList = res.data.info;
                    $scope.teacher.class = $scope.classList[0] ? $scope.classList[0] : 0;
                }
            }).error(function (res) {
                deferred.reject(res);
                console.log(res)
            });
            return promise;
        };

        var score = {},
            scoreName = {};
        var ResSubjectList = [];

        $scope.getClassListByTeacherId().then(function () {
            $scope.getScroeList().then(function () {
                $scope.getStudentListByTeacherId();
                ResSubjectList = $scope.resSubjectList;
                if (ResSubjectList) {
                    for (var i = 0; i < ResSubjectList.length; i++) {
                        score[ResSubjectList[i].column_name] = 0;
                        scoreName[ResSubjectList[i].column_comment] = 0;
                    }
                }

            });
        });

        $scope.student.json = [];
        $scope.student.jsonReady = true;

        $scope.count = 0;


        $scope.updateStudent = function () {
            var arr = $scope.student.json;
            var i = $scope.count;
            var ele = {
                token: $scope.token || '',
                teacher_id: $scope.teacher.id,
                school_year: $scope.student.year,
                student_code: arr[i]['学籍号'],
                status: (function (s) {
                    var res = '';
                    switch (s) {
                        case '病假':
                            res = '1';
                            break;
                        case '事假':
                            res = '2';
                            break;
                        case '未参加':
                            res = '3';
                            break;
                        default:
                            res = '0';
                            break;
                    }
                    return res;
                })(arr[i]['备注']),
                score: (function (stuEle) {
                    angular.forEach(scoreName, function (i, k) {
                        var en_k = Subject.transEn(k, $scope.resSubjectList);
                        scoreName[k] = stuEle[k];
                        score[en_k] = stuEle[k];
                    });
                    return angular.toJson(score);
                })(arr[i])
            }
            //上传
            $http({
                url: APP.baseurl + '?service=Student.updateScore',
                method: 'post',
                data: ele
            }).success(function (res) {
                if (res.ret == 200) {
                    $scope.count++;
                    if (i == arr.length - 1) {
                        $scope.getStudentListByTeacherId();
                        toaster.pop('success', '更新成绩成功', '共更新' + $scope.count + '条成绩');
                        $scope.count = 0;
                        return;
                    } else {
                        $scope.updateStudent();
                    }
                } else
                    toaster.pop('error', '失败', res.msg);

            }).error(function (res) {
                toaster.pop('error', '失败', res);
            });
        };
        //
        $scope.submitStudent = function () {
            var ele = {
                teacher_id: $scope.teacher.id,
                school_year: $scope.student.year,
                teacher_class: $scope.teacher.class.teacher_class
            }
            //上传
            $http({
                url: APP.baseurl + '?service=Student.submitScore',
                method: 'post',
                data: ele
            }).success(function (res) {
                if (res.ret == 200) {
                    toaster.pop('success', '提交成绩成功', '已提交【' + $scope.teacher.class.teacher_class + '】的成绩');
                    $scope.teacher.class.is_submit = 1;
                } else
                    toaster.pop('error', '失败', res.msg);

            }).error(function (res) {
                toaster.pop('error', '失败', res);
            });
        };
        //
        $scope.unlock = function () {
            var ele = {
                token: $scope.token || '',
                teacher_id: $scope.teacher.id,
                school_year: $scope.student.year,
                teacher_class: $scope.teacher.class.teacher_class
            }
            //上传
            $http({
                url: APP.baseurl + '?service=Student.backSubmitScore',
                method: 'post',
                data: ele
            }).success(function (res) {
                if (res.ret == 200) {
                    toaster.pop('success', '解锁成功', '【' + $scope.teacher.class.teacher_class + '】的成绩已解锁');
                    $scope.teacher.class.is_submit = 0;
                } else
                    toaster.pop('error', '失败', res.msg);

            }).error(function (res) {
                toaster.pop('error', '失败', res);
            });
        };

        function transEle(stuEle) {
            angular.forEach(scoreName, function (i, k) {
                var en_k = Subject.transEn(k, copyResSubjectList);
                scoreName[k] = stuEle[k];
                score[en_k] = stuEle[k];
            });
            console.log(score, scoreName)
        }


        $scope.updateDetail = function (stu, size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/teacher/update.html',
                controller: 'TeacherUpdateStudentScoreDetailCtrl',
                size: size,
                resolve: {
                    stu: function () {
                        return stu;
                    },
                    subjectList: function () {
                        return $scope.resSubjectList;
                    }
                }
            });
            modalInstance.result.then(function (res) {
                $scope.getStudentListByTeacherId();
            });

        };


    }]);


app.controller('TeacherUpdateStudentScoreDetailCtrl', ['APP', '$scope', '$modalInstance', '$http', 'toaster', 'stu', 'subjectList', function (APP, $scope, $modalInstance, $http, toaster, stu, subjectList) {

    $scope.stu = stu;
    $scope.subjectList = subjectList;
    $scope.token = sessionStorage.getItem('token');

    $scope.ok = function () {
        var ele = {
            token: $scope.token || '',
            teacher_id: stu.teacher_id,
            school_year: stu.school_year,
            student_code: stu.student_code,
            status: stu.status,
            score: (function (stuEle) {
                var score = {};
                angular.forEach(stuEle, function (i, k) {
                    if (k.indexOf("test_") >= 0) {
                        score[k] = stuEle[k];
                    }
                });
                return angular.toJson(score);
            })(stu)
        }
        $http({
            url: APP.baseurl + '?service=Student.updateScore',
            method: 'post',
            data: ele
        }).success(function (res) {
            if (res.ret == 200)
                toaster.pop('success', '成功', '成功编辑成绩！');
            else
                toaster.pop('error', '失败', res.msg);
            $modalInstance.close();
        }).error(function (res) {
            toaster.pop('error', '失败', res);
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);