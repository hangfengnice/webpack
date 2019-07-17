const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index"),
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "build")
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors:{
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: "vendors.js"
        },
        default:{
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    
  },
  devServer: {
    contentBase: "./build",
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader",
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outputPath: "images/",
              limit: 2048
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "hangfeng",
      template: path.resolve(__dirname, "index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
