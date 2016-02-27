define([
    'backbone',
    '../model/tea'
], function (Backbone, Tea) {
    'use strict';

    return Backbone.Collection.extend({
        model: Tea
    });
});
