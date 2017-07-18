'use strict'

/* === PLUGINS === */
const gulp = require('gulp')
const gutil = require('gulp-util')
const rimraf = require('gulp-rimraf')
const path = require('path')
const eslint = require('gulp-eslint')
const eslintFormatter = require('eslint-friendly-formatter')
const jsdoc = require('gulp-jsdoc3')
const webpack = require('webpack')

const Karma = require('karma')
const WebpackDevServer = require('webpack-dev-server')

/* === CONFIG === */
const pkgCfg = require('./webpack.config.pkg')
const devCfg = require('./webpack.config.dev')
const docCfg = require('./jsdoc.config.json')

const SRC_QUALITY = ['src/**/*.js']
const SRC_MOCK = ['dev/mock/**/*.js']
const SRC_TEST = ['test/**/*.js']

const DEV_SERVER_DOMAIN = 'localhost'
const DEV_SERVER_PORT = 8080

/* === TASKS === */
gulp.task('clean', function () {
  return gulp.src([
    path.join(__dirname, '/dist'),
    path.join(__dirname, '/reports')
  ], {read: false})
    .pipe(rimraf())
})

gulp.task('test', function (callback) {
  new Karma.Server({
    configFile: path.join(__dirname, '/karma.config.js'),
    singleRun: true
  }, callback).start()
})

gulp.task('test-dev', function (callback) {
  new Karma.Server({
    configFile: path.join(__dirname, '/karma.config.js'),
    singleRun: false
  }, callback).start()
})

gulp.task('lint', function () {
  return gulp.src(SRC_QUALITY.concat(SRC_MOCK).concat(SRC_TEST))
    .pipe(eslint())
    .pipe(eslint.format(eslintFormatter))
    .pipe(eslint.failAfterError())
})

gulp.task('jsdoc', function (callback) {
  gulp.src(['README.md', './src/**/*.js'], {read: false})
    .pipe(jsdoc(docCfg, callback))
})

gulp.task('build', ['clean'], function (callback) {
  webpack(pkgCfg, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', stats.toString({colors: true}))
    callback()
  })
})

gulp.task('webserver-dev', function () {
  // Start the server
  new WebpackDevServer(webpack(devCfg), {
    contentBase: path.join(__dirname, 'dev'),
    publicPath: '/dist/',
    stats: {colors: true}
  }).listen(DEV_SERVER_PORT, DEV_SERVER_DOMAIN, function (err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err)
    }
  })
})

gulp.task('default', ['build'])

gulp.task('ci', ['clean', 'build', 'lint', 'test', 'jsdoc'])
