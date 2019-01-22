import defs from './defs';
import set from '../set';

// the function defines needed descriptor for given property
export default function defineProp(object, key) {
    const def = defs.get(object);

    // if no object definition do nothing
    if (!def) {
        return null;
    }

    const currentPropDef = def.props[key];

    // if a property isn't yet enabled for defi
    if (!currentPropDef) {
        const descriptor = {
            configurable: true,
            enumerable: true,
            get() {
                return propDef.value;
            },
            set(v) {
                return set(object, key, v, {
                    fromSetter: true
                });
            }
        };
        const propDef = def.props[key] = {
            value: object[key],
            mediator: null,
            bindings: null,
            descriptor
        };

        Object.defineProperty(object, key, descriptor);
    } else if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // the following block is made to re-attach the descriptor
        // if it was re-set by another library
        // example https://github.com/babel/babel/issues/9388
        const { get, set: setter, configurable } = Object.getOwnPropertyDescriptor(object, key);
        const { descriptor } = currentPropDef;

        // if current descriptor isn't equal to one attached by defi and if it's still configurable
        if ((get !== descriptor.get || setter !== descriptor.set) && configurable) {
            // restore property value before updating its descriptor
            currentPropDef.value = object[key];
            Object.defineProperty(object, key, currentPropDef.descriptor);
        }
    }

    return def.props[key];
}
