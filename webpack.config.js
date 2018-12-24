const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV || 'production',
  entry: { 'main.js': './src/main.js' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: '0.0.0.0',
    port: 7777
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
