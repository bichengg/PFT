/**
 * Config for the router
 */
app
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/app/manage/teacher');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpl/app.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('toaster');
                                }
                            ]
                        }
                    })

                    //管理平台
                    .state('app.manage', {
                        abstract: true,
                        url: '/manage',
                        template: '<div ui-view class="fade-in-left h-full"></div>'
                    })
                    .state('app.manage.teacher', {
                        url: '/teacher',
                        templateUrl: 'tpl/manage/teacher/list.html',
                        controller: 'TeacherCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/manage/teacher.js']);
                                }
                            ]
                        }
                    })
                    .state('app.manage.score', {
                        url: '/score',
                        templateUrl: 'tpl/manage/score/list.html',
                        controller: 'ScoreCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/manage/score.js']);
                                }
                            ]
                        }
                    })


            }
        ]
    );