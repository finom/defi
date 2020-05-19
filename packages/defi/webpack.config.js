const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const BannerAndFooterWebpackPlugin = require('./tools/banner-and-footer-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, '../../bundle'),
        filename: 'defi.min.js',
        libraryTarget: 'var',
        library: 'defi'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new UnminifiedWebpackPlugin(),
        new BannerAndFooterWebpackPlugin(),
        new UglifyJSPlugin({
            sourceMap: true,
            uglifyOptions: {
                // keep banner there
                comments: /------------------------------/
            }
        })
    ]
};
