/* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */
import on from 'src/on';
import once from 'src/once';
import off from 'src/off';
import trigger from 'src/trigger';
import bindNode from 'src/bindnode';
import createSpy from '../../helpers/createspy';
import makeObject from '../../helpers/makeobject';
import simulateClick from '../../helpers/simulateclick';

describe('Events summary (on, once, off, trigger)', () => {
    let obj;
    let handler;
    let node;
    let childNode;
    let grandchildNode;

    beforeEach(() => {
        obj = {};
        handler = createSpy();
        node = window.document.body.appendChild(window.document.createElement('div'));

        node.innerHTML = `
            <div id="child">
                <div class="grandchild">

                </div>
            </div>
        `;

        childNode = node.querySelector('#child');
        grandchildNode = node.querySelector('.grandchild');
    });

    afterEach(() => {
        window.document.body.removeChild(node);
    });

    it('fires', () => {
        on(obj, 'someevent', handler);
        trigger(obj, 'someevent');
        expect(handler).toHaveBeenCalledTimes(1);
    });


    it('allows to pass few arguments to trigger', () => {
        const handler = createSpy((a, b) => {
            expect(a).toEqual('foo');
            expect(b).toEqual('bar');
        });
        on(obj, 'someevent', handler);
        trigger(obj, 'someevent', 'foo', 'bar');
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes', () => {
        on(obj, 'someevent', handler);
        off(obj, 'someevent');
        trigger(obj, 'someevent');

        expect(handler).not.toHaveBeenCalled();
    });

    it('fires delegated', () => {
        const obj = makeObject('a.b.c');
        on(obj, 'a.b.c@someevent', handler);
        trigger(obj.a.b.c, 'someevent');
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes delegated', () => {
        const obj = makeObject('a.b.c');
        on(obj, 'a.b.c@someevent', handler);
        off(obj, 'a.b.c@someevent');
        trigger(obj.a.b.c, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('fires DOM event with no selector', () => {
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x', handler);
        simulateClick(childNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes DOM event with no selector', () => {
        on(obj, 'click::x', handler);
        off(obj, 'click::x');
        bindNode(obj, 'x', '#child');
        simulateClick(childNode);
        expect(handler).not.toHaveBeenCalled();
    });


    it('triggers DOM event using selector', () => {
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x(.grandchild)', handler);
        simulateClick(grandchildNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes DOM event using selector', () => {
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x(.grandchild)', handler);
        off(obj, 'click::x(.grandchild)');
        simulateClick(grandchildNode);
        expect(handler).not.toHaveBeenCalled();
    });

    it('triggers DOM event via trigger', () => {
        const handler = createSpy((a, b) => expect(a + b).toEqual(3));
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x', handler);
        trigger(obj, 'click::x', 1, 2);

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('fires DOM event using delegated event name', () => {
        const obj = { a: {} };
        bindNode(obj.a, 'x', '#child');
        on(obj, 'a@click::x', handler);
        simulateClick(childNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('allows to pass name-handler object to "on" and "off"', () => {
        const handlers = {
            foo: createSpy(),
            bar: createSpy()
        };

        on(obj, handlers);

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);

        off(obj, handlers);

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);
    });

    it('allows to flip context and triggerOnInit (on)', () => {
        const thisArg = {};
        const handler = createSpy(() => {
            expect(this).toEqual(thisArg);
        });

        on(obj, 'foo', handler, true, thisArg);
        on(obj, 'bar', handler, thisArg, true);
        expect(handler).toHaveBeenCalledTimes(2);
    });

    it('removes all events when off is called with no args', () => {
        on(obj, 'click::x', handler);
        bindNode(obj, 'x', '#child');
        on(obj, 'foo', handler);
        off(obj);
        simulateClick(childNode);
        trigger(obj, 'foo');
        expect(handler).not.toHaveBeenCalled();
    });

    it('triggers once', () => {
        once(obj, 'someevent', handler);
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('allows to pass name-handler object to "once"', () => {
        const handlers = {
            foo: createSpy(),
            bar: createSpy()
        };

        once(obj, handlers);

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);
    });
});
