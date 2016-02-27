const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rimraf = require('gulp-rimraf'),
    webpack = require('webpack-stream'),
    sequence = require('run-sequence');


const modules = {
    bootstrap: {
        root: './node_modules/bootstrap/',
        scss: 'scss/'
    },
    fontAwesome: {
        root: './node_modules/font-awesome/',
        scss: 'scss/',
        fonts: 'fonts'
    }
};

const targetRoot = 'dist/';
const config = {
    src: {
        js: 'src/main/js/**/*.js',
        scss: 'src/main/scss/**/*.scss'
    },
    sass: {
        includes: [
            modules.bootstrap.root + modules.bootstrap.scss,
            modules.fontAwesome.root + modules.fontAwesome.scss
        ]
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
    // Copy resources
    gulp.src([
            modules.fontAwesome.root + modules.fontAwesome.fonts + '**/*'
        ])
        .pipe(gulp.dest(config.target.root));

    // Compile SASS
    return gulp.src(config.src.scss)
        .pipe(
            sass({includePaths: config.sass.includes})
                .on('error', sass.logError)
        )
        .pipe(gulp.dest(config.target.css));
});

gulp.task('sass:watch', function () {
    gulp.watch(config.src.scss, ['sass:build']);
})

gulp.task('build', function (callback) {
    sequence('clean', ['webpack:build', 'sass:build'], callback);
});

gulp.task('watch', ['webpack:watch', 'sass:watch']);

gulp.task('default', ['build']);
