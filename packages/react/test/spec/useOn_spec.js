import { renderHook, act } from '@testing-library/react-hooks';
import { trigger } from 'defi';
import { useOn } from '../../npm';
import getWrapper from './getWrapper';

describe('useOn', () => {
    it('Should work', () => {
        const store = {};
        let renderedTimes = 0;

        const { result } = renderHook(() => {
            renderedTimes += 1;
            return useOn(store, 'foo');
        });
        const returnedTrigger = result.current;

        expect(typeof returnedTrigger === 'function').toBeTrue();
        expect(renderedTimes).toBe(1);

        let arg = { a: 'b' };
        act(() => { trigger(store, 'foo', arg); });

        expect(returnedTrigger).toBe(result.current);
        expect(renderedTimes).toBe(2);
        expect(arg).toBe(returnedTrigger.latest);
        expect([arg]).toEqual(returnedTrigger.latestAll);
        act(() => { trigger(store, 'bar', arg); });

        expect(returnedTrigger).toBe(result.current);
        expect(renderedTimes).toBe(2);
        expect(arg).toBe(returnedTrigger.latest);
        expect([arg]).toEqual(returnedTrigger.latestAll);

        arg = { c: 'd' };
        act(() => { trigger(store, 'foo', arg); });

        expect(returnedTrigger).toBe(result.current);
        expect(renderedTimes).toBe(3);
        expect(arg).toBe(returnedTrigger.latest);
        expect([arg]).toEqual(returnedTrigger.latestAll);
    });

    it('Should use store selector', () => {
        const store = { x: { y: 1 } };
        const wrapper = getWrapper(store);
        let renderedTimes = 0;
        const { result } = renderHook(() => {
            renderedTimes += 1;
            return useOn(({ x }) => x, 'foo');
        }, { wrapper });

        const returnedTrigger = result.current;

        expect(renderedTimes).toBe(1);

        const arg = { a: 'b' };
        act(() => { trigger(store.x, 'foo', arg); });

        expect(returnedTrigger).toBe(result.current);
        expect(renderedTimes).toBe(2);
        expect(arg).toBe(returnedTrigger.latest);
        expect([arg]).toEqual(returnedTrigger.latestAll);
        act(() => { trigger(store.x, 'bar', arg); });
    });

    it('Should throw error if store selector is null', () => {
        const { result: { error } } = renderHook(() => useOn(null, 'y'));

        expect(error).toBeTruthy();
    });
});
