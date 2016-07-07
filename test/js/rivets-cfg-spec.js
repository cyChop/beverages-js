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
    });
});

