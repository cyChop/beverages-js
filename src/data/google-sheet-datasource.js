/**
 * Returns the URL to the JSON version of a Google Sheet based on its Google ID.
 *
 * @param {string} sheetId the ID of the Google Sheet
 * @return {string} the URL to the JSON version of the Google Sheet or <code>undefined</code> if no ID was provided
 */
export const getSheetAsJsonUrl = sheetId => (sheetId
  ? `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/values?alt=json`
  : undefined)

/**
 * Extracts the content of a Google Sheet.
 *
 * @param gSheet the JSON representation of the Google Sheet
 * @return {Array.<Object>} the array containing the data of the Google Sheet
 */
export const extractContent = gSheet => gSheet.feed.entry

/**
 * Parses a JSON row of the Google Sheet to a beverage instance.
 *
 * @param {Object} row the JSON row to parse as a beverage instance
 * @return {Object} a beverage instance
 */
export const parseRowToModel = row => ({
  id: row.id.$t,
  name: get(row, 'name'),
  brand: get(row, 'brand'),
  basis: get(row, 'basis'),
  packaged: getBool(row, 'packaged', true),
  theine: get(row, 'theine'),
  times: {
    morning: getBool(row, 'morning', false),
    daytime: getBool(row, 'daytime', false),
    evening: getBool(row, 'evening', false)
  },
  preparation: {
    temp: getMinMax(row, 't'),
    time: getMinMax(row, 'time')
  },
  ingredients: getCsv(row, 'ingredients'),
  benefits: getCsv(row, 'benefits'),
  note: get(row, 'note')
})

/**
 * Extracts a field from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} row the JSON entry to extract data from
 * @param {string} field the field to extract
 * @return {string} the extracted data
 */
export const get = (row, field) => (row[`gsx$${field}`] || {}).$t

/**
 * Extracts an integer field from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} row the JSON entry to extract data from
 * @param {string} field the field to extract
 * @return {number} the extracted data
 */
export const getInt = (row, field) => {
  const value = get(row, field)
  return value ? parseInt(value) : value
}

/**
 * Extracts a boolean field from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} row the JSON entry to extract data from
 * @param {string} field the field to extract
 * @param {boolean} mandatory whether the result is mandatory or not;
 * if <code>true</code>, the function will return <code>false</code> for an undefined value;
 * otherwise, it will return <code>null</code>
 * @return {?boolean} the extracted data
 */
export const getBool = (row, field, mandatory) => {
  const value = get(row, field)
  if (value) {
    return value.toLowerCase() === 'true'
  }
  return mandatory ? false : undefined
}

/**
 * Extracts a field as an array of strings from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} row the JSON entry to extract data from
 * @param {string} field the field to extract
 * @return {Array.<string>} the extracted data
 */
export const getCsv = (row, field) => {
  const value = get(row, field)
  return value
    ? value.split(',').map(item => item.trim())
    : []
}

/**
 * Extracts a pair of fields as a min-max object from a Google Sheet-JSON-formatted line.
 *
 * @param {Object} row the JSON entry to extract data from
 * @param {string} field the field to extract
 * @return {{min: number, max: number}} the extracted data
 */
export const getMinMax = (row, field) => ({
  min: getInt(row, `${field}-min`),
  max: getInt(row, `${field}-max`)
})
