const path = require('path')

module.exports = function (fastify, opts, next) {
  // load plugins
  fastify.register(
    require('./plugins/nuxt'),
    require('./nuxt.config')
  )

  // This loads all plugins defined in services
  // define your routes in one of these

  // Make sure to call next when done
  next()
}
