const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.common");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.resolve(__dirname, "../src/*/index.js"));
  Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = entryFile;
    HtmlWebpackPlugins.push(
      // new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `../src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName, "commons"]
      })
    );
  });
  return {
    entry,
    HtmlWebpackPlugins
  };
};

const { entry, HtmlWebpackPlugins } = setMPA();

const devConfig = {
  mode: "development",
  entry,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ].concat(HtmlWebpackPlugins),
  devServer: {
    contentBase: "./dist",
    stats: "errors-only"
    // hot: true
  },
  devtool: "source-map"
};

module.exports = merge(baseConfig, devConfig);
