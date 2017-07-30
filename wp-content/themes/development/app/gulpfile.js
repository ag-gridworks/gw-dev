'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('copy', function() {
    return gulp.src(['./{fonts,vendors}/**/*'])
        .pipe(gulp.dest('../dist/'));
});
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('../dist/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

var js = [
    './vendors/jquery/dist/jquery.js',
    './vendors/wow/dist/wow.min.js',
    './js/main.js',
    './js/*.js'
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

gulp.task('default', ['sass', 'sass:watch', 'uglify', 'watch', 'copy']);

gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['uglify']);
});