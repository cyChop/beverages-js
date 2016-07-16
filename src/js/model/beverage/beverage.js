/**
 * The module defining {@link Beverage}.
 *
 * @class Beverage
 * @classdesc A beverage and its properties
 *
 * @module model/beverage/beverage
 */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    /* JSON parsing functions */
    /**
     * Extracts a field from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {string} the extracted data
     */
    var get = function (data, field) {
        return data['gsx$' + field].$t;
    };

    /**
     * Extracts an integer field from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {number} the extracted data
     */
    var getInt = function (data, field) {
        var value = get(data, field);
        return value ? parseInt(value) : value;
    };

    /**
     * Extracts a boolean field from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @param {boolean} mandatory whether the result is mandatory or not;
     * if <code>true</code>, the function will return <code>false</code> for an undefined value;
     * otherwise, it will return <code>null</code>
     * @return {?boolean} the extracted data
     */
    var getBool = function (data, field, mandatory) {
        var value = get(data, field);
        if (value) {
            return value.toLowerCase() === 'true';
        }
        return mandatory ? false : null;
    };

    /**
     * Extracts a field as an array of strings from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {Array.<string>} the extracted data
     */
    var getCsv = function (data, field) {
        var value = get(data, field);
        return value
            ? value.split(',').map(Function.prototype.call, String.prototype.trim)
            : value;
    };

    /**
     * Extracts a pair of fields as a min-max object from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {{min: number, max: number}} the extracted data
     */
    var getMinMax = function (data, field) {
        return {
            min: getInt(data, field + '-min'),
            max: getInt(data, field + '-max')
        };
    };

    // eslint-disable-next-line no-inline-comments
    return /** @alias module:model/beverage/beverage */ Backbone.Model.extend(
        /** @lends Beverage.prototype */
        {
            /** @constructs */
            initialize: function () {
                // just a dirty fix for JSDoc
            },

            /**
             * Parses a Google Sheet-JSON-formatted line into a beverage's properties.
             *
             * @param {Object} data a Google Sheet-JSON-formatted line
             * @return {Object} the beverage's properties
             */
            parse: function (data) {
                return {
                    id: data.id.$t,
                    name: get(data, 'name'),
                    brand: get(data, 'brand'),
                    basis: get(data, 'basis'),
                    stock: getBool(data, 'stock', true),
                    packaged: getBool(data, 'packaged', true),
                    theine: get(data, 'theine'),
                    time: {
                        morning: getBool(data, 'morning', false),
                        daytime: getBool(data, 'daytime', false),
                        evening: getBool(data, 'evening', false)
                    },
                    preparation: {
                        temp: getMinMax(data, 't'),
                        time: getMinMax(data, 'time')
                    },
                    ingredients: getCsv(data, 'ingredients'),
                    benefits: getCsv(data, 'benefits'),
                    note: get(data, 'note')
                };
            }
        });
});
