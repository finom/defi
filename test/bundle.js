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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
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

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime/regenerator/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../node_modules/regenerator-runtime/runtime.js":
/*!******************************************************!*\
  !*** ../node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../src sync recursive .*\\.js$":
/*!***************************!*\
  !*** ../src sync .*\.js$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./_core/defineprop.js": "../src/_core/defineprop.js",
	"./_core/defs.js": "../src/_core/defs.js",
	"./_core/init.js": "../src/_core/init.js",
	"./_helpers/assign.js": "../src/_helpers/assign.js",
	"./_helpers/checkobjecttype.js": "../src/_helpers/checkobjecttype.js",
	"./_helpers/debounce.js": "../src/_helpers/debounce.js",
	"./_helpers/deepfind.js": "../src/_helpers/deepfind.js",
	"./_helpers/defierror.js": "../src/_helpers/defierror.js",
	"./_helpers/foreach.js": "../src/_helpers/foreach.js",
	"./_helpers/forown.js": "../src/_helpers/forown.js",
	"./_helpers/is.js": "../src/_helpers/is.js",
	"./_helpers/map.js": "../src/_helpers/map.js",
	"./_helpers/reduce.js": "../src/_helpers/reduce.js",
	"./_helpers/slice.js": "../src/_helpers/slice.js",
	"./_lib.js": "../src/_lib.js",
	"./_mq/_data.js": "../src/_mq/_data.js",
	"./_mq/_html2nodelist.js": "../src/_mq/_html2nodelist.js",
	"./_mq/_init.js": "../src/_mq/_init.js",
	"./_mq/add.js": "../src/_mq/add.js",
	"./_mq/index.js": "../src/_mq/index.js",
	"./_mq/off.js": "../src/_mq/off.js",
	"./_mq/on.js": "../src/_mq/on.js",
	"./_mq/parsehtml.js": "../src/_mq/parsehtml.js",
	"./binders/index.js": "../src/binders/index.js",
	"./binders/input.js": "../src/binders/input.js",
	"./binders/output.js": "../src/binders/output.js",
	"./binders/progress.js": "../src/binders/progress.js",
	"./binders/select.js": "../src/binders/select.js",
	"./binders/textarea.js": "../src/binders/textarea.js",
	"./bindnode/_bindsinglenode.js": "../src/bindnode/_bindsinglenode.js",
	"./bindnode/_createbindingswitcher.js": "../src/bindnode/_createbindingswitcher.js",
	"./bindnode/_createnodehandler.js": "../src/bindnode/_createnodehandler.js",
	"./bindnode/_createobjecthandler.js": "../src/bindnode/_createobjecthandler.js",
	"./bindnode/_getnodes.js": "../src/bindnode/_getnodes.js",
	"./bindnode/_selectnodes.js": "../src/bindnode/_selectnodes.js",
	"./bindnode/index.js": "../src/bindnode/index.js",
	"./bound.js": "../src/bound.js",
	"./calc/_addsource.js": "../src/calc/_addsource.js",
	"./calc/_createcalchandler.js": "../src/calc/_createcalchandler.js",
	"./calc/index.js": "../src/calc/index.js",
	"./chain.js": "../src/chain.js",
	"./defaultbinders.js": "../src/defaultbinders.js",
	"./defi.js": "../src/defi.js",
	"./index.js": "../src/index.js",
	"./lookforbinder.js": "../src/lookforbinder.js",
	"./mediate.js": "../src/mediate.js",
	"./off/_removedomlistener.js": "../src/off/_removedomlistener.js",
	"./off/_removelistener.js": "../src/off/_removelistener.js",
	"./off/_removetreelistener.js": "../src/off/_removetreelistener.js",
	"./off/_undelegatelistener.js": "../src/off/_undelegatelistener.js",
	"./off/index.js": "../src/off/index.js",
	"./on/_adddomlistener.js": "../src/on/_adddomlistener.js",
	"./on/_addlistener.js": "../src/on/_addlistener.js",
	"./on/_addtreelistener.js": "../src/on/_addtreelistener.js",
	"./on/_createdomeventhandler.js": "../src/on/_createdomeventhandler.js",
	"./on/_delegatelistener/changehandler.js": "../src/on/_delegatelistener/changehandler.js",
	"./on/_delegatelistener/index.js": "../src/on/_delegatelistener/index.js",
	"./on/_domeventregexp.js": "../src/on/_domeventregexp.js",
	"./on/_splitbyspaceregexp.js": "../src/on/_splitbyspaceregexp.js",
	"./on/index.js": "../src/on/index.js",
	"./remove.js": "../src/remove.js",
	"./set.js": "../src/set.js",
	"./trigger/_triggerdomevent.js": "../src/trigger/_triggerdomevent.js",
	"./trigger/_triggerone.js": "../src/trigger/_triggerone.js",
	"./trigger/_triggeronedomevent.js": "../src/trigger/_triggeronedomevent.js",
	"./trigger/index.js": "../src/trigger/index.js",
	"./unbindnode/_removebinding.js": "../src/unbindnode/_removebinding.js",
	"./unbindnode/index.js": "../src/unbindnode/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../src sync recursive .*\\.js$";

/***/ }),

/***/ "../src/_core/defineprop.js":
/*!**********************************!*\
  !*** ../src/_core/defineprop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineProp; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "../src/_core/defs.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../set */ "../src/set.js");

 // the function defines needed descriptor for given property

function defineProp(object, key) {
  var def = _defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object); // if no object definition do nothing

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
        return Object(_set__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, v, {
          fromSetter: true
        });
      }
    });
  }

  return def.props[key];
}

/***/ }),

/***/ "../src/_core/defs.js":
/*!****************************!*\
  !*** ../src/_core/defs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// object definitions
/* harmony default export */ __webpack_exports__["default"] = (new WeakMap());

/***/ }),

/***/ "../src/_core/init.js":
/*!****************************!*\
  !*** ../src/_core/init.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initDefi; });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "../src/_core/defs.js");

var objectId = 0; // this is a common function which associates an object with its defi definition

function initDefi(object) {
  var def = _defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);

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
    _defs__WEBPACK_IMPORTED_MODULE_0__["default"].set(object, def);
  }

  return def;
}

/***/ }),

/***/ "../src/_helpers/assign.js":
/*!*********************************!*\
  !*** ../src/_helpers/assign.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assign; });
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

/***/ "../src/_helpers/checkobjecttype.js":
/*!******************************************!*\
  !*** ../src/_helpers/checkobjecttype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkObjectType; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defierror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defierror */ "../src/_helpers/defierror.js");

 // checks type of a variable and throws an error if its type is not an object

function checkObjectType(object, method) {
  var typeofObject = object === null ? 'null' : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(object);

  if (typeofObject !== 'object' && typeofObject !== 'function') {
    throw Object(_defierror__WEBPACK_IMPORTED_MODULE_1__["default"])('common:object_type', {
      object: object,
      method: method
    });
  }
}

/***/ }),

/***/ "../src/_helpers/debounce.js":
/*!***********************************!*\
  !*** ../src/_helpers/debounce.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds.
// (c) https://davidwalsh.name/javascript-debounce-function
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

/***/ "../src/_helpers/deepfind.js":
/*!***********************************!*\
  !*** ../src/_helpers/deepfind.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepFind; });
// gets value of a property in nested object
// eg "d" from a.b.c.d
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

/***/ "../src/_helpers/defierror.js":
/*!************************************!*\
  !*** ../src/_helpers/defierror.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defiError; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable prefer-template, max-len */
var bindingErrorPrefix = 'Binding error:';
var calcErrorPrefix = 'Calc error:';

var getType = function getType(variable) {
  if (variable === null) {
    return 'null';
  }

  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(variable);
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
function defiError(key, data) {
  var getError = errors[key];

  if (!getError) {
    /* istanbul ignore next */
    throw Error("Unknown error \"".concat(key, "\". Please report about this on Github."));
  }

  return new Error(getError(data));
}

/***/ }),

/***/ "../src/_helpers/foreach.js":
/*!**********************************!*\
  !*** ../src/_helpers/foreach.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forEach; });
function forEach(arr, callback) {
  var i = 0;
  var l = arr.length;

  for (; i < l; i++) {
    callback(arr[i], i);
  }
}

/***/ }),

/***/ "../src/_helpers/forown.js":
/*!*********************************!*\
  !*** ../src/_helpers/forown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forOwn; });
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

/***/ "../src/_helpers/is.js":
/*!*****************************!*\
  !*** ../src/_helpers/is.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// determines whether two values are the same value

/* istanbul ignore next */
var isPolyfill = function isPolyfill(v1, v2) {
  return v1 === 0 && v2 === 0 ? 1 / v1 === 1 / v2 : v1 !== v1 && v2 !== v2 || v1 === v2;
}; // eslint-disable-line


/* harmony default export */ __webpack_exports__["default"] = (Object.is || isPolyfill);

/***/ }),

/***/ "../src/_helpers/map.js":
/*!******************************!*\
  !*** ../src/_helpers/map.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
function map(arr, callback) {
  var i = 0;
  var l = arr.length;
  var result = [];

  for (; i < l; i++) {
    result.push(callback(arr[i], i));
  }

  return result;
}

/***/ }),

/***/ "../src/_helpers/reduce.js":
/*!*********************************!*\
  !*** ../src/_helpers/reduce.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reduce; });
function reduce(arr, callback, initialize) {
  var i = 1;
  var l = arr.length;
  var val = initialize;
  var result = [];

  if (initialize) {
    val = callback(initialize, arr[0], 0);
  }

  for (; i < l; i++) {
    val = callback(val, arr[i], i);
  }

  return result;
}

/***/ }),

/***/ "../src/_helpers/slice.js":
/*!********************************!*\
  !*** ../src/_helpers/slice.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (arrLike, start, end) {
  var l = arrLike.length;
  var i = start || 0;

  var _end = end || l;

  var arr = Array(_end - i);
  var j = 0;

  while (i < _end) {
    arr[j++] = arrLike[i++];
  }

  return arr;
});

/***/ }),

/***/ "../src/_lib.js":
/*!**********************!*\
  !*** ../src/_lib.js ***!
  \**********************/
/*! exports provided: on, off, trigger, calc, bindNode, bound, unbindNode, set, remove, mediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on */ "../src/on/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _on__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./off */ "../src/off/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "off", function() { return _off__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger */ "../src/trigger/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _trigger__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calc */ "../src/calc/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return _calc__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _bindnode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bindnode */ "../src/bindnode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNode", function() { return _bindnode__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bound */ "../src/bound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bound", function() { return _bound__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unbindnode */ "../src/unbindnode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unbindNode", function() { return _unbindnode__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set */ "../src/set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _set__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remove */ "../src/remove.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _remove__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _mediate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mediate */ "../src/mediate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mediate", function() { return _mediate__WEBPACK_IMPORTED_MODULE_9__["default"]; });










 // the following methods can be used as static methods and as instance methods



/***/ }),

/***/ "../src/_mq/_data.js":
/*!***************************!*\
  !*** ../src/_mq/_data.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// an object allows to share data between modules; it's needed because we use
// simplified ES modules there and cannot import and share a number
/* harmony default export */ __webpack_exports__["default"] = ({
  nodeIndex: 0,
  allEvents: {}
});

/***/ }),

/***/ "../src/_mq/_html2nodelist.js":
/*!************************************!*\
  !*** ../src/_mq/_html2nodelist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return html2nodeList; });
// converts HTML string to NodeList instance
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

/***/ "../src/_mq/_init.js":
/*!***************************!*\
  !*** ../src/_mq/_init.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html2nodelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_html2nodelist */ "../src/_mq/_html2nodelist.js");

 // function-constructor of mq library
// accepts many kinds of arguments (selector, html, function)

