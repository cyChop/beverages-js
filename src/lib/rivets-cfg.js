import rivets from 'rivets'
import { indexOf, isUndefined, isNull, isString } from 'underscore'
import $ from 'jquery'

import 'rivets-backbone-adapter'

/* === Objects === */

rivets.formatters.defined = (value) => !isUndefined(value) && !isNull(value)

const emptyAsDefault = (obj) => (rivets.formatters.defined(obj) ? obj : '')

rivets.formatters.eq = (value, other) => value === other

/* === Arrays === */

rivets.formatters.join = (array, separator) => (Array.isArray(array) ? array.join(separator) : emptyAsDefault(array))

rivets.formatters.contains = (array, needle) => (Array.isArray(array) ? indexOf(array, needle) > -1 : false)

rivets.formatters.length = (array) => (Array.isArray(array) ? array.length : 0)

rivets.formatters.isEmpty = (array) => rivets.formatters.length(array) === 0

/* === String === */

rivets.formatters.append = (target, appended) => String(emptyAsDefault(target)) + String(emptyAsDefault(appended))

rivets.formatters.startWithCap = (string) => (isString(string) && string.length > 0
  ? string.charAt(0).toUpperCase() + string.substr(1)
  : emptyAsDefault(string))

/* === Booleans === */

rivets.formatters.toBoolean = (value) => Boolean(value)

rivets.formatters.not = (value) => !value

rivets.formatters.and = (value, other) => value && other

rivets.formatters.or = (value, other) => value || other

rivets.formatters.if = (test, value1, value2) => (test ? value1 : value2)

/* === Utils === */

rivets.formatters.map = (value, map) => (value && map ? map[value] || value : emptyAsDefault(value))

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
    $(el).removeClass(el.addedClass)
    delete el.addedClass
  }

  if (value) {
    $(el).addClass(value)
    el.addedClass = value
  }
}

export default rivets
