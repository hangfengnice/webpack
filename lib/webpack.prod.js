const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.common");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // 打包体积分析
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const smp = new SpeedMeasureWebpackPlugin();

const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];

  const entryFiles = glob.sync(path.resolve(__dirname, "../src/*/index.js"));
  // const entryFiles = glob.sync(path.resolve(__dirname, "../src/*/index-server.js"));  // ssr 服务端打包
  Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    // const match = entryFile.match(/src\/(.*)\/index-server\.js/); // ssr 服务端打包
    const pageName = match && match[1];
    entry[pageName] = entryFile;
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `../src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName, "commons"],
        minify: {
          collapseWhitespace: true,
          removeComments: false,
          minifyCSS: true,
          minifyJS: true
        }
      })
    );
  });
  return {
    entry,
    HtmlWebpackPlugins
  };
};

const { entry, HtmlWebpackPlugins } = setMPA();

// const prodConfig = smp.wrap({ 打包体积分析
const prodConfig = {
  mode: "production",
  entry,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name]_[chunkhash:8].js"
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano")
    }),
    new HardSourceWebpackPlugin(),
    // new BundleAnalyzerPlugin(), // 打包体积分析
    // new webpack.DllReferencePlugin({
    //   context: path.join(__dirname, '../build'),
    //   manifest: require("../build/library/library.json")
    // })
  ].concat(HtmlWebpackPlugins),
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
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true
      })
    ]
  },
  // stats: "errors-only",
  resolve: {
    alias: {
      'react': path.resolve(__dirname, '../node_modules/react/umd/react.production.min.js'),
      'react-domg': path.resolve(__dirname, '../node_modules/react-dom/umd/react-dom.production.min.js')
    },
    extensions: ['.js'],
    mainFields: ['main']
  }
};
module.exports = merge(baseConfig, prodConfig);
