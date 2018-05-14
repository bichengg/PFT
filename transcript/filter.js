app.filter('trans2sex', function () {
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
            try {
                var arr = eval('trans_' + grade_num + '_' + sex + '_' + test);
            } catch (error) {
                return 0;
            }
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
                    res = '';
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
                    res = '';
            }
            return res;
        }
    })
    .filter('trans2level', function () {
        return function (a) {
            var res = '';
            if (a >= 0) {
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