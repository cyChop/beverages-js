define([
    'underscore',
    'model/beverage/beverages',
    'mock/fake-app-server'
], function (_, Beverages) {
    'use strict';

    var BEVERAGE_ORDER = {
        'tea-black': 0,
        'tea-green': 1,
        'tea-oolong': 1,
        'tea-white': 2,
        'tea-rooibos': 3,
        'infusion': 4,
        'coffee': 5,
        'cocoa': 6
    };

    describe('A collection', function () {
        it('without a gSheetId has no URL', function () {
            var beverages = new Beverages();

            expect(beverages.url()).toBeUndefined();
        });

        it('with a gSheetId has a URL containing said gSheetId', function () {
            var gSheetId = 'thisisafakegsheetid',
                beverages = new Beverages([], {gSheetId: gSheetId}),
                url = beverages.url();

            expect(url).toBeDefined();
            expect(url).toContain(gSheetId);
        });
    });

    describe('After fetching the data,', function () {
        var beverages;

        beforeEach(function (done) {
            beverages = new Beverages([], {gSheetId: 'themockserverwillprovidethedata'});
            beverages.on('sync', function () {
                done();
            }).fetch();
        });

        it('the collection contains the correct number of elements.', function () {
            // Correct length
            expect(beverages.length).toBe(64);
        });

        it('the items of the collection are correctly ordered.', function () {
            var bases = beverages.pluck('basis');

            /*// oolong and green are the same for order
             bases = _.map(bases, function(basis) {
             return basis === 'tea-oolong' ? 'tea-green' : basis;
             });*/

            // now compare
            expect(bases).toEqual(_.sortBy(bases, function (basis) {
                return BEVERAGE_ORDER[basis];
            }));
        });

        it('the items are correctly parsed.', function () {
            var beverage = beverages.get('https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dkvya');

            expect(beverage.get('name')).toBe('Pleine Lune');
            expect(beverage.get('brand')).toBe('Vert & Noir');
            expect(beverage.get('basis')).toBe('tea-white');
            expect(beverage.get('stock')).toBe(true);
            expect(beverage.get('packaged')).toBe(false);
            expect(beverage.get('theine')).toBe('unknown');
            expect(beverage.get('time')).toEqual({
                morning: undefined,
                daytime: undefined,
                evening: undefined
            });
            expect(beverage.get('preparation')).toEqual({
                temp: {
                    min: 70,
                    max: 70
                },
                time: {
                    min: 6,
                    max: 12
                }
            });
            expect(beverage.get('ingredients')).toEqual([
                'thé blanc de Chine parfumé au melon',
                'caramel',
                'cannelle',
                'orange'
            ]);
            expect(beverage.get('benefits')).toEqual([]);
            expect(beverage.get('note')).toBeFalsy();
        });
    });
});

