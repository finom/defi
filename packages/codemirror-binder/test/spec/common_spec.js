import bindNode from '../../../defi/npm/bindnode';
import unbindNode from '../../../defi/npm/unbindnode';
import codeMirror from '../../src';

const noDebounceFlag = { debounceGetValue: false, debounceSetValue: false };

describe('Common', () => {
  let obj;
  let textarea;

  const getCodeMirrorInstance = () => {
    if (textarea.nextElementSibling) {
      return textarea.nextElementSibling.CodeMirror;
    }
    return null;
  };
  beforeEach(() => {
    const { document } = window;
    obj = {};
    textarea = document.body.appendChild(document.createElement('textarea'));
  });

  it('should update textarea and CodeMirror when bound property is changed', () => {
    bindNode(obj, 'x', textarea, codeMirror(), noDebounceFlag);
    obj.x = 'foo';

    expect(textarea.value).toEqual(obj.x);
    expect(getCodeMirrorInstance().getValue()).toEqual(obj.x);
  });

  it('should update property and textarea value when CodeMirror is changed', () => {
    bindNode(obj, 'x', textarea, codeMirror(), noDebounceFlag);

    getCodeMirrorInstance().setValue('foo');

    expect(textarea.value).toEqual(obj.x);
    expect(getCodeMirrorInstance().getValue()).toEqual(obj.x);
  });

  it('should destroy when unbindNode is called', () => {
    bindNode(obj, 'x', textarea, codeMirror(), noDebounceFlag);
    unbindNode(obj, 'x', textarea);

    obj.x = 'foo';

    expect(textarea.value).toEqual('');
    expect(getCodeMirrorInstance()).toEqual(null);
  });

  it('allows to pass config', () => {
    bindNode(obj, 'x', textarea, codeMirror({
      foo: 'bar',
    }), noDebounceFlag);

    expect(getCodeMirrorInstance().getOption('foo')).toEqual('bar');
  });
});
