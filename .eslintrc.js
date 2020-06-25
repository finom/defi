module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
  env: {
    jasmine: true,
  },
  globals: {
    window: true,
  },
};
