import { createContext } from 'react';

interface AnyObject { [fieldName: string]: any }
const Context = createContext({ error: new Error('Component isn\'t wrapped by Provider') } as AnyObject);
export const { Provider } = Context;
export default Context;
