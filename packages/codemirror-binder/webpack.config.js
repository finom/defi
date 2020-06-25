const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src',
  externals: {
    codemirror: {
      root: 'CodeMirror',
      commonjs2: 'codemirror',
      commonjs: 'codemirror',
      amd: 'codemirror',
    },
  },
  output: {
    path: path.resolve(__dirname, '../../bundle'),
    filename: 'codemirror-binder.min.js',
    libraryTarget: 'var',
    library: 'codeMirrorBinder',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new UglifyJsPlugin(),
  ],
};
