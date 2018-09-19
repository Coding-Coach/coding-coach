/* eslint-disable */

module.exports = config => {
  config.setupTestFrameworkScriptFile = '<rootDir>/tests/setup/setupTests.js';
  config.modulePaths = ['src'];
  return config;
};
