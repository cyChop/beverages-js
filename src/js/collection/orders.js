define([
    'backbone',
    '../model/order'
], function (Backbone, Order) {
    'use strict';

    return Backbone.Collection.extend({
        model: Order
    });
});
