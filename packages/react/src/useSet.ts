import { useCallback } from 'react';
// @ts-ignore
import { set } from 'defi';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
  (store: { [key: string]: unknown }): { [key: string]: unknown };
}

export default function useSet(
  storeSlice: { [key: string]: unknown } | StoreSelector,
  key: string,
  options?: { [key: string]: unknown },
): (value: any) => void {
  const slice = getStoreSlice(storeSlice);

  const setValue = useCallback((val) => set(slice, key, val, options), []);

  return setValue;
}
