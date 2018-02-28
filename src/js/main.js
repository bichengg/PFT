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

    .controller('AppCtrl', ['APP', '$scope', 'Subject', '$q', '$http',
        function (APP, $scope, Subject, $q, $http) {
            //配置项赋值
            $scope.app = APP;
            var dates = new Date();
            //
            $scope.student = {
                year: dates.getFullYear(),
                years: [],
                status: 0,
                statusList: [{
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
                ],
                size: 0,
                pages: 20000,
                maxSize: 6,
                current: 1,
                json: [],
                jsonReady: true
            };
            for (var i = 0; i < 5; i++) {
                $scope.student.years.push($scope.student.year - i);
            };
            //
            $scope.getScroeList = function () {
                var deferred = $q.defer();
                var promise = deferred.promise;
                Subject.getList().then(function (res) {
                    $scope.resSubjectList = res.data.info;
                    deferred.resolve(res);

                });
                return promise;
            };
            $scope.getStudentList = function () {
                var deferred = $q.defer();
                var promise = deferred.promise;
                $http({
                    method: "get",
                    url: APP.baseurl + '?service=Student.getInfo',
                    params: {
                        token: APP.token,
                        year: $scope.student.year,
                        status: $scope.student.status,
                        size: $scope.student.size,
                        current: $scope.student.current
                    }
                }).success(function (res) {
                    deferred.resolve(res);
                    if (res.data)
                        $scope.resList = res.data.info;
                }).error(function (res) {
                    deferred.reject(res);
                    console.log(res)
                });
                return promise;
            };

            $scope.importf = function (obj) { //导入
                var wb; //读取完成的数据
                var rABS = false; //是否将文件读取为二进制字符串
                if (!obj.files) {
                    return;
                }
                var f = obj.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    if (rABS) {
                        wb = XLSX.read(btoa(fixdata(data)), { //手动转化
                            type: 'base64'
                        });
                    } else {
                        wb = XLSX.read(data, {
                            type: 'binary'
                        });
                    }
                    //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
                    //wb.Sheets[Sheet名]获取第一个Sheet的数据
                    $scope.student.json = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                    $scope.student.jsonReady = false;
                    $scope.$apply();
                };
                if (rABS) {
                    reader.readAsArrayBuffer(f);
                } else {
                    reader.readAsBinaryString(f);
                }

                function fixdata(data) { //文件流转BinaryString
                    var o = "",
                        l = 0,
                        w = 10240;
                    for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w,
                        l * w + w)));
                    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
                    return o;
                }
            }

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
                        'key': 'allot',
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




        }
    ]);