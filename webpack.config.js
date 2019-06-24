const path = require('path')

let HtmlWebpakPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: {
    open: true,
    contentBase: "./"
  },
  mode: 'development',
  entry: './src',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpakPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}