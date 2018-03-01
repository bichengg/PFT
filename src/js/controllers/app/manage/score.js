'use strict';

/* Controllers */

app
    .controller('ScoreCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', 'Subject', function (APP, $scope, $modal, toaster, $http, Subject) {

        $scope.student.status = 0;
        $scope.student.size = 0;
        $scope.getScroeList().then(function () {
            $scope.getStudentList();
        });

        $scope.refreshList = function () {
            var promise = $scope.getScroeList();
            promise.then(function (res) {
                if (res.data.code == 0) {
                    toaster.pop('success', '成功', '成功刷新列表！')
                } else {
                    toaster.pop('error', '错误', '刷新列表失败！')
                }
            });
        }
    }]);