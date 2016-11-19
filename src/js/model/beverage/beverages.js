/**
 * The module defining {@link Beverages}.
 *
 * @class Beverages
 * @classdesc A list of {@link Beverage} instances.
 *
 * @module model/beverage/beverages
 */
define([
    'backbone',
    './beverage',
    '../../data/google-sheet-adapter'
], function (Backbone, Beverage, Adapter) {
    'use strict';

    /**
     * The order to use for displaying the beverages based on their basis.
     *
     * @type {Object.<String, number>}
     * @const
     * @private
     */
    var BEVERAGE_ORDER = {
        'tea-black': 0,
        'tea-green': 1,
        'tea-oolong': 1,
        'tea-white': 2,
        'tea-rooibos': 3,
        'infusion': 4,
        'coffee': 5,
        'cocoa': 6
    };

    // eslint-disable-next-line no-inline-comments
    return /** @alias module:model/beverage/beverages */ Backbone.Collection.extend(
        /** @lends Beverages.prototype */
        {
            model: Beverage,
            gSheetId: null,

            /**
             * Creates a new instance of the collection.
             *
             * @param {Array.<Beverage>} models the models to include in collection at initialization
             * @param {{gSheetId: string}} options the options for the collection
             * @constructs
             */
            initialize: function (models, options) {
                if (options) {
                    this.gSheetId = options.gSheetId;
                }
            },

            url: function () {
                return Adapter.getSheetAsJsonUrl(this.gSheetId);
            },

            /**
             * Returns an array of Google Sheet-JSON-formatted line to parse to beverages.
             *
             * @param {Object} data a Google Sheet-JSON-formatted sheet
             * @return {Array.<Object>} an array of Google Sheet-JSON-formatted lines
             */
            parse: function (data) {
                return data.feed.entry;
            },

            comparator: function (item) {
                return BEVERAGE_ORDER[item.get('basis')];
            }
        });
});
