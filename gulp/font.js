const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const iconfont = require('gulp-iconfont')
const iconcss = require('gulp-iconfont-css')

exports.generate = function () {
  const fontName = 'BevIcons'

  return gulp.src(['src/font/*/*.svg', '!src/font/*/*.alt.svg'])
    .pipe(imagemin())
    .pipe(iconcss({
      fontName,
      path: 'src/font/_font-variables.scss.tpl',
      targetPath: '../scss/_font-variables.scss',
      fontPath: '../font/'
    }))
    .pipe(iconfont({
      fontName,
      formats: ['ttf', 'woff', 'svg'],
      normalize: true,
      fontHeight: 1024
    }))
    .pipe(gulp.dest('src/font'))
}
