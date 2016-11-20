/**
 * The module defining {@link Filters}.
 *
 * @module model/filter/filters
 */
import _ from 'underscore';
import {Model, Collection} from 'backbone';
import i18n from 'i18n';

/**
 * The filter key to enable all teas.
 * @type {string}
 * @constant
 * @default
 */
const FILTER_KEYWORD_TEAS = 'teas';

/**
 * The filter key to enable auto-time.
 * @type {string}
 * @constant
 * @default
 */
const FILTER_KEYWORD_TIME = 'autoTime';

const MORNING_START = 5,
    MORNING_END = 11,
    DAYTIME_START = 10,
    DAYTIME_END = 20,
    EVENING_START = 18,
    EVENING_END = 2;
const AUTO_TIME_RANGE = Object.freeze({
    morning: [MORNING_START, MORNING_END],
    daytime: [DAYTIME_START, DAYTIME_END],
    evening: [EVENING_START, EVENING_END]
});

const _isInTimeRange = function (range) {
    if (!_.has(AUTO_TIME_RANGE, range)) {
        return false;
    }

    const min = AUTO_TIME_RANGE[range][0],
        max = AUTO_TIME_RANGE[range][1],
        hour = new Date().getHours();
    return min <= max ? min <= hour && hour < max : min <= hour || hour < max;
};

const _testRegexpAgainstModelFields = function (rgx, model, ...args) {
    const testString = function (str) {
        return rgx.test(str);
    };
    for (let i = 0; i < args.length; i++) {
        const fieldValue = model.get(args[i]);
        if (_.isString(fieldValue) && testString(fieldValue)
            || _.isArray(fieldValue) && _.find(fieldValue, testString)) {
            return true;
        }
    }
    return false;
};

const FilterModel = Model.extend({idAttribute: 'key'}),
    FilterSet = Collection.extend({model: FilterModel});

/**
 * @class Filters
 * @classdesc The logic behind the filters.
 */
export default Model.extend(
    /** @lends Filters.prototype */
    {
        defaults: {text: ''},

        splitText: [],

        /**
         * Creates new filters.
         *
         * @param {{bases: Array.<String>, moments: Array.<String>, autoTime: boolean}} [options] the options for the filters
         * @constructs
         */
        initialize (options = {}) {
            this._initBasesFilters(options.bases);
            this._initMomentsFilters(options.moments, options[FILTER_KEYWORD_TIME]);

            this.on('change:text', function (model, text = '') {
                this.splitText = text.trim().split(/\s+/);
            }, this);
        },

        _initBasesFilters (bases) {
            const allowAllTeas = _.contains(bases, FILTER_KEYWORD_TEAS);
            this.set('bases', new FilterSet(
                _.chain(i18n.basis)
                    .keys()
                    .map((basis) => ({
                        key: basis,
                        active: Boolean(!bases || allowAllTeas && (/^tea-/).test(basis)
                            || _.contains(bases, basis))
                    }))
                    .value()
            ));
        },

        _initMomentsFilters (moments, autoTime) {
            const isActive = !moments && !autoTime
                ? () => true
                : (moment) => Boolean(_.contains(moments, moment) || autoTime && _isInTimeRange(moment));

            this.set('moments', new FilterSet(
                _.chain(i18n.moment)
                    .keys()
                    .map((moment) => ({
                        key: moment,
                        active: isActive(moment)
                    }))
                    .value()
            ));
        },

        /**
         * Tests whether a beverage matches the filters.
         * @param {Beverage} beverage the beverage to test
         * @return {boolean} <code>true</code> if the beverage matches all the filter criteria, <code>false</code>
         * otherwise
         */
        match (beverage) {
            return this._isBasisActive(beverage) && this._isMomentActive(beverage) && this._containsText(beverage);
        },

        _isBasisActive (beverage) {
            const filter = this.get('bases').get(beverage.get('basis'));
            return filter ? filter.get('active') : true;
        },

        _isMomentActive (beverage) {
            const times = beverage.get('time'),
                timeFilters = this.get('moments');

            return _.isObject(times)
                ? Boolean(_.chain(times)
                .keys()
                .find((time) => {
                    const active = times[time];
                    if (_.isUndefined(active) || _.isNull(active)) {
                        return timeFilters.get('unknown').get('active');
                    } else if (active) {
                        const filter = timeFilters.get(time);
                        return filter && filter.get('active');
                    }
                    return false;
                })
                .value())
                : timeFilters.get('unknown').get('active');
        },

        _containsText (beverage) {
            if (this.get('text')) {
                return !_.find(this.splitText,
                    (text) => !_testRegexpAgainstModelFields(new RegExp(text, 'i'), beverage,
                        'name', 'brand', 'note', 'benefits', 'ingredients'));
            }
            return true;
        }
    }
);
