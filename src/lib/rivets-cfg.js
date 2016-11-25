import rivets from 'rivets';
import _ from 'underscore';
import $ from 'jquery';
require('rivets-backbone-adapter');

/* === Objects === */

rivets.formatters.defined = (value) => !_.isUndefined(value) && !_.isNull(value);

// eslint-disable-next-line no-extra-parens
const emptyAsDefault = (obj) => (rivets.formatters.defined(obj) ? obj : '');

rivets.formatters.eq = (value, other) => value === other;

/* === Arrays === */

// eslint-disable-next-line no-extra-parens
rivets.formatters.join = (array, separator) => (Array.isArray(array) ? array.join(separator) : emptyAsDefault(array));

// eslint-disable-next-line no-extra-parens
rivets.formatters.contains = (array, needle) => (Array.isArray(array) ? _.indexOf(array, needle) > -1 : false);

// eslint-disable-next-line no-extra-parens
rivets.formatters.length = (array) => (Array.isArray(array) ? array.length : 0);

rivets.formatters.isEmpty = (array) => rivets.formatters.length(array) === 0;

/* === String === */

rivets.formatters.append = (target, appended) => String(emptyAsDefault(target)) + String(emptyAsDefault(appended));

// eslint-disable-next-line no-extra-parens
rivets.formatters.startWithCap = (string) => (_.isString(string) && string.length > 0
    ? string.charAt(0).toUpperCase() + string.substr(1)
    : emptyAsDefault(string));

/* === Booleans === */

rivets.formatters.toBoolean = (value) => Boolean(value);

rivets.formatters.not = (value) => !value;

rivets.formatters.and = (value, other) => value && other;

rivets.formatters.or = (value, other) => value || other;

// eslint-disable-next-line no-extra-parens
rivets.formatters.if = (test, value1, value2) => (test ? value1 : value2);

/* === Utils === */

// eslint-disable-next-line no-extra-parens
rivets.formatters.map = (value, map) => (value && map ? map[value] || value : emptyAsDefault(value));

/* === Custom binders === */
// Provided on https://github.com/mikeric/rivets/wiki/Custom-Binders
/**
 * Adds a new class to the element (using the attribute value) in addition to any existing ones.
 * On subsequent changes, the previously added class is replaced with the new one.
 *
 * @param {Object} el the element
 * @param {string} value the class to add
 */
rivets.binders.addclass = (el, value) => {
    if (el.addedClass) {
        $(el).removeClass(el.addedClass);
        delete el.addedClass;
    }

    if (value) {
        $(el).addClass(value);
        el.addedClass = value;
    }
};

export default rivets;
