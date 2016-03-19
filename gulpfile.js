/* === PLUGINS === */
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rimraf = require('gulp-rimraf'),
    webpack = require('webpack-stream'),
    sequence = require('run-sequence');

/* === CONFIG === */
const config = {
    src: {
        js: 'src/main/js/**/*',
    },
    target: 'dist/',
    cfg: {
        webpack: './webpack.config.js',
        jshint: '.jshintrc'
    }
};

/* === TASKS === */
gulp.task('clean', function () {
    return gulp.src(config.target, {read: false}).pipe(rimraf());
});

gulp.task('webpack:build', function () {
    return gulp.src(config.src.js)
        .pipe(webpack(require(config.cfg.webpack)))
        .pipe(gulp.dest(config.target));
});

gulp.task('webpack:watch', function () {
    return gulp.watch(config.src.js, ['webpack:build']);
});

// Shortcut tasks
gulp.task('build', function (callback) {
    sequence('clean', 'webpack:build', callback);
});
gulp.task('watch', ['webpack:watch']);
gulp.task('default', ['build']);
