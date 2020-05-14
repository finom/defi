/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import remove from 'src/remove';
import on from 'src/on';
import bindNode from 'src/bindnode';
import bound from 'src/bound';
import trigger from 'src/trigger';
import createSpy from '../helpers/createspy';

describe('remove', () => {
    it('throws an error if an object is null', () => {
        expect(() => {
            remove(null, 'a');
        }).toThrow();
    });

    it('removes a property', () => {
        const obj = {
            a: 1
        };

        remove(obj, 'a');
        expect('a' in obj).toBe(false);
    });

    it('removes a property and its events', () => {
        const obj = {
            a: 1
        };
        const handler = createSpy();

        on(obj, 'change:a', handler);
        trigger(obj, 'change:a');
        expect(handler).toHaveBeenCalledTimes(1);
        remove(obj, 'a');
        trigger(obj, 'change:a');
        expect(handler).toHaveBeenCalledTimes(1);
        expect('a' in obj).toBe(false);
    });

    it('removes a property and its bindings', () => {
        const obj = {
            a: 1
        };
        const node = window.document.createElement('div');

        bindNode(obj, 'a', node);
        expect(bound(obj, 'a')).toEqual(node);
        remove(obj, 'a');
        expect(bound(obj, 'a')).toEqual(null);
        expect('a' in obj).toBe(false);
    });
});
