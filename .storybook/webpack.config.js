const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?modules', 'resolve-url-loader', 'sass-loader'],
      include: path.resolve(__dirname, '..', 'src'),
    },
    {
      test: /\.(png|jpg|gif)$/,
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

  return storybookBaseConfig;
};