function MQInit(selector, context) {
  var win = window;
  var result;

  if (selector) {
    if (selector.nodeType || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(win) === 'object' && selector === win) {
      result = [selector];
    } else if (typeof selector === 'string') {
      if (/</.test(selector)) {
        result = Object(_html2nodelist__WEBPACK_IMPORTED_MODULE_1__["default"])(selector);
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
/* harmony default export */ __webpack_exports__["default"] = (MQInit);

/***/ }),

/***/ "../src/_mq/add.js":
/*!*************************!*\
  !*** ../src/_mq/add.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return add; });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_init */ "../src/_mq/_init.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data */ "../src/_mq/_data.js");

 // adds unique nodes to mq collection

function add(selector) {
  var idMap = {};
  var result;
  var nodes = new _init__WEBPACK_IMPORTED_MODULE_0__["default"](selector);

  if (this.length) {
    result = new _init__WEBPACK_IMPORTED_MODULE_0__["default"]();

    for (var i = 0; i < this.length; i++) {
      var node = this[i];
      var nodeID = node.b$ = node.b$ || ++_data__WEBPACK_IMPORTED_MODULE_1__["default"].nodeIndex; // eslint-disable-line no-plusplus

      idMap[nodeID] = 1;
      result.push(node);
    }

    for (var _i = 0; _i < nodes.length; _i++) {
      var _node = nodes[_i];

      var _nodeID = _node.b$ = _node.b$ || ++_data__WEBPACK_IMPORTED_MODULE_1__["default"].nodeIndex; // eslint-disable-line no-plusplus


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

/***/ "../src/_mq/index.js":
/*!***************************!*\
  !*** ../src/_mq/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mq; });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_init */ "../src/_mq/_init.js");
/* harmony import */ var _parsehtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsehtml */ "../src/_mq/parsehtml.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on */ "../src/_mq/on.js");
/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./off */ "../src/_mq/off.js");
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add */ "../src/_mq/add.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");





 // a tiny jQuery-like library

function mq(selector, context) {
  return new _init__WEBPACK_IMPORTED_MODULE_0__["default"](selector, context);
}
mq.parseHTML = _parsehtml__WEBPACK_IMPORTED_MODULE_1__["default"];
Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_5__["default"])(_init__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, {
  on: _on__WEBPACK_IMPORTED_MODULE_2__["default"],
  off: _off__WEBPACK_IMPORTED_MODULE_3__["default"],
  add: _add__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "../src/_mq/off.js":
/*!*************************!*\
  !*** ../src/_mq/off.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return off; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data */ "../src/_mq/_data.js");


var splitBySpaceReg = /\s+/;
var splitByDotReg = /\.(.+)/; // removes event handler from a set of elements

function off(namesStr, selector, handler) {
  if (typeof selector === 'function') {
    handler = selector; // eslint-disable-line no-param-reassign

    selector = null; // eslint-disable-line no-param-reassign
  }

  var names = namesStr.split(splitBySpaceReg);

  for (var i = 0; i < names.length; i++) {
    var _names$i$split = names[i].split(splitByDotReg),
        _names$i$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_names$i$split, 2),
        name = _names$i$split2[0],
        namespace = _names$i$split2[1];

    for (var j = 0; j < this.length; j++) {
      var node = this[j];

      if (!name && namespace) {
        for (var k = 0, keys = Object.keys(_data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents); k < keys.length; k++) {
          var _events = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[keys[k]];

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

      var events = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[name + node.b$];

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

/***/ "../src/_mq/on.js":
/*!************************!*\
  !*** ../src/_mq/on.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return on; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data */ "../src/_mq/_data.js");


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
        _names$i$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_names$i$split, 2),
        name = _names$i$split2[0],
        namespace = _names$i$split2[1];

    for (var j = 0; j < this.length; j++) {
      var node = this[j];
      var nodeID = node.b$ = node.b$ || ++_data__WEBPACK_IMPORTED_MODULE_1__["default"].nodeIndex; // eslint-disable-line no-plusplus

      var events = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[name + nodeID] = _data__WEBPACK_IMPORTED_MODULE_1__["default"].allEvents[name + nodeID] || [];
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

/***/ "../src/_mq/parsehtml.js":
/*!*******************************!*\
  !*** ../src/_mq/parsehtml.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseHTML; });
/* harmony import */ var _html2nodelist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_html2nodelist */ "../src/_mq/_html2nodelist.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_init */ "../src/_mq/_init.js");

 // parses given HTML and returns mq instance

function parseHTML(html) {
  return new _init__WEBPACK_IMPORTED_MODULE_1__["default"](Object(_html2nodelist__WEBPACK_IMPORTED_MODULE_0__["default"])(html));
}

/***/ }),

/***/ "../src/binders/index.js":
/*!*******************************!*\
  !*** ../src/binders/index.js ***!
  \*******************************/
/*! exports provided: input, output, textarea, select, progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../src/binders/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input", function() { return _input__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output */ "../src/binders/output.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "output", function() { return _output__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea */ "../src/binders/textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textarea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "../src/binders/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress */ "../src/binders/progress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "../src/binders/input.js":
/*!*******************************!*\
  !*** ../src/binders/input.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return input; });
// returns a binder for input element based on its type
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

/***/ "../src/binders/output.js":
/*!********************************!*\
  !*** ../src/binders/output.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return output; });
// returns a binder for output element
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

/***/ "../src/binders/progress.js":
/*!**********************************!*\
  !*** ../src/binders/progress.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return progress; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../src/binders/input.js");
 // returns a binder for textarea element

function progress() {
  return Object(_input__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "../src/binders/select.js":
/*!********************************!*\
  !*** ../src/binders/select.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return select; });
// returns a binder for select element
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

/***/ "../src/binders/textarea.js":
/*!**********************************!*\
  !*** ../src/binders/textarea.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return textarea; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "../src/binders/input.js");
 // returns a binder for textarea element

function textarea() {
  // textarea behaves just like text input
  return Object(_input__WEBPACK_IMPORTED_MODULE_0__["default"])('text');
}

/***/ }),

/***/ "../src/bindnode/_bindsinglenode.js":
/*!******************************************!*\
  !*** ../src/bindnode/_bindsinglenode.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindSingleNode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lookforbinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lookforbinder */ "../src/lookforbinder.js");
/* harmony import */ var _createnodehandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createnodehandler */ "../src/bindnode/_createnodehandler.js");
/* harmony import */ var _createobjecthandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_createobjecthandler */ "../src/bindnode/_createobjecthandler.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _on_addlistener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _helpers_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var spaceReg = /\s+/; // handles binding for single property & node
// the function is used at bindNode

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
      var foundBinder = Object(_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node); // if default binder is found

      if (foundBinder) {
        // extend found binder by given binder
        if (givenBinder) {
          Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_7__["default"])(foundBinder, givenBinder);
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
    var syncNodeHandler = Object(_createnodehandler__WEBPACK_IMPORTED_MODULE_2__["default"])({
      object: object,
      key: key,
      node: node,
      propDef: propDef,
      binder: binder,
      bindingOptions: bindingOptions
    });
    var debouncedNodeHandler;

    if (debounceGetValue || debounceGetValueOnBind) {
      debouncedNodeHandler = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(syncNodeHandler, debounceGetValueDelay);
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
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_8__["default"])(on.split(spaceReg), function (evtName) {
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
    var syncObjectHandler = Object(_createobjecthandler__WEBPACK_IMPORTED_MODULE_3__["default"])({
      node: node,
      propDef: propDef,
      binder: binder,
      bindingOptions: bindingOptions,
      eventOptions: eventOptions
    });
    var debouncedObjectHandler;

    if (debounceSetValue || debounceSetValueOnBind) {
      debouncedObjectHandler = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(syncObjectHandler, debounceSetValueDelay);
    }

    if (debounceSetValue) {
      objectHandler = debouncedObjectHandler;
    } else {
      objectHandler = syncObjectHandler;
    } // TODO: Is it possible to get previous value of a property?


    Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_5__["default"])(object, "_change:bindings:".concat(key), objectHandler, {
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

    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__["default"])(object, "bind:".concat(key), extendedEventOptions);
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_4__["default"])(object, 'bind', extendedEventOptions);
  }
}

/***/ }),

/***/ "../src/bindnode/_createbindingswitcher.js":
/*!*************************************************!*\
  !*** ../src/bindnode/_createbindingswitcher.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBindingSwitcher; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unbindnode */ "../src/unbindnode/index.js");

 // returns a function which re-adds binding when object branch is changed
// the function is called by bindNode when something like
// 'foo.bar.baz' is passed to it as key argument value
// this is one of the hardest things in the framework to understand

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

    if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && restPath) {
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


    if (previousValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousValue) === 'object' && restPath) {
      previousTarget = previousValue;

      for (var _i2 = 0; _i2 < restPath.length; _i2++) {
        previousTarget = previousTarget[restPath[_i2]];

        if (!previousTarget) {
          break;
        }
      }
    } // add binding for new target


    if (target && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(target) === 'object') {
      bindNode(target, lastDeepPathItem, $nodes, binder, eventOptions);
    } // remove binding for previously used object


    if (previousTarget && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousTarget) === 'object') {
      Object(_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(previousTarget, lastDeepPathItem, $nodes);
    }
  };
}

/***/ }),

/***/ "../src/bindnode/_createnodehandler.js":
/*!*********************************************!*\
  !*** ../src/bindnode/_createnodehandler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNodeHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/is */ "../src/_helpers/is.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set */ "../src/set.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // returns a function which called when bound node state is changed (eg DOM event is fired)

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

    if (!Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["default"])(value, previousValue)) {
      Object(_set__WEBPACK_IMPORTED_MODULE_2__["default"])(object, key, value, {
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

/***/ "../src/bindnode/_createobjecthandler.js":
/*!***********************************************!*\
  !*** ../src/bindnode/_createobjecthandler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createObjectHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// returns a function which is called when property value is changed
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

/***/ "../src/bindnode/_getnodes.js":
/*!************************************!*\
  !*** ../src/bindnode/_getnodes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodes; });
/* harmony import */ var _selectnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_selectnodes */ "../src/bindnode/_selectnodes.js");
/* harmony import */ var _mq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");


var htmlReg = /</;
var customSelectorReg = /:bound\(([^(]*)\)/; // the function works just like DOM library accepting any kind of arg
// (HTML string, Node, NodeList etc) bu allows to pass custom selector
// eg :bound(KEY)

function getNodes(object, selector) {
  var nodes;

  if (typeof selector === 'string' && !htmlReg.test(selector) && customSelectorReg.test(selector)) {
    nodes = Object(_selectnodes__WEBPACK_IMPORTED_MODULE_0__["default"])(object, selector);
  } else {
    nodes = Object(_mq__WEBPACK_IMPORTED_MODULE_1__["default"])(selector);
  }

  return nodes;
}

/***/ }),

/***/ "../src/bindnode/_selectnodes.js":
/*!***************************************!*\
  !*** ../src/bindnode/_selectnodes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectNodes; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _mq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");



var customSelectorReg = /\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*/;
var randomAttr = "".concat(Math.random().toString().replace('0.', 'x'), "y"); // x12345y
// the function selects nodes based on a selector (including custom values, eg :bound)
// TODO: selectNodes looks not good, it needs to be refactored and accelerated if possible

function selectNodes(object, givenSelector) {
  var _defs$get = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object),
      props = _defs$get.props;

  var selectors = givenSelector.split(',');
  var result = Object(_mq__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(selectors, function (selector) {
    var execResult = customSelectorReg.exec(selector);

    if (execResult) {
      var boundKey = execResult[1];
      var subSelector = execResult[2];
      var propDef = props[boundKey];

      if (propDef) {
        var bindings = propDef.bindings;

        if (bindings) {
          var boundNodes = Array(bindings.length);
          Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(bindings, function (binding, i) {
            boundNodes[i] = binding.node;
          }); // if native selector passed after :bound(KEY) is not empty string
          // for example ":bound(KEY) .my-selector"

          if (subSelector) {
            // if native selector contains children selector
            // for example ":bound(KEY) > .my-selector"
            if (subSelector.indexOf('>') === 0) {
              // selecting children
              Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(boundNodes, function (node) {
                node.setAttribute(randomAttr, randomAttr);
                var selected = node.querySelectorAll("[".concat(randomAttr, "=\"").concat(randomAttr, "\"] ").concat(subSelector));
                result = result.add(selected);
                node.removeAttribute(randomAttr);
              });
            } else {
              // if native selector doesn't contain children selector
              Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(boundNodes, function (node) {
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

/***/ "../src/bindnode/index.js":
/*!********************************!*\
  !*** ../src/bindnode/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindNode; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _getnodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getnodes */ "../src/bindnode/_getnodes.js");
/* harmony import */ var _createbindingswitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_createbindingswitcher */ "../src/bindnode/_createbindingswitcher.js");
/* harmony import */ var _bindsinglenode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_bindsinglenode */ "../src/bindnode/_bindsinglenode.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_defierror__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _on_addtreelistener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../on/_addtreelistener */ "../src/on/_addtreelistener.js");










 // initializes binsing between a property of an object to HTML node

function bindNode(object, key, node, binder, eventOptions) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_6__["default"])(object, 'bindNode');
  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  binder = binder || {}; // eslint-disable-line no-param-reassign

  Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(object); // throw an error when key is falsy

  if (!key) {
    throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_7__["default"])('binding:falsy_key');
  }

  if (key instanceof Array) {
    /*
     * accept array of keys
     * this.bindNode(['a', 'b', 'c'], node)
     */
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_8__["default"])(key, function (itemKey) {
      return bindNode(object, itemKey, node, binder, eventOptions);
    });
    return object;
  }

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(key) === 'object') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_9__["default"])(key, function (keyObjValue, keyObjKey) {
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
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_8__["default"])(keyObjValue, function (keyObjValueItem) {
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
  var $nodes = Object(_getnodes__WEBPACK_IMPORTED_MODULE_3__["default"])(object, node); // check node existence

  if (!$nodes.length) {
    if (optional) {
      return object;
    }

    throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_7__["default"])('binding:node_missing', {
      key: key,
      node: node
    });
  }

  if (!exactKey) {
    var deepPath = key.split('.');
    var deepPathLength = deepPath.length;

    if (deepPathLength > 1) {
      // handle binding when key arg includes dots (eg "a.b.c.d")
      var bindingSwitcher = Object(_createbindingswitcher__WEBPACK_IMPORTED_MODULE_4__["default"])({
        object: object,
        deepPath: deepPath,
        $nodes: $nodes,
        binder: binder,
        eventOptions: eventOptions,
        bindNode: bindNode
      });
      Object(_on_addtreelistener__WEBPACK_IMPORTED_MODULE_10__["default"])(object, deepPath.slice(0, deepPathLength - 1), bindingSwitcher);
      bindingSwitcher();
      return object;
    }
  }

  var propDef = Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_2__["default"])(object, key); // handle binding for every node separately

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_8__["default"])($nodes, function (oneNode) {
    return Object(_bindsinglenode__WEBPACK_IMPORTED_MODULE_5__["default"])(object, {
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

/***/ "../src/bound.js":
/*!***********************!*\
  !*** ../src/bound.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bound; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

 // the function returns bound node(s)

function bound(object, key) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    all: false
  },
      all = _ref.all;

  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__["default"])(object, 'bound'); // if no key or falsy key is given

  if (!key) {
    return all ? [] : null;
  }

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);
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

/***/ "../src/calc/_addsource.js":
/*!*********************************!*\
  !*** ../src/calc/_addsource.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSource; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _on_addlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _on_addtreelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../on/_addtreelistener */ "../src/on/_addtreelistener.js");
/* harmony import */ var _helpers_defierror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");



 // adds a source to a source list and adds needed event listener to a it

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
    throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:source_key_type', {
      sourceKey: sourceKey
    });
  } // source object must be an object


  if (!sourceObject || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(sourceObject) !== 'object') {
    throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:source_object_type', {
      sourceObject: sourceObject
    });
  }

  if (!exactKey) {
    var deepPath = sourceKey.split('.'); // if something like a.b.c is used as a key

    if (deepPath.length > 1) {
      isDelegated = true; // TODO: Avoid collisions with bindings by using another event name
      // ... instead of _change:tree:xxx

      Object(_on_addtreelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(sourceObject, deepPath, calcHandler);
    } else {
      exactKey = true;
    }
  }

  if (exactKey) {
    // normal handler
    Object(_on_addlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceObject, "_change:deps:".concat(sourceKey), calcHandler);
  }

  allSources.push({
    sourceKey: sourceKey,
    sourceObject: sourceObject,
    isDelegated: isDelegated
  });
}

/***/ }),

