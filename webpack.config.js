const webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (lg) {
    return {
        entry: {
            beverages: path.join(__dirname, '/src/js/beverages')
        },
        output: {
            path: path.join(__dirname, '/dist/'),
            filename: '[name].' + lg + '.js'
        },
        module: {
            loaders: [
                {
                    test: /backbone/,
                    loaders: [
                        'exports-loader?Backbone',
                        'imports-loader?underscore,jquery'
                    ]
                },

                {
                    test: /bootstrap[\/\\]js/,
                    loaders: ['imports-loader?jQuery=jquery']
                },

                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader']
                },
                {
                    test: /\.html?$/,
                    loaders: ['raw-loader']
                },

                {
                    test: /\.([ot]tf|woff2?|eot|svg)(\?.+)?$/,
                    loaders: ['file-loader']
                },

                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader?minimize!postcss-loader!sass-loader'
                    })
                }
            ],
            noParse: /[/\\]sinon[/\\]pkg[/\\]sinon\.js$/
        },

        // Resolution configuration
        externals: {jquery: 'jQuery'},
        resolve: {
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

        // Plugins
        plugins: [
            new webpack.ProvidePlugin({
                // Util is used by bootstrap/js/dropdown
                Util: 'exports-loader?Util!bootstrap/js/util'
            }),
            new ExtractTextPlugin('[name].css')
        ]
    };
};
