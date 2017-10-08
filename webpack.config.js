var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './app.js',
    vendor: [
      'jquery',
      'bootstrap',
      'react'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      {
      	test: /\.jsx?$/,
      	loader: 'babel-loader',
      	exclude: /node_modules/,
      	query: {
          presets: [ 'react', 'es2015', 'stage-2' ]
      	}
      },
      {
        test: /\.scss$/,
      	loader: ['scss', 'css', 'sass']
      }
    ]
  },

  devtool: 'source-map',
  stats: {
    colors: true
  }
}
