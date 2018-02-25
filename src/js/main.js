'use strict';

/* Controllers */

app
    .constant('APP', {
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
            asideFixed: true,
            asideFolded: false,
            asideDock: false,
            container: false
        },
        hideAside: false,
        hideFooter: true
    })

    .controller('AppCtrl', ['APP', '$scope', '$localStorage', '$window',
        function (APP, $scope, $translate, $localStorage, $window) {
            $scope.app = APP;
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
                        'key': 'score',
                        'name': '全校成绩导出'
                    },
                    {
                        'key': 'clear',
                        'name': '系统清理'
                    }
                ]
            }];

            $scope.statusList = [
                {
                    key: '全部',
                    val: ''
                },
                {
                    key: '有成绩',
                    val: 0
                },
                {
                    key: '有备注',
                    val: 1
                },
                {
                    key: '无结果',
                    val: 2
                }
            ];


        }
    ]);