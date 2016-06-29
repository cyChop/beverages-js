define([
    'backbone',
    './order'
], function (Backbone, Order) {
    'use strict';
    return Backbone.Model.extend({
        defaults: {
            total: 0,
            orders: new Backbone.Collection([], {
                model: Order
            })
        },

        initialize: function () {
            var orders = this.get('orders');
            orders.on('add change', function () {
                this.set('total', orders.reduce(function (memo, order) {
                    return memo + order.get('quantity');
                }, 0));
            }, this);
        },

        // TODO document
        order: function (beverage) {
            var order = this.get('orders').get(beverage.get('id'));

            if (order) {
                order.set('quantity', order.get('quantity') + 1);
            } else {
                this.get('orders').add(new Order({beverage: beverage}));
            }
        }
    });
});