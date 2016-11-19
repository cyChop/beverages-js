var webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

var cfg = webpackConfig('en');

module.exports = merge.smart(cfg, {
    module: {
        loaders: [
            {
                enforce: 'post',
                test: /\.js$/,
                exclude: /(node_modules|test|dev)/,
                loaders: ['istanbul-instrumenter-loader']
            }
        ]
    },

    resolve: {
        mainFiles: [
            path.join(__dirname, '/dev')
        ]
    },

    externals: {}
});
