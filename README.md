# Go Nimbly Javascript Styleguide

## ESLint Configs

> ESLint [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html) for Go Nimbly

* [@gonimbly/eslint-config](packages/eslint-config): React apps and Babel
* [@gonimbly/eslint-config-base-babel](packages/eslint-config-base-babel): Node.js apps **with** Babel
* [@gonimbly/eslint-config-base](packages/eslint-config-base): Node.js apps **without** Babel

Exported configs both support ES2017 and formatting with [Prettier](https://github.com/prettier/prettier).

Extend these configs in your ESLint configurations to use. If you have a monorepo, only exend the `@gonimbly/eslint-config-base` in your root and then extend `@gonimbly` (ie: `@gonimbly/eslint-config`) inside inidividual packages that use React and Babel.

Note that the ESLint configurations' "extends" field [allows you to ommit](http://eslint.org/docs/developer-guide/shareable-configs.html#using-a-shareable-config) the `eslint-config-` prefix (_unless_ it is both a scoped package, like `@gonimbly`, _and_ there is text after the `@scoped/estlint-config-` part).

## Heroku and private packages

To deploy to Heroku, you'll need to add the following `engines` parameter to your `package.json`

```json
{
  "engines": {
    "node": ">=7.10.1",
    "yarn": "0.27.5 || >=1.0.2"
  }
}
```

## Run eslint/prettier pre-commit

Set up your project to automatically run `eslint --fix` on changed `*.js` files and/or prettier on `*.{json|css|scss}`
files before commits are made. Changes made by eslint will be re-staged, and if there are no errors, will allow the
commit. If any eslint errors are found, the commit will be aborted so that they can be fixed manually.

1. `yarn add -D lint-staged husky prettier`
2. Update your project's root `package.json`, like this:
```json
{
  "scripts": {
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "git add"],
    "*.{json,css,scss}": ["prettier --write", "git add"]
  },
}
```

3. Now change a few files, `git add` some of them and try to `git commit`.

  via [okonet/lint-staged](https://github.com/okonet/lint-staged/blob/48fbe20c89678de9ef0ef99f7e270d0ced099a4f/README.md#installation-and-setup)

## Development

1. Clone this repo, `cd` to it, then run `yarn`
2. Create branch off `master`
3. ...commit stuff...
4. Push branch and open PR

## Publishing a release to NPM

1. Merge approved PR(s) to `master` using "squash" option
2. Checkout `master`
3. Run `npm login` (only need to do this once per machine)
4. Check your `~/.npmrc` and make sure it isn't overriding the default registry. Comment the line out if it does.
5. Run `lerna publish` and increment version according to [semver](http://semver.org/)
