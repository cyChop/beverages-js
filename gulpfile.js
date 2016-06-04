/* === PLUGINS === */
const gulp = require('gulp'),
    gutil = require('gulp-util'),
    rimraf = require('gulp-rimraf'),
    path = require('path'),
    eslint = require('gulp-eslint'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

/* === CONFIG === */
const cfg = require('./webpack.config.js');

/* === TASKS === */
gulp.task('lint', function () {
    return gulp.src(['src/**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format('stylish'))
        .pipe(eslint.failAfterError());
});

gulp.task('clean', function () {
    return gulp.src(cfg.output.path, {read: false}).pipe(rimraf());
});

gulp.task('build', ['clean'], function (callback) {
    webpack(cfg, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('_webpack:offline', function (callback) {
    cfg.entry['beverages-mock'] = path.join(__dirname, 'src/js/mock/fake-app-server');
    callback();
});

gulp.task('webserver-dev', function () {
    // Enable some debug utilities
    var debugCfg = Object.create(cfg);
    debugCfg.devtool = 'eval';
    debugCfg.debug = true;

    // Start the server
    new WebpackDevServer(webpack(debugCfg), {
        publicPath: debugCfg.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
    });
});

gulp.task('webserver-dev-offline', ['_webpack:offline', 'webserver-dev']);

gulp.task('default', ['build']);

gulp.task('ci', ['lint', 'build']);
