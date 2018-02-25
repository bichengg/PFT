"use strict";var app=angular.module("app",["ngAnimate","ngCookies","ngResource","ngStorage","ui.router","ui.bootstrap","ui.load","ui.jq","ui.validate","oc.lazyLoad"]);app.config(["$controllerProvider","$compileProvider","$filterProvider","$provide",function(e,n,a,r){app.controller=e.register,app.directive=n.directive,app.filter=a.register,app.factory=r.factory,app.service=r.service,app.constant=r.constant,app.value=r.value}]).config(["$httpProvider",function(e){e.defaults.transformRequest=function(e){var n=[];for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return n.join("&")},e.defaults.headers.post={"Content-Type":"application/x-www-form-urlencoded"}}]),app.constant("JQ_CONFIG",{easyPieChart:["vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js"],sparkline:["vendor/jquery/charts/sparkline/jquery.sparkline.min.js"],plot:["vendor/jquery/charts/flot/jquery.flot.min.js","vendor/jquery/charts/flot/jquery.flot.resize.js","vendor/jquery/charts/flot/jquery.flot.tooltip.min.js","vendor/jquery/charts/flot/jquery.flot.spline.js","vendor/jquery/charts/flot/jquery.flot.orderBars.js","vendor/jquery/charts/flot/jquery.flot.pie.min.js"],slimScroll:["../../lib/jquery-slimscroll/jquery.slimscroll.min.js"],sortable:["vendor/jquery/sortable/jquery.sortable.js"],nestable:["vendor/jquery/nestable/jquery.nestable.js","vendor/jquery/nestable/nestable.css"],filestyle:["vendor/jquery/file/bootstrap-filestyle.min.js"],slider:["vendor/jquery/slider/bootstrap-slider.js","vendor/jquery/slider/slider.css"],chosen:["vendor/jquery/chosen/chosen.jquery.min.js","vendor/jquery/chosen/chosen.css"],TouchSpin:["vendor/jquery/spinner/jquery.bootstrap-touchspin.min.js","vendor/jquery/spinner/jquery.bootstrap-touchspin.css"],wysiwyg:["vendor/jquery/wysiwyg/bootstrap-wysiwyg.js","vendor/jquery/wysiwyg/jquery.hotkeys.js"],dataTable:["vendor/jquery/datatables/jquery.dataTables.min.js","vendor/jquery/datatables/dataTables.bootstrap.js","vendor/jquery/datatables/dataTables.bootstrap.css"],vectorMap:["vendor/jquery/jvectormap/jquery-jvectormap.min.js","vendor/jquery/jvectormap/jquery-jvectormap-world-mill-en.js","vendor/jquery/jvectormap/jquery-jvectormap-us-aea-en.js","vendor/jquery/jvectormap/jquery-jvectormap.css"],footable:["vendor/jquery/footable/footable.all.min.js","vendor/jquery/footable/footable.core.css"]}).config(["$ocLazyLoadProvider",function(e){e.config({debug:!1,events:!0,modules:[{name:"ngGrid",files:["vendor/modules/ng-grid/ng-grid.min.js","vendor/modules/ng-grid/ng-grid.min.css","vendor/modules/ng-grid/theme.css"]},{name:"ui.select",files:["vendor/modules/angular-ui-select/select.min.js","vendor/modules/angular-ui-select/select.min.css"]},{name:"angularFileUpload",files:["vendor/modules/angular-file-upload/angular-file-upload.min.js"]},{name:"ui.calendar",files:["vendor/modules/angular-ui-calendar/calendar.js"]},{name:"ngImgCrop",files:["vendor/modules/ngImgCrop/ng-img-crop.js","vendor/modules/ngImgCrop/ng-img-crop.css"]},{name:"angularBootstrapNavTree",files:["libs/angular-bootstrap-nav-tree/abn_tree_directive.js","libs/angular-bootstrap-nav-tree/abn_tree.css"]},{name:"toaster",files:["libs/angularjs-toaster/toaster.js","libs/angularjs-toaster/toaster.css"]},{name:"textAngular",files:["vendor/modules/textAngular/textAngular-sanitize.min.js","vendor/modules/textAngular/textAngular.min.js"]},{name:"vr.directives.slider",files:["vendor/modules/angular-slider/angular-slider.min.js","vendor/modules/angular-slider/angular-slider.css"]},{name:"com.2fdevs.videogular",files:["vendor/modules/videogular/videogular.min.js"]},{name:"com.2fdevs.videogular.plugins.controls",files:["vendor/modules/videogular/plugins/controls.min.js"]},{name:"com.2fdevs.videogular.plugins.buffering",files:["vendor/modules/videogular/plugins/buffering.min.js"]},{name:"com.2fdevs.videogular.plugins.overlayplay",files:["vendor/modules/videogular/plugins/overlay-play.min.js"]},{name:"com.2fdevs.videogular.plugins.poster",files:["vendor/modules/videogular/plugins/poster.min.js"]},{name:"com.2fdevs.videogular.plugins.imaads",files:["vendor/modules/videogular/plugins/ima-ads.min.js"]},{name:"ngEcharts",files:["vendor/modules/ng-echarts/echarts.min.js"]},{name:"ngAmap",files:["vendor/modules/ng-amap/amap.js","http://webapi.amap.com/maps?v=1.3&key=471ac3e24922c1ef15c0f61fdd0af0e1"]}]})}]),app.run(["$rootScope","$state","$stateParams",function(e,n,a){e.$state=n,e.$stateParams=a}]).config(["$stateProvider","$urlRouterProvider",function(e,n){n.otherwise("/app/manage/teacher"),e.state("app",{abstract:!0,url:"/app",templateUrl:"tpl/app.html",resolve:{deps:["$ocLazyLoad",function(e){return e.load("toaster")}]}}).state("app.manage",{abstract:!0,url:"/manage",template:'<div ui-view class="fade-in-left h-full"></div>'}).state("app.manage.teacher",{url:"/teacher",templateUrl:"tpl/manage/teacher/list.html",controller:"TeacherCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/teacher.js"])}]}}).state("app.manage.score",{url:"/score",templateUrl:"tpl/manage/score/list.html",controller:"ScoreCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/score.js"])}]}})}]),app.constant("APP",{name:"学生体测管理",version:"1.0.0",nav:[],baseurl:"http://127.0.0.1/PFT/api/Public/PhysicalFitnessTest/",token:"167ab0a0-d8b0-3333-8a83-94de807c8dff",settings:{themeID:1,navbarHeaderColor:"bg-black",navbarCollapseColor:"bg-white-only",asideColor:"bg-black",headerFixed:!0,asideFixed:!0,asideFolded:!1,asideDock:!1,container:!1},hideAside:!1,hideFooter:!0}).controller("AppCtrl",["APP","$scope","$localStorage","$window",function(e,n,a,r,t){n.app=e,n.nav=[{key:"manage",name:"管理平台",icon:"fa-cubes",child:[{key:"teacher",name:"教师管理"},{key:"student",name:"任务导入"},{key:"distribution",name:"任务分配"},{key:"progress",name:"进度查询"},{key:"score",name:"全校成绩导出"},{key:"clear",name:"系统清理"}]}],n.statusList=[{key:"全部",val:""},{key:"有成绩",val:0},{key:"有备注",val:1},{key:"无结果",val:2}]}]),app.service("$subject",["APP","$http",function(e,n){this.transCn=function(e,n){for(var a="",r=0;r<n.length;r++)n[r].column_name==e&&(a=n[r].column_comment);return a},this.getList=function(){n({method:"get",url:e.baseurl+"?service=Subject.getInfo",params:{token:e.token}}).success(function(e){if(e.data)return e.data.info}).error(function(e){console.log(e)})}}]),angular.module("ui.load",[]).service("uiLoad",["$document","$q","$timeout",function(e,n,a){var r=[],t=!1,o=n.defer();this.load=function(e){e=angular.isArray(e)?e:e.split(/\s+/);var n=this;return t||(t=o.promise),angular.forEach(e,function(e){t=t.then(function(){return e.indexOf(".css")>=0?n.loadCSS(e):n.loadScript(e)})}),o.resolve(),t},this.loadScript=function(t){if(r[t])return r[t].promise;var o=n.defer(),i=e[0].createElement("script");return i.src=t,i.onload=function(e){a(function(){o.resolve(e)})},i.onerror=function(e){a(function(){o.reject(e)})},e[0].body.appendChild(i),r[t]=o,o.promise},this.loadCSS=function(t){if(r[t])return r[t].promise;var o=n.defer(),i=e[0].createElement("link");return i.rel="stylesheet",i.type="text/css",i.href=t,i.onload=function(e){a(function(){o.resolve(e)})},i.onerror=function(e){a(function(){o.reject(e)})},e[0].head.appendChild(i),r[t]=o,o.promise}}]),angular.module("app").directive("setNgAnimate",["$animate",function(e){return{link:function(n,a,r){n.$watch(function(){return n.$eval(r.setNgAnimate,n)},function(n,r){e.enabled(!!n,a)})}}}]),angular.module("app").directive("uiButterbar",["$rootScope","$anchorScroll",function(e,n){return{restrict:"AC",template:'<span class="bar"></span>',link:function(e,a,r){a.addClass("butterbar hide"),e.$on("$stateChangeStart",function(e){n(),a.removeClass("hide").addClass("active")}),e.$on("$stateChangeSuccess",function(e,n,r,t){e.targetScope.$watch("$viewContentLoaded",function(){a.addClass("hide").removeClass("active")})})}}}]),angular.module("app").directive("uiFocus",function(e,n){return{link:function(a,r,t){var o=n(t.uiFocus);a.$watch(o,function(n){!0===n&&e(function(){r[0].focus()})}),r.bind("blur",function(){a.$apply(o.assign(a,!1))})}}}),angular.module("app").directive("uiFullscreen",["uiLoad","$document","$window",function(e,n,a){return{restrict:"AC",template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',link:function(a,r,t){r.addClass("hide"),e.load("../../lib/screenfull/screenfull.min.js").then(function(){screenfull.enabled&&!navigator.userAgent.match(/Trident.*rv:11\./)&&r.removeClass("hide"),r.on("click",function(){var e;t.target&&(e=$(t.target)[0]),screenfull.toggle(e)}),n.on(screenfull.raw.fullscreenchange,function(){screenfull.isFullscreen?r.addClass("active"):r.removeClass("active")})})}}}]),angular.module("ui.jq",["ui.load"]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","JQ_CONFIG","uiLoad","$timeout",function(e,n,a,r){return{restrict:"A",compile:function(t,o){if(!angular.isFunction(t[o.uiJq])&&!n[o.uiJq])throw new Error('ui-jq: The "'+o.uiJq+'" function does not exist');var i=e&&e[o.uiJq];return function(e,t,o){function s(){var n=[];return o.uiOptions?(n=e.$eval("["+o.uiOptions+"]"),angular.isObject(i)&&angular.isObject(n[0])&&(n[0]=angular.extend({},i,n[0]))):i&&(n=[i]),n}function l(){r(function(){t[o.uiJq].apply(t,s())},0,!1)}function u(){o.uiRefresh&&e.$watch(o.uiRefresh,function(){l()})}o.ngModel&&t.is("select,input,textarea")&&t.bind("change",function(){t.trigger("input")}),n[o.uiJq]?a.load(n[o.uiJq]).then(function(){l(),u()}).catch(function(){}):(l(),u())}}}}]),angular.module("app").directive("uiModule",["MODULE_CONFIG","uiLoad","$compile",function(e,n,a){return{restrict:"A",compile:function(r,t){var o=r.contents().clone();return function(r,t,i){t.contents().remove(),n.load(e[i.uiModule]).then(function(){a(o)(r,function(e,n){t.append(e)})})}}}}]),angular.module("app").directive("uiNav",["$timeout",function(e){return{restrict:"AC",link:function(e,n,a){var r,t=$(window),o=$(".app-aside");n.on("click","a",function(e){r&&r.trigger("mouseleave.nav");var n=$(this);n.parent().siblings(".active").toggleClass("active"),n.next().is("ul")&&n.parent().toggleClass("active")&&e.preventDefault(),n.next().is("ul")||t.width()<768&&$(".app-aside").removeClass("show off-screen")}),n.on("mouseenter","a",function(e){if(r&&r.trigger("mouseleave.nav"),$("> .nav",o).remove(),!(!$(".app-aside-fixed.app-aside-folded").length||t.width()<768||$(".app-aside-dock").length)){var n,a=$(e.target),i=$(window).height();!a.is("a")&&(a=a.closest("a")),a.next().is("ul")&&(r=a.next(),a.parent().addClass("active"),n=a.parent().position().top+50,r.css("top",n),n+r.height()>i&&r.css("bottom",0),n+150>i&&r.css("bottom",i-n-50).css("top","auto"),r.appendTo(o),r.on("mouseleave.nav",function(e){$(".dropdown-backdrop").remove(),r.appendTo(a.parent()),r.off("mouseleave.nav").css("top","auto").css("bottom","auto"),a.parent().removeClass("active")}),$(".smart").length&&$('<div class="dropdown-backdrop"/>').insertAfter(".app-aside").on("click",function(e){e&&e.trigger("mouseleave.nav")}))}}),o.on("mouseleave",function(e){r&&r.trigger("mouseleave.nav"),$("> .nav",o).remove()})}}}]),angular.module("app").directive("uiScroll",["$location","$anchorScroll",function(e,n){return{restrict:"AC",link:function(a,r,t){r.on("click",function(a){e.hash(t.uiScroll),n()})}}}]),angular.module("app").directive("uiShift",["$timeout",function(e){return{restrict:"A",link:function(n,a,r){function t(){e(function(){var e=r.uiShift,n=r.target;s.hasClass("in")||s[e](n).addClass("in")})}function o(){i&&i.prepend(a),!i&&s.insertAfter(u),s.removeClass("in")}var i,s=$(a),l=$(window),u=s.prev(),c=l.width();!u.length&&(i=s.parent()),c<768&&t()||o(),l.resize(function(){c!==l.width()&&e(function(){l.width()<768&&t()||o(),c=l.width()})})}}}]),angular.module("app").directive("uiToggleClass",["$timeout","$document",function(e,n){return{restrict:"AC",link:function(e,n,a){n.on("click",function(e){function r(e,n){for(var a=new RegExp("\\s"+e.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g"),r=" "+$(n)[0].className+" ";a.test(r);)r=r.replace(a," ");$(n)[0].className=$.trim(r)}e.preventDefault();var t=a.uiToggleClass.split(","),o=a.target&&a.target.split(",")||Array(n),i=0;angular.forEach(t,function(e){var n=o[o.length&&i];-1!==e.indexOf("*")&&r(e,n),$(n).toggleClass(e),i++}),$(n).toggleClass("active")})}}}]),angular.module("ui.validate",[]).directive("uiValidate",function(){return{restrict:"A",require:"ngModel",link:function(e,n,a,r){var t,o={},i=e.$eval(a.uiValidate);i&&(angular.isString(i)&&(i={validator:i}),angular.forEach(i,function(n,a){t=function(t){var o=e.$eval(n,{$value:t});return angular.isObject(o)&&angular.isFunction(o.then)?(o.then(function(){r.$setValidity(a,!0)},function(){r.$setValidity(a,!1)}),t):o?(r.$setValidity(a,!0),t):(r.$setValidity(a,!1),t)},o[a]=t,r.$formatters.push(t),r.$parsers.push(t)}),a.uiValidateWatch&&function(n){angular.isString(n)?e.$watch(n,function(){angular.forEach(o,function(e){e(r.$modelValue)})}):angular.isArray(n)?angular.forEach(n,function(n){e.$watch(n,function(){angular.forEach(o,function(e){e(r.$modelValue)})})}):angular.isObject(n)&&angular.forEach(n,function(n,a){angular.isString(n)&&e.$watch(n,function(){o[a](r.$modelValue)}),angular.isArray(n)&&angular.forEach(n,function(n){e.$watch(n,function(){o[a](r.$modelValue)})})})}(e.$eval(a.uiValidateWatch)))}}});