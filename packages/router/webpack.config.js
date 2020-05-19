const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    optimization: { minimize: true },
    output: {
        path: path.resolve(__dirname, '../../bundle'),
        filename: 'defi-router.min.js',
        libraryTarget: 'var',
        library: 'defiRouter'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    externals: {
        defi: 'defi'
    }
};
