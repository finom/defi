import defiError from './defierror';

// checks type of a variable and throws an error if its type is not an object
export default function checkObjectType(object, method) {
    const typeofObject = object === null ? 'null' : typeof object;

    if (typeofObject !== 'object' && typeofObject !== 'function') {
        throw defiError('common:object_type', {
            object,
            method
        });
    }
}
