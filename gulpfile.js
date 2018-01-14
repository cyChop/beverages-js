const gulp = require('gulp')

const check = require('./gulp/check-versions')
const font = require('./gulp/font')
const build = require('./gulp/build')
const server = require('./gulp/dev-server')
const tests = require('./gulp/tests')
const eslint = require('./gulp/eslint')
const jsdoc = require('./gulp/jsdoc')
const env = require('./gulp/env')

exports['eslint:lint'] = eslint.lint
exports['eslint:fix'] = eslint.fix

exports['font:generate'] = font.generate

exports.build = gulp.series(check.checkVersions, env.setProd, build.clean, build.build)
exports.serve = gulp.series(check.checkVersions, env.setDevByDefault, server.serve)

exports.test = gulp.series(env.setTest, tests.unit)

exports.jsdoc = jsdoc.jsdoc

exports.default = exports.build
exports.ci = gulp.parallel(
  exports['eslint:lint'],
  exports['font:generate'],
  exports.build,
  exports.test,
  exports.jsdoc
)
