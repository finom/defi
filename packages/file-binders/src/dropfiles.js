const getFileReaderMethodName = require('./_get-filereader-method-name');
const readFiles = require('./_read-files');

function createDropHandler({
  callback,
  methodName,
}) {
  return function dropHandler(event) {
    event.preventDefault();
    const { files } = event.dataTransfer;

    readFiles(files, methodName, callback);
  };
}

function createDragoverHandler() {
  return function dragoverHandler(event) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
    }
  };
}

module.exports = function dropFilesBinder(readAs) {
  const methodName = readAs ? getFileReaderMethodName(readAs) : null;
  let dropHandler;
  let dragoverHandler;

  return {
    on(callback) {
      dropHandler = createDropHandler({
        callback,
        methodName,
      });
      dragoverHandler = createDragoverHandler();

      this.addEventListener('drop', dropHandler);
      this.addEventListener('dragover', dragoverHandler);
    },
    destroy() {
      this.removeEventListener('drop', dropHandler);
      this.removeEventListener('dragover', dragoverHandler);
    },
    getValue({ domEvent }) {
      return domEvent || [];
    },
    setValue: null,
  };
};
