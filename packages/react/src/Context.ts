import { createContext } from 'react';

const Context = createContext(null as Record<string, unknown>);
export const { Provider } = Context;
export default Context;
