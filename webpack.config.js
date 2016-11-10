var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (lg) {
    return {
        entry: {
            beverages: [path.join(__dirname, '/src/js/beverages')]
        },
        output: {
            path: path.join(__dirname, '/dist/'),
            //publicPath: '/dist/',
            filename: '[name].' + lg + '.js'
        },
        module: {
            loaders: [
                {test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery'},

                {test: /bootstrap[\/\\]js/, loader: 'imports?jQuery=jquery'},

                {test: /\.html?$/, loader: 'raw'},
                {test: /\.json$/, loader: 'json'},

                {test: /\.([ot]tf|woff2?|eot|svg)(\?.+)?$/, loader: 'file'},

                {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!sass')}
            ],
            noParse: /[\/\\]sinon[\/\\]pkg[\/\\]sinon.js$/
        },

        // Resolution configuration
        externals: {
            'jquery': 'jQuery'
        },
        resolve: {
            root: [
                path.join(__dirname, '/node_modules'),
                path.join(__dirname, '/src/js')
            ],
            alias: {
                // Shortcuts
                'bootstrap/js': 'bootstrap/js/dist',

                // Internationalization
                i18n: path.join(__dirname, '/src/i18n/' + lg),

                // Funny node modules
                sinon: 'sinon/pkg/sinon',

                // My own code
                lib: path.join(__dirname, '/src/lib')
            }
        },

        // Loaders
        postcss: function () {
            return [autoprefixer];
        },

        // Plugins
        plugins: [
            new webpack.ProvidePlugin({
                // Requirements for Bootstrap, popover and tooltip
                'window.Tether': 'tether',
                'Tether': 'tether',
                'Util': 'exports?Util!bootstrap/js/util'
            }),
            new ExtractTextPlugin('[name].css')
        ]
    };
};
