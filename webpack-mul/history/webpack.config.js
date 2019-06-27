const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    home: './src/index',
    other: './src/other.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "home.html",
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "other.html",
      chunks: ['other']
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}