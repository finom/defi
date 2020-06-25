import { useEffect, useState, useCallback,
} from 'react';
// @ts-ignore
import { set } from 'defi';
import getStoreSlice from './getStoreSlice';

export interface StoreSelector {
  (store: object): object;
}
  

export default function useSet (storeSlice: object | StoreSelector, key: string) {
    const slice = getStoreSlice(storeSlice);

    const setValue = useCallback((val) => {
        return set(slice, key, val);
    }, []);

    return setValue;
};