var webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

var cfg = webpackConfig('fr');

module.exports = merge.smart(cfg, {
    devtool: 'eval',
    debug: true,

    entry: {
        'beverages': cfg.entry.beverages,
        'beverages-mock': path.join(__dirname, 'dev/mock/fake-app-server')
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'eslint', exclude: /node_modules|test/}
        ]
    },

    resolve: {
        root: cfg.resolve.root.concat([
            path.join(__dirname, '/dev')
        ])
    },

    eslint: {
        configFile: path.join(__dirname, '/.eslintrc.yml'),
        formatter: require('eslint/lib/formatters/stylish')
    }
});
