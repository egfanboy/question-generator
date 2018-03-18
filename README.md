# interview-question-generator

![Node](https://img.shields.io/node/v/interview-question-generator.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/interview-question-generator.svg?style=flat-square)](https://www.npmjs.com/package/interview-question-generator)
[![Travis](https://img.shields.io/travis/ericturf/interview-question-generator/master.svg?style=flat-square)](https://travis-ci.org/ericturf/interview-question-generator)
[![David](https://img.shields.io/david/ericturf/interview-question-generator.svg?style=flat-square)](https://david-dm.org/ericturf/interview-question-generator)
[![Coverage Status](https://img.shields.io/coveralls/ericturf/interview-question-generator.svg?style=flat-square)](https://coveralls.io/github/ericturf/interview-question-generator)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)
[![NPM](https://img.shields.io/npm/dt/interview-question-generator.svg?style=flat-square)](https://www.npmjs.com/package/interview-question-generator)

> Package to generate interview style questions

### Usage

```js
import interviewQuestionGenerator from 'interview-question-generator';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add interview-question-generator (--dev)

or npm

	npm install interview-question-generator (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import interviewQuestionGenerator from 'interview-question-generator';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
interviewQuestionGenerator

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/ericturf/interview-question-generator) example.

### Builds

If you don't use a package manager, you can [access `interview-question-generator` via unpkg (CDN)](https://unpkg.com/interview-question-generator/), download the source, or point your package manager to the url.

`interview-question-generator` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `interview-question-generator` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/interview-question-generator/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/interview-question-generator) on your page. The UMD builds make `interview-question-generator` available as a `window.interviewQuestionGenerator` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-module-boilerplate](https://github.com/duivvv/generator-module-boilerplate).
