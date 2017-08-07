const gulp = require('gulp')
const jsdoc = require('gulp-jsdoc3')

const config = require('./jsdoc.config.json')

exports.jsdoc = function (callback) {
  gulp.src(['README.md', './src/**/*.js'], {read: false})
    .pipe(jsdoc(config, callback))
}
