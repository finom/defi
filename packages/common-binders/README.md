# common-binders [![npm version](https://badge.fury.io/js/common-binders.svg)](https://badge.fury.io/js/common-binders) [![Build Status](https://travis-ci.org/defijs/common-binders.svg?branch=master)](https://travis-ci.org/defijs/common-binders) [![Coverage Status](https://coveralls.io/repos/github/defijs/common-binders/badge.svg?branch=master)](https://coveralls.io/github/defijs/common-binders?branch=master)

The module includes common binder creators or HTML binding, attribute binding etc. which can be used with [defi.js](https://github.com/defijs/defi).

- `attr` used to bind attributes.
- `className` used to bind element class name.
- `dataset` used to bind dataset properties.
- `display` switches element visibility.
- `existence` switches element existence at DOM tree.
- `html` used to bind innerHTML.
- `prop` used to bind element properties.
- `style` used to bind element style properties.
- `text` used to bind textContent.

## Usage
In browser environment these functions live at ``window.commonBinders`` object.

```html
<script src="path/to/common-binders.min.js"></script>
```

```js
const { bindNode } = defi;
const {
	attr, className, dataset, display,
	existence, html, prop, style, text
} = commonBinders;
const obj = {};

bindNode(obj, 'key', node, html());

// if you don't want to create variables
bindNode(obj, 'key', node, commonBinders.prop('foo'));
```

The bundle can be downloaded at [gh-pages branch](https://github.com/defijs/common-binders/tree/gh-pages)

-------------

```
npm i common-binders
```

```js
// import all binders
const {
	attr, className, dataset, display,
	existence, html, prop, style, text
} = require('common-binders');

// import only needed binders
const attr = require('common-binders/attr');
const className = require('common-binders/classname');
const dataset = require('common-binders/dataset');

// ...
bindNode(obj, 'key', node, attr('foo'));
```

## ``attr(attribute, [mappingFn])``
Returns a binder which changes an attribute of DOM node depending on an object property value. The value can be transformed using ``mappingFn`` argument.

```js
bindNode(obj, 'image', 'img.my-image', attr('src'));
obj.image = 'http://example.com/cats.jpg';
```
```js
bindNode(obj, 'myKey', '.my-node', attr('foo', value => `Hello, ${value}`));
obj.myKey = 'World'; // the foo attr now has value "Hello, World"
```

## ``className(className, [bool=true])``

Returns a binder which switches over DOM node class name depending on an object property value. If property value equals ``true`` non-strictly, a class name is added, otherwise - it's removed. The logic can be changed by passing ``false`` as the second argument and in this way, a class name will be added  when a property value equals ``false`` non-strictly and vice versa.

```js
bindNode(obj, 'myKey', '.my-element', className('foo'));
obj.myKey = true; // adds the 'foo' class
obj.myKey = false; // removes the 'foo' class
```
```js
bindNode(obj, 'myKey', '.my-element', className('foo', false));
obj.myKey = false; // adds the 'foo' class
obj.myKey = true; // removes the 'foo' class
```

## ``dataset(property, [mappingFn])``

Returns a binder which changes given [dataset](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/dataset) property of bound DOM node depending on an object property value. The property value can be transformed using ``mappingFn`` argument.

```js
bindNode(obj, 'myKey', '.my-element', dataset('myProp'));
obj.myKey = 'foo';
```
```js
bindNode(obj, 'myKey', '.my-element', dataset('myProp', value => `Hello, ${value}`));
obj.myKey = 'foo'; // the attr data-my-prop now has value "Hello, foo"
```

## ``display([bool=true])``

Returns a binder which controls a visibility of DOM node (using ``style.display``) depending on an object property value. If the `bool` argument equals ``true``, a node is hidden when a property value is falsy; if it equals ``false``, it is hidden when a property value is truly.


```js
bindNode(obj, 'myKey', '.my-element', display(true));
```

```js
bindNode(obj, 'myKey', '.my-element', display(false));
```

## ``existence([bool=true])``

Returns a binder which controls an existence of DOM node at DOM tree depending on an object property value. The binder works the same way as `display`, but instead of visibility change the existence at page DOM is changed. The binder is useful for:

- Big appications: show one or another page depending on route state;
- For infinite scrolling;
- For other cases where you need to hide an element but its existence at DOM tree isn't necessary.

If the `bool` argument equals ``true``, a node is removed when a property value is falsy; if it equals ``false``, it is removed when a property value is truly.

```js
bindNode(obj, 'myKey', '.my-element', existence(true));
```
```js
bindNode(obj, 'myKey', '.my-element', existence(false));
```


## ``html([mappingFn])``

Returns a binder which changes ``innerHTML`` of a bound DOM node depending on an object property value. The property value can be transformed using ``mappingFn`` argument.

```js
bindNode(obj, 'myKey', '.my-element', html());

// sets innerHTML="<div>foo</div>"
obj.myKey = '<div>foo</div>';
```
```js
bindNode(obj, 'myKey', '.my-element', html(value => `Hello, ${value}`));

// sets innerHTML="Hello, <div>foo</div>"
obj.myKey = '<div>foo</div>';
```

## ``prop(property, [mappingFn])``

Returns a binder which changes given property of DOM node depending on an object property value. The property value can be transformed using ``mappingFn`` argument.

```js
bindNode(obj, 'disabled', '.my-button', prop('disabled'));
// sets disabled = true property for the node
obj.disabled = true;
// sets disabled = false property for the node
obj.disabled = false;
```
```js
bindNode(obj, 'myProp', '.my-node', prop('foo', value => `Hello, ${value}`));

// foo property of the element now has value "Hello, World"
obj.myProp = 'World';
```

## ``style(property, [mappingFn])``

Returns a binder which changes given style property of bound DOM node depending on an object property value. The property value can be transformed using ``mappingFn`` argument.

```js
bindNode(obj, 'myKey', '.my-progres', style('backgroundColor'));

obj.myKey = 'red'; // background-color of .my-progress is red now
```
```js
bindNode(obj, 'myKey', '.my-element', style('backgroundImage', value => `url("${value}")`));

obj.myKey = 'cats.jpg'; // backgroundImage now equals to "url("cats.jpg")"
```


## ``text([mappingFn])``

Returns a binder which changes ``textContent`` of bound DOM node depending on an object property value. The property value can be transformed using ``mappingFn`` argument.

```js
bindNode(obj, 'myKey', '.my-element', text());

obj.myKey = 'foo'; // sets textContent as "foo"
```
```js
bindNode(obj, 'myKey', '.my-element', text(value => `Hello, ${value}`));

obj.myKey = 'foo'; // sets textContent as "Hello, foo"
```
