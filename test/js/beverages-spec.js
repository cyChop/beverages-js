define([
    'model/beverage/beverages',
    'mock/fake-app-server'
], function (Beverages) {
    describe('Test URL initialization', function () {
        it('A collection without a gSheetId has no URL', function () {
            var beverages = new Beverages()

            expect(beverages.url()).toBeUndefined();
        });

        it('A collection with a gSheetId has a URL containing said gSheetId', function () {
            var gSheetId = 'thisisafakegsheetid',
                beverages = new Beverages([], {gSheetId: gSheetId}),
                url = beverages.url();

            expect(url).toBeDefined();
            expect(url).toContain(gSheetId);
        });
    });

    describe('Test collection fetching and parsing', function () {

        it('The data retrieved from the service is correctly parsed.', function (done) {
            var beverages = new Beverages([], {gSheetId: 'themockserverwillprovidethedata'});
            beverages.on('sync', function () {
                // Correct length
                expect(beverages.length).toBe(64);

                // OK, we're done with this test
                done();
            });
            beverages.fetch();
        });
    });
});

