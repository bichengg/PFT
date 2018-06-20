"use strict";var app=angular.module("app",["ngAnimate","ngCookies","ngResource","ngStorage","ui.router","ui.bootstrap","ui.load","ui.jq","ui.validate","oc.lazyLoad"]);app.config(["$controllerProvider","$compileProvider","$filterProvider","$provide",function(e,t,r,a){app.controller=e.register,app.directive=t.directive,app.filter=r.register,app.factory=a.factory,app.service=a.service,app.constant=a.constant,app.value=a.value}]).config(["$httpProvider",function(e){e.defaults.transformRequest=function(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")},e.defaults.headers.post={"Content-Type":"application/x-www-form-urlencoded"}}]),app.constant("JQ_CONFIG",{easyPieChart:["vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js"],sparkline:["vendor/jquery/charts/sparkline/jquery.sparkline.min.js"],plot:["vendor/jquery/charts/flot/jquery.flot.min.js","vendor/jquery/charts/flot/jquery.flot.resize.js","vendor/jquery/charts/flot/jquery.flot.tooltip.min.js","vendor/jquery/charts/flot/jquery.flot.spline.js","vendor/jquery/charts/flot/jquery.flot.orderBars.js","vendor/jquery/charts/flot/jquery.flot.pie.min.js"],slimScroll:["../../lib/jquery-slimscroll/jquery.slimscroll.min.js"],sortable:["vendor/jquery/sortable/jquery.sortable.js"],nestable:["vendor/jquery/nestable/jquery.nestable.js","vendor/jquery/nestable/nestable.css"],filestyle:["vendor/jquery/file/bootstrap-filestyle.min.js"],slider:["vendor/jquery/slider/bootstrap-slider.js","vendor/jquery/slider/slider.css"],chosen:["vendor/jquery/chosen/chosen.jquery.min.js","vendor/jquery/chosen/chosen.css"],TouchSpin:["vendor/jquery/spinner/jquery.bootstrap-touchspin.min.js","vendor/jquery/spinner/jquery.bootstrap-touchspin.css"],wysiwyg:["vendor/jquery/wysiwyg/bootstrap-wysiwyg.js","vendor/jquery/wysiwyg/jquery.hotkeys.js"],dataTable:["vendor/jquery/datatables/jquery.dataTables.min.js","vendor/jquery/datatables/dataTables.bootstrap.js","vendor/jquery/datatables/dataTables.bootstrap.css"],vectorMap:["vendor/jquery/jvectormap/jquery-jvectormap.min.js","vendor/jquery/jvectormap/jquery-jvectormap-world-mill-en.js","vendor/jquery/jvectormap/jquery-jvectormap-us-aea-en.js","vendor/jquery/jvectormap/jquery-jvectormap.css"],footable:["vendor/jquery/footable/footable.all.min.js","vendor/jquery/footable/footable.core.css"]}).config(["$ocLazyLoadProvider",function(e){e.config({debug:!1,events:!0,modules:[{name:"ngGrid",files:["vendor/modules/ng-grid/ng-grid.min.js","vendor/modules/ng-grid/ng-grid.min.css","vendor/modules/ng-grid/theme.css"]},{name:"ui.select",files:["vendor/modules/angular-ui-select/select.min.js","vendor/modules/angular-ui-select/select.min.css"]},{name:"angularFileUpload",files:["vendor/modules/angular-file-upload/angular-file-upload.min.js"]},{name:"ui.calendar",files:["vendor/modules/angular-ui-calendar/calendar.js"]},{name:"ngImgCrop",files:["vendor/modules/ngImgCrop/ng-img-crop.js","vendor/modules/ngImgCrop/ng-img-crop.css"]},{name:"angularBootstrapNavTree",files:["libs/angular-bootstrap-nav-tree/abn_tree_directive.js","libs/angular-bootstrap-nav-tree/abn_tree.css"]},{name:"toaster",files:["libs/angularjs-toaster/toaster.js","libs/angularjs-toaster/toaster.css"]},{name:"textAngular",files:["vendor/modules/textAngular/textAngular-sanitize.min.js","vendor/modules/textAngular/textAngular.min.js"]},{name:"vr.directives.slider",files:["vendor/modules/angular-slider/angular-slider.min.js","vendor/modules/angular-slider/angular-slider.css"]},{name:"com.2fdevs.videogular",files:["vendor/modules/videogular/videogular.min.js"]},{name:"com.2fdevs.videogular.plugins.controls",files:["vendor/modules/videogular/plugins/controls.min.js"]},{name:"com.2fdevs.videogular.plugins.buffering",files:["vendor/modules/videogular/plugins/buffering.min.js"]},{name:"com.2fdevs.videogular.plugins.overlayplay",files:["vendor/modules/videogular/plugins/overlay-play.min.js"]},{name:"com.2fdevs.videogular.plugins.poster",files:["vendor/modules/videogular/plugins/poster.min.js"]},{name:"com.2fdevs.videogular.plugins.imaads",files:["vendor/modules/videogular/plugins/ima-ads.min.js"]},{name:"ngEcharts",files:["vendor/modules/ng-echarts/echarts.min.js"]},{name:"ngAmap",files:["vendor/modules/ng-amap/amap.js","http://webapi.amap.com/maps?v=1.3&key=471ac3e24922c1ef15c0f61fdd0af0e1"]}]})}]),app.run(["$rootScope","$state","$stateParams",function(e,t,r){e.$state=t,e.$stateParams=r}]).config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/login"),e.state("login",{url:"/login",templateUrl:"tpl/login.html",controller:"LoginCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/login.js"])}]}}).state("app",{abstract:!0,url:"/app",templateUrl:"tpl/app.html",resolve:{deps:["$ocLazyLoad",function(e){return e.load("toaster")}]}}).state("app.manage",{abstract:!0,url:"/manage",template:'<div ui-view class="fade-in-left h-full"></div>'}).state("app.manage.teacher",{url:"/teacher",templateUrl:"tpl/manage/teacher/list.html",controller:"TeacherCtrl",cache:!1,resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/teacher.js"])}]}}).state("app.manage.student",{url:"/student",templateUrl:"tpl/manage/student/list.html",controller:"StudentCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/student.js"])}]}}).state("app.manage.allot",{url:"/allot",templateUrl:"tpl/manage/allot/list.html",controller:"AllotCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/allot.js"])}]}}).state("app.manage.score",{url:"/score",templateUrl:"tpl/manage/score/list.html",controller:"ScoreCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/score.js"])}]}}).state("app.manage.progress",{url:"/progress",templateUrl:"tpl/manage/progress/list.html",controller:"ProgressCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/progress.js"])}]}}).state("app.manage.subject",{url:"/subject",templateUrl:"tpl/manage/subject/list.html",controller:"SubjectCtrl",cache:!1,resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/manage/subject.js"])}]}}).state("app.teacher",{abstract:!0,url:"/teacher",template:'<div ui-view class="fade-in-left h-full"></div>'}).state("app.teacher.list",{url:"/list",templateUrl:"tpl/teacher/list.html",controller:"Teacher2stuCtrl",resolve:{deps:["$ocLazyLoad",function(e){return e.load(["src/js/controllers/app/teacher/teacher.js"])}]}})}]),app.filter("trans2statusText",function(){return function(e){var t="";switch(e){case"1":t="病假";break;case"2":t="事假";break;case"3":t="未参加";break;default:t="无"}return t}}).constant("APP",{name:"学生体测管理",version:"1.0.0",nav:[],baseurl:"api/Public/PhysicalFitnessTest/",token:sessionStorage.getItem("token"),settings:{themeID:1,navbarHeaderColor:"bg-black",navbarCollapseColor:"bg-white-only",asideColor:"bg-black",headerFixed:!0,asideFixed:!0,asideFolded:!1,asideDock:!1,container:!1},hideAside:!1,hideFooter:!0}).controller("AppCtrl",["APP","$scope","Subject","$q","$http","$state","$filter",function(e,t,r,a,n,o,s){t.app=e;var i=new Date;t.student={year:i.getFullYear(),years:[],status:0,statusList:[{key:"全部",val:""},{key:"有成绩",val:0},{key:"有备注",val:-1}],size:0,pages:2e4,maxSize:6,current:1,json:[],jsonReady:!0,resJson:[]};for(var l=0;l<5;l++)t.student.years.push(t.student.year-l);t.getScroeList=function(){var e=a.defer(),n=e.promise;return r.getList().then(function(r){t.resSubjectList=r.data.info,e.resolve(r)}),n},t.getStudentList=function(r){var r=r||"",o=a.defer(),s=o.promise;return n({method:"get",url:e.baseurl+"?service=Student.getInfo",params:{token:e.token,year:t.student.year,status:t.student.status,size:t.student.size,current:t.student.current,student_code:r}}).success(function(e){o.resolve(e),e.data&&(t.student.resJson=e.data.info)}).error(function(e){o.reject(e),console.log(e)}),s},t.importf=function(e){var r;if(e.files){var a=e.files[0],n=new FileReader;n.onload=function(e){var a=e.target.result;r=XLSX.read(a,{type:"binary"}),t.student.json=XLSX.utils.sheet_to_json(r.Sheets[r.SheetNames[0]]),t.student.jsonReady=!1,t.$apply()},n.readAsBinaryString(a)}},t.downloadExl=function(e){function a(e){for(var t="",r=0;e>0;)r=e%26+1,t=String.fromCharCode(r+64)+t,e=(e-r)/26;return t}var n,o=angular.copy(t.student.resJson),i=o[0];o.unshift({});var l=[],u=angular.copy(t.resSubjectList);for(var c in i)if("id"!=c&&"teacherId"!=c&&"teacher_id"!=c&&"time"!=c&&"create_time"!=c&&"teacherName"!=c&&"teacher_class"!=c&&"school_year"!=c&&"is_submit"!=c&&"address"!=c&&"born"!=c&&"nation"!=c&&"grade_num"!=c&&"class_num"!=c){var d="";switch(c){case"grade_num":d="年级编号";break;case"class_num":d="班级编号";break;case"class_name":d="班级名称";break;case"student_code":d="学籍号";break;case"nation":d="民族代码";break;case"name":d="姓名";break;case"sex":d="性别";break;case"born":d="出生日期";break;case"address":d="家庭住址";break;case"status":d="备注";break;default:d=r.transCn(c,u)}l.push(c),o[0][c]=d}var i=[],p={style:"thin",color:{rgb:"33333333"}};o.map(function(e,t){return t>0&&(e.status=s("trans2statusText")(e.status.toString())),l.map(function(r,n){return Object.assign({},{v:e[r],position:(n>25?a(n):String.fromCharCode(65+n))+(t+1)})})}).reduce(function(e,t){return e.concat(t)}).forEach(function(e,t){return i[e.position]={v:e.v,s:{border:{top:p,bottom:p,left:p,right:p}}}});var f=Object.keys(i);i["!cols"]=[{wpx:70},{wpx:85}];var m={SheetNames:["mySheet"],Sheets:{mySheet:Object.assign({},i,{"!ref":f[0]+":"+f[f.length-1]})}};n=new Blob([function(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),a=0;a!=e.length;++a)r[a]=255&e.charCodeAt(a);return t}(XLSX.write(m,{bookType:void 0==e?"xlsx":e,bookSST:!1,type:"binary"}))],{type:""});var g=URL.createObjectURL(n);document.getElementById("hf").href=g,document.getElementById("hf").click(),setTimeout(function(){URL.revokeObjectURL(n)},100)},t.nav=[{key:"manage",name:"管理平台",icon:"fa-cubes",child:[{key:"teacher",name:"教师管理"},{key:"student",name:"任务导入"},{key:"allot",name:"任务分配"},{key:"progress",name:"进度查询"},{key:"score",name:"全校成绩导出"},{key:"subject",name:"体测项目管理"}]}],t.logout=function(){localStorage.removeItem("teacher"),sessionStorage.removeItem("token"),e.token="",location.href="admins.html"}}]),app.service("Subject",["APP","$http","$q",function(e,t,r){this.transCn=function(e,t){for(var r="",a=0;a<t.length;a++)t[a].column_name==e&&(r=t[a].column_comment);return r},this.transEn=function(e,t){for(var r="",a=0;a<t.length;a++)t[a].column_comment==e&&(r=t[a].column_name);return r},this.getList=function(){var a=r.defer(),n=a.promise;return t({method:"get",url:e.baseurl+"?service=Subject.getInfo",params:{token:e.token}}).success(function(e){a.resolve(e)}).error(function(e){a.reject(e)}),n}}]),angular.module("ui.load",[]).service("uiLoad",["$document","$q","$timeout",function(e,t,r){var a=[],n=!1,o=t.defer();this.load=function(e){e=angular.isArray(e)?e:e.split(/\s+/);var t=this;return n||(n=o.promise),angular.forEach(e,function(e){n=n.then(function(){return e.indexOf(".css")>=0?t.loadCSS(e):t.loadScript(e)})}),o.resolve(),n},this.loadScript=function(n){if(a[n])return a[n].promise;var o=t.defer(),s=e[0].createElement("script");return s.src=n,s.onload=function(e){r(function(){o.resolve(e)})},s.onerror=function(e){r(function(){o.reject(e)})},e[0].body.appendChild(s),a[n]=o,o.promise},this.loadCSS=function(n){if(a[n])return a[n].promise;var o=t.defer(),s=e[0].createElement("link");return s.rel="stylesheet",s.type="text/css",s.href=n,s.onload=function(e){r(function(){o.resolve(e)})},s.onerror=function(e){r(function(){o.reject(e)})},e[0].head.appendChild(s),a[n]=o,o.promise}}]),angular.module("app").directive("setNgAnimate",["$animate",function(e){return{link:function(t,r,a){t.$watch(function(){return t.$eval(a.setNgAnimate,t)},function(t,a){e.enabled(!!t,r)})}}}]),angular.module("app").directive("uiButterbar",["$rootScope","$anchorScroll",function(e,t){return{restrict:"AC",template:'<span class="bar"></span>',link:function(e,r,a){r.addClass("butterbar hide"),e.$on("$stateChangeStart",function(e){t(),r.removeClass("hide").addClass("active")}),e.$on("$stateChangeSuccess",function(e,t,a,n){e.targetScope.$watch("$viewContentLoaded",function(){r.addClass("hide").removeClass("active")})})}}}]),angular.module("app").directive("uiFocus",function(e,t){return{link:function(r,a,n){var o=t(n.uiFocus);r.$watch(o,function(t){!0===t&&e(function(){a[0].focus()})}),a.bind("blur",function(){r.$apply(o.assign(r,!1))})}}}),angular.module("app").directive("uiFullscreen",["uiLoad","$document","$window",function(e,t,r){return{restrict:"AC",template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',link:function(r,a,n){a.addClass("hide"),e.load("../../lib/screenfull/screenfull.min.js").then(function(){screenfull.enabled&&!navigator.userAgent.match(/Trident.*rv:11\./)&&a.removeClass("hide"),a.on("click",function(){var e;n.target&&(e=$(n.target)[0]),screenfull.toggle(e)}),t.on(screenfull.raw.fullscreenchange,function(){screenfull.isFullscreen?a.addClass("active"):a.removeClass("active")})})}}}]),angular.module("ui.jq",["ui.load"]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","JQ_CONFIG","uiLoad","$timeout",function(e,t,r,a){return{restrict:"A",compile:function(n,o){if(!angular.isFunction(n[o.uiJq])&&!t[o.uiJq])throw new Error('ui-jq: The "'+o.uiJq+'" function does not exist');var s=e&&e[o.uiJq];return function(e,n,o){function i(){var t=[];return o.uiOptions?(t=e.$eval("["+o.uiOptions+"]"),angular.isObject(s)&&angular.isObject(t[0])&&(t[0]=angular.extend({},s,t[0]))):s&&(t=[s]),t}function l(){a(function(){n[o.uiJq].apply(n,i())},0,!1)}function u(){o.uiRefresh&&e.$watch(o.uiRefresh,function(){l()})}o.ngModel&&n.is("select,input,textarea")&&n.bind("change",function(){n.trigger("input")}),t[o.uiJq]?r.load(t[o.uiJq]).then(function(){l(),u()}).catch(function(){}):(l(),u())}}}}]),angular.module("app").directive("uiModule",["MODULE_CONFIG","uiLoad","$compile",function(e,t,r){return{restrict:"A",compile:function(a,n){var o=a.contents().clone();return function(a,n,s){n.contents().remove(),t.load(e[s.uiModule]).then(function(){r(o)(a,function(e,t){n.append(e)})})}}}}]),angular.module("app").directive("uiNav",["$timeout",function(e){return{restrict:"AC",link:function(e,t,r){var a,n=$(window),o=$(".app-aside");t.on("click","a",function(e){a&&a.trigger("mouseleave.nav");var t=$(this);t.parent().siblings(".active").toggleClass("active"),t.next().is("ul")&&t.parent().toggleClass("active")&&e.preventDefault(),t.next().is("ul")||n.width()<768&&$(".app-aside").removeClass("show off-screen")}),t.on("mouseenter","a",function(e){if(a&&a.trigger("mouseleave.nav"),$("> .nav",o).remove(),!(!$(".app-aside-fixed.app-aside-folded").length||n.width()<768||$(".app-aside-dock").length)){var t,r=$(e.target),s=$(window).height();!r.is("a")&&(r=r.closest("a")),r.next().is("ul")&&(a=r.next(),r.parent().addClass("active"),t=r.parent().position().top+50,a.css("top",t),t+a.height()>s&&a.css("bottom",0),t+150>s&&a.css("bottom",s-t-50).css("top","auto"),a.appendTo(o),a.on("mouseleave.nav",function(e){$(".dropdown-backdrop").remove(),a.appendTo(r.parent()),a.off("mouseleave.nav").css("top","auto").css("bottom","auto"),r.parent().removeClass("active")}),$(".smart").length&&$('<div class="dropdown-backdrop"/>').insertAfter(".app-aside").on("click",function(e){e&&e.trigger("mouseleave.nav")}))}}),o.on("mouseleave",function(e){a&&a.trigger("mouseleave.nav"),$("> .nav",o).remove()})}}}]),angular.module("app").directive("uiScroll",["$location","$anchorScroll",function(e,t){return{restrict:"AC",link:function(r,a,n){a.on("click",function(r){e.hash(n.uiScroll),t()})}}}]),angular.module("app").directive("uiShift",["$timeout",function(e){return{restrict:"A",link:function(t,r,a){function n(){e(function(){var e=a.uiShift,t=a.target;i.hasClass("in")||i[e](t).addClass("in")})}function o(){s&&s.prepend(r),!s&&i.insertAfter(u),i.removeClass("in")}var s,i=$(r),l=$(window),u=i.prev(),c=l.width();!u.length&&(s=i.parent()),c<768&&n()||o(),l.resize(function(){c!==l.width()&&e(function(){l.width()<768&&n()||o(),c=l.width()})})}}}]),angular.module("app").directive("uiToggleClass",["$timeout","$document",function(e,t){return{restrict:"AC",link:function(e,t,r){t.on("click",function(e){function a(e,t){for(var r=new RegExp("\\s"+e.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g"),a=" "+$(t)[0].className+" ";r.test(a);)a=a.replace(r," ");$(t)[0].className=$.trim(a)}e.preventDefault();var n=r.uiToggleClass.split(","),o=r.target&&r.target.split(",")||Array(t),s=0;angular.forEach(n,function(e){var t=o[o.length&&s];-1!==e.indexOf("*")&&a(e,t),$(t).toggleClass(e),s++}),$(t).toggleClass("active")})}}}]),angular.module("ui.validate",[]).directive("uiValidate",function(){return{restrict:"A",require:"ngModel",link:function(e,t,r,a){var n,o={},s=e.$eval(r.uiValidate);s&&(angular.isString(s)&&(s={validator:s}),angular.forEach(s,function(t,r){n=function(n){var o=e.$eval(t,{$value:n});return angular.isObject(o)&&angular.isFunction(o.then)?(o.then(function(){a.$setValidity(r,!0)},function(){a.$setValidity(r,!1)}),n):o?(a.$setValidity(r,!0),n):(a.$setValidity(r,!1),n)},o[r]=n,a.$formatters.push(n),a.$parsers.push(n)}),r.uiValidateWatch&&function(t){angular.isString(t)?e.$watch(t,function(){angular.forEach(o,function(e){e(a.$modelValue)})}):angular.isArray(t)?angular.forEach(t,function(t){e.$watch(t,function(){angular.forEach(o,function(e){e(a.$modelValue)})})}):angular.isObject(t)&&angular.forEach(t,function(t,r){angular.isString(t)&&e.$watch(t,function(){o[r](a.$modelValue)}),angular.isArray(t)&&angular.forEach(t,function(t){e.$watch(t,function(){o[r](a.$modelValue)})})})}(e.$eval(r.uiValidateWatch)))}}});