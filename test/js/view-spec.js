define([
    'lib/rivets-cfg',
    'view/beverages',
    'mock/fake-app-server'
], function (rivets, Beverages) {
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

    describe('The beverages view', function () {

        describe(', upon initialization, ', function () {
            beforeEach(function () {
                setFixtures('<div id="beverages"></div>');
            });

            it('does not modify the DOM before "render" is called', function () {
                var view = new Beverages({el: '#beverages'});
                expect(view.$el.html()).toBe('');
            });

            it('inserts DOM when "render" is called', function () {
                var view = new Beverages({el: '#beverages'}).render();
                expect(view.$el.html()).not.toBe('');
            });

            it('displays an error message if no Google Sheet ID is provided', function () {
                var view = new Beverages({el: '#beverages'}).render();
                expect(view.$('.alert-danger').hasClass('up')).toBe(false);
            });

            it('doesn\'t display an error message if a Google Sheet ID is provided', function () {
                var view = new Beverages({el: '#beverages', gSheetId: 'something'}).render();
                expect(view.$('.alert-danger').hasClass('up')).toBe(true);
            });
        });

        describe('has a detailed view for a row which', function () {
            var view;

            beforeEach(function (done) {
                setFixtures('<div id="beverages"></div>');
                view = new Beverages({el: '#beverages', gSheetId: 'something'}).render();
                view.beverages.on('sync', done);
            });

            it('is off by default', function () {
                expect(view.beverages.at(0)._detailed).toBeFalsy();
            });

            it('can be toggled on by clicking on the "Zoom" button', function () {
                view.$('.btn-more:first').click();
                expect(view.beverages.at(0)._detailed).toBe(true);
            });

            it('can be toggled off by clicking on the "Zoom" button a second time', function () {
                view.$('.btn-more:first').click().click();
                expect(view.beverages.at(0)._detailed).toBeFalsy();
            });
        });

        // TODO test filtering
        // TODO test random
        // TODO test orders management
    });
});
