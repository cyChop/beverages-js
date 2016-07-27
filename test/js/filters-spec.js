define([
    'underscore',
    'model/filter/filters',
    'model/beverage/beverage'
], function (_, Filters, Beverage) {
    'use strict';

    describe('Upon initialization,', function () {
        describe('bases filters', function () {
            it('are all enabled if no option was provided.', function () {
                var filters = new Filters();

                filters.get('bases').each(function (filter) {
                    expect(filter.get('active')).toBe(true);
                });
            });

            it('are all disabled if an empty array was provided.', function () {
                var filters = new Filters({bases: []});

                filters.get('bases').each(function (filter) {
                    expect(filter.get('active')).toBe(false);
                });
            });

            it('are enabled for all teas if the "teas" keyword is passed.', function () {
                var filters = new Filters({bases: ['teas']});

                filters.get('bases').each(function (filter) {
                    expect(filter.get('active')).toBe((/^tea-/).test(filter.get('key')));
                });
            });

            it('can be set by combining the "teas" keyword with specific beverages.', function () {
                var filters = new Filters({bases: ['teas', 'coffee']});

                filters.get('bases').each(function (filter) {
                    var key = filter.get('key');
                    expect(filter.get('active')).toBe((/^tea-/).test(key) || key === 'coffee');
                });
            });
        });

        describe('moments filters', function () {
            it('are all enabled if no option was provided.', function () {
                var filters = new Filters();

                filters.get('moments').each(function (filter) {
                    expect(filter.get('active')).toBe(true);
                });
            });

            it('are all disabled if an empty array was provided.', function () {
                var filters = new Filters({moments: []});

                filters.get('moments').each(function (filter) {
                    expect(filter.get('active')).toBe(false);
                });
            });

            it('are only enabled if in the supplied array.', function () {
                var filters = new Filters({moments: ['morning', 'daytime'], autoTime: false});

                filters.get('moments').each(function (filter) {
                    var key = filter.get('key');
                    expect(filter.get('active')).toBe(key === 'morning' || key === 'daytime');
                });
            });

            it('can be set using "autoTime".', function () {
                var hour = new Date().getHours(),
                    filters = new Filters({autoTime: true}),
                    moments = filters.get('moments');

                expect(moments.get('unknown').get('active')).toBe(false);
                expect(moments.get('morning').get('active')).toBe(5 <= hour && hour < 11);
                expect(moments.get('daytime').get('active')).toBe(10 <= hour && hour < 20);
                expect(moments.get('evening').get('active')).toBe(18 <= hour || hour < 2);
            });

            it('can be set combining "autoTime" and fixed values.', function () {
                var hour = new Date().getHours(),
                    filters = new Filters({autoTime: true, moments: ['morning', 'unknown']}),
                    moments = filters.get('moments');

                expect(moments.get('unknown').get('active')).toBe(true);
                expect(moments.get('morning').get('active')).toBe(true);
                expect(moments.get('daytime').get('active')).toBe(10 <= hour && hour < 20);
                expect(moments.get('evening').get('active')).toBe(18 <= hour || hour < 2);
            });
        });
    });

    describe('Basis matching', function () {
        var filters = new Filters({bases: ['tea-rooibos', 'infusion', 'cocoa']});

        it('just works.', function () {
            expect(filters._isBasisActive(new Beverage({basis: 'tea-rooibos'}))).toBe(true);
            expect(filters._isBasisActive(new Beverage({basis: 'tea-white'}))).toBe(false);
        });

        it('doesn\'t block unknown bases.', function () {
            expect(filters._isBasisActive(new Beverage({basis: 'what-the-hell-is-that'}))).toBe(true);
        });
    });

    describe('Moment matching', function () {
        it('works fine when time is advised.', function () {
            var filters = new Filters({moments: ['morning']});

            expect(filters._isMomentActive(new Beverage({time: {morning: true}}))).toBe(true);
            expect(filters._isMomentActive(new Beverage({time: {morning: false}}))).toBe(false);
            expect(filters._isMomentActive(new Beverage({time: {morning: undefined}}))).toBe(false);
            expect(filters._isMomentActive(new Beverage({time: {morning: null}}))).toBe(false);
        });

        it('works fine when time is not advised and "unknown" is set.', function () {
            var filters = new Filters({moments: ['unknown']});

            expect(filters._isMomentActive(new Beverage({time: undefined}))).toBe(true);
            expect(filters._isMomentActive(new Beverage({time: {morning: undefined}}))).toBe(true);
            expect(filters._isMomentActive(new Beverage({time: {morning: null}}))).toBe(true);
        });

        it('works fine when time is not advised and "unknown" is not set.', function () {
            var filters = new Filters({autoTime: true});

            expect(filters._isMomentActive(new Beverage({time: undefined}))).toBe(false);
            expect(filters._isMomentActive(new Beverage({time: {morning: undefined}}))).toBe(false);
            expect(filters._isMomentActive(new Beverage({time: {morning: null}}))).toBe(false);
        });
    });

    describe('Text matching', function () {
        var filters,
            beverage = new Beverage({
                name: 'My super duper tea',
                brand: 'A Chinese fine tea maker',
                basis: 'tea-oolong',
                benefits: ['stimulating', 'relaxing'],
                ingredients: ['tea obviously'],
                note: 'This is a descriptive note about this tea (which by the way is super duper).'
            });

        beforeEach(function () {
            filters = new Filters();
        });

        it('always works if no text has been defined.', function () {
            expect(filters._containsText(beverage)).toBe(true);
        });

        it('works only on predefined fields.', function () {
            filters.set('text', 'oolong');
            expect(filters._containsText(beverage)).toBe(false);
        });

        it('is case insensitive.', function () {
            filters.set('text', 'SUpEr');
            expect(filters._containsText(beverage)).toBe(true);
        });

        it('works only if all parts of the text find a match.', function () {
            filters.set('text', 'OBVIOUSLY aBouT chinEsE stimulating');
            expect(filters._containsText(beverage)).toBe(true);

            filters.set('text', 'OBVIOUSLY aBouT chinEsE stimulating oolong');
            expect(filters._containsText(beverage)).toBe(false);
        });
    });

    describe('Matching', function () {
        var filters,
            beverage = new Beverage({
                name: 'My super duper tea',
                brand: 'A Chinese fine tea maker',
                basis: 'tea-green',
                time: {
                    morning: undefined,
                    daytime: undefined,
                    evening: false
                },
                benefits: ['stimulating', 'relaxing'],
                ingredients: ['tea obviously'],
                note: 'This is a descriptive note about this tea (which by the way is super duper).'
            });

        beforeEach(function () {
            filters = new Filters({autoTime: true});
        });

        it('does not pass if the basis does not match.', function () {
            expect(filters.match(beverage)).toBe(false);
        });

        it('does not pass if the time does not match.', function () {
            filters.get('bases').get('tea-green').set('active', true);
            expect(filters.match(beverage)).toBe(false);
        });

        it('does not pass if the text does not match.', function () {
            filters.get('bases').get('tea-green').set('active', true);
            filters.get('moments').get('unknown').set('active', true);
            filters.set('text', 'hello world');
            expect(filters.match(beverage)).toBe(false);
        });

        it('passes if all criteria are met.', function () {
            filters.get('bases').get('tea-green').set('active', true);
            filters.get('moments').get('unknown').set('active', true);
            filters.set('text', 'obviously');
            expect(filters.match(beverage)).toBe(true);
        });
    });
});

