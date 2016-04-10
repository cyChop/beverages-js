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
        context: {
            lockedAndLoaded: false
        },

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
                var that = this;

                this.beverages = new Beverages(null, {
                    gSheetId: gSheetId
                });

                // Use a loading state each time the DB is reloaded.
                this.beverages.on('request', function () {
                    this.context.lockedAndLoaded = false;
                }, this);
                this.beverages.on('sync', function () {
                    this.context.lockedAndLoaded = true;
                }, this);

                // Tooltips must be reenabled
                this.beverages.on('sync', this.tooltip, this).fetch();
            } else {
                // FIXME display an error message
            }
        },

        render: function () {
            this.context.i18n = this.i18n;
            this.context.beverages = this.beverages;
            rivets.bind(this.$el.html(template), this.context);
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
