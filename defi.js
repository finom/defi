/*
    --------------------------------------------------------------
    Matreshka.js v0.0.9 (Fri, 06 Apr 2018 22:52:34 GMT)
    JavaScript Framework by Andrey Gubanov http://github.com/finom
    Released under the MIT license
    More info: https://matreshka.io
    --------------------------------------------------------------
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["defi"] = factory();
	else
		root["defi"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function PseudoMap() {}

// PseudoMap simulates WeakMap behavior with O(1) search complexity
// it's needed to support @IE9 and @IE10
var _result = PseudoMap.prototype;

for (var _source2 = {
    get: function (obj) {
        return obj.defi;
    },
    set: function (obj, data) {
        Object.defineProperty(obj, 'defi', {
            value: data,
            enumerable: false,
            writable: false,
            configurable: false
        });
    },
    has: function (obj) {
        return ('defi' in obj);
    }
}, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
    _key2 = _keys2[_i2];
    _result[_key2] = _source2[_key2];
}

module.exports = typeof WeakMap === 'undefined' ? new PseudoMap() : new WeakMap();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defiError = __webpack_require__(3);

// checks type of a variable and throws an error if its type is not an object
module.exports = checkObjectType;
function checkObjectType(object, method) {
    var typeofObject = object === null ? 'null' : typeof object;

    if (typeofObject !== 'object' && typeofObject !== 'function') {
        throw defiError('common:object_type', {
            object: object,
            method: method
        });
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

// triggers one event
module.exports = triggerOne;
function triggerOne(object, name, triggerArgs) {
    var def = defs.get(object);
    var events = def && def.events[name];

    if (events) {
        var l = events.length;
        var i = 0;

        // allow to pass both array of args and single arg as triggerArgs
        if (triggerArgs instanceof Array) {
            while (i < l) {
                var event = triggerOne.latestEvent = events[i];
                var callback = event.callback,
                    ctx = event.ctx;

                callback.apply(ctx, triggerArgs);
                i += 1;
            }
        } else {
            while (i < l) {
                var _event = triggerOne.latestEvent = events[i];
                var _callback = _event.callback,
                    _ctx = _event.ctx;

                _callback.call(_ctx, triggerArgs);
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable prefer-template, max-len */
var bindingErrorPrefix = 'Binding error:';
var calcErrorPrefix = 'Calc error:';
var eventsErrorPrefix = 'Events error:';

var getType = function (variable) {
    if (variable === null) {
        return 'null';
    }

    return typeof variable;
};
var getTypeError = function (variable, variableName, expectedType) {
    return variableName + ' must have type "' + expectedType + '" but got "' + getType(variable) + '" instead.';
};

var errors = {
    'common:object_type': function (_ref) {
        var object = _ref.object,
            method = _ref.method;
        return 'Error in ' + method + ': ' + getTypeError(object, 'object', 'object');
    },

    'binding:node_missing': function (_ref2) {
        var key = _ref2.key,
            node = _ref2.node;

        var selectorInfo = typeof node === 'string' ? ' (given selector is "' + node + '")' : '';
        return bindingErrorPrefix + ' node is missing for key "' + key + '"' + selectorInfo + '.';
    },
    'binding:falsy_key': function () {
        return bindingErrorPrefix + ' "key" arg cannot be falsy';
    },
    'binding:instance_nodes_missing': function (_ref3) {
        var $nodes = _ref3.$nodes;

        var missing = !$nodes ? '$nodes' : 'nodes';
        return bindingErrorPrefix + ' "' + missing + '" property of Matreshka instance is missing.' + ' It must be an object and must not be reassigned.';
    },
    'calc:target_type': function (_ref4) {
        var target = _ref4.target;
        return calcErrorPrefix + ' ' + getTypeError(target, 'target key', 'string');
    },
    'calc:source_key_type': function (_ref5) {
        var sourceKey = _ref5.sourceKey;
        return calcErrorPrefix + ' ' + getTypeError(sourceKey, 'source key', 'string');
    },
    'calc:source_object_type': function (_ref6) {
        var sourceObject = _ref6.sourceObject;
        return calcErrorPrefix + ' ' + getTypeError(sourceObject, 'source object', 'object');
    },
    'calc:source_type': function (_ref7) {
        var source = _ref7.source;
        return calcErrorPrefix + ' ' + getTypeError(source, 'source', 'object');
    },

    'trigger:names_type': function (_ref8) {
        var names = _ref8.names;
        return eventsErrorPrefix + ' ' + getTypeError(names, 'event name', 'string');
    },

    'on:names_type': function (_ref9) {
        var names = _ref9.names;
        return errors['trigger:names_type']({ names: names });
    },

    'removedatakeys:key_type': function (_ref10) {
        var key = _ref10.key;
        return 'Error in removeDataKeys: ' + getTypeError(key, 'key', 'string');
    },

    'adddatakeys:key_type': function (_ref11) {
        var key = _ref11.key;
        return 'Error in addDataKeys: ' + getTypeError(key, 'key', 'string');
    },

    'remove:key_type': function (_ref12) {
        var key = _ref12.key;
        return 'Error in remove: ' + getTypeError(key, 'key', 'string');
    },

    'mediate:key_type': function (_ref13) {
        var key = _ref13.key;
        return 'Error in mediate: ' + getTypeError(key, 'key', 'string');
    }
};

