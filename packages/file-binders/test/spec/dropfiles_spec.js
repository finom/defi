import makeElement from 'makeelement';
import bindNode from '../../../defi/npm/bindnode';
import unbindNode from '../../../defi/npm/unbindnode';
import on from '../../../defi/npm/on';
import dropFiles from '../../src/dropfiles';
import createSpy from './createspy';

describe('dropFiles binder', () => {
    const { Event, Blob } = window;

    it('allows to bind and drop', (done) => {
        const obj = {};
        const node = makeElement('div');
        const handler = createSpy(() => {
            expect(obj.files[0].readerResult).toEqual('foo');
            expect(obj.files[1].readerResult).toEqual('bar');
            done();
        });

        bindNode(obj, 'files', node, dropFiles('text'));

        on(obj, 'change:files', handler);

        node.dispatchEvent(new Event('dragover'));

        node.dispatchEvent(Object.assign(new Event('drop'), {
            dataTransfer: {
                files: [
                    new Blob(['foo'], {
                        type: 'text/plain'
                    }),
                    new Blob(['bar'], {
                        type: 'text/plain'
                    })
                ]
            }
        }));
    });

    it('allows bind and drop with no reading', (done) => {
        const obj = {};
        const node = makeElement('div');
        const handler = createSpy(() => {
            expect(obj.files[0].readerResult).toEqual(undefined);
            done();
        });

        bindNode(obj, 'files', node, dropFiles());

        on(obj, 'change:files', handler);

        node.dispatchEvent(new Event('dragover'));

        node.dispatchEvent(Object.assign(new Event('drop'), {
            dataTransfer: {
                files: [
                    new Blob(['foo'], {
                        type: 'text/plain'
                    })
                ]
            }
        }));
    });

    it('removes DOM event handlers when unbindNode is called', (done) => {
        const obj = {};
        const node = makeElement('div');
        const handler = createSpy(() => {
            expect(obj.files[0].readerResult).toEqual(undefined);
        });

        bindNode(obj, 'files', node, dropFiles());

        on(obj, 'change:files', handler);

        node.dispatchEvent(new Event('dragover'));

        node.dispatchEvent(Object.assign(new Event('drop'), {
            dataTransfer: {
                files: [
                    new Blob(['foo'], {
                        type: 'text/plain'
                    })
                ]
            }
        }));

        unbindNode(obj, 'files', node);

        setTimeout(() => {
            node.dispatchEvent(new Event('dragover'));

            node.dispatchEvent(Object.assign(new Event('drop'), {
                dataTransfer: {
                    files: [
                        new Blob(['bar'], {
                            type: 'text/plain'
                        })
                    ]
                }
            }));

            setTimeout(() => {
                expect(handler).toHaveBeenCalledTimes(1);
                done();
            }, 200);
        }, 200);
    });

    it('throws an error if filereader method does not exist', () => {
        const obj = {};
        const node = makeElement('div');

        expect(() => {
            bindNode(obj, 'files', node, dropFiles('wat'));
        }).toThrow();
    });
});
