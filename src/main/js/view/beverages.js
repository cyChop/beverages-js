define([
    'backbone',
    'rivets-cfg',
    'jquery',

    'text!../template/beverages.html',

    '../collection/beverages',
    '../i18n/i18n',

    'bootstrap/dist/js/umd/tooltip',
    'bootstrap/dist/js/umd/popover',

    '../../scss/beverages.scss'
], function (Backbone, rivets, $, template, Beverages, i18n) {
    'use strict';

    /* === Rivets configuration === */
    rivets.formatters.theineLevel100 = function (value) {
        switch (value) {
            case 'none':
                return 0;
            case 'low':
                return 25;
            case 'medium':
                return 50;
            case 'high':
                return 75;
            case 'coffee':
            case 'unknown':
            default:
                return 100;
        }
    };

    rivets.formatters.minMax = function (value, separator) {
        if (value) {
            if (value.min) {
                return value.max && value.min !== value.max
                    ? value.min + (separator ? separator : '-') + value.max
                    : value.min;
            } else if (value.max) {
                return value.max;
            }
        }
        return '';
    };

    rivets.formatters.showMinMax = function (value) {
        return value && (value.min || value.max);
    };

    /* === Backbone view === */
    return Backbone.View.extend({

        beverages: null,
        i18n: null,

        events: {
            'click .beverage .bev-icon': 'toggleDetail'
        },

        initialize: function (options) {
            var gSheetId;
            if (options) {
                gSheetId = options.gSheetId;
                this.i18n = i18n(options.lang);
            } else {
                this.i18n = i18n();
            }

            if (gSheetId) {
                this.beverages = new Beverages({
                    gSheetId: gSheetId
                });
                this.beverages.on('sync', this.tooltip, this).fetch();
            } else {
                // FIXME display an error message
            }
        },

        render: function () {
            rivets.bind(this.$el.html(template), {
                i18n: this.i18n,
                beverages: this.beverages
            });
            this.tooltip();
            return this;
        },

        tooltip: function () {
            this.$('[data-toggle="tooltip"]').tooltip();
            this.$('[data-toggle="popover"]').popover();
        },

        toggleDetail: function (event) {
            $(event.currentTarget.closest('.beverage')).toggleClass('detailed');
        }
    });
});
