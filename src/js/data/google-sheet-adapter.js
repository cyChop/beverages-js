define([], function () {
    'use strict';

    // TODO add dedicated tests

    /**
     * A module for reading the data from a Google Sheet following a predefined template.
     * @exports data/google-sheet-adapter
     */
    var Adapter = {};

    /**
     * Returns the URL to the JSON version of a Google Sheet based on its Google ID.
     *
     * @param {string} sheetId the ID of the Google Sheet
     * @return {string} the URL to the JSON version of the Google Sheet or <code>undefined</code> if no ID was provided
     */
    Adapter.getSheetAsJsonUrl = function (sheetId) {
        return sheetId
            ? 'https://spreadsheets.google.com/feeds/list/' + sheetId + '/od6/public/values?alt=json'
            : undefined;
    };

    /**
     * Extracts a field from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {string} the extracted data
     */
    Adapter.get = function (data, field) {
        return (data['gsx$' + field] || {}).$t;
    };

    /**
     * Extracts an integer field from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {number} the extracted data
     */
    Adapter.getInt = function (data, field) {
        var value = Adapter.get(data, field);
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
    Adapter.getBool = function (data, field, mandatory) {
        var value = Adapter.get(data, field);
        if (value) {
            return value.toLowerCase() === 'true';
        }
        return mandatory ? false : undefined;
    };

    /**
     * Extracts a field as an array of strings from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {Array.<string>} the extracted data
     */
    Adapter.getCsv = function (data, field) {
        var value = Adapter.get(data, field);
        return value
            ? value.split(',').map(Function.prototype.call, String.prototype.trim)
            : [];
    };

    /**
     * Extracts a pair of fields as a min-max object from a Google Sheet-JSON-formatted line.
     *
     * @param {Object} data the JSON entry to extract data from
     * @param {string} field the field to extract
     * @return {{min: number, max: number}} the extracted data
     */
    Adapter.getMinMax = function (data, field) {
        return {
            min: Adapter.getInt(data, field + '-min'),
            max: Adapter.getInt(data, field + '-max')
        };
    };

    return Adapter;
});
