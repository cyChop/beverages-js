/* === PLUGINS === */
const gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    webpack = require('webpack-stream'),
    path = require('path'),
    sequence = require('run-sequence');

/* === CONFIG === */
const src = 'src/**/*',
    cfg = require('./webpack.config.js');

/* === TASKS === */
gulp.task('clean', function () {
    return gulp.src(cfg.output.path, {read: false}).pipe(rimraf());
});

gulp.task('_webpack:offline', function(callback) {
    cfg.entry['beverages-mock'] = path.join(__dirname, 'src/js/mock/fake-app-server');
    callback();
});

gulp.task('_webpack:build', function () {
    return gulp.src(src)
        .pipe(webpack(cfg))
        .pipe(gulp.dest(cfg.output.path));
});

gulp.task('_webpack:watch', ['_webpack:build'], function () {
    return gulp.watch(src, ['_webpack:build']);
});

// Shortcut tasks
gulp.task('build', function (callback) {
    sequence('clean', '_webpack:build', callback);
});
gulp.task('watch', ['_webpack:watch']);
gulp.task('watch-offline', ['_webpack:offline', '_webpack:watch']);
gulp.task('default', ['build']);