/***/ "../src/calc/_createcalchandler.js":
/*!*****************************************!*\
  !*** ../src/calc/_createcalchandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCalcHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../set */ "../src/set.js");
/* harmony import */ var _helpers_deepfind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/deepfind */ "../src/_helpers/deepfind.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // creates event handler for target object which will be fired when a source is changed

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

    var setEventOptions = _objectSpread({
      protector: protector
    }, eventOptions, {}, changeEvent);

    if (protectKey in protector) {
      return;
    }

    protector[protectKey] = true;
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(allSources, function (_ref2) {
      var sourceObject = _ref2.sourceObject,
          sourceKey = _ref2.sourceKey,
          isDelegated = _ref2.isDelegated;
      var value = isDelegated ? Object(_helpers_deepfind__WEBPACK_IMPORTED_MODULE_2__["default"])(sourceObject, sourceKey) : sourceObject[sourceKey];
      values.push(value);
    });
    var targetValue = handler.apply(object, values);

    if (promiseCalc) {
      if (!(targetValue instanceof Promise)) {
        targetValue = Promise.resolve(targetValue);
      }

      targetValue.then(function (promiseResult) {
        return Object(_set__WEBPACK_IMPORTED_MODULE_1__["default"])(object, target, promiseResult, setEventOptions);
      })["catch"](function (e) {
        throw Error(e);
      });
    } else {
      Object(_set__WEBPACK_IMPORTED_MODULE_1__["default"])(object, target, targetValue, setEventOptions);
    }
  };
}

/***/ }),

/***/ "../src/calc/index.js":
/*!****************************!*\
  !*** ../src/calc/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calc; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_defierror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");
/* harmony import */ var _helpers_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");
/* harmony import */ var _addsource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_addsource */ "../src/calc/_addsource.js");
/* harmony import */ var _createcalchandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_createcalchandler */ "../src/calc/_createcalchandler.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");










 // defines a property which is dependend on other properties

function calc(object, target, sources, givenHandler, eventOptions) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'calc');

  if (target instanceof Object) {
    /*
     * accept an object
     * this.calc({target: { source, handler, event } }, commonEventOptions);
     */
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(target, function (_ref, itemTarget) {
      var itemSource = _ref.source,
          itemHandler = _ref.handler,
          itemEventOptions = _ref.options;
      var commonEventOptions = sources;
      var mergedEventOptions = {};

      if (commonEventOptions) {
        // extend event object by "global" event
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_7__["default"])(mergedEventOptions, commonEventOptions);
      }

      if (itemEventOptions) {
        // extend event object by "local" event ("event" key of an object)
        Object(_helpers_assign__WEBPACK_IMPORTED_MODULE_7__["default"])(mergedEventOptions, itemEventOptions);
      }

      calc(object, itemTarget, itemSource, itemHandler, mergedEventOptions);
    });
    return object;
  }

  if (typeof target !== 'string') {
    throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:target_type', {
      target: target
    });
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
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
  var syncCalcHandler = Object(_createcalchandler__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
    debouncedCalcHandler = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(syncCalcHandler, debounceCalcDelay);
  }

  Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_10__["default"])(object, target);

  if (!(sources instanceof Array)) {
    sources = [sources]; // eslint-disable-line no-param-reassign
  }

  if (debounceCalc) {
    calcHandler = debouncedCalcHandler;
  } else {
    calcHandler = syncCalcHandler;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(sources, function (source) {
    if (typeof source === 'string') {
      // source object is current object
      Object(_addsource__WEBPACK_IMPORTED_MODULE_8__["default"])({
        calcHandler: calcHandler,
        allSources: allSources,
        sourceKey: source,
        sourceObject: object,
        eventOptions: eventOptions
      });
    } else {
      // source object is external object
      if (!source || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(source) !== 'object') {
        throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_3__["default"])('calc:source_type', {
          source: source
        });
      }

      var sourceKey = source.key;
      var sourceObject = source.object;

      if (sourceKey instanceof Array) {
        // many keys are passed
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(sourceKey, function (sourceKeyItem) {
          Object(_addsource__WEBPACK_IMPORTED_MODULE_8__["default"])({
            calcHandler: calcHandler,
            allSources: allSources,
            sourceKey: sourceKeyItem,
            sourceObject: sourceObject,
            eventOptions: eventOptions
          });
        });
      } else {
        // one key is passed
        Object(_addsource__WEBPACK_IMPORTED_MODULE_8__["default"])({
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

/***/ "../src/chain.js":
/*!***********************!*\
  !*** ../src/chain.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chain; });
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib */ "../src/_lib.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");


 // create a prototype of ChainClass
// store target object at "object" property

var prototype = {
  constructor: function constructor(object) {
    this.object = object;
  }
};
var funcNames = Object.keys(_lib__WEBPACK_IMPORTED_MODULE_1__); // iterate over all universal methods

var _loop = function _loop(i) {
  var funcName = funcNames[i];
  var method = _lib__WEBPACK_IMPORTED_MODULE_1__[funcName]; // create every chained method

  prototype[funcName] = function chainedMethod() {
    var args = [this.object];
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(arguments, function (argument) {
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

function chain(object) {
  // check for type and throw an error if it is not an object and is not a function
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_0__["default"])(object, 'chain');
  return new ChainClass(object);
}

/***/ }),

/***/ "../src/defaultbinders.js":
/*!********************************!*\
  !*** ../src/defaultbinders.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binders_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binders/input */ "../src/binders/input.js");
/* harmony import */ var _binders_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binders/textarea */ "../src/binders/textarea.js");
/* harmony import */ var _binders_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binders/select */ "../src/binders/select.js");
/* harmony import */ var _binders_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binders/progress */ "../src/binders/progress.js");
/* harmony import */ var _binders_output__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binders/output */ "../src/binders/output.js");




 // defaultBinders collection by default contains only one function-checker

/* harmony default export */ __webpack_exports__["default"] = ([function (node) {
  switch (node.tagName) {
    case 'INPUT':
      return Object(_binders_input__WEBPACK_IMPORTED_MODULE_0__["default"])(node.type);

    case 'TEXTAREA':
      return Object(_binders_textarea__WEBPACK_IMPORTED_MODULE_1__["default"])();

    case 'SELECT':
      return Object(_binders_select__WEBPACK_IMPORTED_MODULE_2__["default"])(node.multiple);

    case 'PROGRESS':
      return Object(_binders_progress__WEBPACK_IMPORTED_MODULE_3__["default"])();

    case 'OUTPUT':
      return Object(_binders_output__WEBPACK_IMPORTED_MODULE_4__["default"])();

    default:
      return null;
  }
}]);

/***/ }),

/***/ "../src/defi.js":
/*!**********************!*\
  !*** ../src/defi.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib */ "../src/_lib.js");
/* harmony import */ var _lookforbinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookforbinder */ "../src/lookforbinder.js");
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chain */ "../src/chain.js");
/* harmony import */ var _defaultbinders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultbinders */ "../src/defaultbinders.js");




/* harmony default export */ __webpack_exports__["default"] = (Object.assign({}, _lib__WEBPACK_IMPORTED_MODULE_0__, {
  lookForBinder: _lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"],
  chain: _chain__WEBPACK_IMPORTED_MODULE_2__["default"],
  defaultBinders: _defaultbinders__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "../src/index.js":
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./defi */ "../src/defi.js")["default"];

/***/ }),

/***/ "../src/lookforbinder.js":
/*!*******************************!*\
  !*** ../src/lookforbinder.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lookForBinder; });
/* harmony import */ var _defaultbinders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultbinders */ "../src/defaultbinders.js");
 // tries to find a binder for given node

function lookForBinder(node) {
  for (var i = 0; i < _defaultbinders__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
    var binder = _defaultbinders__WEBPACK_IMPORTED_MODULE_0__["default"][i].call(node, node);

    if (binder) {
      return binder;
    }
  }

  return undefined;
}

/***/ }),

/***/ "../src/mediate.js":
/*!*************************!*\
  !*** ../src/mediate.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mediate; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set */ "../src/set.js");
/* harmony import */ var _helpers_defierror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/defierror */ "../src/_helpers/defierror.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");







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


function mediate(object, givenKeys, mediator) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_3__["default"])(object, 'mediate');
  var isKeysArray = givenKeys instanceof Array; // allow to use key-mediator object as another method variation

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(givenKeys) === 'object' && !isKeysArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(givenKeys, function (objVal, objKey) {
      return mediate(object, objKey, objVal);
    });
    return object;
  }

  Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(object); // allow to use both single key and an array of keys

  var keys = isKeysArray ? givenKeys : [givenKeys];
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_7__["default"])(keys, function (key) {
    // if non-string is passed as a key
    if (typeof key !== 'string') {
      throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_5__["default"])('mediate:key_type', {
        key: key
      });
    }

    var propDef = Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_2__["default"])(object, key);
    var propMediator = propDef.mediator = createMediator({
      object: object,
      propDef: propDef,
      key: key,
      mediator: mediator
    }); // set new value

    Object(_set__WEBPACK_IMPORTED_MODULE_4__["default"])(object, key, propMediator(propDef.value), {
      fromMediator: true
    });
  });
  return object;
}

/***/ }),

/***/ "../src/off/_removedomlistener.js":
/*!****************************************!*\
  !*** ../src/off/_removedomlistener.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeDomListener; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _removelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _mq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");



 // removes dom listener from nodes bound to given key

function removeDomListener(object, key, eventName, selector, callback, info) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);

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
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(bindings, function (binding, index) {
      nodes[index] = binding.node;
    });
    Object(_mq__WEBPACK_IMPORTED_MODULE_2__["default"])(nodes).off("".concat(eventName, ".").concat(eventNamespace), selector, callback);
  } // remove bind and unbind listeners from given key


  Object(_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, "bind:".concat(key), callback, info);
  Object(_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, "unbind:".concat(key), callback, info);
  return object;
}

/***/ }),

/***/ "../src/off/_removelistener.js":
/*!*************************************!*\
  !*** ../src/off/_removelistener.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeListener; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _on_domeventregexp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../on/_domeventregexp */ "../src/on/_domeventregexp.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");





 // removes simple event listener from an object

function removeListener(object, name, callback, info) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object); // if no definition do nothing

  if (!def) {
    return false;
  }

  var allEvents = def.events;
  var events = allEvents[name];
  var retain = [];
  var noTrigger = name ? name[0] === '_' : false;
  var nameIsString = typeof name === 'string';
  var domEventExecResult = nameIsString ? _on_domeventregexp__WEBPACK_IMPORTED_MODULE_3__["default"].exec(name) : null;

  if (domEventExecResult) {
    var _domEventExecResult = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(domEventExecResult, 4),
        eventName = _domEventExecResult[1],
        key = _domEventExecResult[2],
        selector = _domEventExecResult[3]; // fixing circular reference issue


    var _require = __webpack_require__(/*! ./_removedomlistener */ "../src/off/_removedomlistener.js"),
        removeDomListener = _require["default"];

    removeDomListener(object, key, eventName, selector, callback, info);
    return true;
  } // if all events need to be removed


  if (typeof name === 'undefined') {
    if (!noTrigger) {
      Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_5__["default"])(allEvents, function (allEventsItem, allEventsName) {
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_4__["default"])(allEventsItem, function (event) {
          var removeEventData = {
            allEventsName: allEventsName,
            callback: event.callback
          };
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "removeevent:".concat(name), removeEventData);
          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'removeevent', removeEventData);
        });
      });
    } // restore default value of "events"


    def.events = {};
  } else if (events) {
    // if events with given name are found
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_4__["default"])(events, function (event) {
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
            Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "removeevent:".concat(name), removeEventData);
          }

          Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'removeevent', removeEventData);
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

/***/ "../src/off/_removetreelistener.js":
/*!*****************************************!*\
  !*** ../src/off/_removetreelistener.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeTreeListener; });
/* harmony import */ var _undelegatelistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_undelegatelistener */ "../src/off/_undelegatelistener.js");
 // removes tree listener from all object tree of fiven path

function removeTreeListener(object, deepPath, handler) {
  if (typeof deepPath === 'string') {
    deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
  } // iterate over keys of the path and undelegate given handler (can be undefined)


  for (var i = 0; i < deepPath.length; i++) {
    // TODO: Array.prototype.slice is slow
    var listenedPath = deepPath.slice(0, i);
    Object(_undelegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(object, listenedPath, "_change:tree:".concat(deepPath[i]), handler);
  }
}

/***/ }),

/***/ "../src/off/_undelegatelistener.js":
/*!*****************************************!*\
  !*** ../src/off/_undelegatelistener.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return undelegateListener; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _removelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _helpers_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/slice */ "../src/_helpers/slice.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");




 // the function removes internally used events such as _asterisk:add

function detatchDelegatedLogic(_ref) {
  var delegatedEventName = _ref.delegatedEventName,
      pathStr = _ref.pathStr,
      allEvents = _ref.allEvents;
  var retain = [];
  var events = allEvents[delegatedEventName];
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_4__["default"])(events, function (event) {
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


function undelegateListener(object, givenPath, name, callback) {
  var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object); // if no definition do nothing

  if (!def) {
    return;
  }

  var allEvents = def.events;
  var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

  if (!path || !path.length) {
    // if no path then remove listener
    Object(_removelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, name, callback, info);
  } else {
    // else do all magic
    var key = path[0];
    var pathStr;

    if (path.length > 1) {
      path = Object(_helpers_slice__WEBPACK_IMPORTED_MODULE_3__["default"])(path, 1);
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

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(object[key]) === 'object') {
      undelegateListener(object[key], path, name, callback, info);
    }
  }
}

/***/ }),

