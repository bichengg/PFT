"use strict";

var app = angular.module('app', [
    'ui.router',
]);

app
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
        $scope.lists = [2322, 2566, 333]
    }]);