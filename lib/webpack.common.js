const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve("src"),
        use: [
          {
            loader: "babel-loader?cacheDirectory=true"
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192,
              name: "img/[name]_[hash:8].[ext]"
            }
          },
          // {
          //   // loader: 'image-webpack-loader',
          //   // options: {
          //   //   mozjpeg: {
          //   //     progressive: true,
          //   //     quality: 6
          //   //   },
          //   //   // optipng.enabled: false will disable optipng
          //   //   optipng: {
          //   //     enabled: false,
          //   //   },
          //   //   pngquant: {
          //   //     quality: [0.65, 0.90],
          //   //     speed: 4
          //   //   },
          //   //   gifsicle: {
          //   //     interlaced: false,
          //   //   },
          //   //   // the webp option will enable WEBP
          //   //   webp: {
          //   //     quality: 75
          //   //   }
          //   // }
          // },
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
  ]
};
