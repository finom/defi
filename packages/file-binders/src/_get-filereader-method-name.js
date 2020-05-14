module.exports = function getFileReaderMethodName(readAs) {
    const { FileReader } = window;
    /* istanbul ignore if  */
    if (typeof FileReader === 'undefined') {
        throw Error('FileReader is not supported by this browser');
    }

    const methodName = `readAs${readAs[0].toUpperCase()}${readAs.slice(1)}`;

    if (!FileReader.prototype[methodName]) {
        throw Error(`Method ${methodName} is not supported by FileReader`);
    }

    return methodName;
};
