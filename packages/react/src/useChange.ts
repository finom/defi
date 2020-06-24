import {
  useContext, useEffect, useState, useCallback,
} from 'react';
import { on, off, set } from 'defi';
import Context from './Context';
import getStoreSlice from './getStoreSlice';


export default (storeSlice: object | StoreSelector, key: string) => {
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

  /*

  if (!storeObject) {
    throw new Error('Can\'t find store');
  }

  // @ts-ignore
  const store: object = storeObject!;
  const key: string = storeKey!;

  if (!(key in store)) {
    throw new Error(`useChange hook unable to find object property "${key}"`);
  }

  const [stateValue, setStateValue] = useState(store[key]);
  const setValue = useCallback((value) => {
    store[key] = value;
  }, [store, key]);

  useEffect(() => {
    const changeEventName = `change:${key}`;

    const handler = ({ value }: { value: any }) => {
      setStateValue(value);
    };

    on(store, changeEventName, handler);

    return () => { off(store, changeEventName, handler); };
  }, [key, store]);

  return [stateValue, setValue]; */
};

// ??? useBind('key', ref)

// useChange(useStore().foo, path);
// useSet();
// useOn(useStore(), 'foo:bar');

/*
  store = useStore()
  [value, set] = useChange([store], key);
  set = useSet([store], key);
  trigger = useOn([store], 'foo:bar');
  trigger = useTrigger([store], 'foo:bar');
  <DefiProvider></DefiProvider>
  DefiContext
  */
