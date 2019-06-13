const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src",
  plugins: [
      new HtmlWebpackPlugin({
        title: 'hello',
        template: "./index.html"
      })
    ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif|jpeg)$/,
         use: [
           'file-loader'
         ]
       }
     ]
  }
}