/***/ "../src/off/index.js":
/*!***************************!*\
  !*** ../src/off/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return off; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _removelistener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _undelegatelistener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var _mq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");








 // removes event listener

function off(object, givenNames, callback) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'off');
  var isNamesVarArray = givenNames instanceof Array;
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_5__["default"].get(object); // allow to pass name-handler object
  // TODO: Name-handler object passed to off method is non-documented feature

  if (givenNames && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(givenNames) === 'object' && !isNamesVarArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_4__["default"])(givenNames, function (namesObjCallback, namesObjName) {
      return off(object, namesObjName, namesObjCallback, callback);
    });
    return object;
  }

  if (!givenNames && !callback) {
    def.events = {};
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_4__["default"])(def.props, function (_ref, propName) {
      var bindings = _ref.bindings;

      if (bindings) {
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(bindings, function (_ref2) {
          var node = _ref2.node;
          var eventNamespace = def.id + propName;
          Object(_mq__WEBPACK_IMPORTED_MODULE_8__["default"])(node).off(".".concat(eventNamespace));
        });
      }
    });
    return object;
  } // convert a single event name into array


  var names = isNamesVarArray ? givenNames : [givenNames];
  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(names, function (name) {
    var delegatedEventParts = typeof name === 'string' && name.split('@');

    if (delegatedEventParts.length > 1) {
      var _delegatedEventParts = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(delegatedEventParts, 2),
          path = _delegatedEventParts[0],
          delegatedName = _delegatedEventParts[1];

      Object(_undelegatelistener__WEBPACK_IMPORTED_MODULE_7__["default"])(object, path, delegatedName, callback);
    } else {
      Object(_removelistener__WEBPACK_IMPORTED_MODULE_6__["default"])(object, name, callback);
    }
  });
  return object;
}

/***/ }),

/***/ "../src/on/_adddomlistener.js":
/*!************************************!*\
  !*** ../src/on/_adddomlistener.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDomListener; });
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _addlistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _mq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");
/* harmony import */ var _createdomeventhandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_createdomeventhandler */ "../src/on/_createdomeventhandler.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");





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
        Object(_mq__WEBPACK_IMPORTED_MODULE_3__["default"])(node).on(fullEventName, selector, domEventHandler);
      }
    },
    unbindHandler: function unbindHandler() {
      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var node = evt.node;

      if (node) {
        Object(_mq__WEBPACK_IMPORTED_MODULE_3__["default"])(node).off(fullEventName, selector, domEventHandler);
      }
    }
  };
} // adds DOM event listener for nodes bound to given property


function addDomListener(object, key, eventName, selector, callback, info) {
  var def = Object(_core_init__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
  var propDef = Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key);
  var domEventHandler = Object(_createdomeventhandler__WEBPACK_IMPORTED_MODULE_4__["default"])({
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

  var addBindListenerResult = Object(_addlistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "bind:".concat(key), bindHandler, info);
  var addUnbindListenerResult = Object(_addlistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "unbind:".concat(key), unbindHandler, info); // if events are added successfully then run bindHandler for every node immediately
  // TODO: Describe why do we need addBindListenerResult and addUnbindListenerResult

  if (addBindListenerResult && addUnbindListenerResult) {
    var bindings = propDef.bindings;

    if (bindings) {
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(bindings, function (_ref2) {
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

/***/ "../src/on/_addlistener.js":
/*!*********************************!*\
  !*** ../src/on/_addlistener.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addListener; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _core_defineprop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");
/* harmony import */ var _domeventregexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_domeventregexp */ "../src/on/_domeventregexp.js");




 // property modifier event regexp
// eslint-disable-next-line max-len

var propModEventReg = /^_change:deps:|^_change:bindings:|^_change:delegated:|^_change:common:|^_change:tree:|^change:|^beforechange:/; // adds simple event listener
// used as core of event engine

function addListener(object, name, callback) {
  var info = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _initDefi = Object(_core_init__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
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
    var domEventExecResult = nameIsString && _domeventregexp__WEBPACK_IMPORTED_MODULE_4__["default"].exec(name);

    if (domEventExecResult) {
      var _domEventExecResult = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(domEventExecResult, 4),
          eventName = _domEventExecResult[1],
          key = _domEventExecResult[2],
          selector = _domEventExecResult[3]; // fixing circular reference issue


      var _require = __webpack_require__(/*! ./_adddomlistener */ "../src/on/_adddomlistener.js"),
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
    Object(_core_defineprop__WEBPACK_IMPORTED_MODULE_3__["default"])(object, name.replace(propModEventReg, ''));
  } // names prefixed by underscore mean "private" events


  if (!skipChecks && name[0] !== '_') {
    if (nameIsString) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "addevent:".concat(name), event);
    }

    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'addevent', event);
  } // if event is added successfully return true


  return true;
}

/***/ }),

/***/ "../src/on/_addtreelistener.js":
/*!*************************************!*\
  !*** ../src/on/_addtreelistener.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addTreeListener; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delegatelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_delegatelistener */ "../src/on/_delegatelistener/index.js");
/* harmony import */ var _off_removetreelistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../off/_removetreelistener */ "../src/off/_removetreelistener.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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

    if (previousValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousValue) === 'object') {
      Object(_off_removetreelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(previousValue, restPath, handler);
    } // adds listener for all branches of "restPath" path on newly assigned object


    if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
      addTreeListener(value, restPath, handler);
    } // call original handler


    handler.call(this, extendedChangeEvent);
  };

  newHandler._callback = handler;
  return newHandler;
} // listens changes for all branches of given path
// one of the most hard functions to understand


function addTreeListener(object, deepPath, handler) {
  if (typeof deepPath === 'string') {
    deepPath = deepPath.split('.'); // eslint-disable-line no-param-reassign
  } // iterate over all keys and delegate listener for all objects of given branch


  for (var i = 0; i < deepPath.length; i++) {
    // TODO: Array.prototype.slice method is slow
    var listenPath = deepPath.slice(0, i);
    var restPath = deepPath.slice(i + 1);
    Object(_delegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(object, listenPath, "_change:tree:".concat(deepPath[i]), createTreeListener({
      handler: handler,
      restPath: restPath
    }));
  }
}

/***/ }),

/***/ "../src/on/_createdomeventhandler.js":
/*!*******************************************!*\
  !*** ../src/on/_createdomeventhandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDomEventHandler; });
// returns DOM event handler
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

/***/ "../src/on/_delegatelistener/changehandler.js":
/*!****************************************************!*\
  !*** ../src/on/_delegatelistener/changehandler.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeHandler; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");


 // the function is called when some part of a path is changed
// it delegates event listener for new branch of an object and undelegates it for old one
// used for non-asterisk events

function changeHandler(_ref) {
  var previousValue = _ref.previousValue,
      value = _ref.value;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"].latestEvent.info.delegatedData,
      path = _ref2.path,
      name = _ref2.name,
      callback = _ref2.callback,
      info = _ref2.info;

  if (value && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object') {
    var _require = __webpack_require__(/*! ./ */ "../src/on/_delegatelistener/index.js"),
        delegateListener = _require["default"]; // fixing circular ref


    delegateListener(value, path, name, callback, info);
  }

  if (previousValue && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(previousValue) === 'object') {
    Object(_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(previousValue, path, name, callback, info);
  }
}

/***/ }),

/***/ "../src/on/_delegatelistener/index.js":
/*!********************************************!*\
  !*** ../src/on/_delegatelistener/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return delegateListener; });
/* harmony import */ var _addlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _changehandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changehandler */ "../src/on/_delegatelistener/changehandler.js");
/* harmony import */ var _helpers_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/slice */ "../src/_helpers/slice.js");


 // adds delegated event listener to an object by given path
// TODO Handler uses wrong context

function delegateListener(object, givenPath, name, callback) {
  var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  // if typeof path is string and path is not empty string then split it
  var path = typeof givenPath === 'string' && givenPath !== '' ? givenPath.split('.') : givenPath;

  if (!path || !path.length) {
    // if no path then add simple listener
    Object(_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(object, name, callback, info);
  } else {
    // else do all magic
    var key = path[0];
    var pathStr; // needed for undelegation

    if (path.length > 1) {
      path = Object(_helpers_slice__WEBPACK_IMPORTED_MODULE_2__["default"])(path, 1);
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

    Object(_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(object, "_change:delegated:".concat(key), function (evt) {
      return Object(_changehandler__WEBPACK_IMPORTED_MODULE_1__["default"])(evt);
    }, {
      delegatedData: delegatedData,
      pathStr: pathStr
    }); // call handler manually

    Object(_changehandler__WEBPACK_IMPORTED_MODULE_1__["default"])({
      value: object[key]
    }, delegatedData);
  }
}

/***/ }),

/***/ "../src/on/_domeventregexp.js":
/*!************************************!*\
  !*** ../src/on/_domeventregexp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// the regexp allows to parse things like "click::x(.y)"
// it's shared between few modules
/* harmony default export */ __webpack_exports__["default"] = (/([^::]+)::([^()]+)?(?:\((.*)\))?/);

/***/ }),

/***/ "../src/on/_splitbyspaceregexp.js":
/*!****************************************!*\
  !*** ../src/on/_splitbyspaceregexp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// allows to split by spaces not inclusing ones inside of brackers
/* harmony default export */ __webpack_exports__["default"] = (/\s+(?![^(]*\))/g);

/***/ }),

/***/ "../src/on/index.js":
/*!**************************!*\
  !*** ../src/on/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return on; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../off */ "../src/off/index.js");
/* harmony import */ var _helpers_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _addlistener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _delegatelistener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_delegatelistener */ "../src/on/_delegatelistener/index.js");








 // adds event listener

function on(object, givenNames, givenCallback, options) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'on');
  var isNamesVarArray = givenNames instanceof Array; // allow to pass name-handler object

  if (givenNames && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(givenNames) === 'object' && !isNamesVarArray) {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(givenNames, function (namesObjCallback, namesObjName) {
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

      Object(_off__WEBPACK_IMPORTED_MODULE_3__["default"])(object, names, onceCallback);
    }; // allow to remove event listener py passing original callback to "off"


    callback._callback = givenCallback;
  } else if (typeof debounceOption === 'number' || debounceOption === true) {
    callback = Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(givenCallback, debounceOption === true ? 0 : debounceOption, object);
  } else {
    callback = givenCallback;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(names, function (name) {
    var delegatedEventParts = typeof name === 'string' && name.split('@');

    if (delegatedEventParts.length > 1) {
      // if @ exists in event name then this is delegated event
      var _delegatedEventParts = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(delegatedEventParts, 2),
          path = _delegatedEventParts[0],
          delegatedName = _delegatedEventParts[1];

      Object(_delegatelistener__WEBPACK_IMPORTED_MODULE_8__["default"])(object, path, delegatedName, callback);
    } else {
      // if not, this is simple event
      Object(_addlistener__WEBPACK_IMPORTED_MODULE_7__["default"])(object, name, callback);
    }
  }); // call callback immediatelly if triggerOnInit is true

  if (triggerOnInit) {
    callback.call(object, options);
  }

  return object;
}

/***/ }),

/***/ "../src/remove.js":
/*!************************!*\
  !*** ../src/remove.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return remove; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unbindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unbindnode */ "../src/unbindnode/index.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _off_removelistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_defierror__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/defierror */ "../src/_helpers/defierror.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/foreach */ "../src/_helpers/foreach.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // removes a property, its bindings and its events
// TODO: remove function does not correctly removes delegated events, bindings, tree listeners etc

function remove(object, givenKey, eventOptions) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_5__["default"])(object, 'remove');
  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_4__["default"].get(object);
  var _eventOptions = eventOptions,
      silent = _eventOptions.silent; // allow to pass single key or an array of keys

  var keys = givenKey instanceof Array ? givenKey : [givenKey];

  var _loop = function _loop(i) {
    var key = keys[i]; // if non-string is passed as a key

    if (typeof key !== 'string') {
      throw Object(_helpers_defierror__WEBPACK_IMPORTED_MODULE_6__["default"])('remove:key_type', {
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

    Object(_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key); // TODO: Manual listing of event prefixes may cause problems in future

    var removeEventPrefies = ['_change:deps', '_change:bindings', '_change:delegated', '_change:tree', 'change', 'beforechange', 'bind', 'unbind']; // remove all events

    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_7__["default"])(removeEventPrefies, function (prefix) {
      return Object(_off_removelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(object, "".concat(prefix, ":").concat(key));
    }); // delete property definition

    delete props[key]; // delete the property itself

    delete object[key];

    var extendedEventOptions = _objectSpread({
      key: key,
      value: value
    }, eventOptions); // trigger delegated events logic removal for asterisk events (*.*.*@foo)


    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, '_delete:delegated', extendedEventOptions); // fire events if "silent" is not true

    if (!silent) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'delete', extendedEventOptions);
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "delete:".concat(key), extendedEventOptions);
    }
  };

  for (var i = 0; i < keys.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }
}

/***/ }),

/***/ "../src/set.js":
/*!*********************!*\
  !*** ../src/set.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return set; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/is */ "../src/_helpers/is.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/forown */ "../src/_helpers/forown.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // the function sets new value for a property
// since its performance is very critical we're checking events existence manually

