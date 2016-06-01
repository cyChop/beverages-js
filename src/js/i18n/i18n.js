define([
    'underscore'
], function (_) {
    'use strict';

    // TODO This class is to disappear with a new bundling method anyway

    var DEFAULT_LANGUAGE = 'en',
        SUPPORTED_LANGUAGES = [DEFAULT_LANGUAGE, 'fr'];

    var getLang = function (language) {
        if (language) {
            var lg = language.toLowerCase();
            if (_.indexOf(SUPPORTED_LANGUAGES, lg) > -1) {
                return lg;
            }
        }

        return DEFAULT_LANGUAGE;
    };

    return function (language) {
        return require('./' + getLang(language) + '/labels.json'); // eslint-disable-line global-require
    };
});
