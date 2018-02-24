var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload;


gulp.task('styles', function () {
    return gulp.src('src/css/less/app.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('dist/css'))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(minifycss())
        //.pipe(gulp.dest('src/css'))
        .pipe(notify({
            message: 'Styles task complete'
        }))
        .pipe(browserSync.stream());
});
gulp.task('scripts', function () {
    return gulp.src(['src/js/app.js', 'src/js/config.js', 'src/js/config.lazyload.js', 'src/js/config.router.js', 'src/js/main.js', 'src/js/services/*.js', 'src/js/directives/*.js', 'src/js/data/map.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('common.js'))
        //.pipe(gulp.dest('js/common.js'))
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: { except: ['require', 'exports', 'module', '$'] }//排除混淆关键字
        }))
        .pipe(gulp.dest('dist/js/'))
        .pipe(notify({
            message: 'Scripts task complete'
        }))
        .pipe(browserSync.stream());
});




gulp.task('watch', function () {
    gulp.watch('src/css/less/*.less', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
});
gulp.task('serve', ['styles', 'scripts'], function () {
    browserSync.init({
        server: "./"
    });

    gulp.watch(['*.html',['tpl/*/*.html','tpl/*/*/*.html']]).on('change', browserSync.reload);
    gulp.watch('src/css/less/*.less', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['serve']);