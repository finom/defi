# file-binders [![npm version](https://badge.fury.io/js/file-binders.svg)](https://badge.fury.io/js/file-binders) [![Build Status](https://travis-ci.org/defijs/file-binders.svg?branch=master)](https://travis-ci.org/defijs/file-binders) [![Coverage Status](https://coveralls.io/repos/github/defijs/file-binders/badge.svg?branch=master)](https://coveralls.io/github/defijs/file-binders?branch=master)

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

The bundle can be downloaded at [gh-pages branch](https://github.com/defijs/file-binders/tree/gh-pages)

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
