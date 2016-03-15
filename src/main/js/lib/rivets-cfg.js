define([
    'rivets',
    'jquery',

    'rivets-backbone-adapter'
], function (rivets, $) {
    'use strict';

    rivets.formatters.join = function (array, separator) {
        return $.isArray(array) ? array.join(separator) : array;
    };

    rivets.formatters.contains = function (array, needle) {
        return $.isArray(array) ? $.inArray(needle, array) > -1 : false;
    };

    rivets.formatters.not = function (value) {
        return !value;
    };

    rivets.formatters.unit = function(value, unit) {
        return value || value === 0 ? value + unit : value;
    };

    return rivets;
});
