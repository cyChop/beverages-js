import $ from 'jquery';
import rivets from '../../src/lib/rivets-cfg';

describe('Rivets formatter', () => {
    describe('"defined"', () => {
        const {defined} = rivets.formatters;

        it('returns false for undefined', () => {
            let something;
            expect(defined(something)).toBe(false);
            expect(defined(undefined)).toBe(false);
            expect(defined()).toBe(false);
        });

        it('returns false for null', () => {
            const something = null;
            expect(defined(something)).toBe(false);
            expect(defined(null)).toBe(false);
        });

        it('returns true for anything else (even falsies)', () => {
            expect(defined(0)).toBe(true);
            expect(defined('')).toBe(true);
            expect(defined({})).toBe(true);
            expect(defined([])).toBe(true);
        });
    });

    describe('"eq"', () => {
        const {eq} = rivets.formatters;

        it('ensures two simple objects are equal (===)', () => {
            expect(eq(1, 1)).toBe(true);
            expect(eq(1, '1')).toBe(false);
            expect(eq('hello', 'hello')).toBe(true);
            expect(eq('hello', 'world')).toBe(false);
        });
    });

    describe('"join"', () => {
        const {join} = rivets.formatters;

        it('returns correct arrays joined as string with correct separator', () => {
            /* eslint-disable no-magic-numbers */
            expect(join([], ' - ')).toBe('');
            expect(join([1, 2, 3], ' | ')).toBe('1 | 2 | 3');
            expect(join(['a', 'b', 'c'])).toBe('a,b,c');
            expect(join([0, 0, 7], '')).toBe('007');
            /* eslint-enable no-magic-numbers */
        });

        it('returns an empty string if the original argument is null or undefined', () => {
            expect(join(null, ',')).toBe('');
            expect(join(undefined)).toBe('');
        });

        it('returns not-array objects intact', () => {
            let tested = 'abc';
            expect(join(tested, ', ')).toBe(tested);

            tested = {
                a: 'hello',
                b: 'world'
            };
            expect(join(tested, ', ')).toBe(tested);
        });
    });

    describe('"contains"', () => {
        /* eslint-disable no-magic-numbers */
        const {contains} = rivets.formatters;

        it('returns "false" if the array is not an array', () => {
            expect(contains('123', '123')).toBe(false);
            expect(contains('123', 3)).toBe(false);
            expect(contains(undefined, 0)).toBe(false);
        });

        it('returns "false" if the array is empty or does not contain the value', () => {
            expect(contains([1, 2, 3], 1337)).toBe(false);
            expect(contains([], 3)).toBe(false);
        });

        it('returns "true" if the array contains the specified element', () => {
            expect(contains([1, 2, 3], 1)).toBe(true);
        });
        /* eslint-enable no-magic-numbers */
    });

    describe('"length"', () => {
        /* eslint-disable no-magic-numbers */
        const {length} = rivets.formatters;

        it('returns the correct length of an array', () => {
            expect(length([])).toBe(0);
            expect(length([1, 2, 3])).toBe(3);
        });

        it('returns 0 if the argument is not an array', () => {
            expect(length(null)).toBe(0);
            expect(length()).toBe(0);
            expect(length(1337)).toBe(0);
            expect(length('hello, world')).toBe(0);
        });
        /* eslint-enable no-magic-numbers */
    });

    describe('"isEmpty"', () => {
        /* eslint-disable no-magic-numbers */
        const {isEmpty} = rivets.formatters;

        it('returns correct result for an array', () => {
            expect(isEmpty([])).toBe(true);
            expect(isEmpty([42])).toBe(false);
        });

        it('returns "true" for non array objects', () => {
            expect(isEmpty(null)).toBe(true);
            expect(isEmpty()).toBe(true);
            expect(isEmpty(1337)).toBe(true);
            expect(isEmpty('hello, world')).toBe(true);
        });
        /* eslint-enable no-magic-numbers */
    });

    describe('"append"', () => {
        const {append} = rivets.formatters;

        it('appends two strings together', () => {
            expect(append('hello, ', 'world')).toBe('hello, world');
            // eslint-disable-next-line no-magic-numbers
            expect(append(13, 37)).toBe('1337');
        });

        it('does not add anything if argument is null or undefined', () => {
            expect(append('hello', undefined)).toBe('hello');
            expect(append(null, 'world')).toBe('world');
        });

        it('returns an empty string if supplied with no argument', () => {
            expect(append()).toBe('');
        });
    });
    describe('"startWithCap"', () => {
        const {startWithCap} = rivets.formatters;

        it('returns an empty string if value is null or undefined', () => {
            expect(startWithCap(null)).toBe('');
            expect(startWithCap()).toBe('');
        });

        it('makes the first character of a string upper case', () => {
            expect(startWithCap('')).toBe('');
            expect(startWithCap('x')).toBe('X');
            expect(startWithCap('hello')).toBe('Hello');
            expect(startWithCap('WORLD')).toBe('WORLD');
        });
    });

    describe('"toBoolean"', () => {
        const {toBoolean} = rivets.formatters;

        it('returns "false" for "null" or "undefined"', () => {
            expect(toBoolean(null)).toBe(false);
            expect(toBoolean()).toBe(false);
        });

        it('returns "false" for falsies', () => {
            expect(toBoolean(false)).toBe(false);
            expect(toBoolean(0)).toBe(false);
            expect(toBoolean('')).toBe(false);
        });

        it('returns "true" for anything else', () => {
            expect(toBoolean(true)).toBe(true);
            // eslint-disable-next-line no-magic-numbers
            expect(toBoolean(1337)).toBe(true);
            expect(toBoolean('HT')).toBe(true);
            expect(toBoolean({})).toBe(true);
            expect(toBoolean([])).toBe(true);
        });
    });

    describe('"not"', () => {
        const {not} = rivets.formatters;

        it('returns the contrary of a boolean', () => {
            expect(not(true)).toBe(false);
            expect(not(false)).toBe(true);
        });

        it('returns the contrary of a falsy/truthy', () => {
            /* eslint-disable no-magic-numbers */
            expect(not(undefined)).toBe(true);
            expect(not(null)).toBe(true);
            expect(not(0)).toBe(true);
            expect(not('')).toBe(true);
            expect(not(42)).toBe(false);
            expect(not('hello')).toBe(false);
            /* eslint-enable no-magic-numbers */
        });
    });

    describe('"and"', () => {
        const {and} = rivets.formatters;

        it('works with booleans', () => {
            expect(and(true, true)).toBe(true);
            expect(and(true, false)).toBe(false);
            expect(and(false, true)).toBe(false);
            expect(and(false, false)).toBe(false);
        });

        it('works with falsies/truthies', () => {
            /* eslint-disable no-magic-numbers */
            expect(and('hello', 'world')).toBeTruthy();
            expect(and(1337, undefined)).toBeFalsy();
            expect(and(null, 42)).toBeFalsy();
            expect(and(0, '')).toBeFalsy();
            /* eslint-enable no-magic-numbers */
        });
    });

    describe('"or"', () => {
        const {or} = rivets.formatters;

        it('works with booleans', () => {
            expect(or(true, true)).toBe(true);
            expect(or(true, false)).toBe(true);
            expect(or(false, true)).toBe(true);
            expect(or(false, false)).toBe(false);
        });

        it('works with falsies/truthies', () => {
            /* eslint-disable no-magic-numbers */
            expect(or('hello', 'world')).toBeTruthy();
            expect(or(1337, undefined)).toBeTruthy();
            expect(or(null, 42)).toBeTruthy();
            expect(or(0, '')).toBeFalsy();
            /* eslint-enable no-magic-numbers */
        });
    });

    describe('"if"', () => {
        const ifelse = rivets.formatters.if;

        it('works as "if"', () => {
            expect(ifelse(true, 'hello')).toBe('hello');
            expect(ifelse(false, 'hello')).toBeUndefined();
        });

        it('works as "if-else"', () => {
            expect(ifelse(true, 'hello', 'world')).toBe('hello');
            expect(ifelse(false, 'hello', 'world')).toBe('world');
        });
    });

    describe('"map"', () => {
        const {map} = rivets.formatters,
            i18n = {hello: 'world'};

        it('returns an empty string if first argument is null or undefined', () => {
            expect(map(null, i18n)).toBe('');
            expect(map(undefined)).toBe('');
        });

        it('returns the expected field', () => {
            expect(map('hello', i18n)).toBe('world');
        });

        it('returns the original value if the requested field is not in map', () => {
            expect(map('label', i18n)).toBe('label');
        });

        it('returns the original value when no map has been provided', () => {
            expect(map('hello')).toBe('hello');
        });
    });
});

describe('Rivets binder', () => {
    describe('"addclass"', () => {
        const {addclass} = rivets.binders;
        let $el, el;

        beforeEach(() => {
            // eslint-disable-next-line no-undef
            setFixtures('<span id="test-el"></span>');
            $el = $('#test-el');
            el = $el.get(0);
        });

        it('adds a class to the target element', () => {
            expect($el.hasClass('class1')).toBe(false);

            addclass(el, 'class1');

            expect($el.hasClass('class1')).toBe(true);
        });

        it('removes previously added a class to the target element', () => {
            addclass(el, 'class1');
            addclass(el, 'class2');

            expect($el.hasClass('class1')).toBe(false);
            expect($el.hasClass('class2')).toBe(true);
        });

        it('remove added class if no class is supplied', () => {
            addclass(el, 'class2');
            addclass(el);

            expect($el.hasClass('class2')).toBe(false);
        });
    });
});