module.exports = defiError;
function defiError(key, data) {
    var getError = errors[key];
    if (!getError) {
        throw Error('Unknown error "' + key + '". Please report about this on Github.');
    }

    return new Error(getError(data));
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var triggerOne = __webpack_require__(2);

var domEventReg = __webpack_require__(16);

// removes simple event listener from an object
module.exports = removeListener;
function removeListener(object, name, callback, context, info) {
    var def = defs.get(object);

    // if no definition do nothing
    if (!def) {
        return false;
    }

    var allEvents = def.events;

    var events = allEvents[name];
    var retain = [];
    var noTrigger = name ? name[0] === '_' : false;
    var domEventExecResult = domEventReg.exec(name);

    if (domEventExecResult) {
        var eventName = domEventExecResult[1],
            key = domEventExecResult[2],
            selector = domEventExecResult[3];
        // fixing circular reference issue

        var removeDomListener = __webpack_require__(50);

        removeDomListener(object, key, eventName, selector, callback, context, info);

        return true;
    }

    // if all events need to be removed
    if (typeof name === 'undefined') {
        if (!noTrigger) {
            for (var _target2 = allEvents, _keys = Object.keys(_target2), _i = 0, allEventsName, allEventsItem, _l2 = _keys.length; (allEventsName = _keys[_i], allEventsItem = _target2[allEventsName]), _i < _l2; _i++) {
                for (var _target = allEventsItem, _index = 0, event, _l = _target.length; event = _target[_index], _index < _l; _index++) {
                    var removeEventData = {
                        allEventsName: allEventsName,
                        callback: event.callback,
                        context: event.context
                    };

                    triggerOne(object, 'removeevent:' + name, removeEventData);
                    triggerOne(object, 'removeevent', removeEventData);
                }
            }
        }

        // restore default value of "events"
        def.events = {};
    } else if (events) {
        for (var _target3 = events, _index2 = 0, event, _l3 = _target3.length; event = _target3[_index2], _index2 < _l3; _index2++) {
            var argCallback = callback && callback._callback || callback;
            var eventCallback = event.callback._callback || event.callback;

            if (argCallback && argCallback !== eventCallback || context && context !== event.context) {
                // keep event
                retain.push(event);
            } else {
                var _removeEventData = {
                    name: name,
                    callback: event.callback,
                    context: event.context
                };

                if (!noTrigger) {
                    triggerOne(object, 'removeevent:' + name, _removeEventData);
                    triggerOne(object, 'removeevent', _removeEventData);
                }
            }
        }
        // if events with given name are found


        if (retain.length) {
            allEvents[name] = retain;
        } else {
            delete def.events[name];
        }
    }

    return false;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Init = __webpack_require__(15);

var parseHTML = __webpack_require__(57);

var on = __webpack_require__(56);

var off = __webpack_require__(55);

var add = __webpack_require__(54);

var assign = __webpack_require__(53);

// tiny jQuery replacement for Matreshka
// mq previously called balalaika.js
module.exports = mq;
function mq(selector, context) {
    return new Init(selector, context);
}

mq.parseHTML = parseHTML;

assign(Init.prototype, {
    on: on,
    off: off,
    add: add
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var triggerOne = __webpack_require__(2);

var checkObjectType = __webpack_require__(1);

var is = __webpack_require__(24);

// the function sets new value for a property
// since its performance is very critical we're checking events existence manually
module.exports = set;
function set(object, key, value, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'set');

    // if no key or falsy key is given
    if (!key) {
        return object;
    }

    // allow to use key-value object as another method variation
    if (typeof key === 'object') {
        for (var _target = key, _keys = Object.keys(_target), _i = 0, objKey, objVal, _l = _keys.length; (objKey = _keys[_i], objVal = _target[objKey]), _i < _l; _i++) {
            set(object, objKey, objVal, value)
        }

        return object;
    }

    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
    var def = defs.get(object);

    // if no object definition then make simple assignment
    if (!def) {
        object[key] = value;
        return object;
    }

    var props = def.props,
        events = def.events;

    var propDef = props[key];

    // if no property definition then make simple assignment
    if (!propDef) {
        object[key] = value;
        return object;
    }

    var previousValue = propDef.value,
        mediator = propDef.mediator;

    // possible flags, all of them are falsy by default

    var _eventOptions = eventOptions,
        skipMediator = _eventOptions.skipMediator,
        fromMediator = _eventOptions.fromMediator,
        force = _eventOptions.force,
        forceHTML = _eventOptions.forceHTML,
        silent = _eventOptions.silent,
        silentHTML = _eventOptions.silentHTML,
        skipCalc = _eventOptions.skipCalc;


    var newValue = void 0;

    if (mediator && !is(value, previousValue) && !skipMediator && !fromMediator) {
        newValue = mediator(value);
    } else {
        newValue = value;
    }

    var isChanged = !is(newValue, previousValue);

    // add to eventOptions object some useful properties
    // we override default eventOptions because some of the properties need to have actual values,
    // not inherited ones (eg when calc is used)

    var _keys2,
        _l2,
        _i2,
        _source,
        _key,
        _result = {};

    for (_source = eventOptions, _keys2 = Object.keys(_source), _l2 = _keys2.length, _i2 = 0; _i2 < _l2; _i2++) {
        _key = _keys2[_i2];
        _result[_key] = _source[_key];
    }

    _result.value = newValue
    _result.self = object
    _result.previousValue = previousValue
    _result.key = key
    _result.isChanged = isChanged
    var extendedEventOptions = _result;

    var triggerChange = (isChanged || force) && !silent;

    // trigger beforechange:KEY and beforechange events
    if (triggerChange) {
        var beforechangeStr = 'beforechange';
        var beforechangeEventName = beforechangeStr + ':' + key;

        if (events[beforechangeEventName]) {
            triggerOne(object, beforechangeEventName, extendedEventOptions);
        }

        if (events[beforechangeStr]) {
            triggerOne(object, beforechangeStr, extendedEventOptions);
        }
    }

    propDef.value = newValue;

    // triger bindings
    if (!silentHTML && (isChanged || forceHTML)) {
        var changeBindingsEventName = '_change:bindings:' + key;
        if (events[changeBindingsEventName]) {
            triggerOne(object, changeBindingsEventName, extendedEventOptions);
        }
    }

    // trigger change:KEY and change events
    if (triggerChange) {
        var changeStr = 'change';
        var changeEventName = changeStr + ':' + key;
        if (events[changeEventName]) {
            triggerOne(object, changeEventName, extendedEventOptions);
        }

        if (events[changeStr]) {
            triggerOne(object, changeStr, extendedEventOptions);
        }
    }

    // trigger dependencies made by calc method
    if ((isChanged || force) && !skipCalc) {
        var changeDepsEventName = '_change:deps:' + key;
        if (events[changeDepsEventName]) {
            triggerOne(object, changeDepsEventName, extendedEventOptions);
        }
    }

    if (isChanged) {
        // trigger common delegated events logic
        var changeDelegatedKeyEventName = '_change:delegated:' + key;
        if (events[changeDelegatedKeyEventName]) {
            triggerOne(object, changeDelegatedKeyEventName, extendedEventOptions);
        }

        // trigger tree change events logic
        var changeTreeEventName = '_change:tree:' + key;
        if (events[changeTreeEventName]) {
            triggerOne(object, changeTreeEventName, extendedEventOptions);
        }

        // trigger other internal change events
        var changeCommonEventName = '_change:common:' + key;
        if (events[changeCommonEventName]) {
            triggerOne(object, changeCommonEventName, extendedEventOptions);
        }

        // trigger delegated logic for asterisk events (*.*.*@foo)
        // TODO: Confusing events names ("_change:delegated", "_change:common:KEY" etc)
        var changeDelegatedEventName = '_change:delegated';
        if (events[changeDelegatedEventName]) {
            triggerOne(object, changeDelegatedEventName, extendedEventOptions);
        }
    }

    return object;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var set = __webpack_require__(6);

// the function defines needed descriptor for given property
module.exports = defineProp;
function defineProp(object, key, noAccessor) {
    var def = defs.get(object);

    // if no object definition do nothing
    if (!def) {
        return null;
    }

    if (!def.props[key]) {
        var propDef = def.props[key] = {
            value: object[key],
            mediator: null,
            bindings: null
        };

        if (!noAccessor) {
            Object.defineProperty(object, key, {
                configurable: true,
                enumerable: true,
                get: function () {
                    return propDef.value;
                },
                set: function (v) {
                    return set(object, key, v, {
                        fromSetter: true
                    });
                }
            });
        }
    }

    return def.props[key];
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var objectId = 0;

// this is common function which associates an object with its Matreshka definition
module.exports = initMK;
function initMK(object) {
    var def = defs.get(object);
    if (!def) {
        def = {
            // a property name of "events" object is an event name
            // and a value is an array of event handlers
            events: {
                /* example: {
                    callback: function,
                    ctx: object,
                    context: object2,
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initMK = __webpack_require__(8);

var triggerOne = __webpack_require__(2);

var defineProp = __webpack_require__(7);

var domEventReg = __webpack_require__(16);

// property modifier event regexp
var propModEventReg // eslint-disable-next-line max-len
= /^_change:deps:|^_change:bindings:|^_change:delegated:|^_change:common:|^_change:tree:|^change:|^beforechange:/;

// adds simple event listener
// used as core of event engine
module.exports = addListener;
function addListener(object, name, callback, context) {
    var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    var _initMK = initMK(object),
        allEvents = _initMK.events;

    var ctx = context || object;
    var events = allEvents[name];
    var event = {
        callback: callback, context: context, ctx: ctx, name: name, info: info
    };
    // skipChecks is used by internal methods for better performance
    var _info$skipChecks = info.skipChecks,
        skipChecks = _info$skipChecks === undefined ? false : _info$skipChecks;


    if (!skipChecks) {
        var domEventExecResult = domEventReg.exec(name);

        if (domEventExecResult) {
            var eventName = domEventExecResult[1],
                key = domEventExecResult[2],
                selector = domEventExecResult[3];
            // fixing circular reference issue

            var addDomListener = __webpack_require__(58);

            addDomListener(object, key, eventName, selector, callback, context, info);

            return true;
        }
    }

    // if there are events with the same name
    if (events) {
        if (!skipChecks) {
            // if there are events with the same data, return false
            for (var i = 0; i < events.length; i++) {
                var existingEvent = events[i];
                var argCallback = callback && callback._callback || callback;
                var eventCallback = existingEvent.callback._callback || existingEvent.callback;
                if (argCallback === eventCallback && existingEvent.context === context) {
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

    if (propModEventReg.test(name)) {
        // define needed accessors for KEY
        defineProp(object, name.replace(propModEventReg, ''));
    }

    // names prefixed by underscore mean "private" events
    if (!skipChecks && name[0] !== '_') {
        triggerOne(object, 'addevent:' + name, event);
        triggerOne(object, 'addevent', event);
    }

    // if event is added successfully return true
    return true;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for input element based on its type
module.exports = input;
function input(type) {
    var on = void 0;
    switch (type) {
        case 'checkbox':
            return {
                on: 'click keyup',
                getValue: function () {
                    return this.checked;
                },
                setValue: function (value) {
                    this.checked = value;
                }
            };
        case 'radio':
            return {
                on: 'click keyup',
                getValue: function () {
                    return this.value;
                },
                setValue: function (value) {
                    this.checked = typeof value !== 'undefined' && this.value === value;
                }
            };
        case 'submit':
        case 'button':
        case 'image':
        case 'reset':
            return {};
        case 'hidden':
            on = null;
            break;
        case 'file':
            on = 'change';
            break;

        /*
        case 'text':
        case 'password':
        case 'date':
        case 'datetime':
        case 'datetime-local':
        case 'month':
        case 'time':
        case 'week':
        case 'range':
        case 'color':
        case 'search':
        case 'email':
        case 'tel':
        case 'url':
        case 'file':
        case 'number': */
        default:
            // other future (HTML6+) inputs
            on = 'input';
    }

    return {
        on: on,
        getValue: function () {
            return this.value;
        },
        setValue: function (value) {
            this.value = value;
        }
    };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var checkObjectType = __webpack_require__(1);

var defs = __webpack_require__(0);

var getNodes = __webpack_require__(18);

var removeTreeListener = __webpack_require__(20);

var removeBinding = __webpack_require__(38);

// unbinds a node
module.exports = unbindNode;
function unbindNode(object, key, node, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'unbindNode');

    if (key instanceof Array) {
        if (typeof key[0] === 'string') {
            for (var _target = key, _index = 0, itemKey, _l = _target.length; itemKey = _target[_index], _index < _l; _index++) {
                unbindNode(object, itemKey, node, eventOptions)
            }
            /*
             * accept array of keys
             * this.unbindNode(['a', 'b', 'c'], node)
             */
        } else {
            for (var _target2 = key, _index2 = 0, _ref, _l6 = _target2.length; _ref = _target2[_index2], _index2 < _l6; _index2++) {
                var itemKey = _ref.key,
                    itemNode = _ref.node,
                    itemEventOptions = _ref.event;

                var commonEventOptions = node;
                var mergedEventOptions = {};

                if (commonEventOptions) {
                    var _result = mergedEventOptions;
                    // extend event object by "global" event

                    for (var _source2 = commonEventOptions, _keys2 = Object.keys(_source2), _l3 = _keys2.length, _i2 = 0, _key2; _i2 < _l3; _i2++) {
                        _key2 = _keys2[_i2];
                        _result[_key2] = _source2[_key2];
                    }
                }

                if (itemEventOptions) {
                    var _result2 = mergedEventOptions;
                    // extend event object by "local" event ("event" key of an object)

                    for (var _source4 = itemEventOptions, _keys4 = Object.keys(_source4), _l5 = _keys4.length, _i4 = 0, _key4; _i4 < _l5; _i4++) {
                        _key4 = _keys4[_i4];
                        _result2[_key4] = _source4[_key4];
                    }
                }

                unbindNode(object, itemKey, itemNode, mergedEventOptions);
            }
            /*
             * acept array of objects
             * this.unbindNode([{ key, node, binder, event }], { silent: true });
             */

        }

        return object;
    }

    if (key && typeof key === 'object') {
        for (var _target4 = key, _keys5 = Object.keys(_target4), _i5 = 0, keyObjKey, keyObjValue, _l8 = _keys5.length; (keyObjKey = _keys5[_i5], keyObjValue = _target4[keyObjKey]), _i5 < _l8; _i5++) {
            if (keyObjValue.constructor === Object && 'node' in keyObjValue) {
                // this.unbindNode({ key: { node: $(), binder } ) }, { silent: true });
                unbindNode(object, keyObjKey, keyObjValue.node, node);
            } else if (keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
                for (var _target3 = keyObjValue, _index3 = 0, keyObjValueItem, _l7 = _target3.length; keyObjValueItem = _target3[_index3], _index3 < _l7; _index3++) {
                    unbindNode(object, keyObjKey, keyObjValueItem.node, node);
                }
                // this.unbindNode({ key: [{ node: $(), binder }] ) }, { silent: true });

            } else {
                // this.unbindNode({ key: $() }, { silent: true });
                unbindNode(object, keyObjKey, keyObjValue, node);
            }
        }

        return object;
    }

    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
    var _eventOptions = eventOptions,
        deep = _eventOptions.deep;

    var def = defs.get(object);

    if (!def) {
        return object;
    }

    var props = def.props;

    // allow to pass null or undefined as key
    // if passed then remove bindings of all keys for given object

    if (key === null || typeof key === 'undefined') {
        for (var _target5 = props, _keys6 = Object.keys(_target5), _i6 = 0, propsKey, propsItem, _l9 = _keys6.length; (propsKey = _keys6[_i6], propsItem = _target5[propsKey]), _i6 < _l9; _i6++) {
            unbindNode(object, propsKey, null, eventOptions);
        }

        return object;
    }

    // remove delegated binding
    if (deep !== false) {
        var deepPath = key.split('.');
        var deepPathLength = deepPath.length;

        if (deepPathLength > 1) {
            var target = object;

            for (var i = 0; i < deepPathLength - 1; i++) {
                // TODO: Do we need to throw an error when a target is falsy?
                target = target[deepPath[i]];
            }

            // TODO: Potential bug! This may undelegate listener for all bindings with the same path
            // ...(cannot reproduce)
            removeTreeListener(object, deepPath.slice(0, deepPathLength - 2));

            unbindNode(target, deepPath[deepPathLength - 1], node, eventOptions);

            return object;
        }
    }

    var propDef = props[key];

    // when no propdef do nothing
    if (!propDef) {
        return object;
    }

    var bindings = propDef.bindings;

    // if the property doesn't have any bindings do nothing

    if (!bindings) {
        return object;
    }

    // if no node is pased remove all bindings for given key
    if (!node) {
        for (var _target6 = bindings, _index4 = 0, binding, _l10 = _target6.length; binding = _target6[_index4], _index4 < _l10; _index4++) {
            removeBinding({
                object: object, key: key, eventOptions: eventOptions, binding: binding
            });
        }

        propDef.bindings = null;

        return object;
    }

    var $nodes = getNodes(object, node);
    var retainBindings = [];
    var retainNodes = [];

    // iterate over all bindngs and compare their node with given nodes

    // update bindings object
    for (var _target8 = $nodes, _index6 = 0, nodesItem, _l12 = _target8.length; nodesItem = _target8[_index6], _index6 < _l12; _index6++) {
        for (var _target7 = bindings, _index5 = 0, binding, _l11 = _target7.length; binding = _target7[_index5], _index5 < _l11; _index5++) {
            if (binding.node === nodesItem) {
                removeBinding({
                    object: object, key: key, eventOptions: eventOptions, binding: binding
                });
            } else {
                retainBindings.push(binding);
                retainNodes.push(nodesItem);
            }
        }
    }

    if (retainBindings.length) {
        propDef.bindings = retainBindings;
    } else {
        propDef.bindings = null;
    }

    return object;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var removeListener = __webpack_require__(4);

// the function removes internally used events such as _asterisk:add
function detatchDelegatedLogic(_ref) {
    var delegatedEventName = _ref.delegatedEventName,
        pathStr = _ref.pathStr,
        allEvents = _ref.allEvents;

    var retain = [];
    var events = allEvents[delegatedEventName];

    for (var _target = events, _index = 0, event, _l = _target.length; event = _target[_index], _index < _l; _index++) {
        // pathStr is assigned to info in delegateListener
        if (event.info.pathStr !== pathStr) {
            retain.push(event);
        }
    }

    if (retain.length) {
        allEvents[delegatedEventName] = retain;
    } else {
        delete allEvents[delegatedEventName];
    }
}

// removes delegated event listener from an object by given path
module.exports = undelegateListener;
function undelegateListener(object, givenPath, name, callback, context) {
    var info = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

    var def = defs.get(object);

    // if no definition do nothing
    if (!def) {
        return;
    }

    var allEvents = def.events;


    var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

    if (!path || !path.length) {
        // if no path then remove listener
        removeListener(object, name, callback, context, info);
    } else {
        // else do all magic
        var key = path[0];
        var pathStr = void 0;

        if (path.length > 1) {
            var _source = path,
                _l2 = _source.length,
                _i = 1 || 0,
                _end = null || _l2,
                _j = 0,
                _result = Array(_end - _i);

            while (_i < _end) {
                _result[_j++] = _source[_i++];
            }

            path = _result;
            pathStr = path.join('.');
        } else {
            path = [];
            pathStr = path[0] || '';
        }

        var delegatedChangeEvtName = '_change:delegated:' + key;
        if (allEvents[delegatedChangeEvtName]) {
            detatchDelegatedLogic({
                delegatedEventName: delegatedChangeEvtName,
                pathStr: pathStr,
                allEvents: allEvents
            });
        }

        if (typeof object[key] === 'object') {
            undelegateListener(object[key], path, name, callback, context, info);
        }
    }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addListener = __webpack_require__(9);

var changeHandler = __webpack_require__(51);

// adds delegated event listener to an object by given path
module.exports = delegateListener;
function delegateListener(object, givenPath, name, callback, context) {
    var info = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

    // if typeof path is string and path is not empty string then split it
    var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

    if (!path || !path.length) {
        // if no path then add simple listener
        addListener(object, name, callback, context, info);
    } else {
        // else do all magic
        var key = path[0];
        var pathStr = void 0; // needed for undelegation

        if (path.length > 1) {
            var _source = path,
                _l = _source.length,
                _i = 1 || 0,
                _end = null || _l,
                _j = 0,
                _result = Array(_end - _i);

            while (_i < _end) {
                _result[_j++] = _source[_i++];
            }

            path = _result;
            pathStr = path.join('.');
        } else {
            path = [];
            pathStr = path[0] || '';
        }

        var delegatedData = {
            path: path,
            name: name,
            callback: callback,
            context: context,
            info: info,
            object: object
        };

        // the event is triggered by "set"
        addListener(object, '_change:delegated:' + key, changeHandler, null, {
            delegatedData: delegatedData,
            pathStr: pathStr
        });

        // call handler manually
        changeHandler({
            value: object[key]
        }, delegatedData);
    }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// an object allows to share data between modules; it's needed because we use
// simplified ES modules there and cannot import and share a number
module.exports = {
    nodeIndex: 0,
    allEvents: {}
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html2nodeList = __webpack_require__(23);

var win = window;

// function-constructor of mq library
// accepts many kinds of arguments (selector, html, function)
function MQInit(selector, context) {
    var result = void 0;

    if (selector) {
        if (selector.nodeType || typeof win === 'object' && selector === win) {
            result = [selector];
        } else if (typeof selector === 'string') {
            if (/</.test(selector)) {
                result = html2nodeList(selector);
            } else if (context) {
                var newContext = new MQInit(context)[0];

                if (newContext) {
                    result = newContext.querySelectorAll(selector);
                }
            } else {
                result = win.document.querySelectorAll(selector);
            }
        } else if ('length' in selector) {
            // if it's something array-like (eg NodeList)
            result = selector;
        } else {
            // this is somethong another (eg Attr)
            result = [selector];
        }
    }

    var length = result && result.length;

    if (length) {
        for (var i = 0; i < length; i++) {
            this.push(result[i]);
        }
    }
}

MQInit.prototype = [];

module.exports = MQInit;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// the regexp allows to parse things like "click::x(.y)"
// it's shared between few modules
module.exports = /([^::]+)::([^()]+)?(?:\((.*)\))?/;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// allows to split by spaces not inclusing ones inside of brackers
module.exports = /\s+(?![^(]*\))/g;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var selectNodes = __webpack_require__(41);

var $ = __webpack_require__(5);

var htmlReg = /</;
var customSelectorReg = /:bound\(([^(]*)\)/;

// the function works just like DOM library accepting any kind of arg
// (HTML string, Node, NodeList etc) bu allows to pass custom selector
// eg :bound(KEY)
module.exports = getNodes;
function getNodes(object, selector) {
    var nodes = void 0;

    if (typeof selector === 'string' && !htmlReg.test(selector) && customSelectorReg.test(selector)) {
        nodes = selectNodes(object, selector);
    } else {
        nodes = $(selector);
    }

    return nodes;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initMK = __webpack_require__(8);

var defineProp = __webpack_require__(7);

var getNodes = __webpack_require__(18);

var createBindingSwitcher = __webpack_require__(39);

var bindSingleNode = __webpack_require__(37);

var checkObjectType = __webpack_require__(1);

var defiError = __webpack_require__(3);

var addTreeListener = __webpack_require__(21);

// initializes binsing between a property of an object to HTML node
module.exports = bindNode;
function bindNode(object, key, node, binder, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'bindNode');

    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
    binder = binder || {}; // eslint-disable-line no-param-reassign

    initMK(object);

    var temporaryOptionalFlag = bindNode.temporaryOptionalFlag;


    delete bindNode.temporaryOptionalFlag;

    // throw an error when key is falsy
    if (!key) {
        throw defiError('binding:falsy_key');
    }

    if (key instanceof Array) {
        if (typeof key[0] === 'string') {
            /*
             * accept array of keys
             * this.bindNode(['a', 'b', 'c'], node)
             */
            if (temporaryOptionalFlag) {
                var _keys,
                    _l,
                    _i,
                    _source,
                    _key,
                    _result = {};

                for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
                    _key = _keys[_i];
                    _result[_key] = _source[_key];
                }

                _result.optional = true

                // eslint-disable-next-line no-param-reassign
                eventOptions = _result;
            }

            for (var _target = key, _index = 0, itemKey, _l2 = _target.length; itemKey = _target[_index], _index < _l2; _index++) {
                bindNode(object, itemKey, node, binder, eventOptions)
            }
        } else {
            for (var _target2 = key, _index2 = 0, _ref, _l7 = _target2.length; _ref = _target2[_index2], _index2 < _l7; _index2++) {
                var itemKey = _ref.key,
                    itemNode = _ref.node,
                    itemBinder = _ref.binder,
                    itemEventOptions = _ref.event;

                var commonEventOptions = node;
                var mergedEventOptions = {};

                if (temporaryOptionalFlag) {
                    mergedEventOptions.optional = true;
                }

                if (commonEventOptions) {
                    var _result2 = mergedEventOptions;
                    // extend event object by "global" event

                    for (var _source3 = commonEventOptions, _keys3 = Object.keys(_source3), _l4 = _keys3.length, _i3 = 0, _key3; _i3 < _l4; _i3++) {
                        _key3 = _keys3[_i3];
                        _result2[_key3] = _source3[_key3];
                    }
                }

                if (itemEventOptions) {
                    var _result3 = mergedEventOptions;
                    // extend event object by "local" event ("event" key of an object)

                    for (var _source5 = itemEventOptions, _keys5 = Object.keys(_source5), _l6 = _keys5.length, _i5 = 0, _key5; _i5 < _l6; _i5++) {
                        _key5 = _keys5[_i5];
                        _result3[_key5] = _source5[_key5];
                    }
                }

                bindNode(object, itemKey, itemNode, itemBinder, mergedEventOptions);
            }
            /*
             * accept array of objects
             * this.bindNode([{key, node, binder, event}], { silent: true });
             */

        }

        return object;
    }

    if (typeof key === 'object') {
        for (var _target4 = key, _keys7 = Object.keys(_target4), _i7 = 0, keyObjKey, keyObjValue, _l10 = _keys7.length; (keyObjKey = _keys7[_i7], keyObjValue = _target4[keyObjKey]), _i7 < _l10; _i7++) {
            // binder means eventOptions
            if (temporaryOptionalFlag) {
                var _keys6,
                    _l8,
                    _i6,
                    _source6,
                    _key6,
                    _result4 = {};

                for (_source6 = binder, _keys6 = Object.keys(_source6), _l8 = _keys6.length, _i6 = 0; _i6 < _l8; _i6++) {
                    _key6 = _keys6[_i6];
                    _result4[_key6] = _source6[_key6];
                }

                _result4.optional = true

                // eslint-disable-next-line no-param-reassign
                eventOptions = binder ? _result4 : { optional: true };
            } else {
                eventOptions = binder; // eslint-disable-line no-param-reassign
            }

            if (keyObjValue && keyObjValue.constructor === Object && 'node' in keyObjValue) {
                // this.bindNode({ key: { node: $(), binder } ) }, { on: 'evt' }, { silent: true });
                bindNode(object, keyObjKey, keyObjValue.node, keyObjValue.binder || node, eventOptions);
            } else if (keyObjValue && keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
                for (var _target3 = keyObjValue, _index3 = 0, keyObjValueItem, _l9 = _target3.length; keyObjValueItem = _target3[_index3], _index3 < _l9; _index3++) {
                    bindNode(object, keyObjKey, keyObjValueItem.node, keyObjValueItem.binder || node, eventOptions);
                }
                // this.bindNode({ key: [{
                //   node: $(),
                //   binder
                // }] ) }, { on: 'evt' }, { silent: true });

            } else {
                // this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
                bindNode(object, keyObjKey, keyObjValue, node, eventOptions);
            }
        }

        return object;
    }

    var _eventOptions = eventOptions,
        _eventOptions$optiona = _eventOptions.optional,
        optional = _eventOptions$optiona === undefined ? temporaryOptionalFlag || false : _eventOptions$optiona,
        _eventOptions$exactKe = _eventOptions.exactKey,
        exactKey = _eventOptions$exactKe === undefined ? false : _eventOptions$exactKe;

    var $nodes = getNodes(object, node);

    // check node existence
    if (!$nodes.length) {
        if (optional) {
            return object;
        }

        throw defiError('binding:node_missing', { key: key, node: node });
    }

    if (!exactKey) {
        var deepPath = key.split('.');
        var deepPathLength = deepPath.length;

        if (deepPathLength > 1) {
            // handle binding when key arg includes dots (eg "a.b.c.d")
            var bindingSwitcher = createBindingSwitcher({
                object: object,
                deepPath: deepPath,
                $nodes: $nodes,
                binder: binder,
                eventOptions: eventOptions,
                bindNode: bindNode
            });

            addTreeListener(object, deepPath.slice(0, deepPathLength - 1), bindingSwitcher);

            bindingSwitcher();

            return object;
        }
    }

    var propDef = defineProp(object, key);

    // handle binding for every node separately

    for (var _target5 = $nodes, _index4 = 0, oneNode, _l11 = _target5.length; oneNode = _target5[_index4], _index4 < _l11; _index4++) {
        bindSingleNode(object, {
            $nodes: $nodes,
            node: oneNode,
            key: key,
            eventOptions: eventOptions,
            binder: binder,
            propDef: propDef
        })
    }

    return object;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undelegateListener = __webpack_require__(12);

// removes tree listener from all object tree of fiven path
// TODO: Pass context to removeTreeListener
module.exports = removeTreeListener;
function removeTreeListener(object, deepPath, handler) {
    if (typeof deepPath === 'string') {
        deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
    }

    // iterate over keys of the path and undelegate given handler (can be undefined)
    for (var i = 0; i < deepPath.length; i++) {
        // TODO: Array.prototype.slice is slow
        var listenedPath = deepPath.slice(0, i);

        undelegateListener(object, listenedPath, '_change:tree:' + deepPath[i], handler);
    }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var delegateListener = __webpack_require__(13);

var removeTreeListener = __webpack_require__(20);

// creates tree listener
function createTreeListener(_ref) {
    var handler = _ref.handler,
        restPath = _ref.restPath;

    var newHandler = function treeListener(changeEvent) {
        var _keys,
            _l,
            _i,
            _source,
            _key,
            _result = {};

        _result.restPath = restPath

        for (_source = changeEvent, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
            _key = _keys[_i];
            _result[_key] = _source[_key];
        }

        var extendedChangeEvent = _result;
        var previousValue = changeEvent.previousValue,
            value = changeEvent.value;

        // removes listener for all branches of the path on old object

        if (previousValue && typeof previousValue === 'object') {
            removeTreeListener(previousValue, restPath, handler);
        }

        // adds listener for all branches of "restPath" path on newly assigned object
        if (value && typeof value === 'object') {
            addTreeListener(value, restPath, handler);
        }

        // call original handler
        handler.call(this, extendedChangeEvent);
    };

    newHandler._callback = handler;

    return newHandler;
}

// listens changes for all branches of given path
// TODO: Pass context to addTreeListener
// one of the most hard functions to understand
module.exports = addTreeListener;
function addTreeListener(object, deepPath, handler) {
    if (typeof deepPath === 'string') {
        deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
    }

    // iterate over all keys and delegate listener for all objects of given branch
    for (var i = 0; i < deepPath.length; i++) {
        // TODO: Array.prototype.slice method is slow
        var listenPath = deepPath.slice(0, i);
        var restPath = deepPath.slice(i + 1);

        delegateListener(object, listenPath, '_change:tree:' + deepPath[i], createTreeListener({
            handler: handler,
            restPath: restPath
        }));
    }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds.
// (c) https://davidwalsh.name/javascript-debounce-function

module.exports = debounce;
function debounce(func, givenDelay, thisArg) {
    var timeout = void 0;
    var delay = void 0;
    if (typeof givenDelay !== 'number') {
        thisArg = givenDelay; // eslint-disable-line no-param-reassign
        delay = 0;
    } else {
        delay = givenDelay || 0;
    }

    return function debounced() {
        var args = arguments;
        var callContext = thisArg || this;

        clearTimeout(timeout);

        timeout = setTimeout(function () {
            return func.apply(callContext, args);
        }, delay);
    };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// converts HTML string to NodeList instance
module.exports = html2nodeList;
function html2nodeList(givenHTML) {
    // wrapMap is taken from jQuery
    var wrapMap = {
        option: [1, '<select multiple="multiple">', '</select>'],
        legend: [1, '<fieldset>', '</fieldset>'],
        thead: [1, '<table>', '</table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
        area: [1, '<map>', '</map>'],
        _: [0, '', '']
    };

    var html = givenHTML.replace(/^\s+|\s+$/g, '');
    var node = window.document.createElement('div');
    var i = void 0;

    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    var ex = /<([\w:]+)/.exec(html);
    var wrapper = ex && wrapMap[ex[1]] || wrapMap._;

    node.innerHTML = wrapper[1] + html + wrapper[2];

    i = wrapper[0];

    while (i) {
        i -= 1;
        node = node.children[0];
    }

    return node.childNodes;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// determines whether two values are the same value
/* istanbul ignore next */
// eslint-disable-next-line
var isPolyfill = function (v1, v2) {
  return v1 === 0 && v2 === 0 ? 1 / v1 === 1 / v2 : v1 !== v1 && v2 !== v2 || v1 === v2;
};

module.exports = Object.is || isPolyfill;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initMK = __webpack_require__(8);

var defineProp = __webpack_require__(7);

var checkObjectType = __webpack_require__(1);

var set = __webpack_require__(6);

var defiError = __webpack_require__(3);

// creates property mediator
function createMediator(_ref) {
    var object = _ref.object,
        propDef = _ref.propDef,
        key = _ref.key,
        mediator = _ref.mediator;

    return function propMediator(value) {
        // args: value, previousValue, key, object itself
        return mediator.call(object, value, propDef.value, key, object);
    };
}

// transforms property value on its changing
module.exports = mediate;
function mediate(object, givenKeys, mediator) {
    // throw error when object type is wrong
    checkObjectType(object, 'mediate');

    var isKeysArray = givenKeys instanceof Array;

    // allow to use key-mediator object as another method variation
    if (typeof givenKeys === 'object' && !isKeysArray) {
        for (var _target = givenKeys, _keys = Object.keys(_target), _i = 0, objKey, objVal, _l = _keys.length; (objKey = _keys[_i], objVal = _target[objKey]), _i < _l; _i++) {
            mediate(object, objKey, objVal)
        }

        return object;
    }

    initMK(object);

    // allow to use both single key and an array of keys
    var keys = isKeysArray ? givenKeys : [givenKeys];

    for (var _target2 = keys, _index = 0, key, _l2 = _target2.length; key = _target2[_index], _index < _l2; _index++) {
        // if non-string is passed as a key
        if (typeof key !== 'string') {
            throw defiError('mediate:key_type', { key: key });
        }

        var propDef = defineProp(object, key);

        var propMediator = propDef.mediator = createMediator({
            object: object,
            propDef: propDef,
            key: key,
            mediator: mediator
        });

        // set new value
        set(object, key, propMediator(propDef.value), {
            fromMediator: true
        });
    }

    return object;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unbindNode = __webpack_require__(11);

var triggerOne = __webpack_require__(2);

var removeListener = __webpack_require__(4);

var defs = __webpack_require__(0);

var checkObjectType = __webpack_require__(1);

var defiError = __webpack_require__(3);

// removes a property, its bindings and its events
// TODO: remove function does not correctly removes delegated events, bindings, tree listeners etc
module.exports = remove;
function remove(object, givenKey, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'remove');

    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
    var def = defs.get(object);
    var _eventOptions = eventOptions,
        silent = _eventOptions.silent;
    // allow to pass single key or an array of keys

    var keys = givenKey instanceof Array ? givenKey : [givenKey];

    var _loop = function (i) {
        var key = keys[i];

        // if non-string is passed as a key
        if (typeof key !== 'string') {
            throw defiError('remove:key_type', { key: key });
        }

        var props = def && def.props;
        var propDef = props && props[key];

        // if no object definition then simply delete the property
        if (!propDef) {
            delete object[key];
            return 'continue';
        }

        var value = propDef.value;

        // remove all bindings

        unbindNode(object, key);

        // TODO: Manual listing of event prefixes may cause problems in future
        var removeEventPrefies = ['_change:deps', '_change:bindings', '_change:delegated', '_change:tree', 'change', 'beforechange', 'bind', 'unbind'];

        // remove all events

        // delete property definition
        for (var _target = removeEventPrefies, _index = 0, prefix, _l = _target.length; prefix = _target[_index], _index < _l; _index++) {
            removeListener(object, prefix + ':' + key)
        }

        delete props[key];

        // delete the property itself
        delete object[key];

        var _keys,
            _l2,
            _i,
            _source,
            _key,
            _result = {};

        _result.key = key
        _result.value = value

        for (_source = eventOptions, _keys = Object.keys(_source), _l2 = _keys.length, _i = 0; _i < _l2; _i++) {
            _key = _keys[_i];
            _result[_key] = _source[_key];
        }

        var extendedEventOptions = _result;

        // trigger delegated events logic removal for asterisk events (*.*.*@foo)
        triggerOne(object, '_delete:delegated', extendedEventOptions);

        // fire events if "silent" is not true
        if (!silent) {
            triggerOne(object, 'delete', extendedEventOptions);
            triggerOne(object, 'delete:' + key, extendedEventOptions);
        }
    };

    for (var i = 0; i < keys.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
    }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindNode = __webpack_require__(19);

// TODO: Adds a binding, not throwing an error when a node is missing
module.exports = bindOptionalNode;
function bindOptionalNode() {
    // this hack allows to keep bindOptionalNode as compact as possible
    // and doesn't require to flip args and support all bindNode variations
    bindNode.temporaryOptionalFlag = true;
    return bindNode.apply(this, arguments);
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var checkObjectType = __webpack_require__(1);

// the function returns bound node(s)
module.exports = bound;
function bound(object, key) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { all: false },
        all = _ref.all;

    // throw error when object type is wrong
    checkObjectType(object, 'bound');

    // if no key or falsy key is given
    if (!key) {
        return object;
    }

    var def = defs.get(object);
    var propDef = def.props[key];

    var nodes = void 0;

    if (propDef) {
        var bindings = propDef.bindings;

        nodes = bindings && bindings.map(function (_ref2) {
            var node = _ref2.node;
            return node;
        }) || [];
    } else {
        nodes = [];
    }

    return all ? nodes : nodes[0] || null;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a function which is called when property value is changed
module.exports = createObjectHandler;
function createObjectHandler(_ref) {
    var node = _ref.node,
        propDef = _ref.propDef,
        binder = _ref.binder,
        bindingOptions = _ref.bindingOptions;

    return function objectHandler() {
        var eventOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var value = propDef.value;
        var onChangeValue = eventOptions.onChangeValue,
            changedNode = eventOptions.changedNode,
            evtBinder = eventOptions.binder;
        var setValue = binder.setValue;
        // dirty hack for https://github.com/matreshkajs/matreshka/issues/19

        var dirtyHackValue = onChangeValue === 'string' && typeof value === 'number' ? '' + value : value;

        // don't call setValue if a property is changed via getValue of the same binder
        if (changedNode === node && onChangeValue === dirtyHackValue && evtBinder === binder) {
            return;
        }

        var _keys,
            _l,
            _i,
            _source,
            _key,
            _result = {};

        _result.value = value

        for (_source = bindingOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
            _key = _keys[_i];
            _result[_key] = _source[_key];
        }

        setValue.call(node, value, _result);
    };
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__(24);

var set = __webpack_require__(6);

// returns a function which called when bound node state is changed (eg DOM event is fired)
module.exports = createNodeHandler;
function createNodeHandler(_ref) {
    var object = _ref.object,
        key = _ref.key,
        node = _ref.node,
        propDef = _ref.propDef,
        binder = _ref.binder,
        bindingOptions = _ref.bindingOptions;

    return function nodeHandler() {
        var domEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // nodeHandler.disabled = true is set in unbindNode
        // we cannot "turn off" binder.on when its value is a function
        // developer needs to clean memory ("turn off" callback) manualy in binder.destroy
        if (nodeHandler.disabled) {
            return;
        }

        var previousValue = propDef.value;
        var which = domEvent.which,
            target = domEvent.target,
            ctrlKey = domEvent.ctrlKey,
            altKey = domEvent.altKey;
        var getValue = binder.getValue;

        var _keys,
            _l,
            _i,
            _source,
            _key,
            _result = {};

        _result.previousValue = previousValue
        _result.domEvent = domEvent
        _result.originalEvent = domEvent.originalEvent || domEvent

        _result.preventDefault = function () {
            return domEvent.preventDefault();
        }

        _result.stopPropagation = function () {
            return domEvent.stopPropagation();
        }

        _result.which = which
        _result.target = target
        _result.ctrlKey = ctrlKey
        _result.altKey = altKey

        for (_source = bindingOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
            _key = _keys[_i];
            _result[_key] = _source[_key];
        }

        var value = getValue.call(node, _result);

        if (!is(value, previousValue)) {
            set(object, key, value, {
                fromNode: true,
                // the following properties are needed to avoid circular changes
                // they are used at objectHandler
                changedNode: node,
                onChangeValue: value,
                binder: binder
            });
        }
    };
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for output element
module.exports = output;
function output() {
    return {
        on: null,
        getValue: function () {
            return this.value || this.textContent;
        },
        setValue: function (value) {
            var property = 'form' in this ? 'value' : 'textContent';
            this[property] = value === null ? '' : '' + value;
        }
    };
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(10);

// returns a binder for textarea element
module.exports = progress;
function progress() {
    return input();
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for select element
module.exports = select;
function select(multiple) {
    if (multiple) {
        return {
            on: 'change',
            getValue: function () {
                var options = this.options;

                var result = [];

                for (var i = 0; options.length > i; i++) {
                    if (options[i].selected) {
                        result.push(options[i].value);
                    }
                }

                return result;
            },
            setValue: function (givenValue) {
                var options = this.options;

                var value = typeof givenValue === 'string' ? [givenValue] : givenValue;
                for (var i = options.length - 1; i >= 0; i--) {
                    options[i].selected = ~value.indexOf(options[i].value);
                }
            }
        };
    }

    return {
        on: 'change',
        getValue: function () {
            return this.value;
        },
        setValue: function (value) {
            this.value = value;

            if (!value) {
                var options = this.options;

                for (var i = options.length - 1; i >= 0; i--) {
                    if (!options[i].value) {
                        options[i].selected = true;
                        break;
                    }
                }
            }
        }
    };
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(10);

// returns a binder for textarea element
module.exports = textarea;
function textarea() {
    // textarea behaves just like text input
    return input('text');
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(10);

var textarea = __webpack_require__(34);

var select = __webpack_require__(33);

var progress = __webpack_require__(32);

var output = __webpack_require__(31);

// defaultBinders collection by default contains only one function-checker
module.exports = [function (node) {
    switch (node.tagName) {
        case 'INPUT':
            return input(node.type);
        case 'TEXTAREA':
            return textarea();
        case 'SELECT':
            return select(node.multiple);
        case 'PROGRESS':
            return progress();
        case 'OUTPUT':
            return output();
        default:
            return null;
    }
}];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultBinders = __webpack_require__(35);

// tries to find a binder for given node
module.exports = lookForBinder;
function lookForBinder(node) {
    for (var i = 0; i < defaultBinders.length; i++) {
        var binder = defaultBinders[i].call(node, node);
        if (binder) {
            return binder;
        }
    }

    return undefined;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lookForBinder = __webpack_require__(36);

var createNodeHandler = __webpack_require__(30);

var createObjectHandler = __webpack_require__(29);

var triggerOne = __webpack_require__(2);

var addListener = __webpack_require__(9);

var debounce = __webpack_require__(22);

var spaceReg = /\s+/;

// handles binding for single property & node
// the function is used at bindNode
module.exports = bindSingleNode;
function bindSingleNode(object, _ref) {
    var givenBinder = _ref.binder,
        key = _ref.key,
        $nodes = _ref.$nodes,
        node = _ref.node,
        eventOptions = _ref.eventOptions,
        propDef = _ref.propDef;
    var silent = eventOptions.silent,
        getValueOnBind = eventOptions.getValueOnBind,
        setValueOnBind = eventOptions.setValueOnBind,
        _eventOptions$debounc = eventOptions.debounceSetValue,
        debounceSetValue = _eventOptions$debounc === undefined ? true : _eventOptions$debounc,
        _eventOptions$debounc2 = eventOptions.debounceGetValue,
        debounceGetValue = _eventOptions$debounc2 === undefined ? true : _eventOptions$debounc2,
        _eventOptions$debounc3 = eventOptions.debounceSetValueOnBind,
        debounceSetValueOnBind = _eventOptions$debounc3 === undefined ? false : _eventOptions$debounc3,
        _eventOptions$debounc4 = eventOptions.debounceGetValueOnBind,
        debounceGetValueOnBind = _eventOptions$debounc4 === undefined ? false : _eventOptions$debounc4,
        _eventOptions$debounc5 = eventOptions.debounceSetValueDelay,
        debounceSetValueDelay = _eventOptions$debounc5 === undefined ? 0 : _eventOptions$debounc5,
        _eventOptions$debounc6 = eventOptions.debounceGetValueDelay,
        debounceGetValueDelay = _eventOptions$debounc6 === undefined ? 0 : _eventOptions$debounc6,
        _eventOptions$useExac = eventOptions.useExactBinder,
        useExactBinder = _eventOptions$useExac === undefined ? false : _eventOptions$useExac;
    // create bindings array in property definition object

    var bindings = propDef.bindings = propDef.bindings || [];
    var value = propDef.value;

    var bindingOptions = {
        self: object,
        key: key,
        value: value,
        $nodes: $nodes,
        node: node
    };
    var isUndefined = typeof value === 'undefined';
    var binder = void 0;
    var objectHandler = void 0;
    var nodeHandler = void 0;

    // get actual binder
    if (givenBinder !== null) {
        // by default binder passed to bindNode is extended by default binder
        // useExactBinder turns this behavior off
        if (useExactBinder) {
            binder = givenBinder;
        } else {
            // getting default binder
            var foundBinder = lookForBinder(node);

            // if default binder is found
            if (foundBinder) {
                // extend found binder by given binder
                if (givenBinder) {
                    var _result = foundBinder;

                    for (var _source2 = givenBinder, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
                        _key2 = _keys2[_i2];
                        _result[_key2] = _source2[_key2];
                    }
                }

                binder = foundBinder;
            } else {
                // default binder is not found
                binder = givenBinder || {};
            }
        }
    }

    var _binder = binder,
        getValue = _binder.getValue,
        setValue = _binder.setValue,
        on = _binder.on,
        initialize = _binder.initialize;

    // call binder.initialize

    if (initialize) {
        initialize.call(node, bindingOptions);
    }

    // add needed event handlers to given node when getValue is given
    if (getValue) {
        var syncNodeHandler = createNodeHandler({
            object: object,
            key: key,
            node: node,
            propDef: propDef,
            binder: binder,
            bindingOptions: bindingOptions
        });

        var debouncedNodeHandler = void 0;

        if (debounceGetValue || debounceGetValueOnBind) {
            debouncedNodeHandler = debounce(syncNodeHandler, debounceGetValueDelay);
        }

        if (debounceGetValue) {
            nodeHandler = debouncedNodeHandler;
        } else {
            nodeHandler = syncNodeHandler;
        }

        // TODO: Throw error when "on" and maybe other binder properties has wrong type
        if (typeof on === 'function') {
            on.call(node, nodeHandler, bindingOptions);
        } else if (typeof on === 'string') {
            for (var _target = on.split(spaceReg), _index = 0, evtName, _l3 = _target.length; evtName = _target[_index], _index < _l3; _index++) {
                node.addEventListener(evtName, nodeHandler)
            }
            // addEventListener is faster than "on" method from any DOM library

        }

        if (isUndefined && getValueOnBind !== false || getValueOnBind === true) {
            if (debounceGetValueOnBind) {
                debouncedNodeHandler();
            } else {
                syncNodeHandler();
            }
        }

        isUndefined = typeof propDef.value === 'undefined';
    }

    // add needed event handlers to the object when setValue is given
    if (setValue) {
        var syncObjectHandler = createObjectHandler({
            node: node,
            propDef: propDef,
            binder: binder,
            bindingOptions: bindingOptions,
            eventOptions: eventOptions
        });

        var debouncedObjectHandler = void 0;

        if (debounceSetValue || debounceSetValueOnBind) {
            debouncedObjectHandler = debounce(syncObjectHandler, debounceSetValueDelay);
        }

        if (debounceSetValue) {
            objectHandler = debouncedObjectHandler;
        } else {
            objectHandler = syncObjectHandler;
        }

        // TODO: Is it possible to get previous value of a property?
        addListener(object, '_change:bindings:' + key, objectHandler, null, { skipChecks: true });

        if (!isUndefined && setValueOnBind !== false || setValueOnBind === true) {
            if (debounceSetValueOnBind) {
                debouncedObjectHandler();
            } else {
                syncObjectHandler();
            }
        }
    }

    // add binding data to bindings array
    bindings.push({
        on: on,
        node: node,
        binder: binder,
        objectHandler: objectHandler,
        nodeHandler: nodeHandler,
        bindingOptions: bindingOptions
    });

    // fire events
    if (!silent) {
        var _keys3,
            _l4,
            _i3,
            _source3,
            _key3,
            _result2 = {};

        _result2.key = key
        _result2.node = node

        for (_source3 = eventOptions, _keys3 = Object.keys(_source3), _l4 = _keys3.length, _i3 = 0; _i3 < _l4; _i3++) {
            _key3 = _keys3[_i3];
            _result2[_key3] = _source3[_key3];
        }

        var extendedEventOptions = _result2;

        triggerOne(object, 'bind:' + key, extendedEventOptions);
        triggerOne(object, 'bind', extendedEventOptions);
    }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeListener = __webpack_require__(4);

var triggerOne = __webpack_require__(2);

var spaceReg = /\s+/;

// the function removes single binding for single object
// called by unbindNode
module.exports = removeBinding;
function removeBinding(_ref) {
    var object = _ref.object,
        key = _ref.key,
        eventOptions = _ref.eventOptions,
        binding = _ref.binding;
    var bindingOptions = binding.bindingOptions,
        binder = binding.binder,
        node = binding.node,
        nodeHandler = binding.nodeHandler,
        objectHandler = binding.objectHandler;
    var destroy = binder.destroy,
        on = binder.on;
    var silent = eventOptions.silent;

    // if "on" is a function then disable it
    // we cannot "turn off" custom listener defined by a programmer
    // programmer needs to remove custom listener maually inside binder.destroy

    if (typeof on === 'function') {
        nodeHandler.disabled = true;
    } else if (typeof on === 'string') {
        for (var _target = on.split(spaceReg), _index = 0, evtName, _l = _target.length; evtName = _target[_index], _index < _l; _index++) {
            node.removeEventListener(evtName, nodeHandler)
        }
        // remove DOM event listener
        // removeEventListener is faster than "on" method from any DOM library

    }

    // remove object event listener
    removeListener(object, '_change:bindings:' + key, objectHandler);

    // if binder.destroy is given call it
    if (destroy) {
        destroy.call(node, bindingOptions);
    }

    // fire events
    if (!silent) {
        var _keys,
            _l2,
            _i,
            _source,
            _key,
            _result = {};

        _result.key = key
        _result.node = node

        for (_source = eventOptions, _keys = Object.keys(_source), _l2 = _keys.length, _i = 0; _i < _l2; _i++) {
            _key = _keys[_i];
            _result[_key] = _source[_key];
        }

        var extendedEventOptions = _result;

        triggerOne(object, 'unbind:' + key, extendedEventOptions);
        triggerOne(object, 'unbind', extendedEventOptions);
    }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unbindNode = __webpack_require__(11);

// returns a function which re-adds binding when object branch is changed
// the function is called by bindNode when something like
// 'foo.bar.baz' is passed to it as key argument value
// this is one of the hardest things in the framework to understand
module.exports = createBindingSwitcher;
function createBindingSwitcher(_ref) {
    var object = _ref.object,
        deepPath = _ref.deepPath,
        $nodes = _ref.$nodes,
        binder = _ref.binder,
        eventOptions = _ref.eventOptions,
        bindNode = _ref.bindNode;

    return function bindingSwitcher() {
        var changeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var deepPathLength = deepPath.length;
        var lastDeepPathItem = deepPath[deepPathLength - 1];
        var value = changeEvent.value,
            previousValue = changeEvent.previousValue,
            restPath = changeEvent.restPath;

        var target = void 0; // an object to call bindNode
        var previousTarget = void 0; // an object to call unbindNode


        if (value && typeof value === 'object' && restPath) {
            // if rest path is given and new value is an object
            target = value;
            for (var i = 0; i < restPath.length; i++) {
                target = target[restPath[i]];
                if (!target) {
                    break;
                }
            }
        } else {
            // if rest path is not given
            target = object;
            for (var _i = 0; _i < deepPathLength - 1; _i++) {
                target = target[deepPath[_i]];
                if (!target) {
                    break;
                }
            }
        }

        // if rest path is given and previous value is an object
        if (previousValue && typeof previousValue === 'object' && restPath) {
            previousTarget = previousValue;
            for (var _i2 = 0; _i2 < restPath.length; _i2++) {
                previousTarget = previousTarget[restPath[_i2]];
                if (!previousTarget) {
                    break;
                }
            }
        }

        // add binding for new target
        if (target && typeof target === 'object') {
            bindNode(target, lastDeepPathItem, $nodes, binder, eventOptions);
        }

        // remove binding for previously used object
        if (previousTarget && typeof previousTarget === 'object') {
            unbindNode(previousTarget, lastDeepPathItem, $nodes);
        }
    };
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// cheap conversion of an array-like object to Array instance
module.exports = toArray;
function toArray(object) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var length = object.length;

    var array = Array(length);

    for (var i = start; i < length; i++) {
        array[i - start] = object[i];
    }

    return array;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var toArray = __webpack_require__(40);

var $ = __webpack_require__(5);

var customSelectorReg = /\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*/;
var randomAttr = Math.random().toString().replace('0.', 'x') + 'y'; // x12345y

// the function selects nodes based on a selector (including custom values, eg :bound)
// TODO: selectNodes looks not good, it needs to be refactored and accelerated if possible
module.exports = selectNodes;
function selectNodes(object, givenSelector) {
    var _defs$get = defs.get(object),
        props = _defs$get.props;

    var selectors = givenSelector.split(',');
    var result = $();

    for (var _target4 = selectors, _index3 = 0, selector, _l4 = _target4.length; selector = _target4[_index3], _index3 < _l4; _index3++) {
        var execResult = customSelectorReg.exec(selector);
        if (execResult) {
            var boundKey = execResult[1];
            var subSelector = execResult[2];
            var propDef = props[boundKey];

            if (propDef) {
                var bindings = propDef.bindings;

                if (bindings) {
                    var boundNodes = Array(bindings.length);

                    // if native selector passed after :bound(KEY) is not empty string
                    // for example ":bound(KEY) .my-selector"
                    for (var _target = bindings, i = 0, binding, _l = _target.length; binding = _target[i], i < _l; i++) {
                        boundNodes[i] = binding.node;
                    }

                    if (subSelector) {
                        // if native selector contains children selector
                        // for example ":bound(KEY) > .my-selector"
                        if (subSelector.indexOf('>') === 0) {
                            for (var _target2 = boundNodes, _index = 0, node, _l2 = _target2.length; node = _target2[_index], _index < _l2; _index++) {
                                node.setAttribute(randomAttr, randomAttr);
                                var selected = node.querySelectorAll('[' + randomAttr + '="' + randomAttr + '"] ' + subSelector);
                                result = result.add(toArray(selected));
                                node.removeAttribute(randomAttr);
                            }
                            // selecting children

                        } else {
                            for (var _target3 = boundNodes, _index2 = 0, node, _l3 = _target3.length; node = _target3[_index2], _index2 < _l3; _index2++) {
                                var selected = node.querySelectorAll(subSelector);
                                result = result.add(toArray(selected));
                            }
                            // if native selector doesn't contain children selector

                        }
                    } else {
                        // if native selector is empty string just add bound nodes to result
                        result = result.add(boundNodes);
                    }
                }
            }
        } else {
            // if it's native selector (no custom things)
            result = result.add(selector);
        }
    }

    return result;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// gets value of a property in nested object
// eg "d" from a.b.c.d
module.exports = deepFind;
function deepFind(obj, givenPath) {
    var paths = typeof givenPath === 'string' ? givenPath.split('.') : givenPath;
    var current = obj;

    for (var i = 0; i < paths.length; ++i) {
        if (typeof current[paths[i]] === 'undefined') {
            return undefined;
        }

        current = current[paths[i]];
    }

    return current;
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var set = __webpack_require__(6);

var deepFind = __webpack_require__(42);

// creates event handler for target object which will be fired when a source is changed
module.exports = createCalcHandler;
function createCalcHandler(_ref) {
    var object = _ref.object,
        eventOptions = _ref.eventOptions,
        allSources = _ref.allSources,
        target = _ref.target,
        def = _ref.def,
        handler = _ref.handler;

    return function calcHandler() {
        var changeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var values = [];
        var _changeEvent$protecto = changeEvent.protector,
            protector = _changeEvent$protecto === undefined ? {} : _changeEvent$protecto;

        var protectKey = target + def.id;
        var promiseCalc = eventOptions.promiseCalc;

        var _keys,
            _l,
            _i,
            _source,
            _key,
            _result = {};

        _result.protector = protector

        for (_source = eventOptions, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
            _key = _keys[_i];
            _result[_key] = _source[_key];
        }

        for (_source = changeEvent, _keys = Object.keys(_source), _l = _keys.length, _i = 0; _i < _l; _i++) {
            _key = _keys[_i];
            _result[_key] = _source[_key];
        }

        var setEventOptions = _result;

        if (protectKey in protector) {
            return;
        }

        protector[protectKey] = true;

        for (var _target = allSources, _index = 0, _ref2, _l2 = _target.length; _ref2 = _target[_index], _index < _l2; _index++) {
            var sourceObject = _ref2.sourceObject,
                sourceKey = _ref2.sourceKey,
                isDelegated = _ref2.isDelegated;

            var value = isDelegated ? deepFind(sourceObject, sourceKey) : sourceObject[sourceKey];
            values.push(value);
        }

        var targetValue = handler.apply(object, values);

        if (promiseCalc) {
            if (!(targetValue instanceof Promise)) {
                targetValue = Promise.resolve(targetValue);
            }

            targetValue.then(function (promiseResult) {
                return set(object, target, promiseResult, setEventOptions);
            }).catch(function (e) {
                throw Error(e);
            });
        } else {
            set(object, target, targetValue, setEventOptions);
        }
    };
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addListener = __webpack_require__(9);

var addTreeListener = __webpack_require__(21);

var defiError = __webpack_require__(3);

// adds a source to a source list and adds needed event listener to a it
module.exports = addSource;
function addSource(_ref) {
    var calcHandler = _ref.calcHandler,
        allSources = _ref.allSources,
        sourceKey = _ref.sourceKey,
        sourceObject = _ref.sourceObject,
        eventOptions = _ref.eventOptions;
    var _eventOptions$exactKe = eventOptions.exactKey,
        exactKey = _eventOptions$exactKe === undefined ? false : _eventOptions$exactKe;

    var isDelegated = false;

    // source key must be a string
    if (typeof sourceKey !== 'string') {
        throw defiError('calc:source_key_type', { sourceKey: sourceKey });
    }

    // source object must be an object
    if (!sourceObject || typeof sourceObject !== 'object') {
        throw defiError('calc:source_object_type', { sourceObject: sourceObject });
    }

    if (!exactKey) {
        var deepPath = sourceKey.split('.');

        // if something like a.b.c is used as a key
        if (deepPath.length > 1) {
            isDelegated = true;
            // TODO: Avoid collisions with bindings by using another event name
            // ... instead of _change:tree:xxx
            addTreeListener(sourceObject, deepPath, calcHandler);
        } else {
            exactKey = true;
        }
    }

    if (exactKey) {
        // normal handler
        addListener(sourceObject, '_change:deps:' + sourceKey, calcHandler);
    }

    allSources.push({
        sourceKey: sourceKey,
        sourceObject: sourceObject,
        isDelegated: isDelegated
    });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initMK = __webpack_require__(8);

var checkObjectType = __webpack_require__(1);

var defiError = __webpack_require__(3);

var debounce = __webpack_require__(22);

var addSource = __webpack_require__(44);

var createCalcHandler = __webpack_require__(43);

var defineProp = __webpack_require__(7);

// defines a property which is dependend on other properties
module.exports = calc;
function calc(object, target, sources, givenHandler, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'calc');

    if (target instanceof Object) {
        for (var _target = target, _keys5 = Object.keys(_target), _i5 = 0, itemTarget, _ref, _l5 = _keys5.length; (itemTarget = _keys5[_i5], _ref = _target[itemTarget]), _i5 < _l5; _i5++) {
            var itemSource = _ref.source,
                itemHandler = _ref.handler,
                itemEventOptions = _ref.event;

            var commonEventOptions = sources;
            var mergedEventOptions = {};

            if (commonEventOptions) {
                var _result = mergedEventOptions;
                // extend event object by "global" event

                for (var _source2 = commonEventOptions, _keys2 = Object.keys(_source2), _l2 = _keys2.length, _i2 = 0, _key2; _i2 < _l2; _i2++) {
                    _key2 = _keys2[_i2];
                    _result[_key2] = _source2[_key2];
                }
            }

            if (itemEventOptions) {
                var _result2 = mergedEventOptions;
                // extend event object by "local" event ("event" key of an object)

                for (var _source4 = itemEventOptions, _keys4 = Object.keys(_source4), _l4 = _keys4.length, _i4 = 0, _key4; _i4 < _l4; _i4++) {
                    _key4 = _keys4[_i4];
                    _result2[_key4] = _source4[_key4];
                }
            }

            calc(object, itemTarget, itemSource, itemHandler, mergedEventOptions);
        }
        /*
         * accept an object
         * this.calc({target: { source, handler, event } }, commonEventOptions);
         */


        return object;
    }

    if (typeof target !== 'string') {
        throw defiError('calc:target_type', { target: target });
    }

    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
    var def = initMK(object);
    var _eventOptions = eventOptions,
        _eventOptions$setOnIn = _eventOptions.setOnInit,
        setOnInit = _eventOptions$setOnIn === undefined ? true : _eventOptions$setOnIn,
        _eventOptions$debounc = _eventOptions.debounceCalcOnInit,
        debounceCalcOnInit = _eventOptions$debounc === undefined ? false : _eventOptions$debounc,
        _eventOptions$debounc2 = _eventOptions.debounceCalc,
        debounceCalc = _eventOptions$debounc2 === undefined ? true : _eventOptions$debounc2,
        _eventOptions$debounc3 = _eventOptions.debounceCalcDelay,
        debounceCalcDelay = _eventOptions$debounc3 === undefined ? 0 : _eventOptions$debounc3,
        _eventOptions$isTarge = _eventOptions.isTargetPropertyHidden,
        isTargetPropertyHidden = _eventOptions$isTarge === undefined ? false : _eventOptions$isTarge;

    var defaultHandler = function (value) {
        return value;
    };
    var handler = givenHandler || defaultHandler;
    var allSources = [];
    var syncCalcHandler = createCalcHandler({
        object: object,
        eventOptions: eventOptions,
        allSources: allSources,
        target: target,
        def: def,
        handler: handler
    });

    var debouncedCalcHandler = void 0;
    var calcHandler = void 0;

    if (debounceCalcOnInit || debounceCalc) {
        debouncedCalcHandler = debounce(syncCalcHandler, debounceCalcDelay);
    }

    defineProp(object, target, isTargetPropertyHidden);

    if (!(sources instanceof Array)) {
        sources = [sources]; // eslint-disable-line no-param-reassign
    }

    if (debounceCalc) {
        calcHandler = debouncedCalcHandler;
    } else {
        calcHandler = syncCalcHandler;
    }

    for (var _target3 = sources, _index2 = 0, source, _l7 = _target3.length; source = _target3[_index2], _index2 < _l7; _index2++) {
        if (typeof source === 'string') {
            // source object is current object
            addSource({
                calcHandler: calcHandler,
                allSources: allSources,
                sourceKey: source,
                sourceObject: object,
                eventOptions: eventOptions
            });
        } else {
            // source object is external object
            if (!source || typeof source !== 'object') {
                throw defiError('calc:source_type', { source: source });
            }

            var sourceKey = source.key;
            var sourceObject = source.object;
            if (sourceKey instanceof Array) {
                for (var _target2 = sourceKey, _index = 0, sourceKeyItem, _l6 = _target2.length; sourceKeyItem = _target2[_index], _index < _l6; _index++) {
                    addSource({
                        calcHandler: calcHandler,
                        allSources: allSources,
                        sourceKey: sourceKeyItem,
                        sourceObject: sourceObject,
                        eventOptions: eventOptions
                    });
                }
                // many keys are passed

            } else {
                // one key is passed
                addSource({
                    calcHandler: calcHandler,
                    allSources: allSources,
                    sourceKey: sourceKey,
                    sourceObject: sourceObject,
                    eventOptions: eventOptions
                });
            }
        }
    }

    if (setOnInit) {
        if (debounceCalcOnInit) {
            debouncedCalcHandler();
        } else {
            syncCalcHandler();
        }
    }

    return object;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// triggers given DOM event on given node
module.exports = triggerOneDOMEvent;
function triggerOneDOMEvent(_ref) {
    var node = _ref.node,
        eventName = _ref.eventName,
        triggerArgs = _ref.triggerArgs;
    var _window = window,
        document = _window.document,
        Event = _window.Event;

    var event = void 0;

    // polyfill for older browsers
    if (document.createEvent) {
        /* istanbul ignore next */
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    } else if (typeof Event !== 'undefined') {
        event = new Event(eventName, {
            bubbles: true,
            cancelable: true
        });
    }

    // matreshkaTriggerArgs will be used in a handler created by addDOMListener
    event.matreshkaTriggerArgs = triggerArgs;

    node.dispatchEvent(event);
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var triggerOneDOMEvent = __webpack_require__(46);

var defs = __webpack_require__(0);

// triggers DOM event on bound nodes
module.exports = triggerDOMEvent;
function triggerDOMEvent(object, key, eventName, selector, triggerArgs) {
    var def = defs.get(object);

    if (!def) {
        return;
    }

    var props = def.props;

    var propDef = props[key];

    if (!propDef) {
        return;
    }

    var bindings = propDef.bindings;


    if (!bindings) {
        return;
    }

    for (var _target2 = bindings, _index2 = 0, _ref, _l2 = _target2.length; _ref = _target2[_index2], _index2 < _l2; _index2++) {
        var node = _ref.node;

        if (selector) {
            // if selector is given trigger an event on all node descendants
            var descendants = node.querySelectorAll(selector);

            for (var _target = descendants, _index = 0, descendant, _l = _target.length; descendant = _target[_index], _index < _l; _index++) {
                triggerOneDOMEvent({
                    node: descendant,
                    eventName: eventName,
                    triggerArgs: triggerArgs
                });
            }
        } else {
            // trigger an event for single node
            triggerOneDOMEvent({
                node: node,
                eventName: eventName,
                triggerArgs: triggerArgs
            });
        }
    }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var domEventReg = __webpack_require__(16);

var checkObjectType = __webpack_require__(1);

var defiError = __webpack_require__(3);

var splitBySpaceReg = __webpack_require__(17);

var defs = __webpack_require__(0);

var triggerOne = __webpack_require__(2);

var triggerDomEvent = __webpack_require__(47);

// triggers an event
module.exports = trigger;
function trigger(object, givenNames) {
    for (var _len = arguments.length, triggerArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        triggerArgs[_key - 2] = arguments[_key];
    }

    // throw error when object type is wrong
    checkObjectType(object, 'trigger');
    var names = void 0;

    // allow to use strings only as event name
    if (typeof givenNames === 'string') {
        names = givenNames.split(splitBySpaceReg);
    } else {
        throw defiError('trigger:names_type', { names: givenNames });
    }

    var def = defs.get(object);

    // if no definition do nothing
    if (!def) {
        return object;
    }

    var allEvents = def.events;


    if (!allEvents) {
        return object;
    }

    for (var _target = names, _index = 0, name, _l = _target.length; name = _target[_index], _index < _l; _index++) {
        var domEvtExecResult = domEventReg.exec(name);

        if (domEvtExecResult) {
            // if EVT::KEY(SELECTOR) ia passed as event name then trigger DOM event
            var eventName = domEvtExecResult[1],
                key = domEvtExecResult[2],
                selector = domEvtExecResult[3];

            triggerDomEvent(object, key, eventName, selector, triggerArgs);
        } else {
            // trigger ordinary event
            triggerOne(object, name, triggerArgs);
        }
    }

    return object;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splitBySpaceReg = __webpack_require__(17);

var checkObjectType = __webpack_require__(1);

var defs = __webpack_require__(0);

var removeListener = __webpack_require__(4);

var undelegateListener = __webpack_require__(12);

var $ = __webpack_require__(5);

// removes event listener
module.exports = off;
function off(object, givenNames, callback, context) {
    // throw error when object type is wrong
    checkObjectType(object, 'off');

    var isNamesVarArray = givenNames instanceof Array;
    var def = defs.get(object);

    // allow to pass name-handler object
    // TODO: Name-handler object passed to off method is non-documented feature
    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
        for (var _target = givenNames, _keys = Object.keys(_target), _i = 0, namesObjName, namesObjCallback, _l = _keys.length; (namesObjName = _keys[_i], namesObjCallback = _target[namesObjName]), _i < _l; _i++) {
            off(object, namesObjName, namesObjCallback, callback)
        }

        return object;
    }

    if (!givenNames && !callback && !context) {
        def.events = {};

        for (var _target3 = def.props, _keys2 = Object.keys(_target3), _i2 = 0, propName, _ref, _l3 = _keys2.length; (propName = _keys2[_i2], _ref = _target3[propName]), _i2 < _l3; _i2++) {
            var bindings = _ref.bindings;

            if (bindings) {
                for (var _target2 = bindings, _index = 0, _ref2, _l2 = _target2.length; _ref2 = _target2[_index], _index < _l2; _index++) {
                    var node = _ref2.node;

                    var eventNamespace = def.id + propName;
                    $(node).off('.' + eventNamespace);
                }
            }
        }

        return object;
    }

    // TODO: Array of names passed to off method is non-documented feature
    // split by spaces
    var names = isNamesVarArray ? givenNames : givenNames.split(splitBySpaceReg);

    for (var _target4 = names, _index2 = 0, name, _l4 = _target4.length; name = _target4[_index2], _index2 < _l4; _index2++) {
        var delegatedEventParts = name.split('@');
        if (delegatedEventParts.length > 1) {
            var path = delegatedEventParts[0],
                delegatedName = delegatedEventParts[1];

            undelegateListener(object, path, delegatedName, callback, context);
        } else {
            removeListener(object, name, callback, context);
        }
    }

    return object;
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(0);

var removeListener = __webpack_require__(4);

var $ = __webpack_require__(5);

// removes dom listener from nodes bound to given key
module.exports = removeDomListener;
function removeDomListener(object, key, eventName, selector, callback, context, info) {
    var def = defs.get(object);

    if (!def) {
        return object;
    }

    var props = def.props;

    var propDef = props[key];

    if (!propDef) {
        return object;
    }

    var bindings = propDef.bindings;


    if (bindings) {
        // collect bound nodes and remove DOM event listener
        var nodes = Array(bindings.length);
        var eventNamespace = def.id + key;

        for (var _target = bindings, index = 0, binding, _l = _target.length; binding = _target[index], index < _l; index++) {
            nodes[index] = binding.node;
        }

        $(nodes).off(eventName + '.' + eventNamespace, selector, callback);
    }

    // remove bind and unbind listeners from given key
    removeListener(object, 'bind:' + key, callback, context, info);
    removeListener(object, 'unbind:' + key, callback, context, info);

    return object;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undelegateListener = __webpack_require__(12);

var triggerOne = __webpack_require__(2);

// the function is called when some part of a path is changed
// it delegates event listener for new branch of an object and undelegates it for old one
// used for non-asterisk events
module.exports = changeHandler;
function changeHandler(_ref) {
    var previousValue = _ref.previousValue,
        value = _ref.value;

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : triggerOne.latestEvent.info.delegatedData,
        path = _ref2.path,
        name = _ref2.name,
        callback = _ref2.callback,
        context = _ref2.context,
        info = _ref2.info;

    if (value && typeof value === 'object') {
        var delegateListener = __webpack_require__(13); // fixing circular ref

        delegateListener(value, path, name, callback, context, info);
    }

    if (previousValue && typeof previousValue === 'object') {
        undelegateListener(previousValue, path, name, callback, context, info);
    }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns DOM event handler
module.exports = createDomEventHandler;
function createDomEventHandler(_ref) {
    var key = _ref.key,
        object = _ref.object,
        callback = _ref.callback,
        context = _ref.context;

    return function domEventHandler(domEvent) {
        var originalEvent = domEvent.originalEvent || domEvent;
        // matreshkaTriggerArgs are created when DOM event is triggered by trigger method
        var triggerArgs = originalEvent.matreshkaTriggerArgs;
        var which = domEvent.which,
            target = domEvent.target,
            ctrlKey = domEvent.ctrlKey,
            altKey = domEvent.altKey;


        if (triggerArgs) {
            // if args are passed to trigger method then pass them to an event handler
            callback.apply(context, triggerArgs);
        } else {
            // use the following object as an arg for event handler
            callback.call(context, {
                self: object,
                node: this,
                preventDefault: function () {
                    return domEvent.preventDefault();
                },
                stopPropagation: function () {
                    return domEvent.stopPropagation();
                },
                key: key,
                domEvent: domEvent,
                originalEvent: originalEvent,
                which: which,
                target: target,
                ctrlKey: ctrlKey,
                altKey: altKey
            });
        }
    };
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Object.assign polyfyll
/* istanbul ignore next */
var assign = Object.assign || function assign(target) {
    /* istanbul ignore next */
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert variable to object');
    }

    var output = Object(target);

    for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
            for (var _target = source, _keys = Object.keys(_target), _i = 0, nextKey, nextValue, _l = _keys.length; (nextKey = _keys[_i], nextValue = _target[nextKey]), _i < _l; _i++) {
                output[nextKey] = nextValue;
            }
        }
    }

    return output;
};

module.exports = assign;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Init = __webpack_require__(15);

var data = __webpack_require__(14);

// adds unique nodes to mq collection
module.exports = add;
function add(selector) {
    var idMap = {};

    var result = void 0;

    var nodes = new Init(selector);

    if (this.length) {
        result = new Init();
        for (var i = 0; i < this.length; i++) {
            var node = this[i];
            var nodeID = node.b$ = node.b$ || ++data.nodeIndex; // eslint-disable-line no-plusplus
            idMap[nodeID] = 1;
            result.push(node);
        }

        for (var _i = 0; _i < nodes.length; _i++) {
            var _node = nodes[_i];
            var _nodeID = _node.b$ = _node.b$ || ++data.nodeIndex; // eslint-disable-line no-plusplus
            if (!idMap[_nodeID]) {
                idMap[_nodeID] = 1;
                result.push(_node);
            }
        }
    } else {
        result = nodes;
    }

    return result;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(14);

var splitBySpaceReg = /\s+/;
var splitByDotReg = /\.(.+)/;

// removes event handler from a set of elements
module.exports = off;
function off(namesStr, selector, handler) {
    if (typeof selector === 'function') {
        handler = selector; // eslint-disable-line no-param-reassign
        selector = null; // eslint-disable-line no-param-reassign
    }

    var names = namesStr.split(splitBySpaceReg);

    for (var i = 0; i < names.length; i++) {
        var _names$i$split = names[i].split(splitByDotReg),
            name = _names$i$split[0],
            namespace = _names$i$split[1];

        for (var j = 0; j < this.length; j++) {
            var node = this[j];

            if (!name && namespace) {
                for (var k = 0, keys = Object.keys(data.allEvents); k < keys.length; k++) {
                    var _events = data.allEvents[keys[k]];

                    for (var l = 0; l < _events.length; l++) {
                        var event = _events[i];
                        if (event.namespace === namespace && event.nodeID === node.b$) {
                            node.removeEventListener(event.name, event.delegate || event.handler);
                            _events.splice(l, 1);
                            l -= 1;
                        }
                    }
                }

                continue;
            }

            var events = data.allEvents[name + node.b$];
            if (events) {
                for (var _k = 0; _k < events.length; _k++) {
                    var _event = events[_k];
                    if ((!handler || handler === _event.handler || handler === _event.delegate) && (!namespace || namespace === _event.namespace) && (!selector || selector === _event.selector)) {
                        node.removeEventListener(name, _event.delegate || _event.handler);
                        events.splice(_k, 1);
                        _k -= 1;
                    }
                }
            } else if (!namespace && !selector) {
                node.removeEventListener(name, handler);
            }
        }
    }

    return this;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(14);

var splitBySpaceReg = /\s+/;
var splitByDotReg = /\.(.+)/;
var randomID = Math.random().toString().replace('0.', 'x') + 'y'; // x12345y

// checks an element against a selector
function is(node, selector) {
    return (node.matches || node.webkitMatchesSelector || node.mozMatchesSelector || node.msMatchesSelector || node.oMatchesSelector).call(node, selector);
}

// the function is used when a selector is given
function delegateHandler(evt, selector, handler) {
    var scopeSelector = '[' + randomID + '="' + randomID + '"] ';
    var splittedSelector = selector.split(',');

    var matching = '';

    for (var i = 0; i < splittedSelector.length; i++) {
        var sel = splittedSelector[i];
        matching += '' + (i === 0 ? '' : ',') + scopeSelector + sel + ',' + scopeSelector + sel + ' *';
    }

    this.setAttribute(randomID, randomID);

    if (is(evt.target, matching)) {
        handler.call(this, evt);
    }

    this.removeAttribute(randomID);
}

// adds event listener to a set of elemnts
module.exports = on;
function on(namesStr, selector, handler) {
    var names = namesStr.split(splitBySpaceReg);
    var delegate = void 0;

    if (typeof selector === 'function') {
        handler = selector; // eslint-disable-line no-param-reassign
        selector = null; // eslint-disable-line no-param-reassign
    }

    if (selector) {
        delegate = function uniqueDelegateHandler(evt) {
            delegateHandler.call(this, evt, selector, handler);
        };
    }

    for (var i = 0; i < names.length; i++) {
        var _names$i$split = names[i].split(splitByDotReg),
            name = _names$i$split[0],
            namespace = _names$i$split[1];

        for (var j = 0; j < this.length; j++) {
            var node = this[j];
            var nodeID = node.b$ = node.b$ || ++data.nodeIndex; // eslint-disable-line no-plusplus
            var events = data.allEvents[name + nodeID] = data.allEvents[name + nodeID] || [];

            var exist = false;

            for (var k = 0; k < events.length; k++) {
                var event = events[k];

                if (handler === event.handler && (!selector || selector === event.selector)) {
                    exist = true;
                    break;
                }
            }

            if (!exist) {
                events.push({
                    delegate: delegate,
                    handler: handler,
                    namespace: namespace,
                    selector: selector,
                    nodeID: nodeID,
                    name: name
                });

                node.addEventListener(name, delegate || handler, false);
            }
        }
    }

    return this;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html2nodeList = __webpack_require__(23);

var Init = __webpack_require__(15);

// parses given HTML and returns mq instance
module.exports = parseHTML;
function parseHTML(html) {
    return new Init(html2nodeList(html));
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initMK = __webpack_require__(8);

var defineProp = __webpack_require__(7);

var addListener = __webpack_require__(9);

var $ = __webpack_require__(5);

var createDomEventHandler = __webpack_require__(52);

// returns an object with event handlers used at addDomListener
function createBindingHandlers(_ref) {
    var fullEventName = _ref.fullEventName,
        domEventHandler = _ref.domEventHandler,
        selector = _ref.selector;

    return {
        bindHandler: function () {
            var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var node = evt.node;

            if (node) {
                $(node).on(fullEventName, selector, domEventHandler);
            }
        },
        unbindHandler: function () {
            var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var node = evt.node;

            if (node) {
                $(node).off(fullEventName, selector, domEventHandler);
            }
        }
    };
}

// adds DOM event listener for nodes bound to given property
module.exports = addDomListener;
function addDomListener(object, key, eventName, selector, callback, context, info) {
    var def = initMK(object);
    var propDef = defineProp(object, key);

    var domEventHandler = createDomEventHandler({
        key: key,
        object: object,
        callback: callback,
        context: context || object
    });

    // making possible to remove this event listener
    domEventHandler._callback = callback;

    var eventNamespace = def.id + key;
    var fullEventName = eventName + '.' + eventNamespace;

    var _createBindingHandler = createBindingHandlers({
        fullEventName: fullEventName,
        domEventHandler: domEventHandler,
        selector: selector
    }),
        bindHandler = _createBindingHandler.bindHandler,
        unbindHandler = _createBindingHandler.unbindHandler;

    var addBindListenerResult = addListener(object, 'bind:' + key, bindHandler, context, info);
    var addUnbindListenerResult = addListener(object, 'unbind:' + key, unbindHandler, context, info);

    // if events are added successfully then run bindHandler for every node immediately
    // TODO: Describe why do we need addBindListenerResult and addUnbindListenerResult
    if (addBindListenerResult && addUnbindListenerResult) {
        var bindings = propDef.bindings;

        if (bindings) {
            for (var _target = bindings, _index = 0, _ref2, _l = _target.length; _ref2 = _target[_index], _index < _l; _index++) {
                var node = _ref2.node;
                return bindHandler({ node: node });
            }
        }
    }

    return object;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splitBySpaceReg = __webpack_require__(17);

var checkObjectType = __webpack_require__(1);

var defiError = __webpack_require__(3);

var addListener = __webpack_require__(9);

var delegateListener = __webpack_require__(13);

// adds event listener
module.exports = on;
function on(object, givenNames, callback, triggerOnInit, context) {
    // throw error when object type is wrong
    checkObjectType(object, 'on');

    var isNamesVarArray = givenNames instanceof Array;

    // allow to pass name-handler object
    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
        for (var _target = givenNames, _keys = Object.keys(_target), _i = 0, namesObjName, namesObjCallback, _l = _keys.length; (namesObjName = _keys[_i], namesObjCallback = _target[namesObjName]), _i < _l; _i++) {
            on(object, namesObjName, namesObjCallback, callback, triggerOnInit)
        }

        return object;
    }

    if (typeof givenNames !== 'string' && !isNamesVarArray) {
        throw defiError('on:names_type', { names: givenNames });
    }

    // split by spaces
    // TODO: Array of names passed to on method is non-documented feature
    var names = isNamesVarArray ? givenNames : givenNames.split(splitBySpaceReg);

    // flip triggerOnInit and context when triggerOnInit is not boolean
    if (typeof triggerOnInit !== 'boolean' && typeof triggerOnInit !== 'undefined') {
        var _ref = [triggerOnInit, context];
        // eslint-disable-next-line no-param-reassign

        context = _ref[0];
        triggerOnInit = _ref[1];
    }

    // call callback immediatelly if triggerOnInit is true
    for (var _target2 = names, _index = 0, name, _l2 = _target2.length; name = _target2[_index], _index < _l2; _index++) {
        var delegatedEventParts = name.split('@');

        if (delegatedEventParts.length > 1) {
            // if @ exists in event name then this is delegated event
            var path = delegatedEventParts[0],
                delegatedName = delegatedEventParts[1];

            delegateListener(object, path, delegatedName, callback, context || object);
        } else {
            // if not, this is simple event
            addListener(object, name, callback, context);
        }
    }

    if (triggerOnInit === true) {
        callback.call(context || object, { triggerOnInit: triggerOnInit });
    }

    return object;
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on = __webpack_require__(59);

var off = __webpack_require__(49);

var trigger = __webpack_require__(48);

var calc = __webpack_require__(45);

var bindNode = __webpack_require__(19);

var bound = __webpack_require__(28);

var unbindNode = __webpack_require__(11);

var bindOptionalNode = __webpack_require__(27);

var set = __webpack_require__(6);

var remove = __webpack_require__(26);

var mediate = __webpack_require__(25);

// the following methods can be used as static methods and as instance methods
exports.on = on;
exports.off = off;
exports.trigger = trigger;
exports.calc = calc;
exports.bindNode = bindNode;
exports.bound = bound;
exports.unbindNode = unbindNode;
exports.bindOptionalNode = bindOptionalNode;
exports.set = set;
exports.remove = remove;
exports.mediate = mediate;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(60);

var functions = _lib;


module.exports = functions;

/***/ })
/******/ ]);
});if(typeof Matreshka === "function") this.MK = Matreshka;