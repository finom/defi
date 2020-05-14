import makeElement from 'makeelement';
import bindNode from '../../../defi/npm/bindnode';
import dragOver from '../../src/dragover';

describe('dragOver binder', () => {
    const { Event } = window;

    let node;

    beforeEach(() => {
        node = makeElement('div');
    });

    it('bound property gets correct values on corresponding events', () => {
        const obj = {};

        bindNode(obj, 'dragovered', node, dragOver(), {
            debounceGetValue: false
        });

        expect(obj.dragovered).toEqual(false, 'should be false by default');

        node.dispatchEvent(new Event('dragover'));
        expect(obj.dragovered).toEqual(true, 'should become true on dragover');

        node.dispatchEvent(new Event('drop'));
        expect(obj.dragovered).toEqual(false, 'should become false on drop');

        node.dispatchEvent(new Event('foobar'));
        expect(obj.dragovered).toEqual(false, 'should not be changed on foobar');

        node.dispatchEvent(new Event('dragenter'));
        expect(obj.dragovered).toEqual(true, 'should become true on dragenter');

        node.dispatchEvent(new Event('foobar'));
        expect(obj.dragovered).toEqual(true, 'should not be changed on foobar');

        node.dispatchEvent(new Event('dragleave'));
        expect(obj.dragovered).toEqual(false, 'should become false on dragleave');
    });
});
