'use strict';

/* Controllers */

app
    .controller('TeacherCtrl', ['$scope', '$modal', 'toaster', '$http', function ($scope, $modal, toaster, $http) {
        //教师列表
        $scope.page = {
            totalItems: 100,
            currentPage: 1,
            size: 10
        };
        $scope.getList = function () {
            var promise = $http({
                method: "get",
                url: $scope.app.baseurl + '?service=Teacher.getInfo',
                params: {
                    token: $scope.app.token,
                    current: $scope.page.currentPage,
                    size: $scope.page.size
                }　　　　　　
            }).success(function (res) {
                if (res.data)
                    $scope.teacherList = res.data.info;
            }).error(function (res) {
                console.log(res)
            });
            return promise;
        };
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
app.controller('TeacherAddCtrl', ['$scope', '$modalInstance', '$http', 'toaster', function ($scope, $modalInstance, $http, toaster) {
    $scope.teacher = {
        token: $scope.app.token,
        num: null,
        name: '',
        pwd: ''
    };
    $scope.ok = function () {
        if (!$scope.teacher.num || !$scope.teacher.name || !$scope.teacher.pwd) {
            toaster.pop('error', '失败', '请补全所有信息！');
        } else {
            $http({
                url: $scope.app.baseurl + '?service=Teacher.insert',
                method: 'post',
                data: $scope.teacher
            }).success(function (res) {
                toaster.pop('success', '成功', '成功添加教师！');
                $modalInstance.close();
            }).error(function (res) {
                toaster.pop('error', '失败', '添加教师失败，请联系管理员');
            });
        }

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);


app.controller('TeacherUpdateCtrl', ['$scope', '$modalInstance', '$http', 'toaster', 'teacherId', function ($scope, $modalInstance, $http, toaster, teacherId) {
    $scope.teacher = {
        token: $scope.app.token,
        id: teacherId,
        num: null,
        name: '',
        pwd: ''
    };
    $http({
        method: "get",
        url: $scope.app.baseurl + '?service=Teacher.getInfo',
        params: {
            token: $scope.app.token,
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
                url: $scope.app.baseurl + '?service=Teacher.update',
                method: 'post',
                data: $scope.teacher
            }).success(function (res) {
                toaster.pop('success', '成功', '成功编辑教师！');
                $modalInstance.close();
            }).error(function (res) {
                toaster.pop('error', '失败', '编辑教师失败，请联系管理员');
            });
        }

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);