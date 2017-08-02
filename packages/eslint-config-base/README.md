# GoNimbly Base ESLint Config

Implements a base ESLint configuration intended for apps **not** compiled with Babel running on Node 7+ (ES2017).

## Install

[]: # (generate-install-begin)
```bash
yarn add -D @gonimbly/eslint-config-base eslint@^3.19.0 eslint-plugin-import@^2.2.0 eslint-plugin-prettier@^2.1.2 prettier eslint-plugin-prefer-object-spread@^1.2.1
```
[]: # (generate-install-end)

## Usage

Once `@gonimbly/eslint-config-base` is installed, you can use it by specifying `@gonimbly/eslint-config-base` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@gonimbly/eslint-config-base",
  "rules": {
    // Additional, per-project rules...
  }
}
```
