define([
    'rivets',
    'jquery',

    'rivets-backbone-adapter'
], function (rivets, $) {
    'use strict';

    rivets.formatters.join = function (array, separator) {
        return $.isArray(array) ? array.join(separator) : array;
    };

    return rivets;
});
