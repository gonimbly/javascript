'use strict';

module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
  rules: {
    'import/no-unresolved': ['error', { commonjs: true }],
  },
};
