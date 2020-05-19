module.exports = {
    presets: [
        [
            '@babel/preset-env',
            { modules: false }
        ]
    ],
    plugins: [
        'babel-plugin-transform-es2015-modules-simple-commonjs', '@babel/plugin-transform-runtime'
    ]
};
