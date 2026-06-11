const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    allowCypressEnv: true,
    env: {
      apiBaseUrl: 'https://jsonplaceholder.typicode.com',
      uiBaseUrl: 'https://eeglobal.github.io/basic-product-funnel-sample',
    },
  },
});
