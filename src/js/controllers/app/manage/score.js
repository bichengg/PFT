'use strict';

/* Controllers */

app
    .controller('ScoreCtrl', ['$scope', '$modal', 'toaster', '$http', function ($scope, $modal, toaster, $http) {
        var dates = new Date();
        $scope.year = dates.getFullYear();
        $scope.years = [];
        for (var i = 0; i < 5; i++) {
            $scope.years.push($scope.year - i)
        };
        $scope.getSubjectList = function () {
            var promise = $http({
                method: "get",
                url: $scope.app.baseurl + '?service=Subject.getInfo',
                params: {
                    token: $scope.app.token
                }
            }).success(function (res) {
                if (res.data)
                    $scope.resSubjectList = res.data.info;
            }).error(function (res) {
                console.log(res)
            });
            return promise;
        };
        $scope.status = 0;
        $scope.getList = function () {
            var promise = $http({
                method: "get",
                url: $scope.app.baseurl + '?service=Student.getInfo',
                params: {
                    token: $scope.app.token,
                    year: $scope.year,
                    status: $scope.status
                }
            }).success(function (res) {
                if (res.data)
                    $scope.resList = res.data.info;
            }).error(function (res) {
                console.log(res)
            });
            return promise;
        };
        $scope.refreshList = function () {
            var promise = $scope.getList();
            promise.then(function (res) {
                if (res.data.data.code == 0) {
                    toaster.pop('success', '成功', '成功刷新列表！')
                } else {
                    toaster.pop('error', '错误', '刷新列表失败！')
                }
            });
        }

        var tmpDown; //导出的二进制对象
        $scope.downloadExl = function (type) {
            var json = angular.copy($scope.resList);
            var tmpdata = json[0];
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdata) {
                if (k != 'id' && k != 'teacher_id' && k != 'teacher_class' && k != 'school_year' && k != 'status') {
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
                        default:
                            k_nickname = subjectTrans(k);
                            break;
                    }
                    keyMap.push(k);
                    json[0][k] = k_nickname;
                }
            }
            var tmpdata = []; //用来保存转换好的json 
            json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                v: v[k],
                position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
            }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                v: v.v
            });
            var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
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


        }

        function s2ab(s) { //字符串转字符流
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
        function getCharCol(n) {
            let temCol = '',
                s = '',
                m = 0
            while (n > 0) {
                m = n % 26 + 1
                s = String.fromCharCode(m + 64) + s
                n = (n - m) / 26
            }
            return s
        }
        // 转换测试项目 英文-》中文
        function subjectTrans(en) {
            var resSubjectList = angular.copy($scope.resSubjectList);
            var cn = '';
            for (var i = 0; i < resSubjectList.length; i++) {
                if (resSubjectList[i].column_name == en) {
                    cn = resSubjectList[i].column_comment;
                }
            }
            return cn;
        }

    }]);