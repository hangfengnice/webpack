# webpack

- [官网中文文档](https://webpack.docschina.org/guides/installation/)

- `mkdir webpack-demo && cd webpack-demo` 新建并进入文件夹
- `npm init -y` 初始化
- `npm install --save-dev webpack webpack-cli` 建议本地安装
- 生成打包文件 npx webpack
  - 将`./src/index.js` 打包到 `./dist/main.js`
- 配置package.json文件
  - scripts
  
  ```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack --mode development",
    "build-watch": "webpack --watch --mode development",
  }
  ```

  - 使用
    - npm build 打包文件
    - npm build-watch 不用每次手动打包
    - npm start 在开发模式下打包 在流浪器中打开文件
- 第三方包
- `webpack-dev-server`
  - npm start 在开发模式下打包 在流浪器中打开文件

- `html-webpack-plugin`
  - 默认在dist文件夹下生成html,并自动引用打包好的js文件
  - 可以为在webpack.config.js中配置html模版

- loader
- 注意点
  - css-loader 依赖 style-loader
  - less-loader 依赖 less
  - vue-loader 依赖 vue-template-compiler

- webpack.config.js的配置

```javascript
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
            cacheDirectory: true,   // 缓存 目录在node_modules下
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
}
  ```
