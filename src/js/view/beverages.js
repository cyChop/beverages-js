/**
 * The module defining {@link BeveragesView}.
 *
 * @class BeveragesView
 * @classdesc The presenter controlling the view which displays the beverages.
 *
 * @module view/beverages
 */
import _ from 'underscore';
import {View} from 'backbone';
import rivets from 'lib/rivets-cfg';
import $ from 'jquery';

import Beverages from '../model/beverage/beverages';
import Filters from '../model/filter/filters';
import Orders from '../model/order/order-summary';

import i18n from 'i18n';

const template = require('../template/beverages.html');
require('bootstrap/js/tooltip');
require('bootstrap/js/dropdown');
require('../../scss/beverages.scss');


/* === Constants === */
/**
 * The name of the field the order summary is stored into in the session storage.
 * @type {string}
 */
const STORE_KEY_ORDERS = 'orders-summary';

const UNIT_TEMP_FAHRENHEIT = 'fahrenheit',
    UNIT_TEMP_CELSIUS = 'celsius';

rivets.formatters.minMax = (value, separator = '-') => {
    if (value) {
        if (value.min) {
            return value.max && value.min !== value.max
                ? value.min + separator + value.max
                : value.min;
        } else if (value.max) {
            return value.max;
        }
    }
    return '';
};

rivets.formatters.showMinMax = (value) => Boolean(value && (value.min || value.max));

/* === Backbone view === */
export default View.extend(
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
        initialize (options) {
            this.context = {
                i18n,
                ready: false,
                error: false,
                temperatureUnit: options && options.celsius ? UNIT_TEMP_CELSIUS : UNIT_TEMP_FAHRENHEIT
            };

            let gSheetId;
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
        render () {
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

        _initAndFetchBeverages (gSheetId) {
            this.orders = new Orders();

            this.beverages = new Beverages(null, {gSheetId});

            if (sessionStorage) {
                // update the data in storage after any change on it
                this.orders.on('update change', () => {
                    sessionStorage.setItem(STORE_KEY_ORDERS, JSON.stringify(this.orders.get('orders')));
                }, this);

                this.beverages.once('sync', () => {
                    _.each(JSON.parse(sessionStorage.getItem(STORE_KEY_ORDERS)), (order) => {
                        this.orders.order(this.beverages.get(order.id), order.quantity);
                    });
                }, this);
            }

            this.beverages
                .on('request', () => {
                    this.context.ready = false;
                }, this)
                .on('sync', () => {
                    this._filterBeverages();
                    this.context.ready = true;
                    this._tooltip();
                }, this)
                .fetch({
                    error: () => {
                        this.context.error = this.context.i18n.error.loading;
                    }
                });
        },

        _filterBeverages () {
            this.beverages._shown = this.beverages.reduce((memo, beverage) => {
                beverage._show = this.filters.match(beverage);
                return beverage._show ? memo + 1 : memo;
            }, 0);
        },

        /**
         * Initializes the tooltips and popovers of the rendered page. This is set only on existing elements:
         * the method should be called again any time a new tooltip trigger element is added to the page.
         * @private
         */
        _tooltip () {
            this.$('[data-toggle="tooltip"]').tooltip();
        },

        _toggleDetail (event) {
            const clicked = this._getClickedBeverage(event);
            clicked._detailed = !clicked._detailed;
        },

        _pick (event) {
            this.orders.order(this._getClickedBeverage(event));
        },

        _getClickedBeverage (clickEvent) {
            return this.beverages.get(
                $(clickEvent.currentTarget).closest('.beverage').data('id')
            );
        },

        _pickRandom () {
            const visible = this.beverages.filter((beverage) => beverage._show);
            this.orders.order(visible[_.random(0, visible.length - 1)]);
        },

        _clearOrder () {
            this.orders.clear();
        },

        remove () {
            if (this.rview) {
                this.rview.unbind();
            }
            return View.prototype.remove.bind(this)();
        }
    }
);
