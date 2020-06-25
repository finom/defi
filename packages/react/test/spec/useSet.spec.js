import { renderHook, act } from '@testing-library/react-hooks';
import { useSet } from '../../npm';
import getWrapper from './getWrapper';

describe('useSet', () => {
  it('Should work', () => {
    const store = { x: 1 };
    let renderedTimes = 0;
    const { result, rerender } = renderHook(() => {
      renderedTimes += 1;
      return useSet(store, 'x');
    });

    const returnedSet = result.current;
    expect(typeof result.current === 'function').toBeTrue();
    expect(store.x).toBe(1);
    expect(renderedTimes).toBe(1);

    act(() => { result.current(2); });

    expect(store.x).toBe(2);
    expect(renderedTimes).toBe(1);
    expect(returnedSet).toBe(result.current);

    rerender();

    expect(store.x).toBe(2);
    expect(renderedTimes).toBe(2);
    expect(returnedSet).toBe(result.current);
  });

  it('Should use store selector', () => {
    const store = { x: { y: 1 } };
    const wrapper = getWrapper(store);
    let renderedTimes = 0;
    const { result } = renderHook(() => {
      renderedTimes += 1;
      return useSet(({ x }) => x, 'y');
    }, { wrapper });

    expect(typeof result.current === 'function').toBeTrue();
    expect(store.x.y).toBe(1);
    expect(renderedTimes).toBe(1);

    act(() => { result.current(2); });

    expect(store.x.y).toBe(2);
    expect(renderedTimes).toBe(1);
  });

  it('Should throw error if store selector is null', () => {
    const { result: { error } } = renderHook(() => useSet(null, 'y'));

    expect(error).toBeTruthy();
  });
});
