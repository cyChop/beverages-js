/**
 * The module defining the {@link Beverage} class.
 *
 * @class Beverage
 * @classdesc A beverage and its properties
 *
 * @module model/beverage/beverage
 */
import {Model} from 'backbone';
import {get, getBool, getMinMax, getCsv} from '../../data/google-sheet-adapter';

export default Model.extend(
    /** @lends Beverage.prototype */
    {
        /**
         * Parses a Google Sheet-JSON-formatted line into a beverage's properties.
         *
         * @param {Object} data a Google Sheet-JSON-formatted line
         * @return {Object} the beverage's properties
         */
        parse (data) {
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
    }
);
