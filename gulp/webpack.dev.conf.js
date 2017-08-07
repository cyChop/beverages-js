const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = lg => {
  const webpackConfig = baseWebpackConfig(lg)

  // add hot-reload related code to entry chunks
  Object.keys(webpackConfig.entry).forEach(function (name) {
    webpackConfig.entry[name] = ['./gulp/dev-client'].concat(webpackConfig.entry[name])
  })

  return merge(webpackConfig, {
    module: {
      rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    // entry: {'beverages-mock': utils.resolve('src/mock/fake-app-server')},
    plugins: [
      new webpack.DefinePlugin({
        'process.env': config.dev.env
      }),
      // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
      new FriendlyErrorsPlugin()
    ]
  })
}
