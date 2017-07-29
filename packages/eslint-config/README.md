# GoNimbly ESLint Config for React apps

Implements ESLint configuration intended for React apps compiled **with** Babel. ES2017.

## Install

[]: # (generate-install-begin)
```bash
yarn add -D @gonimbly/eslint-config babel-eslint@^7.2.3 eslint@^3.19.0 eslint-plugin-flowtype@^2.33.0 eslint-plugin-import@^2.2.0 eslint-plugin-jsx-a11y@^5.0.3 eslint-plugin-prettier@^2.1.2 eslint-plugin-react@^7.0.1 prettier@^1.5.2 eslint-plugin-prefer-object-spread@^1.2.1
```
[]: # (generate-install-end)

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
