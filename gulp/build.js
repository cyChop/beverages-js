const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const LANGUAGES = ['en', 'fr']

exports.clean = function (done) {
  rm(path.join(config.build.assetsRoot, '*'), err => {
    if (err) {
      throw err
    }
    done()
  })
}
exports.build = function (done) {
  const spinner = ora('building for production...')
  spinner.start()

  webpack(LANGUAGES.map(lg => webpackConfig(lg)), function (err, stats) {
    spinner.stop()
    if (err) {
      done(err)
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n'
      + '  Opening index.html over file:// won\'t work.\n'
    ))
    done()
  })
}
