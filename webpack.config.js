
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/createnotifications.js',
  output: {
    filename: 'notifications.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'NotificationLibrary',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
