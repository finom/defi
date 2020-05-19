/*
    --------------------------------------------------------------
    defi.js v1.1.9 (Tue, 19 May 2020 16:28:32 GMT)
    By Andrey Gubanov http://github.com/finom
    Released under the MIT license
    More info: https://defi.js.org
    --------------------------------------------------------------
*/

var defi =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = forEach;

function forEach(arr, callback) {
  var i = 0;
  var l = arr.length;

  for (; i < l; i++) {
    callback(arr[i], i);
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// object definitions
module.exports = new WeakMap();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var defiError = __webpack_require__(8);

// checks type of a variable and throws an error if its type is not an object
module.exports = checkObjectType;

function checkObjectType(object, method) {
  var typeofObject = object === null ? 'null' : _typeof(object);

  if (typeofObject !== 'object' && typeofObject !== 'function') {
    throw defiError('common:object_type', {
      object: object,
      method: method
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = forOwn;

function forOwn(obj, callback) {
  var keys = Object.keys(obj);
  var l = keys.length;
  var i = 0;
  var key;

  while (i < l) {
    key = keys[i++];
    callback(obj[key], key);
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(2);

// triggers one event
module.exports = triggerOne;

function triggerOne(object, name, triggerArgs) {
  var def = defs.get(object);
  var events = def && def.events[name];

  if (events) {
    var l = events.length;
    var i = 0; // allow to pass both array of args and single arg as triggerArgs

    if (triggerArgs instanceof Array) {
      while (i < l) {
        var event = triggerOne.latestEvent = events[i];
        var callback = event.callback;
        callback.apply(object, triggerArgs);
        i += 1;
      }
    } else {
      while (i < l) {
        var _event = triggerOne.latestEvent = events[i];

        var _callback = _event.callback;

        _callback.call(object, triggerArgs);

        i += 1;
      }
    }
  }
} // latestEvent is used as required hack in somemethods


triggerOne.latestEvent = {
  info: {},
  name: null
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayWithHoles = __webpack_require__(36);

var iterableToArrayLimit = __webpack_require__(37);

var unsupportedIterableToArray = __webpack_require__(38);

var nonIterableRest = __webpack_require__(40);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

/* eslint-disable prefer-template, max-len */
var bindingErrorPrefix = 'Binding error:';
var calcErrorPrefix = 'Calc error:';

var getType = function getType(variable) {
  if (variable === null) {
    return 'null';
  }

  return _typeof(variable);
};

var getTypeError = function getTypeError(variable, variableName, expectedType) {
  return "".concat(variableName, " must have type \"").concat(expectedType, "\" but got \"").concat(getType(variable), "\" instead.");
};

var errors = {
  'common:object_type': function commonObject_type(_ref) {
    var object = _ref.object,
        method = _ref.method;
    return "Error in ".concat(method, ": ") + getTypeError(object, 'object', 'object');
  },
  'binding:node_missing': function bindingNode_missing(_ref2) {
    var key = _ref2.key,
        node = _ref2.node;
    var selectorInfo = typeof node === 'string' ? " (given selector is \"".concat(node, "\")") : '';
    return "".concat(bindingErrorPrefix, " node is missing for key \"").concat(key, "\"").concat(selectorInfo, ".");
  },
  'binding:falsy_key': function bindingFalsy_key() {
    return "".concat(bindingErrorPrefix, " \"key\" arg cannot be falsy");
  },
  'calc:target_type': function calcTarget_type(_ref3) {
    var target = _ref3.target;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(target, 'target key', 'string'));
  },
  'calc:source_key_type': function calcSource_key_type(_ref4) {
    var sourceKey = _ref4.sourceKey;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(sourceKey, 'source key', 'string'));
  },
  'calc:source_object_type': function calcSource_object_type(_ref5) {
    var sourceObject = _ref5.sourceObject;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(sourceObject, 'source object', 'object'));
  },
  'calc:source_type': function calcSource_type(_ref6) {
    var source = _ref6.source;
    return "".concat(calcErrorPrefix, " ").concat(getTypeError(source, 'source', 'object'));
  },
  'remove:key_type': function removeKey_type(_ref7) {
    var key = _ref7.key;
    return "Error in remove: ".concat(getTypeError(key, 'key', 'string'));
  },
  'mediate:key_type': function mediateKey_type(_ref8) {
    var key = _ref8.key;
    return "Error in mediate: ".concat(getTypeError(key, 'key', 'string'));
  }
};
module.exports = defiError;

function defiError(key, data) {
  var getError = errors[key];

  if (!getError) {
    /* istanbul ignore next */
    throw Error("Unknown error \"".concat(key, "\". Please report about this on Github."));
  }

  return new Error(getError(data));
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(2);

var objectId = 0; // this is a common function which associates an object with its defi definition

module.exports = initDefi;

function initDefi(object) {
  var def = defs.get(object);

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(2);

var _set = __webpack_require__(14);

// the function defines needed descriptor for given property
module.exports = defineProp;

function defineProp(object, key) {
  var def = defs.get(object); // if no object definition do nothing

  if (!def) {
    return null;
  }

  if (!def.props[key]) {
    var propDef = def.props[key] = {
      value: object[key],
      mediator: null,
      bindings: null
    };
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      get: function get() {
        return propDef.value;
      },
      set: function set(v) {
        return _set(object, key, v, {
          fromSetter: true
        });
      }
    });
  }

  return def.props[key];
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7);

var defs = __webpack_require__(2);

var triggerOne = __webpack_require__(6);

var domEventReg = __webpack_require__(15);

var forEach = __webpack_require__(0);

var forOwn = __webpack_require__(5);

// removes simple event listener from an object
module.exports = removeListener;

function removeListener(object, name, callback, info) {
  var def = defs.get(object); // if no definition do nothing

  if (!def) {
    return false;
  }

  var allEvents = def.events;
  var events = allEvents[name];
  var retain = [];
  var noTrigger = name ? name[0] === '_' : false;
  var nameIsString = typeof name === 'string';
  var domEventExecResult = nameIsString ? domEventReg.exec(name) : null;

  if (domEventExecResult) {
    var _domEventExecResult = _slicedToArray(domEventExecResult, 4),
        eventName = _domEventExecResult[1],
        key = _domEventExecResult[2],
        selector = _domEventExecResult[3]; // fixing circular reference issue


    var _require = __webpack_require__(41),
        removeDomListener = _require["default"];

    removeDomListener(object, key, eventName, selector, callback, info);
    return true;
  } // if all events need to be removed


  if (typeof name === 'undefined') {
    if (!noTrigger) {
      forOwn(allEvents, function (allEventsItem, allEventsName) {
        forEach(allEventsItem, function (event) {
          var removeEventData = {
            allEventsName: allEventsName,
            callback: event.callback
          };
          triggerOne(object, "removeevent:".concat(name), removeEventData);
          triggerOne(object, 'removeevent', removeEventData);
        });
      });
    } // restore default value of "events"


    def.events = {};
  } else if (events) {
    // if events with given name are found
    forEach(events, function (event) {
      var argCallback = callback && callback._callback || callback;
      var eventCallback = event.callback._callback || event.callback;

      if (argCallback && argCallback !== eventCallback) {
        // keep event
        retain.push(event);
      } else {
        var removeEventData = {
          name: name,
          callback: event.callback
        };

        if (!noTrigger) {
          if (nameIsString) {
            triggerOne(object, "removeevent:".concat(name), removeEventData);
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Init = __webpack_require__(16);

var parseHTML = __webpack_require__(42);

var on = __webpack_require__(43);

var off = __webpack_require__(44);

var add = __webpack_require__(45);

var assign = __webpack_require__(18);

// a tiny jQuery-like library
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7);

var initDefi = __webpack_require__(9);

var triggerOne = __webpack_require__(6);

var defineProp = __webpack_require__(10);

var domEventReg = __webpack_require__(15);

// property modifier event regexp
// eslint-disable-next-line max-len
var propModEventReg = /^_change:deps:|^_change:bindings:|^_change:delegated:|^_change:common:|^_change:tree:|^change:|^beforechange:/; // adds simple event listener
// used as core of event engine

module.exports = addListener;

function addListener(object, name, callback) {
  var info = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _initDefi = initDefi(object),
      allEvents = _initDefi.events;

  var events = allEvents[name];
  var event = {
    callback: callback,
    name: name,
    info: info
  };
  var nameIsString = typeof name === 'string'; // skipChecks is used by internal methods for better performance

  var _info$skipChecks = info.skipChecks,
      skipChecks = _info$skipChecks === void 0 ? false : _info$skipChecks;

  if (!skipChecks) {
    var domEventExecResult = nameIsString && domEventReg.exec(name);

    if (domEventExecResult) {
      var _domEventExecResult = _slicedToArray(domEventExecResult, 4),
          eventName = _domEventExecResult[1],
          key = _domEventExecResult[2],
          selector = _domEventExecResult[3]; // fixing circular reference issue


      var _require = __webpack_require__(46),
          addDomListener = _require["default"];

      addDomListener(object, key, eventName, selector, callback, info);
      return true;
    }
  } // if there are events with the same name


  if (events) {
    if (!skipChecks) {
      // if there are events with the same data, return false
      for (var i = 0; i < events.length; i++) {
        var existingEvent = events[i];
        var argCallback = callback && callback._callback || callback;
        var eventCallback = existingEvent.callback._callback || existingEvent.callback;

        if (argCallback === eventCallback) {
          return false;
        }
      }
    } // if the event isn't found add it to the event list


    events.push(event);
  } else {
    // if there are no events with the same name, create an array with only  one event
    allEvents[name] = [event];
  }

  if (nameIsString && propModEventReg.test(name)) {
    // define needed accessors for KEY
    defineProp(object, name.replace(propModEventReg, ''));
  } // names prefixed by underscore mean "private" events


  if (!skipChecks && name[0] !== '_') {
    if (nameIsString) {
      triggerOne(object, "addevent:".concat(name), event);
    }

    triggerOne(object, 'addevent', event);
  } // if event is added successfully return true


  return true;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

var _typeof = __webpack_require__(1);

var initDefi = __webpack_require__(9);

var defs = __webpack_require__(2);

var triggerOne = __webpack_require__(6);

var checkObjectType = __webpack_require__(3);

var is = __webpack_require__(28);

var forOwn = __webpack_require__(5);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// the function sets new value for a property
// since its performance is very critical we're checking events existence manually
module.exports = set;

function set(object, key, value, eventOptions) {
  // throw error when object type is wrong
  checkObjectType(object, 'set'); // if no key or falsy key is given

  if (!key) {
    return object;
  } // allow to use key-value object as another method variation


  if (_typeof(key) === 'object') {
    forOwn(key, function (objVal, objKey) {
      return set(object, objKey, objVal, value);
    });
    return object;
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
  // possible flags, all of them are falsy by default

  var _eventOptions = eventOptions,
      skipMediator = _eventOptions.skipMediator,
      fromMediator = _eventOptions.fromMediator,
      define = _eventOptions.define,
      force = _eventOptions.force,
      forceHTML = _eventOptions.forceHTML,
      silent = _eventOptions.silent,
      silentHTML = _eventOptions.silentHTML,
      skipCalc = _eventOptions.skipCalc;

  if (define) {
    // fixing circular ref
    var _require = __webpack_require__(10),
        defineProp = _require["default"];

    initDefi(object);
    defineProp(object, key);
  }

  var def = defs.get(object); // if no object definition then make simple assignment

  if (!def) {
    object[key] = value;
    return object;
  }

  var props = def.props,
      events = def.events;
  var propDef = props[key]; // if no property definition then make simple assignment

  if (!propDef) {
    object[key] = value;
    return object;
  }

  var previousValue = propDef.value,
      mediator = propDef.mediator;
  var newValue;

  if (mediator && !is(value, previousValue) && !skipMediator && !fromMediator) {
    newValue = mediator(value);
  } else {
    newValue = value;
  }

  var isChanged = !is(newValue, previousValue); // add to eventOptions object some useful properties
  // we override default eventOptions because some of the properties need to have actual values,
  // not inherited ones (eg when calc is used)

  var extendedEventOptions = _objectSpread(_objectSpread({}, eventOptions), {}, {
    value: newValue,
    self: object,
    previousValue: previousValue,
    key: key,
    isChanged: isChanged
  });

  var triggerChange = (isChanged || force) && !silent; // trigger beforechange:KEY and beforechange events

  if (triggerChange) {
    var beforechangeStr = 'beforechange';
    var beforechangeEventName = "".concat(beforechangeStr, ":").concat(key);

    if (events[beforechangeEventName]) {
      triggerOne(object, beforechangeEventName, extendedEventOptions);
    }

    if (events[beforechangeStr]) {
      triggerOne(object, beforechangeStr, extendedEventOptions);
    }
  }

  propDef.value = newValue; // triger bindings

  if (!silentHTML && (isChanged || forceHTML)) {
    var changeBindingsEventName = "_change:bindings:".concat(key);

    if (events[changeBindingsEventName]) {
      triggerOne(object, changeBindingsEventName, extendedEventOptions);
    }
  } // trigger change:KEY and change events


  if (triggerChange) {
    var changeStr = 'change';
    var changeEventName = "".concat(changeStr, ":").concat(key);

    if (events[changeEventName]) {
      triggerOne(object, changeEventName, extendedEventOptions);
    }

    if (events[changeStr]) {
      triggerOne(object, changeStr, extendedEventOptions);
    }
  } // trigger dependencies made by calc method


  if ((isChanged || force) && !skipCalc) {
    var changeDepsEventName = "_change:deps:".concat(key);

    if (events[changeDepsEventName]) {
      triggerOne(object, changeDepsEventName, extendedEventOptions);
    }
  }

  if (isChanged) {
    // trigger common delegated events logic
    var changeDelegatedKeyEventName = "_change:delegated:".concat(key);

    if (events[changeDelegatedKeyEventName]) {
      triggerOne(object, changeDelegatedKeyEventName, extendedEventOptions);
    } // trigger tree change events logic


    var changeTreeEventName = "_change:tree:".concat(key);

    if (events[changeTreeEventName]) {
      triggerOne(object, changeTreeEventName, extendedEventOptions);
    } // trigger other internal change events


    var changeCommonEventName = "_change:common:".concat(key);

    if (events[changeCommonEventName]) {
      triggerOne(object, changeCommonEventName, extendedEventOptions);
    } // trigger delegated logic for asterisk events (*.*.*@foo)
    // TODO: Confusing events names ("_change:delegated", "_change:common:KEY" etc)


    var changeDelegatedEventName = '_change:delegated';

    if (events[changeDelegatedEventName]) {
      triggerOne(object, changeDelegatedEventName, extendedEventOptions);
    }
  }

  return object;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// the regexp allows to parse things like "click::x(.y)"
// it's shared between few modules
module.exports = /([^::]+)::([^()]+)?(?:\((.*)\))?/;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var html2nodeList = __webpack_require__(26);

// function-constructor of mq library
// accepts many kinds of arguments (selector, html, function)
function MQInit(selector, context) {
  var win = window;
  var result;

  if (selector) {
    if (selector.nodeType || _typeof(win) === 'object' && selector === win) {
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// an object allows to share data between modules; it's needed because we use
// simplified ES modules there and cannot import and share a number
module.exports = {
  nodeIndex: 0,
  allEvents: {}
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = assign;

function assign(target, source) {
  var keys = Object.keys(source);
  var i = keys.length;
  var key;

  while (--i >= 0) {
    key = keys[i];
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var defs = __webpack_require__(2);

var removeListener = __webpack_require__(11);

var slice = __webpack_require__(27);

var forEach = __webpack_require__(0);

// the function removes internally used events such as _asterisk:add
function detatchDelegatedLogic(_ref) {
  var delegatedEventName = _ref.delegatedEventName,
      pathStr = _ref.pathStr,
      allEvents = _ref.allEvents;
  var retain = [];
  var events = allEvents[delegatedEventName];
  forEach(events, function (event) {
    // pathStr is assigned to info in delegateListener
    if (event.info.pathStr !== pathStr) {
      retain.push(event);
    }
  });

  if (retain.length) {
    allEvents[delegatedEventName] = retain;
  } else {
    delete allEvents[delegatedEventName];
  }
} // removes delegated event listener from an object by given path


module.exports = undelegateListener;

function undelegateListener(object, givenPath, name, callback) {
  var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var def = defs.get(object); // if no definition do nothing

  if (!def) {
    return;
  }

  var allEvents = def.events;
  var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

  if (!path || !path.length) {
    // if no path then remove listener
    removeListener(object, name, callback, info);
  } else {
    // else do all magic
    var key = path[0];
    var pathStr;

    if (path.length > 1) {
      path = slice(path, 1);
      pathStr = path.join('.');
    } else {
      path = [];
      pathStr = path[0] || '';
    }

    var delegatedChangeEvtName = "_change:delegated:".concat(key);

    if (allEvents[delegatedChangeEvtName]) {
      detatchDelegatedLogic({
        delegatedEventName: delegatedChangeEvtName,
        pathStr: pathStr,
        allEvents: allEvents
      });
    }

    if (_typeof(object[key]) === 'object') {
      undelegateListener(object[key], path, name, callback, info);
    }
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds.
// (c) https://davidwalsh.name/javascript-debounce-function
module.exports = debounce;

function debounce(func, givenDelay, thisArg) {
  var timeout;
  var delay;

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addListener = __webpack_require__(13);

var changeHandler = __webpack_require__(48);

var slice = __webpack_require__(27);

// adds delegated event listener to an object by given path
// TODO Handler uses wrong context
module.exports = delegateListener;

function delegateListener(object, givenPath, name, callback) {
  var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  // if typeof path is string and path is not empty string then split it
  var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

  if (!path || !path.length) {
    // if no path then add simple listener
    addListener(object, name, callback, info);
  } else {
    // else do all magic
    var key = path[0];
    var pathStr; // needed for undelegation

    if (path.length > 1) {
      path = slice(path, 1);
      pathStr = path.join('.');
    } else {
      path = [];
      pathStr = path[0] || '';
    }

    var delegatedData = {
      path: path,
      name: name,
      callback: callback,
      info: info,
      object: object
    }; // the event is triggered by "set";
    // a new function is created as a handler to make possible
    // to add the handler multiple times for one key

    addListener(object, "_change:delegated:".concat(key), function (evt) {
      return changeHandler(evt);
    }, {
      delegatedData: delegatedData,
      pathStr: pathStr
    }); // call handler manually

    changeHandler({
      value: object[key]
    }, delegatedData);
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var checkObjectType = __webpack_require__(3);

var defs = __webpack_require__(2);

var getNodes = __webpack_require__(31);

var removeTreeListener = __webpack_require__(30);

var forEach = __webpack_require__(0);

var forOwn = __webpack_require__(5);

var removeBinding = __webpack_require__(59);

// unbinds a node
module.exports = unbindNode;

function unbindNode(object, key, node, eventOptions) {
  // throw error when object type is wrong
  checkObjectType(object, 'unbindNode');

  if (key instanceof Array) {
    /*
     * accept array of keys
     * this.unbindNode(['a', 'b', 'c'], node)
     */
    forEach(key, function (itemKey) {
      return unbindNode(object, itemKey, node, eventOptions);
    });
    return object;
  }

  if (key && _typeof(key) === 'object') {
    forOwn(key, function (keyObjValue, keyObjKey) {
      if (keyObjValue.constructor === Object && 'node' in keyObjValue) {
        // this.unbindNode({ key: { node: $(), binder } ) }, { silent: true });
        unbindNode(object, keyObjKey, keyObjValue.node, node);
      } else if (keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
        // this.unbindNode({ key: [{ node: $(), binder }] ) }, { silent: true });
        forEach(keyObjValue, function (keyObjValueItem) {
          unbindNode(object, keyObjKey, keyObjValueItem.node, node);
        });
      } else {
        // this.unbindNode({ key: $() }, { silent: true });
        unbindNode(object, keyObjKey, keyObjValue, node);
      }
    });
    return object;
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var _eventOptions = eventOptions,
      deep = _eventOptions.deep;
  var def = defs.get(object);

  if (!def) {
    return object;
  }

  var props = def.props; // allow to pass null or undefined as key
  // if passed then remove bindings of all keys for given object

  if (key === null || typeof key === 'undefined') {
    forOwn(props, function (propsItem, propsKey) {
      unbindNode(object, propsKey, null, eventOptions);
    });
    return object;
  } // remove delegated binding


  if (deep !== false) {
    var deepPath = key.split('.');
    var deepPathLength = deepPath.length;

    if (deepPathLength > 1) {
      var target = object;

      for (var i = 0; i < deepPathLength - 1; i++) {
        // TODO: Do we need to throw an error when a target is falsy?
        target = target[deepPath[i]];
      } // TODO: Potential bug! This may undelegate listener for all bindings with the same path
      // ...(cannot reproduce)


      removeTreeListener(object, deepPath.slice(0, deepPathLength - 2));
      unbindNode(target, deepPath[deepPathLength - 1], node, eventOptions);
      return object;
    }
  }

  var propDef = props[key]; // when no propdef do nothing

  if (!propDef) {
    return object;
  }

  var bindings = propDef.bindings; // if the property doesn't have any bindings do nothing

  if (!bindings) {
    return object;
  } // if no node is pased remove all bindings for given key


  if (!node) {
    forEach(bindings, function (binding) {
      removeBinding({
        object: object,
        key: key,
        eventOptions: eventOptions,
        binding: binding
      });
    });
    propDef.bindings = null;
    return object;
  }

  var $nodes = getNodes(object, node);
  var retainBindings = [];
  var retainNodes = []; // iterate over all bindngs and compare their node with given nodes

  forEach($nodes, function (nodesItem) {
    forEach(bindings, function (binding) {
      if (binding.node === nodesItem) {
        removeBinding({
          object: object,
          key: key,
          eventOptions: eventOptions,
          binding: binding
        });
      } else {
        retainBindings.push(binding);
        retainNodes.push(nodesItem);
      }
    });
  }); // update bindings object

  if (retainBindings.length) {
    propDef.bindings = retainBindings;
  } else {
    propDef.bindings = null;
  }

  return object;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for input element based on its type
module.exports = input;

function input(type) {
  var on;

  switch (type) {
    case 'checkbox':
      return {
        on: 'click keyup',
        getValue: function getValue() {
          return this.checked;
        },
        setValue: function setValue(value) {
          this.checked = value;
        }
      };

    case 'radio':
      return {
        on: 'click keyup',
        getValue: function getValue() {
          return this.value;
        },
        setValue: function setValue(value) {
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
    getValue: function getValue() {
      return this.value;
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  };
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on = __webpack_require__(35);

var off = __webpack_require__(25);

var trigger = __webpack_require__(49);

var calc = __webpack_require__(52);

var bindNode = __webpack_require__(56);

var bound = __webpack_require__(67);

var unbindNode = __webpack_require__(22);

var set = __webpack_require__(14);

var remove = __webpack_require__(68);

var mediate = __webpack_require__(69);

// the following methods can be used as static methods and as instance methods
exports.on = on;
exports.off = off;
exports.trigger = trigger;
exports.calc = calc;
exports.bindNode = bindNode;
exports.bound = bound;
exports.unbindNode = unbindNode;
exports.set = set;
exports.remove = remove;
exports.mediate = mediate;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7);

var _typeof = __webpack_require__(1);

var checkObjectType = __webpack_require__(3);

var forEach = __webpack_require__(0);

var forOwn = __webpack_require__(5);

var defs = __webpack_require__(2);

var removeListener = __webpack_require__(11);

var undelegateListener = __webpack_require__(19);

var $ = __webpack_require__(12);

// removes event listener
module.exports = off;

function off(object, givenNames, callback) {
  // throw error when object type is wrong
  checkObjectType(object, 'off');
  var isNamesVarArray = givenNames instanceof Array;
  var def = defs.get(object); // allow to pass name-handler object
  // TODO: Name-handler object passed to off method is non-documented feature

  if (givenNames && _typeof(givenNames) === 'object' && !isNamesVarArray) {
    forOwn(givenNames, function (namesObjCallback, namesObjName) {
      return off(object, namesObjName, namesObjCallback, callback);
    });
    return object;
  }

  if (!givenNames && !callback) {
    def.events = {};
    forOwn(def.props, function (_ref, propName) {
      var bindings = _ref.bindings;

      if (bindings) {
        forEach(bindings, function (_ref2) {
          var node = _ref2.node;
          var eventNamespace = def.id + propName;
          $(node).off(".".concat(eventNamespace));
        });
      }
    });
    return object;
  } // convert a single event name into array


  var names = isNamesVarArray ? givenNames : [givenNames];
  forEach(names, function (name) {
    var delegatedEventParts = typeof name === 'string' && name.split('@');

    if (delegatedEventParts.length > 1) {
      var _delegatedEventParts = _slicedToArray(delegatedEventParts, 2),
          path = _delegatedEventParts[0],
          delegatedName = _delegatedEventParts[1];

      undelegateListener(object, path, delegatedName, callback);
    } else {
      removeListener(object, name, callback);
    }
  });
  return object;
}

/***/ }),
/* 26 */
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
  var i;
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = slice;

function slice(arrLike, start, end) {
  var l = arrLike.length;
  var i = start || 0;

  var _end = end || l;

  var arr = Array(_end - i);
  var j = 0;

  while (i < _end) {
    arr[j++] = arrLike[i++];
  }

  return arr;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// determines whether two values are the same value

/* istanbul ignore next */
var isPolyfill = function isPolyfill(v1, v2) {
  return v1 === 0 && v2 === 0 ? 1 / v1 === 1 / v2 : v1 !== v1 && v2 !== v2 || v1 === v2;
}; // eslint-disable-line


module.exports = Object.is || isPolyfill;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var _defineProperty = __webpack_require__(4);

var delegateListener = __webpack_require__(21);

var removeTreeListener = __webpack_require__(30);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// creates tree listener
function createTreeListener(_ref) {
  var handler = _ref.handler,
      restPath = _ref.restPath;

  var newHandler = function treeListener(changeEvent) {
    var extendedChangeEvent = _objectSpread({
      restPath: restPath
    }, changeEvent);

    var previousValue = changeEvent.previousValue,
        value = changeEvent.value; // removes listener for all branches of the path on old object

    if (previousValue && _typeof(previousValue) === 'object') {
      removeTreeListener(previousValue, restPath, handler);
    } // adds listener for all branches of "restPath" path on newly assigned object


    if (value && _typeof(value) === 'object') {
      addTreeListener(value, restPath, handler);
    } // call original handler


    handler.call(this, extendedChangeEvent);
  };

  newHandler._callback = handler;
  return newHandler;
} // listens changes for all branches of given path
// one of the most hard functions to understand


module.exports = addTreeListener;

function addTreeListener(object, deepPath, handler) {
  if (typeof deepPath === 'string') {
    deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
  } // iterate over all keys and delegate listener for all objects of given branch


  for (var i = 0; i < deepPath.length; i++) {
    // TODO: Array.prototype.slice method is slow
    var listenPath = deepPath.slice(0, i);
    var restPath = deepPath.slice(i + 1);
    delegateListener(object, listenPath, "_change:tree:".concat(deepPath[i]), createTreeListener({
      handler: handler,
      restPath: restPath
    }));
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undelegateListener = __webpack_require__(19);

// removes tree listener from all object tree of fiven path
module.exports = removeTreeListener;

function removeTreeListener(object, deepPath, handler) {
  if (typeof deepPath === 'string') {
    deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
  } // iterate over keys of the path and undelegate given handler (can be undefined)


  for (var i = 0; i < deepPath.length; i++) {
    // TODO: Array.prototype.slice is slow
    var listenedPath = deepPath.slice(0, i);
    undelegateListener(object, listenedPath, "_change:tree:".concat(deepPath[i]), handler);
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var selectNodes = __webpack_require__(57);

var $ = __webpack_require__(12);

var htmlReg = /</;
var customSelectorReg = /:bound\(([^(]*)\)/; // the function works just like DOM library accepting any kind of arg
// (HTML string, Node, NodeList etc) bu allows to pass custom selector
// eg :bound(KEY)

module.exports = getNodes;

function getNodes(object, selector) {
  var nodes;

  if (typeof selector === 'string' && !htmlReg.test(selector) && customSelectorReg.test(selector)) {
    nodes = selectNodes(object, selector);
  } else {
    nodes = $(selector);
  }

  return nodes;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultBinders = __webpack_require__(33);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(23);

var textarea = __webpack_require__(61);

var select = __webpack_require__(62);

var progress = __webpack_require__(63);

var output = __webpack_require__(64);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

var _lib = __webpack_require__(24);

var functions = _lib;

var lookForBinder = __webpack_require__(32);

var chain = __webpack_require__(70);

var defaultBinders = __webpack_require__(33);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

module.exports = _objectSpread(_objectSpread({}, functions), {}, {
  lookForBinder: lookForBinder,
  chain: chain,
  defaultBinders: defaultBinders
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7);

var _typeof = __webpack_require__(1);

var checkObjectType = __webpack_require__(3);

var off = __webpack_require__(25);

var debounce = __webpack_require__(20);

var forEach = __webpack_require__(0);

var forOwn = __webpack_require__(5);

var addListener = __webpack_require__(13);

var delegateListener = __webpack_require__(21);

// adds event listener
module.exports = on;

function on(object, givenNames, givenCallback, options) {
  // throw error when object type is wrong
  checkObjectType(object, 'on');
  var isNamesVarArray = givenNames instanceof Array; // allow to pass name-handler object

  if (givenNames && _typeof(givenNames) === 'object' && !isNamesVarArray) {
    forOwn(givenNames, function (namesObjCallback, namesObjName) {
      return on(object, namesObjName, namesObjCallback, givenCallback, options);
    });
    return object;
  } // convert a single event name into array


  var names = isNamesVarArray ? givenNames : [givenNames];

  var _ref = options || {},
      triggerOnInit = _ref.triggerOnInit,
      once = _ref.once,
      debounceOption = _ref.debounce;

  var callback;

  if (once) {
    callback = function onceCallback() {
      givenCallback.apply(this, arguments); // remove event listener after its call

      off(object, names, onceCallback);
    }; // allow to remove event listener py passing original callback to "off"


    callback._callback = givenCallback;
  } else if (typeof debounceOption === 'number' || debounceOption === true) {
    callback = debounce(givenCallback, debounceOption === true ? 0 : debounceOption, object);
  } else {
    callback = givenCallback;
  }

  forEach(names, function (name) {
    var delegatedEventParts = typeof name === 'string' && name.split('@');

    if (delegatedEventParts.length > 1) {
      // if @ exists in event name then this is delegated event
      var _delegatedEventParts = _slicedToArray(delegatedEventParts, 2),
          path = _delegatedEventParts[0],
          delegatedName = _delegatedEventParts[1];

      delegateListener(object, path, delegatedName, callback);
    } else {
      // if not, this is simple event
      addListener(object, name, callback);
    }
  }); // call callback immediatelly if triggerOnInit is true

  if (triggerOnInit) {
    callback.call(object, options);
  }

  return object;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayLikeToArray = __webpack_require__(39);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(2);

var removeListener = __webpack_require__(11);

var $ = __webpack_require__(12);

var forEach = __webpack_require__(0);

// removes dom listener from nodes bound to given key
module.exports = removeDomListener;

function removeDomListener(object, key, eventName, selector, callback, info) {
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
    forEach(bindings, function (binding, index) {
      nodes[index] = binding.node;
    });
    $(nodes).off("".concat(eventName, ".").concat(eventNamespace), selector, callback);
  } // remove bind and unbind listeners from given key


  removeListener(object, "bind:".concat(key), callback, info);
  removeListener(object, "unbind:".concat(key), callback, info);
  return object;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html2nodeList = __webpack_require__(26);

var Init = __webpack_require__(16);

// parses given HTML and returns mq instance
module.exports = parseHTML;

function parseHTML(html) {
  return new Init(html2nodeList(html));
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7);

var data = __webpack_require__(17);

var splitBySpaceReg = /\s+/;
var splitByDotReg = /\.(.+)/;
var randomID = "".concat(Math.random().toString().replace('0.', 'x'), "y"); // x12345y
// checks an element against a selector

function is(node, selector) {
  return (node.matches || node.webkitMatchesSelector || node.mozMatchesSelector || node.msMatchesSelector || node.oMatchesSelector).call(node, selector);
} // the function is used when a selector is given


function delegateHandler(evt, selector, handler) {
  var scopeSelector = "[".concat(randomID, "=\"").concat(randomID, "\"] ");
  var splittedSelector = selector.split(',');
  var matching = '';

  for (var i = 0; i < splittedSelector.length; i++) {
    var sel = splittedSelector[i];
    matching += "".concat(i === 0 ? '' : ',').concat(scopeSelector).concat(sel, ",").concat(scopeSelector).concat(sel, " *");
  }

  this.setAttribute(randomID, randomID);

  if (is(evt.target, matching)) {
    handler.call(this, evt);
  }

  this.removeAttribute(randomID);
} // adds event listener to a set of elemnts


module.exports = on;

function on(namesStr, selector, handler) {
  var names = namesStr.split(splitBySpaceReg);
  var delegate;

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
        _names$i$split2 = _slicedToArray(_names$i$split, 2),
        name = _names$i$split2[0],
        namespace = _names$i$split2[1];

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7);

var data = __webpack_require__(17);

var splitBySpaceReg = /\s+/;
var splitByDotReg = /\.(.+)/; // removes event handler from a set of elements

module.exports = off;

function off(namesStr, selector, handler) {
  if (typeof selector === 'function') {
    handler = selector; // eslint-disable-line no-param-reassign

    selector = null; // eslint-disable-line no-param-reassign
  }

  var names = namesStr.split(splitBySpaceReg);

  for (var i = 0; i < names.length; i++) {
    var _names$i$split = names[i].split(splitByDotReg),
        _names$i$split2 = _slicedToArray(_names$i$split, 2),
        name = _names$i$split2[0],
        namespace = _names$i$split2[1];

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Init = __webpack_require__(16);

var data = __webpack_require__(17);

// adds unique nodes to mq collection
module.exports = add;

function add(selector) {
  var idMap = {};
  var result;
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initDefi = __webpack_require__(9);

var defineProp = __webpack_require__(10);

var addListener = __webpack_require__(13);

var $ = __webpack_require__(12);

var createDomEventHandler = __webpack_require__(47);

var forEach = __webpack_require__(0);

// returns an object with event handlers used at addDomListener
function createBindingHandlers(_ref) {
  var fullEventName = _ref.fullEventName,
      domEventHandler = _ref.domEventHandler,
      selector = _ref.selector;
  return {
    bindHandler: function bindHandler() {
      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var node = evt.node;

      if (node) {
        $(node).on(fullEventName, selector, domEventHandler);
      }
    },
    unbindHandler: function unbindHandler() {
      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var node = evt.node;

      if (node) {
        $(node).off(fullEventName, selector, domEventHandler);
      }
    }
  };
} // adds DOM event listener for nodes bound to given property


module.exports = addDomListener;

function addDomListener(object, key, eventName, selector, callback, info) {
  var def = initDefi(object);
  var propDef = defineProp(object, key);
  var domEventHandler = createDomEventHandler({
    key: key,
    object: object,
    callback: callback
  }); // making possible to remove this event listener

  domEventHandler._callback = callback;
  var eventNamespace = def.id + key;
  var fullEventName = "".concat(eventName, ".").concat(eventNamespace);

  var _createBindingHandler = createBindingHandlers({
    fullEventName: fullEventName,
    domEventHandler: domEventHandler,
    selector: selector
  }),
      bindHandler = _createBindingHandler.bindHandler,
      unbindHandler = _createBindingHandler.unbindHandler;

  var addBindListenerResult = addListener(object, "bind:".concat(key), bindHandler, info);
  var addUnbindListenerResult = addListener(object, "unbind:".concat(key), unbindHandler, info); // if events are added successfully then run bindHandler for every node immediately
  // TODO: Describe why do we need addBindListenerResult and addUnbindListenerResult

  if (addBindListenerResult && addUnbindListenerResult) {
    var bindings = propDef.bindings;

    if (bindings) {
      forEach(bindings, function (_ref2) {
        var node = _ref2.node;
        return bindHandler({
          node: node
        });
      });
    }
  }

  return object;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns DOM event handler
module.exports = createDomEventHandler;

function createDomEventHandler(_ref) {
  var key = _ref.key,
      object = _ref.object,
      callback = _ref.callback;
  return function domEventHandler(domEvent) {
    var originalEvent = domEvent.originalEvent || domEvent; // defiTriggerArgs are created when DOM event is triggered by trigger method

    var triggerArgs = originalEvent.defiTriggerArgs;
    var which = domEvent.which,
        target = domEvent.target,
        ctrlKey = domEvent.ctrlKey,
        altKey = domEvent.altKey;

    if (triggerArgs) {
      // if args are passed to trigger method then pass them to an event handler
      callback.apply(object, triggerArgs);
    } else {
      // use the following object as an arg for event handler
      callback.call(object, {
        self: object,
        node: this,
        preventDefault: function preventDefault() {
          return domEvent.preventDefault();
        },
        stopPropagation: function stopPropagation() {
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var undelegateListener = __webpack_require__(19);

var triggerOne = __webpack_require__(6);

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
      info = _ref2.info;

  if (value && _typeof(value) === 'object') {
    var _require = __webpack_require__(21),
        delegateListener = _require["default"]; // fixing circular ref


    delegateListener(value, path, name, callback, info);
  }

  if (previousValue && _typeof(previousValue) === 'object') {
    undelegateListener(previousValue, path, name, callback, info);
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(7);

var domEventReg = __webpack_require__(15);

var checkObjectType = __webpack_require__(3);

var defs = __webpack_require__(2);

var triggerOne = __webpack_require__(6);

var triggerDomEvent = __webpack_require__(50);

var forEach = __webpack_require__(0);

// triggers an event
module.exports = trigger;

function trigger(object, givenNames) {
  for (var _len = arguments.length, triggerArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    triggerArgs[_key - 2] = arguments[_key];
  }

  // throw error when object type is wrong
  checkObjectType(object, 'trigger'); // allow to use either a string or an array of events

  var names = givenNames instanceof Array ? givenNames : [givenNames];
  var def = defs.get(object); // if no definition do nothing

  if (!def) {
    return object;
  }

  var allEvents = def.events;

  if (!allEvents) {
    return object;
  }

  forEach(names, function (name) {
    var domEvtExecResult = typeof name === 'string' && domEventReg.exec(name);

    if (domEvtExecResult) {
      // if EVT::KEY(SELECTOR) ia passed as event name then trigger DOM event
      var _domEvtExecResult = _slicedToArray(domEvtExecResult, 4),
          eventName = _domEvtExecResult[1],
          key = _domEvtExecResult[2],
          selector = _domEvtExecResult[3];

      triggerDomEvent(object, key, eventName, selector, triggerArgs);
    } else {
      // trigger ordinary event
      triggerOne(object, name, triggerArgs);
    }
  });
  return object;
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var triggerOneDOMEvent = __webpack_require__(51);

var defs = __webpack_require__(2);

var forEach = __webpack_require__(0);

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

  forEach(bindings, function (_ref) {
    var node = _ref.node;

    if (selector) {
      // if selector is given trigger an event on all node descendants
      var descendants = node.querySelectorAll(selector);
      forEach(descendants, function (descendant) {
        triggerOneDOMEvent({
          node: descendant,
          eventName: eventName,
          triggerArgs: triggerArgs
        });
      });
    } else {
      // trigger an event for single node
      triggerOneDOMEvent({
        node: node,
        eventName: eventName,
        triggerArgs: triggerArgs
      });
    }
  });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// triggers given DOM event on given node
module.exports = triggerOneDOMEvent;

function triggerOneDOMEvent(_ref) {
  var node = _ref.node,
      eventName = _ref.eventName,
      triggerArgs = _ref.triggerArgs;
  var _window = window,
      Event = _window.Event;
  var event = new Event(eventName, {
    bubbles: true,
    cancelable: true
  }); // defiTriggerArgs will be used in a handler created by addDOMListener

  event.defiTriggerArgs = triggerArgs;
  node.dispatchEvent(event);
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var initDefi = __webpack_require__(9);

var checkObjectType = __webpack_require__(3);

var defiError = __webpack_require__(8);

var debounce = __webpack_require__(20);

var forEach = __webpack_require__(0);

var forOwn = __webpack_require__(5);

var assign = __webpack_require__(18);

var addSource = __webpack_require__(53);

var createCalcHandler = __webpack_require__(54);

var defineProp = __webpack_require__(10);

// defines a property which is dependend on other properties
module.exports = calc;

function calc(object, target, sources, givenHandler, eventOptions) {
  // throw error when object type is wrong
  checkObjectType(object, 'calc');

  if (target instanceof Object) {
    /*
     * accept an object
     * this.calc({target: { source, handler, event } }, commonEventOptions);
     */
    forOwn(target, function (_ref, itemTarget) {
      var itemSource = _ref.source,
          itemHandler = _ref.handler,
          itemEventOptions = _ref.options;
      var commonEventOptions = sources;
      var mergedEventOptions = {};

      if (commonEventOptions) {
        // extend event object by "global" event
        assign(mergedEventOptions, commonEventOptions);
      }

      if (itemEventOptions) {
        // extend event object by "local" event ("event" key of an object)
        assign(mergedEventOptions, itemEventOptions);
      }

      calc(object, itemTarget, itemSource, itemHandler, mergedEventOptions);
    });
    return object;
  }

  if (typeof target !== 'string') {
    throw defiError('calc:target_type', {
      target: target
    });
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = initDefi(object);
  var _eventOptions = eventOptions,
      _eventOptions$setOnIn = _eventOptions.setOnInit,
      setOnInit = _eventOptions$setOnIn === void 0 ? true : _eventOptions$setOnIn,
      _eventOptions$debounc = _eventOptions.debounceCalcOnInit,
      debounceCalcOnInit = _eventOptions$debounc === void 0 ? false : _eventOptions$debounc,
      _eventOptions$debounc2 = _eventOptions.debounceCalc,
      debounceCalc = _eventOptions$debounc2 === void 0 ? true : _eventOptions$debounc2,
      _eventOptions$debounc3 = _eventOptions.debounceCalcDelay,
      debounceCalcDelay = _eventOptions$debounc3 === void 0 ? 0 : _eventOptions$debounc3;

  var defaultHandler = function defaultHandler(value) {
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
  var debouncedCalcHandler;
  var calcHandler;

  if (debounceCalcOnInit || debounceCalc) {
    debouncedCalcHandler = debounce(syncCalcHandler, debounceCalcDelay);
  }

  defineProp(object, target);

  if (!(sources instanceof Array)) {
    sources = [sources]; // eslint-disable-line no-param-reassign
  }

  if (debounceCalc) {
    calcHandler = debouncedCalcHandler;
  } else {
    calcHandler = syncCalcHandler;
  }

  forEach(sources, function (source) {
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
      if (!source || _typeof(source) !== 'object') {
        throw defiError('calc:source_type', {
          source: source
        });
      }

      var sourceKey = source.key;
      var sourceObject = source.object;

      if (sourceKey instanceof Array) {
        // many keys are passed
        forEach(sourceKey, function (sourceKeyItem) {
          addSource({
            calcHandler: calcHandler,
            allSources: allSources,
            sourceKey: sourceKeyItem,
            sourceObject: sourceObject,
            eventOptions: eventOptions
          });
        });
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
  });

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var addListener = __webpack_require__(13);

var addTreeListener = __webpack_require__(29);

var defiError = __webpack_require__(8);

// adds a source to a source list and adds needed event listener to a it
module.exports = addSource;

function addSource(_ref) {
  var calcHandler = _ref.calcHandler,
      allSources = _ref.allSources,
      sourceKey = _ref.sourceKey,
      sourceObject = _ref.sourceObject,
      eventOptions = _ref.eventOptions;
  var _eventOptions$exactKe = eventOptions.exactKey,
      exactKey = _eventOptions$exactKe === void 0 ? false : _eventOptions$exactKe;
  var isDelegated = false; // source key must be a string

  if (typeof sourceKey !== 'string') {
    throw defiError('calc:source_key_type', {
      sourceKey: sourceKey
    });
  } // source object must be an object


  if (!sourceObject || _typeof(sourceObject) !== 'object') {
    throw defiError('calc:source_object_type', {
      sourceObject: sourceObject
    });
  }

  if (!exactKey) {
    var deepPath = sourceKey.split('.'); // if something like a.b.c is used as a key

    if (deepPath.length > 1) {
      isDelegated = true; // TODO: Avoid collisions with bindings by using another event name
      // ... instead of _change:tree:xxx

      addTreeListener(sourceObject, deepPath, calcHandler);
    } else {
      exactKey = true;
    }
  }

  if (exactKey) {
    // normal handler
    addListener(sourceObject, "_change:deps:".concat(sourceKey), calcHandler);
  }

  allSources.push({
    sourceKey: sourceKey,
    sourceObject: sourceObject,
    isDelegated: isDelegated
  });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

var set = __webpack_require__(14);

var deepFind = __webpack_require__(55);

var forEach = __webpack_require__(0);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        protector = _changeEvent$protecto === void 0 ? {} : _changeEvent$protecto;
    var protectKey = target + def.id;
    var promiseCalc = eventOptions.promiseCalc;

    var setEventOptions = _objectSpread(_objectSpread({
      protector: protector
    }, eventOptions), changeEvent);

    if (protectKey in protector) {
      return;
    }

    protector[protectKey] = true;
    forEach(allSources, function (_ref2) {
      var sourceObject = _ref2.sourceObject,
          sourceKey = _ref2.sourceKey,
          isDelegated = _ref2.isDelegated;
      var value = isDelegated ? deepFind(sourceObject, sourceKey) : sourceObject[sourceKey];
      values.push(value);
    });
    var targetValue = handler.apply(object, values);

    if (promiseCalc) {
      if (!(targetValue instanceof Promise)) {
        targetValue = Promise.resolve(targetValue);
      }

      targetValue.then(function (promiseResult) {
        return set(object, target, promiseResult, setEventOptions);
      })["catch"](function (e) {
        throw Error(e);
      });
    } else {
      set(object, target, targetValue, setEventOptions);
    }
  };
}

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var initDefi = __webpack_require__(9);

var defineProp = __webpack_require__(10);

var getNodes = __webpack_require__(31);

var createBindingSwitcher = __webpack_require__(58);

var bindSingleNode = __webpack_require__(60);

var checkObjectType = __webpack_require__(3);

var defiError = __webpack_require__(8);

var forEach = __webpack_require__(0);

var forOwn = __webpack_require__(5);

var addTreeListener = __webpack_require__(29);

// initializes binsing between a property of an object to HTML node
module.exports = bindNode;

function bindNode(object, key, node, binder, eventOptions) {
  // throw error when object type is wrong
  checkObjectType(object, 'bindNode');
  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  binder = binder || {}; // eslint-disable-line no-param-reassign

  initDefi(object); // throw an error when key is falsy

  if (!key) {
    throw defiError('binding:falsy_key');
  }

  if (key instanceof Array) {
    /*
     * accept array of keys
     * this.bindNode(['a', 'b', 'c'], node)
     */
    forEach(key, function (itemKey) {
      return bindNode(object, itemKey, node, binder, eventOptions);
    });
    return object;
  }

  if (_typeof(key) === 'object') {
    forOwn(key, function (keyObjValue, keyObjKey) {
      // binder means eventOptions
      eventOptions = binder; // eslint-disable-line no-param-reassign

      if (keyObjValue && keyObjValue.constructor === Object && 'node' in keyObjValue) {
        // this.bindNode({ key: { node: $(), binder } ) }, { on: 'evt' }, { silent: true });
        bindNode(object, keyObjKey, keyObjValue.node, keyObjValue.binder || node, eventOptions);
      } else if (keyObjValue && keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
        // this.bindNode({ key: [{
        //   node: $(),
        //   binder
        // }] ) }, { on: 'evt' }, { silent: true });
        forEach(keyObjValue, function (keyObjValueItem) {
          bindNode(object, keyObjKey, keyObjValueItem.node, keyObjValueItem.binder || node, eventOptions);
        });
      } else {
        // this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
        bindNode(object, keyObjKey, keyObjValue, node, eventOptions);
      }
    });
    return object;
  }

  var _eventOptions = eventOptions,
      _eventOptions$optiona = _eventOptions.optional,
      optional = _eventOptions$optiona === void 0 ? false : _eventOptions$optiona,
      _eventOptions$exactKe = _eventOptions.exactKey,
      exactKey = _eventOptions$exactKe === void 0 ? false : _eventOptions$exactKe;
  var $nodes = getNodes(object, node); // check node existence

  if (!$nodes.length) {
    if (optional) {
      return object;
    }

    throw defiError('binding:node_missing', {
      key: key,
      node: node
    });
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

  var propDef = defineProp(object, key); // handle binding for every node separately

  forEach($nodes, function (oneNode) {
    return bindSingleNode(object, {
      $nodes: $nodes,
      node: oneNode,
      key: key,
      eventOptions: eventOptions,
      binder: binder,
      propDef: propDef
    });
  });
  return object;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(2);

var $ = __webpack_require__(12);

var forEach = __webpack_require__(0);

var customSelectorReg = /\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*/;
var randomAttr = "".concat(Math.random().toString().replace('0.', 'x'), "y"); // x12345y
// the function selects nodes based on a selector (including custom values, eg :bound)
// TODO: selectNodes looks not good, it needs to be refactored and accelerated if possible

module.exports = selectNodes;

function selectNodes(object, givenSelector) {
  var _defs$get = defs.get(object),
      props = _defs$get.props;

  var selectors = givenSelector.split(',');
  var result = $();
  forEach(selectors, function (selector) {
    var execResult = customSelectorReg.exec(selector);

    if (execResult) {
      var boundKey = execResult[1];
      var subSelector = execResult[2];
      var propDef = props[boundKey];

      if (propDef) {
        var bindings = propDef.bindings;

        if (bindings) {
          var boundNodes = Array(bindings.length);
          forEach(bindings, function (binding, i) {
            boundNodes[i] = binding.node;
          }); // if native selector passed after :bound(KEY) is not empty string
          // for example ":bound(KEY) .my-selector"

          if (subSelector) {
            // if native selector contains children selector
            // for example ":bound(KEY) > .my-selector"
            if (subSelector.indexOf('>') === 0) {
              // selecting children
              forEach(boundNodes, function (node) {
                node.setAttribute(randomAttr, randomAttr);
                var selected = node.querySelectorAll("[".concat(randomAttr, "=\"").concat(randomAttr, "\"] ").concat(subSelector));
                result = result.add(selected);
                node.removeAttribute(randomAttr);
              });
            } else {
              // if native selector doesn't contain children selector
              forEach(boundNodes, function (node) {
                var selected = node.querySelectorAll(subSelector);
                result = result.add(selected);
              });
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
  });
  return result;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var unbindNode = __webpack_require__(22);

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
    var target; // an object to call bindNode

    var previousTarget; // an object to call unbindNode

    if (value && _typeof(value) === 'object' && restPath) {
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
    } // if rest path is given and previous value is an object


    if (previousValue && _typeof(previousValue) === 'object' && restPath) {
      previousTarget = previousValue;

      for (var _i2 = 0; _i2 < restPath.length; _i2++) {
        previousTarget = previousTarget[restPath[_i2]];

        if (!previousTarget) {
          break;
        }
      }
    } // add binding for new target


    if (target && _typeof(target) === 'object') {
      bindNode(target, lastDeepPathItem, $nodes, binder, eventOptions);
    } // remove binding for previously used object


    if (previousTarget && _typeof(previousTarget) === 'object') {
      unbindNode(previousTarget, lastDeepPathItem, $nodes);
    }
  };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

var removeListener = __webpack_require__(11);

var triggerOne = __webpack_require__(6);

var forEach = __webpack_require__(0);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var spaceReg = /\s+/; // the function removes single binding for single object
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
  var silent = eventOptions.silent; // if "on" is a function then disable it
  // we cannot "turn off" custom listener defined by a programmer
  // programmer needs to remove custom listener maually inside binder.destroy

  if (typeof on === 'function') {
    nodeHandler.disabled = true;
  } else if (typeof on === 'string') {
    // remove DOM event listener
    // removeEventListener is faster than "on" method from any DOM library
    forEach(on.split(spaceReg), function (evtName) {
      return node.removeEventListener(evtName, nodeHandler);
    });
  } // remove object event listener


  removeListener(object, "_change:bindings:".concat(key), objectHandler); // if binder.destroy is given call it

  if (destroy) {
    destroy.call(node, bindingOptions);
  } // fire events


  if (!silent) {
    var extendedEventOptions = _objectSpread({
      key: key,
      node: node
    }, eventOptions);

    triggerOne(object, "unbind:".concat(key), extendedEventOptions);
    triggerOne(object, 'unbind', extendedEventOptions);
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

var lookForBinder = __webpack_require__(32);

var createNodeHandler = __webpack_require__(65);

var createObjectHandler = __webpack_require__(66);

var triggerOne = __webpack_require__(6);

var addListener = __webpack_require__(13);

var debounce = __webpack_require__(20);

var assign = __webpack_require__(18);

var forEach = __webpack_require__(0);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var spaceReg = /\s+/; // handles binding for single property & node
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
      debounceSetValue = _eventOptions$debounc === void 0 ? true : _eventOptions$debounc,
      _eventOptions$debounc2 = eventOptions.debounceGetValue,
      debounceGetValue = _eventOptions$debounc2 === void 0 ? true : _eventOptions$debounc2,
      _eventOptions$debounc3 = eventOptions.debounceSetValueOnBind,
      debounceSetValueOnBind = _eventOptions$debounc3 === void 0 ? false : _eventOptions$debounc3,
      _eventOptions$debounc4 = eventOptions.debounceGetValueOnBind,
      debounceGetValueOnBind = _eventOptions$debounc4 === void 0 ? false : _eventOptions$debounc4,
      _eventOptions$debounc5 = eventOptions.debounceSetValueDelay,
      debounceSetValueDelay = _eventOptions$debounc5 === void 0 ? 0 : _eventOptions$debounc5,
      _eventOptions$debounc6 = eventOptions.debounceGetValueDelay,
      debounceGetValueDelay = _eventOptions$debounc6 === void 0 ? 0 : _eventOptions$debounc6,
      _eventOptions$useExac = eventOptions.useExactBinder,
      useExactBinder = _eventOptions$useExac === void 0 ? false : _eventOptions$useExac; // create bindings array in property definition object

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
  var binder;
  var objectHandler;
  var nodeHandler; // get actual binder

  if (givenBinder !== null) {
    // by default binder passed to bindNode is extended by default binder
    // useExactBinder turns this behavior off
    if (useExactBinder) {
      binder = givenBinder;
    } else {
      // getting default binder
      var foundBinder = lookForBinder(node); // if default binder is found

      if (foundBinder) {
        // extend found binder by given binder
        if (givenBinder) {
          assign(foundBinder, givenBinder);
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
      initialize = _binder.initialize; // call binder.initialize

  if (initialize) {
    initialize.call(node, bindingOptions);
  } // add needed event handlers to given node when getValue is given


  if (getValue) {
    var syncNodeHandler = createNodeHandler({
      object: object,
      key: key,
      node: node,
      propDef: propDef,
      binder: binder,
      bindingOptions: bindingOptions
    });
    var debouncedNodeHandler;

    if (debounceGetValue || debounceGetValueOnBind) {
      debouncedNodeHandler = debounce(syncNodeHandler, debounceGetValueDelay);
    }

    if (debounceGetValue) {
      nodeHandler = debouncedNodeHandler;
    } else {
      nodeHandler = syncNodeHandler;
    } // TODO: Throw error when "on" and maybe other binder properties has wrong type


    if (typeof on === 'function') {
      on.call(node, nodeHandler, bindingOptions);
    } else if (typeof on === 'string') {
      // addEventListener is faster than "on" method from any DOM library
      forEach(on.split(spaceReg), function (evtName) {
        return node.addEventListener(evtName, nodeHandler);
      });
    }

    if (isUndefined && getValueOnBind !== false || getValueOnBind === true) {
      if (debounceGetValueOnBind) {
        debouncedNodeHandler();
      } else {
        syncNodeHandler();
      }
    }

    isUndefined = typeof propDef.value === 'undefined';
  } // add needed event handlers to the object when setValue is given


  if (setValue) {
    var syncObjectHandler = createObjectHandler({
      node: node,
      propDef: propDef,
      binder: binder,
      bindingOptions: bindingOptions,
      eventOptions: eventOptions
    });
    var debouncedObjectHandler;

    if (debounceSetValue || debounceSetValueOnBind) {
      debouncedObjectHandler = debounce(syncObjectHandler, debounceSetValueDelay);
    }

    if (debounceSetValue) {
      objectHandler = debouncedObjectHandler;
    } else {
      objectHandler = syncObjectHandler;
    } // TODO: Is it possible to get previous value of a property?


    addListener(object, "_change:bindings:".concat(key), objectHandler, {
      skipChecks: true
    });

    if (!isUndefined && setValueOnBind !== false || setValueOnBind === true) {
      if (debounceSetValueOnBind) {
        debouncedObjectHandler();
      } else {
        syncObjectHandler();
      }
    }
  } // add binding data to bindings array


  bindings.push({
    on: on,
    node: node,
    binder: binder,
    objectHandler: objectHandler,
    nodeHandler: nodeHandler,
    bindingOptions: bindingOptions
  }); // fire events

  if (!silent) {
    var extendedEventOptions = _objectSpread({
      key: key,
      node: node
    }, eventOptions);

    triggerOne(object, "bind:".concat(key), extendedEventOptions);
    triggerOne(object, 'bind', extendedEventOptions);
  }
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(23);

// returns a binder for textarea element
module.exports = textarea;

function textarea() {
  // textarea behaves just like text input
  return input('text');
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for select element
module.exports = select;

function select(multiple) {
  if (multiple) {
    return {
      on: 'change',
      getValue: function getValue() {
        var options = this.options;
        var result = [];

        for (var i = 0; options.length > i; i++) {
          if (options[i].selected) {
            result.push(options[i].value);
          }
        }

        return result;
      },
      setValue: function setValue(givenValue) {
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
    getValue: function getValue() {
      return this.value;
    },
    setValue: function setValue(value) {
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(23);

// returns a binder for textarea element
module.exports = progress;

function progress() {
  return input();
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns a binder for output element
module.exports = output;

function output() {
  return {
    on: null,
    getValue: function getValue() {
      return this.value || this.textContent;
    },
    setValue: function setValue(value) {
      var property = 'form' in this ? 'value' : 'textContent';
      this[property] = value === null ? '' : "".concat(value);
    }
  };
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

var is = __webpack_require__(28);

var set = __webpack_require__(14);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    var value = getValue.call(node, _objectSpread({
      previousValue: previousValue,
      domEvent: domEvent,
      originalEvent: domEvent.originalEvent || domEvent,
      // jQuery thing
      // will throw "preventDefault is not a function" when domEvent is empty object
      preventDefault: function preventDefault() {
        return domEvent.preventDefault();
      },
      // will throw "stopPropagation is not a function" when domEvent is empty object
      stopPropagation: function stopPropagation() {
        return domEvent.stopPropagation();
      },
      which: which,
      target: target,
      ctrlKey: ctrlKey,
      altKey: altKey
    }, bindingOptions));

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    var setValue = binder.setValue; // a dirty hack for https://github.com/matreshkajs/matreshka/issues/19

    var dirtyHackValue = onChangeValue === 'string' && typeof value === 'number' ? "".concat(value) : value; // don't call setValue if a property is changed via getValue of the same binder

    if (changedNode === node && onChangeValue === dirtyHackValue && evtBinder === binder) {
      return;
    }

    setValue.call(node, value, _objectSpread({
      value: value
    }, bindingOptions));
  };
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(2);

var checkObjectType = __webpack_require__(3);

// the function returns bound node(s)
module.exports = bound;

function bound(object, key) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    all: false
  },
      all = _ref.all;

  // throw error when object type is wrong
  checkObjectType(object, 'bound'); // if no key or falsy key is given

  if (!key) {
    return all ? [] : null;
  }

  var def = defs.get(object);
  var propDef = def.props[key];
  var nodes;

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(4);

var unbindNode = __webpack_require__(22);

var triggerOne = __webpack_require__(6);

var removeListener = __webpack_require__(11);

var defs = __webpack_require__(2);

var checkObjectType = __webpack_require__(3);

var defiError = __webpack_require__(8);

var forEach = __webpack_require__(0);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// removes a property, its bindings and its events
// TODO: remove function does not correctly removes delegated events, bindings, tree listeners etc
module.exports = remove;

function remove(object, givenKey, eventOptions) {
  // throw error when object type is wrong
  checkObjectType(object, 'remove');
  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = defs.get(object);
  var _eventOptions = eventOptions,
      silent = _eventOptions.silent; // allow to pass single key or an array of keys

  var keys = givenKey instanceof Array ? givenKey : [givenKey];

  var _loop = function _loop(i) {
    var key = keys[i]; // if non-string is passed as a key

    if (typeof key !== 'string') {
      throw defiError('remove:key_type', {
        key: key
      });
    }

    var props = def && def.props;
    var propDef = props && props[key]; // if no object definition then simply delete the property

    if (!propDef) {
      delete object[key];
      return "continue";
    }

    var value = propDef.value; // remove all bindings

    unbindNode(object, key); // TODO: Manual listing of event prefixes may cause problems in future

    var removeEventPrefies = ['_change:deps', '_change:bindings', '_change:delegated', '_change:tree', 'change', 'beforechange', 'bind', 'unbind']; // remove all events

    forEach(removeEventPrefies, function (prefix) {
      return removeListener(object, "".concat(prefix, ":").concat(key));
    }); // delete property definition

    delete props[key]; // delete the property itself

    delete object[key];

    var extendedEventOptions = _objectSpread({
      key: key,
      value: value
    }, eventOptions); // trigger delegated events logic removal for asterisk events (*.*.*@foo)


    triggerOne(object, '_delete:delegated', extendedEventOptions); // fire events if "silent" is not true

    if (!silent) {
      triggerOne(object, 'delete', extendedEventOptions);
      triggerOne(object, "delete:".concat(key), extendedEventOptions);
    }
  };

  for (var i = 0; i < keys.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(1);

var initDefi = __webpack_require__(9);

var defineProp = __webpack_require__(10);

var checkObjectType = __webpack_require__(3);

var set = __webpack_require__(14);

var defiError = __webpack_require__(8);

var forOwn = __webpack_require__(5);

var forEach = __webpack_require__(0);

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
} // transforms property value on its changing


module.exports = mediate;

function mediate(object, givenKeys, mediator) {
  // throw error when object type is wrong
  checkObjectType(object, 'mediate');
  var isKeysArray = givenKeys instanceof Array; // allow to use key-mediator object as another method variation

  if (_typeof(givenKeys) === 'object' && !isKeysArray) {
    forOwn(givenKeys, function (objVal, objKey) {
      return mediate(object, objKey, objVal);
    });
    return object;
  }

  initDefi(object); // allow to use both single key and an array of keys

  var keys = isKeysArray ? givenKeys : [givenKeys];
  forEach(keys, function (key) {
    // if non-string is passed as a key
    if (typeof key !== 'string') {
      throw defiError('mediate:key_type', {
        key: key
      });
    }

    var propDef = defineProp(object, key);
    var propMediator = propDef.mediator = createMediator({
      object: object,
      propDef: propDef,
      key: key,
      mediator: mediator
    }); // set new value

    set(object, key, propMediator(propDef.value), {
      fromMediator: true
    });
  });
  return object;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var checkObjectType = __webpack_require__(3);

var _lib = __webpack_require__(24);

var functions = _lib;

var forEach = __webpack_require__(0);

// create a prototype of ChainClass
// store target object at "object" property
var prototype = {
  constructor: function constructor(object) {
    this.object = object;
  }
};
var funcNames = Object.keys(functions); // iterate over all universal methods

var _loop = function _loop(i) {
  var funcName = funcNames[i];
  var method = functions[funcName]; // create every chained method

  prototype[funcName] = function chainedMethod() {
    var args = [this.object];
    forEach(arguments, function (argument) {
      args.push(argument);
    });
    method.apply(void 0, args); // returning this is important for chained calls

    return this;
  };
};

for (var i = 0; i < funcNames.length; i++) {
  _loop(i);
}

var ChainClass = function ChainClass(object) {
  this.object = object;
};

ChainClass.prototype = prototype; // the function allows to chain static function calls on any object

module.exports = chain;

function chain(object) {
  // check for type and throw an error if it is not an object and is not a function
  checkObjectType(object, 'chain');
  return new ChainClass(object);
}

/***/ })
/******/ ]);