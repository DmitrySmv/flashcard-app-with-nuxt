const path = require('path');

module.exports = {
  mode: 'spa',
  srcDir: path.resolve(__dirname, 'client'),
  css: [
    '~/assets/main.css',
  ]
}