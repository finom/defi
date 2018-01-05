import domEventReg from '../on/_domeventregexp';
import checkObjectType from '../_helpers/checkobjecttype';
import matreshkaError from '../_helpers/matreshkaerror';
import splitBySpaceReg from '../on/_splitbyspaceregexp';
import defs from '../_core/defs';
import triggerOne from './_triggerone';
import triggerDomEvent from './_triggerdomevent';

// triggers an event
export default function trigger(object, givenNames, ...triggerArgs) {
        // throw error when object type is wrong
        checkObjectType(object, 'trigger');
    let names;

    // allow to use strings only as event name
    if (typeof givenNames === 'string') {
        names = givenNames.split(splitBySpaceReg);
    } else {
        throw matreshkaError('trigger:names_type', { names: givenNames });
    }

    const def = defs.get(object);

    // if no definition do nothing
    if (!def) {
        return object;
    }

    const { events: allEvents } = def;

    if (!allEvents) {
        return object;
    }

    nofn.forEach(names, (name) => {
        const domEvtExecResult = domEventReg.exec(name);

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
