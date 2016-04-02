define([
    'jquery',
    'underscore',

    './view/beverages'
], function ($, _, BeveragesView) {
    'use strict';

    $.fn.beverages = function (options) {
        var settings = _.clone(options);
        settings.el = this;
        new BeveragesView(settings).render();
    };
});
