const cucumber = require('cypress-cucumber-preprocessor').default;
import './commands'

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})