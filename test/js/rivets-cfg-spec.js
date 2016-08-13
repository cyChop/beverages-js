define([
    'jquery',
    'lib/rivets-cfg'
], function ($, rivets) {
    'use strict';

    describe('Rivets formatter', function () {

        describe('"defined"', function () {
            var defined = rivets.formatters.defined;

            it('returns false for undefined', function () {
                var something;
                expect(defined(something)).toBe(false);
                expect(defined(undefined)).toBe(false);
                expect(defined()).toBe(false);
            });

            it('returns false for null', function () {
                var something = null;
                expect(defined(something)).toBe(false);
                expect(defined(null)).toBe(false);
            });

            it('returns true for anything else (even falsies)', function () {
                expect(defined(0)).toBe(true);
                expect(defined('')).toBe(true);
                expect(defined({})).toBe(true);
                expect(defined([])).toBe(true);
            });
        });

        describe('"eq"', function () {
            var eq = rivets.formatters.eq;

            it('ensures two simple objects are equal (===)', function () {
                expect(eq(1, 1)).toBe(true);
                expect(eq(1, '1')).toBe(false);
                expect(eq('hello', 'hello')).toBe(true);
                expect(eq('hello', 'world')).toBe(false);
            });
        });

        describe('"join"', function () {
            var join = rivets.formatters.join;

            it('returns correct arrays joined as string with correct separator', function () {
                expect(join([], ' - ')).toBe('');
                expect(join([1, 2, 3], ' | ')).toBe('1 | 2 | 3');
                expect(join(['a', 'b', 'c'])).toBe('a,b,c');
                expect(join([0, 0, 7], '')).toBe('007');
            });

            it('returns not-array objects intact', function () {
                var tested = 'abc';
                expect(join(tested, ', ')).toBe(tested);

                tested = {'a': 'hello', 'b': 'world'};
                expect(join(tested, ', ')).toBe(tested);
            });
        });

        describe('"contains"', function () {
            var contains = rivets.formatters.contains;

            it('returns "false" if the array is not an array', function () {
                expect(contains('123', '123')).toBe(false);
                expect(contains('123', 3)).toBe(false);
                expect(contains(undefined, 0)).toBe(false);
            });

            it('returns "false" if the array is empty or does not contain the value', function () {
                expect(contains([1, 2, 3], 1337)).toBe(false);
                expect(contains([], 3)).toBe(false);
            });

            it('returns "true" if the array contains the specified element', function () {
                expect(contains([1, 2, 3], 1)).toBe(true);
            });
        });

        describe('"length"', function () {
            var length = rivets.formatters.length;

            it('returns the correct length of an array', function () {
                expect(length([])).toBe(0);
                expect(length([1, 2, 3])).toBe(3);
            });

            it('returns 0 if the argument is not an array', function () {
                expect(length(null)).toBe(0);
                expect(length()).toBe(0);
                expect(length(1337)).toBe(0);
                expect(length('hello, world')).toBe(0);
            });
        });

        describe('"isEmpty"', function () {
            var empty = rivets.formatters.isEmpty;

            it('returns correct result for an array', function () {
                expect(empty([])).toBe(true);
                expect(empty([42])).toBe(false);
            });

            it('returns "true" for non array objects', function () {
                expect(empty(null)).toBe(true);
                expect(empty()).toBe(true);
                expect(empty(1337)).toBe(true);
                expect(empty('hello, world')).toBe(true);
            });
        });

        describe('"startWithCap"', function () {
            var startWithCap = rivets.formatters.startWithCap;

            it('makes the first character of a string upper case', function () {
                expect(startWithCap(null)).toBe(null);
                expect(startWithCap()).toBe(undefined);
                expect(startWithCap('')).toBe('');
                expect(startWithCap('x')).toBe('X');
                expect(startWithCap('hello')).toBe('Hello');
                expect(startWithCap('WORLD')).toBe('WORLD');
            });
        });

        describe('"toBoolean"', function () {
            var toBoolean = rivets.formatters.toBoolean;

            it('returns "false" for "null" or "undefined"', function () {
                expect(toBoolean(null)).toBe(false);
                expect(toBoolean()).toBe(false);
            });

            it('returns "false" for falsies', function () {
                expect(toBoolean(false)).toBe(false);
                expect(toBoolean(0)).toBe(false);
                expect(toBoolean('')).toBe(false);
            });

            it('returns "true" for anything else', function () {
                expect(toBoolean(true)).toBe(true);
                expect(toBoolean(1337)).toBe(true);
                expect(toBoolean('HT')).toBe(true);
                expect(toBoolean({})).toBe(true);
                expect(toBoolean([])).toBe(true);
            });
        });

        describe('"not"', function () {
            var not = rivets.formatters.not;

            it('returns the contrary of a boolean', function () {
                expect(not(true)).toBe(false);
                expect(not(false)).toBe(true);
            });

            it('returns the contrary of a falsy/truthy', function () {
                expect(not(undefined)).toBe(true);
                expect(not(null)).toBe(true);
                expect(not(0)).toBe(true);
                expect(not('')).toBe(true);
                expect(not(42)).toBe(false);
                expect(not('hello')).toBe(false);
            });
        });

        describe('"and"', function () {
            var and = rivets.formatters.and;

            it('works with booleans', function () {
                expect(and(true, true)).toBe(true);
                expect(and(true, false)).toBe(false);
                expect(and(false, true)).toBe(false);
                expect(and(false, false)).toBe(false);
            });

            it('works with falsies/truthies', function () {
                expect(and('hello', 'world')).toBeTruthy();
                expect(and(1337, undefined)).toBeFalsy();
                expect(and(null, 42)).toBeFalsy();
                expect(and(0, '')).toBeFalsy();
            });
        });

        describe('"or"', function () {
            var or = rivets.formatters.or;

            it('works with booleans', function () {
                expect(or(true, true)).toBe(true);
                expect(or(true, false)).toBe(true);
                expect(or(false, true)).toBe(true);
                expect(or(false, false)).toBe(false);
            });

            it('works with falsies/truthies', function () {
                expect(or('hello', 'world')).toBeTruthy();
                expect(or(1337, undefined)).toBeTruthy();
                expect(or(null, 42)).toBeTruthy();
                expect(or(0, '')).toBeFalsy();
            });
        });

        describe('"if"', function () {
            var ifelse = rivets.formatters.if;

            it('works as "if"', function () {
                expect(ifelse(true, 1)).toBe(1);
                expect(ifelse(false, 1)).toBeUndefined();
            });

            it('works as "if-else"', function () {
                expect(ifelse(true, 1, 2)).toBe(1);
                expect(ifelse(false, 1, 2)).toBe(2);
            });
        });

        describe('"map"', function () {
            var map = rivets.formatters.map;
            var i18n = {
                hello: 'world'
            };

            it('returns the expected field', function () {
                expect(map('hello', i18n)).toBe('world');
            });

            it('returns the original value if the requested field is not in map', function () {
                expect(map('label', i18n)).toBe('label');
            });

            it('returns the original value when no map has been provided', function () {
                expect(map('hello')).toBe('hello');
            });
        });
    });

    describe('Rivets formatter', function () {
        describe('"addclass"', function () {
            var addclass = rivets.binders.addclass,
                $el, el;

            beforeEach(function() {
                setFixtures('<span id="test-el"></span>');
                $el = $('#test-el');
                el = $el.get(0)
            });

            it('adds a class to the target element', function () {
                expect($el.hasClass('class1')).toBe(false);

                addclass(el, 'class1');
                
                expect($el.hasClass('class1')).toBe(true);
            });

            it('removes previously added a class to the target element', function () {
                addclass(el, 'class1');
                addclass(el, 'class2');

                expect($el.hasClass('class1')).toBe(false);
                expect($el.hasClass('class2')).toBe(true);
            });

            it('remove added class if no class is supplied', function () {
                addclass(el, 'class2');
                addclass(el);

                expect($el.hasClass('class2')).toBe(false);
            });
        });
    });
});

