import rivets from '../../src/lib/rivets-cfg';
import BeveragesView from '../../src/js/view/beverages';
import OrderSummary from '../../src/js/model/order/order-summary';

require('../../dev/mock/fake-app-server');

/* eslint-disable no-magic-numbers */
describe('View-defined rivets formatter', () => {
    describe('"showMinMax"', () => {
        const showMinMax = rivets.formatters.showMinMax;

        it('returns "false" if the argument is falsy', () => {
            expect(showMinMax(undefined)).toBe(false);
            expect(showMinMax(null)).toBe(false);
        });

        it('returns "false" if the argument does not have a min nor a max', () => {
            expect(showMinMax({})).toBe(false);
            expect(showMinMax('There is no spoon')).toBe(false);
            expect(showMinMax(3)).toBe(false);
        });

        it('returns "true" if the argument has a min or a max', () => {
            expect(showMinMax({min: 13})).toBe(true);
            expect(showMinMax({max: 37})).toBe(true);
        });

        it('returns "true" if the argument has a min and a max', () => {
            expect(showMinMax({
                min: 42,
                max: 1337
            })).toBe(true);
        });
    });

    describe('"minMax"', () => {
        const minMax = rivets.formatters.minMax;

        it('returns an empty string if the argument is falsy', () => {
            expect(minMax(undefined)).toBe('');
            expect(minMax(null)).toBe('');
        });

        it('returns the single provided number if the argument has only a min or a max', () => {
            expect(minMax({min: 13}, '|')).toBe(13);
            expect(minMax({max: 37}, '|')).toBe(37);
        });

        it('returns a concatenation of both values if the argument has a different min and max', () => {
            expect(minMax({
                min: 42,
                max: 1337
            }, '|')).toBe('42|1337');
        });

        it('returns a a single value if the argument has the same min and max', () => {
            expect(minMax({
                min: 42,
                max: 42
            }, '|')).toBe(42);
        });

        it('uses "-" as the default separator', () => {
            expect(minMax({
                min: 42,
                max: 1337
            })).toBe('42-1337');
        });
    });
});

describe('The beverages view', () => {
    describe(', upon initialization, ', () => {
        beforeEach(() => {
            // eslint-disable-next-line no-undef
            setFixtures('<div id="beverages"></div>');
        });

        it('does not modify the DOM before "render" is called', () => {
            const view = new BeveragesView({el: '#beverages'});
            expect(view.$el.html()).toBe('');
        });

        it('inserts DOM when "render" is called', () => {
            const view = new BeveragesView({el: '#beverages'}).render();
            expect(view.$el.html()).not.toBe('');
        });

        it('displays an error message if no options are provided', () => {
            const view = new BeveragesView().render();
            expect(view.$('.alert-danger').hasClass('up')).toBe(false);
        });

        it('displays an error message if no Google Sheet ID is provided', () => {
            const view = new BeveragesView({el: '#beverages'}).render();
            expect(view.$('.alert-danger').hasClass('up')).toBe(false);
        });

        it('doesn\'t display an error message if a Google Sheet ID is provided', () => {
            const view = new BeveragesView({
                el: '#beverages',
                gSheetId: 'something'
            }).render();
            expect(view.$('.alert-danger').hasClass('up')).toBe(true);
        });

        it('removes previous rivets binding if rendering is called several times', () => {
            const view = new BeveragesView({
                    el: '#beverages',
                    gSheetId: 'something'
                }).render(),
                rview1 = view.rview;
            expect(rview1).toBeDefined();

            spyOn(rview1, 'unbind');
            view.render();

            const rview2 = view.rview;
            expect(rview2).toBeDefined();
            expect(rview1.unbind).toHaveBeenCalledTimes(1);
            expect(rview2).not.toBe(rview1);
        });
    });

    describe('has a detailed view for a row which', () => {
        let view;

        beforeEach((done) => {
            // eslint-disable-next-line no-undef
            setFixtures('<div id="beverages"></div>');
            view = new BeveragesView({
                el: '#beverages',
                gSheetId: 'something'
            }).render();
            view.beverages.on('sync', done);
        });

        it('is off by default', () => {
            expect(view.beverages.at(0)._detailed).toBeFalsy();
        });

        it('can be toggled on by clicking on the "Zoom" button', () => {
            view.$('.beverage:first .btn-more').click();
            expect(view.beverages.at(0)._detailed).toBe(true);
        });

        it('can be toggled off by clicking on the "Zoom" button a second time', () => {
            view.$('.beverage:first .btn-more').click().click();
            expect(view.beverages.at(0)._detailed).toBeFalsy();
        });
    });

    describe('has an ordering system', () => {
        let view;

        beforeEach((done) => {
            if (sessionStorage) {
                sessionStorage.clear();
            }

            // eslint-disable-next-line no-undef
            setFixtures('<div id="beverages"></div>');
            view = new BeveragesView({
                el: '#beverages',
                gSheetId: 'something'
            }).render();
            view.beverages.on('sync', done);
        });

        it('that depends on the order model', () => {
            spyOn(view.orders, 'order');

            view.$('.beverage:first .btn-pick').click();

            expect(view.orders.order).toHaveBeenCalledTimes(1);
        });

        if (sessionStorage) {
            const STORE_KEY_ORDERS = 'orders-summary';

            it('that stores orders in the session storage', () => {
                expect(sessionStorage.getItem(STORE_KEY_ORDERS)).toBeFalsy();
                expect(view.orders.get('total')).toBe(0);

                view.$('.beverage:first .btn-pick').click();
                expect(view.orders.get('total')).toBe(1);

                const expected = new OrderSummary();
                expected.order(view.beverages.at(0));

                expect(sessionStorage.getItem(STORE_KEY_ORDERS)).toBe(JSON.stringify(expected.get('orders')));
            });

            // TODO missing something here...
            /* it('that retrieves current order from session storage upon page loading', function (done) {
             view.remove();
             const expected = new OrderSummary();
             expected.order(view.beverages.at(0));
             sessionStorage.setItem(STORE_KEY_ORDERS, JSON.stringify(expected.get('orders')));

             setFixtures('<div id="beverages"></div>');
             view = new BeveragesView({el: '#beverages', gSheetId: 'something'});
             const orders = view.orders;
             view.beverages.on('sync', () => {
             _.delay(() => {
             // First line gets 6
             // Second line causes a timeout
             //expect(orders.get('total')).toBe(1);
             //expect(orders.get('orders').at(0).get('beverage')).toBe(view.beverages.at(0));
             done();
             }, 500);
             });
             view.render();
             }); */
        }

        it('that can be cleared', () => {
            spyOn(view.orders, 'clear').and.callThrough();

            view.$('.beverage:first .btn-pick').click();
            view.$('.btn-clear-order').click();

            expect(view.orders.clear).toHaveBeenCalledTimes(1);
        });
    });

    describe('can be removed', () => {
        beforeEach(() => {
            // eslint-disable-next-line no-undef
            setFixtures('<div id="beverages"></div>');
        });

        it('before rendering', () => {
            const view = new BeveragesView({
                el: '#beverages',
                gSheetId: 'something'
            });
            view.remove();
            expect(document.getElementById('beverages')).toBeNull();
        });

        it('after rendering, removing rivets bindings', () => {
            const view = new BeveragesView({
                el: '#beverages',
                gSheetId: 'something'
            }).render();
            spyOn(view.rview, 'unbind');
            view.remove();
            expect(document.getElementById('beverages')).toBeNull();
            expect(view.rview.unbind).toHaveBeenCalledTimes(1);
        });
    });

    // TODO test filtering
    // TODO test random
});
