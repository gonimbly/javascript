'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  plugins: ['import', 'prefer-object-spread', 'prettier'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'script',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'import/no-unresolved': ['error', { commonjs: true }],
    'lines-around-directive': 'error',
    'no-console': 'off',
    'no-else-return': 'warn',
    'no-var': 'warn',
    'no-useless-return': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-template': 'warn',
    'prefer-object-spread/prefer-object-spread': ['warn', 'always'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    strict: ['error', 'global'],
    yoda: 'warn',
  },
};
