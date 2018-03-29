"use strict";

var app = angular.module('app', [
    'ui.router',
]);

app
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
            var arr = eval('trans_' + grade_num + '_' + sex + '_' + test);
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
    .filter('transBMI2score', function () {
        //a得分; sex性别
        return function (a, sex) {
            var res = 0;
            if (sex == 1) {
                if (a > 17.9 && a <= 23.9)
                    res = 100;
                else if (a <= 17.8)
                    res = 80;
                else if (a > 24 && a <= 27.9)
                    res = 80;
                else if (a >= 28)
                    res = 60;
                else
                    res = 0;
            } else {
                if (a > 17.2 && a <= 23.9)
                    res = 100;
                else if (a <= 17.1)
                    res = 80;
                else if (a > 24 && a <= 27.9)
                    res = 80;
                else if (a >= 28)
                    res = 60;
                else
                    res = 0;
            }
            return res;
        }
    })
    .filter('transBMI2level', function () {
        //a得分; sex性别
        return function (a, sex) {
            var res = '';
            if (sex == 1) {
                if (a > 17.9 && a <= 23.9)
                    res = '正常';
                else if (a <= 17.8)
                    res = '低体重';
                else if (a > 24 && a <= 27.9)
                    res = '超重';
                else if (a >= 28)
                    res = '肥胖';
                else
                    res = '无';
            } else {
                if (a > 17.2 && a <= 23.9)
                    res = '正常';
                else if (a <= 17.1)
                    res = '低体重';
                else if (a > 24 && a <= 27.9)
                    res = '超重';
                else if (a >= 28)
                    res = '肥胖';
                else
                    res = '无';
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
    .filter('transScore2not100', function () {
        //a得分
        return function (a) {
            if (a >= 100)
                return 100;
            else
                return a;
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
                        templateUrl: 'transcript/login.html',
                        controller: 'LoginCtrl',
                    })
                    .state('achievement', {
                        url: '/achievement',
                        templateUrl: 'transcript/achievement.html',
                        controller: 'AchievementCtrl',
                        cache: false
                    })
            }
        ]
    )

    .controller('AppCtrl', ['$scope', function ($scope) {

    }])
    .controller('LoginCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        if (sessionStorage.getItem('token'))
            $state.go('achievement');
        $scope.app = {
            name: '学生成绩查询'
        }
        $scope.user = {};
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
    .controller('AchievementCtrl', ['$scope', '$filter', function ($scope, $filter) {

        $scope.today = new Date();
        $scope.info = angular.fromJson(sessionStorage.getItem('token'));

        $scope.stu = $scope.info[0];
        // for (var i = 0; i < $scope.info.length; i++) {
        //     const element = $scope.info[i];

        // }

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

        setTimeout(function () {
            var standardScoreArr = [],
                totalScoreArr = [],
                totalScoreSum = 0;
            for (var i = 0; i < 4; i++) {
                var $dom = $('.4' + (i + 1));
                var res = 0,
                    res_attach = 0,
                    res_total = 0;
                //标准分
                for (var j = 0; j < $dom.length; j++) {
                    res += parseFloat($dom.eq(j).html() * $dom.eq(j).attr('c'));
                }
                standardScoreArr.push(res.toFixed(2));
                $scope.standardScore = standardScoreArr;
                //附加分
                var $dom_attach = $('.4' + (i + 1) + '_attach');
                for (var k = 0; k < $dom_attach.length; k++) {
                    res_attach += parseFloat($dom_attach.eq(k).html());
                }
                //总分=标准分+附加分
                res_total = res + res_attach;
                totalScoreArr.push(res_total.toFixed(2));
                $scope.totalScore = totalScoreArr;
                if (i < 3) {
                    totalScoreSum += res_total / 6;
                } else {
                    totalScoreSum += res_total / 2;
                }
                $scope.totalScoreSum = totalScoreSum.toFixed(2);
                $scope.$apply();
            }

        }, 100)

    }]);