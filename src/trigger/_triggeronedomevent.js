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

    // matreshkaTriggerArgs will be used in a handler created by addDOMListener
    event.matreshkaTriggerArgs = triggerArgs;

    node.dispatchEvent(event);
}
