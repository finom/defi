import { useEffect, useState, useCallback } from 'react';
// @ts-ignore
import { on, off, set } from 'defi';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
  (store: { [key: string]: unknown }): { [key: string]: unknown };
}

export default function useChange(
  storeSlice: { [key: string]: unknown } | StoreSelector,
  key: string,
): [any, (value: any) => void] {
  const slice = getStoreSlice(storeSlice);

  const [stateValue, setStateValue] = useState(slice[key]);
  const setValue = useCallback(
    (value) => set(slice, key, value, { fromHook: true }),
    [slice, key],
  );

  useEffect(() => {
    const changeEventName = `change:${key}`;

    const handler = () => {
      setStateValue(slice[key]);
    };

    if (slice[key] !== stateValue) {
      handler();
    }

    on(slice, changeEventName, handler);

    return () => { off(slice, changeEventName, handler); };
  }, [key, slice]);

  return [stateValue, setValue];
}
