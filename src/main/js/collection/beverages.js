define([
    'backbone',
    '../model/beverage'
], function (Backbone, Beverage) {
    'use strict';

    var beverageOrder = {
        coffee: 0,
        black: 1,
        green: 2,
        oolong: 2,
        white: 3,
        rooibos: 4,
        infusion: 5,
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
