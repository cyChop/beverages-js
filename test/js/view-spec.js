define([
    'jquery',
    'lib/rivets-cfg',
    'view/beverages',
    'mock/fake-app-server'
], function ($, rivets, View) {
    'use strict';

    describe('View-defined rivets formatter', function () {
        describe('"showMinMax"', function () {
            var showMinMax = rivets.formatters.showMinMax;

            it('returns "false" if the argument is falsy', function () {
                expect(showMinMax(undefined)).toBe(false);
                expect(showMinMax(null)).toBe(false);
            });

            it('returns "false" if the argument does not have a min nor a max', function () {
                expect(showMinMax({})).toBe(false);
                expect(showMinMax('There is no spoon')).toBe(false);
                expect(showMinMax(3)).toBe(false);
            });

            it('returns "true" if the argument has a min or a max', function () {
                expect(showMinMax({min: 13})).toBe(true);
                expect(showMinMax({max: 37})).toBe(true);
            });

            it('returns "true" if the argument has a min and a max', function () {
                expect(showMinMax({min: 42, max: 1337})).toBe(true);
            });
        });

        describe('"minMax"', function () {
            var minMax = rivets.formatters.minMax;

            it('returns an empty string if the argument is falsy', function () {
                expect(minMax(undefined)).toBe('');
                expect(minMax(null)).toBe('');
            });

            it('returns the single provided number if the argument has only a min or a max', function () {
                expect(minMax({min: 13}, '|')).toBe(13);
                expect(minMax({max: 37}, '|')).toBe(37);
            });

            it('returns a concatenation of both values if the argument has a different min and max', function () {
                expect(minMax({min: 42, max: 1337}, '|')).toBe('42|1337');

                it('returns a a single value if the argument has the same min and max', function () {
                    expect(minMax({min: 42, max: 42}, '|')).toBe('é');
                });

                it('uses "-" as the default separator.', function () {
                    expect(minMax({min: 42, max: 1337})).toBe('42-1337');
                });
            });
        });
    });
});
