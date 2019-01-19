<p align="center">

[![logo](logo.svg)](http://defi.js.org)


[![npm version](https://badge.fury.io/js/defi.svg)](https://badge.fury.io/js/defi) [![Build Status](https://travis-ci.org/defijs/defi.svg)](https://travis-ci.org/defi/defi) [![Coverage Status](https://coveralls.io/repos/github/defijs/defi/badge.svg?branch=master)](https://coveralls.io/github/defijs/defi?branch=master)


</p>


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
