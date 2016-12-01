/* === PLUGINS === */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rimraf = require('gulp-rimraf'),
    fs = require('fs'),
    path = require('path'),
    eslint = require('gulp-eslint'),
    sonar = require('gulp-sonar'),
    jsdoc = require('gulp-jsdoc3'),
    webpack = require('webpack'),
    _ = require('underscore');

var Karma = require('karma'),
    WebpackDevServer = require('webpack-dev-server');

/* === CONFIG === */
var pkgCfg = require('./webpack.config.pkg'),
    devCfg = require('./webpack.config.dev');

var SRC_QUALITY = ['src/**/*.js', '!dev/**', '!node_modules/**'],
    SRC_TEST = ['test/**/*.js'];

/* === TASKS === */
gulp.task('clean', function () {
    return gulp.src([
        path.join(__dirname, '/dist'),
        path.join(__dirname, '/bin')
        ], {read: false})
        .pipe(rimraf());
});

gulp.task('test', function (callback) {
    new Karma.Server({
        configFile: path.join(__dirname, '/karma.config.js'),
        singleRun: true
    }, callback).start();
});

gulp.task('test-dev', function (callback) {
    new Karma.Server({
        configFile: path.join(__dirname, '/karma.config.js'),
        singleRun: false
    }, callback).start();
});

gulp.task('lint', function () {
    return gulp.src(SRC_QUALITY.concat(SRC_TEST))
        .pipe(eslint())
        .pipe(eslint.format('stylish'))
        .pipe(eslint.failAfterError());
});

gulp.task('sonar', function () {
    return gulp.src(SRC_QUALITY, {read: false})
        .pipe(sonar(require('./sonar.config.js')))
        .on('error', gutil.log);
});

gulp.task('jsdoc', function (callback) {
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(require('./jsdoc.config.json'), callback));
});

gulp.task('build', ['clean'], function (callback) {
    webpack(pkgCfg, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webserver-dev', function () {
    // Start the server
    new WebpackDevServer(webpack(devCfg), {
        contentBase: path.join(__dirname, 'dev'),
        publicPath: '/dist/',
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
    });
});

gulp.task('default', ['build']);

gulp.task('ci', ['clean', 'build', 'lint', 'test', 'jsdoc']);
