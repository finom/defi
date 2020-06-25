declare module 'defi' {
    type objectLike = object | (() => any);

    type eventCallback = (arg0: AnyObject, ...args: any[]) => void;

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

    interface SetMethodOptions {
        skipMediator?: boolean,
        define?: boolean,
        force?: boolean,
        forceHTML?: boolean,
        silent?: boolean,
        silentHTML?: boolean,
        skipCalc?: boolean,
        [name: string]: any,
    }

    interface BindNodeMethodOptions {
        optional?: boolean,
        exactKey?: boolean,
        silent?: boolean,
        getValueOnBind?: boolean,
        setValueOnBind?: boolean,
        debounceSetValue?: boolean,
        debounceGetValue?: boolean,
        debounceSetValueOnBind?: boolean,
        debounceGetValueOnBind?: boolean,
        debounceSetValueDelay?: number
        debounceGetValueDelay?: number,
        useExactBinder?: boolean,
        [name: string]: any,
    }

    interface UnbindNodeMethodOptions {
        deep?: boolean,
        silent?: boolean,
        [name: string]: any,
    }

    interface OnMethodOptions {
        triggerOnInit?: boolean,
        once?: boolean,
        debounce?: boolean | number,
    }

    interface CalcMethodOptions {
        setOnInit?: boolean,
        debounceCalcOnInit?: boolean,
        debounceCalc?: boolean,
        debounceCalcDelay?: number,
    }

    interface Binder {
        on?: string, 
        getValue?: (data: BinderCallbackData) => any,
        setValue?: (data: BinderCallbackData) => void,
        initialize?: (data: BinderCallbackData) => void,
        destroy?: (data: BinderCallbackData) => void,
    }

    interface CalcObjectKeySource {
        object: objectLike,
        key: string | string[],
    }

    interface CalcBatchArg {
        [key: string]: {
            source: CalcSource,
            options: CalcMethodOptions,
            handler: (...args: any[]) => any,
        }
    }

    type CalcSource = string | string[] | CalcObjectKeySource | CalcObjectKeySource[];

    interface AnyObject { 
        [fieldName: string]: any,
    }

    export function on(
        obj: objectLike,
        names: string | string[],
        callback: eventCallback,
        options?: OnMethodOptions,
    ): objectLike;

    export function on(
        obj: objectLike,
        evtNameHandlerObject: EvtNameHandlerObject,
        options?: OnMethodOptions,
    ): objectLike;

    export function off(
        obj: objectLike,
        names?: string | string[],
        callback?: eventCallback,
    ): objectLike;

    export function trigger(
        obj: objectLike,
        name: string,
        ...args: any[]
    ): objectLike

    export function set(
        obj: objectLike,
        key: string,
        value: any,
        eventOptions?: SetMethodOptions,
    ): objectLike

    export function set(
        obj: objectLike,
        keyValuePairs: { [key: string]: any },
        eventOptions?: SetMethodOptions,
    ): objectLike;

    export function bindNode(
        obj: objectLike,
        key: string,
        node: Node,
        binder?: Binder,
        eventOptions?: BindNodeMethodOptions,
    ): objectLike;

    export function bindNode(
        obj: objectLike,
        bindings: BindingsObject,
        binder?: Binder,
        eventOptions?: BindNodeMethodOptions,
    ): objectLike;

    export function bound(
        obj: objectLike,
        key: string,
        options?: { all?: boolean },
    ): objectLike;

    export function unbindNode(
        obj: objectLike,
        key?: string | null,
        node?: Node,
        eventOptions?: UnbindNodeMethodOptions,
    ): objectLike;

    export function unbindNode(
        obj: objectLike,
        bindings: BindingsObject,
        eventOptions?: UnbindNodeMethodOptions,
    ): objectLike;

    export function calc(
        obj: objectLike,
        targetKey: string,
        source: CalcSource,
        handler: (...args: any[]) => any,
        options?: CalcMethodOptions,
    ): objectLike;

    export function calc(
        obj: objectLike,
        batch: CalcBatchArg,
        options?: CalcMethodOptions,
    ): objectLike;


    export function mediate(
        obj: objectLike,
        key: string | string[],
        mediator: (value: any) => any,
    ): objectLike;

    export function mediate(
        obj: objectLike,
        keyValuePairs: { [key: string]: any },
    ): objectLike;

    export function lookForBinder(node: Node): Binder | undefined;

    export function remove(
        obj: objectLike,
        key: string | string[],
        options?: { 
            silent?: boolean,
            [name: string]: any,
        }
    ): objectLike;

    export const defaultBinders: { (node: Node): Binder; } [];

    // TODO declare
    export function chain(
        obj: objectLike,
    ): object;
}
