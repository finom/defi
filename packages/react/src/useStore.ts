import { useContext } from 'react';

import Context from './Context';

export interface StoreSelector {
    (store: Record<string, unknown>): Record<string, unknown>;
}


export default function useStore(storeSelector: StoreSelector): Record<string, unknown> {
  const store = useContext(Context);
  if (store.__ERROR__) throw store.__ERROR__;
  return typeof storeSelector === 'function' ? storeSelector(store) : store;
}