function set(object, key, value, eventOptions) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_4__["default"])(object, 'set'); // if no key or falsy key is given

  if (!key) {
    return object;
  } // allow to use key-value object as another method variation


  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(key) === 'object') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(key, function (objVal, objKey) {
      return set(object, objKey, objVal, value);
    });
    return object;
  }

  eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign

  var def = _core_defs__WEBPACK_IMPORTED_MODULE_2__["default"].get(object); // if no object definition then make simple assignment

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
      mediator = propDef.mediator; // possible flags, all of them are falsy by default

  var _eventOptions = eventOptions,
      skipMediator = _eventOptions.skipMediator,
      fromMediator = _eventOptions.fromMediator,
      force = _eventOptions.force,
      forceHTML = _eventOptions.forceHTML,
      silent = _eventOptions.silent,
      silentHTML = _eventOptions.silentHTML,
      skipCalc = _eventOptions.skipCalc;
  var newValue;

  if (mediator && !Object(_helpers_is__WEBPACK_IMPORTED_MODULE_5__["default"])(value, previousValue) && !skipMediator && !fromMediator) {
    newValue = mediator(value);
  } else {
    newValue = value;
  }

  var isChanged = !Object(_helpers_is__WEBPACK_IMPORTED_MODULE_5__["default"])(newValue, previousValue); // add to eventOptions object some useful properties
  // we override default eventOptions because some of the properties need to have actual values,
  // not inherited ones (eg when calc is used)

  var extendedEventOptions = _objectSpread({}, eventOptions, {
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
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, beforechangeEventName, extendedEventOptions);
    }

    if (events[beforechangeStr]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, beforechangeStr, extendedEventOptions);
    }
  }

  propDef.value = newValue; // triger bindings

  if (!silentHTML && (isChanged || forceHTML)) {
    var changeBindingsEventName = "_change:bindings:".concat(key);

    if (events[changeBindingsEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeBindingsEventName, extendedEventOptions);
    }
  } // trigger change:KEY and change events


  if (triggerChange) {
    var changeStr = 'change';
    var changeEventName = "".concat(changeStr, ":").concat(key);

    if (events[changeEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeEventName, extendedEventOptions);
    }

    if (events[changeStr]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeStr, extendedEventOptions);
    }
  } // trigger dependencies made by calc method


  if ((isChanged || force) && !skipCalc) {
    var changeDepsEventName = "_change:deps:".concat(key);

    if (events[changeDepsEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeDepsEventName, extendedEventOptions);
    }
  }

  if (isChanged) {
    // trigger common delegated events logic
    var changeDelegatedKeyEventName = "_change:delegated:".concat(key);

    if (events[changeDelegatedKeyEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeDelegatedKeyEventName, extendedEventOptions);
    } // trigger tree change events logic


    var changeTreeEventName = "_change:tree:".concat(key);

    if (events[changeTreeEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeTreeEventName, extendedEventOptions);
    } // trigger other internal change events


    var changeCommonEventName = "_change:common:".concat(key);

    if (events[changeCommonEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeCommonEventName, extendedEventOptions);
    } // trigger delegated logic for asterisk events (*.*.*@foo)
    // TODO: Confusing events names ("_change:delegated", "_change:common:KEY" etc)


    var changeDelegatedEventName = '_change:delegated';

    if (events[changeDelegatedEventName]) {
      Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_3__["default"])(object, changeDelegatedEventName, extendedEventOptions);
    }
  }

  return object;
}

/***/ }),

/***/ "../src/trigger/_triggerdomevent.js":
/*!******************************************!*\
  !*** ../src/trigger/_triggerdomevent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerDOMEvent; });
/* harmony import */ var _triggeronedomevent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_triggeronedomevent */ "../src/trigger/_triggeronedomevent.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");


 // triggers DOM event on bound nodes

function triggerDOMEvent(object, key, eventName, selector, triggerArgs) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_1__["default"].get(object);

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

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(bindings, function (_ref) {
    var node = _ref.node;

    if (selector) {
      // if selector is given trigger an event on all node descendants
      var descendants = node.querySelectorAll(selector);
      Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_2__["default"])(descendants, function (descendant) {
        Object(_triggeronedomevent__WEBPACK_IMPORTED_MODULE_0__["default"])({
          node: descendant,
          eventName: eventName,
          triggerArgs: triggerArgs
        });
      });
    } else {
      // trigger an event for single node
      Object(_triggeronedomevent__WEBPACK_IMPORTED_MODULE_0__["default"])({
        node: node,
        eventName: eventName,
        triggerArgs: triggerArgs
      });
    }
  });
}

/***/ }),

/***/ "../src/trigger/_triggerone.js":
/*!*************************************!*\
  !*** ../src/trigger/_triggerone.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerOne; });
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
 // triggers one event

function triggerOne(object, name, triggerArgs) {
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_0__["default"].get(object);
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

        var callback = _event.callback;
        callback.call(object, triggerArgs);
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

/***/ "../src/trigger/_triggeronedomevent.js":
/*!*********************************************!*\
  !*** ../src/trigger/_triggeronedomevent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerOneDOMEvent; });
// triggers given DOM event on given node
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

/***/ "../src/trigger/index.js":
/*!*******************************!*\
  !*** ../src/trigger/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trigger; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _on_domeventregexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../on/_domeventregexp */ "../src/on/_domeventregexp.js");
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _triggerone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _triggerdomevent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_triggerdomevent */ "../src/trigger/_triggerdomevent.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");






 // triggers an event

function trigger(object, givenNames) {
  for (var _len = arguments.length, triggerArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    triggerArgs[_key - 2] = arguments[_key];
  }

  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'trigger'); // allow to use either a string or an array of events

  var names = givenNames instanceof Array ? givenNames : [givenNames];
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_3__["default"].get(object); // if no definition do nothing

  if (!def) {
    return object;
  }

  var allEvents = def.events;

  if (!allEvents) {
    return object;
  }

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_6__["default"])(names, function (name) {
    var domEvtExecResult = typeof name === 'string' && _on_domeventregexp__WEBPACK_IMPORTED_MODULE_1__["default"].exec(name);

    if (domEvtExecResult) {
      // if EVT::KEY(SELECTOR) ia passed as event name then trigger DOM event
      var _domEvtExecResult = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(domEvtExecResult, 4),
          eventName = _domEvtExecResult[1],
          key = _domEvtExecResult[2],
          selector = _domEvtExecResult[3];

      Object(_triggerdomevent__WEBPACK_IMPORTED_MODULE_5__["default"])(object, key, eventName, selector, triggerArgs);
    } else {
      // trigger ordinary event
      Object(_triggerone__WEBPACK_IMPORTED_MODULE_4__["default"])(object, name, triggerArgs);
    }
  });
  return object;
}

/***/ }),

/***/ "../src/unbindnode/_removebinding.js":
/*!*******************************************!*\
  !*** ../src/unbindnode/_removebinding.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeBinding; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _off_removelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var spaceReg = /\s+/; // the function removes single binding for single object
// called by unbindNode

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
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_3__["default"])(on.split(spaceReg), function (evtName) {
      return node.removeEventListener(evtName, nodeHandler);
    });
  } // remove object event listener


  Object(_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(object, "_change:bindings:".concat(key), objectHandler); // if binder.destroy is given call it

  if (destroy) {
    destroy.call(node, bindingOptions);
  } // fire events


  if (!silent) {
    var extendedEventOptions = _objectSpread({
      key: key,
      node: node
    }, eventOptions);

    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, "unbind:".concat(key), extendedEventOptions);
    Object(_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(object, 'unbind', extendedEventOptions);
  }
}

/***/ }),

/***/ "../src/unbindnode/index.js":
/*!**********************************!*\
  !*** ../src/unbindnode/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unbindNode; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");
/* harmony import */ var _core_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");
/* harmony import */ var _bindnode_getnodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindnode/_getnodes */ "../src/bindnode/_getnodes.js");
/* harmony import */ var _off_removetreelistener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../off/_removetreelistener */ "../src/off/_removetreelistener.js");
/* harmony import */ var _helpers_foreach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/foreach */ "../src/_helpers/foreach.js");
/* harmony import */ var _helpers_forown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/forown */ "../src/_helpers/forown.js");
/* harmony import */ var _removebinding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_removebinding */ "../src/unbindnode/_removebinding.js");







 // unbinds a node

function unbindNode(object, key, node, eventOptions) {
  // throw error when object type is wrong
  Object(_helpers_checkobjecttype__WEBPACK_IMPORTED_MODULE_1__["default"])(object, 'unbindNode');

  if (key instanceof Array) {
    /*
     * accept array of keys
     * this.unbindNode(['a', 'b', 'c'], node)
     */
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(key, function (itemKey) {
      return unbindNode(object, itemKey, node, eventOptions);
    });
    return object;
  }

  if (key && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(key) === 'object') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(key, function (keyObjValue, keyObjKey) {
      if (keyObjValue.constructor === Object && 'node' in keyObjValue) {
        // this.unbindNode({ key: { node: $(), binder } ) }, { silent: true });
        unbindNode(object, keyObjKey, keyObjValue.node, node);
      } else if (keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
        // this.unbindNode({ key: [{ node: $(), binder }] ) }, { silent: true });
        Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(keyObjValue, function (keyObjValueItem) {
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
  var def = _core_defs__WEBPACK_IMPORTED_MODULE_2__["default"].get(object);

  if (!def) {
    return object;
  }

  var props = def.props; // allow to pass null or undefined as key
  // if passed then remove bindings of all keys for given object

  if (key === null || typeof key === 'undefined') {
    Object(_helpers_forown__WEBPACK_IMPORTED_MODULE_6__["default"])(props, function (propsItem, propsKey) {
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


      Object(_off_removetreelistener__WEBPACK_IMPORTED_MODULE_4__["default"])(object, deepPath.slice(0, deepPathLength - 2));
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
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(bindings, function (binding) {
      Object(_removebinding__WEBPACK_IMPORTED_MODULE_7__["default"])({
        object: object,
        key: key,
        eventOptions: eventOptions,
        binding: binding
      });
    });
    propDef.bindings = null;
    return object;
  }

  var $nodes = Object(_bindnode_getnodes__WEBPACK_IMPORTED_MODULE_3__["default"])(object, node);
  var retainBindings = [];
  var retainNodes = []; // iterate over all bindngs and compare their node with given nodes

  Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])($nodes, function (nodesItem) {
    Object(_helpers_foreach__WEBPACK_IMPORTED_MODULE_5__["default"])(bindings, function (binding) {
      if (binding.node === nodesItem) {
        Object(_removebinding__WEBPACK_IMPORTED_MODULE_7__["default"])({
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

/***/ "./helpers/createspy.js":
/*!******************************!*\
  !*** ./helpers/createspy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSpy; });
function createSpy() {
  var spy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var spyName = 'function';
  var spyObj = {};
  spyObj[spyName] = spy;
  return spyOn(spyObj, spyName).and.callThrough();
}

/***/ }),

/***/ "./helpers/makeobject.js":
/*!*******************************!*\
  !*** ./helpers/makeobject.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeObject; });
// creates nested object based on path and lastValue
// example: makeObject('a.b.c', 42) -> {a: {b: {c; 42}}}
function makeObject() {
  var givenPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var lastValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var path = givenPath ? givenPath.split('.') : [];
  var result = {};
  var obj = result;
  var key;

  while (path.length > 1) {
    key = path.shift();
    obj = obj[key] = {
      myNameIs: key
    };
  }

  obj[path.shift()] = lastValue;
  return result;
}

/***/ }),

/***/ "./helpers/simulateclick.js":
/*!**********************************!*\
  !*** ./helpers/simulateclick.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simulateClick; });
// simulates click on a node
function simulateClick(node) {
  var evt = window.document.createEvent('MouseEvent');
  evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  node.dispatchEvent(evt);
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This gets replaced by karma webpack with the updated files on rebuild
var __karmaWebpackManifest__ = []; // require all modules from the
// current directory and all subdirectories

var testsContext = __webpack_require__("./spec sync recursive .*\\.js$");

function inManifest(path) {
  return __karmaWebpackManifest__.indexOf(path) >= 0;
}

var runnable = testsContext.keys().filter(inManifest); // Run all tests if we didn't find any changes

if (!runnable.length) {
  runnable = testsContext.keys();
}

runnable.forEach(testsContext);

var componentsContext = __webpack_require__("../src sync recursive .*\\.js$");

componentsContext.keys().forEach(componentsContext);

/***/ }),

/***/ "./spec sync recursive .*\\.js$":
/*!***************************!*\
  !*** ./spec sync .*\.js$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bindings/bindings_spec.js": "./spec/bindings/bindings_spec.js",
	"./bindings/default_binders_spec.js": "./spec/bindings/default_binders_spec.js",
	"./calc_spec.js": "./spec/calc_spec.js",
	"./chain_spec.js": "./spec/chain_spec.js",
	"./common_spec.js": "./spec/common_spec.js",
	"./events/delegated_spec.js": "./spec/events/delegated_spec.js",
	"./events/events_change_spec.js": "./spec/events/events_change_spec.js",
	"./events/events_core_spec.js": "./spec/events/events_core_spec.js",
	"./events/events_dom_spec.js": "./spec/events/events_dom_spec.js",
	"./events/events_summary_spec.js": "./spec/events/events_summary_spec.js",
	"./events/tree_change_spec.js": "./spec/events/tree_change_spec.js",
	"./mediate_spec.js": "./spec/mediate_spec.js",
	"./mq/add_spec.js": "./spec/mq/add_spec.js",
	"./mq/events_spec.js": "./spec/mq/events_spec.js",
	"./mq/init_spec.js": "./spec/mq/init_spec.js",
	"./mq/parsehtml_spec.js": "./spec/mq/parsehtml_spec.js",
	"./remove_spec.js": "./spec/remove_spec.js",
	"./set_spec.js": "./spec/set_spec.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./spec sync recursive .*\\.js$";

/***/ }),

/***/ "./spec/bindings/bindings_spec.js":
/*!****************************************!*\
  !*** ./spec/bindings/bindings_spec.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var src_unbindnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/unbindnode */ "../src/unbindnode/index.js");
/* harmony import */ var src_bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/bound */ "../src/bound.js");
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */






describe('Bindings', function () {
  var noDebounceFlag = {
    debounceSetValue: false,
    debounceGetValue: false
  };
  var _window = window,
      document = _window.document;
  var obj;
  var node;
  var child;
  var binder;
  var initializeCall;
  var destroyCall;

  var testSimpleBind = function testSimpleBind() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
    obj[key] = 'foo';
    expect(node.value).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj[key]).toEqual('bar');
    expect(initializeCall).toHaveBeenCalled();
    expect(Object(src_bound__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key)).toEqual(node);
    expect(Array.from(Object(src_bound__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key, {
      all: true
    }))).toEqual([node]);
  };

  var testSimpleUnbind = function testSimpleUnbind() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
    var testedNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    obj[key] = 'foo';
    expect(testedNode.value).toEqual('');
    testedNode.value = 'baz';
    testedNode.ondummyevent();
    expect(obj[key]).toEqual('foo');
    expect(destroyCall).toHaveBeenCalled();
    expect(Object(src_bound__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key)).toEqual(null);
    expect(Array.from(Object(src_bound__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, key, {
      all: true
    }))).toEqual([]);
  };

  beforeEach(function () {
    obj = {};
    node = document.createElement('div');
    child = node.appendChild(document.createElement('div'));
    child.className = 'child';
    initializeCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    destroyCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    binder = {
      on: function on(cbc) {
        this.ondummyevent = cbc;
      },
      getValue: function getValue() {
        return this.value;
      },
      setValue: function setValue(value) {
        this.value = value;
      },
      initialize: function initialize() {
        this.value = this.value || '';
        initializeCall();
      },
      destroy: function destroy() {
        destroyCall();
      }
    };
  });
  it('should handle debounceSetValueOnBind=true', function (done) {
    obj.x = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, {
      debounceSetValueOnBind: true
    });
    expect(node.value).toEqual('');
    setTimeout(function () {
      expect(node.value).toEqual('foo');
      done();
    }, 50);
  });
  it('should handle debounceGetValueOnBind=true', function (done) {
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, {
      debounceGetValueOnBind: true
    });
    expect(obj.x).toEqual(undefined);
    setTimeout(function () {
      expect(obj.x).toEqual('foo');
      done();
    }, 50);
  });
  it('should handle debounceSetValue=true (use default value)', function (done) {
    obj.x = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder);
    expect(node.value).toEqual('foo');
    obj.x = 'bar';
    expect(node.value).toEqual('foo');
    setTimeout(function () {
      expect(node.value).toEqual('bar');
      done();
    }, 50);
  });
  it('should handle debounceGetValue=true (use default value)', function (done) {
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder);
    expect(obj.x).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.x).toEqual('foo');
    setTimeout(function () {
      expect(obj.x).toEqual('bar');
      done();
    }, 50);
  });
  xit('should bind and use DOM events', function () {});
  xit('handle option setOnBind=true', function () {});
  xit('handle option getOnBind=true', function () {});
  xit('handle option setOnBind=false', function () {});
  xit('handle option getOnBind=false', function () {});
  it('should bind and trigger events', function () {
    var bindCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var bindKeyCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'bind', bindCall);
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'bind:x', bindKeyCall);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    testSimpleBind();
    expect(bindCall).toHaveBeenCalled();
    expect(bindKeyCall).toHaveBeenCalled();
  });
  it('should unbind and trigger events', function () {
    var unbindCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var unbindKeyCall = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'unbind', unbindCall);
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'unbind:x', unbindKeyCall);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', node);
    testSimpleUnbind();
    expect(unbindCall).toHaveBeenCalled();
    expect(unbindKeyCall).toHaveBeenCalled();
  });
  it('should bind using key-node object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: node
    }, binder, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-binding object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: {
        node: node,
        binder: binder
      }
    }, null, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-bindingsarray object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: [{
        node: node,
        binder: binder
      }]
    }, null, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-binding object and use common binder', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: {
        node: node
      }
    }, binder, noDebounceFlag);
    testSimpleBind();
  });
  it('should bind using key-bindingsarray object and use common binder', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: [{
        node: node
      }]
    }, binder, noDebounceFlag);
    testSimpleBind();
  });
  it('should not unbind when wrong node is given', function () {
    var wrongNode = document.createElement('div');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', wrongNode);
    testSimpleBind();
  });
  it('should not unbind when wrong key is given', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'y', node);
    testSimpleBind();
  });
  it('should unbind when node is not given', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x');
    testSimpleUnbind();
  });
  it('should unbind all when neither key nor node is given', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    testSimpleUnbind();
  });
  it('should unbind by ":bound()" selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', ':bound(x)');
    testSimpleUnbind();
  });
  it('should unbind by ":bound() [native_selector]" selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'y', child, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'y', ':bound(x) .child');
    testSimpleUnbind('y', child);
  });
  it('should unbind by ":bound() > [native_selector]" selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', node, binder, noDebounceFlag);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'y', child, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'y', ':bound(x) > .child');
    testSimpleUnbind('y', child);
  });
  it('should unbind using key-node object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: node
    }, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, {
      x: node
    });
    testSimpleUnbind();
  });
  it('should unbind using key-binding object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: {
        node: node,
        binder: binder
      }
    }, null, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, {
      x: {
        node: node,
        binder: binder
      }
    });
    testSimpleUnbind();
  });
  it('should unbind using key-bindings array object', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      x: [{
        node: node,
        binder: binder
      }]
    }, null, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, {
      x: [{
        node: node,
        binder: binder
      }]
    });
    testSimpleUnbind();
  });
  it('should bind delegated target', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('x.y');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x.y.z', node, binder, noDebounceFlag);
    obj.x.y.z = 'foo';
    expect(node.value).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.x.y.z).toEqual('bar');
  });
  it('should unbind delegated target', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('x.y');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x.y.z', node, binder, noDebounceFlag);
    Object(src_unbindnode__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x.y.z', node);
    obj.x.y.z = 'foo';
    expect(node.value).toEqual('');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.x.y.z).toEqual('foo');
  });
  it('cancels delegated binding when exactKey=true option is passed', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x.y.z', node, binder, Object.assign({
      exactKey: true
    }, noDebounceFlag));
    testSimpleBind('x.y.z');
  });
  it('should rebind delegated target', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('u.x.y.z', 'go');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'u.x.y.z', node, binder, noDebounceFlag);
    obj.u.x = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('y.z', 'foo');
    expect(node.value).toEqual('foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(obj.u.x.y.z).toEqual('bar');
  });
  it('should remove binding if delegated target is reassigned', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('u.x.y');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'u.x.y.z', node, binder, noDebounceFlag);
    var x = obj.u.x;
    obj.u.x = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('y.z', 'foo');
    node.value = 'bar';
    node.ondummyevent();
    expect(x.y.z).not.toEqual('bar');
    expect(obj.u.x.y.z).toEqual('bar');
    x.y.z = 'baz';
    expect(node.value).toEqual('bar');
  });
  it('throws error when node is not there', function () {
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x');
    }).toThrow();
  });
  it('throws error when node falsy', function () {
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, '', node);
    }).toThrow();
  });
  it('does not throw error when node is not there and optional=true is given', function () {
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', undefined, undefined, {
        optional: true
      });
    }).not.toThrow();
  });
  it('doesn\'t throw error with bindNode method when node is missing', function () {
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', {}, {
        optional: true
      });
    }).not.toThrow();
  });
  it('doesn\'t throw error with bindNode method' + ' when node is missing (an object is used)', function () {
    expect(function () {
      Object(src_bindnode__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
        x: null,
        y: undefined
      }, {}, {
        optional: true
      });
    }).not.toThrow();
  });
});

