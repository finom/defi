import initDefi from '../_core/init';
import triggerOne from '../trigger/_triggerone';
import defineProp from '../_core/defineprop';
import domEventReg from './_domeventregexp';

// property modifier event regexp
// eslint-disable-next-line max-len
const propModEventReg = /^_change:deps:|^_change:bindings:|^_change:delegated:|^_change:common:|^_change:tree:|^change:|^beforechange:/;

// adds simple event listener
// used as core of event engine
export default function addListener(object, name, callback, info = {}) {
    const { events: allEvents } = initDefi(object);
    const events = allEvents[name];
    const event = {
        callback, name, info
    };
    const nameIsString = typeof name === 'string';

    // skipChecks is used by internal methods for better performance
    const { skipChecks = false } = info;

    if (!skipChecks) {
        const domEventExecResult = nameIsString && domEventReg.exec(name);

        if (domEventExecResult) {
            const [, eventName, key, selector] = domEventExecResult;
            // fixing circular reference issue
            const addDomListenerReq = require('./_adddomlistener');
            const addDomListener = addDomListenerReq.default || addDomListenerReq;
            addDomListener(object, key, eventName, selector, callback, info);

            return true;
        }
    }

    // if there are events with the same name
    if (events) {
        if (!skipChecks) {
            // if there are events with the same data, return false
            for (let i = 0; i < events.length; i++) {
                const existingEvent = events[i];
                const argCallback = (callback && callback._callback) || callback;
                const eventCallback = existingEvent.callback._callback || existingEvent.callback;
                if (argCallback === eventCallback) {
                    return false;
                }
            }
        }

        // if the event isn't found add it to the event list
        events.push(event);
    } else {
        // if there are no events with the same name, create an array with only  one event
        allEvents[name] = [event];
    }

    if (nameIsString && propModEventReg.test(name)) {
        // define needed accessors for KEY
        defineProp(object, name.replace(propModEventReg, ''));
    }

    // names prefixed by underscore mean "private" events
    if (!skipChecks && name[0] !== '_') {
        if (nameIsString) {
            triggerOne(object, `addevent:${name}`, event);
        }

        triggerOne(object, 'addevent', event);
    }

    // if event is added successfully return true
    return true;
}
