define([
    'lib/rivets-cfg'
], function (rivets) {
    // FIXME test
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

            it ('Returns 0 if object is not an array', function() {
                expect(length(null)).toBe(0);
                expect(length()).toBe(0);
                expect(length(1337)).toBe(0);
                expect(length('hello, world')).toBe(0);
            });
        });

        describe('Test "isEmpty" formatter', function() {
            var empty = rivets.formatters.isEmpty;

            it ('Returns correct result for an array', function() {
                expect(empty([])).toBe(true);
                expect(empty([42])).toBe(false);
            });

            it ('Returns "true" for non array objects', function() {
                expect(empty(null)).toBe(true);
                expect(empty()).toBe(true);
                expect(empty(1337)).toBe(true);
                expect(empty('hello, world')).toBe(true);
            });
        });
    });
});

