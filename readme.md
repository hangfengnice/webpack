# webpack

- [官网中文文档](https://webpack.docschina.org/guides/installation/)

- `mkdir webpack-demo && cd webpack-demo` 新建并进入文件夹
- `npm init -y` 初始化
- `npm install --save-dev webpack webpack-cli` 建议本地安装
- 配置package.json文件
  - script
  
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
- 生成dist文件 npx webpack
- less资源 下载less-loader的同时需要下载less
- 各个插件版本号 在webpack.config.js中

```javascript
 "dependencies": {
    "webpack-cli": "^3.3.4",
    "webpack": "^4.34.0"
  },
  "devDependencies": {
    "css-loader": "^3.0.0",
    "file-loader": "^4.0.0",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^0.23.1"
  }
  ```

- npm install --save-dev html-webpack-plugin
- npm install --save-dev webpack-dev-server
  - npm start 不会生成dist文件
- cacheDirectory: true, 缓存
