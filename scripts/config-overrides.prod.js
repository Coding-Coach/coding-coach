/* eslint-disable */
const path = require('path');
module.exports = function(config) {
  // Use your own ESLint file
  let eslintLoader = config.module.rules[0];
  eslintLoader.use[0].options.useEslintrc = true;

  // Add the SASS loader second-to-last
  // (last one must remain as the "file-loader")
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2,
          modules: true,
          localIdentName: '[hash:base64:7]',
          minimize: true,
        },
      },
      'resolve-url-loader',
      'sass-loader',
    ],
  });

  // Adding the `src` folder to the resolvers, this will
  // allows to import js files using the `src` as root.
  config.resolve.modules.push('src');
}
