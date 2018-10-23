import on from './on';
import checkObjectType from './_helpers/checkobjecttype';
import off from './off';

// adds event listener which will be removed immediately after its first call
export default function once(object, names, givenCallback, context) {
    // throw error when object type is wrong
    checkObjectType(object, 'once');

    const isNamesVarArray = names instanceof Array;

    // allow to pass name-handler object
    if (names && typeof names === 'object' && !isNamesVarArray) {
        nofn.forOwn(names, (namesObjCallback, namesObjName) =>
            once(object, namesObjName, namesObjCallback, givenCallback));
        return object;
    }

    const callback = function onceCallback() {
        givenCallback.apply(this, arguments);
        // remove event listener after its call
        off(object, names, onceCallback, context);
    };

    // allow to remove event listener py passing original callback to "off"
    callback._callback = givenCallback;

    return on(object, names, callback, context);
}
