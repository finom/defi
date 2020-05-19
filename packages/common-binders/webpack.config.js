const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, '../../bundle'),
        filename: 'common-binders.min.js',
        libraryTarget: 'var',
        library: 'commonBinders'
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
