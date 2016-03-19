const path = require('path');

module.exports = {
    entry: {
        beverages: path.join(__dirname, '/src/main/js/beverages.js')
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].bundle.js',
        chunkFilename: "[id].chunk.js"
    },
    module: {
        loaders: [
            {test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery'},

            {test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?mimetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file?prefix=font/'},

            {test: /\.scss/, loader: 'style!css!resolve-url!sass?sourceMap'}
        ]
    },
    resolve: {
        root: [path.join(__dirname, './node_modules')],
        alias: {
            'rivets-cfg': path.join(__dirname, '/src/main/js/lib/rivets-cfg.js')
        }
    }
};
