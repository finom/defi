import defs from '../_core/defs';
import triggerOne from '../trigger/_triggerone';
import domEventReg from '../on/_domeventregexp';
import forEach from '../_helpers/foreach';
import forOwn from '../_helpers/forown';

// removes simple event listener from an object
export default function removeListener(object, name, callback, info) {
    const def = defs.get(object);

    // if no definition do nothing
    if (!def) {
        return false;
    }

    const { events: allEvents } = def;
    const events = allEvents[name];
    const retain = [];
    const noTrigger = name ? name[0] === '_' : false;
    const nameIsString = typeof name === 'string';
    const domEventExecResult = nameIsString ? domEventReg.exec(name) : null;

    if (domEventExecResult) {
        const [, eventName, key, selector] = domEventExecResult;
        // fixing circular reference issue
        const removeDomListenerReq = require('./_removedomlistener');
        const removeDomListener = removeDomListenerReq.default || removeDomListenerReq;
        removeDomListener(object, key, eventName, selector, callback, info);

        return true;
    }

    // if all events need to be removed
    if (typeof name === 'undefined') {
        if (!noTrigger) {
            forOwn(allEvents, (allEventsItem, allEventsName) => {
                forEach(allEventsItem, (event) => {
                    const removeEventData = {
                        allEventsName,
                        callback: event.callback
                    };

                    triggerOne(object, `removeevent:${name}`, removeEventData);
                    triggerOne(object, 'removeevent', removeEventData);
                });
            });
        }

        // restore default value of "events"
        def.events = {};
    } else if (events) {
        // if events with given name are found
        forEach(events, (event) => {
            const argCallback = (callback && callback._callback) || callback;
            const eventCallback = event.callback._callback || event.callback;

            if (argCallback && argCallback !== eventCallback) {
                // keep event
                retain.push(event);
            } else {
                const removeEventData = {
                    name,
                    callback: event.callback
                };

                if (!noTrigger) {
                    if (nameIsString) {
                        triggerOne(object, `removeevent:${name}`, removeEventData);
                    }

                    triggerOne(object, 'removeevent', removeEventData);
                }
            }
        });

        if (retain.length) {
            allEvents[name] = retain;
        } else {
            delete def.events[name];
        }
    }

    return false;
}
