'use strict';

/* Controllers */

app
    .filter('trans2statusText', function () {
        return function (a) {
            var res = '';
            switch (a) {
                case '1':
                    res = '病假';
                    break;
                case '2':
                    res = '事假';
                    break;
                case '3':
                    res = '未参加';
                    break;
                default:
                    res = '无';
                    break;
            }
            return res;
        }
    })
    .constant('APP', {
        name: '学生体测管理',
        version: '1.0.0',
        nav: [],
        baseurl: 'api/Public/PhysicalFitnessTest/',
        token: sessionStorage.getItem('token'),
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

    .controller('AppCtrl', ['APP', '$scope', 'Subject', '$q', '$http', '$state', '$filter',
        function (APP, $scope, Subject, $q, $http, $state, $filter) {
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
                        val: -1
                    },
                    // {
                    //     key: '病假',
                    //     val: 1
                    // },
                    // {
                    //     key: '事假',
                    //     val: 2
                    // },
                    // {
                    //     key: '未参加',
                    //     val: 3
                    // }
                ],
                size: 0,
                pages: 20000,
                maxSize: 6,
                current: 1,
                json: [], //导入的数据json
                jsonReady: true, //导入的数据json ok
                resJson: [] //需要导出json
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
            $scope.getStudentList = function (stuCode) {
                var stuCode = stuCode ? stuCode : '';
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
                        current: $scope.student.current,
                        student_code: stuCode
                    }
                }).success(function (res) {
                    deferred.resolve(res);
                    if (res.data)
                        $scope.student.resJson = res.data.info;
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

            $scope.downloadExl = function (type) {
                var tmpDown; //导出的二进制对象
                var json = angular.copy($scope.student.resJson);
                var tmpdata = json[0];
                json.unshift({});
                var keyMap = []; //获取keys
                var subjectList = angular.copy($scope.resSubjectList);
                for (var k in tmpdata) {
                    if (k != 'id' && k != 'teacherId' && k != 'teacher_id' && k != 'time' && k != 'create_time' && k != 'teacherName' && k != 'teacher_class' && k != 'school_year' && k != 'is_submit' && k != 'address' && k != 'born' && k != 'nation' && k != 'grade_num' && k != 'class_num') {
                        var k_nickname = '';
                        switch (k) {
                            case 'grade_num':
                                k_nickname = '年级编号';
                                break;
                            case 'class_num':
                                k_nickname = '班级编号';
                                break;
                            case 'class_name':
                                k_nickname = '班级名称';
                                break;
                            case 'student_code':
                                k_nickname = '学籍号';
                                break;
                            case 'nation':
                                k_nickname = '民族代码';
                                break;
                            case 'name':
                                k_nickname = '姓名';
                                break;
                            case 'sex':
                                k_nickname = '性别';
                                break;
                            case 'born':
                                k_nickname = '出生日期';
                                break;
                            case 'address':
                                k_nickname = '家庭住址';
                                break;
                            case 'status':
                                k_nickname = '备注';
                                break;
                            default:
                                k_nickname = Subject.transCn(k, subjectList);
                                break;
                        }
                        keyMap.push(k);
                        json[0][k] = k_nickname;
                    }
                }
                var tmpdata = []; //用来保存转换好的json 
                var optBorder = {
                    style: 'thin',
                    color: {
                        rgb: "33333333"
                    }
                };
                json.map(function (v, i) {
                    if (i > 0)
                        v.status = $filter('trans2statusText')(v.status.toString());

                    return keyMap.map(
                        function (k, j) {
                            return Object.assign({}, {
                                v: v[k],
                                position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                            })
                        }
                    )
                }).reduce(function (prev, next) {
                    return prev.concat(next);
                }).forEach(function (v, i) {
                    return tmpdata[v.position] = {
                        v: v.v,
                        s: {
                            border: {
                                top: optBorder,
                                bottom: optBorder,
                                left: optBorder,
                                right: optBorder
                            }
                        }
                    }
                });
                var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
                tmpdata['!cols'] = [{
                    wpx: 70
                }, {
                    wpx: 85
                }];

                var tmpWB = {
                    SheetNames: ['mySheet'], //保存的表标题
                    Sheets: {
                        'mySheet': Object.assign({},
                            tmpdata, //内容
                            {
                                '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                            })
                    }
                };
                tmpDown = new Blob([s2ab(XLSX.write(tmpWB, {
                        bookType: (type == undefined ? 'xlsx' : type),
                        bookSST: false,
                        type: 'binary'
                    } //这里的数据是用来定义导出的格式类型
                ))], {
                    type: ""
                }); //创建二进制对象写入转换好的字节流
                var href = URL.createObjectURL(tmpDown); //创建对象超链接
                document.getElementById("hf").href = href; //绑定a标签
                document.getElementById("hf").click(); //模拟点击实现下载
                setTimeout(function () { //延时释放
                    URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
                }, 100);


                function s2ab(s) { //字符串转字符流
                    var buf = new ArrayBuffer(s.length);
                    var view = new Uint8Array(buf);
                    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                }
                // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
                function getCharCol(n) {
                    var temCol = '',
                        s = '',
                        m = 0;
                    while (n > 0) {
                        m = n % 26 + 1;
                        s = String.fromCharCode(m + 64) + s;
                        n = (n - m) / 26;
                    }
                    return s;
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
                        'key': 'subject',
                        'name': '体测项目管理'
                    },
                    // {
                    //     'key': 'clear',
                    //     'name': '系统清理'
                    // }
                ]
            }];

            $scope.logout = function () {
                localStorage.removeItem('teacher');
                sessionStorage.removeItem('token');
                APP.token = '';
                //$state.go('login');
                location.href = 'admins.html';
            }


        }
    ]);