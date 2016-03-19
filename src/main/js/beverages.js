define([
    'jquery',

    './collection/beverages',
    './view/beverages'
], function ($, Beverages, BeveragesView) {
    'use strict';

    var beverages = new Beverages();

    new BeveragesView({
        el: $('#beverages'),
        teas: beverages
    }).render();

    beverages.fetch();
});
