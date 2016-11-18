/**
 * The module defining {@link OrderSummary}.
 *
 * @class OrderSummary
 * @classdesc A list of {@link Order} instances.
 * It also provides a <code>total</code> propery that contains the total number of cups to brew.
 *
 * @module model/order/order-summary
 */
define([
    'underscore',
    'backbone',
    './order'
], function (_, Backbone, Order) {
    'use strict';

    // eslint-disable-next-line no-inline-comments
    return /** @alias module:model/order/order-summary */ Backbone.Model.extend(
        /** @lends OrderSummary.prototype */
        {
            defaults: {
                total: 0,
                orders: new Backbone.Collection([], {model: Order})
            },

            /** @constructs */
            initialize: function () {
                var orders = this.get('orders');

                // The total should be updated any time an order is added, removed or updated
                orders.on('update change', function () {
                    this.set('total', orders.reduce(function (memo, order) {
                        return memo + order.get('quantity');
                    }, 0));
                }, this);
            },

            /**
             * Adds an order for the specified beverage.
             *
             * If an order already exists for this beverage, its quantity will be incremented by one.
             *
             * @param {Beverage} beverage the beverage an order is being passed for
             * @param {number} [quantity=1] the quantity being ordered
             * @public
             */
            order: function (beverage, quantity) {
                var order = this.get('orders').get(beverage.get('id')),
                    q = quantity || 1;

                if (order) {
                    order.set('quantity', order.get('quantity') + q);
                } else {
                    this.get('orders').add(new Order({
                        beverage: beverage,
                        quantity: q
                    }));
                }
            },

            /**
             * Removes all orders. Back to a clean slate!
             */
            clear: function () {
                this.get('orders').reset();
                this.set('total', 0);
                this.trigger('update');
            }
        });
});
