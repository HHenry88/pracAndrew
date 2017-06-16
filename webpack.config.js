const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(path.resolve(__dirname, 'public/index.jsx')),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets:['es2015', 'react']
        }
      }
    ]
  }
}
