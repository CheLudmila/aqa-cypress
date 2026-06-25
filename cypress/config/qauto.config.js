const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space/',

    specPattern: 'e2e/**/*.cy.js',

    supportFile: 'support/e2e.js',
  },

  fixturesFolder: 'fixtures',

  env: {
    email: 'Genbroker@gmail.com',
    password: 'Pass1982',
  },
});