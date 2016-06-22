define([
    'backbone',
    '../model/order'
], function (Backbone, Order) {
    'use strict';

    return Backbone.Collection.extend({
        model: Order,

        total: 0,

        initialize: function () {
            this.on('add change', function () {
                this.total = this.reduce(function (memo, order) {
                    return memo + order.get('quantity');
                }, 0);
            }, this);
        }
    });
});
