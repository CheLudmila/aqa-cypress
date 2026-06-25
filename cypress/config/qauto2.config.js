const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space/',
  },

  env: {
    email: 'Genbroker2@gmail.com',
    password: 'Pass1982',
  },
});