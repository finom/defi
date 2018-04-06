const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const BannerAndFooterWebpackPlugin = require('./tools/banner-and-footer-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: `${__dirname}/bundle`,
        filename: 'matreshka.min.js',
        libraryTarget: 'umd',
        library: 'Matreshka'
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
            compress: {
                warnings: false
            },
            // keep banner there
            comments: /------------------------------/
        })
    ]
};
