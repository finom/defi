# defi-react [![npm version](https://badge.fury.io/js/defi-react.svg)](https://badge.fury.io/js/defi-react)

> A super straightforward state management library for React in 5 hooks and 2 methods

## Why?

Beeing many years a React developer I've found out that app-wide state management in React is tricky. I've got an idea to create my own state management solution after I started to work on my own React Native project and tried to find out what I'd like use as an app state library. In my regular work the main tool for this task usually was Redux but with my own project I'm not tied by market standards and decided to develop something super simple for my needs. I was tired by all these actions, reducers, constants, action creators, sagas, middlewares, but couldn't find any simple and flexible alternative for Redux. To be fair enough there is a list of alternatives I should mention.


### Alternatives

- The first is **Redux**. It's amazing in terms of how many users know it and the most favorite part of Redux is `useSelector` hook which allows to get only what you want and receive components updates only if that you need is updated. But as I noted above it's overvcomplicated in my opinion. This issue can be partially solved by [rematch](https://github.com/rematch/rematch) which is definitely a recommended library if you still want to use Redux.
- **MobX** is a cool library. Unfortunately it's cool only in case if you use class components but in the new hook world it appears to be not that elegant and you have to wrap returned React elements by [useObserver](https://mobx-react.js.org/observer-hook). I don't say it's bad but I really don't like the idea to return something else than regular React elements from pure React components. In other words that just my personal preference and if you OK with that use MobX as a battle-tested and second popular library after Redux.
- **Apollo Client** is also a highlighted library. It allows to bring Graphql syntax to your local store which is super cool when you also have a server powered by Graphql. In case if you don't use Graphql on server-side I think it appears to be too complicated to solve state management problem.
- **WatermelonDB** (React Native only) provides a nice ORM powered by SQLite to store your local data. In my specific case I had no need to store data locally except of what needs to be sent to Firebase DB. Since Firebase supports offline mode and stores offline data by itself I keep WatermelonDB for cases where I really need such a great tool.


## What do I need to know about defi.js

defi.js is a library which enhances JavaScript objects with `Object.defineProperty`. By defining accessors it turns any object into an event target and also allows to subscribe to property change event.

### defi.js methods you're going to use
To make you easier to start suing **defi-react** hooks there is a quick reference to a few methods you're going to need while you implement your store.

### defi.on
`on(target: object, eventName: string | string[], callback: (...triggerArgs: any[]) => void)`

The function makes the target object to become an event target. A special event name `"change:KEY"` allows to listen properties re-definition. Events can be triggered by `defi.trigger` described below.

### defi.trigger
`trigger(target: object, eventName, callback)`

Triggers custom events.

```js
import { on, trigger } from 'defi'
const object = {};

on(object, 'customEvent', (...args) => console.log('customEvent is triggered with args', args))
on(object, 'change:x', ({ value }) => console.log(`x is changed to ${value}`))

trigger(object, customEvent, 1, 2, 3); // logs "customEvent is triggered with args [1, 2, 3]"
object.x = 'foo'; // logs x is changed to foo
```

Also it's worthy to mention some other useful defi.js methods in case if you want to deepen into defi.js topic: [set](https://defi.js.org/#!defi.set) (sets properties with some special flags like `silent: true`), [off](https://defi.js.org/#!defi.off) (removes event listener; the hooks do it automatically when needed), [calc](https://defi.js.org/#!defi.calc) (defined calculated properties) and finally [mediate](https://defi.js.org/#!defi.mediate) (controls type of object properties).

defi.js also includes some DOM manipulation methods, but at this case you don't need them at all because rendering is 100% handled by React.

## Reference

All hooks accept an `object` or `storeSelector` function as first argument (the only exception is `useStore` which doesn't accept object type). `object` allows to handle any object (even if it isn't presented as a part of store) `storeSelector` in its turn is a function which is going to return some object from the store.

### Context and Provider
As a widely used practice in the React ecosystem is the concept of context providers. You can wrapp your app with `Provider` component and pass your store as `value` arg to make the store to be accessible everywhere within application you make.

```js
import { Provider as DefiProvider } from 'defi-react';
// store can be literally any object
// but for structural purposes it's recommended to create a class
// see examples below
const store = {}; 
...
export default () => (
	<DefiProvider value={store}>
		...
	</DefiProvider>
)
```

If needed you can access store context which is also exported by the library:

```js
import { Context as DefiContext } from 'defi-react';
import { useContext } from 'react'
...
// call it inside some of child components
const store = useContext(DefiContext);
```

### useStore
`useStore(storeSelector?) => object`

This is the simplest but at the same time an important hook. The only thing it does is it returns store context value. In other words it replaces `useContext(DefiContext)`. Plus to that you can pass a selector which should return store slice in case if you need to get access to a nested object.

```js
const store = useStore(); // returns store
const { foo } = useStore(); // extracts foo from the store
const foo = useStore(store => store.foo); // 100% equivalent to the previous line
```

An important thing to know is that `useStore` hook **never updates components where it's used**. It's puepose is to get access to your store object but not o make components to react on changes. You should use `useChange` hook for that.

### useChange
`useChange(storeSlice: object | storeSelector, key: string) => [value: any, updateValue: function]`

Listens to object property changes and re-renders components when a change does appear. A cool thing about this hook is the fact that components are going to listen to **needed changes only** and be silent when something else is changed in the store or custom listened object.

Some common examples:

```js
const [foo, setFoo] = useChange(useStore(), 'foo'); // listen for store.foo changes
console.log(foo); // logs current storeObject.foo value
setFoo('bar'); // sets storeObject.foo value

// ... or somewhere in your code ...
storeObject.foo = 'bar'; // this will re-render components where storeObject.foo is listened by useChange
```

```js
const [foo, setFoo] = useChange(store => store.baz, 'foo'); // listen for store.baz.foo changes
```

```js
const [foo, setFoo] = useChange(someObject, 'foo'); // listen for someObject.foo changes
```

Array example:

```js
// let's say you have the following store structure
const store = {
	items: [{ foo: 1 }, { foo: 2 }, { foo: 3 }]
};
... 

// Items.js
import Item from './Item';
export default () => {
	const store = useStore();
	const [items, setItems] = useChange(store, 'items');
	// you need to reassign the entire array to update store field
	// just like in Redux
	const addItem = useCallback(
		(item) => setItems([...items, { foo: items.length + 1 }]), 
		[items],
	);

	return (
		<div>
			{items.map((item) => (
				<Item key={item.foo} item={item} />
			))}
			<button onClick={addItem}>Add item</button>
		</div>
	)
}

... 
// Item.js
export default ({ item }) => {
	const [foo, setFoo] = useChange(item, 'foo'); // listen to changes made at item.foo
	const update = useCallback(() => setFoo(Math.random()), [])
	return (
		<div>
			Foo: {foo}
			<button onClick={update}>Update "foo" to random</button>
		</div>
	);
}
```

### useSet
`useSet(storeSlice: object | storeSelector, key: string) => value: any`

Returns update function for a given object peoperty. It's goal is to make possible to update a property without re-render of a component where the hook is used. All components which do use `useChange` with the property are going to be re-rendered.

```js
const store = useStore();
const setFoo = useSet(store, 'foo');

setFoo('bar');

// which is equivalent to 
store.foo = 'bar';
```

### useOn
`useOn(storeSlice: object | storeSelector, eventName) => trigger`

Subscribes component to a given event on an object. Returns trigger function to make possible to fire the event in a component.

```js
const store = useStore();
const triggerFoo = useOn(store, 'foo');

...
<button onClick={triggerFoo}></button>

// somewhere outside of the component
import { trigger } from 'defi'
... 
trigger(store, 'foo'); // triggers foo and notifies all components which listen that event with useOn
```

### useTrigger
`useTrigger(storeSlice: object | storeSelector, eventName) => trigger`

The hook is very similar to `useOn` but it doesn't re-render component when an event is triggered. the only thing it does is it returns trigger function to fire events which may be listened by store or by other compoents which use `useOn`.

```js
const store = useStore();
const triggerFoo = useTrigger(store, 'foo');

...
<button onClick={triggerFoo}></button>
```


## Store example

As it mentioned above you can use any object as store but it's recommended to use classes to keep your store well structured.

```js
// store.js
import { on } from 'defi';

class Auth {
	email - '';
	password = '';
	token = null;
	error = null;
	authenticate = () => {
		try {
			const { email, password } = this; 
			const { token } = await sendCredentialsSomeHow(email, password);
			this.token = token;
		} catch(e) {
			this.error = 'Unable to authenticate';
		}
	}
}
class Store {
	constructor() {
		this.auth = new Auth();
		on(this.auth, ['change:token', 'change:error'], () => {
			if(this.auth.token) {
				alert('authenticated!')
			} else if (this.auth.error){
				alert(`Error: ${this.auth.error}`)
			}
			
		});
	}
}

export default new Store();

// App.js
import { Provider as DefiProvider } from 'defi';
import store from './store';
import Authentication from './Authentication'
export default () => (
	<DefiProvider>
		<Authentication />
	</DefiProvider>
)

// Authentication.js
export default () => {
	const { auth } = useStore();
	const [email, setEmail] = useChange(auth, 'email');
	const [password, setPassword] = useChange(auth, 'password');
	return (
		<form>
			{/* ... email and password inputs are here ... */}
			<button onClick={auth.authenticate}>Authenticate</button>
		</form>
	)	
}

```

--------------------------

The module includes 3 binder creators for defi.js which deal with files.

## Usage
In browser environment these functions live at ``window.fileBinders`` object.
```html
<script src="path/to/file-binders.min.js"></script>
```

```js
const { file, dropFiles, dragOver } = fileBinders;
// ...
defi.bindNode(object, 'file', node, file());

// if you don't want to create variables
defi.bindNode(object, 'file', node, fileBinders.file());
```

The bundle can be downloaded at [gh-pages branch](https://github.com/finom/defi/tree/gh-pages)

-------------

```
npm i file-binders
```

```js
// import all binders
const { file, dropFiles, dragOver } = require('file-binders');

// import only needed binders
const file = require('file-binders/file');
const dropFiles = require('file-binders/dropfiles');
const dragOver = require('file-binders/dragover');

// ...

defi.bindNode(object, 'file', node, files());
```

## ``file(readAs)``
Returns a binder for file input. The binder allows not only to get basic data about a file, but also to read it without calling ``FileReader`` manually.

If ``readAs`` argument isn’t set, input value gets into the bound property after its changing (on "change" DOM event). If ``readAs`` is set, binder will read the file and transform it into the needed format (data URI, Blob...) and only after reading the file, the property will be changed.

The file (native ``File``) or an array of files becomes the final value of the property in the presence of ``multiple`` attribute. At the same time the result of reading will get into the object of every file as ``readerResult`` property.

### Arguments
``readAs`` [optional] (string) - the argument value can be "arrayBufer", "binaryString", "dataURL", "text". The value depends on the presence of corresponding methods of the ``FileReader`` prototype.

### Example
```js
defi.bindNode(object, 'myKey', '.my-file', file('dataURL'));
// ... user changes input content
// choosing my-image.png from file system ...
defi.on(object, 'change:myKey', () => {
	console.log(object.myKey);
	// -->
	// File
	//	lastModified: 1383404384000
	//	lastModifiedDate: ...
	//	name: "my-image.png"
	//	readerResult: "data:image/png;base64,iVBO..."
	//		- the result of file reading
	//	size: 9378
	//	type: "image/png"
});
```

## ``dropFiles(readAs)``
Returns a binder which allows to drop files from a file manager to a given element. After ``bindNode`` is called HTML block gets needed DOM event listeners (eg, "dragover" and "drop"). When user drops files from file manager into the block, the property gets an array of dropped files as its value. As like ``file`` the binder accepts one optional argument called ``readAs`` which says how the files need to be read by ``FileReader``: data URI, Blob... (the result of reading is placed in ``readerResult`` property of every file). If ``readAs`` isn't given, the property gets an array of files which wasn't read.

### Arguments
``readAs`` [optional] (string) - the argument value can be ``"arrayBuffer"``, ``"binaryString"``, ``"dataURL"``, ``"text"``. The value depends on the presence of corresponding methods of the ``FileReader`` prototype.

### Example
```js
defi.bindNode(object, 'myKey', '.drop-area', dropFiles('dataURL'));
// ... user drops one file called
// "my-image.png" into .drop-area block
defi.on(object, 'change:myKey', () => {
	console.log(object.myKey[0]);
	// -->
	// File
	//	lastModified: 1383404384000
	//	lastModifiedDate: ...
	//	name: "my-image.png"
	//	readerResult: "data:image/png;base64,iVBO..."
	//		- the result of file reading
	//	size: 9378
	//	type: "image/png"
});
```

## ``dragOver()``
Makes given property equal to ``true`` when something is dragged over a given node.

### Arguments
none

### Examples
```js
defi.bindNode(object, 'myKey', '.my-node', dragOver());
defi.on(object, 'change:myKey', function() {
	if(object.myKey) {
		console.log('something is dragging over .my-node');
	} else {
		console.log('nothing is dragged over the node');
	}
});
```

Add "dragovered" class name when file (or another draggable object) is dragged over .my-node

```js
defi.bindNode(object, 'myKey', '.my-node', dragOver());
defi.bindNode(object, 'myKey', '.my-node', className('dragovered'));
```
