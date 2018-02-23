'use strict';

/* Controllers */

app
    .run(['$rootScope', function ($rootScope) {
        $rootScope.app = {
            name: '学生体测管理',
            version: '1.0.0',
            nav: [],
            baseurl: 'http://127.0.0.1/PFT/api/Public/PhysicalFitnessTest/',
            token: '167ab0a0-d8b0-3333-8a83-94de807c8dff',
            settings: {
                themeID: 1,
                navbarHeaderColor: 'bg-black',
                navbarCollapseColor: 'bg-white-only',
                asideColor: 'bg-black',
                headerFixed: true,
                asideFixed: false,
                asideFolded: false,
                asideDock: false,
                container: false
            },
        }
    }])
    .controller('AppCtrl', ['$scope', '$localStorage', '$window',
        function ($scope, $translate, $localStorage, $window) {

            //菜单数据
            $scope.nav = [{
                'key': 'manage',
                'name': '管理平台',
                'icon': 'fa-cubes',
                'child': [

                    {
                        'key': 'teacher',
                        'name': '教师管理'
                    },
                    {
                        'key': 'student',
                        'name': '任务导入'
                    },
                    {
                        'key': 'distribution',
                        'name': '任务分配'
                    },
                    {
                        'key': 'progress',
                        'name': '进度查询'
                    },
                    {
                        'key': 'export',
                        'name': '全校成绩导出'
                    },
                    {
                        'key': 'clear',
                        'name': '系统清理'
                    }
                ]
            }]


        }
    ]);