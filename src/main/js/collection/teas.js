define([
    'backbone',
    '../model/tea'
], function (Backbone, Tea) {
    'use strict';

    return Backbone.Collection.extend({
        model: Tea,

        url: 'https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values?alt=json',

        parse: function (data) {
            return data.feed.entry;
        }
    });
});
