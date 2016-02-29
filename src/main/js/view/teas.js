define([
    'backbone',
    'rivets',

    'text!../template/teas.html',

    'rivets-backbone-adapter' // FIXME Webpack should always import this with rivets
], function (Backbone, rivets, template) {
    'use strict';

    return Backbone.View.extend({

        teas: null,

        initialize: function (options) {
            this.teas = options.teas;
            if (this.teas) {
                this.teas.on('sync', this.render, this);
            }
        },

        render: function () {
            rivets.bind(this.$el.html(template), {
                teas: this.teas
            });
            return this;
        }
    });
});
