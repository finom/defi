# codemirror-binder [![npm version](https://badge.fury.io/js/codemirror-binder.svg)](https://badge.fury.io/js/codemirror-binder)

> [CodeMirror](http://codemirror.net/) binder creator for defi.js

The binder creator returns a binder which initializes and binds CodeMirror instance (created using ``fromTextArea`` function) to a property.

## Usage

```
npm i codemirror-binder
```

```js
import { bindNode } from 'defi';
import codeMirrorBinder from 'codemirror-binder';

// ...
bindNode(obj, 'code', textarea, codeMirrorBinder());
```


### Usage in a browser environment

For non-CJS environment the bundle can be downloaded at [gh-pages branch](https://github.com/finom/defi/tree/gh-pages/).

In the browser environment the script exports a global variable `codeMirrorBinder`.

```html
<script src="path/to/codemirror-binder.min.js"></script>
```
-------------


### Configuration

The function accepts one argument: configuration object which is passed into the internal call of ``CodeMirror.fromTextArea``. Read the CodeMirror documentation for more info.

```js
bindNode(obj, 'code', textarea, codeMirror({
    lineNumbers: true,
    mode: 'htmlmixed'
}));
```
