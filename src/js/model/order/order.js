/**
 * The module defining {@link Order}.
 *
 * @class Order
 * @classdesc An order is basically a beverage and a quantity.
 *
 * @module model/order/order
 */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    // eslint-disable-next-line no-inline-comments
    return /** @alias module:model/order/order */ Backbone.Model.extend(
        /** @lends Order.prototype */
        {
            defaults: {
                quantity: 1
            },

            /**
             * Creates a new order.
             *
             * @param {{beverage: Beverage}} data the data passed to the constructor
             * @constructs
             */
            initialize: function (data) {
                this.set('id', data.beverage.get('id'));
            }
        });
});
