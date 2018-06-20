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
        if (sessionStorage.getItem('tokenStudent'))
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
                    url: 'api/Public/PhysicalFitnessTest/?service=User.checkLoginStudent',
                    method: 'post',
                    data: {
                        username: $scope.user.name,
                        password: trans($scope.user.password)
                    }
                }).success(function (res) {
                    if (res.data.code == 0) {
                        sessionStorage.setItem('tokenStudent', angular.toJson(res.data.info));
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
    .controller('AchievementCtrl', ['$scope', '$filter', '$state', function ($scope, $filter, $state) {
        if (!sessionStorage.getItem('tokenStudent'))
            $state.go('login');
        $scope.logout = function () {
            sessionStorage.removeItem('tokenStudent');
            $state.go('login');
        };
        $scope.today = new Date();
        //是否计算总分 0计算 1不计算
        $scope.isTotalScoreSum = 0;
        //
        var info = angular.fromJson(sessionStorage.getItem('tokenStudent'));
        $scope.stu = info[0];
        var tempArr = ['41', '42', '43', '44'];
        var resInfo = [];
        for (var i = 0; i < tempArr.length; i++) {
            var resInfoEle = checkStudentInfo(tempArr[i]);
            if (resInfoEle) {
                resInfo.push(resInfoEle);
            } else {
                resInfo.push({
                    grade_num: tempArr[i]
                });
                $scope.isTotalScoreSum = 1;
            }
        }

        function checkStudentInfo(num) {
            var res;
            for (var i = 0; i < info.length; i++) {
                if (info[i]['grade_num'] == num) {
                    res = info[i];
                    break;
                } else {
                    res = false;
                }
            }
            return res;
        }
        console.log(resInfo);
        $scope.info = resInfo;


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
                if ($scope.isTotalScoreSum == 0) {
                    if (i < 3) {
                        totalScoreSum += res_total / 6;
                    } else {
                        totalScoreSum += res_total / 2;
                    }
                    $scope.totalScoreSum = totalScoreSum.toFixed(2);
                } else {
                    $scope.totalScoreSum = '';
                }
                $scope.$apply();
            }

        }, 100)

    }]);