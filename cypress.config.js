const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url_application: 'https://front.serverest.dev',
    url_api:         'https://serverest.dev',
    user_auth:       'isac@qa.com',
    password_auth:   '123456'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // exportar o módulo de relatórios do Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
      // configurações de responsividade mínima para desktop
      config.desktopViewWidth  = 1368;
      config.desktopViewHeight = 768;
      return config;
    },
    
  },
  // configurações personalizadas do relatório Mochawesome
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:           'cypress/reports/',
    reportFilename:      'report',
    reportTitle:         'Testes Automatizados com Cypress',
    reportPageTitle:     'Testes Automatizados com Cypress',
    charts:              true,
    embeddedScreenshots: true,
    inlineAssets:        true,
    saveAllAttempts:     false,
  },
});
