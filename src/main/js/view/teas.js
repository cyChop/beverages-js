define([
    'backbone',
    'rivets',

    'text!../template/teas.html'
], function (Backbone, rivets, template) {
    'use strict';

    rivets.adapters[':'] = {
        observe: function(obj, keypath, callback) {
            obj.on('change:' + keypath, callback)
        },
        unobserve: function(obj, keypath, callback) {
            obj.off('change:' + keypath, callback)
        },
        get: function(obj, keypath) {
            return obj.get(keypath)
        },
        set: function(obj, keypath, value) {
            obj.set(keypath, value)
        }
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
