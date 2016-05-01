define([
    'underscore',
    'backbone',
    'lib/rivets-cfg',
    'jquery',

    '../template/beverages.html',

    '../collection/beverages',
    '../i18n/i18n',

    'bootstrap/dist/js/umd/tooltip',
    'bootstrap/dist/js/umd/popover',

    '../../scss/beverages.scss'
], function (_, Backbone, rivets, $, template, Beverages, i18n) {
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

        /** {Beverages} The full collection of all available beverages. */
        beverages: null,

        /** {Beverages} */
        filtered: null,
        context: {
            i18n: null,
            ready: false,
            error: false
        },

        rview: null,

        events: {
            'click .beverage .bev-icon': 'toggleDetail'
        },

        initialize: function (options) {
            var gSheetId;
            if (options) {
                gSheetId = options.gSheetId;
                this.context.i18n = i18n(options.lang);
            } else {
                this.context.i18n = i18n();
            }

            if (gSheetId) {
                this._initAndFetchBeverages(gSheetId);
            } else {
                this.context.error = this.context.i18n.error.configuration;
            }
        },

        render: function () {
            // remove any previous binding
            if (this.rview) {
                this.rview.unbind();
            }

            // bind template to context
            this.context.beverages = this.filtered;
            this.rview = rivets.bind(this.$el.html(template), this.context);

            // init tooltips
            this._tooltip();

            // return
            return this;
        },

        _initAndFetchBeverages: function (gSheetId) {
            this.beverages = new Beverages(null, {
                gSheetId: gSheetId
            });


            this.filtered = new Beverages();

            this.beverages.on('request', function () {
                this.context.ready = false;
            }, this).on('sync', function () {
                this._filterBeverages();
                this.context.ready = true;
                this._tooltip();
            }, this).fetch().error(
                _.bind(function () {
                    this.context.error = this.context.i18n.error.loading;
                }, this)
            );
        },

        _filterBeverages: function() {
            this.filtered.reset(this.beverages.filter(function (beverage) {
                // use filter settings
                // TODO filter
                return true;
            }));
        },

        /**
         * Initializes the tooltips and popovers of the rendered page. This is set only on existing elements: the method
         * should be called again any time a new tooltip trigger element is added to the page.
         */
        _tooltip: function () {
            this.$('[data-toggle="tooltip"]').tooltip();
            this.$('[data-toggle="popover"]').popover();
        },

        _toggleDetail: function (event) {
            $(event.currentTarget.closest('.beverage')).toggleClass('detailed');
        },

        remove: function () {
            if (this.rview) {
                this.rview.unbind();
            }
            return _.bind(Backbone.View.prototype.remove, this)();
        }
    });
});
