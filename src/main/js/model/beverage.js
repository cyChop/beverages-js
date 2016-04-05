define([
    'backbone'
], function (Backbone) {
    'use strict';

    function get(data, field) {
        return data['gsx$' + field]['$t'];
    }

    function getInt(data, field) {
        var value = get(data, field);
        return value ? parseInt(value) : value;
    }

    function getBool(data, field, mandatory) {
        var value = get(data, field);

        if (!value && mandatory) {
            return false;
        }
        return value ? value.toLowerCase() === 'true' : value;
    }

    function getCsv(data, field) {
        var value = get(data, field);
        return value
            ? value.split(',').map(Function.prototype.call, String.prototype.trim)
            : value;
    }

    function getMinMax(data, field) {
        return {
            min: getInt(data, field + '-min'),
            max: getInt(data, field + '-max')
        };
    }

    return Backbone.Model.extend({
        parse: function (data) {
            var result = {
                name: get(data, 'name'),
                brand: get(data, 'brand'),
                basis: get(data, 'basis'),
                stock: getBool(data, 'stock', true),
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
