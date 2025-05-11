const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  video: true,
  videosFolder: 'cypress/reports/videos',
  screenshotsFolder: 'cypress/reports/screenshots',
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    retries : 3,
    baseUrl: 'https://seubarriga.wcaquino.me',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
});
