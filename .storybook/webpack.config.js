const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.(scss|css)$/,
      loaders: ['style-loader', 'css-loader?modules', 'resolve-url-loader', 'sass-loader'],
      include: path.resolve(__dirname, '..', 'src'),
    },
    {
      
      // test: /\.(png|jpg|gif)$/,
      /** the above line caused svgs to not load when we are running storyboard.
       *  So added svg along with some font formats just in case. */
      test: /\.(woff|woff2|eot|ttf|svg|gif|png|jpg)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.(woff2?)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
          name: '[path][name].[ext]'
      }
  }
  );

  storybookBaseConfig.resolve.modules.push('src');
  storybookBaseConfig.resolve.modules.push('src/theme');

  return storybookBaseConfig;
};
