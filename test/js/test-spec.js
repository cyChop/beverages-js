define([
    '../../src/js/model/beverage/beverages'
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
});

