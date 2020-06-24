type objectLike = object | (() => any);

type eventCallback = (AnyObject, ...args: any[]) => void;

interface EvtNameHandlerObject {
    [name: string]: eventCallback
}

interface BinderCallbackData {
    node: Element, 
    $nodes: Element[],
}

interface BindingsObject {
    [name: string]: { node: Node, binder?: Binder }
}

type Node = string | Element | Element[];

interface Binder {
    on?: string, 
    getValue?: (data: BinderCallbackData) => any,
    setValue?: (data: BinderCallbackData) => void,
    initialize?: (data: BinderCallbackData) => void,
    destroy?: (data: BinderCallbackData) => void,
}

interface AnyObject { [fieldName: string]: any }

declare module 'defi' {
    export function on(
        obj: objectLike,
        names: string | string[],
        callback: eventCallback,
        options?: object,
    ): objectLike;

    export function on(
        obj: objectLike,
        evtNameHandlerObject: EvtNameHandlerObject,
        options?: object,
    ): objectLike;

    export function off(
        obj: objectLike,
        names?: string | string[],
        callback?: eventCallback,
    ): objectLike;

    export function trigger(
        obj: objectLike,
        name: string,
        ...args: any[],
    )

    export function set(
        obj: objectLike,
        key: string,
        value: any,
        eventOptions?: object,
    )

    export function set(
        obj: objectLike,
        keyValuePairs: { [key: string]: any },
        eventOptions?: object,
    )

    export function bindNode(
        obj: objectLike,
        key: string,
        node: Node,
        binder?: Binder,
        eventOptions?: object,
    );

    export function bindNode(
        obj: objectLike,
        bindings: BindingsObject,
        binder?: Binder,
        eventOptions?: object,
    );

    export function bound(
        obj: objectLike,
        key: string,
        options?: { all?: boolean },
    );

    export function unbindNode(
        obj: objectLike,
        key?: string | null,
        node?: Node,
        eventOptions?: object,
    );

    export function unbindNode(
        obj: objectLike,
        bindings: BindingsObject,
        eventOptions?: object,
    );

    export function calc();
    export function mediate();
    export function chain();
    export function lookForBinder();
    export function remove();
    export function defaultBinders();
    
}
