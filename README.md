<p align="center">

<a href="https://defi.js.org">
  <img src="https://defi.js.org/logo/logo.svg" />
</a>

</p>

<p align="center">Data binding without framework: a bunch of utilities that enable accessor-based reactivity for JavaScript objects.</p>



<p align="center">
  <img src="https://defi.js.org/img/defi_demo.gif" width="570" />
</p>

<p align="center">
<a href="https://badge.fury.io/js/defi" rel="nofollow"><img alt="npm version" src="https://badge.fury.io/js/defi.svg" style="max-width:100%;"></a> <a href="https://travis-ci.org/finom/defi" rel="nofollow"><img src="https://travis-ci.org/finom/defi.svg" style="max-width:100%;"></a> <a href="https://coveralls.io/github/finom/defi?branch=master" rel="nofollow"><img alt="Coverage Status" src="https://coveralls.io/repos/github/finom/defi/badge.svg?branch=master" style="max-width:100%;"></a>


</p>


It can be installed via NPM:
```
npm i defi
```
```js
const { bindNode, calc } = require('defi');

bindNode(obj, 'key', node)
```

Or [downloaded to use as a global variable](https://github.com/finom/defi/tree/gh-pages)

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

That's the real accessor-based reactiveness! Check the example above [here](https://jsbin.com/hakunotaqo/edit?html,js,console,output) and try to type `obj.first = 'Jane'` at the "Console" tab.

Note that if you want to use a custom HTML element (at the example above we use ``<output>`` tag) to update its innerHTML you will need to pass so-called "binder" as a rule of how the bound element should behave. By default ``defi.bindNode`` doesn't know how to interact with non-form elements.


```js
const htmlBinder = {
  setValue: (value, binding) => binding.node.innerHTML = value,
};
// this will update innerHTML for any element when obj.greeting is changed
defi.bindNode(obj, 'greeting', '.greeting', htmlBinder)
```

Also you can use ``html`` from [common-binders](https://github.com/finom/defi/tree/master/packages/common-binders) (a collection of binders of general purpose).

```js
const { html } = require('common-binders');
defi.bindNode(obj, 'greeting', '.greeting', html())
```

Note that there is also a routing library for defi.js - [defi-router](https://github.com/finom/defi/tree/master/packages/router).

## Quick API ref

Full reference with all variations, flags and tutorials live at [defi.js.org](http://defi.js.org).


- [bindNode](https://defi.js.org/#!defi.bindNode) - Binds a property of an object to HTML node, implementing two-way data binding.

```js
// basic use (for standard HTML5 elements)
defi.bindNode(obj, 'myKey', '.my-element');

// custom use (for any custom element)
defi.bindNode(obj, 'myKey', '.my-element', {
    // when is element state changed?
    // (that's a DOM event; a function can be used to listen to any non-DOM events)
    on: 'click',
    // how to extract element state?
    getValue: ({ node }) => someLibraryGetValue(node),
    // how to set element state?
    setValue: (v, { node }) => someLibrarySetValue(node, v),
    // how to initialize the widget?
    // it can be initialized in any way,
    // but 'initialize' function provides some syntactic sugar
    initialize: ({ node }) => someLibraryInit(node),
});

obj.myKey = 'some value'; // updates the element
```

- [calc](https://defi.js.org/#!defi.calc) - Creates a dependency of one property value on values of other properties (including other objects).

```js
defi.calc(obj, 'a', ['b', 'c'], (b, c) => b + c);
obj.b = 1;
obj.c = 2;
console.log(obj.a); // 3
```

- [mediate](https://defi.js.org/#!defi.mediate) - Transforms property value on its changing.

```js
defi.mediate(obj, 'x', value => String(value));

obj.x = 1;

console.log(obj.x); // "1"
console.log(typeof obj.x); // "string"
```


- [on](https://defi.js.org/#!defi.on) - Adds an event handler. Detailed information about all possible events you can get at the ["Events" section](https://defi.js.org/#!events) of the website.

```js
defi.on(obj, 'change:x', () => {
	alert(`obj.x now equals ${obj.x}`);
});

obj.x = 1;
```

- [off](https://defi.js.org/#!defi.off) - Deletes an event handler.

```js
defi.off(obj, ['change:x', 'bind']);
```

- [trigger](https://defi.js.org/#!defi.trigger) - Fires an event.

```js
defi.on(obj, ['foo', 'bar'], (a, b, c) => {
	alert(a + b + c);
});
defi.trigger(obj, 'foo', 1, 2, 3); // alerts 6
```

- [unbindNode](https://defi.js.org/#!defi.unbindNode) - Disables a binding.

```js
defi.bindNode(obj, 'myKey', '.my-element');

defi.unbindNode(obj, 'myKey', '.my-element');
```

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

- [defaultBinders](https://defi.js.org/#!defi.defaultBinders) - An array of functions which return a corresponding binder or a falsy value. This makes ``bindNode`` to detect how to bind a node if the binder argument isn't given.

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
defi.set(obj, 'myKey', 3, { silent: true });
```
