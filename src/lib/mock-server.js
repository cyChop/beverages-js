define([
    'sinon'
], function (sinon) {
    'use strict';

    sinon.xhr.supportsCORS = true;
    // sinon.log = function (message) {
    // console.debug(message); // FIXME console is bad! Use loglevel?
    // }

    var server = sinon.fakeServer.create();
    server.autoRespond = true;

    return server;
});
