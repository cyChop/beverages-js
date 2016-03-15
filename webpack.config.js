const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        teas: path.join(__dirname, '/src/main/js/teas.js')
    },
    output: {
        filename: 'teas.bundle.js'
    },
    module: {
        loaders: [
            {test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery'}
        ]
    },
    resolve: {
        root: [path.join(__dirname, './node_modules')],
        alias: {
            'rivets-cfg': path.join(__dirname, '/src/main/js/lib/rivets-cfg.js')
        }
    }
};
