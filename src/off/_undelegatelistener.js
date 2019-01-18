import defs from '../_core/defs';
import removeListener from './_removelistener';

// the function removes internally used events such as _asterisk:add
function detatchDelegatedLogic({
    delegatedEventName,
    pathStr,
    allEvents
}) {
    const retain = [];
    const events = allEvents[delegatedEventName];

    nofn.forEach(events, (event) => {
        // pathStr is assigned to info in delegateListener
        if (event.info.pathStr !== pathStr) {
            retain.push(event);
        }
    });

    if (retain.length) {
        allEvents[delegatedEventName] = retain;
    } else {
        delete allEvents[delegatedEventName];
    }
}

// removes delegated event listener from an object by given path
export default function undelegateListener(object, givenPath, name, callback, info = {}) {
    const def = defs.get(object);

    // if no definition do nothing
    if (!def) {
        return;
    }

    const { events: allEvents } = def;

    let path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

    if (!path || !path.length) {
        // if no path then remove listener
        removeListener(object, name, callback, info);
    } else {
        // else do all magic
        const key = path[0];
        let pathStr;

        if (path.length > 1) {
            path = nofn.slice(path, 1);
            pathStr = path.join('.');
        } else {
            path = [];
            pathStr = path[0] || '';
        }


        const delegatedChangeEvtName = `_change:delegated:${key}`;
        if (allEvents[delegatedChangeEvtName]) {
            detatchDelegatedLogic({
                delegatedEventName: delegatedChangeEvtName,
                pathStr,
                allEvents
            });
        }

        if (typeof object[key] === 'object') {
            undelegateListener(object[key], path, name, callback, info);
        }
    }
}
