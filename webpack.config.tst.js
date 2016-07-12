var webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

module.exports = merge.smart(webpackConfig('en'), {
    module: {
        postLoaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|test|dev)/,
                loader: 'istanbul-instrumenter'
            }
        ]
    },

    externals: {}
});
