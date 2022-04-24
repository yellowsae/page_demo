const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ]
      },
      {
        test: /\.css|scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack+Ts',
      template: './src/index.html'
    })
  ]
}