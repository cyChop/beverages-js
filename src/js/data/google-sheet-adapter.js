/**
 * Returns the URL to the JSON version of a Google Sheet based on its Google ID.
 *
 * @param {string} sheetId the ID of the Google Sheet
 * @return {string} the URL to the JSON version of the Google Sheet or <code>undefined</code> if no ID was provided
 */
export const getSheetAsJsonUrl = function (sheetId) {
    return sheetId
        ? `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/values?alt=json`
        : undefined;
};

/**
 * Extracts a field from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} data the JSON entry to extract data from
 * @param {string} field the field to extract
 * @return {string} the extracted data
 */
export const get = function (data, field) {
    return (data[`gsx$${field}`] || {}).$t;
};

/**
 * Extracts an integer field from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} data the JSON entry to extract data from
 * @param {string} field the field to extract
 * @return {number} the extracted data
 */
export const getInt = function (data, field) {
    const value = get(data, field);
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
export const getBool = function (data, field, mandatory) {
    const value = get(data, field);
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
export const getCsv = function (data, field) {
    const value = get(data, field);
    return value
        ? value.split(',').map((item) => item.trim())
        : [];
};

/**
 * Extracts a pair of fields as a min-max object from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} data the JSON entry to extract data from
 * @param {string} field the field to extract
 * @return {{min: number, max: number}} the extracted data
 */
export const getMinMax = function (data, field) {
    return {
        min: getInt(data, `${field}-min`),
        max: getInt(data, `${field}-max`)
    };
};
