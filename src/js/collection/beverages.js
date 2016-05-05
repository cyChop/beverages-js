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
        'tea-rooibos': 3,
        'infusion': 4,
        'coffee': 5,
        'cocoa': 6
    };

    return Backbone.Collection.extend({
        model: Beverage,
        gSheetId: null,

        initialize: function (models, options) {
            if (options) {
                this.gSheetId = options.gSheetId;
            }
        },

        url: function () {
            return this.gSheetId
                ? 'https://spreadsheets.google.com/feeds/list/' + this.gSheetId + '/od6/public/values?alt=json'
                : null;
        },

        parse: function (data) {
            return data.feed.entry;
        },

        comparator: function (item) {
            return beverageOrder[item.get('basis')];
        }
    });
});
