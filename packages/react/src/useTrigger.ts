import { useEffect, useState, useCallback,
} from 'react';
// @ts-ignore
import { on, off, trigger } from 'defi';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
  (store: object): object;
}
  

export default function useTrigger(storeSlice: object | StoreSelector, eventName: string) {
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
};