/***/ }),

/***/ "./spec/bindings/default_binders_spec.js":
/*!***********************************************!*\
  !*** ./spec/bindings/default_binders_spec.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_binders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/binders */ "../src/binders/index.js");
/* harmony import */ var src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lookforbinder */ "../src/lookforbinder.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */



describe('Default binders', function () {
  var noDebounceFlag = {
    debounceSetValue: false,
    debounceGetValue: false
  };
  var obj;
  beforeEach(function () {
    jasmine.addMatchers({
      bindersEqual: function bindersEqual(util, customEqualityTesters) {
        return {
          compare: function compare(actual, expected) {
            var result = {};
            var pass = result.pass = util.equals(actual.on, expected.on, customEqualityTesters) && util.equals("".concat(actual.getValue), "".concat(expected.getValue), customEqualityTesters) && util.equals("".concat(actual.setValue), "".concat(expected.setValue), customEqualityTesters);
            result.message = pass ? 'Binders are equal' : 'Binders are not equal';
            return result;
          }
        };
      }
    });
    obj = {};
  });
  it('should bind textarea', function () {
    var node = window.document.createElement('textarea');
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["textarea"])(), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.value).toEqual('bar');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["textarea"])());
  });
  it('should bind progress', function () {
    var node = window.document.createElement('progress');
    node.max = 3;
    node.value = 1;
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["progress"])(), noDebounceFlag);
    expect(obj.x).toEqual(1);
    obj.x = 2;
    expect(node.value).toEqual(2);
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["progress"])());
  });
  it('should bind text input', function () {
    var node = window.document.createElement('input');
    node.type = 'text';
    node.value = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["input"])('text'), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.value).toEqual('bar');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["input"])('text'));
  });
  it('should bind checkbox input', function () {
    var node = window.document.createElement('input');
    node.type = 'checkbox';
    node.checked = false;
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["input"])('checkbox'), noDebounceFlag);
    expect(obj.x).toEqual(false);
    obj.x = true;
    expect(node.checked).toEqual(true);
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["input"])('checkbox'));
  });
  it('should bind output', function () {
    var node = window.document.createElement('output');
    node.innerHTML = 'foo';
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["output"])(), noDebounceFlag);
    expect(obj.x).toEqual('foo');
    obj.x = 'bar';
    expect(node.innerHTML).toEqual('bar');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["output"])());
  });
  it('should bind select', function () {
    var node = window.document.createElement('select');

    for (var i = 0; i < 10; i++) {
      var option = node.appendChild(window.document.createElement('option'));
      option.value = "".concat(i);

      if (i === 1) {
        option.selected = true;
      }
    }

    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])(), noDebounceFlag);
    expect(obj.x).toEqual('1');
    obj.x = '5';
    expect(node.value).toEqual('5');
    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])());
  });
  it('should bind select (multiple)', function () {
    var node = window.document.createElement('select');
    node.multiple = true;

    for (var i = 0; i < 10; i++) {
      var option = node.appendChild(window.document.createElement('option'));
      option.value = "".concat(i);

      if (i === 1 || i === 4 || i === 7) {
        option.selected = true;
      }
    }

    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', node, Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])(true), noDebounceFlag);
    expect(obj.x).toEqual(['1', '4', '7']);
    obj.x = ['2', '5', '8'];

    for (var _i = 0; _i < 10; _i++) {
      expect(node.options[_i].selected).toEqual(_i === 2 || _i === 5 || _i === 8);
    }

    expect(Object(src_lookforbinder__WEBPACK_IMPORTED_MODULE_1__["default"])(node)).bindersEqual(Object(src_binders__WEBPACK_IMPORTED_MODULE_0__["select"])(true));
  });
});

/***/ }),

/***/ "./spec/calc_spec.js":
/*!***************************!*\
  !*** ./spec/calc_spec.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/calc */ "../src/calc/index.js");
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/createspy */ "./helpers/createspy.js");



/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */




var noDebounceFlag = {
  debounceCalc: false
};

var delay = function delay(duration) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, duration);
  });
};

