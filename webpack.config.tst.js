const webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

const cfg = webpackConfig('en');

module.exports = merge.smart(cfg, {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|test|dev)/,
                loaders: ['istanbul-instrumenter-loader?esModules=true']
            },
            {
                enforce: 'pre',
                test: /src\/.*\.js$/,
                exclude: /node_modules|test/,
                loader: 'eslint-loader',
                query: path.join(__dirname, 'src/.eslintrc.yml')
            },
            {
                enforce: 'pre',
                test: /test\/.*\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                query: path.join(__dirname, 'test/.eslintrc.yml')
            }
        ]
    },

    externals: {}
});
