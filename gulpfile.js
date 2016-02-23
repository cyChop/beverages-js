const gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    webpack = require('webpack-stream');

const config = {
    src: {
        js: 'src/main/js/**/*.js'
    },
    target: 'dist/',
    cfg: {
        webpack: './webpack.config.js',
        jshint: '.jshintrc'
    }
};

gulp.task('build', function () {
    // Remove previous build results
    gulp.src(config.target, {read: false}).pipe(rimraf());

    gulp.src(config.src.js)
        .pipe(webpack(require(config.cfg.webpack)))
        .pipe(gulp.dest(config.target));;
});

gulp.task('watch', function () {
    gulp.watch(config.src.js, ['build']);
});

gulp.task('default', ['build']);
