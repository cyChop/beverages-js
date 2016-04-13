/* === PLUGINS === */
const gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    webpack = require('webpack-stream'),
    sequence = require('run-sequence');

/* === CONFIG === */
const src ='src/main/**/*',
    cfg = require('./webpack.config.js');

/* === TASKS === */
gulp.task('clean', function () {
    return gulp.src(cfg.output.path, {read: false}).pipe(rimraf());
});

gulp.task('webpack:build', function () {
    return gulp.src(src)
        .pipe(webpack(cfg))
        .pipe(gulp.dest(cfg.output.path));
});

gulp.task('webpack:watch', ['webpack:build'], function () {
    return gulp.watch(src, ['webpack:build']);
});

// Shortcut tasks
gulp.task('build', function (callback) {
    sequence('clean', 'webpack:build', callback);
});
gulp.task('watch', ['webpack:watch']);
gulp.task('default', ['build']);
