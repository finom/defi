const Jasmine = require('jasmine');
const { JSDOM } = require('jsdom');

const jasmine = new Jasmine();

global.window = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost'
}).window;

global.document = global.window.document;

global.navigator = global.window.navigator;

global.document.createRange = () => ({
    setEnd() {},
    setStart() {},
    getBoundingClientRect() {
        return { right: 0 };
    },
    getClientRects() {
        return { right: 0 };
    }
});

jasmine.loadConfig({
    spec_dir: 'test/spec',
    spec_files: [
        '**/**_spec.js'
    ]
});

jasmine.execute();
