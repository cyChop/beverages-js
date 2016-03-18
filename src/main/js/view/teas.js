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
            if (value.min) {
                return value.max && value.min !== value.max ? value.min + '-' + value.max : value.min;
            } else if (value.max) {
                return value.max;
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
