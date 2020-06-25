module.exports = function readFiles(files, fileReaderMethodName, callback) {
  const { length } = files;
  const arrayOfFiles = Array(length);
  let j = 0;

  function createLoadendHandler({
    file,
    reader,
  }) {
    return function loadendHandler() {
      file.readerResult = reader.result; // eslint-disable-line no-param-reassign
      j += 1;
      if (j === length) {
        callback(arrayOfFiles);
      }

      reader.removeEventListener('loadend', loadendHandler);
    };
  }

  if (fileReaderMethodName) {
    for (let i = 0; i < length; i += 1) {
      const reader = new window.FileReader();
      const file = files[i];

      arrayOfFiles[i] = file;

      reader.addEventListener('loadend', createLoadendHandler({
        file,
        reader,
      }));

      reader[fileReaderMethodName](file);
    }
  } else {
    for (let i = 0; i < length; i += 1) {
      arrayOfFiles[i] = files[i];
    }

    callback(arrayOfFiles);
  }
};
