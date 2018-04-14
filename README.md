# defi.js

(under development yet)

# Quick API ref

- [bindNode](https://defi.js.org/#!defi.bindNode) - Binds a property of an object to HTML node, implementing two-way data binding

```js
// simple use
defi.bindNode(obj, 'myKey', '.my-element');

// advanced use
defi.bindNode(obj, 'myKey', '.my-slider', {
    // when is element state changed?
    // - after 'slide' event
    on: 'slide',
    // how to extract element state?
    // - return 'value' of the widget
    getValue() {
        return $(this).slider('option', 'value');
    },
    // how to set element state?
    // - set 'value'
    setValue(v) {
        $(this).slider('option', 'value', v);
    },
    // how to initialize the widget?
    // you can initialize the slider in any way,
    // but 'initialize' function provides some syntactic sugar
    initialize() {
        $(this).slider({ min: 0, max: 100 });
    }
});
```

- [calc](https://defi.js.org/#!defi.calc) - Creates a dependency of one property value on values of others

```js
obj.b = 1;
defi.calc(obj, 'a', 'b', b => b * 2);
console.log(obj.a); // 2
```

- [on](https://defi.js.org/#!defi.on) - Adds an event handler

```js
defi.on(obj, 'foo', () => {
	alert('Custom Event is fired');
});

defi.trigger(obj, 'foo');
```

- [off](https://defi.js.org/#!defi.off) - Deletes an event handler

```js
defi.off(obj, 'change:x bind');
```

- [trigger](https://defi.js.org/#!defi.trigger) - Fires an event

```js
defi.on(obj, 'foo bar', (a, b, c) => {
	alert(a + b + c);
});
defi.trigger(obj, 'foo', 1, 2, 3); // alerts 6
```

- [unbindNode](https://defi.js.org/#!defi.unbindNode) - Destroys DOM binding

```js
defi.bindNode(obj, 'myKey', '.my-element');

defi.unbindNode(obj, 'myKey', '.my-element');
```


- [bindOptionalNode](https://defi.js.org/#!defi.bindOptionalNode) - Works the same way as `bindNode` but doesn't throw an error if a node doesn't exist

```js
defi.bindOptionalNode(obj, 'myKey', '.my-element');
```

------

Coming soon:

- bound
- chain
- defaultBinders
- lookForBinder
- mediate
- remove
- set
