import addListener from '../_addlistener';
import changeHandler from './changehandler';

// adds delegated event listener to an object by given path
// TODO Handler uses wrong context
export default function delegateListener(object, givenPath, name, callback, info = {}) {
    // if typeof path is string and path is not empty string then split it
    let path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

    if (!path || !path.length) {
        // if no path then add simple listener
        addListener(object, name, callback, info);
    } else {
        // else do all magic
        const key = path[0];
        let pathStr; // needed for undelegation

        if (path.length > 1) {
            path = nofn.slice(path, 1);
            pathStr = path.join('.');
        } else {
            path = [];
            pathStr = path[0] || '';
        }

        const delegatedData = {
            path,
            name,
            callback,
            info,
            object
        };

        // the event is triggered by "set"
        addListener(object, `_change:delegated:${key}`, evt => changeHandler(evt), {
            delegatedData,
            pathStr
        });

        // call handler manually
        changeHandler({
            value: object[key]
        }, delegatedData);
    }
}
