A router for defi.js [![npm version](https://badge.fury.io/js/defi-router.svg)](https://badge.fury.io/js/defi-router)
============

[Demo](https://finom.github.io/defi/router-demo.html#!/foo/bar/baz/)

Installing:
```
npm i defi-router
```

A bundle (downloadable version) lives at [gh-pages branch](https://github.com/finom/defi/tree/gh-pages)

# tl;dr

The library turns on two-way data binding between properties and parts of URL.

```js
// location.hash is used there
defiRouter(object, '/a/b/c/');
object.a = 'foo';
object.b = 'bar';
object.c = 'baz';

// makes location.hash to be #!/foo/bar/baz/
```

If you need to use History API instead of hash, pass ``"history"`` as the second argument.

```js
defiRouter(object, '/a/b/c/', 'history');
```

CJS module import:

```js
const defiRouter = require('defi-router');
defiRouter(object, '/a/b/c/', 'history');
```

--------


How does a "traditional" routing works? A developer defines a rule (route) and defines a function which will be called when current path fits the given rule.

```js
route("books/:id", id => {
	// do something
});
```

The principle of **defi-router** is different. You define which part of URL (both [hash](https://developer.mozilla.org/ru/docs/Web/API/Window/location), and [HTML5 History](https://developer.mozilla.org/ru/docs/Web/API/History_API) are supported) need to be synchronized with a given property.

Let's say you need to synchronize ``"x"`` with the first part of ``location.hash`` and ``"y"`` with the second.

```js
defiRouter(object, '/x/y/');
```

Now when you type...

```js
object.x = 'foo';
object.y = 'bar';
```

...``location.hash`` is automatically changed to ``#!/foo/bar/``


And vice versa. When the URL is changed manually or via back and forward buttons, the properties will be changed automatically.

```js
location.hash = '#!/baz/qux/';

// ... after a moment
console.log(object.x, object.y); // ‘baz’, ‘qux’
```

As usually you can listen property changes with [defi.on](http://defi.js.org/#!defi.on) method.

```js
defi.on(object, 'change:x', handler);
```

## An asterisk syntax

You can pass a string which contain asterisks to ``defiRouter`` if you don't need to synchronize some part of the path with a property.

```js
defiRouter(object, '/x/*/y');
```

If the hash looks like ``#!/foo/bar/baz/``, then ``object.x = "foo"`` and ``object.y = "baz"``.

This feature is useful in cases when two or more modules control different parts of the path.


**script1.js**

```js
defiRouter(object1, '/x/*/');
```

**script2.js**

```js
defiRouter(object2, '/*/y/');
```

## Two important things to know

**1.** If a property has truthy value then URL will be changed immediately after ``defiRouter`` call.

```js
object.x = 'foo';

defiRouter(object, '/x/y/');
```

**2.** If a property gets falsy value then all next listed properties will get ``null`` as new values.

```js
defiRouter(object, '/x/y/z/u/');

object.y = null; // makes object.z and object.u to be null as well
```

The idea is to get actual state of URL. It could be weird to get ``"z"`` with value ``"foo"`` in case of non-existing bound part of URL.

## HTML5 History API

The plugin supports  HTML5 History as well. To initialize it you need to pass an optional argument ``type`` with ``"history"`` value to the ``defiRouter`` function (by default ``type`` is ``"hash"``).

```js
defiRouter(object, 'x/y/z/', 'history');
```
