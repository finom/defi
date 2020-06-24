import { useEffect, useState, useCallback,
} from 'react';
import { set } from 'defi';
import getStoreSlice from './getStoreSlice';

export default (storeSlice: object | StoreSelector, key: string) => {
    const slice = getStoreSlice(storeSlice);

    const setValue = useCallback((val) => {
        return set(slice, key, val);
    }, []);

    return setValue;
};