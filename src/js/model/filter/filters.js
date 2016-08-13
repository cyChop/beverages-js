/**
 * The module defining {@link Filters}.
 *
 * @class Filters
 * @classdesc The logic behind the filters.
 *
 * @module model/filter/filters
 */
define([
    'underscore',
    'backbone',

    'i18n'
], function (_, Backbone, i18n) {
    'use strict';

    /**
     * The filter key to enable all teas.
     * @type {string}
     * @constant
     * @default
     */
    var FILTER_KEYWORD_TEAS = 'teas';

    /**
     * The filter key to enable auto-time.
     * @type {string}
     * @constant
     * @default
     */
    var FILTER_KEYWORD_TIME = 'autoTime';

    var MORNING_START = 5,
        MORNING_END = 11,
        DAYTIME_START = 10,
        DAYTIME_END = 20,
        EVENING_START = 18,
        EVENING_END = 2;
    var AUTO_TIME_RANGE = Object.freeze({
        morning: [MORNING_START, MORNING_END],
        daytime: [DAYTIME_START, DAYTIME_END],
        evening: [EVENING_START, EVENING_END]
    });

    var _isInTimeRange = function (range) {
        if (!_.has(AUTO_TIME_RANGE, range)) {
            return false;
        }

        var min = AUTO_TIME_RANGE[range][0],
            max = AUTO_TIME_RANGE[range][1],
            hour = new Date().getHours();
        return min <= max ? min <= hour && hour < max : min <= hour || hour < max;
    };

    var _testRegexpAgainstModelFields = function (rgx, model) {
        for (var i = 2; i < arguments.length; i++) {
            var fieldValue = model.get(arguments[i]);
            if (_.isString(fieldValue) && rgx.test(fieldValue)) {
                return true;
            } else if (_.isArray(fieldValue) && _.find(fieldValue, function (item) {
                    return rgx.test(item);
                })) {
                return true;
            }
        }
        return false;
    };

    var FilterSet = Backbone.Collection.extend({
        model: Backbone.Model.extend({
            idAttribute: 'key'
        })
    });

    // eslint-disable-next-line no-inline-comments
    return /** @alias module:model/filter/filters */ Backbone.Model.extend(
        /** @lends Filters.prototype */
        {
            defaults: {
                text: ''
            },

            splitText: [],

            /**
             * Creates new filters.
             *
             * @param {{bases: Array.<String>, moments: Array.<String>, autoTime: boolean}} [options] the options for
             * the filters
             * @constructs
             */
            initialize: function (options) {
                var opt = options || {};

                this._initBasesFilters(opt.bases);
                this._initMomentsFilters(opt.moments, opt[FILTER_KEYWORD_TIME]);

                this.on('change:text', function (model, text) {
                    this.splitText = (text || '').trim().split(/\s+/);
                }, this);
            },

            _initBasesFilters: function (bases) {
                var allowAllTeas = _.contains(bases, FILTER_KEYWORD_TEAS);
                this.set('bases', new FilterSet(
                    _.chain(i18n.basis)
                        .keys()
                        .map(function (basis) {
                            return {
                                key: basis,
                                active: Boolean(!bases || allowAllTeas && (/^tea-/).test(basis)
                                    || _.contains(bases, basis))
                            };
                        })
                        .value()
                ));
            },

            _initMomentsFilters: function (moments, autoTime) {
                var isActive = !moments && !autoTime ? function () {
                    return true;
                } : function (moment) {
                    return Boolean(_.contains(moments, moment)
                        || autoTime && _isInTimeRange(moment));
                };

                this.set('moments', new FilterSet(
                    _.chain(i18n.moment)
                        .keys()
                        .map(function (moment) {
                            return {
                                key: moment,
                                active: isActive(moment)
                            };
                        })
                        .value()
                ));
            },

            /**
             * Tests whether a beverage matches the filters.
             * @param {Beverage} beverage the beverage to test
             * @return {boolean} <code>true</code> if the beverage matches all the filter criteria, <code>false</code>
             * otherwise
             */
            match: function (beverage) {
                return this._isBasisActive(beverage) && this._isMomentActive(beverage) && this._containsText(beverage);
            },

            _isBasisActive: function (beverage) {
                var filter = this.get('bases').get(beverage.get('basis'));
                return filter ? filter.get('active') : true;
            },

            _isMomentActive: function (beverage) {
                var times = beverage.get('time'),
                    timeFilters = this.get('moments');

                return _.isObject(times)
                    ? Boolean(_.chain(times)
                    .keys()
                    .find(function (time) {
                        var active = times[time];
                        if (_.isUndefined(active) || _.isNull(active)) {
                            return timeFilters.get('unknown').get('active');
                        } else if (active) {
                            var filter = timeFilters.get(time);
                            return filter && filter.get('active');
                        }
                        return false;
                    })
                    .value())
                    : timeFilters.get('unknown').get('active');
            },

            _containsText: function (beverage) {
                if (this.get('text')) {
                    return !_.find(this.splitText, function (text) {
                        return !_testRegexpAgainstModelFields(
                            new RegExp(text, 'i'), beverage,
                            'name', 'brand', 'note', 'benefits', 'ingredients');
                    });
                }
                return true;
            }
        }
    );
});
