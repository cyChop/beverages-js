const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rimraf = require('gulp-rimraf'),
    webpack = require('webpack-stream');

const targetRoot = 'dist/';
const config = {
    src: {
        js: 'src/main/js/**/*.js',
        scss: 'src/main/scss/**/*.scss'
    },
    target: {
        root: targetRoot,
        js: targetRoot,
        css: targetRoot + 'css/'
    },
    cfg: {
        webpack: './webpack.config.js',
        jshint: '.jshintrc'
    }
};

gulp.task('clean', function () {
    return gulp.src(config.target.root, {read: false}).pipe(rimraf());
});

gulp.task('webpack:build', function () {
    return gulp.src(config.src.js)
        .pipe(webpack(require(config.cfg.webpack)))
        .pipe(gulp.dest(config.target.js));
});

gulp.task('webpack:watch', function () {
    return gulp.watch(config.src.js, ['webpack:build']);
});

gulp.task('sass:build', function () {
    return gulp.src(config.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.target.css));
});

gulp.task('sass:watch', function () {
    gulp.watch(config.src.scss, ['sass:build']);
})

gulp.task('build', ['clean', 'webpack:build', 'sass:build']);
gulp.task('watch', ['webpack:watch', 'sass:watch']);

gulp.task('default', ['build']);
