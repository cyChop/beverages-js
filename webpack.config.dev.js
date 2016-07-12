var webpackConfig = require('./webpack.config'),
    merge = require('webpack-merge'),
    path = require('path');

var cfg = webpackConfig('fr');

module.exports = merge.smart(cfg, {
    devtool: 'eval',
    debug: true,

    entry: {
        'beverages': cfg.entry.beverages,
        'beverages-mock': path.join(__dirname, 'src/dev/mock/fake-app-server')
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'eslint', exclude: /node_modules|test/}
        ]
    },

    eslint: {
        configFile: path.join(__dirname, '/.eslintrc.yml'),
        formatter: require('eslint/lib/formatters/stylish')
    }
});
