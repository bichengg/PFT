"use strict";
app
    .filter('trans_4142_male_lung', function () {
        return function (a) {
            var res = 0;
            if (a == 2300) {
                alert(1)
                res = 10;
            } else if (a > 2300 && a <= 2460) {
                res = 20;
            } else if (a > 2460 && a <= 2620) {
                res = 30;
            } else {
                res = 0;
            }
            return res;
        }
    })