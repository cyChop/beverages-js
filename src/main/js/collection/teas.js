define([
    'backbone',
    '../model/tea'
], function (Backbone, Tea) {
    return Backbone.Collection.extend({
        model: Tea
    });
});
