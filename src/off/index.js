import splitBySpaceReg from '../on/_splitbyspaceregexp';
import checkObjectType from '../_helpers/checkobjecttype';
import forEach from '../_helpers/foreach';
import forOwn from '../_helpers/forown';
import defs from '../_core/defs';
import removeListener from './_removelistener';
import undelegateListener from './_undelegatelistener';
import $ from '../_mq';

// removes event listener
export default function off(object, givenNames, callback) {
    // throw error when object type is wrong
    checkObjectType(object, 'off');

    const isNamesVarArray = givenNames instanceof Array;
    const def = defs.get(object);

    // allow to pass name-handler object
    // TODO: Name-handler object passed to off method is non-documented feature
    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
        forOwn(givenNames, (namesObjCallback, namesObjName) => off(
            object, namesObjName, namesObjCallback, callback,
        ));
        return object;
    }


    if (!givenNames && !callback) {
        def.events = {};

        forOwn(def.props, ({ bindings }, propName) => {
            if (bindings) {
                forEach(bindings, ({ node }) => {
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

    forEach(names, (name) => {
        const delegatedEventParts = name.split('@');
        if (delegatedEventParts.length > 1) {
            const [path, delegatedName] = delegatedEventParts;
            undelegateListener(object, path, delegatedName, callback);
        } else {
            removeListener(object, name, callback);
        }
    });

    return object;
}
