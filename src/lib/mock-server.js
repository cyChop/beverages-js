define([
    'sinon'
], function (sinon) {
    'use strict';

    sinon.xhr.supportsCORS = true;

    var server = sinon.fakeServer.create();
    server.autoRespond = true;

    return server;
});
