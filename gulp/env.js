const config = require('../config')

const setEnv = env => function (done) {
  process.env.NODE_ENV = env
  done()
}

exports.setDevByDefault = function (done) {
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
  }
  done()
}

exports.setProd = setEnv('production')
exports.setTest = setEnv('testing')
