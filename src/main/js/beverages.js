define([
    'jquery',

    './collection/beverages',
    './view/beverages'
], function ($, Beverages, BeveragesView) {
    'use strict';

    var beverages = new Beverages();

    new BeveragesView({
        el: $('#beverages'),
        beverages: beverages
    }).render();

    beverages.fetch();
});
