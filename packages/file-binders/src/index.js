const file = require('./file');
const dropFiles = require('./dropfiles');
const dragOver = require('./dragover');

// export these binders in CJS environment
module.exports = {
  file,
  dropFiles,
  dragOver,
};
