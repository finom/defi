import { useContext } from 'react';

import Context from './Context';

export interface StoreSelector {
    (store: object): object;
}
  

export default function useStore(storeSelector: StoreSelector) {
    const store = useContext(Context);
    if(store.__ERROR__) throw store.__ERROR__;
    return typeof storeSelector === 'function' ? storeSelector(store) : store;
};
