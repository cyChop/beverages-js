const webpackConfig = require('./webpack.config')
const webpack = require('webpack')
const merge = require('webpack-merge')

const LANGUAGES = ['fr', 'en']

module.exports = LANGUAGES.map(function (lg) {
  return merge.smart(webpackConfig(lg), {
    module: {
      rules: [
        {
          test: /\.html?$/,
          use: [
            'raw-loader',
            'html-minify-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  })
})
