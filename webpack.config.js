const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/public/javascripts');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        include: APP_DIR,
        loader: 'babel-loader',
        test: /\.jsx?/
      }
    ]
  }
};

module.exports = config;
