module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist',
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
}
