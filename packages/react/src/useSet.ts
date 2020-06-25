import { useCallback } from 'react';
// @ts-ignore
import { set } from 'defi';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
  (store: Record<string, unknown>): Record<string, unknown>;
}

export default function useSet(
  storeSlice: Record<string, unknown> | StoreSelector,
  key: string,
  options?: Record<string, unknown>,
): (value: any) => void {
  const slice = getStoreSlice(storeSlice);

  const setValue = useCallback((val) => set(slice, key, val, options), []);

  return setValue;
}
