const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[chunkhash:8].js'
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
module.exports = merge(baseConfig, prodConfig)