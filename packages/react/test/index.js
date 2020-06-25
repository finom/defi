const Jasmine = require('jasmine');

const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'test',
  spec_files: ['spec/*.spec.js'],
});

jasmine.execute();
