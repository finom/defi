# [defi.js](http://defi.js.org) [![npm version](https://badge.fury.io/js/defi.svg)](https://badge.fury.io/js/defi) [![Build Status](https://travis-ci.org/defijs/defi.svg)](https://travis-ci.org/defi/defi) [![Coverage Status](https://coveralls.io/repos/github/defijs/defi/badge.svg?branch=master)](https://coveralls.io/github/defijs/defi?branch=master)

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" height="86.63999938964844" width="277.8399963378906"><defs id="SvgjsDefs1012"></defs><g id="SvgjsG1013" rel="mainfill" name="main_text" xmlns:name="main_text" transform="translate(66.91000008583069,-154.6999969482422)" fill="#000000"><path d="M66.94 235.46L65.60 229.58L58.59 229.58L58.28 210.81L58.28 167.28C58.28 162.23 56.73 161.20 52.09 161.20C47.03 161.20 38.89 162.02 32.08 163.26L32.08 171.10L41.05 171.10L41.05 183.37C39.09 183.27 36.82 183.27 33.73 183.27C16.50 183.27 3.09 195.03 3.09 213.90C3.09 236.49 14.54 240.72 25.99 240.72C33.01 240.72 37.54 235.87 40.74 232.37C40.74 236.29 42.80 240.83 48.17 240.83C57.14 240.83 61.37 238.45 66.94 235.46ZM41.05 210.71L40.64 226.28C37.96 227.00 35.38 227.52 32.28 227.52C24.86 227.52 21.14 221.54 21.14 211.64C21.14 199.67 24.55 191.83 33.42 191.83C36.62 191.83 39.09 192.24 41.05 192.66ZM126.97 214.11L126.97 209.06C126.97 194.51 120.27 182.14 101.60 182.14C83.34 182.14 72.10 198.43 72.10 213.18C72.10 235.87 84.17 241.34 103.45 241.34C110.05 241.34 118.72 238.87 125.94 234.95L123.05 225.87C115.42 227.52 109.74 227.73 106.03 227.73C97.06 227.73 90.56 224.43 90.04 214.11ZM109.02 206.58L89.53 206.58C89.53 199.26 92.93 191.21 99.74 191.21C106.75 191.21 109.02 197.92 109.02 206.58ZM183.60 169.04C183.60 162.64 175.96 160.79 164.93 160.79C153.48 160.79 139.97 170.58 139.97 182.14L139.97 183.68L131.71 185.54L131.71 191.94L139.97 191.94L139.97 210.71L139.76 226.18C139.66 228.65 139.35 231.65 136.87 232.37C136.87 232.37 133.06 233.30 131.92 233.71C131.92 235.67 131.82 237.63 132.33 240L171.73 240C172.35 237.63 172.66 235.26 172.66 233.50L162.35 231.54C159.67 231.03 157.71 229.69 157.71 226.59L157.29 210.71L157.29 191.94L169.57 191.94L169.57 183.68L157.29 183.68L157.29 178.73C157.29 173.27 161.52 169.76 166.58 169.76C168.85 169.76 172.56 174.40 175.86 179.15C179.16 177.60 183.60 174.92 183.60 169.04ZM176.58 240L210.31 240C210.83 237.94 210.93 236.18 210.93 233.50L204.12 231.54C203.09 231.23 202.57 230.10 202.47 226.90L202.37 211.74L202.37 187.29C202.37 183.17 200.30 182.34 196.90 182.34C191.85 182.34 182.98 183.06 176.17 184.51L176.17 192.24L185.04 192.24L185.04 211.74L184.73 227.73C184.73 230.20 184.21 231.23 182.25 231.75L176.17 233.50C176.17 236.39 176.27 238.66 176.58 240ZM193.19 174.71C195.46 174.71 203.30 166.25 203.30 164.71C203.30 162.64 195.04 154.70 193.19 154.70C191.12 154.70 183.29 162.33 183.29 164.71C183.29 166.67 191.02 174.71 193.19 174.71Z" fill="#000000" style="fill: rgb(0, 0, 0);"></path></g><g id="SvgjsG1014" rel="mainfill" name="symbol" xmlns:name="symbol_mainfill" transform="translate(-27.500000000000007,-14.980000305175786) scale(1.1)" fill="#61B594"><g fill="#61B594"><g fill="#61B594"><polygon fill="" points="34.82574,91 44,56 25,56 47,15 67,15 53,41 75,41   "></polygon></g></g></g></svg>


A bunch of utilities that enable accessor-based reactivity for JavaScript objects.

It can be installed via NPM:
```
npm i defi
```
```js
const { bindNode, calc } = require('defi');

bindNode(obj, 'key', node)
```

