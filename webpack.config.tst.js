var webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

var cfg = webpackConfig('en');

module.exports = merge.smart(cfg, {
    module: {
        postLoaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|test|dev)/,
                loader: 'istanbul-instrumenter'
            }
        ]
    },

    resolve: {
        root: cfg.resolve.root.concat([
            path.join(__dirname, '/dev')
        ])
    },

    externals: {}
});
