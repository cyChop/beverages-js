define([
    'rivets',
    'underscore',

    'rivets-backbone-adapter'
], function (rivets, _) {
    'use strict';
    
    /* Make sure Array.isArray is available (should be). */
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }

    rivets.formatters.join = function (array, separator) {
        return isArray(array) ? array.join(separator) : array;
    };

    rivets.formatters.contains = function (array, needle) {
        return isArray(array) ? _.indexOf(array, needle) > -1 : false;
    };

    rivets.formatters.not = function (value) {
        return !value;
    };

    rivets.formatters.unit = function(value, unit) {
        return value || value === 0 ? value + unit : value;
    };

    return rivets;
});
