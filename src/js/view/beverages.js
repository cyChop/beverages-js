/**
 * The module defining {@link BeveragesView}.
 *
 * @class BeveragesView
 * @classdesc The presenter controlling the view which displays the beverages.
 *
 * @module view/beverages
 */
define([
    'underscore',
    'backbone',
    'lib/rivets-cfg',
    'jquery',

    '../model/beverage/beverages',
    '../model/order/order-summary',

    'i18n',

    '../template/beverages.html',

    'bootstrap/dist/js/umd/tooltip',
    'bootstrap/dist/js/umd/dropdown',

    '../../scss/beverages.scss'
// eslint-disable-next-line max-params
], function (_, Backbone, rivets, $,
             Beverages, Orders,
             i18n, template) {
    'use strict';

    /* === Constants === */
    /**
     * The name of the field the order summary is stored into in the session storage.
     * @type {string}
     */
    var STORE_KEY_ORDERS = 'orders-summary';

    /* eslint-disable no-magic-numbers */
    /**
     * The value of the progress bar for the theine level (max is 100).
     *
     * The 'unknown' value is 100: the bar must be fully filled and will be styled differently.s
     * @type {Object.<string, number>}
     */
    var THEINE_LEVEL_PC = Object.freeze({
            none: 0,
            low: 25,
            medium: 50,
            high: 75,
            coffee: 100,
            unknown: 100
        }),
        AUTO_TIME_RANGE = Object.freeze({
            morning: [5, 11],
            daytime: [10, 20],
            evening: [18, 2],
            unknown: [0, 24]
        });
    /* eslint-enable no-magic-numbers */

    /* === Rivets configuration === */
    rivets.formatters.theineLevel100 = function (value) {
        return THEINE_LEVEL_PC[value || 'unknown'];
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
    var isInTimeRange = function (range) {
        var min = AUTO_TIME_RANGE[range][0],
            max = AUTO_TIME_RANGE[range][1],
            time = new Date().getHours();
        return min <= max ? min <= time && time < max : min <= time || time < max;
    };

    var testRegexWithLowerCase = function (rgx, str) {
        return rgx.test((str || '').toLowerCase());
    };

    /* === Backbone view === */
    // eslint-disable-next-line no-inline-comments
    return /** @alias module:view/beverages */ Backbone.View.extend(
        /** @lends BeveragesView.prototype */
        {

            /**
             * The full collection of all available beverages.
             * @type Beverages
             */
            beverages: null,

            /**
             * The passed orders.
             * @type OrderSummary
             */
            orders: null,

            /**
             * The applied filters.
             * @type {{bases: Object, moments: Object}}
             */
            filters: null,

            /**
             * The data-binding context.
             * @type Object
             */
            context: null,

            rview: null,

            events: {
                'change .filters :checkbox': '_filterBeverages',
                'keyup .filters :text': '_filterBeverages',
                'click .beverage .btn-more': '_toggleDetail',
                'click .beverage .btn-pick': '_pick',
                'click .btn-pick-random': '_pickRandom',
                'click .btn-clear-order': '_clearOrder'
            },

            /**
             * Creates a new view.
             *
             * @param {{gSheetId: string}} options the options for building this view
             * @constructs
             */
            initialize: function (options) {
                this.context = {
                    i18n: i18n,
                    ready: false,
                    error: false
                };

                var gSheetId;
                if (options) {
                    gSheetId = options.gSheetId;
                    this._initFilters(options.filters);
                }

                if (gSheetId) {
                    this._initAndFetchBeverages(gSheetId);
                } else {
                    this.context.error = this.context.i18n.error.configuration;
                }
            },

            /**
             * Performs the rendering of the view.
             *
             * @return {BeveragesView} the current instance
             * @public
             */
            render: function () {
                // remove any previous binding
                if (this.rview) {
                    this.rview.unbind();
                }

                // bind template to context
                this.context.beverages = this.beverages;
                this.context.orders = this.orders;
                this.context.filters = this.filters;
                this.rview = rivets.bind(this.$el.html(template), this.context);

                // init tooltips
                this._tooltip();

                // done, return the result
                return this;
            },

            _initFilters: function (options) {
                var availableBases = _.keys(this.context.i18n.basis),
                    availableMoments = _.keys(this.context.i18n.moment);

                var settings = _.defaults(options || {}, {
                    basis: availableBases
                });
                if (!settings.autoTime && !settings.moments) {
                    settings.moments = availableMoments;
                }

                if (_.contains(settings.basis, 'teas')) {
                    settings.basis = settings.basis.concat(_.filter(availableBases, function (basis) {
                        // Ensure the basis begins with 'tea-'
                        // .startsWith in not supported in IE
                        return (/^tea-/).test(basis);
                    }));
                }

                this.filters = {
                    bases: null,
                    moments: null,
                    text: ''
                };

                this.filters.bases = [];
                for (var iBases = 0; iBases < availableBases.length; iBases++) {
                    var basis = availableBases[iBases];
                    this.filters.bases.push({
                        key: basis,
                        active: _.indexOf(settings.basis, basis) > -1
                    });
                }

                this.filters.moments = [];
                for (var iTimes = 0; iTimes < availableMoments.length; iTimes++) {
                    var moment = availableMoments[iTimes];
                    this.filters.moments.push({
                        key: moment,
                        active: _.indexOf(settings.moments, moment) > -1 || options.autoTime && isInTimeRange(moment)
                    });
                }
            },

            _initAndFetchBeverages: function (gSheetId) {
                this.orders = new Orders();

                this.beverages = new Beverages(null, {
                    gSheetId: gSheetId
                });

                if (sessionStorage) {
                    // update the data in storage after any change on it
                    this.orders.on('update change', function () {
                        sessionStorage.setItem(STORE_KEY_ORDERS, JSON.stringify(this.orders.get('orders')));
                    }, this);

                    this.beverages.once('sync', function () {
                        var that = this;
                        _.each(JSON.parse(sessionStorage.getItem(STORE_KEY_ORDERS)), function (order) {
                            that.orders.order(that.beverages.get(order.id), order.quantity);
                        });
                    }, this);
                }

                this.beverages
                    .on('request', function () {
                        this.context.ready = false;
                    }, this)
                    .on('sync', function () {
                        this._filterBeverages();
                        this.context.ready = true;
                        this._tooltip();
                    }, this)
                    .fetch({
                        error: _.bind(function () {
                            this.context.error = this.context.i18n.error.loading;
                        }, this)
                    });
            },

            _filterBeverages: function () {
                var shown = 0;
                this.beverages.each(function (beverage) {
                    beverage._show = this._isBasisActive(beverage) && this._isMomentActive(beverage)
                        && this._containsText(beverage);
                    if (beverage._show) {
                        shown++;
                    }
                }.bind(this));
                this.beverages._shown = shown;
            },

            _isBasisActive: function (beverage) {
                return (_.find(this.filters.bases, function (basis) {
                    return beverage.get('basis') === basis.key;
                }) || {active: true}).active;
            },

            _isMomentActive: function (beverage) {
                var times = beverage.get('time'),
                    keys = _.keys(times);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i],
                        time = times[key];
                    if (!rivets.formatters.defined(time) && _.findWhere(this.filters.moments, {key: 'unknown'}).active
                        || time && _.findWhere(this.filters.moments, {key: key}).active) {
                        return true;
                    }
                }
                return false;
            },

            _containsText: function (beverage) {
                if (this.filters.text) {
                    // TODO next line should not be performed for each beverage
                    var texts = this.filters.text.trim().toLowerCase().split(/\s+/);
                    return !_.find(texts, function (text) {
                        var rgx = new RegExp(text),
                            contains = testRegexWithLowerCase(rgx, beverage.get('name'))
                                || testRegexWithLowerCase(rgx, beverage.get('brand'));
                        return !contains;
                    });
                }
                return true;
            },

            /**
             * Initializes the tooltips and popovers of the rendered page. This is set only on existing elements:
             * the method should be called again any time a new tooltip trigger element is added to the page.
             * @private
             */
            _tooltip: function () {
                this.$('[data-toggle="tooltip"]').tooltip();
            },

            _toggleDetail: function (event) {
                var clicked = this._getClickedBeverage(event);
                clicked._detailed = !clicked._detailed;
            },

            _pick: function (event) {
                this.orders.order(this._getClickedBeverage(event));
            },

            _getClickedBeverage: function (clickEvent) {
                var id = $(clickEvent.currentTarget).closest('.beverage').data('id');
                return this.beverages.get(id);
            },

            _pickRandom: function () {
                var visible = this.beverages.filter(function (beverage) {
                    return beverage._show;
                });
                this.orders.order(visible[_.random(0, visible.length - 1)]);
            },

            _clearOrder: function () {
                this.orders.clear();
            },

            remove: function () {
                if (this.rview) {
                    this.rview.unbind();
                }
                return _.bind(Backbone.View.prototype.remove, this)();
            }
        });
});
