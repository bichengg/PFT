'use strict';

/* Controllers */

app
    .controller('TeacherCtrl', ['$scope', '$modal', '$log', '$state', function ($scope, $modal, $log, $state) {
        $scope.userlist = [{
            'id': '651002199101296309',
            'name': '艾利扎提',
            'sex': '男',
            'old': 33,
            'status': '已超期',
            'nation': '维吾尔族',
            'frequency': '循环(3天)',
            'place': '新疆维吾尔自治区伊犁哈萨克自治州伊宁市新华东路37号'
        }];
        $scope.xList = [{
            mark: '已完成',
            markCom: '哈尔滨市公安局',
            markMan: '张广军',
            type: '巡检',
            frequency: '循环(3天)',
            area: '松北区',
            policeStation: '松北区派出所',
            man: '杨伟明',
            status: '已超期',
            time: '2017-01-02 10:12:36'
        }];

        $scope.pendlist = [{
            'id': '651002199101291092',
            'name': '艾利扎提',
            'flight': 'T23',
            'time': '2017-8-16 21:12:12',
            'status': '重点关注',
            'begin': '北京',
            'end': '哈尔滨',
            'type': '铁路'
        }];
        $scope.sexClass = function (label) {
            return {
                'fa-mars text-info': label === '男',
                'fa-venus text-danger': label === '女',
            };
        };
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

        $scope.record = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/work/record.html',
                controller: 'RecordCtrl',
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
        $scope.recordAdd = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/work/recordAdd.html',
                controller: 'RecordAddCtrl',
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
        $scope.workAdd = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/work/workAdd.html',
                controller: 'WorkAddCtrl',
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
        $scope.userAdd = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/work/userAdd.html',
                controller: 'UserAddCtrl',
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
        $scope.recordList = [{
            content: '该人全家已经前往海南，伊敏先离开哈市，妻子和孩子随后离开哈市前往海南。',
            cops: '哈尔滨公安局，市局反恐怖支队，赵凯旋',
            time: '2017-01-31',
            id: '651002199101298585',
            name: '艾利扎提.艾沙江'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-30',
            id: '651002199101298585',
            name: '买买提.克里沙'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文...',
            cops: '南马派出所，孙广平',
            time: '2017-01-30',
            id: '651002199101293211',
            name: '阿姆利江.阿卜力米提'
        }, {
            content: '该人全家已经前往海南，伊敏先离开哈市，妻子和孩子随后离开哈市前往海南。',
            cops: '南马派出所，孙广平',
            time: '2017-01-29',
            id: '651002199101299023',
            name: '乌普尔.卡迪尔'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文',
            cops: '南马派出所，孙广平',
            time: '2017-01-28',
            id: '651002199101295687',
            name: '巴图尔.艾则孜'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-27',
            id: '651002199101291159',
            name: '热合曼.萨比尔'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-26',
            id: '651002199101296677',
            name: '萨迪克.艾尼'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文...',
            cops: '南马派出所，孙广平',
            time: '2017-01-25',
            id: '651002199101293617',
            name: '艾尼瓦尔.罕古丽'
        }, {
            content: '该人全家已经前往海南，伊敏先离开哈市，妻子和孩子随后离开哈市前往海南。',
            cops: '南马派出所，孙广平',
            time: '2017-01-24',
            id: '651002199101298523',
            name: '艾利扎提.热娜'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文',
            cops: '南马派出所，孙广平',
            time: '2017-01-23',
            id: '651002199101291498',
            name: '热娜.热依罕'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-22',
            id: '651002199101299996',
            name: '古丽苏如合.玛依莎'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-21',
            id: '651002199101290003',
            name: '艾利扎提.奎尼'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文...',
            cops: '南马派出所，孙广平',
            time: '2017-01-18',
            id: '651002199101290058',
            name: '玛依努尔.奎尼吐艾迪'
        }, {
            content: '该人全家已经前往海南，伊敏先离开哈市，妻子和孩子随后离开哈市前往海南。',
            cops: '南马派出所，孙广平',
            time: '2017-01-18',
            id: '651002199101290633',
            name: '阿依吐露.祖合拉'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文',
            cops: '南马派出所，孙广平',
            time: '2017-01-18',
            id: '651002199101298333',
            name: '穆罕默德.艾沙'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-16',
            id: '651002199101291123',
            name: '艾利扎提.艾沙江'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-16',
            id: '651002199101294790',
            name: '玉素甫.帕蒂曼'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文...',
            cops: '南马派出所，孙广平',
            time: '2017-01-15',
            id: '651002199101292361',
            name: '斯拉木.阿瓦罕'
        }, {
            content: '该人全家已经前往海南，伊敏先离开哈市，妻子和孩子随后离开哈市前往海南。',
            cops: '南马派出所，孙广平',
            time: '2017-01-13',
            id: '651002199101290900',
            name: '热合曼.萨比尔'
        }, {
            content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文',
            cops: '南马派出所，孙广平',
            time: '2017-01-12',
            id: '651002199101291234',
            name: '斯拉木.阿瓦罕'
        }, {
            content: '该人全家已经去大连，明天回哈。',
            cops: '南马派出所，孙广平',
            time: '2017-01-10',
            id: '651002199101295790',
            name: '阿姆利江.阿卜力'
        }];

        $scope.supervise = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'tpl/work/supervise.html',
                controller: 'RecordCtrl',
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

app.controller('RecordCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

    $scope.recordList = [{
        content: '该人全家已经前往海南，伊敏先离开哈市，妻子和孩子随后离开哈市前往海南。',
        cops: '哈尔滨公安局，市局反恐怖支队，赵凯旋',
        time: '2017-01-02'
    }, {
        content: '该人全家已经去大连，明天回哈。',
        cops: '南马派出所，孙广平',
        time: '2017-01-03'
    }, {
        content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文...',
        cops: '南马派出所，孙广平',
        time: '2017-01-03'
    }, {
        content: '该人全家已经前往海南，伊敏先离开哈市，妻子和孩子随后离开哈市前往海南。',
        cops: '南马派出所，孙广平',
        time: '2017-01-03'
    }, {
        content: '民警今天到阿布杜艾尼家中，该人和妻子在家，家中有些古兰经文',
        cops: '南马派出所，孙广平',
        time: '2017-01-03'
    }, {
        content: '该人全家已经去大连，明天回哈。',
        cops: '南马派出所，孙广平',
        time: '2017-01-03'
    }];
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

app.controller('RecordAddCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {


    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

app.controller('WorkAddCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {


    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);

app.controller('UserAddCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {


    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);