"use strict";

var app = angular.module('app', [
    'ui.router',
]);

app.config(
        ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

                // lazy controller, directive and service
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;
            }
        ])

    .config(['$httpProvider', function ($httpProvider) {

        $httpProvider.defaults.transformRequest = function (obj) {
            var str = [];
            for (var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        }

        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

    }])
    .filter('trans2sex', function () {
        return function (a) {
            if (a == 1)
                return '男';
            else if (a == 2)
                return '女';
        }
    })
    .filter('trans2nation', function () {
        return function (a) {
            if (a == 1)
                return '汉族';
            else
                return '其他';
        }
    })
    .filter('trans2score', function () {
        return function (a, grade_num, sex, test) {
            if (grade_num == 41 || grade_num == 42) {
                grade_num = 4142
            } else if (grade_num == 43 || grade_num == 44) {
                grade_num = 4344
            }
            //var arr = eval('trans_' + grade_num + '_' + sex + '_' + test);
            var arr = trans_4142_1_lung;
            var res = 0;
            a = parseFloat(a);
            for (var i = 0; i < arr.length - 1; i++) {
                if (a >= arr[i].a && a < arr[i + 1].a) {
                    res = arr[i].b;
                } else if (a >= arr[i + 1].a) {
                    res = arr[i + 1].b;
                }
            }
            return res;
        }
    })
    .filter('trans2level', function () {
        return function (a) {
            var res = '';
            if (a <= 10) {
                res = '未测试'
            } else if (a > 10 && a <= 59) {
                res = '不及格'
            } else if (a > 59 && a <= 79) {
                res = '及格'
            } else if (a > 79 && a <= 89) {
                res = '良好'
            } else if (a > 89) {
                res = '优秀'
            }
            return res;
        }
    })
    .filter('trans2exPoint', function () {
        //a得分; c系数
        return function (a, c) {
            var res = 0;
            if (a > 100)
                res = (a - 100) * c;
            return res;
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
    .controller('LoginCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $scope.app = {
            name: '学生成绩查询'
        }
        $scope.user = {}
        $scope.login = function () {
            if (!$scope.user.name || !$scope.user.password) {
                $scope.authError = '账号或密码不能为空~';
            } else if ($scope.user.password.length != 8) {
                $scope.authError = '密码位数不正确~';
            } else {
                $scope.authError = '';
                $http({
                    url: 'http://127.0.0.1/PFT/api/Public/PhysicalFitnessTest/?service=User.checkLoginStudent',
                    method: 'post',
                    data: {
                        username: $scope.user.name,
                        password: trans($scope.user.password)
                    }
                }).success(function (res) {
                    if (res.data.code == 0) {
                        sessionStorage.setItem('token', angular.toJson(res.data.info));
                        $state.go('achievement');
                    } else {
                        $scope.authError = '账号或密码错误~';
                    }
                }).error(function (res) {
                    $scope.authError = res;
                });
            }
        }

        function trans(pwd) {
            if (!!pwd && pwd.length == 8) {
                pwd = pwd.replace(/(.{4})/, "$1/");
                pwd = pwd.replace(/(.{7})/, "$1/");
                return pwd
            }
        }
    }])
    .controller('AchievementCtrl', ['$scope', function ($scope) {

        $scope.today = new Date();
        $scope.info = angular.fromJson(sessionStorage.getItem('token'));

        $scope.stu = $scope.info[0];
        $scope.subjectArr = [{
            key: 'lung',
            name: '肺活量(毫升)',
            coefficient: 0.15
        }, {
            key: '50m',
            name: '50米跑(秒)',
            coefficient: 0.2
        }, {
            key: 'sr',
            name: '坐位体前屈(厘米)',
            coefficient: 0.1
        }, {
            key: 'jump',
            name: '立定跳远(厘米)',
            coefficient: 0.1
        }];

        var subjectMaleArr = [{
                key: 'pullup',
                name: '引体向上(男)/一分钟仰卧起坐(女)(次)',
                coefficient: 0.1
            }, {
                key: '1000',
                name: '1000(男)/800(女)米跑(分•秒)',
                coefficient: 0.2
            }],
            subjectFemaleArr = [{
                key: 'situp',
                name: '引体向上(男)/一分钟仰卧起坐(女)(次)',
                coefficient: 0.1
            }, {
                key: '800',
                name: '1000(男)/800(女)米跑(分•秒)',
                coefficient: 0.2
            }];

        if ($scope.stu.sex == 1) {
            $scope.subjectArr = $scope.subjectArr.concat(subjectMaleArr);
            $scope.subjectAttachArr = subjectMaleArr;
        } else {
            $scope.subjectArr = $scope.subjectArr.concat(subjectFemaleArr);
            $scope.subjectAttachArr = subjectFemaleArr;
        }
    }]);