const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
  },
  devServer:{
      open: true,
      port: 3000,
     
     hot: true
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin(),

      new htmlWebpackPlugin({
          template: path.resolve(__dirname,'./src/index.html'),
          name: 'index.html'
      })
  ],
  module:{
      rules:[
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          },
          {
            test:/\.less$/,
            use:['style-loader','css-loader']
        },
        {
            test:/\.scss$/,
            use:['style-loader','css-loader',"sass-loader"]
        },
        {
            test:/\.(jpg|png|gif|bmp|jpeg)$/,
            use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
        },
        {
            test:/\.(ttf|eot|svg|woff|woff2)$/,
            use:'url-loader'
        }
       
      ]
  }
};