/**
 * @class Order
 * @classdesc An order is basically a beverage and a quantity.
 */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    return Backbone.Model.extend(
        /** @lends Order.prototype */
        {
            defaults: {
                quantity: 1
            },

            /**
             * Creates a new order.
             *
             * This function is automatically called by the constructor.
             *
             * @param {{beverage: Beverage}} data the data passed to the constructor
             */
            initialize: function (data) {
                this.set('id', data.beverage.get('id'));
            }
        });
});
