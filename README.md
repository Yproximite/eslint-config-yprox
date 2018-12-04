# eslint-config-yprox

[![npm (scoped)](https://img.shields.io/npm/v/@yproximite/eslint-config-yprox.svg)](https://www.npmjs.com/package/@yproximite/eslint-config-yprox)
[![Build Status](https://travis-ci.com/Yproximite/eslint-config-yprox.svg?token=pNBs2oaRpfxdyhqWf28h&branch=master)](https://travis-ci.com/Yproximite/eslint-config-yprox)

> ESLint configuration for our Yprox CMS apps

## Features

- Include [AirBnb standard](https://github.com/airbnb/javascript)
- Include [Prettier](https://github.com/prettier/prettier)
- Include [Vue ESLint plugin](https://github.com/vuejs/eslint-plugin-vue) 
- Include [@yproximite/eslint-config-base](https://github.com/Yproximite/eslint-config-base)
- Configure indendation to **2 spaces**
- Configure max length line to **180 chars**
- Configure semicolon (always use `;`, it's [more safe](https://flaviocopes.com/javascript-automatic-semicolon-insertion/))
- Disable rule `no-param-reassign` for `props`
- Disable rule `func-names`
- Disable rule `import/prefer-default-export`
- Configure rules `vue/max-attributes-per-line` and `vue/html-closing-bracket-newline`

## Installation

```bash
$ yarn add --dev @yproximite/eslint-config-yprox
```

Dont forget to install ESLint too:

```bash
$ yarn add --dev eslint
```

## Usage

Edit your ESLint configuration file with:

```json
{
  "extends": ["@yproximite/yprox"]
}
```

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

This is automatically done by Travis and [semantic-release](https://github.com/semantic-release/semantic-release) when you merge a pull request.
