# boolean-object

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Convert object values to booleans.

## Installation

~~~ text
npm install boolean-object
~~~

## Usage

~~~ javascript
var booleanObject = require('boolean-object')

var obj = {
  foo: 'true',
  bar: 'false',
  baz: 1,
  qux: 0,
  str: 'string'
}

booleanObject(obj) // => { foo: true, bar: false, baz: true, qux: false, str: 'string' }
~~~

[npm-img]: https://img.shields.io/npm/v/boolean-object.svg?style=flat-square
[npm-url]: https://npmjs.org/package/boolean-object
[license-img]: http://img.shields.io/npm/l/boolean-object.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/boolean-object.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/boolean-object
