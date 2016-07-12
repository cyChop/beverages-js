// Karma configuration
// Generated on Fri Jul 01 2016 11:36:37 GMT+0200 (CEST)
var path = require('path');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'test/js/*-spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/js/*-spec.js': ['coverage', 'webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'verbose', 'coverage'],


        // Configure coverage reports
        coverageReporter: {
            dir: 'build/coverage',
            reporters: [
                {type: 'html', subdir: 'report-html'},
                {type: 'lcov', subdir: 'report-lcov'}
            ]
        },
        webpack: {
            module: {
                loaders: [
                    {test: /\.json$/, loader: 'json'}
                ],
                postLoaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|test|dev)/,
                        loader: 'istanbul-instrumenter'
                    }
                ],
                noParse: /[\/\\]sinon[\/\\]pkg[\/\\]sinon.js$/
            },
            resolve: {
                root: [
                    path.join(__dirname, '/node_modules'),
                    path.join(__dirname, '/src/js'),
                    path.join(__dirname, '/src/dev')
                ],
                alias: {
                    i18n: path.join(__dirname, '/src/js/i18n/en'),
                    sinon: path.join(__dirname, '/node_modules/sinon/pkg/sinon.js'),
                    lib: path.join(__dirname, '/src/lib')
                }
            }
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
