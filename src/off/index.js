import splitBySpaceReg from '../on/_splitbyspaceregexp';
import checkObjectType from '../_helpers/checkobjecttype';
import defs from '../_core/defs';
import removeListener from './_removelistener';
import undelegateListener from './_undelegatelistener';
import $ from '../_mq';

// removes event listener
export default function off(object, givenNames, callback, context) {
    // throw error when object type is wrong
    checkObjectType(object, 'off');

    const isNamesVarArray = givenNames instanceof Array;
    const def = defs.get(object);

    // allow to pass name-handler object
    // TODO: Name-handler object passed to off method is non-documented feature
    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
        nofn.forOwn(givenNames, (namesObjCallback, namesObjName) =>
            off(object, namesObjName, namesObjCallback, callback));
        return object;
    }


    if (!givenNames && !callback && !context) {
        def.events = {};

        nofn.forOwn(def.props, ({ bindings }, propName) => {
            if (bindings) {
                nofn.forEach(bindings, ({ node }) => {
                    const eventNamespace = def.id + propName;
                    $(node).off(`.${eventNamespace}`);
                });
            }
        });

        return object;
    }

    // TODO: Array of names passed to off method is non-documented feature
    // split by spaces
    const names = isNamesVarArray ? givenNames : givenNames.split(splitBySpaceReg);

    nofn.forEach(names, (name) => {
        const delegatedEventParts = name.split('@');
        if (delegatedEventParts.length > 1) {
            const [path, delegatedName] = delegatedEventParts;
            undelegateListener(object, path, delegatedName, callback, context);
        } else {
            removeListener(object, name, callback, context);
        }
    });

    return object;
}
