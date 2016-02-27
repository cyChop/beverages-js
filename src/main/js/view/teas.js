define([
    'backbone',
    'rivets',

    'text!../template/teas.html'
], function (Backbone, rivets, template) {
    'use strict';

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template);
            return this;
        }
    });
});
