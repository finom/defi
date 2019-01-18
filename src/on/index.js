import splitBySpaceReg from './_splitbyspaceregexp';
import checkObjectType from '../_helpers/checkobjecttype';
import defiError from '../_helpers/defierror';
import off from '../off';
import debounce from '../_helpers/debounce';
import addListener from './_addlistener';
import delegateListener from './_delegatelistener';

// adds event listener
export default function on(object, givenNames, givenCallback, options) {
    // throw error when object type is wrong
    checkObjectType(object, 'on');

    const isNamesVarArray = givenNames instanceof Array;

    // allow to pass name-handler object
    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
        nofn.forOwn(givenNames, (namesObjCallback, namesObjName) =>
            on(object, namesObjName, namesObjCallback, givenCallback, options));
        return object;
    }

    if (typeof givenNames !== 'string' && !isNamesVarArray) {
        throw defiError('on:names_type', { names: givenNames });
    }

    // split by spaces
    // TODO: Array of names passed to on method is a non-documented feature
    const names = isNamesVarArray ? givenNames : givenNames.split(splitBySpaceReg);

    const { triggerOnInit, once, debounce: debounceOption } = options || {};
    let callback;
    if (once) {
        callback = function onceCallback() {
            givenCallback.apply(this, arguments);
            // remove event listener after its call
            off(object, names, onceCallback);
        };

        // allow to remove event listener py passing original callback to "off"
        callback._callback = givenCallback;
    } else if (typeof debounceOption === 'number' || debounceOption === true) {
        callback = debounce(givenCallback, debounceOption === true ? 0 : debounceOption, object);
    } else {
        callback = givenCallback;
    }

    nofn.forEach(names, (name) => {
        const delegatedEventParts = name.split('@');

        if (delegatedEventParts.length > 1) {
            // if @ exists in event name then this is delegated event
            const [path, delegatedName] = delegatedEventParts;
            delegateListener(object, path, delegatedName, callback);
        } else {
            // if not, this is simple event
            addListener(object, name, callback);
        }
    });

    // call callback immediatelly if triggerOnInit is true
    if (triggerOnInit) {
        callback.call(object, options);
    }

    return object;
}
