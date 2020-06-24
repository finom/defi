import { useEffect, useState, useCallback,
} from 'react';
import { on, off, trigger } from 'defi';
import getStoreSlice from './getStoreSlice';
import { StoreSelector } from './types.d';

export default (storeSlice: object | StoreSelector, eventName: string) => {
    const slice = getStoreSlice(storeSlice);

    const fire = useCallback((...args: any[]) => {
        trigger(slice, eventName, ...args);
    }, []);

    useEffect(() => {
        const handler = (...args) => {
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