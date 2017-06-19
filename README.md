# eslint-config-gonimbly

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for GoNimbly

* `eslint:recommended`
* [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) and
* [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)

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
yarn add @gonimbly/eslint-config

# install correct versions of peer dependencies
yarn add -D eslint@^3.19.0 eslint-config-prettier@^2.2.0 eslint-plugin-import@^2.3.0 eslint-plugin-prettier@^2.1.2 prettier@^1.4.4
```

## Usage

Once `@gonimbly/eslint-config` is installed, you can use it by specifying `@gonimbly` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@gonimbly",
  "rules": {
    // Additional, per-project rules...
  }
}
```
