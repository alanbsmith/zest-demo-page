var webpack = require('webpack');
var path = require('path');
var bourbon = require("bourbon").includePaths;
var neat = require("bourbon-neat").includePaths;

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style!css!sass' },
       { test: /\.(png|jpg|jpeg|gif|woff|svg)$/, loader: 'url-loader?limit=8192' },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  sassLoader: {
    includePaths: bourbon.concat(neat)
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
