/**
 * The module defining the {@link Beverages} class.
 *
 * @class Beverages
 * @classdesc A list of {@link Beverage} instances.
 *
 * @module model/beverage/beverages
 */
import {Collection} from 'backbone';
import Beverage from './beverage';
import {getSheetAsJsonUrl} from '../../data/google-sheet-adapter';

/**
 * The order to use for displaying the beverages based on their basis.
 *
 * @type {Object.<String, number>}
 * @const
 * @private
 */
export const BEVERAGE_ORDER = {
    'tea-black': 0,
    'tea-green': 1,
    'tea-oolong': 1,
    'tea-white': 2,
    'tea-rooibos': 3,
    'infusion': 4,
    'coffee': 5,
    'cocoa': 6
};

export default Collection.extend(
    /** @lends Beverages.prototype */
    {
        model: Beverage,

        /**
         * Creates a new instance of the collection.
         *
         * @param {Array.<Beverage>} models the models to include in collection at initialization
         * @param {{gSheetId: string}} options the options for the collection
         * @constructs
         */
        initialize(models, options) {
            if (options) {
                this.gSheetId = options.gSheetId;
            }
        },

        url() {
            return getSheetAsJsonUrl(this.gSheetId);
        },

        /**
         * Returns an array of Google Sheet-JSON-formatted line to parse to beverages.
         *
         * @param {Object} data a Google Sheet-JSON-formatted sheet
         * @return {Array.<Object>} an array of Google Sheet-JSON-formatted lines
         */
        parse(data) {
            return data.feed.entry;
        },

        comparator(item) {
            return BEVERAGE_ORDER[item.get('basis')];
        }
    }
);
