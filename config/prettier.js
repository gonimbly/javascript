'use strict';

module.exports = {
  extends: ['prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
