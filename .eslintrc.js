module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb-base'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-var': 'error',
        'comma-dangle': ['error', 'never'],
        'import/no-extraneous-dependencies': 0,
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
    },
    env: {
        jasmine: true
    },
    globals: {
        window: true
    }
};
