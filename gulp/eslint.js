const gulp = require('gulp')
const eslint = require('gulp-eslint')
const friendlyFormatter = require('eslint-friendly-formatter')

exports.lint = function () {
  return gulp.src(['gulp', 'src', 'test/unit'])
    .pipe(eslint())
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failOnError())
}

exports.fix = function () {
  return gulp.src('src')
    .pipe(eslint({fix: true}))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(gulp.dest('src'))
}
