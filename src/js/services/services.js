app
  .service('Subject', ['APP', '$http', '$q', function (APP, $http, $q) {
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
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http({
        method: "get",
        url: APP.baseurl + '?service=Subject.getInfo',
        params: {
          token: APP.token
        }
      }).success(function (res) {
        deferred.resolve(res);
      }).error(function (res) {
        deferred.reject(res);
      });
      return promise;
    };
  }]);