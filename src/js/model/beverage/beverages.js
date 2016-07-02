/**
 * @class Beverages
 * @classdesc A list of {@link Beverage} instances.
 */
define([
    'backbone',
    './beverage'
], function (Backbone, Beverage) {
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

    return Backbone.Collection.extend(
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
                return this.gSheetId
                    ? 'https://spreadsheets.google.com/feeds/list/' + this.gSheetId + '/od6/public/values?alt=json'
                    : undefined;
            },

            parse: function (data) {
                return data.feed.entry;
            },

            comparator: function (item) {
                return BEVERAGE_ORDER[item.get('basis')];
            }
        });
});
