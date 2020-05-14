// triggers given DOM event on given node
export default function triggerOneDOMEvent({
    node,
    eventName,
    triggerArgs
}) {
    const { Event } = window;
    const event = new Event(eventName, {
        bubbles: true,
        cancelable: true
    });

    // defiTriggerArgs will be used in a handler created by addDOMListener
    event.defiTriggerArgs = triggerArgs;

    node.dispatchEvent(event);
}
