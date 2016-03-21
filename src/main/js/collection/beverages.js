define([
    'backbone',
    '../model/beverage'
], function (Backbone, Beverage) {
    'use strict';

    var beverageOrder = {
        'tea-black': 0,
        'tea-green': 1,
        'tea-oolong': 1,
        'tea-white': 2,
        rooibos: 3,
        infusion: 4,
        coffee: 5,
        cocoa: 6
    };

    return Backbone.Collection.extend({
        model: Beverage,

        url: 'https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values?alt=json',

        parse: function (data) {
            return data.feed.entry;
        },

        comparator: function (item) {
            return beverageOrder[item.get('basis')];
        }
    });
});
