define([
    'lib/rivets-cfg'
], function (rivets) {
    describe('Test rivets formatters', function () {

        describe('Test "defined" formatter', function () {
            var defined = rivets.formatters.defined;

            it('Returns false for undefined', function () {
                var something;
                expect(defined(something)).toBe(false);
                expect(defined(undefined)).toBe(false);
                expect(defined()).toBe(false);
            });

            it('Returns false for null', function () {
                var something = null;
                expect(defined(something)).toBe(false);
                expect(defined(null)).toBe(false);
            });

            it('Returns true for anything else (even falsies)', function () {
                expect(defined(0)).toBe(true);
                expect(defined('')).toBe(true);
                expect(defined({})).toBe(true);
                expect(defined([])).toBe(true);
            });
        });

        describe('Test "eq" formatter', function () {
            var eq = rivets.formatters.eq;

            it('Test equality for simple types', function () {
                expect(eq(1, 1)).toBe(true);
                expect(eq(1, '1')).toBe(false);
                expect(eq('hello', 'hello')).toBe(true);
                expect(eq('hello', 'world')).toBe(false);
            });
        });

        describe('Test "join" formatter', function () {
            var join = rivets.formatters.join;

            it('Returns correct array jointures', function () {
                expect(join([], ' - ')).toBe('');
                expect(join([1, 2, 3], ' | ')).toBe('1 | 2 | 3');
                expect(join(['a', 'b', 'c'])).toBe('a,b,c');
                expect(join([0, 0, 7], '')).toBe('007');
            });

            it('Returns intact object if not an array', function () {
                var tested = 'abc';
                expect(join(tested, ', ')).toBe(tested);

                tested = {'a': 'hello', 'b': 'world'};
                expect(join(tested, ', ')).toBe(tested);
            });
        });

        describe('Test "contains" formatter', function () {
            var contains = rivets.formatters.contains;

            it('Returns correctly "true" or "false"', function () {
                expect(contains([1, 2, 3], 1337)).toBe(false);
                expect(contains([1, 2, 3], 1)).toBe(true);
                expect(contains([], 3)).toBe(false);
                expect(contains('123', '123')).toBe(false);
                expect(contains('123', 3)).toBe(false);
                expect(contains(undefined, 0)).toBe(false);
            });
        });

        describe('Test "length" formatter', function () {
            var length = rivets.formatters.length;

            it('Returns correct length for an array', function () {
                expect(length([])).toBe(0);
                expect(length([1, 2, 3])).toBe(3);
            });

            it('Returns 0 if object is not an array', function () {
                expect(length(null)).toBe(0);
                expect(length()).toBe(0);
                expect(length(1337)).toBe(0);
                expect(length('hello, world')).toBe(0);
            });
        });

        describe('Test "isEmpty" formatter', function () {
            var empty = rivets.formatters.isEmpty;

            it('Returns correct result for an array', function () {
                expect(empty([])).toBe(true);
                expect(empty([42])).toBe(false);
            });

            it('Returns "true" for non array objects', function () {
                expect(empty(null)).toBe(true);
                expect(empty()).toBe(true);
                expect(empty(1337)).toBe(true);
                expect(empty('hello, world')).toBe(true);
            });
        });

        describe('Test "startWithCap" formatter', function () {
            var startWithCap = rivets.formatters.startWithCap;

            it('Test formatter', function () {
                expect(startWithCap(null)).toBe(null);
                expect(startWithCap()).toBe(undefined);
                expect(startWithCap('')).toBe('');
                expect(startWithCap('x')).toBe('X');
                expect(startWithCap('hello')).toBe('Hello');
                expect(startWithCap('WORLD')).toBe('WORLD');
            });
        });

        describe('Test "toBoolean" formatter', function () {
            var toBoolean = rivets.formatters.toBoolean;

            it('Returns "false" for "null" or "undefined"', function () {
                expect(toBoolean(null)).toBe(false);
                expect(toBoolean()).toBe(false);
            });

            it('Returns "false" for falsies', function () {
                expect(toBoolean(false)).toBe(false);
                expect(toBoolean(0)).toBe(false);
                expect(toBoolean('')).toBe(false);
            });

            it('Returns "true" for anything else', function () {
                expect(toBoolean(true)).toBe(true);
                expect(toBoolean(1337)).toBe(true);
                expect(toBoolean('HT')).toBe(true);
                expect(toBoolean({})).toBe(true);
                expect(toBoolean([])).toBe(true);
            });
        });

        describe('Test "not" formatter', function () {
            var not = rivets.formatters.not;

            it('Returns the contrary of a boolean', function () {
                expect(not(true)).toBe(false);
                expect(not(false)).toBe(true);
            });

            it('Returns the contrary of a falsy/turthy', function () {
                expect(not(undefined)).toBe(true);
                expect(not(null)).toBe(true);
                expect(not(0)).toBe(true);
                expect(not('')).toBe(true);
                expect(not(42)).toBe(false);
                expect(not('hello')).toBe(false);
            });
        });

        describe('Test "and" formatter', function () {
            var and = rivets.formatters.and;

            it('Test with booleans', function () {
                expect(and(true, true)).toBe(true);
                expect(and(true, false)).toBe(false);
                expect(and(false, true)).toBe(false);
                expect(and(false, false)).toBe(false);
            });

            it('Test with falsies/truthies', function () {
                expect(and('hello', 'world')).toBeTruthy();
                expect(and(1337, undefined)).toBeFalsy();
                expect(and(null, 42)).toBeFalsy();
                expect(and(0, '')).toBeFalsy();
            });
        });

        describe('Test "or" formatter', function () {
            var or = rivets.formatters.or;

            it('Test with booleans', function () {
                expect(or(true, true)).toBe(true);
                expect(or(true, false)).toBe(true);
                expect(or(false, true)).toBe(true);
                expect(or(false, false)).toBe(false);
            });

            it('Test with falsies/truthies', function () {
                expect(or('hello', 'world')).toBeTruthy();
                expect(or(1337, undefined)).toBeTruthy();
                expect(or(null, 42)).toBeTruthy();
                expect(or(0, '')).toBeFalsy();
            });
        });

        describe('Test "if" formatter', function () {
            var ifelse = rivets.formatters.if;

            it('Test single-case if', function () {
                expect(ifelse(true, 1)).toBe(1);
                expect(ifelse(false, 1)).toBeUndefined();
            });

            it('Test double-case if', function () {
                expect(ifelse(true, 1, 2)).toBe(1);
                expect(ifelse(false, 1, 2)).toBe(2);
            });
        });

        describe('Test "map" formatter', function () {
            var map = rivets.formatters.map;
            var i18n = {
                hello: 'world'
            };

            it('Returns the expected field', function () {
                expect(map('hello', i18n)).toBe('world');
            });

            it('Returns the original value if not in map', function () {
                expect(map('label', i18n)).toBe('label');
            });

            it('Returns the original value when map is missing', function () {
                expect(map('hello')).toBe('hello');
            });
        });

        describe('Test "unit" formatter', function () {
            var unit = rivets.formatters.unit;

            it('Returns the original value if unusable', function () {
                expect(unit(undefined, '°F')).toBe(undefined);
                expect(unit(null, 'minutes')).toBe(null);
            });

            it('Returns a value with unit', function () {
                expect(unit(1337, '°F')).toBe('1337°F');
                expect(unit(42, ' minutes')).toBe('42 minutes');
            });
        });
    });
});

