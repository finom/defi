import { useEffect, useState, useCallback,
} from 'react';
// @ts-ignore
import { on, off, trigger } from 'defi';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
    (store: object): object;
}
  

export default function useOn(storeSlice: object | StoreSelector, eventName: string) {
    const slice = getStoreSlice(storeSlice);
    const [, forceRender] = useState(0);

    const fire = useCallback((...args: any[]) => {
        return trigger(slice, eventName, ...args);
    }, []);

    useEffect(() => {
        const handler = (...args: any[]) => {
            // @ts-ignore
            fire.latest = args[0];
            // @ts-ignore
            fire.latestAll = args;

            forceRender((f) => f + 1);
        };
        on(slice, eventName, handler);
        return () => { off(slice, eventName, handler); };
    });

    return fire;
};