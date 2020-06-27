import { createContext } from 'react';

const Context = createContext(null as { [key: string]: unknown });
export const { Provider } = Context;
export default Context;
