const { execSync } = require('child_process');

execSync('rm -rf node_modules && npm i --no-package-lock', { cwd: __dirname });
// remove root dependencies to avoid usage of them
execSync('rm -rf ../../node_modules', { cwd: __dirname });

const { JSDOM } = require('jsdom');
const expect = require('expect.js');


global.window = new JSDOM('<!doctype html><html><body><form><input name="a"></form></body></html>', {
  url: 'http://localhost',
}).window;

global.document = global.window.document;
global.navigator = global.window.navigator;

const defi = require('defi'); // eslint-disable-line import/no-unresolved
const Router = require('defi-router/router'); // eslint-disable-line import/no-unresolved
const initRouter = require('defi-router'); // eslint-disable-line import/no-unresolved

const codemirrorBinder = require('codemirror-binder'); // eslint-disable-line import/no-unresolved
const commonBinders = require('common-binders'); // eslint-disable-line import/no-unresolved
const fileBinders = require('file-binders'); // eslint-disable-line import/no-unresolved
const defiReact = require('defi-react'); // eslint-disable-line import/no-unresolved

// check if defi itself is OK
const obj = { b: 3 };
defi.calc(obj, 'a', 'b', (b) => b * 2);
expect(obj.a).to.eql(6);

// check if router is OK
const customRouter = new Router('custom');
customRouter.subscribe(obj, '/a/');
expect(customRouter.path).to.eql('/6/');
expect(typeof initRouter === 'function');

// check if binders are OK
expect(typeof codemirrorBinder === 'function').to.be(true);
expect(typeof codemirrorBinder().setValue === 'function').to.be(true);

expect(typeof commonBinders.html === 'function').to.be(true);
expect(typeof commonBinders.html().setValue === 'function').to.be(true);

expect(typeof fileBinders.file === 'function').to.be(true);
expect(typeof fileBinders.file().setValue === 'function').to.be(true);

// check if defi-react is OK
expect(typeof defiReact.useChange === 'function').to.be(true);

// return main dependencies back
execSync('npm install --prefix ../..', { cwd: __dirname });
