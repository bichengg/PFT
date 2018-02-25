'use strict';

/* Controllers */

app
    .controller('StudentCtrl', ['APP', '$scope', '$modal', 'toaster', '$http', function (APP, $scope, $modal, toaster, $http) {
        $scope.getStudentList();


        $scope.count = 0;
        $scope.importStudent = function () {
            var arr = $scope.jsonStudent;
            for (var i = 0; i < arr.length; i++) {
                var ele = {
                    token: APP.token,
                    school_year: $scope.year,
                    grade_num: arr[i]['年级编号'],
                    class_num: arr[i]['班级编号'],
                    class_name: arr[i]['班级名称'],
                    student_code: arr[i]['学籍号'],
                    nation: arr[i]['民族代码'],
                    name: arr[i]['姓名'],
                    sex: arr[i]['性别'],
                    born: arr[i]['出生日期'],
                    address: arr[i]['家庭住址'],
                    //score: '{"test_height": 100,"test_weight": 99}'
                }
                //上传
                $http({
                    url: APP.baseurl + '?service=Student.insert',
                    method: 'post',
                    data: ele
                }).success(function (res) {
                    if (res.ret == 200)
                        $scope.count++;
                    else
                        toaster.pop('error', '失败', res.msg);
                    //最后一步刷新列表
                    if ($scope.count == arr.length) {
                        $scope.getStudentList();
                    }
                }).error(function (res) {
                    toaster.pop('error', '失败', res);
                });
            };


        };
        var wb; //读取完成的数据
        var rABS = false; //是否将文件读取为二进制字符串
        $scope.importf = function (obj) { //导入

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
                $scope.jsonStudent = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                $scope.$apply()
            };
            if (rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }
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

    }]);



