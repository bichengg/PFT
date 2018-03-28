"use strict";

var app = angular.module('app', [
    'ui.router',
]);

app
    .filter('trans2score', function () {
        return function (a, grade_num, sex, test) {
            if (grade_num == 41 || grade_num == 42) {
                grade_num = 4142
            } else if (grade_num == 43 || grade_num == 44) {
                grade_num = 4344
            }
            var arr = eval('trans_' + grade_num + '_' + sex + '_' + test);
            for (var i = 0; i < arr.length; i++) {
                if (a >= arr[i].a && a < arr[i + 1].a) {
                    return arr[i].b;
                }
            }
        }
    })
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/login');
                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'login.html',
                        controller: 'LoginCtrl',
                    })
                    .state('achievement', {
                        url: '/achievement',
                        templateUrl: 'achievement.html',
                        controller: 'AchievementCtrl',
                        cache: false
                    })
            }
        ]
    )

    .controller('AppCtrl', ['$scope', function ($scope) {

    }])
    .controller('LoginCtrl', ['$scope', function ($scope) {

        $scope.app = {
            name: '学生成绩查询'
        }
    }])
    .controller('AchievementCtrl', ['$scope', function ($scope) {
        $scope.lists = [1800, 2566, 333]
    }]);