/**
 * @module beverages
 */
import $ from 'jquery';
import _ from 'underscore';
import BeveragesView from './view/beverages';

/**
 * The jQuery plugin namespace.
 *
 * @external "jQuery.fn"
 * @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */

// This is a problem...
// eslint-disable-next-line valid-jsdoc
/**
 * Creates a {@link BeveragesView} in the selected elements.
 *
 * @function external:"jQuery.fn".beverages
 * @param {Object} options the options for the beverages view
 * @return {*} the object the function was called upon to allow for chained calling
 */
$.fn.beverages = function (options) {
    let settings;
    if (_.isString(options)) {
        settings = {gSheetId: options};
    } else if (_.isObject(options)) {
        settings = options;
    } else {
        settings = {};
    }
    new BeveragesView(_.extend(settings, {el: this})).render();
    return this;
};

export default $;
