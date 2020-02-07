const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

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
      // new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `../src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName, "commons"]
        // minify: {
        //   collapseWhitespace: true,
        //   removeComments: false,
        //   minifyCSS: true,
        //   minifyJS: true
        // }
      })
    );
  });
  return {
    entry,
    HtmlWebpackPlugins
  };
};

const { entry, HtmlWebpackPlugins } = setMPA();

module.exports = {
  entry,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {}
          }
          // {
          //   loader: "eslint-loader"
          // }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () =>
                require("autoprefixer")({
                  overrideBrowserslist: ["last 2 version", ">1%", "ios 7"]
                })
            }
          }
          // {
          //   loader: "px2rem-loader",
          //   options: {
          //     remUnit: 75,
          //     remPrecision: 8
          //   }
          // }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "img/[name]_[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "img/[name]_[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:8].css"
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ].concat(HtmlWebpackPlugins)
};
