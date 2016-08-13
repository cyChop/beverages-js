define([
    'jquery',
    'data/google-sheet-adapter',
    'mock/fake-app-server'
], function ($, Adapter) {
    'use strict';

    describe('The Google Sheet URL', function () {
        it('should be undefined when there is no sheet ID', function () {
            expect(Adapter.getSheetAsJsonUrl()).toBeUndefined();
            expect(Adapter.getSheetAsJsonUrl(null)).toBeUndefined();
        });
        it('should be defined when there is no sheet ID', function () {
            var id = 'myMockId',
                url = Adapter.getSheetAsJsonUrl(id);
            expect(url).toBeDefined();
            expect(typeof url).toBe('string');
            expect(url.startsWith('http')).toBe(true);
            expect(new RegExp(id).test(url)).toBe(true);
        });
    });

    describe('Parsing method', function () {
        var array, entry;
        beforeEach(function (done) {
            $.get(Adapter.getSheetAsJsonUrl('something'))
                .done(function (data) {
                    array = data.feed.entry;
                    entry = array[0];
                })
                .always(done);
        });

        describe('"get"', function () {
            it('returns undefined if the required field does not exist', function () {
                expect(Adapter.get(entry, 'idontexist')).toBeUndefined();
            });

            it('returns a string value', function () {
                expect(typeof Adapter.get(entry, 'packaged')).toBe('string');
            });

            it('returns a correct value', function () {
                expect(Adapter.get(entry, 'name')).toBe('Libertango');
            });
        });

        describe('"getInt"', function () {
            it('returns the unparsed value if falsy', function () {
                expect(Adapter.getInt(entry, 'idontexist')).toBe(undefined);
            });

            it('returns NaN when field could not be parsed to a number', function () {
                expect(Adapter.getInt(entry, 'name')).toBeNaN();
            });

            it('returns a number when possible', function () {
                expect(Adapter.getInt(entry, 't-min')).toBe(80);
            });
        });

        describe('"getBool"', function () {
            it('returns "false" if the provided value is not a boolean', function () {
                expect(Adapter.getBool(entry, 'name')).toBe(false);
            });

            it('returns the parsed value if provided, whether "mandatory" is specified or not', function () {
                expect(Adapter.getBool(entry, 'stock')).toBe(true);
                expect(Adapter.getBool(entry, 'stock', false)).toBe(true);
                expect(Adapter.getBool(entry, 'stock', true)).toBe(true);

                expect(Adapter.getBool(entry, 'packaged')).toBe(false);
                expect(Adapter.getBool(entry, 'packaged', false)).toBe(false);
                expect(Adapter.getBool(entry, 'packaged', true)).toBe(false);
            });

            it('returns "false" when a mandatory boolean is not provided', function () {
                expect(Adapter.getBool(entry, 'morning', true)).toBe(false);
            });

            it('returns undefined when a non-mandatory boolean is not provided', function () {
                expect(Adapter.getBool(entry, 'morning')).toBeUndefined();
                expect(Adapter.getBool(entry, 'morning', false)).toBeUndefined();
            });
        });

        describe('"getCsv"', function () {
            it('returns an empty array if the value is empty', function () {
                expect(Adapter.getCsv(entry, 'morning')).toEqual([]);
            });

            it('returns an array of trimmed strings', function () {
                expect(Adapter.getCsv(entry, 'benefits')).toEqual(['antioxidant', 'énergisant', 'détoxifiant']);
            });
        });

        describe('"getMinMax"', function () {
            it('returns an object with undefined properties if no valid fields available', function () {
                expect(Adapter.getMinMax(entry, 'morning')).toEqual({min: undefined, max: undefined});
            });
            it('returns an object with set properties if the fields are available', function () {
                expect(Adapter.getMinMax(entry, 't')).toEqual({min: 80, max: 81});
            });
        });
    });
});

