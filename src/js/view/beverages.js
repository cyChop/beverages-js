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

        /** Filters */
        filters: {
            bases: null
        },

        context: {
            i18n: null,
            ready: false,
            error: false
        },

        rview: null,

        events: {
            'click .filters .bev-icon': '_toggleBeverageFilter',
            'click .beverage .bev-icon': '_toggleDetail'
        },

        initialize: function (options) {
            var gSheetId;
            if (options) {
                gSheetId = options.gSheetId;
                this.context.i18n = i18n(options.lang);
            } else {
                this.context.i18n = i18n();
            }

            this._initFilters();
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
            this.context.filters = this.filters;
            this.rview = rivets.bind(this.$el.html(template), this.context);

            // init tooltips
            this._tooltip();

            // return
            return this;
        },

        _initFilters: function () {
            this.filters.bases = [];
            for (var basis in this.context.i18n.basis) {
                this.filters.bases.push({
                    key: basis,
                    active: true
                });
            }
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

        _filterBeverages: function () {
            var that = this;
            this.filtered.reset(this.beverages.filter(function (beverage) {
                return _.find(that.filters.bases, function (basis) {
                        return beverage.get('basis') === basis.key
                    }
                ).active;
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

        _toggleBeverageFilter: function (event) {
            var key = $(event.currentTarget).data('key');
            var filter = _.find(this.filters.bases, function (basis) {
                console.log(basis, key);
                return key === basis.key;
            });
            filter.active = !filter.active;
            this._filterBeverages();
        },

        _toggleDetail: function (event) {
            $(event.currentTarget).closest('.beverage').toggleClass('detailed');
        },

        remove: function () {
            if (this.rview) {
                this.rview.unbind();
            }
            return _.bind(Backbone.View.prototype.remove, this)();
        }
    });
});
