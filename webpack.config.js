const webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        beverages: path.join(__dirname, '/src/js/beverages')
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery'},

            {test: /bootstrap[\/\\]dist[\/\\]js/, loader: 'imports?jQuery=jquery'},

            {test: /\.json$/, loader: 'json'},

            {test: /\.woff2?(\?.+)?$/, loader: 'url?mimetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)(\?.+)?$/, loader: 'file?prefix=font/'},

            {test: /\.scss$/, loader: 'style!css!postcss!resolve-url!sass?sourceMap'}
        ],
        noParse: /[\/\\]sinon[\/\\]pkg[\/\\]sinon.js$/
    },
    externals: {
        'jquery': 'jQuery'
    },
    postcss: function () {
        return [autoprefixer];
    },
    resolve: {
        root: [path.join(__dirname, '/node_modules')],
        alias: {
            // Funny node modules
            'sinon': path.join(__dirname, '/node_modules/sinon/pkg/sinon.js'),

            // My own code
            'lib': path.join(__dirname, '/src/lib')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Requirements for Bootstrap, popover and tooltip
            'window.Tether': 'tether',
            'Tether': 'tether'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
