const { execSync } = require('child_process');
const { JSDOM } = require('jsdom');
const expect = require('expect.js');

execSync('rm -rf node_modules && npm i --no-package-lock', { cwd: __dirname });

global.window = new JSDOM('<!doctype html><html><body><form><input name="a"></form></body></html>', {
    url: 'http://localhost'
}).window;

global.document = global.window.document;
global.navigator = global.window.navigator;

const defi = require('defi'); // eslint-disable-line import/no-unresolved
const Router = require('defi-router/router'); // eslint-disable-line import/no-unresolved
const initRouter = require('defi-router'); // eslint-disable-line import/no-unresolved

const codemirrorBinder = require('codemirror-binder'); // eslint-disable-line import/no-unresolved
const commonBinders = require('common-binders'); // eslint-disable-line import/no-unresolved
const fileBinders = require('file-binders'); // eslint-disable-line import/no-unresolved

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
expect(typeof codemirrorBinder === 'function');
expect(typeof codemirrorBinder().setValue === 'function');

expect(typeof commonBinders.html === 'function');
expect(typeof commonBinders.html().setValue === 'function');

expect(typeof fileBinders.file === 'function');
expect(typeof fileBinders.file().setValue === 'function');
