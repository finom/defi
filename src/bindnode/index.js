import initDefi from '../_core/init';
import defineProp from '../_core/defineprop';
import getNodes from './_getnodes';
import createBindingSwitcher from './_createbindingswitcher';
import bindSingleNode from './_bindsinglenode';
import checkObjectType from '../_helpers/checkobjecttype';
import defiError from '../_helpers/defierror';
import addTreeListener from '../on/_addtreelistener';

// initializes binsing between a property of an object to HTML node
export default function bindNode(object, key, node, binder, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'bindNode');

    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
    binder = binder || {}; // eslint-disable-line no-param-reassign

    initDefi(object);

    // throw an error when key is falsy
    if (!key) {
        throw defiError('binding:falsy_key');
    }

    if (key instanceof Array) {
        /*
         * accept array of keys
         * this.bindNode(['a', 'b', 'c'], node)
         */
        nofn.forEach(key, itemKey => bindNode(object, itemKey, node, binder, eventOptions));

        return object;
    }


    if (typeof key === 'object') {
        nofn.forOwn(key, (keyObjValue, keyObjKey) => {
            // binder means eventOptions
            eventOptions = binder; // eslint-disable-line no-param-reassign

            if (
                keyObjValue
                && keyObjValue.constructor === Object
                && 'node' in keyObjValue
            ) {
                // this.bindNode({ key: { node: $(), binder } ) }, { on: 'evt' }, { silent: true });
                bindNode(
                    object, keyObjKey, keyObjValue.node,
                    keyObjValue.binder || node, eventOptions
                );
            } else if (
                keyObjValue
                && keyObjValue.constructor === Array
                && keyObjValue.length
                && keyObjValue[0].constructor === Object
                && 'node' in keyObjValue[0]
            ) {
                // this.bindNode({ key: [{
                //   node: $(),
                //   binder
                // }] ) }, { on: 'evt' }, { silent: true });
                nofn.forEach(keyObjValue, (keyObjValueItem) => {
                    bindNode(
                        object, keyObjKey, keyObjValueItem.node,
                        keyObjValueItem.binder || node, eventOptions
                    );
                });
            } else {
                // this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
                bindNode(object, keyObjKey, keyObjValue, node, eventOptions);
            }
        });

        return object;
    }

    const {
        optional = false,
        exactKey = false
    } = eventOptions;
    const $nodes = getNodes(object, node);

    // check node existence
    if (!$nodes.length) {
        if (optional) {
            return object;
        }

        throw defiError('binding:node_missing', { key, node });
    }

    if (!exactKey) {
        const deepPath = key.split('.');
        const deepPathLength = deepPath.length;

        if (deepPathLength > 1) {
            // handle binding when key arg includes dots (eg "a.b.c.d")
            const bindingSwitcher = createBindingSwitcher({
                object,
                deepPath,
                $nodes,
                binder,
                eventOptions,
                bindNode
            });

            addTreeListener(object, deepPath.slice(0, deepPathLength - 1), bindingSwitcher);

            bindingSwitcher();

            return object;
        }
    }

    const propDef = defineProp(object, key);

    // handle binding for every node separately
    nofn.forEach($nodes, oneNode => bindSingleNode(object, {
        $nodes,
        node: oneNode,
        key,
        eventOptions,
        binder,
        propDef
    }));

    return object;
}
