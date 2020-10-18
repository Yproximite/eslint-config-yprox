# eslint-config-yprox

![Node CI](https://github.com/Yproximite/eslint-config-yprox/workflows/Node%20CI/badge.svg)

> ESLint configuration for our Yprox CMS apps

## Features

- Include [AirBnb standard](https://github.com/airbnb/javascript)
- Include [Prettier](https://github.com/prettier/prettier) (optional)
- Include [Vue ESLint plugin](https://github.com/vuejs/eslint-plugin-vue) 
- Include [@yproximite/eslint-config-base](https://github.com/Yproximite/eslint-config-base)
- Configure indendation to **2 spaces**
- Configure max length line to **180 chars**
- Configure semicolon (always use `;`, it's [more safe](https://flaviocopes.com/javascript-automatic-semicolon-insertion/))
- Disable rule `no-param-reassign` for `props`
- Disable rule `func-names`
- Disable rule `import/prefer-default-export`

## Installation

This package is hosted on [GitHub Packages](https://github.com/features/packages), so you must tell to npm/yarn where to download it.
Please read [Authenticating to GitHub Packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

You can run `npm login --registry=https://npm.pkg.github.com --scope=@yproximite` **or** create a `.npmrc` file with the following content:
```
@yproximite:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<access token>
```

Then run: 
```bash
$ yarn add --dev @yproximite/eslint-config-yprox eslint@^7.0.0 babel-eslint@^10.0.0
```

## Usage

Edit your ESLint configuration file with:

```json
{
  "extends": ["@yproximite/yprox"]
}
```

or with Prettier support:

```json
{
  "extends": ["@yproximite/yprox/prettier"]
}
```

**Note:** you should install Prettier yourself with `yarn add --dev prettier@^2.0.0

---

## How to contribute

You need to install some dependencies first:
```bash
$ yarn
```

### Contribution

- Make a pull request, its title should follows [Angular commit message convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-format)
- You should **Squash and Merge** your pull request

### Publishing a new release

This is automatically done by GitHub Actions and [semantic-release](https://github.com/semantic-release/semantic-release) when you merge a pull request.
