const getFileReaderMethodName = require('./_get-filereader-method-name');
const readFiles = require('./_read-files');

function createFileChangeHandler({
    callback,
    methodName
}) {
    return function fileChangeHandler() {
        const { files } = this;

        if (files.length) {
            readFiles(files, methodName, callback);
        } else {
            callback([]);
        }
    };
}

module.exports = function fileBinder(readAs) {
    const methodName = readAs ? getFileReaderMethodName(readAs) : null;
    let fileChangeHandler;

    return {
        on(callback) {
            fileChangeHandler = createFileChangeHandler({
                callback,
                methodName
            });
            this.addEventListener('change', fileChangeHandler);
        },
        destroy() {
            this.removeEventListener('change', fileChangeHandler);
        },
        getValue({ domEvent }) {
            const files = domEvent || [];
            return this.multiple ? files : files[0] || null;
        },
        setValue: null
    };
};
