define([
    'jquery',
    'view/beverages',
    'beverages',

    'mock/fake-app-server'
], function ($, View) {
    'use strict';

    describe('The jQuery plugin', function () {
        var $target;
        beforeEach(function () {
            setFixtures('<div id="test-beverages"></div>');
            $target = $('#test-beverages');

            spyOn(View.prototype, 'initialize');
            spyOn(View.prototype, 'render');
        });

        it('creates a beverages view, passing the jQuery target as "el"', function () {
            $target.beverages();

            expect(View.prototype.initialize).toHaveBeenCalledTimes(1);
            expect(View.prototype.initialize).toHaveBeenCalledWith({el: $target});
            expect(View.prototype.render).toHaveBeenCalledTimes(1);
        });

        it('creates a beverages view when called with only a sheet ID', function () {
            $target.beverages('thisIsAMockId');

            expect(View.prototype.initialize).toHaveBeenCalledTimes(1);
            expect(View.prototype.initialize).toHaveBeenCalledWith({gSheetId: 'thisIsAMockId', el: $target});
            expect(View.prototype.render).toHaveBeenCalledTimes(1);
        });

        it('creates a beverages view with the supplied options', function () {
            $target.beverages({
                gSheetId: 'thisIsAMockId',
                celsius: true
            });

            expect(View.prototype.initialize).toHaveBeenCalledTimes(1);
            expect(View.prototype.initialize).toHaveBeenCalledWith({
                gSheetId: 'thisIsAMockId',
                celsius: true,
                el: $target
            });
            expect(View.prototype.render).toHaveBeenCalledTimes(1);
        });
    });
});

