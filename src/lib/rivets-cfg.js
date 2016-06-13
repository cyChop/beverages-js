define([
    'rivets',
    'underscore',
    'jquery',

    'rivets-backbone-adapter'
], function (rivets, _, $) {
    'use strict';

    /* Make sure Array.isArray is available (should be). */
    if (!Array.isArray) {
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }

    /* === Objects === */

    rivets.formatters.defined = function (value) {
        return value !== undefined && value !== null;
    };

    /* === Arrays === */

    rivets.formatters.join = function (array, separator) {
        return Array.isArray(array) ? array.join(separator) : array;
    };

    rivets.formatters.contains = function (array, needle) {
        return Array.isArray(array) ? _.indexOf(array, needle) > -1 : false;
    };

    rivets.formatters.length = function (array) {
        return array.length;
    };

    rivets.formatters.isEmpty = function (array) {
        return !Array.isArray(array) || array.length === 0;
    };

    /* === String === */

    rivets.formatters.startWithCap = function (string) {
        return typeof string === 'string' && string.length > 0
            ? string.charAt(0).toUpperCase() + string.substr(1)
            : string;
    };

    /* === Booleans === */

    rivets.formatters.toBoolean = function (value) {
        return Boolean(value);
    };
    
    rivets.formatters.eq = function (value, other) {
        return value === other;
    };

    rivets.formatters.not = function (value) {
        return !value;
    };

    rivets.formatters.and = function (value, other) {
        return value && other;
    };

    rivets.formatters.or = function (value, other) {
        return value || other;
    };

    /* === Utils === */

    rivets.formatters.map = function (value, map) {
        return value && map ? map[value] : value;
    };

    /* === Misc === */

    rivets.formatters.if = function (test, value1, value2) {
        return test ? value1 : value2;
    };

    rivets.formatters.unit = function (value, unit) {
        return value || value === 0 ? value + unit : value;
    };

    /* === Custom binders === */
    // Provided on https://github.com/mikeric/rivets/wiki/Custom-Binders
    /**
     * Adds a new class to the element (using the attribute value) in addition to any existing ones.
     * On subsequent changes, the previously added class is replaced with the new one.
     *
     * @param {Object} el the element
     * @param {string} value the class to add
     */
    rivets.binders.addclass = function (el, value) {
        if (el.addedClass) {
            $(el).removeClass(el.addedClass);
            delete el.addedClass;
        }

        if (value) {
            $(el).addClass(value);
            el.addedClass = value;
        }
    };

    // Need to add a binder because rv-value="0" fails
    rivets.binders.progress = function (el, value) {
        el.value = value;
        el.max = 100;
    };

    return rivets;
});
