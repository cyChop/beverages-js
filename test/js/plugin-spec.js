import $ from '../../src/js/beverages';
import View from '../../src/js/view/beverages';

describe('The jQuery plugin', () => {
    let $target;
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        setFixtures('<div id="test-beverages"></div>');
        $target = $('#test-beverages');

        spyOn(View.prototype, 'initialize');
        spyOn(View.prototype, 'render');
    });

    it('allows chained-calling', () => {
        expect($target.beverages()).toBe($target);
    });

    it('creates a beverages view, passing the jQuery target as "el"', () => {
        $target.beverages();

        expect(View.prototype.initialize).toHaveBeenCalledTimes(1);
        expect(View.prototype.initialize).toHaveBeenCalledWith({el: $target});
        expect(View.prototype.render).toHaveBeenCalledTimes(1);
    });

    it('creates a beverages view when called with only a sheet ID', () => {
        $target.beverages('thisIsAMockId');

        expect(View.prototype.initialize).toHaveBeenCalledTimes(1);
        expect(View.prototype.initialize).toHaveBeenCalledWith({
            gSheetId: 'thisIsAMockId',
            el: $target
        });
        expect(View.prototype.render).toHaveBeenCalledTimes(1);
    });

    it('creates a beverages view with the supplied options', () => {
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
