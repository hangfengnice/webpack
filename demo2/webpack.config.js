const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require('webpack');

module.exports = {
  entry: ["babel-polyfill", "./src"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hello",
      template: "./index.html"
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  externals: {
    vue: "Vue"
  },
  devServer: {
    contentBase: "./",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  }
};
