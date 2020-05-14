
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, '../../bundle'),
        filename: 'file-binders.min.js',
        libraryTarget: 'umd',
        library: 'fileBinders'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    }
};
