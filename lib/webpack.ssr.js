const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.common");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name]-server.js",
    libraryTarget: "umd"
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano")
    })
  ],
  devServer: {
    contentBase: "./dist"
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2
        }
      }
    }
  }
};
module.exports = merge(baseConfig, prodConfig);
