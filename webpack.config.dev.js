var webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

var cfg = webpackConfig('fr');

module.exports = merge.smart(cfg, {
    devtool: 'eval',

    entry: {
        'beverages-mock': path.join(__dirname, 'dev/mock/fake-app-server')
    /*},

    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules|test/,
                loaders: ['eslint-loader']
            }
        ]*/
    }
});
