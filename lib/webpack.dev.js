const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/views/react.html"),
      filename: "react.html",
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: false
      // }
    })
  ],
  devServer: {
    contentBase: './dist',
    index: 'react.html',
    // hot: true
  },
  devtool: 'source-map'
}


module.exports = merge(baseConfig, devConfig)