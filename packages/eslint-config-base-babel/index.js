'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: '@gonimbly/eslint-config-base',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      generators: true,
    },
  },
  rules: {
    'lines-around-directive': 'off',
    'prefer-object-spread/prefer-object-spread': ['warn', 'always'],
    strict: 'off',
  },
};
