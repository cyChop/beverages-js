const webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

const cfg = webpackConfig('fr');

module.exports = merge.smart(cfg, {
    devtool: 'eval',

    entry: {'beverages-mock': path.join(__dirname, 'dev/mock/fake-app-server')},

    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /src\/.*\.js$/,
                exclude: /node_modules|test/,
                loader: 'eslint-loader',
                query: path.join(__dirname, 'src/.eslintrc.yml')
            }
        ]
    }
});
