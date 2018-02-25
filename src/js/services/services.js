app
  .service('$subject', ['APP', '$http', function (APP, $http) {
    // 转换体侧项目 英文-》中文
    this.transCn = function (en, arrs) {
      var cn = '';
      for (var i = 0; i < arrs.length; i++) {
        if (arrs[i].column_name == en) {
          cn = arrs[i].column_comment;
        }
      }
      return cn;
    };
    //返回体侧项目列表
    this.getList = function () {
      var promise = $http({
        method: "get",
        url: APP.baseurl + '?service=Subject.getInfo',
        params: {
          token: APP.token
        }
      }).success(function (res) {
        if (res.data)
          return res.data.info;
      }).error(function (res) {
        console.log(res)
      });
    };
  }]);