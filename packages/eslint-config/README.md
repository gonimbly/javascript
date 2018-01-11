# GoNimbly ESLint Config for React apps

Implements ESLint configuration intended for React apps compiled **with** Babel. ES2017.

## Install

<!--generate-install-begin-->
```bash
yarn add -D @gonimbly/eslint-config babel-eslint@^7.2.3 eslint@^4.1.1 eslint-plugin-flowtype@^2.34.1 eslint-plugin-import@^2.6.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-prefer-object-spread@^1.2.1 eslint-plugin-prettier@^2.4.0 eslint-plugin-react@^7.1.0 prettier
```
<!--generate-install-end-->

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
