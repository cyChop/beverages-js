define([
    'jquery',
    'view/beverages',
    'mock/fake-app-server',
    'jasmine-jquery'
], function ($, View) {
    'use strict';

    it('The test fixtures are properly loaded', function () {
        setFixtures('<div id="test-beverages"></div>');

        var $beverages = $('#test-beverages');
        expect($beverages.length).toBe(1);
    });
});

