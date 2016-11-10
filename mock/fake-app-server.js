define([
    'sinon',

    './data/mock-sheet.json'
], function (sinon, gSheet) {
    'use strict';

    sinon.xhr.supportsCORS = true;

    var server = sinon.fakeServer.create();
    server.autoRespond = true;

    var HTTP_STATUS_OK = 200;

    server.respondWith('GET', /spreadsheets\.google\.com\/.*\/values\?alt=json$/,
        [HTTP_STATUS_OK, {'Content-Type': 'application/json'}, JSON.stringify(gSheet)]);

    return server;
});
