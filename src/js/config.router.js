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
                    .otherwise('/login');
                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'tpl/login.html',
                        controller: 'LoginCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/login.js']);
                                }
                            ]
                        }
                    })
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
                        cache: false,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/manage/teacher.js']);
                                }
                            ]
                        }
                    })
                    .state('app.manage.student', {
                        url: '/student',
                        templateUrl: 'tpl/manage/student/list.html',
                        controller: 'StudentCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/manage/student.js']);
                                }
                            ]
                        }
                    })
                    .state('app.manage.allot', {
                        url: '/allot',
                        templateUrl: 'tpl/manage/allot/list.html',
                        controller: 'AllotCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/manage/allot.js']);
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
                    .state('app.manage.progress', {
                        url: '/progress',
                        templateUrl: 'tpl/manage/progress/list.html',
                        controller: 'ProgressCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/manage/progress.js']);
                                }
                            ]
                        }
                    })
                    .state('app.manage.subject', {
                        url: '/subject',
                        templateUrl: 'tpl/manage/subject/list.html',
                        controller: 'SubjectCtrl',
                        cache: false,
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/manage/subject.js']);
                                }
                            ]
                        }
                    })
                    .state('app.teacher', {
                        abstract: true,
                        url: '/teacher',
                        template: '<div ui-view class="fade-in-left h-full"></div>'
                    })
                    .state('app.teacher.list', {
                        url: '/list',
                        templateUrl: 'tpl/teacher/list.html',
                        controller: 'Teacher2stuCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(['src/js/controllers/app/teacher/teacher.js']);
                                }
                            ]
                        }
                    })
            }
        ]
    );