describe('calc', function () {
  it('throws an error if an object is null', function () {
    expect(function () {
      Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(null, 'a', 'b');
    }).toThrow();
  });
  it('adds simple dependency', function () {
    var obj = {
      a: 1,
      b: 2
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, noDebounceFlag);
    expect(obj.c).toEqual(3);
    obj.a = 3;
    expect(obj.c).toEqual(5);
    obj.b = 3;
    expect(obj.c).toEqual(6);
  });
  it('adds dependency from another object', function () {
    var obj = {
      a: 1,
      b: 2
    };
    var obj2 = {
      c: 4,
      d: 8
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'e', [{
      object: obj,
      key: ['a', 'b']
    }, {
      object: obj2,
      key: ['c', 'd']
    }], function (a, b, c, d) {
      return a + b + c + d;
    }, noDebounceFlag);
    expect(obj.e).toEqual(15);
  });
  it('allows to pass an object of calcs', function () {
    var obj = {
      a: 1,
      b: 2,
      g: 16
    };
    var obj2 = {
      c: 4,
      d: 8
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, {
      e: {
        source: ['a', 'b', {
          object: obj2,
          key: ['c', 'd']
        }],
        handler: function handler(a, b, c, d) {
          return a + b + c + d;
        }
      },
      f: {
        source: 'g'
      },
      g: {
        source: 'f'
      }
    }, noDebounceFlag);
    expect(obj.e).toEqual(15);
    expect(obj.f).toEqual(16);
    expect(obj.g).toEqual(16);
  });
  it('does not set on init via setOnInit=false', function () {
    var obj = {
      a: 1,
      b: 2,
      c: 0
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      setOnInit: false,
      debounceCalc: false
    });
    expect(obj.c).toEqual(0);
  });
  it('protects from cyclical links', function () {
    var obj = {
      a: 1,
      b: 2,
      c: 3
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a', ['b', 'c'], function (x, y) {
      return x + y;
    }, noDebounceFlag);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'b', ['a', 'c'], function (x, y) {
      return x + y;
    }, noDebounceFlag);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (x, y) {
      return x + y;
    }, noDebounceFlag);
    expect(obj.a).toEqual(27);
  });
  xit('throws error when target is not a string', function () {});
  xit('throws error when source is not an object', function () {});
  xit('throws error when source key is not a string', function () {});
  xit('throws error when source object is not an object', function () {});
  it('allows delegated dependencies', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.c', 1);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'd', 'a.b.c', function (c) {
      return c;
    }, noDebounceFlag);
    expect(obj.d).toEqual(1);
    obj.a.b.c = 2;
    expect(obj.d).toEqual(2);
    var b = obj.a.b;
    obj.a.b = {
      c: 3
    };
    b.c = 'nope';
    expect(obj.d).toEqual(3);
    var a = obj.a;
    obj.a = {
      b: {
        c: 4
      }
    };
    a.b = {
      c: 'nope'
    };
    expect(obj.d).toEqual(4);
  });
  it('allows delegated dependencies from another object', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a', 1);
    var obj2 = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('b.c.d', 2);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'd', {
      object: obj2,
      key: 'b.c.d'
    }, function (c) {
      return c * 2;
    });
    expect(obj.d).toEqual(4);
  });
  it('allows to cancel delegated dependencies by exactKey=true option', function () {
    var obj = {
      'a.b.c': 1,
      'd.e.f': 2
    };
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a.b.c', 'd.e.f'], function (abc, def) {
      return abc + def;
    }, {
      debounceCalc: false,
      exactKey: true
    });
    expect(obj.c).toEqual(3);
    obj['a.b.c'] = 3;
    expect(obj.c).toEqual(5);
    obj['d.e.f'] = 3;
    expect(obj.c).toEqual(6);
  });
  it('uses event options', function () {
    var obj = {};
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])(function (evt) {
      return expect(evt.foo).toEqual('bar');
    });
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      foo: 'bar',
      debounceCalc: false
    });
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler);
    obj.a = 2;
    obj.b = 3;
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('uses silent=true from event options', function () {
    var obj = {};
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      silent: true
    });
    obj.a = 2;
    obj.b = 3;
    expect(handler).not.toHaveBeenCalled();
  });
  it('allows to debounce handler via debounceCalc=true (use default value)', function (done) {
    var obj = {
      a: 1,
      b: 2
    };
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
      expect(obj.c).toEqual(firstCall ? 3 : 5);
    });
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler); // we'e going to handle the first call separately because debounceCalcOnInit is always true

    var firstCall = true;
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    });
    firstCall = false;
    obj.a = 0;
    obj.a = 1;
    obj.a = 2;
    obj.b = 0;
    obj.b = 1;
    obj.b = 2;
    obj.b = 3;
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(2);
      done();
    }, 400);
  });
  it('allows to debounce handler on init via debounceCalcOnInit=true', function (done) {
    var obj = {
      a: 1,
      b: 2
    };
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
      expect(obj.c).toEqual(3);
      done();
    });
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:c', handler);
    Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
      return a + b;
    }, {
      debounceCalcOnInit: true
    });
    expect(obj.c).toEqual(undefined);
    expect(handler).not.toHaveBeenCalled();
  });
  it('allows to use promises via promiseCalc',
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(done) {
      var obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              obj = {
                a: 1,
                b: 2
              };
              Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
                return new Promise(function (resolve) {
                  return setTimeout(function () {
                    return resolve(a + b);
                  }, 10);
                });
              }, {
                promiseCalc: true
              });
              expect(obj.c).toEqual(undefined);
              obj.a = 3;
              _context.next = 6;
              return delay(50);

            case 6:
              expect(obj.c).toEqual(5);
              obj.b = 3;
              _context.next = 10;
              return delay(50);

            case 10:
              expect(obj.c).toEqual(6);
              done();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  it('allows to use non-promises when promiseCalc=true',
  /*#__PURE__*/
  function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(done) {
      var obj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              obj = {
                a: 1,
                b: 2
              };
              Object(src_calc__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'c', ['a', 'b'], function (a, b) {
                return a + b;
              }, {
                promiseCalc: true
              });
              expect(obj.c).toEqual(undefined);
              obj.a = 3;
              _context2.next = 6;
              return delay(50);

            case 6:
              expect(obj.c).toEqual(5);
              obj.b = 3;
              _context2.next = 10;
              return delay(50);

            case 10:
              expect(obj.c).toEqual(6);
              done();

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./spec/chain_spec.js":
/*!****************************!*\
  !*** ./spec/chain_spec.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/chain */ "../src/chain.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('chain', function () {
  it('has all needed methods', function () {
    var inst = Object(src_chain__WEBPACK_IMPORTED_MODULE_1__["default"])({});
    "on,\n        off,\n        trigger,\n        calc,\n        bindNode,\n        unbindNode,\n        set,\n        bound,\n        remove,\n        mediate".split(/\s*,\s*/).forEach(function (name) {
      expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(inst[name])).toEqual('function');
    });
  });
  it('can call calc and set as proof of chain work', function () {
    var obj = {
      a: 1
    };
    Object(src_chain__WEBPACK_IMPORTED_MODULE_1__["default"])(obj).calc('b', 'a', function (a) {
      return a * 2;
    }, {
      debounceCalc: false
    }).set('a', 2);
    expect(obj.b).toEqual(4);
  });
});

/***/ }),

/***/ "./spec/common_spec.js":
/*!*****************************!*\
  !*** ./spec/common_spec.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/index */ "../src/index.js");
/* harmony import */ var src_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_index__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('common tests', function () {
  it('includes all documented members', function () {
    ['bindNode', 'bound', 'calc', 'chain', 'lookForBinder', 'set', 'mediate', 'off', 'on', 'remove', 'trigger', 'unbindNode'].forEach(function (methodName) {
      expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src_index__WEBPACK_IMPORTED_MODULE_1___default.a[methodName])).toEqual('function');
    });
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src_index__WEBPACK_IMPORTED_MODULE_1___default.a.defaultBinders[0])).toEqual('function');
  });
});

/***/ }),

/***/ "./spec/events/delegated_spec.js":
/*!***************************************!*\
  !*** ./spec/events/delegated_spec.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_delegatelistener */ "../src/on/_delegatelistener/index.js");
/* harmony import */ var src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */





describe('Delegated events (delegateListener, undelegateListener)', function () {
  var handler;
  beforeEach(function () {
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  it('fires (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a.b = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b.c, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b.c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b.c, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('fires when reassigned (a.b.c, reassign c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b.c = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    var a = obj.a;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(a.b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    var b = obj.a.b;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    obj.a.b = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b.c, reassign a)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    var a = obj.a;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('b.c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b.c, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    var b = obj.a.b;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('c');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('remove event from previous object when reassigned (a.b.c, reassign c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    var c = obj.a.c;
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    obj.a.b.c = {};
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegate (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegate (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('does not remove change event when undelegated (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', function () {});
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'change:c', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent');
    obj.a.b.c = 55;
    expect(handler).toHaveBeenCalled();
  });
  it('undelegates by callback (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegates by callback (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('undelegates by callback but keeps when callbacks are not same (a.b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'someevent', function () {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('undelegates by callback but keeps when callbacks are not same (a.b.c)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_3__["default"])('a.b.c');
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', 'someevent', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', function () {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
});

/***/ }),

/***/ "./spec/events/events_change_spec.js":
/*!*******************************************!*\
  !*** ./spec/events/events_change_spec.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/on/_delegatelistener */ "../src/on/_delegatelistener/index.js");
/* harmony import */ var src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/off/_undelegatelistener */ "../src/off/_undelegatelistener.js");
/* harmony import */ var src_off_removelistener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */






describe('Change event (simple and delegated)', function () {
  var handler;
  beforeEach(function () {
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });
  it('fires simple', function () {
    var obj = {
      x: 1
    };
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'change:x', handler);
    obj.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('fires delegated (a.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a', 'change:x', handler);
    obj.a.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('fires delegated (a.b.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'change:x', handler);
    obj.a.b.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('removes simple', function () {
    var obj = {
      x: 1
    };
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'change:x', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'change:x', handler);
    obj.x = 2;
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated (a.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a', 'change:x', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a', 'change:x', handler);
    obj.a.x = 2;
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated (a.b.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'change:x', handler);
    Object(src_off_undelegatelistener__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a.b', 'change:x', handler);
    obj.a.b.x = 2;
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires delegated (a.b.x)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b', 'change:x', handler);
    obj.a.b.x = 2;
    expect(handler).toHaveBeenCalled();
  });
  it('accepts null target (a.b.c, reassign b)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_4__["default"])('a.b.c.x', 1);
    Object(src_on_delegatelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', 'someevent', handler);
    expect(function () {
      obj.a.b = null;
    }).not.toThrow();
  });
});

/***/ }),

/***/ "./spec/events/events_core_spec.js":
/*!*****************************************!*\
  !*** ./spec/events/events_core_spec.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");
/* harmony import */ var src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_removelistener */ "../src/off/_removelistener.js");
/* harmony import */ var src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/trigger/_triggerone */ "../src/trigger/_triggerone.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */




describe('Events core (addListener, removeListener, triggerOne)', function () {
  var obj;
  var handler;
  beforeEach(function () {
    obj = {};
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
  it('fires', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
  it('uses correct context', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', function handle() {
      expect(obj === this).toEqual(true);
    });
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
  });
  it('avoids conflicts', function () {
    var i = 0; // eslint-disable-next-line no-return-assign

    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', function () {
      return i += 1e0;
    }); // eslint-disable-next-line no-return-assign

    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', function () {
      return i += 1e1;
    }); // eslint-disable-next-line no-return-assign

    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', function () {
      return i += 1e2;
    });
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(i).toEqual(111);
  });
  it('removes all', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes by name', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent');
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes by callback', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent', handler);
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes by callback but keeps when callbacks are not same', function () {
    Object(src_on_addlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off_removelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent', function () {});
    Object(src_trigger_triggerone__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalled();
  });
});

/***/ }),

/***/ "./spec/events/events_dom_spec.js":
/*!****************************************!*\
  !*** ./spec/events/events_dom_spec.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_adddomlistener */ "../src/on/_adddomlistener.js");
/* harmony import */ var src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_removedomlistener */ "../src/off/_removedomlistener.js");
/* harmony import */ var src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/trigger/_triggerdomevent */ "../src/trigger/_triggerdomevent.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* harmony import */ var _helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");
/* eslint-disable import/no-extraneous-dependencies, no-shadow, import/extensions */






describe('Events core (addDomListener, removeDomListener, triggerDOMListener)', function () {
  var node;
  var obj;
  var handler;
  var childNode;
  var grandchildNode;
  beforeEach(function () {
    obj = {};
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
    node = window.document.body.appendChild(window.document.createElement('div'));
    node.innerHTML = "\n            <div id=\"child\">\n                <div class=\"grandchild\">\n\n                </div>\n            </div>\n        ";
    childNode = node.querySelector('#child');
    grandchildNode = node.querySelector('.grandchild');
  });
  afterEach(function () {
    window.document.body.removeChild(node);
  });
  it('fires with no selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(childNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes with no selector', function () {
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(childNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires using selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('adds using selector and removes with no selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('adds using selector then binds and removes with selector', function () {
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers DOM event', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (d1, d2) {
      return expect(d1 + d2).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', 'click', null, [1, 2]);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('triggers DOM event with specified selector', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (d1, d2) {
      return expect(d1 + d2).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', 'click', '.grandchild', [1, 2]);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('triggers DOM event with specified selector (bubbling test)', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (d1, d2) {
      return expect(d1 + d2).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', null, handler);
    Object(src_trigger_triggerdomevent__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'x', 'click', '.grandchild', [1, 2]);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes delegated', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click', '.grandchild');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated and does not remove events from other nodes', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on_adddomlistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 'click', '.grandchild', handler);
    Object(src_off_removedomlistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'x', 'click', '.blah');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_5__["default"])(grandchildNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

/***/ }),

/***/ "./spec/events/events_summary_spec.js":
/*!********************************************!*\
  !*** ./spec/events/events_summary_spec.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on */ "../src/on/index.js");
/* harmony import */ var src_off__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off */ "../src/off/index.js");
/* harmony import */ var src_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/trigger */ "../src/trigger/index.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_simulateclick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");
/* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */







describe('Events summary (on, off, trigger)', function () {
  var obj;
  var handler;
  var node;
  var childNode;
  var grandchildNode;
  beforeEach(function () {
    obj = {};
    handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
    node = window.document.body.appendChild(window.document.createElement('div'));
    node.innerHTML = "\n            <div id=\"child\">\n                <div class=\"grandchild\">\n\n                </div>\n            </div>\n        ";
    childNode = node.querySelector('#child');
    grandchildNode = node.querySelector('.grandchild');
  });
  afterEach(function () {
    window.document.body.removeChild(node);
  });
  it('fires', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('fires event with a space', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent someevent2', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent someevent2');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('fires symbolic event name', function () {
    var someevent = Symbol('someevent');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, someevent, handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, someevent);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('fires if an array of events is given', function () {
    var someevent2 = Symbol('someevent2');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, ['someevent1', someevent2], handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent1');
    expect(handler).toHaveBeenCalledTimes(1);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, someevent2);
    expect(handler).toHaveBeenCalledTimes(2);
  });
  it('fires if an array of events is given and trigger got an array of events', function () {
    var someevent2 = Symbol('someevent2');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, ['someevent1', someevent2], handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, ['someevent1', someevent2]);
    expect(handler).toHaveBeenCalledTimes(2);
  });
  it('allows to pass few arguments to trigger', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (a, b) {
      expect(a).toEqual('foo');
      expect(b).toEqual('bar');
    });
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent', 'foo', 'bar');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes multiple events at once', function () {
    var someevent2 = Symbol('someevent2');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, ['someevent1', someevent2], handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, ['someevent1', someevent2]);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, ['someevent1', someevent2]);
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires delegated (simple)', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_5__["default"])('a');
    var handler1 = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var handler2 = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a@someevent1', handler1);
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a@someevent2', handler2);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a, 'someevent1');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a, 'someevent2');
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });
  it('fires delegated (simple, reassigned)', function () {
    var obj = {};
    var handler1 = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var handler2 = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a@someevent1', handler1);
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a@someevent2', handler2);
    obj.a = {};
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a, 'someevent1');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a, 'someevent2');
    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).toHaveBeenCalledTimes(1);
  });
  it('fires delegated', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_5__["default"])('a.b.c');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c@someevent', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes delegated', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_5__["default"])('a.b.c');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c@someevent', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c@someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.a.b.c, 'someevent');
    expect(handler).not.toHaveBeenCalled();
  });
  it('fires DOM event with no selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_6__["default"])(childNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes DOM event with no selector', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'click::x');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_6__["default"])(childNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers DOM event using selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x(.grandchild)', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_6__["default"])(grandchildNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('removes DOM event using selector', function () {
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x(.grandchild)', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'click::x(.grandchild)');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_6__["default"])(grandchildNode);
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers DOM event via trigger', function () {
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(function (a, b) {
      return expect(a + b).toEqual(3);
    });
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'click::x', 1, 2);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('fires DOM event using delegated event name', function () {
    var obj = {
      a: {}
    };
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj.a, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a@click::x', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_6__["default"])(childNode);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to pass name-handler object to "on" and "off"', function () {
    var handlers = {
      foo: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      bar: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])()
    };
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, handlers);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
    Object(src_off__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, handlers);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
  });
  it('removes all events when off is called with no args', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'click::x', handler);
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'x', '#child');
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'foo', handler);
    Object(src_off__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_6__["default"])(childNode);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'foo');
    expect(handler).not.toHaveBeenCalled();
  });
  it('triggers once', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler, {
      once: true
    });
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('allows to pass name-handler object to "once"', function () {
    var handlers = {
      foo: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      bar: Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_4__["default"])()
    };
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, handlers, {
      once: true
    });
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'foo');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'bar');
    expect(handlers.foo).toHaveBeenCalledTimes(1);
    expect(handlers.bar).toHaveBeenCalledTimes(1);
  });
  it('triggers on init', function () {
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler, {
      triggerOnInit: true
    });
    expect(handler).toHaveBeenCalledTimes(1);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    expect(handler).toHaveBeenCalledTimes(2);
  });
  it('adds debounced handler via debounce: true', function (done) {
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(1);
      done();
    }, 200);
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler, {
      debounce: true
    });
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
  });
  it('adds debounced handler via debounce: 0', function (done) {
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(1);
      done();
    }, 200);
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler, {
      debounce: 0
    });
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
  });
  it('adds debounced handler via debounce: number', function (done) {
    setTimeout(function () {
      expect(handler).toHaveBeenCalledTimes(0);
    }, 100);
    setTimeout(function () {
      done();
      expect(handler).toHaveBeenCalledTimes(1);
    }, 300);
    Object(src_on__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'someevent', handler, {
      debounce: 200
    });
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'someevent');
  });
});

