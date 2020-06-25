import {
  useContext, useEffect, useState, useCallback,
} from 'react';
// @ts-ignore
import { on, off, set } from 'defi';
import Context from './Context';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
  (store: object): object;
}

export default function useChange(storeSlice: object | StoreSelector, key: string) {
  const slice = getStoreSlice(storeSlice);

  const [stateValue, setStateValue] = useState(slice[key]);
  const setValue = useCallback(
    (value) => set(slice, key, value, { fromHook: true }), 
    [slice, key]
  );

  useEffect(() => {
    const changeEventName = `change:${key}`;

    const handler = ({ value }: { value: any }) => {
      setStateValue(value);
    };

    on(slice, changeEventName, handler);

    return () => { off(slice, changeEventName, handler); };
  }, [key, slice]);

  return [stateValue, setValue];
}
