import sinon from "sinon";

import gSheet from './data/mock-sheet.json';

// 64 in sheet, but some are not in stock
export const MOCK_BEVERAGES_LENGTH = 60;

const HTTP_STATUS_OK = 200;

sinon.xhr.supportsCORS = true;

const server = sinon.fakeServer.create();
server.autoRespond = true;

server.respondWith('GET', /spreadsheets\.google\.com\/.*\/values\?alt=json$/,
    [HTTP_STATUS_OK, {'Content-Type': 'application/json'}, JSON.stringify(gSheet)]);

export default server;
