import domEventReg from '../on/_domeventregexp';
import checkObjectType from '../_helpers/checkobjecttype';
import defs from '../_core/defs';
import triggerOne from './_triggerone';
import triggerDomEvent from './_triggerdomevent';
import forEach from '../_helpers/foreach';

// triggers an event
export default function trigger(object, givenNames, ...triggerArgs) {
    // throw error when object type is wrong
    checkObjectType(object, 'trigger');

    // allow to use either a string or an array of events
    const names = givenNames instanceof Array ? givenNames : [givenNames];

    const def = defs.get(object);

    // if no definition do nothing
    if (!def) {
        return object;
    }

    const { events: allEvents } = def;

    if (!allEvents) {
        return object;
    }

    forEach(names, (name) => {
        const domEvtExecResult = typeof name === 'string' && domEventReg.exec(name);

        if (domEvtExecResult) {
            // if EVT::KEY(SELECTOR) ia passed as event name then trigger DOM event
            const [, eventName, key, selector] = domEvtExecResult;
            triggerDomEvent(object, key, eventName, selector, triggerArgs);
        } else {
            // trigger ordinary event
            triggerOne(object, name, triggerArgs);
        }
    });

    return object;
}
