const webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

const cfg = webpackConfig('fr');

module.exports = merge.smart(cfg, {
    devtool: 'eval',

    entry: {'beverages-mock': path.join(__dirname, 'dev/mock/fake-app-server')}
});
