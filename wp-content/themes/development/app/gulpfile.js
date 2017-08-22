'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');

var fonts = [
    './vendors/font-awesome/fonts'
];

gulp.task('copy', function() {
    return gulp.src(fonts+'/**/*')
        .pipe(gulp.dest('../dist/fonts'));
});

var css_src = [
    './vendors/bootstrap/dist/css/bootstrap.min.css',
    './vendors/css-hamburgers/dist/hamburgers.min.css',
    './vendors/wow/css/libs/animate.css',
    './vendors/font-awesome/css/font-awesome.min.css',
    './vendors/css/style.css',
    './vendors/owl.carousel/dist/assets/owl.carousel.min.css',
    './vendors/owl.carousel/dist/assets/owl.theme.default.min.css'
];

gulp.task('pack-css', function () { 
    return gulp.src(css_src)
        .pipe(concat('main.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('../dist/css'));
});
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./vendors/css/'));
});

var js = [
    './vendors/jquery/dist/jquery.js',
    './vendors/wow/dist/wow.min.js',
    './js/main.js',
    './js/*.js',
    './vendors/owl.carousel/dist/owl.carousel.min.js'
];

gulp.task('uglify', function(){
    return gulp.src(js)
        .pipe(plumber())
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(concat('main.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('../dist/js/'));
});

gulp.task('default', ['watch', 'copy']);

gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['uglify']);
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('vendors/**/*.css', ['pack-css']);
});