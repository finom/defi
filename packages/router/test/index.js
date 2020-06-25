const Jasmine = require('jasmine');
const { JSDOM } = require('jsdom');
const { SpecReporter } = require('jasmine-spec-reporter');

const jasmine = new Jasmine();

global.window = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
}).window;

jasmine.loadConfig({
  random: false,
  spec_dir: 'test/spec',
  spec_files: [
    '**/*_spec.js',
  ],
});

jasmine.addReporter(new SpecReporter());

jasmine.execute();
