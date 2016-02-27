define([
    'jquery',

    './collection/teas',
    './view/teas'
], function ($, Teas, TeaListView) {
    'use strict';

    new TeaListView({
        el: $('#tea-list')
    }).render();
});
