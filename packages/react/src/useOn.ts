import { useEffect, useState, useCallback,
} from 'react';
import { on, off, trigger } from 'defi';
import getStoreSlice from './getStoreSlice';

export default (storeSlice: object | StoreSelector, eventName: string) => {
    const slice = getStoreSlice(storeSlice);
    const [, forceRender] = useState(0);

    const fire = useCallback((...args: any[]) => {
        return trigger(slice, eventName, ...args);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            // @ts-ignore
            fire.latestEvent = e;
            forceRender((f) => f + 1);
        };
        on(slice, eventName, handler);
        return () => { off(slice, eventName, handler); };
    });

    return fire;
};