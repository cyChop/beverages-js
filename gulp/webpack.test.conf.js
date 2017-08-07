// This is the webpack config used for unit tests.

const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = lg => {
  const webpackConfig = merge(baseWebpackConfig(lg), {
    // use inline sourcemap for karma-sourcemap-loader
    devtool: '#inline-source-map',
    module: {
      rules: utils.styleLoaders({sourceMap: false, minimize: false})
    },
    resolveLoader: {
      alias: {
        // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
        // see discussion at https://github.com/vuejs/vue-loader/issues/724
        'scss-loader': 'sass-loader'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': require('../config/test.env')
      })
    ]
  })

  // no need for app entry during tests
  delete webpackConfig.entry

  return webpackConfig
}
