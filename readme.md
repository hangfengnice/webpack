# webpack

- loader

  - url-loader

```javascript
{
loader: "url-loader",
options: {
  name: '[name]_[hash].[ext]',
  outputPath: "images/",
  limit: 2048   // 限制大小  决定是否 base 64
}
}
```

@babel/preset-env

```javascript
@babel/preset-env

es6 --> es5 语法转化 一部分


 // plugins: [
          //   [
          //     "@babel/plugin-transform-runtime",
          //     {
          //       corejs: 2,
          //       helpers: true,
          //       regenerator: true,
          //       useESModules: false
          //     }
          //   ]
          // ]
```
