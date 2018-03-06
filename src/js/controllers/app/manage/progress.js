'use strict';

/* Controllers */

app
    .controller('ProgressCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', '$q', '$state', function (APP, $scope, $modal, toaster, $http, $q, $state) {
        //教师列表
        $scope.page = {
            totalItems: 50,
            currentPage: 1,
            size: 10
        };
        $scope.getList = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: "get",
                url: APP.baseurl + '?service=Teacher.getInfo',
                params: {
                    token: APP.token,
                    year: $scope.student.year,
                    current: $scope.page.currentPage,
                    size: $scope.page.size,
                    name: $scope.keyword
                }
            }).success(function (res) {
                deferred.resolve(res);

            }).error(function (res) {
                deferred.reject(res);
                console.log(res)
            });
            return promise;
        };
        $scope.getProgressList = function () {
            $scope.getList().then(function (res) {
                if (res.ret == 200) {
                    var teacherList = res.data.info;
                    if (teacherList.length > 0) {
                        for (var i = 0; i < teacherList.length; i++) {
                            + function (i) {
                                $http({
                                    method: "get",
                                    url: APP.baseurl + '?service=Student.getProgressInfo',
                                    params: {
                                        token: APP.token,
                                        teacher_id: teacherList[i].id
                                    }
                                }).success(function (res) {
                                    if (res.ret == 200) {
                                        teacherList[i].count = res.data.info[0].classCount;
                                        $scope.teacherList = teacherList;
                                    } else {
                                        teacherList[i].count = 0;
                                        $scope.teacherList = teacherList;
                                    }
                                }).error(function (res) {
                                    console.log(res)
                                });
                                $http({
                                    method: "get",
                                    url: APP.baseurl + '?service=Student.getProgressInfo',
                                    params: {
                                        token: APP.token,
                                        teacher_id: teacherList[i].id,
                                        is_submit: 1
                                    }
                                }).success(function (res) {
                                    if (res.ret == 200) {
                                        teacherList[i].countYes = res.data.info[0].classCount;
                                        $scope.teacherList = teacherList;
                                    } else {
                                        teacherList[i].countYes = 0;
                                        $scope.teacherList = teacherList;
                                    }
                                }).error(function (res) {
                                    console.log(res)
                                });
                            }(i);

                        }
                    } else {
                        $scope.teacherList = [];
                    }

                }
            });

        }
        $scope.getProgressList();
        $scope.goTeacher = function (t) {
            localStorage.setItem('teacher', angular.toJson(t));
            setTimeout(function () {
                $state.go('app.teacher.list');
            }, 100);
        }
    }]);