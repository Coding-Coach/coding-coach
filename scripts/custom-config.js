/* eslint-disable */
/*
  Ref : https://daveceddia.com/customize-create-react-app-webpack-without-ejecting/
  This module runs the scripts from react-scripts (Create React App)
  and gives an opportunity to override the Webpack config by creating
  "config-overrides.dev.js" and/or "config-overrides.prod.js" files in the
  root of the project.

  A config-overrides file should export a single function that takes a
  config and modifies it as necessary.

  module.exports = function(webpackConfig) {
    webpackConfig.module.rules[0].use[0].options.useEslintrc = true;
  };
*/
var rewire = require('rewire');
var proxyquire = require('proxyquire');

switch (process.argv[2]) {
  // The "start" script is run during development mode
  case 'start':
    rewireModule('react-scripts/scripts/start.js', loadCustomizer('./config-overrides.dev'));
    break;
  // The "build" script is run to produce a production bundle
  case 'build':
    rewireModule('react-scripts/scripts/build.js', loadCustomizer('./config-overrides.prod'));
    break;
  // The "test" script runs all the tests with Jest
  case 'test':
    // Load customizations from the config-overrides.testing file.
    // That file should export a single function that takes a config and returns a config
    let customizer = loadCustomizer('./config-overrides.testing');
    proxyquire('react-scripts/scripts/test.js', {
      // When test.js asks for '../utils/createJestConfig' it will get this instead:
      './utils/createJestConfig': (...args) => {
        // Use the existing createJestConfig function to create a config, then pass
        // it through the customizer
        var createJestConfig = require('react-scripts/scripts/utils/createJestConfig');
        return customizer(createJestConfig(...args));
      }
    });
    break;
  default:
    console.log('customized-config only supports "start", "build", and "test" options.');
    process.exit(-1);
}

// Attempt to load the given module and return null if it fails.
function loadCustomizer(module) {
  try {
    return require(module);
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }

  // If the module doesn't exist, return a
  // noop that simply returns the config it's given.
  return config => config;
}

function rewireModule(modulePath, customizer) {
  // Load the module with `rewire`, which allows modifying the
  // script's internal variables.
  let defaults = rewire(modulePath);

  // Reach into the module, grab its global 'config' variable,
  // and pass it through the customizer function.
  // The customizer should *mutate* the config object, because
  // react-scripts imports the config as a `const` and we can't
  // modify that reference.
  let config = defaults.__get__('config');
  customizer(config);
}
