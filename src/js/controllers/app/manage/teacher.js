'use strict';

/* Controllers */

app
    .controller('TeacherCtrl', ['$scope', '$modal', 'toaster', '$http', function ($scope, $modal, toaster, $http) {
        //教师列表
        $scope.getList = function () {
            var promise = $http({
                method: "get",
                url: "http://127.0.0.1:81/PFT/api/Public/PhysicalFitnessTest/?service=Teacher.getInfo"　　　　　　　　
            }).success(function (res) {
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




    }]);
app.controller('TeacherAddCtrl', ['$scope', '$modalInstance', '$http', 'toaster', function ($scope, $modalInstance, $http, toaster) {
    $scope.teacher = {
        num: null,
        name: '',
        pwd: ''
    };
    $scope.ok = function () {
        if (!$scope.teacher.num || !$scope.teacher.name || !$scope.teacher.pwd) {
            toaster.pop('error', '失败', '请补全所有信息！');
        } else {
            $http({
                url: 'http://127.0.0.1:81/PFT/api/Public/PhysicalFitnessTest/?service=Teacher.insert',
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