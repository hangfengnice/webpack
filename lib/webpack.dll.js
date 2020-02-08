const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'production',
  entry: {
    library: ["react", 'react-dom']
  },
  output: {
    filename: "[name]_dll.js",
    path: path.resolve(__dirname, "../build/library"),
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.join(__dirname, '../build'),
      name: "[name]_dll",
      path: path.resolve(__dirname, "../build/library/[name].json")
    })
  ]
};
