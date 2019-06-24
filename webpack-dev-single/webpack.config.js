const path = require("path");
let webpack = require("webpack");

let HtmlWebpakPlugin = require("html-webpack-plugin");
module.exports = {
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist")
  },
  mode: "development",
  entry: "./src",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpakPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
    // new webpack.ProvidePlugin({ // 在每个模块中都注入$
    //   '$': 'jquery'
    // })
  ],
  externals: {
    jquery: "jQuery"
  },
  module: {
    rules: [
      // {
      //   test: require.resolve("jquery"),
      //   use: "expose-loader?$"
      // },
      {
        test: /\.(png|jpg|gif)/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },

      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      }
    ]
  }
};
