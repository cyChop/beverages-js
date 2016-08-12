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
    '../model/filter/filters',
    '../model/order/order-summary',

    'i18n',

    '../template/beverages.html',

    'bootstrap/dist/js/umd/tooltip',
    'bootstrap/dist/js/umd/dropdown',

    '../../scss/beverages.scss'
// eslint-disable-next-line max-params
], function (_, Backbone, rivets, $,
             Beverages, Filters, Orders,
             i18n, template) {
    'use strict';

    /* === Constants === */
    /**
     * The name of the field the order summary is stored into in the session storage.
     * @type {string}
     */
    var STORE_KEY_ORDERS = 'orders-summary';

    var UNIT_TEMP_FAHRENHEIT = 'fahrenheit',
        UNIT_TEMP_CELSIUS = 'celsius';

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
             * @type Filters
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
                    error: false,
                    temperatureUnit: options.celsius ? UNIT_TEMP_CELSIUS : UNIT_TEMP_FAHRENHEIT
                };

                var gSheetId;
                if (options) {
                    gSheetId = options.gSheetId;
                    this.filters = new Filters(options.filters);
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
                this.beverages._shown = this.beverages.reduce(function (memo, beverage) {
                    beverage._show = this.filters.match(beverage);
                    return beverage._show ? memo + 1 : memo;
                }.bind(this), 0);
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
