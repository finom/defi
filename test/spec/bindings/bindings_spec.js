/* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */
import bindNode from 'src/bindnode';
import unbindNode from 'src/unbindnode';
import bound from 'src/bound';
import addListener from 'src/on/_addlistener';
import makeObject from '../../helpers/makeobject';
import createSpy from '../../helpers/createspy';

describe('Bindings', () => {
    const noDebounceFlag = {
        debounceSetValue: false,
        debounceGetValue: false
    };

    const { document } = window;

    let obj;
    let node;
    let child;
    let binder;
    let initializeCall;
    let destroyCall;

    const testSimpleBind = (key = 'x') => {
        obj[key] = 'foo';
        expect(node.value).toEqual('foo');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj[key]).toEqual('bar');
        expect(initializeCall).toHaveBeenCalled();
        expect(bound(obj, key)).toEqual(node);
        expect(Array.from(bound(obj, key, { all: true }))).toEqual([node]);
    };

    const testSimpleUnbind = (key = 'x', testedNode = node) => {
        obj[key] = 'foo';
        expect(testedNode.value).toEqual('');
        testedNode.value = 'baz';
        testedNode.ondummyevent();
        expect(obj[key]).toEqual('foo');
        expect(destroyCall).toHaveBeenCalled();
        expect(bound(obj, key)).toEqual(null);
        expect(Array.from(bound(obj, key, { all: true }))).toEqual([]);
    };

    beforeEach(() => {
        obj = {};
        node = document.createElement('div');
        child = node.appendChild(document.createElement('div'));
        child.className = 'child';

        initializeCall = createSpy();
        destroyCall = createSpy();

        binder = {
            on(cbc) {
                this.ondummyevent = cbc;
            },
            getValue() {
                return this.value;
            },
            setValue(value) {
                this.value = value;
            },
            initialize() {
                this.value = this.value || '';
                initializeCall();
            },
            destroy() {
                destroyCall();
            }
        };
    });

    it('should handle debounceSetValueOnBind=true', (done) => {
        obj.x = 'foo';
        bindNode(obj, 'x', node, binder, {
            debounceSetValueOnBind: true
        });
        expect(node.value).toEqual('');
        setTimeout(() => {
            expect(node.value).toEqual('foo');
            done();
        }, 50);
    });

    it('should handle debounceGetValueOnBind=true', (done) => {
        node.value = 'foo';
        bindNode(obj, 'x', node, binder, {
            debounceGetValueOnBind: true
        });
        expect(obj.x).toEqual(undefined);
        setTimeout(() => {
            expect(obj.x).toEqual('foo');
            done();
        }, 50);
    });

    it('should handle debounceSetValue=true (use default value)', (done) => {
        obj.x = 'foo';
        bindNode(obj, 'x', node, binder);
        expect(node.value).toEqual('foo');
        obj.x = 'bar';
        expect(node.value).toEqual('foo');
        setTimeout(() => {
            expect(node.value).toEqual('bar');
            done();
        }, 50);
    });

    it('should handle debounceGetValue=true (use default value)', (done) => {
        node.value = 'foo';
        bindNode(obj, 'x', node, binder);
        expect(obj.x).toEqual('foo');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj.x).toEqual('foo');
        setTimeout(() => {
            expect(obj.x).toEqual('bar');
            done();
        }, 50);
    });


    xit('should bind and use DOM events', () => {});

    xit('handle option setOnBind=true', () => {});

    xit('handle option getOnBind=true', () => {});

    xit('handle option setOnBind=false', () => {});

    xit('handle option getOnBind=false', () => {});

    it('should bind and trigger events', () => {
        const bindCall = createSpy();
        const bindKeyCall = createSpy();
        addListener(obj, 'bind', bindCall);
        addListener(obj, 'bind:x', bindKeyCall);
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        testSimpleBind();
        expect(bindCall).toHaveBeenCalled();
        expect(bindKeyCall).toHaveBeenCalled();
    });

    it('should unbind and trigger events', () => {
        const unbindCall = createSpy();
        const unbindKeyCall = createSpy();
        addListener(obj, 'unbind', unbindCall);
        addListener(obj, 'unbind:x', unbindKeyCall);
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x', node);
        testSimpleUnbind();
        expect(unbindCall).toHaveBeenCalled();
        expect(unbindKeyCall).toHaveBeenCalled();
    });

    it('should bind using key-node object', () => {
        bindNode(obj, { x: node }, binder, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-binding object', () => {
        bindNode(obj, { x: { node, binder } }, null, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-bindingsarray object', () => {
        bindNode(obj, { x: [{ node, binder }] }, null, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-binding object and use common binder', () => {
        bindNode(obj, { x: { node } }, binder, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-bindingsarray object and use common binder', () => {
        bindNode(obj, { x: [{ node }] }, binder, noDebounceFlag);
        testSimpleBind();
    });

    it('should not unbind when wrong node is given', () => {
        const wrongNode = document.createElement('div');
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x', wrongNode);
        testSimpleBind();
    });

    it('should not unbind when wrong key is given', () => {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'y', node);
        testSimpleBind();
    });

    it('should unbind when node is not given', () => {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x');
        testSimpleUnbind();
    });

    it('should unbind all when neither key nor node is given', () => {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj);
        testSimpleUnbind();
    });

    it('should unbind by ":bound()" selector', () => {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x', ':bound(x)');
        testSimpleUnbind();
    });

    it('should unbind by ":bound() [native_selector]" selector', () => {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        bindNode(obj, 'y', child, binder, noDebounceFlag);
        unbindNode(obj, 'y', ':bound(x) .child');
        testSimpleUnbind('y', child);
    });

    it('should unbind by ":bound() > [native_selector]" selector', () => {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        bindNode(obj, 'y', child, binder, noDebounceFlag);
        unbindNode(obj, 'y', ':bound(x) > .child');
        testSimpleUnbind('y', child);
    });

    it('should unbind using key-node object', () => {
        bindNode(obj, { x: node }, binder, noDebounceFlag);
        unbindNode(obj, { x: node });
        testSimpleUnbind();
    });

    it('should unbind using key-binding object', () => {
        bindNode(obj, { x: { node, binder } }, null, noDebounceFlag);
        unbindNode(obj, { x: { node, binder } });
        testSimpleUnbind();
    });

    it('should unbind using key-bindingsarray object', () => {
        bindNode(obj, { x: [{ node, binder }] }, null, noDebounceFlag);
        unbindNode(obj, { x: [{ node, binder }] });
        testSimpleUnbind();
    });

    it('should bind using an array of objects', () => {
        bindNode(obj, [{ key: 'x', node, binder }], noDebounceFlag);
        testSimpleBind();
    });

    it('should unbind using an array of objects', () => {
        bindNode(obj, [{ key: 'x', node, binder }], noDebounceFlag);
        unbindNode(obj, [{ key: 'x', node }]);
        testSimpleUnbind();
    });

    it('should bind delegated target', () => {
        const obj = makeObject('x.y');
        bindNode(obj, 'x.y.z', node, binder, noDebounceFlag);
        obj.x.y.z = 'foo';
        expect(node.value).toEqual('foo');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj.x.y.z).toEqual('bar');
    });

    it('should unbind delegated target', () => {
        const obj = makeObject('x.y');
        bindNode(obj, 'x.y.z', node, binder, noDebounceFlag);
        unbindNode(obj, 'x.y.z', node);
        obj.x.y.z = 'foo';
        expect(node.value).toEqual('');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj.x.y.z).toEqual('foo');
    });

    it('cancels delegated binding when exactKey=true option is passed', () => {
        bindNode(obj, 'x.y.z', node, binder, Object.assign({
            exactKey: true
        }, noDebounceFlag));
        testSimpleBind('x.y.z');
    });

    it('should rebind delegated target', () => {
        const obj = makeObject('u.x.y.z', 'go');
        bindNode(obj, 'u.x.y.z', node, binder, noDebounceFlag);
        obj.u.x = makeObject('y.z', 'foo');
        expect(node.value).toEqual('foo');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj.u.x.y.z).toEqual('bar');
    });

    it('should remove binding if delegated target is reassigned', () => {
        const obj = makeObject('u.x.y');
        bindNode(obj, 'u.x.y.z', node, binder, noDebounceFlag);
        const x = obj.u.x;

        obj.u.x = makeObject('y.z', 'foo');

        node.value = 'bar';
        node.ondummyevent();
        expect(x.y.z).not.toEqual('bar');
        expect(obj.u.x.y.z).toEqual('bar');
        x.y.z = 'baz';
        expect(node.value).toEqual('bar');
    });

    it('throws error when node is not there', () => {
        expect(() => {
            bindNode(obj, 'x');
        }).toThrow();
    });

    it('does not throw error when node is not there and optional=true is given', () => {
        expect(() => {
            bindNode(obj, 'x', undefined, undefined, { optional: true });
        }).not.toThrow();
    });

    it(
        'doesn\'t throw error with bindNode method when node is missing',
        () => {
            expect(() => {
                bindNode(obj, 'x', {}, { optional: true });
            }).not.toThrow();
        }
    );

    it('doesn\'t throw error with bindNode method'
        + ' when node is missing (an object is used)', () => {
        expect(() => {
            bindNode(obj, {
                x: null,
                y: undefined
            }, {}, { optional: true });
        }).not.toThrow();
    });
});
