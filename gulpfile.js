/**
 * Created by Pedro on 14/08/2014.
 */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var phpunit = require('gulp-phpunit');

var paths = {
    frontScripts: ['./bower_components/jquery/dist/jquery.js', './bower_components/bootstrap/dist/js/bootstrap.js', './public/assets/js/src/frontend.js'],
    backScripts: ['./bower_components/jquery/dist/jquery.js', './bower_components/bootstrap/dist/js/bootstrap.js', './public/assets/js/src/backend.js'],
    frontLess: ['./public/assets/css/less/base.less','./public/assets/css/less/variables.less','./public/assets/css/less/fonts.less','./public/assets/css/less/frontend.less'],
    backLess: ['./public/assets/css/less/base.less','./public/assets/css/less/variables.less','./public/assets/css/less/fonts.less','./public/assets/css/less/backend.less'],
    phpunit: './app/tests/**/*.php'
};

gulp.task('phpunit', function() {
    gulp.src(paths.phpunit).pipe(phpunit());
});

gulp.task('frontScripts', function() {
    return gulp.src(paths.frontScripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('frontend.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets/js'))
        .pipe(notify({message: 'Frontend script done!'}));
});

gulp.task('backScripts', function() {
    return gulp.src(paths.backScripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('backend.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets/js'))
        .pipe(notify({message: 'Backend script done!'}));
});

gulp.task('frontCss', function(){
    return gulp.src(paths.frontLess)
//        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer('last 15 version'))
        .pipe(concat('frontend.min.css'))
        .pipe(minifyCSS())
//        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets/css'))
        .pipe(notify({message: 'Frontend Css done!'}));
});

gulp.task('backCss', function(){
    return gulp.src(paths.backLess)
//        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer('last 15 version'))
        .pipe(concat('backend.min.css'))
        .pipe(minifyCSS())
//        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets/css'))
        .pipe(notify({message: 'Backend Css done!'}));
});

gulp.task('watch', function(){
    gulp.watch(paths.frontScripts, ['frontScripts']);
    gulp.watch(paths.backScripts, ['backScripts']);
    gulp.watch(paths.frontLess, ['frontCss']);
    gulp.watch(paths.backLess, ['backCss']);
    gulp.watch(paths.phpunit, ['phpunit'])
});

gulp.task('default', ['watch', 'backCss', 'frontCss', 'backScripts', 'frontScripts']);