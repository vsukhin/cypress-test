const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    specPattern: 'src/**/*.cy.js'
  },
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.js'
  },
})
