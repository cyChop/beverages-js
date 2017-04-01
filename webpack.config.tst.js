const webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

const cfg = webpackConfig('en');

module.exports = merge.smart(cfg, {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|test|dev)/,
                use: ['istanbul-instrumenter-loader?esModules=true']
            }
        ]
    },

    externals: {}
});
