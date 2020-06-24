import React from 'react';
import { Provider } from '../../npm';

export default (value) => ({ children }) => React.createElement(Provider, { value }, children);
