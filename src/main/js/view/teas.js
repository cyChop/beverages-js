define([
    'backbone',
    'rivets-cfg',

    'text!../template/teas.html'
], function (Backbone, rivets, template) {
    'use strict';

    rivets.formatters.teaIcon = function (value) {
        return value ? 'tea-icon-' + value : value;
    };

    rivets.formatters.minMax = function (value) {
        if (value) {
            if (typeof value === 'object') {
                return value.min + '-' + value.max;
            } else {
                return value;
            }
        }
        return '';
    };

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
