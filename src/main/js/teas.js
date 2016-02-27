define([
    'jquery',

    './collection/teas',
    './view/teas'
], function ($, Teas, TeaListView) {
    'use strict';

    var teas = new Teas();

    new TeaListView({
        el: $('#tea-list'),
        teas: teas
    }).render();

    teas.fetch();
});
