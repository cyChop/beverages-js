/**
 * @module filters/filters
 */

// region logic
/**
 * Tests whether a value is defined.
 *
 * @param value the value to test
 * @return <code>true</code> if the value is defined and not <code>null</code>, <code>false</code> otherwise
 */
export const defined = value => value !== undefined && value !== null

export const ifElse = (test, value1, value2) => (test ? value1 : value2)
// endregion

// region arrays
/**
 * Returns all elements of an array concatenated in a single string.
 *
 * @param {Array} array the array to join
 * @param {string} [separator=,] the separator to use between the items
 * @return a string representation of all the items in the array
 */
export const join = (array, separator = ',') => (Array.isArray(array) ? array.join(separator) : array || '')
// endregion

// region objects
export const map = (value, map) => ((value && map ? map[value] || value : value) || '')
// endregion

// region formatting
/**
 * Replaces the first character of the supplied string with its capital-case equivalent.
 *
 * @param {string} string the string to apply the transformation to
 * @return the transformed string
 */
export const startWithCap = string => (
  typeof string === 'string' && string.length > 0
    ? string.charAt(0).toUpperCase() + string.substr(1)
    : string || ''
)
// endregion
