const webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var languages = ['fr', 'en'];

module.exports = languages.map(function (lg) {
    return {
        entry: {
            beverages: path.join(__dirname, '/src/js/beverages')
        },
        output: {
            path: path.join(__dirname, '/dist/'),
            publicPath: '/dist/',
            filename: '[name].' + lg + '.js'
        },
        module: {
            loaders: [
                {test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery'},

                {test: /bootstrap[\/\\]dist[\/\\]js/, loader: 'imports?jQuery=jquery'},

                {test: /\.html?$/, loader: 'raw!html-minify'},
                {test: /\.json$/, loader: 'json'},

                {test: /\.woff2?(\?.+)?$/, loader: 'url?mimetype=application/font-woff'},
                {test: /\.(ttf|eot|svg)(\?.+)?$/, loader: 'file?prefix=font/'},

                {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!sass')},

                {test: /\.js$/, loader: 'eslint', exclude: /node_modules/}
            ],
            noParse: /[\/\\]sinon[\/\\]pkg[\/\\]sinon.js$/
        },

        // Resolution configuration
        externals: {
            'jquery': 'jQuery'
        },
        resolve: {
            root: [path.join(__dirname, '/node_modules')],
            alias: {
                // Internationalization
                'i18n': path.join(__dirname, '/src/js/i18n/' + lg ),

                // Funny node modules
                'sinon': path.join(__dirname, '/node_modules/sinon/pkg/sinon.js'),

                // My own code
                'lib': path.join(__dirname, '/src/lib')
            }
        },

        // Loaders
        postcss: function () {
            return [autoprefixer];
        },
        eslint: {
            configFile: path.join(__dirname, '/.eslintrc.yml'),
            formatter: require('eslint/lib/formatters/stylish')
        },

        // Plugins
        plugins: [
            new webpack.ProvidePlugin({
                // Requirements for Bootstrap, popover and tooltip
                'window.Tether': 'tether',
                'Tether': 'tether'
            }),
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('[name].css')
        ]
    };
});
