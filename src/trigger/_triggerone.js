import defs from '../_core/defs';

// triggers one event
export default function triggerOne(object, name, triggerArgs) {
    const def = defs.get(object);
    const events = def && def.events[name];

    if (events) {
        const l = events.length;
        let i = 0;

        // allow to pass both array of args and single arg as triggerArgs
        if (triggerArgs instanceof Array) {
            while (i < l) {
                const event = triggerOne.latestEvent = events[i];
                const { callback } = event;
                callback.apply(object, triggerArgs);
                i += 1;
            }
        } else {
            while (i < l) {
                const event = triggerOne.latestEvent = events[i];
                const { callback } = event;
                callback.call(object, triggerArgs);
                i += 1;
            }
        }
    }
}

// latestEvent is used as required hack in somemethods
triggerOne.latestEvent = {
    info: {},
    name: null
};
