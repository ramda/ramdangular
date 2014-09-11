var gulp = require('gulp');
var jshint = require('gulp-jshint');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var karma = require('gulp-karma');
var moment = require('moment');
var lib = 'ramdangular.js';

var pkg = require('./package.json');

gulp.task('hint', function () {
    gulp.src(lib)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('min', function () {
    var banner = '/*! <%= pkg.name %> <%= pkg.version %>: ' + moment().format('YYYY-MM-DD') + ' */\n';
    gulp.src(lib)
        .pipe(uglify())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(rename('ramdangular.min.js'))
        .pipe(gulp.dest('./'));
});

// Karma
gulp.task('test', function () {
    return gulp.src([
        'node_modules/angular/lib/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/ramda/ramda.js',
        'ramdangular.js',
        'test/**/*.js'
    ])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            throw err;
        });
});

gulp.task('default', function () {
    //ramdangular.js change
    gulp.watch(lib, ['hint', 'min']);
});