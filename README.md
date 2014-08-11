# An AngularJS module adapting Ramda

This module exposes Ramda's API into angular app's root scope,
and provides some filters from Ramda.


## Filters

Whole Ramda's API for Functions, Arrays and Objects.


For API details please check out http://ramdajs.com/

## How to use

### Install

After loading angular.js and ramda.js:

```html
<script type="text/javascript" src="ramdangular.js"></script>
```

### Load ramdangular

#### Load whole stuff

```javascript
angular.module('yourAwesomeApp', ['ramdangular']);
```

#### Load API only

```javascript
angular.module('yourAwesomeApp', ['ramdangular/utils']);
```

#### Load filters only

```javascript
angular.module('yourAwesomeApp', ['ramdangular/filters']);
```

#### Load specific feature only

```javascript
// load `shuffle` only
angular.module('yourAwesomeApp', ['ramdangular/filters/shuffle']);
```

### Usecase

```html
<script type="text/javascript">
  angular.module('example', ['ramdangular']);
</script>

<body ng-app="example">
  <!-- generate 10 unduplicated random number from 0 to 9 -->
  <div ng-repeat="num in range(10)|shuffle">{{num}}</div>
</body>
```

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
