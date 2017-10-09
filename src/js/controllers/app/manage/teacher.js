'use strict';

/* Controllers */

app
    .controller('TeacherCtrl', ['$scope', '$modal', '$log', '$state', function ($scope, $modal, $log, $state) {
        $scope.teacherList = [{
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, {
            'id': '1',
            'num': '13001577',
            'name': '张三',
            'pwd': 'x1231',
            'ctime': '2017-10-09',
        }, ];
        $scope.open = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/work/detail.html',
                controller: 'WorkDetailCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };




    }]);
app.controller('WorkDetailCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);