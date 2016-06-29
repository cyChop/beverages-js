define([
    'backbone'
], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            quantity: 1
        },

        initialize: function (data) {
            this.set('id', data.beverage.get('id'));
        }
    });
});
