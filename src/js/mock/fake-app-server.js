define([
    'lib/mock-server',

    'data/mock-sheet.json'
], function (server, gSheet) {
    'use strict';

    var HTTP_STATUS_OK = 200;

    server.respondWith('GET', /spreadsheets\.google\.com\/.*\/values\?alt=json$/,
        [HTTP_STATUS_OK, {'Content-Type': 'application/json'}, JSON.stringify(gSheet)]);

    return server;
});
