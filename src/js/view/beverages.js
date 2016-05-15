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

    /* === Constants & functions === */
    var autoTimeRange = {
        morning: [5, 11],
        daytime: [10, 20],
        evening: [18, 2],
        unknown: [0, 24]
    };
    var isInTimeRange = function(range) {
        var min = autoTimeRange[range][0],
            max = autoTimeRange[range][1],
            time = new Date().getHours();
        return min <= max ? min <= time && time < max : min <= time || time < max;
    };

    /* === Backbone view === */
    return Backbone.View.extend({
        /** {Beverages} The full collection of all available beverages. */
        beverages: null,

        /** {Beverages} */
        filtered: null,

        /** Filters */
        filters: null,

        context: null,

        rview: null,

        events: {
            'click .filters .bev-icon': '_toggleBeverageFilter',
            'click .filters .moment-icon': '_toggleMomentFilter',
            'click .beverage .bev-icon': '_toggleDetail'
        },

        initialize: function (options) {
            this.context = {
                i18n: null,
                ready: false,
                error: false
            };

            var gSheetId;
            if (options) {
                gSheetId = options.gSheetId;
                this.context.i18n = i18n(options.lang);
            } else {
                this.context.i18n = i18n();
            }

            this._initFilters(options.filters);
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
            this.context.beverages = this.beverages;
            this.context.filtered = this.filtered;
            this.context.filters = this.filters;
            this.rview = rivets.bind(this.$el.html(template), this.context);

            // init tooltips
            this._tooltip();

            // return
            return this;
        },

        _initFilters: function (options) {
            var availableBases = _.keys(this.context.i18n.basis);

            var settings = _.defaults(options, {
                basis: availableBases,
                moments: _.keys(this.context.i18n.moment)
            });

            if (_.contains(settings.basis, 'teas')) {
                settings.basis = settings.basis.concat(_.filter(availableBases, function (basis) {
                    return basis.startsWith('tea-');
                }));
            }

            this.filters = {
                bases: null,
                moments: null
            };

            this.filters.bases = [];
            for (var i = 0; i < availableBases.length; i++) {
                var basis = availableBases[i];
                this.filters.bases.push({
                    key: basis,
                    active: _.indexOf(settings.basis, basis) > -1
                });
            }

            this.filters.moments = [];
            for (var i = 0; i < settings.moments.length; i++) {
                this.filters.moments.push({
                    key: settings.moments[i],
                    active: options.autoTime ? isInTimeRange(settings.moments[i]) : true
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
            this.filtered.reset(this.beverages.filter(function (beverage) {
                return this._isBasisActive(beverage) && this._isMomentActive(beverage);
            }.bind(this)));
        },

        _isBasisActive: function (beverage) {
            return _.find(this.filters.bases, function (basis) {
                    return beverage.get('basis') === basis.key;
                }
            ).active;
        },

        _isMomentActive: function (beverage) {
            var times = beverage.get('time');
            for (var key in times) { // FIXME see _.keys/keysOwn?
                var time = times[key];
                if (!rivets.formatters.defined(time) && _.findWhere(this.filters.moments, {key: 'unknown'}).active
                    || time && _.findWhere(this.filters.moments, {key: key}).active) {
                    return true;
                }
            }
            return false;
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
            this._toggleFilter(event, this.filters.bases);
        },

        _toggleMomentFilter: function (event) {
            this._toggleFilter(event, this.filters.moments);
        },

        _toggleFilter: function (event, filterCollection) {
            var key = $(event.currentTarget).data('key');
            var filter = _.find(filterCollection, function (basis) {
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
