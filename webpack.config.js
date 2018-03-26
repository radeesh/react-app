/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('src'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets:['es2015', 'stage-0', 'react'] } },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devtool: 'inline-source-map'
}
