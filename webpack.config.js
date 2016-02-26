const webpack = require('webpack');

module.exports = {
    entry: './src/main/js/teas.js',
    output: {
        filename: 'teas.bundle.js'
    },
    loaders: [
        {test: /backbone/, loader: 'exports?Backbone!imports?underscore,jquery'}
    ]
};
