import checkObjectType from '../_helpers/checkobjecttype';
import off from '../off';
import debounce from '../_helpers/debounce';
import forEach from '../_helpers/foreach';
import forOwn from '../_helpers/forown';
import addListener from './_addlistener';
import delegateListener from './_delegatelistener';

// adds event listener
export default function on(object, givenNames, givenCallback, options) {
    // throw error when object type is wrong
    checkObjectType(object, 'on');

    const isNamesVarArray = givenNames instanceof Array;

    // allow to pass name-handler object
    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
        forOwn(givenNames, (namesObjCallback, namesObjName) => on(
            object, namesObjName, namesObjCallback, givenCallback, options,
        ));
        return object;
    }

    // convert a single event name into array
    const names = isNamesVarArray ? givenNames : [givenNames];

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

    forEach(names, (name) => {
        const delegatedEventParts = typeof name === 'string' && name.split('@');

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
