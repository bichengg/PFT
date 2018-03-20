'use strict';

/* Controllers */

app
    .controller('LoginCtrl', ['APP', '$scope', '$http', '$state', function (APP, $scope, $http, $state) {

        if (sessionStorage.getItem('token')) {
            $state.go('app.manage.teacher');
        }
        $scope.app = APP;
        $scope.user = {}

        $scope.login = function () {
            if (!$scope.user.name || !$scope.user.name) {
                $scope.authError = '账号或密码不能为空~';
            } else {
                $scope.authError = '';
                $http({
                    url: APP.baseurl + '?service=User.checkLogin',
                    method: 'post',
                    data: {
                        username: $scope.user.name,
                        password: $scope.user.password
                    }
                }).success(function (res) {
                    if (res.data.code == 0) {
                        sessionStorage.setItem('token', res.data.info);
                        APP.token = res.data.info;
                        $state.go('app.manage.teacher');
                    } else {
                        $scope.authError = ('账号或密码错误~')
                    }
                }).error(function (res) {
                    console.log(res)
                });
            }


        }
    }]);