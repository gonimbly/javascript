'use strict';

module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-console': 'off',
    'no-else-return': 'warn',
    'no-var': 'warn',
    'no-useless-return': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    strict: ['error', 'global'],
    yoda: 'error',
  },
};
