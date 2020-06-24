import { useContext } from 'react';

import Context from './Context';
import { StoreSelector } from './types.d';

export default (storeSelector: StoreSelector) => {
    const store = useContext(Context);
    if(store.__ERROR__) throw store.__ERROR__;
    return typeof storeSelector === 'function' ? storeSelector(store) : store;
};
