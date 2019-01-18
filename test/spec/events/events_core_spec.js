/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import addListener from 'src/on/_addlistener';
import removeListener from 'src/off/_removelistener';
import triggerOne from 'src/trigger/_triggerone';
import createSpy from '../../helpers/createspy';

describe('Events core (addListener, removeListener, triggerOne)', () => {
    let obj;
    let handler;

    beforeEach(() => {
        obj = {};
        handler = createSpy();
    });

    it('fires', () => {
        addListener(obj, 'someevent', handler);
        triggerOne(obj, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('uses correct context', () => {
        addListener(obj, 'someevent', function handle() {
            expect(obj === this).toEqual(true);
        });
        triggerOne(obj, 'someevent');
    });

    it('avoids conflicts', () => {
        let i = 0;
        // eslint-disable-next-line no-return-assign
        addListener(obj, 'someevent', () => i += 1e0);
        // eslint-disable-next-line no-return-assign
        addListener(obj, 'someevent', () => i += 1e1);
        // eslint-disable-next-line no-return-assign
        addListener(obj, 'someevent', () => i += 1e2);
        triggerOne(obj, 'someevent');

        expect(i).toEqual(111);
    });

    it('removes all', () => {
        addListener(obj, 'someevent', handler);
        removeListener(obj);
        triggerOne(obj, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes by name', () => {
        addListener(obj, 'someevent', handler);
        removeListener(obj, 'someevent');
        triggerOne(obj, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes by callback', () => {
        addListener(obj, 'someevent', handler);
        removeListener(obj, 'someevent', handler);
        triggerOne(obj, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes by callback but keeps when callbacks are not same', () => {
        addListener(obj, 'someevent', handler);
        removeListener(obj, 'someevent', () => {});
        triggerOne(obj, 'someevent');
        expect(handler).toHaveBeenCalled();
    });
});
