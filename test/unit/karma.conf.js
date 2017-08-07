const webpackConfig = require('../../gulp/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig('fr'),
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: '../../reports/coverage',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'},
        { type: 'text-summary' }
      ]
    }
  })
}
