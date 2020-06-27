import { useContext } from 'react';

import Context from './Context';

export interface StoreSelector {
    (store: { [key: string]: unknown }): { [key: string]: unknown };
}


export default function useStore(storeSelector?: StoreSelector): { [key: string]: unknown } {
  const store = useContext(Context);
  if (store.__ERROR__) throw store.__ERROR__;
  return typeof storeSelector === 'function' ? storeSelector(store) : store;
}
