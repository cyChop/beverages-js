const Karma = require('karma')

const utils = require('./utils')

exports.unit = function (done) {
  process.env.NODE_ENV = 'testing'
  process.env.BABEL_ENV = 'test'

  new Karma.Server({
    configFile: utils.resolve('test/unit/karma.conf.js'),
    singleRun: true
  }, done).start()
}
