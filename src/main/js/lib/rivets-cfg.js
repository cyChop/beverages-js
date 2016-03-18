define([
    'rivets',
    'underscore',

    'rivets-backbone-adapter'
], function (rivets, _) {
    'use strict';

    /* Make sure Array.isArray is available (should be). */
    if (!Array.isArray) {
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }

    /* === Arrays === */

    rivets.formatters.join = function (array, separator) {
        return Array.isArray(array) ? array.join(separator) : array;
    };

    rivets.formatters.contains = function (array, needle) {
        return Array.isArray(array) ? _.indexOf(array, needle) > -1 : false;
    };

    rivets.formatters.isEmpty = function (array) {
        return !Array.isArray(array) || array.length === 0;
    }

    /* === String === */

    rivets.formatters.startWithCap = function (string) {
        return typeof string === 'string' && string.length > 0
            ? string.charAt(0).toUpperCase() + string.substr(1)
            : string;
    };

    /* === Utils === */

    rivets.formatters.not = function (value) {
        return !value;
    };

    /* === Misc === */

    rivets.formatters.unit = function (value, unit) {
        return value || value === 0 ? value + unit : value;
    };

    return rivets;
});
