const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?modules', 'sass-loader'],
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
  );

  storybookBaseConfig.resolve.modules.push('src');

  return storybookBaseConfig;
};
