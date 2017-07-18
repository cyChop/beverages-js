/**
 * @module beverages
 */
import $ from 'jquery'
import { extend, isString, isObject } from 'underscore'
import BeveragesView from './view/beverages'

/**
 * The jQuery plugin namespace.
 *
 * @external "jQuery.fn"
 * @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */

// This is a problem...
/**
 * Creates a {@link BeveragesView} in the selected elements.
 *
 * @function external:"jQuery.fn".beverages
 * @param {Object} options the options for the beverages view
 * @return {*} the object the function was called upon to allow for chained calling
 */
$.fn.beverages = function (options) {
  let settings
  if (isString(options)) {
    settings = {gSheetId: options}
  } else if (isObject(options)) {
    settings = options
  } else {
    settings = {}
  }
  new BeveragesView(extend(settings, {el: this})).render()
  return this
}

export default $
