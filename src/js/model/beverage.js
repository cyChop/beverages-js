define([
    'backbone'
], function (Backbone) {
    'use strict';

    /* JSON parsing functions */
    var get = function (data, field) {
            return data['gsx$' + field].$t;
        },

        getInt = function (data, field) {
            var value = get(data, field);
            return value ? parseInt(value) : value;
        },

        _undefinedAsBoolean = function (mandatory) {
            return mandatory ? false : null;
        },

        getBool = function (data, field, mandatory) {
            var value = get(data, field);
            return value ? value.toLowerCase() === 'true' : _undefinedAsBoolean(mandatory);
        },

        getCsv = function (data, field) {
            var value = get(data, field);
            return value
                ? value.split(',').map(Function.prototype.call, String.prototype.trim)
                : value;
        },

        getMinMax = function (data, field) {
            return {
                min: getInt(data, field + '-min'),
                max: getInt(data, field + '-max')
            };
        };

    return Backbone.Model.extend({
        parse: function (data) {
            var result = {
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
            return result;
        }
    });
});
