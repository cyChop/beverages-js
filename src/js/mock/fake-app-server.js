define([
    'lib/mock-server'
], function (server) {
    'use strict';

    server.respondWith('GET', /spreadsheets\.google\.com\/.*\/values\?alt=json$/,
        [200, {'Content-Type': 'application/json'}, JSON.stringify(require('./data/mock-sheet.json'))]);

    return server;
});
