import sinon from 'sinon';

const gSheet = require('./data/mock-sheet.json');
//export const MOCK_BEVERAGES_LENGTH = gSheet.data.entry.length;
export const MOCK_BEVERAGES_LENGTH = 64;

const HTTP_STATUS_OK = 200;

sinon.xhr.supportsCORS = true;

const server = sinon.fakeServer.create();
server.autoRespond = true;

server.respondWith('GET', /spreadsheets\.google\.com\/.*\/values\?alt=json$/,
    [HTTP_STATUS_OK, {'Content-Type': 'application/json'}, JSON.stringify(gSheet)]);

export default server;
