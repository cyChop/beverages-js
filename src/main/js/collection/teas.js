define([
    'backbone',
    '../model/tea'
], function (Backbone, Tea) {
    'use strict';

    return Backbone.Collection.extend({
        model: Tea,

        url: 'database/teas.json',

        parse: function (data) {
            return data.teas;
        }
    });
});
