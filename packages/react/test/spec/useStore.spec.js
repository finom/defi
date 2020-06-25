import { renderHook } from '@testing-library/react-hooks';
import { useStore } from '../../npm';
import getWrapper from './getWrapper';

describe('useStore', () => {
  it('Should work', () => {
    const store = { x: 1 };
    const wrapper = getWrapper(store);
    const { result } = renderHook(() => useStore(), { wrapper });

    expect(result.current).toBe(store);
  });

  it('Should use store selector', () => {
    const store = { x: { y: 1 } };
    const wrapper = getWrapper(store);
    const { result } = renderHook(() => useStore(({ x }) => x), { wrapper });

    expect(result.current).toBe(store.x);
  });

  it('Should throw error if not wrapped by a provider', () => {
    const { result: { error } } = renderHook(() => useStore());

    expect(error).toBeTruthy();
  });
});
