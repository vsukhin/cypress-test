const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    specPattern: 'src/**/*.cy.js',
    supportFile: false
  },
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.js',
    supportFile: false
  },
})
