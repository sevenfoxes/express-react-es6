var path = require("path");
var webpack = require('./node_modules/webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/assets/',
    filename: 'app.js',
    publicPath: 'http://localhost:8080/assets/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css')
  ],
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!' + 'sass?sourceMap')},
      { test: /.*\.(gif|png|jpe?g|svg)$/i, loader: "file-loader" }
    ]
  }
}
