'use strict';

/* Controllers */

app
    .controller('TeacherCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', function (APP, $scope, $modal, toaster, $http) {
        //教师列表
        $scope.page = {
            totalItems: 50,
            currentPage: 1,
            size: 10
        };
        $scope.getList = function () {
            var promise = $http({
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
                if (res.data)
                    $scope.teacherList = res.data.info;
            }).error(function (res) {
                console.log(res)
            });
            return promise;
        };
        $scope.getList();
        $scope.refreshList = function () {
            var promise = $scope.getList();
            promise.then(function (res) {
                if (res.data.data.code == 0) {
                    toaster.pop('success', '成功', '成功刷新教师列表！')
                } else {
                    toaster.pop('error', '错误', '刷新教师列表失败！')
                }
            });
        }
        $scope.add = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/manage/teacher/add.html',
                controller: 'TeacherAddCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then(function (res) {
                $scope.getList()
            });

        };
        $scope.update = function (teacherId, size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/manage/teacher/update.html',
                controller: 'TeacherUpdateCtrl',
                size: size,
                resolve: {
                    teacherId: function () {
                        return teacherId;
                    }
                }
            });
            modalInstance.result.then(function (res) {
                $scope.getList();
            });

        };




    }]);
app.controller('TeacherAddCtrl', ['APP', '$scope', '$modalInstance', '$http', 'toaster', function (APP, $scope, $modalInstance, $http, toaster) {
    $scope.teacher = {
        num: null,
        name: '',
        pwd: '',
        year: (new Date()).getFullYear()
    };
    $scope.ok = function () {
        if (!$scope.teacher.num || !$scope.teacher.name || !$scope.teacher.pwd) {
            toaster.pop('error', '失败', '请补全所有信息！');
        } else {
            $http({
                url: APP.baseurl + '?service=Teacher.insert',
                method: 'post',
                data: angular.extend({}, $scope.teacher, {
                    token: APP.token
                })
            }).success(function (res) {
                if (res.ret == 200)
                    toaster.pop('success', '成功', '成功添加教师！');
                else
                    toaster.pop('error', '失败', res.msg);
                $modalInstance.close();
            }).error(function (res) {
                toaster.pop('error', '失败', res);
            });
        }

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);


app.controller('TeacherUpdateCtrl', ['APP', '$scope', '$modalInstance', '$http', 'toaster', 'teacherId', function (APP, $scope, $modalInstance, $http, toaster, teacherId) {
    $scope.teacher = {
        id: teacherId,
        num: null,
        name: '',
        pwd: ''
    };
    $http({
        method: "get",
        url: APP.baseurl + '?service=Teacher.getInfo',
        params: {
            token: APP.token,
            id: teacherId
        }
    }).success(function (res) {
        $scope.teacher = res.data.info;
    }).error(function (res) {
        console.log(res)
    });
    $scope.ok = function () {
        if (!$scope.teacher.num || !$scope.teacher.name || !$scope.teacher.pwd) {
            toaster.pop('error', '失败', '请补全所有信息！');
        } else {
            $http({
                url: APP.baseurl + '?service=Teacher.update',
                method: 'post',
                data: angular.extend({}, $scope.teacher, {
                    token: APP.token
                })
            }).success(function (res) {
                if (res.ret == 200)
                    toaster.pop('success', '成功', '成功编辑教师！');
                else
                    toaster.pop('error', '失败', res.msg);
                $modalInstance.close();
            }).error(function (res) {
                toaster.pop('error', '失败', res);
            });
        }

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);