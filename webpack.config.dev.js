const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')
const path = require('path')

const cfg = webpackConfig('fr')

module.exports = merge.smart(cfg, {
  devtool: 'eval',

  entry: {'beverages-mock': path.join(__dirname, 'dev/mock/fake-app-server')}
})
