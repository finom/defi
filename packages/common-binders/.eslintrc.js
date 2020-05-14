module.exports = {
    root: true,
    extends: 'airbnb-base',
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-var': 'error',
        'comma-dangle': ['error', 'never'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-underscore-dangle': 0,
        'no-param-reassign': ['error', { props: false }]
    },
    env: {
        jasmine: true
    },
    globals: {
        window: true
    }
};