Or [downloaded to use as a global variable](https://github.com/defijs/defi/tree/gh-pages)

```js
// use defi as a global variable
defi.bindNode(obj, 'key', node)
```


## How would I use it?

As a simple task let's say you want to define a simple form with first name and last name input, where while you type a greeting appears.

```html
<input class="first">
<input class="last">
<output class="greeting"></output>
```

```js
// default data
const obj = {
  first: 'John',
  last: 'Doe'
};

// let's listen for first and last name changes
defi.on(obj, 'change:first', () => console.log('First name is changed'));
defi.on(obj, 'change:last', () => console.log('Last name is changed'));

// we would like to re-calculate 'greeting' property every time
// when the first or last are changed
defi.calc(obj, 'greeting', ['first', 'last'], (first, last) => `Hello, ${first} ${last}`);

// and we want to set up a two-way data binding between the props
// and corresponding DOM nodes
defi.bindNode(obj, {
  first: '.first',
  last: '.last',
  greeting: '.greeting'
});
```

If `first` or `last` is changed then event handlers print info about that to console, `greeting` property is updated, `.greeting` element is populated by calculated data (by default "Hello, John Doe"). And it happens every time when these properties are changed and it doesn't matter which way. You can do `obj.first = 'Jane'` or you can type text into its field, and everything will happen immediately.

That's the real accessor-based reactiveness! Check the example above [here](https://jsbin.com/xuzohanuno/1/edit?html,js,console,output) and try to type `obj.first = 'Jane'` at the "Console" tab.

## Quick API ref

Full reference with all variations, flags and tutorials live at [defi.js.org](http://defi.js.org).


- [bindNode](https://defi.js.org/#!defi.bindNode) - Binds a property of an object to HTML node, implementing two-way data binding.

```js
// simple use
defi.bindNode(obj, 'myKey', '.my-element');

// advanced use
defi.bindNode(obj, 'myKey', '.my-slider', {
    // when is element state changed?
    // - after 'slide' event
    // (a function can be used to listen to any non-DOM events)
  	on: (callback, { node }) => $(node).on('slide', callback),
    // how to extract element state?
    // - return 'value' of the widget
    getValue: ({ node }) => $(node).slider('option', 'value'),
    // how to set element state?
    // - set 'value'
    setValue: (v, { node }) => $(node).slider('option', 'value', v),
    // how to initialize the widget?
    // you can initialize the slider in any way,
    // but 'initialize' function provides some syntactic sugar
    initialize: ({ node }) => $(node).slider({ min: 0, max: 100 }),
});
```

- [calc](https://defi.js.org/#!defi.calc) - Creates a dependency of one property value on values of others.

```js
obj.b = 1;
defi.calc(obj, 'a', 'b', b => b * 2);
console.log(obj.a); // 2
```

- [mediate](https://defi.js.org/#!defi.mediate) - Transforms property value on its changing.

```js
defi.mediate(obj, 'x', value => String(value));

obj.x = 1;

alert(typeof this.x); // "string"
```


- [on](https://defi.js.org/#!defi.on) - Adds an event handler.

```js
defi.on(obj, 'change:x', () => {
	alert(`obj.x now equals ${obj.x}`);
});

obj.x = 1;
```

- [off](https://defi.js.org/#!defi.off) - Deletes an event handler.

```js
defi.off(obj, 'change:x bind');
```

- [trigger](https://defi.js.org/#!defi.trigger) - Fires an event.

```js
defi.on(obj, 'foo bar', (a, b, c) => {
	alert(a + b + c);
});
defi.trigger(obj, 'foo', 1, 2, 3); // alerts 6
```

- [unbindNode](https://defi.js.org/#!defi.unbindNode) - Destroys DOM binding.

```js
defi.bindNode(obj, 'myKey', '.my-element');

defi.unbindNode(obj, 'myKey', '.my-element');
```

Note that a bunch of common binders can be found at [common-binders](https://github.com/defijs/common-binders) repository.

- [bound](https://defi.js.org/#!defi.bound) - Returns a bound element.

```js
defi.bindNode(obj, 'myKey', '.my-element');
const node = defi.bound(obj, 'myKey'); // will return document.querySelector('.my-element')
```

- [chain](https://defi.js.org/#!defi.chain) - Allows chained calls of defi.js functions.

```js
defi.chain(obj)
    .calc('a', 'b', b => b * 2)
    .set('b', 3)
    .bindNode('c', '.node');
```

- [defaultBinders](https://defi.js.org/#!defi.defaultBinders) - An array of functions which return a corresponding binder or a falsy value.

```js
defi.defaultBinders.unshift(element => {
	// check if the element has "foo" class name
	if(element.classList.contains('foo')) {
		// if checking is OK, return a new binder
		return {
			on: ...,
			getValue: ...,
			setValue: ...
		};
	}
});

// ...

defi.bindNode(obj, 'myKey', '.foo.bar');

```

- [lookForBinder](https://defi.js.org/#!defi.lookForBinder) - Returns a binder corresponding to an element.

```js
const element = document.createElement('input');
element.type = 'text';

console.log(defi.lookForBinder(element));
```

- [remove](https://defi.js.org/#!defi.remove) - Deletes a property and removes attached change handlers.

```js
defi.remove(obj, 'myKey');
```

- [set](https://defi.js.org/#!defi.set) - Sets a property value allowing to pass an event options object.

```js
defi.set(obj, 'myKey', 3);
```
