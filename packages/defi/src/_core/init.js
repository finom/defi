import defs from './defs';

let objectId = 0;

// this is a common function which associates an object with its defi definition
export default function initDefi(object) {
    let def = defs.get(object);
    if (!def) {
        def = {
            // a property name of "events" object is an event name
            // and a value is an array of event handlers
            events: {
                /* example: {
                    callback: function,
                    name: "example",
                    info: { ...extra data for an event... }
                } */
            },
            // "props" contains special information about properties (getters, setters etc)
            props: {
                /* example: {
                    value: object[key],
                    mediator: null,
                    bindings: [{
                        node,
                        binder,
                        nodeHandler,
                        objectHandler,
                        ...other required info
                    }]
                } */
            },
            id: objectId
        };

        objectId += 1;

        defs.set(object, def);
    }

    return def;
}
