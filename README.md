# An AngularJS module adapting Ramda [Demo](https://rawgit.com/ramda/ramdangular/master/examples/index.html)

This module exposes Ramda's API into angular app's root scope,
and provides some filters from Ramda.

[![Build Status](https://api.travis-ci.org/ramda/ramdangular.svg?branch=master)](https://travis-ci.org/ramda/ramdangular)

## How to use

### Install

After loading angular.js and ramda.js:

```html
<script type="text/javascript" src="ramdangular.js"></script>
```

### Load ramdangular

```javascript
angular.module('yourAwesomeApp', ['ramdangular']);
```

### Usecase

```html
<script type="text/javascript">
  angular.module('example', ['ramdangular']);
</script>

<body ng-app="example">
  <div ng-repeat="num in range(11, 20) | shuffle">{{num}}</div>
</body>
```

### Examples

[Demo](https://rawgit.com/ramda/ramdangular/master/examples/index.html)

### Local build

```
$ npm install uglify-js -g
$ uglifyjs ramdangular.js > ramdangular.min.js
```

## License

(The MIT License)

Copyright (c) 2014 <floydsoft@gmail.com>
Copyright (c) 2014 <mh@buzzdecafe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
