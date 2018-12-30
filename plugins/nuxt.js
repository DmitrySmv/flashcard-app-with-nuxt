const { Nuxt, Builder } = require('nuxt');
const fp = require('fastify-plugin');

async function nuxtPlugin(fastify, options, next) {
  const dev = process.env.NODE_ENV !== 'production';
  const nuxt = new Nuxt(Object.assign({}, { dev }, options));

  fastify.use(nuxt.render);

  if (dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  next();
}

module.exports = fp(nuxtPlugin);
