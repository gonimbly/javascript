# eslint-config-gonimbly

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for GoNimbly

Extends `eslint:recommended` and implements [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier).

Prettier [options](https://github.com/prettier/prettier#options)

Option             | Value
------------------ | -------
printWidth         | 80 *
tabWidth           | 2 *
useTabs            | false *
semi               | true *
singleQuote        | true
trailingComma      | "es5"
bracketSpacing     | true *
jsxBracketSameLine | false *
parser             | "babylon" *

\* Prettier defaults

## Installation

```sh
npm install -S eslint-config-gonimbly
# install correct versions of peer dependencies
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-gonimbly
```

## Usage

Once the `eslint-config-gonimbly` package is installed, you can use it by specifying `gonimbly` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "gonimbly",
  "rules": {
    // Additional, per-project rules...
  }
}
```
