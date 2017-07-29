# GoNimbly ESLint Config for Babel-compiled apps

Implements a base ESLint configuration intended for apps compiled with Babel running on Node 7+ (ES2017).

## Install

[]: # (generate-install-begin)
```bash
yarn add -D @gonimbly/eslint-config-base-babel babel-eslint@^7.2.3 eslint@^3.19.0 eslint-plugin-import@^2.2.0 eslint-plugin-prefer-object-spread@^1.2.1 eslint-plugin-prettier@^2.1.2 prettier@^1.5.2
```
[]: # (generate-install-end)

## Usage

Once `@gonimbly/eslint-config-base-babel` is installed, you can use it by specifying `@gonimbly/eslint-config-base-babel` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@gonimbly/eslint-config-base-babel",
  "rules": {
    // Additional, per-project rules...
  }
}
```
