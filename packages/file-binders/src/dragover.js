module.exports = function dragOver() {
  return {
    on: 'dragover dragenter dragleave dragend drop',
    getValue({ domEvent }) {
      const eventType = domEvent && domEvent.type;

      return eventType === 'dragover' || eventType === 'dragenter';
    },
    setValue: null,
  };
};
