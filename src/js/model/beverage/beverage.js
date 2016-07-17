/**
 * The module defining {@link Beverage}.
 *
 * @class Beverage
 * @classdesc A beverage and its properties
 *
 * @module model/beverage/beverage
 */
define([
    'backbone',
    'data/google-sheet-adapter'
], function (Backbone, Adapter) {
    'use strict';

    // eslint-disable-next-line no-inline-comments
    return /** @alias module:model/beverage/beverage */ Backbone.Model.extend(
        /** @lends Beverage.prototype */
        {
            /** @constructs */
            initialize: function () {
                // just a dirty fix for JSDoc
            },

            /**
             * Parses a Google Sheet-JSON-formatted line into a beverage's properties.
             *
             * @param {Object} data a Google Sheet-JSON-formatted line
             * @return {Object} the beverage's properties
             */
            parse: function (data) {
                return {
                    id: data.id.$t,
                    name: Adapter.get(data, 'name'),
                    brand: Adapter.get(data, 'brand'),
                    basis: Adapter.get(data, 'basis'),
                    stock: Adapter.getBool(data, 'stock', true),
                    packaged: Adapter.getBool(data, 'packaged', true),
                    theine: Adapter.get(data, 'theine'),
                    time: {
                        morning: Adapter.getBool(data, 'morning', false),
                        daytime: Adapter.getBool(data, 'daytime', false),
                        evening: Adapter.getBool(data, 'evening', false)
                    },
                    preparation: {
                        temp: Adapter.getMinMax(data, 't'),
                        time: Adapter.getMinMax(data, 'time')
                    },
                    ingredients: Adapter.getCsv(data, 'ingredients'),
                    benefits: Adapter.getCsv(data, 'benefits'),
                    note: Adapter.get(data, 'note')
                };
            }
        });
});
