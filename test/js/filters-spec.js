import Filters from '../../src/js/model/filter/filters';
import Beverage from '../../src/js/model/beverage/beverage';

describe('Upon initialization,', () => {
    describe('bases filters', () => {
        it('are all enabled if no option was provided', () => {
            const filters = new Filters();

            filters.get('bases').each((filter) => {
                expect(filter.get('active')).toBe(true);
            });
        });

        it('are all disabled if an empty array was provided', () => {
            const filters = new Filters({bases: []});

            filters.get('bases').each((filter) => {
                expect(filter.get('active')).toBe(false);
            });
        });

        it('are enabled for all teas if the "teas" keyword is passed', () => {
            const filters = new Filters({bases: ['teas']});

            filters.get('bases').each((filter) => {
                expect(filter.get('active')).toBe((/^tea-/).test(filter.get('key')));
            });
        });

        it('can be set by combining the "teas" keyword with specific beverages', () => {
            const filters = new Filters({bases: ['teas', 'coffee']});

            filters.get('bases').each((filter) => {
                const key = filter.get('key');
                expect(filter.get('active')).toBe((/^tea-/).test(key) || key === 'coffee');
            });
        });
    });

    describe('moments filters', () => {
        it('are all enabled if no option was provided', () => {
            const filters = new Filters();

            filters.get('moments').each((filter) => {
                expect(filter.get('active')).toBe(true);
            });
        });

        it('are all disabled if an empty array was provided', () => {
            const filters = new Filters({moments: []});

            filters.get('moments').each((filter) => {
                expect(filter.get('active')).toBe(false);
            });
        });

        it('are only enabled if in the supplied array', () => {
            const filters = new Filters({
                moments: ['morning', 'daytime'],
                autoTime: false
            });

            filters.get('moments').each((filter) => {
                const key = filter.get('key');
                expect(filter.get('active')).toBe(key === 'morning' || key === 'daytime');
            });
        });

        it('can be set using "autoTime"', () => {
            const hour = new Date().getHours(),
                filters = new Filters({autoTime: true}),
                moments = filters.get('moments');

            expect(moments.get('unknown').get('active')).toBe(false);
            /* eslint-disable no-magic-numbers */
            expect(moments.get('morning').get('active')).toBe(hour >= 5 && hour < 11);
            expect(moments.get('daytime').get('active')).toBe(hour >= 10 && hour < 20);
            expect(moments.get('evening').get('active')).toBe(hour >= 18 || hour < 2);
            /* eslint-enable no-magic-numbers */
        });

        it('can be set combining "autoTime" and fixed values', () => {
            const hour = new Date().getHours(),
                filters = new Filters({
                    autoTime: true,
                    moments: ['morning', 'unknown']
                }),
                moments = filters.get('moments');

            expect(moments.get('unknown').get('active')).toBe(true);
            expect(moments.get('morning').get('active')).toBe(true);
            /* eslint-disable no-magic-numbers*/
            expect(moments.get('daytime').get('active')).toBe(hour >= 10 && hour < 20);
            expect(moments.get('evening').get('active')).toBe(hour >= 18 || hour < 2);
            /* eslint-enable no-magic-numbers*/
        });
    });
});

describe('Basis matching', () => {
    const filters = new Filters({bases: ['tea-rooibos', 'infusion', 'cocoa']});

    it('just works', () => {
        expect(filters._isBasisActive(new Beverage({basis: 'tea-rooibos'}))).toBe(true);
        expect(filters._isBasisActive(new Beverage({basis: 'tea-white'}))).toBe(false);
    });

    it('doesn\'t block unknown bases', () => {
        expect(filters._isBasisActive(new Beverage({basis: 'what-the-hell-is-that'}))).toBe(true);
    });
});

describe('Moment matching', () => {
    it('works fine when time is advised', () => {
        const filters = new Filters({moments: ['morning']});

        expect(filters._isMomentActive(new Beverage({time: {morning: true}}))).toBe(true);
        expect(filters._isMomentActive(new Beverage({time: {morning: false}}))).toBe(false);
        expect(filters._isMomentActive(new Beverage({time: {morning: undefined}}))).toBe(false);
        expect(filters._isMomentActive(new Beverage({time: {morning: null}}))).toBe(false);
    });

    it('works fine when time is not advised and "unknown" is set', () => {
        const filters = new Filters({moments: ['unknown']});

        expect(filters._isMomentActive(new Beverage({time: undefined}))).toBe(true);
        expect(filters._isMomentActive(new Beverage({time: {morning: undefined}}))).toBe(true);
        expect(filters._isMomentActive(new Beverage({time: {morning: null}}))).toBe(true);
    });

    it('works fine when time is not advised and "unknown" is not set', () => {
        const filters = new Filters({autoTime: true});

        expect(filters._isMomentActive(new Beverage({time: undefined}))).toBe(false);
        expect(filters._isMomentActive(new Beverage({time: {morning: undefined}}))).toBe(false);
        expect(filters._isMomentActive(new Beverage({time: {morning: null}}))).toBe(false);
    });
});

describe('Text matching', () => {
    const beverage = new Beverage({
        name: 'My super duper tea',
        brand: 'A Chinese fine tea maker',
        basis: 'tea-oolong',
        benefits: ['stimulating', 'relaxing'],
        ingredients: ['tea obviously'],
        note: 'This is a descriptive note about this tea (which by the way is super duper).'
    });
    let filters;

    beforeEach(() => {
        filters = new Filters();
    });

    it('always works if no text has been defined', () => {
        expect(filters._containsText(beverage)).toBe(true);
    });

    it('works only on predefined fields', () => {
        filters.set('text', 'oolong');
        expect(filters._containsText(beverage)).toBe(false);
    });

    it('is case insensitive', () => {
        filters.set('text', 'SUpEr');
        expect(filters._containsText(beverage)).toBe(true);
    });

    it('works only if all parts of the text find a match', () => {
        filters.set('text', 'OBVIOUSLY aBouT chinEsE stimulating');
        expect(filters._containsText(beverage)).toBe(true);

        filters.set('text', 'OBVIOUSLY aBouT chinEsE stimulating oolong');
        expect(filters._containsText(beverage)).toBe(false);
    });
});

describe('Matching', () => {
    const beverage = new Beverage({
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
    let filters;

    beforeEach(() => {
        filters = new Filters({autoTime: true});
    });

    it('does not pass if the basis does not match', () => {
        expect(filters.match(beverage)).toBe(false);
    });

    it('does not pass if the time does not match', () => {
        filters.get('bases').get('tea-green').set('active', true);
        expect(filters.match(beverage)).toBe(false);
    });

    it('does not pass if the text does not match', () => {
        filters.get('bases').get('tea-green').set('active', true);
        filters.get('moments').get('unknown').set('active', true);
        filters.set('text', 'hello world');
        expect(filters.match(beverage)).toBe(false);
    });

    it('passes if all criteria are met', () => {
        filters.get('bases').get('tea-green').set('active', true);
        filters.get('moments').get('unknown').set('active', true);
        filters.set('text', 'obviously');
        expect(filters.match(beverage)).toBe(true);
    });
});