/***/ }),

/***/ "./spec/events/tree_change_spec.js":
/*!*****************************************!*\
  !*** ./spec/events/tree_change_spec.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/on/_addtreelistener */ "../src/on/_addtreelistener.js");
/* harmony import */ var src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/off/_removetreelistener */ "../src/off/_removetreelistener.js");
/* harmony import */ var _helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */




describe('Tree change events (internal feature)', function () {
  it('should listen tree and should remove listeners from previous subtree', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c.d.e');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c.d.e', handler);
    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(1); // once again

    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(2);
    var d = obj.a.b.c.d;
    obj.a.b.c.d = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('e');
    d.e = {};
    expect(handler).toHaveBeenCalledTimes(3);
    var c = obj.a.b.c;
    obj.a.b.c = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('d.e');
    c.d = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('e');
    expect(handler).toHaveBeenCalledTimes(4);
    var b = obj.a.b;
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c.d.e');
    b.c = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('d.e');
    expect(handler).toHaveBeenCalledTimes(5);
    var a = obj.a;
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c.d.e');
    a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c.d.e');
    expect(handler).toHaveBeenCalledTimes(6);
    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(7);
    obj.a.b.c.d = {};
    expect(handler).toHaveBeenCalledTimes(8);
    obj.a.b.c = {};
    expect(handler).toHaveBeenCalledTimes(9);
    obj.a.b = {};
    expect(handler).toHaveBeenCalledTimes(10);
    obj.a = {};
    expect(handler).toHaveBeenCalledTimes(11);
    obj.a.b = {};
    expect(handler).toHaveBeenCalledTimes(12);
    obj.a.b.c = {};
    expect(handler).toHaveBeenCalledTimes(13);
    obj.a.b.c.d = {};
    expect(handler).toHaveBeenCalledTimes(14);
    obj.a.b.c.d.e = {};
    expect(handler).toHaveBeenCalledTimes(15);
    obj.a = {};
    expect(handler).toHaveBeenCalledTimes(16);
  });
  it('should remove tree listener by callback', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', handler);
    Object(src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', handler);
    obj.a.b.c = {};
    expect(handler).not.toHaveBeenCalled();
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c');
    expect(handler).not.toHaveBeenCalled();
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c');
    expect(handler).not.toHaveBeenCalled();
  });
  it('should remove tree listener without callback', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', handler);
    Object(src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c');
    obj.a.b.c = {};
    expect(handler).not.toHaveBeenCalled();
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c');
    expect(handler).not.toHaveBeenCalled();
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c');
    expect(handler).not.toHaveBeenCalled();
  });
  it('should not remove tree listener by wrong callback', function () {
    var obj = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('a.b.c');
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(src_on_addtreelistener__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a.b.c', handler);
    Object(src_off_removetreelistener__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a.b.c', function () {});
    obj.a.b.c = {};
    expect(handler).toHaveBeenCalledTimes(1);
    obj.a.b = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('c');
    expect(handler).toHaveBeenCalledTimes(2);
    obj.a = Object(_helpers_makeobject__WEBPACK_IMPORTED_MODULE_2__["default"])('b.c');
    expect(handler).toHaveBeenCalledTimes(3);
  });
});

/***/ }),

/***/ "./spec/mediate_spec.js":
/*!******************************!*\
  !*** ./spec/mediate_spec.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_mediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/mediate */ "../src/mediate.js");


/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mediate', function () {
  it('throws an error if an object is null', function () {
    expect(function () {
      Object(src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"])(null, 'a', String);
    }).toThrow();
  });
  it('mediates', function () {
    var obj = {};
    Object(src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'a', function (v) {
      return Number(v);
    });
    Object(src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, ['b', 'c'], function (v) {
      return Number(v);
    });
    obj.a = obj.b = obj.c = '123';
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.a)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.b)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.c)).toEqual('number');
  });
  it('mediates using key-mediator object', function () {
    var obj = {};
    Object(src_mediate__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, {
      a: function a(v) {
        return Number(v);
      },
      b: function b(v) {
        return Number(v);
      }
    });
    obj.a = obj.b = '123';
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.a)).toEqual('number');
    expect(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj.b)).toEqual('number');
  });
});

/***/ }),

/***/ "./spec/mq/add_spec.js":
/*!*****************************!*\
  !*** ./spec/mq/add_spec.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mq.fn.add', function () {
  it('adds once', function () {
    var el1 = window.document.createElement('div');
    var el2 = window.document.createElement('div');
    var el3 = window.document.createElement('div');
    var el4 = window.document.createElement('div');
    var el5 = window.document.createElement('div');
    var result = Array.from(Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])([el1, el2, el3]).add([el2, el3, el4, el5]));
    expect(result).toEqual([el1, el2, el3, el4, el5]);
  });
});

/***/ }),

/***/ "./spec/mq/events_spec.js":
/*!********************************!*\
  !*** ./spec/mq/events_spec.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");
/* harmony import */ var _helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */


describe('mq events', function () {
  var testSandbox;
  var child1;
  var child2;
  var grandchild1;
  var handler;
  var that = {};
  beforeEach(function () {
    testSandbox = window.document.createElement('div');
    testSandbox.innerHTML = "\n            <div class=\"child1\">\n                <div class=\"grandchild1\"></div>\n            </div>\n            <div class=\"child2\"></div>\n        ";
    child1 = testSandbox.querySelector('.child1');
    child2 = testSandbox.querySelector('.child2');
    grandchild1 = testSandbox.querySelector('.grandchild1');

    that.handler = function () {};

    spyOn(that, 'handler');
    handler = that.handler;
  });
  afterEach(function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])([testSandbox, child1, child2, grandchild1]).off('click');
  });
  it('adds event listener', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).toHaveBeenCalled();
  });
  it('removes event listener (listener is specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler).off('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes event listener (listener is not specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler).off('click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('adds namespaced listener', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click.yo', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).toHaveBeenCalled();
  });
  it('removes namespaced listener (listener is specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click.yo', handler).off('click.yo', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes namespaced listener (listener is not specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click.yo', handler).off('click.yo');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(testSandbox);
    expect(handler).not.toHaveBeenCalled();
  });
  it('adds bubbling event listener', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(grandchild1);
    expect(handler).toHaveBeenCalled();
  });
  it('adds delegated event listener', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).toHaveBeenCalled();
  });
  it('adds delegated event listener (click on grandchildren)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(grandchild1);
    expect(handler).toHaveBeenCalled();
  });
  it('does not trigger when clicked on wrong child', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child2', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(grandchild1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector and handler are specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click', '.child1', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector is specified, handler is not specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click', '.child1');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector is not specified, handler is specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click', handler);
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('removes delegated event listener (selector and handler are not specified)', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', '.child1', handler).off('click');
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
  it('stops propagation', function () {
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(testSandbox).on('click', handler);
    Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(child1).on('click', function (evt) {
      return evt.stopPropagation();
    });
    Object(_helpers_simulateclick__WEBPACK_IMPORTED_MODULE_1__["default"])(child1);
    expect(handler).not.toHaveBeenCalled();
  });
});

/***/ }),

/***/ "./spec/mq/init_spec.js":
/*!******************************!*\
  !*** ./spec/mq/init_spec.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mq initialization', function () {
  var testSandbox;
  beforeEach(function () {
    testSandbox = window.document.createElement('div');
    testSandbox.innerHTML = "\n            <div class=\"test\">\n                <div class=\"test-1\"></div>\n                <div class=\"test-2\"></div>\n                <div class=\"test-3\"></div>\n            </div>\n        ";
  });
  it('accepts window', function () {
    var result = Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(window);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(window);
  });
  it('accepts document', function () {
    var result = Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(window.document);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(window.document);
  });
  it('parses HTML', function () {
    var result = Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])('<div></div><span></span>');
    expect(result.length).toEqual(2);
    expect(result[0].tagName).toEqual('DIV');
    expect(result[1].tagName).toEqual('SPAN');
  });
  it('converts array-like', function () {
    var children = testSandbox.querySelectorAll('*');
    var result = Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(children);
    expect(children.length).toEqual(result.length);

    for (var i = 0; i < children.length; i++) {
      expect(children[i]).toEqual(result[i]);
    }
  });
  it('converts one element', function () {
    var element = window.document.querySelector('*');
    var result = Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    expect(result.length).toEqual(1);
    expect(element).toEqual(result[0]);
  });
  it('uses context', function () {
    expect(Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])('.test-1', testSandbox).length).toEqual(1);
  });
  it('does not use wrong context', function () {
    expect(Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])('.test-1', '.wrong-context').length).toEqual(0);
  });
  it('allows to pass null', function () {
    expect(Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])(null).length).toEqual(0);
  });
  it('allows to pass nothing', function () {
    expect(Object(src_mq__WEBPACK_IMPORTED_MODULE_0__["default"])().length).toEqual(0);
  });
});

/***/ }),

/***/ "./spec/mq/parsehtml_spec.js":
/*!***********************************!*\
  !*** ./spec/mq/parsehtml_spec.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_mq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('mq.parseHTML', function () {
  it('parses HTML', function () {
    var result = src_mq__WEBPACK_IMPORTED_MODULE_0__["default"].parseHTML('<div></div><span></span>');
    expect(result.length).toEqual(2);
    expect(result[0].tagName).toEqual('DIV');
    expect(result[1].tagName).toEqual('SPAN');
  });
  it('parses contextual elements', function () {
    var result = src_mq__WEBPACK_IMPORTED_MODULE_0__["default"].parseHTML('<td></td><td></td>');
    expect(result.length).toEqual(2);
    expect(result[0].tagName).toEqual('TD');
    expect(result[1].tagName).toEqual('TD');
  });
});

/***/ }),

/***/ "./spec/remove_spec.js":
/*!*****************************!*\
  !*** ./spec/remove_spec.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/remove */ "../src/remove.js");
/* harmony import */ var src_on__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/on */ "../src/on/index.js");
/* harmony import */ var src_bindnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");
/* harmony import */ var src_bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/bound */ "../src/bound.js");
/* harmony import */ var src_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/trigger */ "../src/trigger/index.js");
/* harmony import */ var _helpers_createspy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/createspy */ "./helpers/createspy.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */






describe('remove', function () {
  it('throws an error if an object is null', function () {
    expect(function () {
      Object(src_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(null, 'a');
    }).toThrow();
  });
  it('removes a property', function () {
    var obj = {
      a: 1
    };
    Object(src_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a');
    expect('a' in obj).toBe(false);
  });
  it('removes a property and its events', function () {
    var obj = {
      a: 1
    };
    var handler = Object(_helpers_createspy__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(src_on__WEBPACK_IMPORTED_MODULE_1__["default"])(obj, 'change:a', handler);
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'change:a');
    expect(handler).toHaveBeenCalledTimes(1);
    Object(src_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a');
    Object(src_trigger__WEBPACK_IMPORTED_MODULE_4__["default"])(obj, 'change:a');
    expect(handler).toHaveBeenCalledTimes(1);
    expect('a' in obj).toBe(false);
  });
  it('removes a property and its bindings', function () {
    var obj = {
      a: 1
    };
    var node = window.document.createElement('div');
    Object(src_bindnode__WEBPACK_IMPORTED_MODULE_2__["default"])(obj, 'a', node);
    expect(Object(src_bound__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'a')).toEqual(node);
    Object(src_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'a');
    expect(Object(src_bound__WEBPACK_IMPORTED_MODULE_3__["default"])(obj, 'a')).toEqual(null);
    expect('a' in obj).toBe(false);
  });
});

/***/ }),

/***/ "./spec/set_spec.js":
/*!**************************!*\
  !*** ./spec/set_spec.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/set */ "../src/set.js");
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

describe('set', function () {
  it('throws an error if an object is null', function () {
    expect(function () {
      Object(src_set__WEBPACK_IMPORTED_MODULE_0__["default"])(null, 'x', 1);
    }).toThrow();
  });
  it('sets', function () {
    var obj = {};
    Object(src_set__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, 'x', 42);
    expect(obj.x).toEqual(42);
    Object(src_set__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, {
      y: 1,
      z: 2
    });
    expect(obj.y).toEqual(1);
    expect(obj.z).toEqual(2);
  });
  it('does not throw if key is falsy', function () {
    expect(function () {
      Object(src_set__WEBPACK_IMPORTED_MODULE_0__["default"])({}, null, 1);
    }).not.toThrow();
  });
});

/***/ }),

/***/ 0:
/*!*********************!*\
  !*** multi ./index ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map