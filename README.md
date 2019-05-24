# webpack

## 浅聊webpack的一些配置  

— 本地安装  
   + `npm install --save-dev webpack webpack-cli` 据官网说webpack 4+ 版本，需要安装 CLI
   
— 加载css  
   + css-loader  
   ```javascript  
   npm install --save-dev style-loader css-loader  
   ```
   + webpack.config.js  
   ```javascript  
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }  
   ```

   
