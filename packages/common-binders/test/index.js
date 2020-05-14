const Jasmine = require('jasmine');
const { JSDOM } = require('jsdom');

const jasmine = new Jasmine();

global.window = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost'
}).window;

global.document = global.window.document;

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: ['spec/*_spec.js']
});

jasmine.execute();
