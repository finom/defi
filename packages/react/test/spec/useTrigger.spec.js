import { renderHook, act } from '@testing-library/react-hooks';
import { trigger, on } from 'defi';
import { useTrigger } from '../../npm';
import getWrapper from './getWrapper';

describe('useTrigger', () => {
  it('Should work', () => {
    const store = {};
    let renderedTimes = 0;
    let triggeredTimes = 0;

    on(store, 'foo', () => { triggeredTimes += 1; });

    const { result } = renderHook(() => {
      renderedTimes += 1;
      return useTrigger(store, 'foo');
    });
    const returnedTrigger = result.current;

    expect(typeof returnedTrigger === 'function').toBeTrue();
    expect(renderedTimes).toBe(1);
    expect(triggeredTimes).toBe(0);

    let arg = { a: 'b' };
    act(() => { trigger(store, 'foo', arg); });

    expect(returnedTrigger).toBe(result.current);
    expect(renderedTimes).toBe(1);
    expect(triggeredTimes).toBe(1);
    expect(arg).toBe(returnedTrigger.latest);
    expect([arg]).toEqual(returnedTrigger.latestAll);
    act(() => { trigger(store, 'bar', arg); });

    expect(returnedTrigger).toBe(result.current);
    expect(renderedTimes).toBe(1);
    expect(triggeredTimes).toBe(1);
    expect(arg).toBe(returnedTrigger.latest);
    expect([arg]).toEqual(returnedTrigger.latestAll);

    arg = { c: 'd' };
    act(() => { trigger(store, 'foo', arg); });

    expect(returnedTrigger).toBe(result.current);
    expect(renderedTimes).toBe(1);
    expect(triggeredTimes).toBe(2);
    expect(arg).toBe(returnedTrigger.latest);
    expect([arg]).toEqual(returnedTrigger.latestAll);
  });

  it('Should use store selector', () => {
    const store = { x: { y: 1 } };
    const wrapper = getWrapper(store);
    let renderedTimes = 0;
    const { result } = renderHook(() => {
      renderedTimes += 1;
      return useTrigger(({ x }) => x, 'foo');
    }, { wrapper });

    const returnedTrigger = result.current;

    expect(renderedTimes).toBe(1);

    const arg = { a: 'b' };
    act(() => { trigger(store.x, 'foo', arg); });

    expect(returnedTrigger).toBe(result.current);
    expect(renderedTimes).toBe(1);
    expect(arg).toBe(returnedTrigger.latest);
    expect([arg]).toEqual(returnedTrigger.latestAll);
  });

  it('Should throw error if store selector is null', () => {
    const { result: { error } } = renderHook(() => useTrigger(null, 'y'));

    expect(error).toBeTruthy();
  });
});
