const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  experimentalSessionAndOrigin: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: true,
  defaultCommandTimeout: 10000,
  projectId: "",

  retries: {
    runMode: 1,
  },

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "demoBlaze Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: "https://www.demoblaze.com"
    ,
    // specPattern: '**/*.feature'
  },
});
