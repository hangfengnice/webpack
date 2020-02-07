const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.common");
const webpack = require("webpack");

const devConfig = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    stats: "errors-only"
    // hot: true
  },
  devtool: "source-map"
};

module.exports = merge(baseConfig, devConfig);
