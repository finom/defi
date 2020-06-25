import { useEffect, useCallback } from 'react';
// @ts-ignore
import { on, off, trigger } from 'defi';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
  (store: Record<string, unknown>): Record<string, unknown>;
}

export default function useTrigger(
  storeSlice: Record<string, unknown> | StoreSelector,
  eventName: string,
): (...args: any) => void {
  const slice = getStoreSlice(storeSlice);

  const fire = useCallback((...args: any[]) => {
    trigger(slice, eventName, ...args);
  }, []);

  useEffect(() => {
    const handler = (...args: any[]) => {
      // @ts-ignore
      fire.latest = args[0];
      // @ts-ignore
      fire.latestAll = args;
    };
    on(slice, eventName, handler);
    return () => { off(slice, eventName, handler); };
  });

  return fire;
}
