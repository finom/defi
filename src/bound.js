import defs from './_core/defs';
import checkObjectType from './_helpers/checkobjecttype';

// the function returns bound node(s)
export default function bound(object, key, { all } = { all: false }) {
    // throw error when object type is wrong
    checkObjectType(object, 'bound');

    // if no key or falsy key is given
    if (!key) {
        return object;
    }

    const def = defs.get(object);
    const propDef = def.props[key];

    let nodes;

    if (propDef) {
        const { bindings } = propDef;
        nodes = (bindings && bindings.map(({ node }) => node)) || [];
    } else {
        nodes = [];
    }

    return all ? nodes : nodes[0] || null;
}
