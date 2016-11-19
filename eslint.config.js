// FIXME this file is not taken into account; upgrade eslint-loader?
var path = require('path');

module.exports = {
    configFile: path.join(__dirname, '/.eslintrc.yml'),
    formatter: require('eslint/lib/formatters/stylish')
};
