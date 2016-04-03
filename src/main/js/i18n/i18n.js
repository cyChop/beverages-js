define([
    'underscore'
], function (_) {
    'use strict';

    const DEFAULT_LANGUAGE = 'en',
        SUPPORTED_LANGUAGES = [DEFAULT_LANGUAGE, 'fr'];

    function getLang(language) {
        if (language) {
            var lg = language.toLowerCase();
            if (_.indexOf(SUPPORTED_LANGUAGES, lg) > -1) {
                return lg;
            }
        }

        return DEFAULT_LANGUAGE;
    }

    return function (language) {
        return require('./' + getLang(language) + '/labels.json');
    };
});
