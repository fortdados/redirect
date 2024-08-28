const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require("path");
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins:[
    new webpack.DefinePlugin({
      'redirect_obj': JSON.stringify(dotenv.parsed.REDIRECT_OBJ || '{}')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}