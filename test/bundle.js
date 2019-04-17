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

/***/ "../node_modules/babel-polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ../node_modules/babel-polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/shim */ "../node_modules/core-js/shim.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/fn/regexp/escape */ "../node_modules/core-js/fn/regexp/escape.js");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
  runtime.wrap = wrap;

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

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
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
  runtime.awrap = function(arg) {
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
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
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
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
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
        if (delegate.iterator.return) {
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

  runtime.keys = function(object) {
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
  runtime.values = values;

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
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/core-js/fn/regexp/escape.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/fn/regexp/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/core.regexp.escape */ "../node_modules/core-js/modules/core.regexp.escape.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/modules/_core.js").RegExp.escape;


/***/ }),

/***/ "../node_modules/core-js/modules/_a-function.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_a-number-value.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_a-number-value.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/_add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_advance-string-index.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/_advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "../node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_an-instance.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_an-object.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-copy-within.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_array-copy-within.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-fill.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-from-iterable.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_array-from-iterable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-includes.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-methods.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_array-methods.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "../node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-reduce.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/_array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/modules/_array-species-constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_array-species-create.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/_array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "../node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_bind.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_classof.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_cof.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_cof.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_collection-strong.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "../node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "../node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_collection-to-json.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/_collection-to-json.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "../node_modules/core-js/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_collection-weak.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_collection-weak.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "../node_modules/core-js/modules/_collection.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_core.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_core.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/modules/_create-property.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_ctx.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_ctx.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_date-to-iso-string.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/_date-to-iso-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "../node_modules/core-js/modules/_date-to-primitive.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_date-to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_defined.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_defined.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_descriptors.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/modules/_dom-create.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_dom-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/modules/_enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../node_modules/core-js/modules/_enum-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_enum-keys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_export.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/core-js/modules/_fails-is-regexp.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_fails.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/modules/_fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_fix-re-wks.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_fix-re-wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "../node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_flags.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/modules/_flags.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_flatten-into-array.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/_flatten-into-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "../node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "../node_modules/core-js/modules/_for-of.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_for-of.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../node_modules/core-js/modules/_global.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/modules/_has.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_hide.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_html.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../node_modules/core-js/modules/_ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/modules/_inherit-if-required.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "../node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_invoke.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_invoke.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iobject.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_iobject.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_is-array-iter.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_is-array-iter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_is-array.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/_is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/modules/_is-integer.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_is-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_is-object.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/modules/_is-regexp.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iter-call.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_iter-call.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iter-create.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_iter-create.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iter-define.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_iter-define.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iter-detect.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_iter-detect.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iter-step.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_iter-step.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iterators.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/modules/_library.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_library.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/modules/_math-expm1.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_math-expm1.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "../node_modules/core-js/modules/_math-fround.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_math-fround.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "../node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_math-log1p.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_math-log1p.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_math-scale.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_math-scale.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_math-sign.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_math-sign.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_meta.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_meta.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../node_modules/core-js/modules/_metadata.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/_metadata.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "../node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "../node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "../node_modules/core-js/modules/_microtask.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_new-promise-capability.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/modules/_new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-assign.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "../node_modules/core-js/modules/_object-create.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-dp.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_object-dp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-dps.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-dps.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-forced-pam.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_object-forced-pam.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js") || !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js")[K];
});


/***/ }),

/***/ "../node_modules/core-js/modules/_object-gopd.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-gopd.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-gopn-ext.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_object-gopn-ext.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-gopn.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-gopn.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-gops.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-gops.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/modules/_object-gpo.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-gpo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-keys-internal.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/_object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-keys.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-pie.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-pie.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/modules/_object-sap.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_object-sap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-to-array.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_object-to-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_own-keys.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/_own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_parse-float.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_parse-float.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "../node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "../node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "../node_modules/core-js/modules/_parse-int.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "../node_modules/core-js/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "../node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../node_modules/core-js/modules/_perform.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_promise-resolve.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_property-desc.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_property-desc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_redefine-all.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/_redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_redefine.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/_redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_regexp-exec.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "../node_modules/core-js/modules/_replacer.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/_replacer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_same-value.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_set-collection-from.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_set-collection-from.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_set-collection-of.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_set-collection-of.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_set-proto.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_set-proto.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "../node_modules/core-js/modules/_set-species.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_shared-key.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_shared.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js/modules/_species-constructor.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_strict-method.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_strict-method.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-at.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-context.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_string-context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-html.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_string-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-pad.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_string-pad.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "../node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-repeat.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_string-trim.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "../node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "../node_modules/core-js/modules/_string-ws.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_string-ws.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../node_modules/core-js/modules/_task.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-absolute-index.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-index.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/_to-index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-integer.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-iobject.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_to-iobject.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-length.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-object.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-primitive.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/_to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/modules/_typed-array.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_typed-array.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "../node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "../node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "../node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
  var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/modules/_object-gopn.js").f;
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "../node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "../node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "../node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "../node_modules/core-js/modules/_typed-buffer.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/_typed-buffer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "../node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "../node_modules/core-js/modules/_to-index.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/modules/_object-gopn.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var arrayFill = __webpack_require__(/*! ./_array-fill */ "../node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "../node_modules/core-js/modules/_typed.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/modules/_typed.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "../node_modules/core-js/modules/_uid.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_user-agent.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../node_modules/core-js/modules/_validate-collection.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_validate-collection.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_wks-define.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_wks-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_wks-ext.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_wks-ext.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "../node_modules/core-js/modules/_wks.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_wks.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../node_modules/core-js/modules/core.get-iterator-method.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/core.get-iterator-method.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js/modules/core.regexp.escape.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/core.regexp.escape.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $re = __webpack_require__(/*! ./_replacer */ "../node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.copy-within.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.copy-within.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "../node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.every.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.every.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.fill.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.fill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "../node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.filter.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.filter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.find-index.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.find-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.find.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.find.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.for-each.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.for-each.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.from.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.from.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.index-of.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.index-of.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.is-array.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.is-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "../node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.iterator.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.join.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.join.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "../node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.last-index-of.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.map.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.map.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.of.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.of.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.reduce-right.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "../node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.reduce.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.reduce.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "../node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.slice.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.slice.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "../node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.some.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.some.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.sort.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.sort.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "../node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.array.species.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.array.species.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "../node_modules/core-js/modules/es6.date.now.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es6.date.now.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "../node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.date.to-json.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.date.to-json.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.date.to-primitive.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "../node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "../node_modules/core-js/modules/es6.date.to-string.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.date.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.function.bind.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.function.bind.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "../node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.function.has-instance.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.function.has-instance.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.function.name.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.function.name.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.map.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/es6.map.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "../node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "../node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.acosh.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.acosh.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "../node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.asinh.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.asinh.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.atanh.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.atanh.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.cbrt.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.cbrt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "../node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.clz32.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.clz32.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.cosh.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.cosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.expm1.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.expm1.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "../node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.fround.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.fround.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "../node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.hypot.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.hypot.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.imul.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.imul.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.log10.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.log10.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.log1p.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.log1p.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "../node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.log2.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.log2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.sign.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.sign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "../node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.sinh.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.sinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "../node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.tanh.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.tanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "../node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.math.trunc.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.math.trunc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.constructor.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.constructor.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "../node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "../node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.epsilon.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.epsilon.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.is-finite.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.is-finite.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var _isFinite = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.is-integer.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.is-integer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "../node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.is-nan.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.is-nan.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "../node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.parse-float.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.parse-float.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "../node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.parse-int.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "../node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.to-fixed.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "../node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "../node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.number.to-precision.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.number.to-precision.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "../node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.assign.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.assign.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.create.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.create.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.define-properties.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.define-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "../node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.define-property.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.freeze.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.freeze.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "../node_modules/core-js/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.is-extensible.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.is-frozen.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.is-sealed.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.is.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.is.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "../node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.keys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.seal.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.seal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "../node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.to-string.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.to-string.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.parse-float.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.parse-float.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "../node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.parse-int.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.parse-int.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "../node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.promise.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/es6.promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.apply.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.apply.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.construct.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.construct.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "../node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.define-property.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "../node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.get.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.get.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.has.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.has.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "../node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!*************************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "../node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.reflect.set.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.reflect.set.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.constructor.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "../node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.exec.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.exec.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.flags.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.flags.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.match.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.match.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.replace.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.replace.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.search.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.search.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "../node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.split.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.split.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "../node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "../node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "../node_modules/core-js/modules/_regexp-exec.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';

// eslint-disable-next-line no-empty
var SUPPORTS_Y = !!(function () { try { return new RegExp('x', 'y'); } catch (e) {} })();

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? 0xffffffff : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.to-string.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "../node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.set.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/es6.set.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "../node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "../node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.anchor.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.anchor.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.big.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.big.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.blink.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.blink.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.bold.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.bold.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.code-point-at.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "../node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.ends-with.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.ends-with.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.fixed.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.fixed.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.fontcolor.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.fontsize.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.fontsize.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.from-code-point.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.includes.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.includes.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.italics.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.italics.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.iterator.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.iterator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.link.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.link.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.raw.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.raw.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.repeat.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.repeat.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "../node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.small.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.small.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.starts-with.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.starts-with.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "../node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "../node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.strike.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.strike.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.sub.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.sub.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.sup.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.sup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "../node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.string.trim.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es6.string.trim.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "../node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.symbol.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/es6.symbol.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "../node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "../node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "../node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").ArrayBuffer;
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.data-view.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.data-view.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "../node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "../node_modules/core-js/modules/_typed-buffer.js").DataView
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.float32-array.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.float64-array.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.int16-array.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.int32-array.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.int8-array.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "../node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "../node_modules/core-js/modules/es6.weak-map.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es6.weak-map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "../node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "../node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "../node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "../node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.weak-set.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es6.weak-set.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "../node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "../node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "../node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "../node_modules/core-js/modules/es7.array.flat-map.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.array.flat-map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "../node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "../node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.array.flatten.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.array.flatten.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "../node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "../node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")('flatten');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.array.includes.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.array.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "../node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.asap.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/es7.asap.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var microtask = __webpack_require__(/*! ./_microtask */ "../node_modules/core-js/modules/_microtask.js")();
var process = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").process;
var isNode = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js")(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.error.is-error.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.error.is-error.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.global.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/es7.global.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.map.from.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es7.map.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "../node_modules/core-js/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.map.of.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/es7.map.of.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "../node_modules/core-js/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.map.to-json.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.map.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "../node_modules/core-js/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.clamp.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.clamp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.degrees.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.degrees.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.fscale.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.fscale.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var scale = __webpack_require__(/*! ./_math-scale */ "../node_modules/core-js/modules/_math-scale.js");
var fround = __webpack_require__(/*! ./_math-fround */ "../node_modules/core-js/modules/_math-fround.js");

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.iaddh.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.iaddh.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.imulh.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.imulh.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.isubh.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.isubh.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.radians.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.radians.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.scale.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.scale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ "../node_modules/core-js/modules/_math-scale.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.signbit.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.signbit.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.math.umulh.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.math.umulh.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.object.define-getter.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.object.define-getter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.object.define-setter.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.object.define-setter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var $defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.object.entries.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.object.entries.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "../node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "../node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "../node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/modules/_object-gopd.js").f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ "../node_modules/core-js/modules/_object-forced-pam.js"), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.object.values.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.object.values.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "../node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.observable.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var microtask = __webpack_require__(/*! ./_microtask */ "../node_modules/core-js/modules/_microtask.js")();
var OBSERVABLE = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('observable');
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js")('Observable');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.promise.finally.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.promise.finally.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.promise.try.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.promise.try.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "../node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "../node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.reflect.metadata.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "../node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.set.from.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es7.set.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "../node_modules/core-js/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.set.of.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/es7.set.of.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "../node_modules/core-js/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.set.to-json.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.set.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "../node_modules/core-js/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.string.at.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.string.at.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "../node_modules/core-js/modules/_string-at.js")(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.string.match-all.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.string.match-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "../node_modules/core-js/modules/_is-regexp.js");
var getFlags = __webpack_require__(/*! ./_flags */ "../node_modules/core-js/modules/_flags.js");
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(/*! ./_iter-create */ "../node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.string.pad-end.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.string.pad-end.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "../node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.string.pad-start.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.string.pad-start.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "../node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es7.string.trim-left.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.string.trim-left.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "../node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.string.trim-right.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.string.trim-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "../node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.symbol.observable.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.symbol.observable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../node_modules/core-js/modules/_wks-define.js")('observable');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.system.global.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.system.global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");

$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js") });


/***/ }),

/***/ "../node_modules/core-js/modules/es7.weak-map.from.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.weak-map.from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "../node_modules/core-js/modules/_set-collection-from.js")('WeakMap');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.weak-map.of.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.weak-map.of.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "../node_modules/core-js/modules/_set-collection-of.js")('WeakMap');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.weak-set.from.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es7.weak-set.from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(/*! ./_set-collection-from */ "../node_modules/core-js/modules/_set-collection-from.js")('WeakSet');


/***/ }),

/***/ "../node_modules/core-js/modules/es7.weak-set.of.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es7.weak-set.of.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(/*! ./_set-collection-of */ "../node_modules/core-js/modules/_set-collection-of.js")('WeakSet');


/***/ }),

/***/ "../node_modules/core-js/modules/web.dom.iterable.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/web.dom.iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "../node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "../node_modules/core-js/modules/web.immediate.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/web.immediate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "../node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "../node_modules/core-js/modules/web.timers.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/web.timers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "../node_modules/core-js/shim.js":
/*!***************************************!*\
  !*** ../node_modules/core-js/shim.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/es6.symbol */ "../node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ./modules/es6.object.create */ "../node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ./modules/es6.object.define-property */ "../node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ./modules/es6.object.define-properties */ "../node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ "../node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.keys */ "../node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ "../node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ./modules/es6.object.freeze */ "../node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ./modules/es6.object.seal */ "../node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ "../node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.object.is-frozen */ "../node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ./modules/es6.object.is-sealed */ "../node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ./modules/es6.object.is-extensible */ "../node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ./modules/es6.object.assign */ "../node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ./modules/es6.object.is */ "../node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ "../node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ./modules/es6.object.to-string */ "../node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ./modules/es6.function.bind */ "../node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ./modules/es6.function.name */ "../node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ./modules/es6.function.has-instance */ "../node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ./modules/es6.parse-int */ "../node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ./modules/es6.parse-float */ "../node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.constructor */ "../node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ./modules/es6.number.to-fixed */ "../node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ./modules/es6.number.to-precision */ "../node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ./modules/es6.number.epsilon */ "../node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ./modules/es6.number.is-finite */ "../node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ./modules/es6.number.is-integer */ "../node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ./modules/es6.number.is-nan */ "../node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ "../node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ "../node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ "../node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ./modules/es6.number.parse-float */ "../node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ./modules/es6.number.parse-int */ "../node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ./modules/es6.math.acosh */ "../node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ./modules/es6.math.asinh */ "../node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ./modules/es6.math.atanh */ "../node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ./modules/es6.math.cbrt */ "../node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ./modules/es6.math.clz32 */ "../node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ./modules/es6.math.cosh */ "../node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ./modules/es6.math.expm1 */ "../node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ./modules/es6.math.fround */ "../node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ./modules/es6.math.hypot */ "../node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ./modules/es6.math.imul */ "../node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ./modules/es6.math.log10 */ "../node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ./modules/es6.math.log1p */ "../node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ./modules/es6.math.log2 */ "../node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ./modules/es6.math.sign */ "../node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ./modules/es6.math.sinh */ "../node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ./modules/es6.math.tanh */ "../node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ./modules/es6.math.trunc */ "../node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ./modules/es6.string.from-code-point */ "../node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ./modules/es6.string.raw */ "../node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ./modules/es6.string.trim */ "../node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ./modules/es6.string.iterator */ "../node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ./modules/es6.string.code-point-at */ "../node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ./modules/es6.string.ends-with */ "../node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ./modules/es6.string.includes */ "../node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ./modules/es6.string.repeat */ "../node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ./modules/es6.string.starts-with */ "../node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ./modules/es6.string.anchor */ "../node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ./modules/es6.string.big */ "../node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ./modules/es6.string.blink */ "../node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ./modules/es6.string.bold */ "../node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ./modules/es6.string.fixed */ "../node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ./modules/es6.string.fontcolor */ "../node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ./modules/es6.string.fontsize */ "../node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ./modules/es6.string.italics */ "../node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ./modules/es6.string.link */ "../node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ./modules/es6.string.small */ "../node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ./modules/es6.string.strike */ "../node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ./modules/es6.string.sub */ "../node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ./modules/es6.string.sup */ "../node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ./modules/es6.date.now */ "../node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ./modules/es6.date.to-json */ "../node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ./modules/es6.date.to-iso-string */ "../node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ./modules/es6.date.to-string */ "../node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ./modules/es6.date.to-primitive */ "../node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ./modules/es6.array.is-array */ "../node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ./modules/es6.array.from */ "../node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ./modules/es6.array.of */ "../node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ./modules/es6.array.join */ "../node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ./modules/es6.array.slice */ "../node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ./modules/es6.array.sort */ "../node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ./modules/es6.array.for-each */ "../node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ./modules/es6.array.map */ "../node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ./modules/es6.array.filter */ "../node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ./modules/es6.array.some */ "../node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ./modules/es6.array.every */ "../node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ./modules/es6.array.reduce */ "../node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ./modules/es6.array.reduce-right */ "../node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ./modules/es6.array.index-of */ "../node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ./modules/es6.array.last-index-of */ "../node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ./modules/es6.array.copy-within */ "../node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ./modules/es6.array.fill */ "../node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ./modules/es6.array.find */ "../node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ./modules/es6.array.find-index */ "../node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ./modules/es6.array.species */ "../node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ./modules/es6.array.iterator */ "../node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ./modules/es6.regexp.constructor */ "../node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ./modules/es6.regexp.exec */ "../node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ./modules/es6.regexp.to-string */ "../node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ./modules/es6.regexp.flags */ "../node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ./modules/es6.regexp.match */ "../node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ./modules/es6.regexp.replace */ "../node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ./modules/es6.regexp.search */ "../node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ./modules/es6.regexp.split */ "../node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ./modules/es6.promise */ "../node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ./modules/es6.map */ "../node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ./modules/es6.set */ "../node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ./modules/es6.weak-map */ "../node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ./modules/es6.weak-set */ "../node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ./modules/es6.typed.array-buffer */ "../node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ./modules/es6.typed.data-view */ "../node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ./modules/es6.typed.int8-array */ "../node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-array */ "../node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ "../node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ./modules/es6.typed.int16-array */ "../node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint16-array */ "../node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ./modules/es6.typed.int32-array */ "../node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ./modules/es6.typed.uint32-array */ "../node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float32-array */ "../node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ./modules/es6.typed.float64-array */ "../node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ./modules/es6.reflect.apply */ "../node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ./modules/es6.reflect.construct */ "../node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ./modules/es6.reflect.define-property */ "../node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ./modules/es6.reflect.delete-property */ "../node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ./modules/es6.reflect.enumerate */ "../node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ./modules/es6.reflect.get */ "../node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ "../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ "../node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ./modules/es6.reflect.has */ "../node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ "../node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ./modules/es6.reflect.own-keys */ "../node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ "../node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ./modules/es6.reflect.set */ "../node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ "../node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
__webpack_require__(/*! ./modules/es7.array.includes */ "../node_modules/core-js/modules/es7.array.includes.js");
__webpack_require__(/*! ./modules/es7.array.flat-map */ "../node_modules/core-js/modules/es7.array.flat-map.js");
__webpack_require__(/*! ./modules/es7.array.flatten */ "../node_modules/core-js/modules/es7.array.flatten.js");
__webpack_require__(/*! ./modules/es7.string.at */ "../node_modules/core-js/modules/es7.string.at.js");
__webpack_require__(/*! ./modules/es7.string.pad-start */ "../node_modules/core-js/modules/es7.string.pad-start.js");
__webpack_require__(/*! ./modules/es7.string.pad-end */ "../node_modules/core-js/modules/es7.string.pad-end.js");
__webpack_require__(/*! ./modules/es7.string.trim-left */ "../node_modules/core-js/modules/es7.string.trim-left.js");
__webpack_require__(/*! ./modules/es7.string.trim-right */ "../node_modules/core-js/modules/es7.string.trim-right.js");
__webpack_require__(/*! ./modules/es7.string.match-all */ "../node_modules/core-js/modules/es7.string.match-all.js");
__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ "../node_modules/core-js/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ./modules/es7.symbol.observable */ "../node_modules/core-js/modules/es7.symbol.observable.js");
__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ "../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
__webpack_require__(/*! ./modules/es7.object.values */ "../node_modules/core-js/modules/es7.object.values.js");
__webpack_require__(/*! ./modules/es7.object.entries */ "../node_modules/core-js/modules/es7.object.entries.js");
__webpack_require__(/*! ./modules/es7.object.define-getter */ "../node_modules/core-js/modules/es7.object.define-getter.js");
__webpack_require__(/*! ./modules/es7.object.define-setter */ "../node_modules/core-js/modules/es7.object.define-setter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-getter */ "../node_modules/core-js/modules/es7.object.lookup-getter.js");
__webpack_require__(/*! ./modules/es7.object.lookup-setter */ "../node_modules/core-js/modules/es7.object.lookup-setter.js");
__webpack_require__(/*! ./modules/es7.map.to-json */ "../node_modules/core-js/modules/es7.map.to-json.js");
__webpack_require__(/*! ./modules/es7.set.to-json */ "../node_modules/core-js/modules/es7.set.to-json.js");
__webpack_require__(/*! ./modules/es7.map.of */ "../node_modules/core-js/modules/es7.map.of.js");
__webpack_require__(/*! ./modules/es7.set.of */ "../node_modules/core-js/modules/es7.set.of.js");
__webpack_require__(/*! ./modules/es7.weak-map.of */ "../node_modules/core-js/modules/es7.weak-map.of.js");
__webpack_require__(/*! ./modules/es7.weak-set.of */ "../node_modules/core-js/modules/es7.weak-set.of.js");
__webpack_require__(/*! ./modules/es7.map.from */ "../node_modules/core-js/modules/es7.map.from.js");
__webpack_require__(/*! ./modules/es7.set.from */ "../node_modules/core-js/modules/es7.set.from.js");
__webpack_require__(/*! ./modules/es7.weak-map.from */ "../node_modules/core-js/modules/es7.weak-map.from.js");
__webpack_require__(/*! ./modules/es7.weak-set.from */ "../node_modules/core-js/modules/es7.weak-set.from.js");
__webpack_require__(/*! ./modules/es7.global */ "../node_modules/core-js/modules/es7.global.js");
__webpack_require__(/*! ./modules/es7.system.global */ "../node_modules/core-js/modules/es7.system.global.js");
__webpack_require__(/*! ./modules/es7.error.is-error */ "../node_modules/core-js/modules/es7.error.is-error.js");
__webpack_require__(/*! ./modules/es7.math.clamp */ "../node_modules/core-js/modules/es7.math.clamp.js");
__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ "../node_modules/core-js/modules/es7.math.deg-per-rad.js");
__webpack_require__(/*! ./modules/es7.math.degrees */ "../node_modules/core-js/modules/es7.math.degrees.js");
__webpack_require__(/*! ./modules/es7.math.fscale */ "../node_modules/core-js/modules/es7.math.fscale.js");
__webpack_require__(/*! ./modules/es7.math.iaddh */ "../node_modules/core-js/modules/es7.math.iaddh.js");
__webpack_require__(/*! ./modules/es7.math.isubh */ "../node_modules/core-js/modules/es7.math.isubh.js");
__webpack_require__(/*! ./modules/es7.math.imulh */ "../node_modules/core-js/modules/es7.math.imulh.js");
__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ "../node_modules/core-js/modules/es7.math.rad-per-deg.js");
__webpack_require__(/*! ./modules/es7.math.radians */ "../node_modules/core-js/modules/es7.math.radians.js");
__webpack_require__(/*! ./modules/es7.math.scale */ "../node_modules/core-js/modules/es7.math.scale.js");
__webpack_require__(/*! ./modules/es7.math.umulh */ "../node_modules/core-js/modules/es7.math.umulh.js");
__webpack_require__(/*! ./modules/es7.math.signbit */ "../node_modules/core-js/modules/es7.math.signbit.js");
__webpack_require__(/*! ./modules/es7.promise.finally */ "../node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ./modules/es7.promise.try */ "../node_modules/core-js/modules/es7.promise.try.js");
__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ "../node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ "../node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ "../node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ "../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ "../node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ "../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ "../node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ "../node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ./modules/es7.reflect.metadata */ "../node_modules/core-js/modules/es7.reflect.metadata.js");
__webpack_require__(/*! ./modules/es7.asap */ "../node_modules/core-js/modules/es7.asap.js");
__webpack_require__(/*! ./modules/es7.observable */ "../node_modules/core-js/modules/es7.observable.js");
__webpack_require__(/*! ./modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ./modules/web.immediate */ "../node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ./modules/web.dom.iterable */ "../node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ./modules/_core */ "../node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
	"./_helpers/is.js": "../src/_helpers/is.js",
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
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ./defs */ "../src/_core/defs.js");

var set = __webpack_require__(/*! ../set */ "../src/set.js");

// the function defines needed descriptor for given property
module.exports = defineProp;
function defineProp(object, key) {
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

    return def.props[key];
}

/***/ }),

/***/ "../src/_core/defs.js":
/*!****************************!*\
  !*** ../src/_core/defs.js ***!
  \****************************/
/*! no static exports found */
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

/***/ "../src/_core/init.js":
/*!****************************!*\
  !*** ../src/_core/init.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ./defs */ "../src/_core/defs.js");

var objectId = 0;

// this is a common function which associates an object with its defi definition
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

/***/ "../src/_helpers/assign.js":
/*!*********************************!*\
  !*** ../src/_helpers/assign.js ***!
  \*********************************/
/*! no static exports found */
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

/***/ "../src/_helpers/checkobjecttype.js":
/*!******************************************!*\
  !*** ../src/_helpers/checkobjecttype.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defiError = __webpack_require__(/*! ./defierror */ "../src/_helpers/defierror.js");

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

/***/ "../src/_helpers/debounce.js":
/*!***********************************!*\
  !*** ../src/_helpers/debounce.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "../src/_helpers/deepfind.js":
/*!***********************************!*\
  !*** ../src/_helpers/deepfind.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "../src/_helpers/defierror.js":
/*!************************************!*\
  !*** ../src/_helpers/defierror.js ***!
  \************************************/
/*! no static exports found */
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
    'calc:target_type': function (_ref3) {
        var target = _ref3.target;
        return calcErrorPrefix + ' ' + getTypeError(target, 'target key', 'string');
    },
    'calc:source_key_type': function (_ref4) {
        var sourceKey = _ref4.sourceKey;
        return calcErrorPrefix + ' ' + getTypeError(sourceKey, 'source key', 'string');
    },
    'calc:source_object_type': function (_ref5) {
        var sourceObject = _ref5.sourceObject;
        return calcErrorPrefix + ' ' + getTypeError(sourceObject, 'source object', 'object');
    },
    'calc:source_type': function (_ref6) {
        var source = _ref6.source;
        return calcErrorPrefix + ' ' + getTypeError(source, 'source', 'object');
    },

    'trigger:names_type': function (_ref7) {
        var names = _ref7.names;
        return eventsErrorPrefix + ' ' + getTypeError(names, 'event name', 'string');
    },

    'on:names_type': function (_ref8) {
        var names = _ref8.names;
        return errors['trigger:names_type']({ names: names });
    },

    'remove:key_type': function (_ref9) {
        var key = _ref9.key;
        return 'Error in remove: ' + getTypeError(key, 'key', 'string');
    },

    'mediate:key_type': function (_ref10) {
        var key = _ref10.key;
        return 'Error in mediate: ' + getTypeError(key, 'key', 'string');
    }
};

module.exports = defiError;
function defiError(key, data) {
    var getError = errors[key];
    if (!getError) {
        /* istanbul ignore next */
        throw Error('Unknown error "' + key + '". Please report about this on Github.');
    }

    return new Error(getError(data));
}

/***/ }),

/***/ "../src/_helpers/is.js":
/*!*****************************!*\
  !*** ../src/_helpers/is.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// determines whether two values are the same value
/* istanbul ignore next */
var isPolyfill = function (v1, v2) {
  return v1 === 0 && v2 === 0 ? 1 / v1 === 1 / v2 : v1 !== v1 && v2 !== v2 || v1 === v2;
}; // eslint-disable-line

module.exports = Object.is || isPolyfill;

/***/ }),

/***/ "../src/_lib.js":
/*!**********************!*\
  !*** ../src/_lib.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on = __webpack_require__(/*! ./on */ "../src/on/index.js");

var off = __webpack_require__(/*! ./off */ "../src/off/index.js");

var trigger = __webpack_require__(/*! ./trigger */ "../src/trigger/index.js");

var calc = __webpack_require__(/*! ./calc */ "../src/calc/index.js");

var bindNode = __webpack_require__(/*! ./bindnode */ "../src/bindnode/index.js");

var bound = __webpack_require__(/*! ./bound */ "../src/bound.js");

var unbindNode = __webpack_require__(/*! ./unbindnode */ "../src/unbindnode/index.js");

var set = __webpack_require__(/*! ./set */ "../src/set.js");

var remove = __webpack_require__(/*! ./remove */ "../src/remove.js");

var mediate = __webpack_require__(/*! ./mediate */ "../src/mediate.js");

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

/***/ "../src/_mq/_data.js":
/*!***************************!*\
  !*** ../src/_mq/_data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// an object allows to share data between modules; it's needed because we use
// simplified ES modules there and cannot import and share a number
module.exports = {
    nodeIndex: 0,
    allEvents: {}
};

/***/ }),

/***/ "../src/_mq/_html2nodelist.js":
/*!************************************!*\
  !*** ../src/_mq/_html2nodelist.js ***!
  \************************************/
/*! no static exports found */
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

/***/ "../src/_mq/_init.js":
/*!***************************!*\
  !*** ../src/_mq/_init.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html2nodeList = __webpack_require__(/*! ./_html2nodelist */ "../src/_mq/_html2nodelist.js");

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

/***/ "../src/_mq/add.js":
/*!*************************!*\
  !*** ../src/_mq/add.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Init = __webpack_require__(/*! ./_init */ "../src/_mq/_init.js");

var data = __webpack_require__(/*! ./_data */ "../src/_mq/_data.js");

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

/***/ "../src/_mq/index.js":
/*!***************************!*\
  !*** ../src/_mq/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Init = __webpack_require__(/*! ./_init */ "../src/_mq/_init.js");

var parseHTML = __webpack_require__(/*! ./parsehtml */ "../src/_mq/parsehtml.js");

var on = __webpack_require__(/*! ./on */ "../src/_mq/on.js");

var off = __webpack_require__(/*! ./off */ "../src/_mq/off.js");

var add = __webpack_require__(/*! ./add */ "../src/_mq/add.js");

var assign = __webpack_require__(/*! ../_helpers/assign */ "../src/_helpers/assign.js");

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

/***/ "../src/_mq/off.js":
/*!*************************!*\
  !*** ../src/_mq/off.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./_data */ "../src/_mq/_data.js");

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

/***/ "../src/_mq/on.js":
/*!************************!*\
  !*** ../src/_mq/on.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./_data */ "../src/_mq/_data.js");

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

/***/ "../src/_mq/parsehtml.js":
/*!*******************************!*\
  !*** ../src/_mq/parsehtml.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html2nodeList = __webpack_require__(/*! ./_html2nodelist */ "../src/_mq/_html2nodelist.js");

var Init = __webpack_require__(/*! ./_init */ "../src/_mq/_init.js");

// parses given HTML and returns mq instance
module.exports = parseHTML;
function parseHTML(html) {
    return new Init(html2nodeList(html));
}

/***/ }),

/***/ "../src/binders/index.js":
/*!*******************************!*\
  !*** ../src/binders/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(/*! ./input */ "../src/binders/input.js");

var output = __webpack_require__(/*! ./output */ "../src/binders/output.js");

var textarea = __webpack_require__(/*! ./textarea */ "../src/binders/textarea.js");

var select = __webpack_require__(/*! ./select */ "../src/binders/select.js");

var progress = __webpack_require__(/*! ./progress */ "../src/binders/progress.js");

exports.input = input;
exports.output = output;
exports.textarea = textarea;
exports.select = select;
exports.progress = progress;

/***/ }),

/***/ "../src/binders/input.js":
/*!*******************************!*\
  !*** ../src/binders/input.js ***!
  \*******************************/
/*! no static exports found */
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

/***/ "../src/binders/output.js":
/*!********************************!*\
  !*** ../src/binders/output.js ***!
  \********************************/
/*! no static exports found */
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

/***/ "../src/binders/progress.js":
/*!**********************************!*\
  !*** ../src/binders/progress.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(/*! ./input */ "../src/binders/input.js");

// returns a binder for textarea element
module.exports = progress;
function progress() {
    return input();
}

/***/ }),

/***/ "../src/binders/select.js":
/*!********************************!*\
  !*** ../src/binders/select.js ***!
  \********************************/
/*! no static exports found */
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

/***/ "../src/binders/textarea.js":
/*!**********************************!*\
  !*** ../src/binders/textarea.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(/*! ./input */ "../src/binders/input.js");

// returns a binder for textarea element
module.exports = textarea;
function textarea() {
    // textarea behaves just like text input
    return input('text');
}

/***/ }),

/***/ "../src/bindnode/_bindsinglenode.js":
/*!******************************************!*\
  !*** ../src/bindnode/_bindsinglenode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lookForBinder = __webpack_require__(/*! ../lookforbinder */ "../src/lookforbinder.js");

var createNodeHandler = __webpack_require__(/*! ./_createnodehandler */ "../src/bindnode/_createnodehandler.js");

var createObjectHandler = __webpack_require__(/*! ./_createobjecthandler */ "../src/bindnode/_createobjecthandler.js");

var triggerOne = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");

var addListener = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");

var debounce = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");

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
        addListener(object, '_change:bindings:' + key, objectHandler, { skipChecks: true });

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

/***/ "../src/bindnode/_createbindingswitcher.js":
/*!*************************************************!*\
  !*** ../src/bindnode/_createbindingswitcher.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unbindNode = __webpack_require__(/*! ../unbindnode */ "../src/unbindnode/index.js");

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

/***/ "../src/bindnode/_createnodehandler.js":
/*!*********************************************!*\
  !*** ../src/bindnode/_createnodehandler.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__(/*! ../_helpers/is */ "../src/_helpers/is.js");

var set = __webpack_require__(/*! ../set */ "../src/set.js");

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

/***/ "../src/bindnode/_createobjecthandler.js":
/*!***********************************************!*\
  !*** ../src/bindnode/_createobjecthandler.js ***!
  \***********************************************/
/*! no static exports found */
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
        // a dirty hack for https://github.com/matreshkajs/matreshka/issues/19

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

/***/ "../src/bindnode/_getnodes.js":
/*!************************************!*\
  !*** ../src/bindnode/_getnodes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var selectNodes = __webpack_require__(/*! ./_selectnodes */ "../src/bindnode/_selectnodes.js");

var $ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");

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

/***/ "../src/bindnode/_selectnodes.js":
/*!***************************************!*\
  !*** ../src/bindnode/_selectnodes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

var $ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");

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
                                result = result.add(selected);
                                node.removeAttribute(randomAttr);
                            }
                            // selecting children

                        } else {
                            for (var _target3 = boundNodes, _index2 = 0, node, _l3 = _target3.length; node = _target3[_index2], _index2 < _l3; _index2++) {
                                var selected = node.querySelectorAll(subSelector);
                                result = result.add(selected);
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

/***/ "../src/bindnode/index.js":
/*!********************************!*\
  !*** ../src/bindnode/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initDefi = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");

var defineProp = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");

var getNodes = __webpack_require__(/*! ./_getnodes */ "../src/bindnode/_getnodes.js");

var createBindingSwitcher = __webpack_require__(/*! ./_createbindingswitcher */ "../src/bindnode/_createbindingswitcher.js");

var bindSingleNode = __webpack_require__(/*! ./_bindsinglenode */ "../src/bindnode/_bindsinglenode.js");

var checkObjectType = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var defiError = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");

var addTreeListener = __webpack_require__(/*! ../on/_addtreelistener */ "../src/on/_addtreelistener.js");

// initializes binsing between a property of an object to HTML node
module.exports = bindNode;
function bindNode(object, key, node, binder, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'bindNode');

    eventOptions = eventOptions || {}; // eslint-disable-line no-param-reassign
    binder = binder || {}; // eslint-disable-line no-param-reassign

    initDefi(object);

    // throw an error when key is falsy
    if (!key) {
        throw defiError('binding:falsy_key');
    }

    if (key instanceof Array) {
        for (var _target = key, _index = 0, itemKey, _l = _target.length; itemKey = _target[_index], _index < _l; _index++) {
            bindNode(object, itemKey, node, binder, eventOptions)
        }
        /*
         * accept array of keys
         * this.bindNode(['a', 'b', 'c'], node)
         */


        return object;
    }

    if (typeof key === 'object') {
        for (var _target3 = key, _keys = Object.keys(_target3), _i = 0, keyObjKey, keyObjValue, _l3 = _keys.length; (keyObjKey = _keys[_i], keyObjValue = _target3[keyObjKey]), _i < _l3; _i++) {
            // binder means eventOptions
            eventOptions = binder; // eslint-disable-line no-param-reassign

            if (keyObjValue && keyObjValue.constructor === Object && 'node' in keyObjValue) {
                // this.bindNode({ key: { node: $(), binder } ) }, { on: 'evt' }, { silent: true });
                bindNode(object, keyObjKey, keyObjValue.node, keyObjValue.binder || node, eventOptions);
            } else if (keyObjValue && keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
                for (var _target2 = keyObjValue, _index2 = 0, keyObjValueItem, _l2 = _target2.length; keyObjValueItem = _target2[_index2], _index2 < _l2; _index2++) {
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
        optional = _eventOptions$optiona === undefined ? false : _eventOptions$optiona,
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

    for (var _target4 = $nodes, _index3 = 0, oneNode, _l4 = _target4.length; oneNode = _target4[_index3], _index3 < _l4; _index3++) {
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

/***/ "../src/bound.js":
/*!***********************!*\
  !*** ../src/bound.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");

var checkObjectType = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

// the function returns bound node(s)
module.exports = bound;
function bound(object, key) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { all: false },
        all = _ref.all;

    // throw error when object type is wrong
    checkObjectType(object, 'bound');

    // if no key or falsy key is given
    if (!key) {
        return all ? [] : null;
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

/***/ "../src/calc/_addsource.js":
/*!*********************************!*\
  !*** ../src/calc/_addsource.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addListener = __webpack_require__(/*! ../on/_addlistener */ "../src/on/_addlistener.js");

var addTreeListener = __webpack_require__(/*! ../on/_addtreelistener */ "../src/on/_addtreelistener.js");

var defiError = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");

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

/***/ "../src/calc/_createcalchandler.js":
/*!*****************************************!*\
  !*** ../src/calc/_createcalchandler.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var set = __webpack_require__(/*! ../set */ "../src/set.js");

var deepFind = __webpack_require__(/*! ../_helpers/deepfind */ "../src/_helpers/deepfind.js");

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

/***/ "../src/calc/index.js":
/*!****************************!*\
  !*** ../src/calc/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initDefi = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");

var checkObjectType = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var defiError = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");

var debounce = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");

var addSource = __webpack_require__(/*! ./_addsource */ "../src/calc/_addsource.js");

var createCalcHandler = __webpack_require__(/*! ./_createcalchandler */ "../src/calc/_createcalchandler.js");

var defineProp = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");

// defines a property which is dependend on other properties
module.exports = calc;
function calc(object, target, sources, givenHandler, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'calc');

    if (target instanceof Object) {
        for (var _target = target, _keys5 = Object.keys(_target), _i5 = 0, itemTarget, _ref, _l5 = _keys5.length; (itemTarget = _keys5[_i5], _ref = _target[itemTarget]), _i5 < _l5; _i5++) {
            var itemSource = _ref.source,
                itemHandler = _ref.handler,
                itemEventOptions = _ref.options;

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
    var def = initDefi(object);
    var _eventOptions = eventOptions,
        _eventOptions$setOnIn = _eventOptions.setOnInit,
        setOnInit = _eventOptions$setOnIn === undefined ? true : _eventOptions$setOnIn,
        _eventOptions$debounc = _eventOptions.debounceCalcOnInit,
        debounceCalcOnInit = _eventOptions$debounc === undefined ? false : _eventOptions$debounc,
        _eventOptions$debounc2 = _eventOptions.debounceCalc,
        debounceCalc = _eventOptions$debounc2 === undefined ? true : _eventOptions$debounc2,
        _eventOptions$debounc3 = _eventOptions.debounceCalcDelay,
        debounceCalcDelay = _eventOptions$debounc3 === undefined ? 0 : _eventOptions$debounc3;

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

    defineProp(object, target);

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

/***/ "../src/chain.js":
/*!***********************!*\
  !*** ../src/chain.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var checkObjectType = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var _lib = __webpack_require__(/*! ./_lib */ "../src/_lib.js");

var functions = _lib;


// create a prototype of ChainClass
// store target object at "object" property
var prototype = {
    constructor: function (object) {
        this.object = object;
    }
};

var funcNames = Object.keys(functions);

// iterate over all universal methods

var _loop = function (i) {
    var funcName = funcNames[i];
    var method = functions[funcName];

    // create every chained method
    prototype[funcName] = function chainedMethod() {
        var args = [this.object];

        for (var _target = arguments, _index = 0, argument, _l = _target.length; argument = _target[_index], _index < _l; _index++) {
            args.push(argument);
        }

        method.apply(undefined, args);

        // returning this is important for chained calls
        return this;
    };
};

for (var i = 0; i < funcNames.length; i++) {
    _loop(i);
}

var ChainClass = function ChainClass(object) {
    this.object = object;
};

ChainClass.prototype = prototype;

// the function allows to chain static function calls on any object
module.exports = chain;
function chain(object) {
    // check for type and throw an error if it is not an object and is not a function
    checkObjectType(object, 'chain');

    return new ChainClass(object);
}

/***/ }),

/***/ "../src/defaultbinders.js":
/*!********************************!*\
  !*** ../src/defaultbinders.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var input = __webpack_require__(/*! ./binders/input */ "../src/binders/input.js");

var textarea = __webpack_require__(/*! ./binders/textarea */ "../src/binders/textarea.js");

var select = __webpack_require__(/*! ./binders/select */ "../src/binders/select.js");

var progress = __webpack_require__(/*! ./binders/progress */ "../src/binders/progress.js");

var output = __webpack_require__(/*! ./binders/output */ "../src/binders/output.js");

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

/***/ "../src/index.js":
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(/*! ./_lib */ "../src/_lib.js");

var functions = _lib;

var lookForBinder = __webpack_require__(/*! ./lookforbinder */ "../src/lookforbinder.js");

var chain = __webpack_require__(/*! ./chain */ "../src/chain.js");

var defaultBinders = __webpack_require__(/*! ./defaultbinders */ "../src/defaultbinders.js");

module.exports = Object.assign({}, functions, {
    lookForBinder: lookForBinder,
    chain: chain,
    defaultBinders: defaultBinders
});

/***/ }),

/***/ "../src/lookforbinder.js":
/*!*******************************!*\
  !*** ../src/lookforbinder.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultBinders = __webpack_require__(/*! ./defaultbinders */ "../src/defaultbinders.js");

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

/***/ "../src/mediate.js":
/*!*************************!*\
  !*** ../src/mediate.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initDefi = __webpack_require__(/*! ./_core/init */ "../src/_core/init.js");

var defineProp = __webpack_require__(/*! ./_core/defineprop */ "../src/_core/defineprop.js");

var checkObjectType = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var set = __webpack_require__(/*! ./set */ "../src/set.js");

var defiError = __webpack_require__(/*! ./_helpers/defierror */ "../src/_helpers/defierror.js");

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

    initDefi(object);

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

/***/ "../src/off/_removedomlistener.js":
/*!****************************************!*\
  !*** ../src/off/_removedomlistener.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

var removeListener = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");

var $ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");

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

        for (var _target = bindings, index = 0, binding, _l = _target.length; binding = _target[index], index < _l; index++) {
            nodes[index] = binding.node;
        }

        $(nodes).off(eventName + '.' + eventNamespace, selector, callback);
    }

    // remove bind and unbind listeners from given key
    removeListener(object, 'bind:' + key, callback, info);
    removeListener(object, 'unbind:' + key, callback, info);

    return object;
}

/***/ }),

/***/ "../src/off/_removelistener.js":
/*!*************************************!*\
  !*** ../src/off/_removelistener.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

var triggerOne = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");

var domEventReg = __webpack_require__(/*! ../on/_domeventregexp */ "../src/on/_domeventregexp.js");

// removes simple event listener from an object
module.exports = removeListener;
function removeListener(object, name, callback, info) {
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

        var removeDomListener = __webpack_require__(/*! ./_removedomlistener */ "../src/off/_removedomlistener.js");

        removeDomListener(object, key, eventName, selector, callback, info);

        return true;
    }

    // if all events need to be removed
    if (typeof name === 'undefined') {
        if (!noTrigger) {
            for (var _target2 = allEvents, _keys = Object.keys(_target2), _i = 0, allEventsName, allEventsItem, _l2 = _keys.length; (allEventsName = _keys[_i], allEventsItem = _target2[allEventsName]), _i < _l2; _i++) {
                for (var _target = allEventsItem, _index = 0, event, _l = _target.length; event = _target[_index], _index < _l; _index++) {
                    var removeEventData = {
                        allEventsName: allEventsName,
                        callback: event.callback
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

            if (argCallback && argCallback !== eventCallback) {
                // keep event
                retain.push(event);
            } else {
                var _removeEventData = {
                    name: name,
                    callback: event.callback
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

/***/ "../src/off/_removetreelistener.js":
/*!*****************************************!*\
  !*** ../src/off/_removetreelistener.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undelegateListener = __webpack_require__(/*! ./_undelegatelistener */ "../src/off/_undelegatelistener.js");

// removes tree listener from all object tree of fiven path
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

/***/ "../src/off/_undelegatelistener.js":
/*!*****************************************!*\
  !*** ../src/off/_undelegatelistener.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

var removeListener = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");

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
function undelegateListener(object, givenPath, name, callback) {
    var info = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    var def = defs.get(object);

    // if no definition do nothing
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
        var pathStr = void 0;

        if (path.length > 1) {
            var _source = path,
                _l2 = _source.length,
                _i = 1 || false,
                _end =  false || _l2,
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
            undelegateListener(object[key], path, name, callback, info);
        }
    }
}

/***/ }),

/***/ "../src/off/index.js":
/*!***************************!*\
  !*** ../src/off/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splitBySpaceReg = __webpack_require__(/*! ../on/_splitbyspaceregexp */ "../src/on/_splitbyspaceregexp.js");

var checkObjectType = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

var removeListener = __webpack_require__(/*! ./_removelistener */ "../src/off/_removelistener.js");

var undelegateListener = __webpack_require__(/*! ./_undelegatelistener */ "../src/off/_undelegatelistener.js");

var $ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");

// removes event listener
module.exports = off;
function off(object, givenNames, callback) {
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

    if (!givenNames && !callback) {
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

            undelegateListener(object, path, delegatedName, callback);
        } else {
            removeListener(object, name, callback);
        }
    }

    return object;
}

/***/ }),

/***/ "../src/on/_adddomlistener.js":
/*!************************************!*\
  !*** ../src/on/_adddomlistener.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initDefi = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");

var defineProp = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");

var addListener = __webpack_require__(/*! ./_addlistener */ "../src/on/_addlistener.js");

var $ = __webpack_require__(/*! ../_mq */ "../src/_mq/index.js");

var createDomEventHandler = __webpack_require__(/*! ./_createdomeventhandler */ "../src/on/_createdomeventhandler.js");

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
function addDomListener(object, key, eventName, selector, callback, info) {
    var def = initDefi(object);
    var propDef = defineProp(object, key);

    var domEventHandler = createDomEventHandler({
        key: key,
        object: object,
        callback: callback
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

    var addBindListenerResult = addListener(object, 'bind:' + key, bindHandler, info);
    var addUnbindListenerResult = addListener(object, 'unbind:' + key, unbindHandler, info);

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

/***/ "../src/on/_addlistener.js":
/*!*********************************!*\
  !*** ../src/on/_addlistener.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initDefi = __webpack_require__(/*! ../_core/init */ "../src/_core/init.js");

var triggerOne = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");

var defineProp = __webpack_require__(/*! ../_core/defineprop */ "../src/_core/defineprop.js");

var domEventReg = __webpack_require__(/*! ./_domeventregexp */ "../src/on/_domeventregexp.js");

// property modifier event regexp
var propModEventReg // eslint-disable-next-line max-len
= /^_change:deps:|^_change:bindings:|^_change:delegated:|^_change:common:|^_change:tree:|^change:|^beforechange:/;

// adds simple event listener
// used as core of event engine
module.exports = addListener;
function addListener(object, name, callback) {
    var info = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var _initDefi = initDefi(object),
        allEvents = _initDefi.events;

    var events = allEvents[name];
    var event = {
        callback: callback, name: name, info: info
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

            var addDomListener = __webpack_require__(/*! ./_adddomlistener */ "../src/on/_adddomlistener.js");

            addDomListener(object, key, eventName, selector, callback, info);

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
                if (argCallback === eventCallback) {
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

/***/ "../src/on/_addtreelistener.js":
/*!*************************************!*\
  !*** ../src/on/_addtreelistener.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var delegateListener = __webpack_require__(/*! ./_delegatelistener */ "../src/on/_delegatelistener/index.js");

var removeTreeListener = __webpack_require__(/*! ../off/_removetreelistener */ "../src/off/_removetreelistener.js");

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

/***/ "../src/on/_createdomeventhandler.js":
/*!*******************************************!*\
  !*** ../src/on/_createdomeventhandler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns DOM event handler
module.exports = createDomEventHandler;
function createDomEventHandler(_ref) {
    var key = _ref.key,
        object = _ref.object,
        callback = _ref.callback;

    return function domEventHandler(domEvent) {
        var originalEvent = domEvent.originalEvent || domEvent;
        // defiTriggerArgs are created when DOM event is triggered by trigger method
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

/***/ "../src/on/_delegatelistener/changehandler.js":
/*!****************************************************!*\
  !*** ../src/on/_delegatelistener/changehandler.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undelegateListener = __webpack_require__(/*! ../../off/_undelegatelistener */ "../src/off/_undelegatelistener.js");

var triggerOne = __webpack_require__(/*! ../../trigger/_triggerone */ "../src/trigger/_triggerone.js");

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

    if (value && typeof value === 'object') {
        var delegateListener = __webpack_require__(/*! ./ */ "../src/on/_delegatelistener/index.js"); // fixing circular ref

        delegateListener(value, path, name, callback, info);
    }

    if (previousValue && typeof previousValue === 'object') {
        undelegateListener(previousValue, path, name, callback, info);
    }
}

/***/ }),

/***/ "../src/on/_delegatelistener/index.js":
/*!********************************************!*\
  !*** ../src/on/_delegatelistener/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addListener = __webpack_require__(/*! ../_addlistener */ "../src/on/_addlistener.js");

var changeHandler = __webpack_require__(/*! ./changehandler */ "../src/on/_delegatelistener/changehandler.js");

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
        var pathStr = void 0; // needed for undelegation

        if (path.length > 1) {
            var _source = path,
                _l = _source.length,
                _i = 1 || false,
                _end =  false || _l,
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
            info: info,
            object: object
        };

        // the event is triggered by "set"
        addListener(object, '_change:delegated:' + key, function (evt) {
            return changeHandler(evt);
        }, {
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

/***/ "../src/on/_domeventregexp.js":
/*!************************************!*\
  !*** ../src/on/_domeventregexp.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// the regexp allows to parse things like "click::x(.y)"
// it's shared between few modules
module.exports = /([^::]+)::([^()]+)?(?:\((.*)\))?/;

/***/ }),

/***/ "../src/on/_splitbyspaceregexp.js":
/*!****************************************!*\
  !*** ../src/on/_splitbyspaceregexp.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// allows to split by spaces not inclusing ones inside of brackers
module.exports = /\s+(?![^(]*\))/g;

/***/ }),

/***/ "../src/on/index.js":
/*!**************************!*\
  !*** ../src/on/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splitBySpaceReg = __webpack_require__(/*! ./_splitbyspaceregexp */ "../src/on/_splitbyspaceregexp.js");

var checkObjectType = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var defiError = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");

var off = __webpack_require__(/*! ../off */ "../src/off/index.js");

var debounce = __webpack_require__(/*! ../_helpers/debounce */ "../src/_helpers/debounce.js");

var addListener = __webpack_require__(/*! ./_addlistener */ "../src/on/_addlistener.js");

var delegateListener = __webpack_require__(/*! ./_delegatelistener */ "../src/on/_delegatelistener/index.js");

// adds event listener
module.exports = on;
function on(object, givenNames, givenCallback, options) {
    // throw error when object type is wrong
    checkObjectType(object, 'on');

    var isNamesVarArray = givenNames instanceof Array;

    // allow to pass name-handler object
    if (givenNames && typeof givenNames === 'object' && !isNamesVarArray) {
        for (var _target = givenNames, _keys = Object.keys(_target), _i = 0, namesObjName, namesObjCallback, _l = _keys.length; (namesObjName = _keys[_i], namesObjCallback = _target[namesObjName]), _i < _l; _i++) {
            on(object, namesObjName, namesObjCallback, givenCallback, options)
        }

        return object;
    }

    if (typeof givenNames !== 'string' && !isNamesVarArray) {
        throw defiError('on:names_type', { names: givenNames });
    }

    // split by spaces
    // TODO: Array of names passed to on method is a non-documented feature
    var names = isNamesVarArray ? givenNames : givenNames.split(splitBySpaceReg);

    var _ref = options || {},
        triggerOnInit = _ref.triggerOnInit,
        once = _ref.once,
        debounceOption = _ref.debounce;

    var callback = void 0;
    if (once) {
        callback = function onceCallback() {
            givenCallback.apply(this, arguments);
            // remove event listener after its call
            off(object, names, onceCallback);
        };

        // allow to remove event listener py passing original callback to "off"
        callback._callback = givenCallback;
    } else if (typeof debounceOption === 'number' || debounceOption === true) {
        callback = debounce(givenCallback, debounceOption === true ? 0 : debounceOption, object);
    } else {
        callback = givenCallback;
    }

    // call callback immediatelly if triggerOnInit is true
    for (var _target2 = names, _index = 0, name, _l2 = _target2.length; name = _target2[_index], _index < _l2; _index++) {
        var delegatedEventParts = name.split('@');

        if (delegatedEventParts.length > 1) {
            // if @ exists in event name then this is delegated event
            var path = delegatedEventParts[0],
                delegatedName = delegatedEventParts[1];

            delegateListener(object, path, delegatedName, callback);
        } else {
            // if not, this is simple event
            addListener(object, name, callback);
        }
    }

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unbindNode = __webpack_require__(/*! ./unbindnode */ "../src/unbindnode/index.js");

var triggerOne = __webpack_require__(/*! ./trigger/_triggerone */ "../src/trigger/_triggerone.js");

var removeListener = __webpack_require__(/*! ./off/_removelistener */ "../src/off/_removelistener.js");

var defs = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");

var checkObjectType = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var defiError = __webpack_require__(/*! ./_helpers/defierror */ "../src/_helpers/defierror.js");

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

/***/ "../src/set.js":
/*!*********************!*\
  !*** ../src/set.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ./_core/defs */ "../src/_core/defs.js");

var triggerOne = __webpack_require__(/*! ./trigger/_triggerone */ "../src/trigger/_triggerone.js");

var checkObjectType = __webpack_require__(/*! ./_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var is = __webpack_require__(/*! ./_helpers/is */ "../src/_helpers/is.js");

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

/***/ "../src/trigger/_triggerdomevent.js":
/*!******************************************!*\
  !*** ../src/trigger/_triggerdomevent.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var triggerOneDOMEvent = __webpack_require__(/*! ./_triggeronedomevent */ "../src/trigger/_triggeronedomevent.js");

var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

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

/***/ "../src/trigger/_triggerone.js":
/*!*************************************!*\
  !*** ../src/trigger/_triggerone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

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
}

// latestEvent is used as required hack in somemethods
triggerOne.latestEvent = {
    info: {},
    name: null
};

/***/ }),

/***/ "../src/trigger/_triggeronedomevent.js":
/*!*********************************************!*\
  !*** ../src/trigger/_triggeronedomevent.js ***!
  \*********************************************/
/*! no static exports found */
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
    });

    // defiTriggerArgs will be used in a handler created by addDOMListener
    event.defiTriggerArgs = triggerArgs;

    node.dispatchEvent(event);
}

/***/ }),

/***/ "../src/trigger/index.js":
/*!*******************************!*\
  !*** ../src/trigger/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var domEventReg = __webpack_require__(/*! ../on/_domeventregexp */ "../src/on/_domeventregexp.js");

var checkObjectType = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var defiError = __webpack_require__(/*! ../_helpers/defierror */ "../src/_helpers/defierror.js");

var splitBySpaceReg = __webpack_require__(/*! ../on/_splitbyspaceregexp */ "../src/on/_splitbyspaceregexp.js");

var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

var triggerOne = __webpack_require__(/*! ./_triggerone */ "../src/trigger/_triggerone.js");

var triggerDomEvent = __webpack_require__(/*! ./_triggerdomevent */ "../src/trigger/_triggerdomevent.js");

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

/***/ "../src/unbindnode/_removebinding.js":
/*!*******************************************!*\
  !*** ../src/unbindnode/_removebinding.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeListener = __webpack_require__(/*! ../off/_removelistener */ "../src/off/_removelistener.js");

var triggerOne = __webpack_require__(/*! ../trigger/_triggerone */ "../src/trigger/_triggerone.js");

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

/***/ "../src/unbindnode/index.js":
/*!**********************************!*\
  !*** ../src/unbindnode/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var checkObjectType = __webpack_require__(/*! ../_helpers/checkobjecttype */ "../src/_helpers/checkobjecttype.js");

var defs = __webpack_require__(/*! ../_core/defs */ "../src/_core/defs.js");

var getNodes = __webpack_require__(/*! ../bindnode/_getnodes */ "../src/bindnode/_getnodes.js");

var removeTreeListener = __webpack_require__(/*! ../off/_removetreelistener */ "../src/off/_removetreelistener.js");

var removeBinding = __webpack_require__(/*! ./_removebinding */ "../src/unbindnode/_removebinding.js");

// unbinds a node
module.exports = unbindNode;
function unbindNode(object, key, node, eventOptions) {
    // throw error when object type is wrong
    checkObjectType(object, 'unbindNode');

    if (key instanceof Array) {
        for (var _target = key, _index = 0, itemKey, _l = _target.length; itemKey = _target[_index], _index < _l; _index++) {
            unbindNode(object, itemKey, node, eventOptions)
        }
        /*
         * accept array of keys
         * this.unbindNode(['a', 'b', 'c'], node)
         */


        return object;
    }

    if (key && typeof key === 'object') {
        for (var _target3 = key, _keys = Object.keys(_target3), _i = 0, keyObjKey, keyObjValue, _l3 = _keys.length; (keyObjKey = _keys[_i], keyObjValue = _target3[keyObjKey]), _i < _l3; _i++) {
            if (keyObjValue.constructor === Object && 'node' in keyObjValue) {
                // this.unbindNode({ key: { node: $(), binder } ) }, { silent: true });
                unbindNode(object, keyObjKey, keyObjValue.node, node);
            } else if (keyObjValue.constructor === Array && keyObjValue.length && keyObjValue[0].constructor === Object && 'node' in keyObjValue[0]) {
                for (var _target2 = keyObjValue, _index2 = 0, keyObjValueItem, _l2 = _target2.length; keyObjValueItem = _target2[_index2], _index2 < _l2; _index2++) {
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
        for (var _target4 = props, _keys2 = Object.keys(_target4), _i2 = 0, propsKey, propsItem, _l4 = _keys2.length; (propsKey = _keys2[_i2], propsItem = _target4[propsKey]), _i2 < _l4; _i2++) {
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
        for (var _target5 = bindings, _index3 = 0, binding, _l5 = _target5.length; binding = _target5[_index3], _index3 < _l5; _index3++) {
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
    for (var _target7 = $nodes, _index5 = 0, nodesItem, _l7 = _target7.length; nodesItem = _target7[_index5], _index5 < _l7; _index5++) {
        for (var _target6 = bindings, _index4 = 0, binding, _l6 = _target6.length; binding = _target6[_index4], _index4 < _l6; _index4++) {
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

/***/ "./helpers/createspy.js":
/*!******************************!*\
  !*** ./helpers/createspy.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createSpy;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// creates nested object based on path and lastValue
// example: makeObject('a.b.c', 42) -> {a: {b: {c; 42}}}
module.exports = makeObject;
function makeObject() {
    var givenPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var lastValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var path = givenPath ? givenPath.split('.') : [];
    var result = {};
    var obj = result;
    var key = void 0;

    while (path.length > 1) {
        key = path.shift();
        obj = obj[key] = { myNameIs: key };
    }

    obj[path.shift()] = lastValue;

    return result;
}

/***/ }),

/***/ "./helpers/simulateclick.js":
/*!**********************************!*\
  !*** ./helpers/simulateclick.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// simulates click on a node
module.exports = simulateClick;
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

"use strict";


// This gets replaced by karma webpack with the updated files on rebuild
var __karmaWebpackManifest__ = [];

// require all modules from the
// current directory and all subdirectories
var testsContext = __webpack_require__("./spec sync recursive .*\\.js$");

function inManifest(path) {
    return __karmaWebpackManifest__.indexOf(path) >= 0;
}

var runnable = testsContext.keys().filter(inManifest);

// Run all tests if we didn't find any changes
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
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindNode = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");

var unbindNode = __webpack_require__(/*! src/unbindnode */ "../src/unbindnode/index.js");

var bound = __webpack_require__(/*! src/bound */ "../src/bound.js");

var addListener = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");

var makeObject = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");

var createSpy = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");

/* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */
describe('Bindings', function () {
    var noDebounceFlag = {
        debounceSetValue: false,
        debounceGetValue: false
    };

    var _window = window,
        document = _window.document;


    var obj = void 0;
    var node = void 0;
    var child = void 0;
    var binder = void 0;
    var initializeCall = void 0;
    var destroyCall = void 0;

    var testSimpleBind = function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';

        obj[key] = 'foo';
        expect(node.value).toEqual('foo');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj[key]).toEqual('bar');
        expect(initializeCall).toHaveBeenCalled();
        expect(bound(obj, key)).toEqual(node);
        expect(Array.from(bound(obj, key, { all: true }))).toEqual([node]);
    };

    var testSimpleUnbind = function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
        var testedNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;

        obj[key] = 'foo';
        expect(testedNode.value).toEqual('');
        testedNode.value = 'baz';
        testedNode.ondummyevent();
        expect(obj[key]).toEqual('foo');
        expect(destroyCall).toHaveBeenCalled();
        expect(bound(obj, key)).toEqual(null);
        expect(Array.from(bound(obj, key, { all: true }))).toEqual([]);
    };

    beforeEach(function () {
        obj = {};
        node = document.createElement('div');
        child = node.appendChild(document.createElement('div'));
        child.className = 'child';

        initializeCall = createSpy();
        destroyCall = createSpy();

        binder = {
            on: function (cbc) {
                this.ondummyevent = cbc;
            },
            getValue: function () {
                return this.value;
            },
            setValue: function (value) {
                this.value = value;
            },
            initialize: function () {
                this.value = this.value || '';
                initializeCall();
            },
            destroy: function () {
                destroyCall();
            }
        };
    });

    it('should handle debounceSetValueOnBind=true', function (done) {
        obj.x = 'foo';
        bindNode(obj, 'x', node, binder, {
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
        bindNode(obj, 'x', node, binder, {
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
        bindNode(obj, 'x', node, binder);
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
        bindNode(obj, 'x', node, binder);
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
        var bindCall = createSpy();
        var bindKeyCall = createSpy();
        addListener(obj, 'bind', bindCall);
        addListener(obj, 'bind:x', bindKeyCall);
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        testSimpleBind();
        expect(bindCall).toHaveBeenCalled();
        expect(bindKeyCall).toHaveBeenCalled();
    });

    it('should unbind and trigger events', function () {
        var unbindCall = createSpy();
        var unbindKeyCall = createSpy();
        addListener(obj, 'unbind', unbindCall);
        addListener(obj, 'unbind:x', unbindKeyCall);
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x', node);
        testSimpleUnbind();
        expect(unbindCall).toHaveBeenCalled();
        expect(unbindKeyCall).toHaveBeenCalled();
    });

    it('should bind using key-node object', function () {
        bindNode(obj, { x: node }, binder, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-binding object', function () {
        bindNode(obj, { x: { node: node, binder: binder } }, null, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-bindingsarray object', function () {
        bindNode(obj, { x: [{ node: node, binder: binder }] }, null, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-binding object and use common binder', function () {
        bindNode(obj, { x: { node: node } }, binder, noDebounceFlag);
        testSimpleBind();
    });

    it('should bind using key-bindingsarray object and use common binder', function () {
        bindNode(obj, { x: [{ node: node }] }, binder, noDebounceFlag);
        testSimpleBind();
    });

    it('should not unbind when wrong node is given', function () {
        var wrongNode = document.createElement('div');
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x', wrongNode);
        testSimpleBind();
    });

    it('should not unbind when wrong key is given', function () {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'y', node);
        testSimpleBind();
    });

    it('should unbind when node is not given', function () {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x');
        testSimpleUnbind();
    });

    it('should unbind all when neither key nor node is given', function () {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj);
        testSimpleUnbind();
    });

    it('should unbind by ":bound()" selector', function () {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        unbindNode(obj, 'x', ':bound(x)');
        testSimpleUnbind();
    });

    it('should unbind by ":bound() [native_selector]" selector', function () {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        bindNode(obj, 'y', child, binder, noDebounceFlag);
        unbindNode(obj, 'y', ':bound(x) .child');
        testSimpleUnbind('y', child);
    });

    it('should unbind by ":bound() > [native_selector]" selector', function () {
        bindNode(obj, 'x', node, binder, noDebounceFlag);
        bindNode(obj, 'y', child, binder, noDebounceFlag);
        unbindNode(obj, 'y', ':bound(x) > .child');
        testSimpleUnbind('y', child);
    });

    it('should unbind using key-node object', function () {
        bindNode(obj, { x: node }, binder, noDebounceFlag);
        unbindNode(obj, { x: node });
        testSimpleUnbind();
    });

    it('should unbind using key-binding object', function () {
        bindNode(obj, { x: { node: node, binder: binder } }, null, noDebounceFlag);
        unbindNode(obj, { x: { node: node, binder: binder } });
        testSimpleUnbind();
    });

    it('should unbind using key-bindings array object', function () {
        bindNode(obj, { x: [{ node: node, binder: binder }] }, null, noDebounceFlag);
        unbindNode(obj, { x: [{ node: node, binder: binder }] });
        testSimpleUnbind();
    });

    it('should bind delegated target', function () {
        var obj = makeObject('x.y');
        bindNode(obj, 'x.y.z', node, binder, noDebounceFlag);
        obj.x.y.z = 'foo';
        expect(node.value).toEqual('foo');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj.x.y.z).toEqual('bar');
    });

    it('should unbind delegated target', function () {
        var obj = makeObject('x.y');
        bindNode(obj, 'x.y.z', node, binder, noDebounceFlag);
        unbindNode(obj, 'x.y.z', node);
        obj.x.y.z = 'foo';
        expect(node.value).toEqual('');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj.x.y.z).toEqual('foo');
    });

    it('cancels delegated binding when exactKey=true option is passed', function () {
        bindNode(obj, 'x.y.z', node, binder, Object.assign({
            exactKey: true
        }, noDebounceFlag));
        testSimpleBind('x.y.z');
    });

    it('should rebind delegated target', function () {
        var obj = makeObject('u.x.y.z', 'go');
        bindNode(obj, 'u.x.y.z', node, binder, noDebounceFlag);
        obj.u.x = makeObject('y.z', 'foo');
        expect(node.value).toEqual('foo');
        node.value = 'bar';
        node.ondummyevent();
        expect(obj.u.x.y.z).toEqual('bar');
    });

    it('should remove binding if delegated target is reassigned', function () {
        var obj = makeObject('u.x.y');
        bindNode(obj, 'u.x.y.z', node, binder, noDebounceFlag);
        var x = obj.u.x;

        obj.u.x = makeObject('y.z', 'foo');

        node.value = 'bar';
        node.ondummyevent();
        expect(x.y.z).not.toEqual('bar');
        expect(obj.u.x.y.z).toEqual('bar');
        x.y.z = 'baz';
        expect(node.value).toEqual('bar');
    });

    it('throws error when node is not there', function () {
        expect(function () {
            bindNode(obj, 'x');
        }).toThrow();
    });

    it('throws error when node falsy', function () {
        expect(function () {
            bindNode(obj, '', node);
        }).toThrow();
    });

    it('does not throw error when node is not there and optional=true is given', function () {
        expect(function () {
            bindNode(obj, 'x', undefined, undefined, { optional: true });
        }).not.toThrow();
    });

    it('doesn\'t throw error with bindNode method when node is missing', function () {
        expect(function () {
            bindNode(obj, 'x', {}, { optional: true });
        }).not.toThrow();
    });

    it('doesn\'t throw error with bindNode method' + ' when node is missing (an object is used)', function () {
        expect(function () {
            bindNode(obj, {
                x: null,
                y: undefined
            }, {}, { optional: true });
        }).not.toThrow();
    });
});

/***/ }),

/***/ "./spec/bindings/default_binders_spec.js":
/*!***********************************************!*\
  !*** ./spec/bindings/default_binders_spec.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _srcBinders = __webpack_require__(/*! src/binders */ "../src/binders/index.js");

var textarea = _srcBinders.textarea;
var input = _srcBinders.input;
var select = _srcBinders.select;
var output = _srcBinders.output;
var progress = _srcBinders.progress;

var lookForBinder = __webpack_require__(/*! src/lookforbinder */ "../src/lookforbinder.js");

var bindNode = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");

describe('Default binders', function () {
    var noDebounceFlag = {
        debounceSetValue: false,
        debounceGetValue: false
    };
    var obj = void 0;

    beforeEach(function () {
        jasmine.addMatchers({
            bindersEqual: function (util, customEqualityTesters) {
                return {
                    compare: function (actual, expected) {
                        var result = {};
                        var pass = result.pass = util.equals(actual.on, expected.on, customEqualityTesters) && util.equals('' + actual.getValue, '' + expected.getValue, customEqualityTesters) && util.equals('' + actual.setValue, '' + expected.setValue, customEqualityTesters);

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
        bindNode(obj, 'x', node, textarea(), noDebounceFlag);
        expect(obj.x).toEqual('foo');
        obj.x = 'bar';
        expect(node.value).toEqual('bar');

        expect(lookForBinder(node)).bindersEqual(textarea());
    });

    it('should bind progress', function () {
        var node = window.document.createElement('progress');
        node.max = 3;
        node.value = 1;
        bindNode(obj, 'x', node, progress(), noDebounceFlag);
        expect(obj.x).toEqual(1);
        obj.x = 2;
        expect(node.value).toEqual(2);

        expect(lookForBinder(node)).bindersEqual(progress());
    });

    it('should bind text input', function () {
        var node = window.document.createElement('input');
        node.type = 'text';
        node.value = 'foo';
        bindNode(obj, 'x', node, input('text'), noDebounceFlag);
        expect(obj.x).toEqual('foo');
        obj.x = 'bar';
        expect(node.value).toEqual('bar');

        expect(lookForBinder(node)).bindersEqual(input('text'));
    });

    it('should bind checkbox input', function () {
        var node = window.document.createElement('input');
        node.type = 'checkbox';
        node.checked = false;
        bindNode(obj, 'x', node, input('checkbox'), noDebounceFlag);
        expect(obj.x).toEqual(false);
        obj.x = true;
        expect(node.checked).toEqual(true);

        expect(lookForBinder(node)).bindersEqual(input('checkbox'));
    });

    it('should bind output', function () {
        var node = window.document.createElement('output');
        node.innerHTML = 'foo';
        bindNode(obj, 'x', node, output(), noDebounceFlag);
        expect(obj.x).toEqual('foo');
        obj.x = 'bar';
        expect(node.innerHTML).toEqual('bar');
        expect(lookForBinder(node)).bindersEqual(output());
    });

    it('should bind select', function () {
        var node = window.document.createElement('select');
        for (var i = 0; i < 10; i++) {
            var option = node.appendChild(window.document.createElement('option'));
            option.value = '' + i;
            if (i === 1) {
                option.selected = true;
            }
        }

        bindNode(obj, 'x', node, select(), noDebounceFlag);
        expect(obj.x).toEqual('1');
        obj.x = '5';
        expect(node.value).toEqual('5');

        expect(lookForBinder(node)).bindersEqual(select());
    });

    it('should bind select (multiple)', function () {
        var node = window.document.createElement('select');
        node.multiple = true;

        for (var i = 0; i < 10; i++) {
            var option = node.appendChild(window.document.createElement('option'));
            option.value = '' + i;
            if (i === 1 || i === 4 || i === 7) {
                option.selected = true;
            }
        }

        bindNode(obj, 'x', node, select(true), noDebounceFlag);
        expect(obj.x).toEqual(['1', '4', '7']);
        obj.x = ['2', '5', '8'];

        for (var _i = 0; _i < 10; _i++) {
            expect(node.options[_i].selected).toEqual(_i === 2 || _i === 5 || _i === 8);
        }

        expect(lookForBinder(node)).bindersEqual(select(true));
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ "./spec/calc_spec.js":
/*!***************************!*\
  !*** ./spec/calc_spec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var calc = __webpack_require__(/*! src/calc */ "../src/calc/index.js");

var addListener = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");

var makeObject = __webpack_require__(/*! ../helpers/makeobject */ "./helpers/makeobject.js");

var createSpy = __webpack_require__(/*! ../helpers/createspy */ "./helpers/createspy.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */


var noDebounceFlag = { debounceCalc: false };
var delay = function (duration) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, duration);
    });
};

describe('calc', function () {
    it('throws an error if an object is null', function () {
        expect(function () {
            calc(null, 'a', 'b');
        }).toThrow();
    });

    it('adds simple dependency', function () {
        var obj = {
            a: 1,
            b: 2
        };

        calc(obj, 'c', ['a', 'b'], function (a, b) {
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

        calc(obj, 'e', [{
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

        calc(obj, {
            e: {
                source: ['a', 'b', {
                    object: obj2,
                    key: ['c', 'd']
                }],
                handler: function (a, b, c, d) {
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

        calc(obj, 'c', ['a', 'b'], function (a, b) {
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

        calc(obj, 'a', ['b', 'c'], function (x, y) {
            return x + y;
        }, noDebounceFlag);
        calc(obj, 'b', ['a', 'c'], function (x, y) {
            return x + y;
        }, noDebounceFlag);
        calc(obj, 'c', ['a', 'b'], function (x, y) {
            return x + y;
        }, noDebounceFlag);

        expect(obj.a).toEqual(27);
    });

    xit('throws error when target is not a string', function () {});
    xit('throws error when source is not an object', function () {});
    xit('throws error when source key is not a string', function () {});
    xit('throws error when source object is not an object', function () {});

    it('allows delegated dependencies', function () {
        var obj = makeObject('a.b.c', 1);

        calc(obj, 'd', 'a.b.c', function (c) {
            return c;
        }, noDebounceFlag);
        expect(obj.d).toEqual(1);
        obj.a.b.c = 2;
        expect(obj.d).toEqual(2);

        var b = obj.a.b;
        obj.a.b = { c: 3 };
        b.c = 'nope';
        expect(obj.d).toEqual(3);

        var a = obj.a;
        obj.a = { b: { c: 4 } };
        a.b = { c: 'nope' };
        expect(obj.d).toEqual(4);
    });

    it('allows delegated dependencies from another object', function () {
        var obj = makeObject('a', 1);
        var obj2 = makeObject('b.c.d', 2);

        calc(obj, 'd', {
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

        calc(obj, 'c', ['a.b.c', 'd.e.f'], function (abc, def) {
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
        var handler = createSpy(function (evt) {
            return expect(evt.foo).toEqual('bar');
        });
        calc(obj, 'c', ['a', 'b'], function (a, b) {
            return a + b;
        }, {
            foo: 'bar',
            debounceCalc: false
        });

        addListener(obj, 'change:c', handler);

        obj.a = 2;
        obj.b = 3;

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('uses silent=true from event options', function () {
        var obj = {};
        var handler = createSpy();

        addListener(obj, 'change:c', handler);

        calc(obj, 'c', ['a', 'b'], function (a, b) {
            return a + b;
        }, { silent: true });

        obj.a = 2;
        obj.b = 3;

        expect(handler).not.toHaveBeenCalled();
    });

    it('allows to debounce handler via debounceCalc=true (use default value)', function (done) {
        var obj = {
            a: 1,
            b: 2
        };
        var handler = createSpy(function () {
            expect(obj.c).toEqual(firstCall ? 3 : 5);
        });

        addListener(obj, 'change:c', handler);

        // we'e going to handle the first call separately because debounceCalcOnInit is always true
        var firstCall = true;
        calc(obj, 'c', ['a', 'b'], function (a, b) {
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
        var handler = createSpy(function () {
            expect(obj.c).toEqual(3);
            done();
        });

        addListener(obj, 'change:c', handler);

        calc(obj, 'c', ['a', 'b'], function (a, b) {
            return a + b;
        }, {
            debounceCalcOnInit: true
        });

        expect(obj.c).toEqual(undefined);

        expect(handler).not.toHaveBeenCalled();
    });

    it('allows to use promises via promiseCalc', function () {
        var _ref = _asyncToGenerator(function* (done) {
            var obj = {
                a: 1,
                b: 2
            };

            calc(obj, 'c', ['a', 'b'], function (a, b) {
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
            yield delay(50);
            expect(obj.c).toEqual(5);
            obj.b = 3;
            yield delay(50);
            expect(obj.c).toEqual(6);

            done();
        });

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }());

    it('allows to use non-promises when promiseCalc=true', function () {
        var _ref2 = _asyncToGenerator(function* (done) {
            var obj = {
                a: 1,
                b: 2
            };

            calc(obj, 'c', ['a', 'b'], function (a, b) {
                return a + b;
            }, {
                promiseCalc: true
            });

            expect(obj.c).toEqual(undefined);
            obj.a = 3;
            yield delay(50);
            expect(obj.c).toEqual(5);
            obj.b = 3;
            yield delay(50);
            expect(obj.c).toEqual(6);

            done();
        });

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chain = __webpack_require__(/*! src/chain */ "../src/chain.js");

describe('chain', function () {
    it('has all needed methods', function () {
        var inst = chain({});

        'on,\n        off,\n        trigger,\n        calc,\n        bindNode,\n        unbindNode,\n        set,\n        bound,\n        remove,\n        mediate'.split(/\s*,\s*/).forEach(function (name) {
            expect(typeof inst[name]).toEqual('function');
        });
    });

    it('can call calc and set as proof of chain work', function () {
        var obj = { a: 1 };
        chain(obj).calc('b', 'a', function (a) {
            return a * 2;
        }, { debounceCalc: false }).set('a', 2);

        expect(obj.b).toEqual(4);
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ "./spec/common_spec.js":
/*!*****************************!*\
  !*** ./spec/common_spec.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defi = __webpack_require__(/*! src */ "../src/index.js");

describe('common tests', function () {
    it('includes all documented members', function () {
        ['bindNode', 'bound', 'calc', 'chain', 'lookForBinder', 'set', 'mediate', 'off', 'on', 'remove', 'trigger', 'unbindNode'].forEach(function (methodName) {
            expect(typeof defi[methodName]).toEqual('function');
        });

        expect(typeof defi.defaultBinders[0]).toEqual('function');
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ "./spec/events/delegated_spec.js":
/*!***************************************!*\
  !*** ./spec/events/delegated_spec.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var delegateListener = __webpack_require__(/*! src/on/_delegatelistener */ "../src/on/_delegatelistener/index.js");

var undelegateListener = __webpack_require__(/*! src/off/_undelegatelistener */ "../src/off/_undelegatelistener.js");

var triggerOne = __webpack_require__(/*! src/trigger/_triggerone */ "../src/trigger/_triggerone.js");

var makeObject = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");

var createSpy = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");

describe('Delegated events (delegateListener, undelegateListener)', function () {
    var handler = void 0;

    beforeEach(function () {
        handler = createSpy();
    });

    it('fires (a.b)', function () {
        var obj = makeObject('a.b');

        delegateListener(obj, 'a.b', 'someevent', handler);
        triggerOne(obj.a.b, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('fires (a.b.c)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        triggerOne(obj.a.b.c, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('fires when reassigned (a.b, reassign a)', function () {
        var obj = makeObject('a.b');

        delegateListener(obj, 'a.b', 'someevent', handler);
        obj.a = makeObject('b');
        triggerOne(obj.a.b, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('fires when reassigned (a.b, reassign b)', function () {
        var obj = makeObject('a.b');

        delegateListener(obj, 'a.b', 'someevent', handler);
        obj.a.b = {};
        triggerOne(obj.a.b, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('fires when reassigned (a.b.c, reassign a)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        obj.a = makeObject('b.c');
        triggerOne(obj.a.b.c, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('fires when reassigned (a.b.c, reassign b)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        obj.a.b = makeObject('c');
        triggerOne(obj.a.b.c, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('fires when reassigned (a.b.c, reassign c)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        obj.a.b.c = {};
        triggerOne(obj.a.b.c, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('remove event from previous object when reassigned (a.b, reassign a)', function () {
        var obj = makeObject('a.b');
        var a = obj.a;

        delegateListener(obj, 'a.b', 'someevent', handler);
        obj.a = makeObject('b');
        triggerOne(a.b, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('remove event from previous object when reassigned (a.b, reassign b)', function () {
        var obj = makeObject('a.b');
        var b = obj.a.b;

        delegateListener(obj, 'a.b', 'someevent', handler);
        obj.a.b = {};
        triggerOne(b, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('remove event from previous object when reassigned (a.b.c, reassign a)', function () {
        var obj = makeObject('a.b.c');
        var a = obj.a;

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        obj.a = makeObject('b.c');
        triggerOne(a.b.c, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('remove event from previous object when reassigned (a.b.c, reassign b)', function () {
        var obj = makeObject('a.b.c');
        var b = obj.a.b;

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        obj.a.b = makeObject('c');
        triggerOne(b.c, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('remove event from previous object when reassigned (a.b.c, reassign c)', function () {
        var obj = makeObject('a.b.c');
        var c = obj.a.c;

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        obj.a.b.c = {};
        triggerOne(c, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('undelegate (a.b)', function () {
        var obj = makeObject('a.b');

        delegateListener(obj, 'a.b', 'someevent', handler);
        undelegateListener(obj, 'a.b', 'someevent');
        triggerOne(obj.a.b, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('undelegate (a.b.c)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        undelegateListener(obj, 'a.b.c', 'someevent');
        triggerOne(obj.a.b.c, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('does not remove change event when undelegated (a.b.c)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', function () {});
        delegateListener(obj, 'a.b', 'change:c', handler);
        undelegateListener(obj, 'a.b.c', 'someevent');
        obj.a.b.c = 55;
        expect(handler).toHaveBeenCalled();
    });

    it('undelegates by callback (a.b)', function () {
        var obj = makeObject('a.b');

        delegateListener(obj, 'a.b', 'someevent', handler);
        undelegateListener(obj, 'a.b', 'someevent', handler);
        triggerOne(obj.a.b, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('undelegates by callback (a.b.c)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        undelegateListener(obj, 'a.b.c', 'someevent', handler);
        triggerOne(obj.a.b.c, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('undelegates by callback but keeps when callbacks are not same (a.b)', function () {
        var obj = makeObject('a.b');

        delegateListener(obj, 'a.b', 'someevent', handler);
        undelegateListener(obj, 'a.b', 'someevent', function () {});
        triggerOne(obj.a.b, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('undelegates by callback but keeps when callbacks are not same (a.b.c)', function () {
        var obj = makeObject('a.b.c');

        delegateListener(obj, 'a.b.c', 'someevent', handler);
        undelegateListener(obj, 'a.b.c', 'someevent', function () {});
        triggerOne(obj.a.b.c, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    xit('uses correct context for delegated events', function () {
        var obj = makeObject('a.b.c');
        var bool = false;

        delegateListener(obj, 'a.b.c', 'someevent', function handle() {
            bool = this === obj;
        });

        triggerOne(obj.a.b.c, 'someevent');
        expect(bool).toBe(true);
    });
}); /* eslint-disable import/no-extraneous-dependencies, max-lines, import/extensions */

/***/ }),

/***/ "./spec/events/events_change_spec.js":
/*!*******************************************!*\
  !*** ./spec/events/events_change_spec.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addListener = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");

var delegateListener = __webpack_require__(/*! src/on/_delegatelistener */ "../src/on/_delegatelistener/index.js");

var undelegateListener = __webpack_require__(/*! src/off/_undelegatelistener */ "../src/off/_undelegatelistener.js");

var removeListener = __webpack_require__(/*! src/off/_removelistener */ "../src/off/_removelistener.js");

var makeObject = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");

var createSpy = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");

/* eslint-disable import/no-extraneous-dependencies, import/extensions */
describe('Change event (simple and delegated)', function () {
    var handler = void 0;

    beforeEach(function () {
        handler = createSpy();
    });

    it('fires simple', function () {
        var obj = { x: 1 };

        addListener(obj, 'change:x', handler);
        obj.x = 2;
        expect(handler).toHaveBeenCalled();
    });

    it('fires delegated (a.x)', function () {
        var obj = makeObject('a.x', 1);

        delegateListener(obj, 'a', 'change:x', handler);
        obj.a.x = 2;
        expect(handler).toHaveBeenCalled();
    });

    it('fires delegated (a.b.x)', function () {
        var obj = makeObject('a.b.x', 1);

        delegateListener(obj, 'a.b', 'change:x', handler);
        obj.a.b.x = 2;
        expect(handler).toHaveBeenCalled();
    });

    it('removes simple', function () {
        var obj = { x: 1 };

        addListener(obj, 'change:x', handler);
        removeListener(obj, 'change:x', handler);
        obj.x = 2;
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes delegated (a.x)', function () {
        var obj = makeObject('a.x', 1);

        delegateListener(obj, 'a', 'change:x', handler);
        undelegateListener(obj, 'a', 'change:x', handler);
        obj.a.x = 2;
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes delegated (a.b.x)', function () {
        var obj = makeObject('a.b.x', 1);

        delegateListener(obj, 'a.b', 'change:x', handler);
        undelegateListener(obj, 'a.b', 'change:x', handler);
        obj.a.b.x = 2;
        expect(handler).not.toHaveBeenCalled();
    });

    it('fires delegated (a.b.x)', function () {
        var obj = makeObject('a.b.x', 1);

        delegateListener(obj, 'a.b', 'change:x', handler);
        obj.a.b.x = 2;
        expect(handler).toHaveBeenCalled();
    });

    it('accepts null target (a.b.c, reassign b)', function () {
        var obj = makeObject('a.b.c.x', 1);
        delegateListener(obj, 'a.b.c', 'someevent', handler);

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addListener = __webpack_require__(/*! src/on/_addlistener */ "../src/on/_addlistener.js");

var removeListener = __webpack_require__(/*! src/off/_removelistener */ "../src/off/_removelistener.js");

var triggerOne = __webpack_require__(/*! src/trigger/_triggerone */ "../src/trigger/_triggerone.js");

var createSpy = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");

/* eslint-disable import/no-extraneous-dependencies, import/extensions */
describe('Events core (addListener, removeListener, triggerOne)', function () {
    var obj = void 0;
    var handler = void 0;

    beforeEach(function () {
        obj = {};
        handler = createSpy();
    });

    it('fires', function () {
        addListener(obj, 'someevent', handler);
        triggerOne(obj, 'someevent');
        expect(handler).toHaveBeenCalled();
    });

    it('uses correct context', function () {
        addListener(obj, 'someevent', function handle() {
            expect(obj === this).toEqual(true);
        });
        triggerOne(obj, 'someevent');
    });

    it('avoids conflicts', function () {
        var i = 0;
        // eslint-disable-next-line no-return-assign
        addListener(obj, 'someevent', function () {
            return i += 1e0;
        });
        // eslint-disable-next-line no-return-assign
        addListener(obj, 'someevent', function () {
            return i += 1e1;
        });
        // eslint-disable-next-line no-return-assign
        addListener(obj, 'someevent', function () {
            return i += 1e2;
        });
        triggerOne(obj, 'someevent');

        expect(i).toEqual(111);
    });

    it('removes all', function () {
        addListener(obj, 'someevent', handler);
        removeListener(obj);
        triggerOne(obj, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes by name', function () {
        addListener(obj, 'someevent', handler);
        removeListener(obj, 'someevent');
        triggerOne(obj, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes by callback', function () {
        addListener(obj, 'someevent', handler);
        removeListener(obj, 'someevent', handler);
        triggerOne(obj, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes by callback but keeps when callbacks are not same', function () {
        addListener(obj, 'someevent', handler);
        removeListener(obj, 'someevent', function () {});
        triggerOne(obj, 'someevent');
        expect(handler).toHaveBeenCalled();
    });
});

/***/ }),

/***/ "./spec/events/events_dom_spec.js":
/*!****************************************!*\
  !*** ./spec/events/events_dom_spec.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addDomListener = __webpack_require__(/*! src/on/_adddomlistener */ "../src/on/_adddomlistener.js");

var removeDomListener = __webpack_require__(/*! src/off/_removedomlistener */ "../src/off/_removedomlistener.js");

var triggerDOMEvent = __webpack_require__(/*! src/trigger/_triggerdomevent */ "../src/trigger/_triggerdomevent.js");

var bindNode = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");

var createSpy = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");

var simulateClick = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");

/* eslint-disable import/no-extraneous-dependencies, no-shadow, import/extensions */
describe('Events core (addDomListener, removeDomListener, triggerDOMListener)', function () {
    var node = void 0;
    var obj = void 0;
    var handler = void 0;
    var childNode = void 0;
    var grandchildNode = void 0;

    beforeEach(function () {
        obj = {};
        handler = createSpy();
        node = window.document.body.appendChild(window.document.createElement('div'));

        node.innerHTML = '\n            <div id="child">\n                <div class="grandchild">\n\n                </div>\n            </div>\n        ';

        childNode = node.querySelector('#child');
        grandchildNode = node.querySelector('.grandchild');
    });

    afterEach(function () {
        window.document.body.removeChild(node);
    });

    it('fires with no selector', function () {
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', null, handler);
        simulateClick(childNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes with no selector', function () {
        addDomListener(obj, 'x', 'click', null, handler);
        removeDomListener(obj, 'x', 'click');
        bindNode(obj, 'x', '#child');
        simulateClick(childNode);
        expect(handler).not.toHaveBeenCalled();
    });

    it('fires using selector', function () {
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', '.grandchild', handler);
        simulateClick(grandchildNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('adds using selector and removes with no selector', function () {
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', '.grandchild', handler);
        removeDomListener(obj, 'x', 'click');
        simulateClick(grandchildNode);
        expect(handler).not.toHaveBeenCalled();
    });

    it('adds using selector then binds and removes with selector', function () {
        addDomListener(obj, 'x', 'click', '.grandchild', handler);
        bindNode(obj, 'x', '#child');
        removeDomListener(obj, 'x', 'click');
        simulateClick(grandchildNode);
        expect(handler).not.toHaveBeenCalled();
    });

    it('triggers DOM event', function () {
        var handler = createSpy(function (d1, d2) {
            return expect(d1 + d2).toEqual(3);
        });
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', null, handler);
        triggerDOMEvent(obj, 'x', 'click', null, [1, 2]);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('triggers DOM event with specified selector', function () {
        var handler = createSpy(function (d1, d2) {
            return expect(d1 + d2).toEqual(3);
        });
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', '.grandchild', handler);
        triggerDOMEvent(obj, 'x', 'click', '.grandchild', [1, 2]);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('triggers DOM event with specified selector (bubbling test)', function () {
        var handler = createSpy(function (d1, d2) {
            return expect(d1 + d2).toEqual(3);
        });
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', null, handler);
        triggerDOMEvent(obj, 'x', 'click', '.grandchild', [1, 2]);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes delegated', function () {
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', '.grandchild', handler);
        removeDomListener(obj, 'x', 'click', '.grandchild');
        simulateClick(grandchildNode);
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes delegated and does not remove events from other nodes', function () {
        bindNode(obj, 'x', '#child');
        addDomListener(obj, 'x', 'click', '.grandchild', handler);
        removeDomListener(obj, 'x', 'click', '.blah');
        simulateClick(grandchildNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });
});

/***/ }),

/***/ "./spec/events/events_summary_spec.js":
/*!********************************************!*\
  !*** ./spec/events/events_summary_spec.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var on = __webpack_require__(/*! src/on */ "../src/on/index.js");

var off = __webpack_require__(/*! src/off */ "../src/off/index.js");

var trigger = __webpack_require__(/*! src/trigger */ "../src/trigger/index.js");

var bindNode = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");

var createSpy = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");

var makeObject = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");

var simulateClick = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");

describe('Events summary (on, off, trigger)', function () {
    var obj = void 0;
    var handler = void 0;
    var node = void 0;
    var childNode = void 0;
    var grandchildNode = void 0;

    beforeEach(function () {
        obj = {};
        handler = createSpy();
        node = window.document.body.appendChild(window.document.createElement('div'));

        node.innerHTML = '\n            <div id="child">\n                <div class="grandchild">\n\n                </div>\n            </div>\n        ';

        childNode = node.querySelector('#child');
        grandchildNode = node.querySelector('.grandchild');
    });

    afterEach(function () {
        window.document.body.removeChild(node);
    });

    it('fires', function () {
        on(obj, 'someevent', handler);
        trigger(obj, 'someevent');
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('allows to pass few arguments to trigger', function () {
        var handler = createSpy(function (a, b) {
            expect(a).toEqual('foo');
            expect(b).toEqual('bar');
        });
        on(obj, 'someevent', handler);
        trigger(obj, 'someevent', 'foo', 'bar');
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes', function () {
        on(obj, 'someevent', handler);
        off(obj, 'someevent');
        trigger(obj, 'someevent');

        expect(handler).not.toHaveBeenCalled();
    });

    it('fires delegated (simple)', function () {
        var obj = makeObject('a');
        var handler1 = createSpy();
        var handler2 = createSpy();
        on(obj, 'a@someevent1', handler1);
        on(obj, 'a@someevent2', handler2);
        trigger(obj.a, 'someevent1');
        trigger(obj.a, 'someevent2');
        expect(handler1).toHaveBeenCalledTimes(1);
        expect(handler2).toHaveBeenCalledTimes(1);
    });

    it('fires delegated (simple, reassigned)', function () {
        var obj = {};
        var handler1 = createSpy();
        var handler2 = createSpy();
        on(obj, 'a@someevent1', handler1);
        on(obj, 'a@someevent2', handler2);
        obj.a = {};
        trigger(obj.a, 'someevent1');
        trigger(obj.a, 'someevent2');
        expect(handler1).toHaveBeenCalledTimes(1);
        expect(handler2).toHaveBeenCalledTimes(1);
    });

    it('fires delegated', function () {
        var obj = makeObject('a.b.c');
        on(obj, 'a.b.c@someevent', handler);
        trigger(obj.a.b.c, 'someevent');
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes delegated', function () {
        var obj = makeObject('a.b.c');
        on(obj, 'a.b.c@someevent', handler);
        off(obj, 'a.b.c@someevent');
        trigger(obj.a.b.c, 'someevent');
        expect(handler).not.toHaveBeenCalled();
    });

    it('fires DOM event with no selector', function () {
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x', handler);
        simulateClick(childNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes DOM event with no selector', function () {
        on(obj, 'click::x', handler);
        off(obj, 'click::x');
        bindNode(obj, 'x', '#child');
        simulateClick(childNode);
        expect(handler).not.toHaveBeenCalled();
    });

    it('triggers DOM event using selector', function () {
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x(.grandchild)', handler);
        simulateClick(grandchildNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('removes DOM event using selector', function () {
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x(.grandchild)', handler);
        off(obj, 'click::x(.grandchild)');
        simulateClick(grandchildNode);
        expect(handler).not.toHaveBeenCalled();
    });

    it('triggers DOM event via trigger', function () {
        var handler = createSpy(function (a, b) {
            return expect(a + b).toEqual(3);
        });
        bindNode(obj, 'x', '#child');
        on(obj, 'click::x', handler);
        trigger(obj, 'click::x', 1, 2);

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('fires DOM event using delegated event name', function () {
        var obj = { a: {} };
        bindNode(obj.a, 'x', '#child');
        on(obj, 'a@click::x', handler);
        simulateClick(childNode);
        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('allows to pass name-handler object to "on" and "off"', function () {
        var handlers = {
            foo: createSpy(),
            bar: createSpy()
        };

        on(obj, handlers);

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);

        off(obj, handlers);

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);
    });

    it('removes all events when off is called with no args', function () {
        on(obj, 'click::x', handler);
        bindNode(obj, 'x', '#child');
        on(obj, 'foo', handler);
        off(obj);
        simulateClick(childNode);
        trigger(obj, 'foo');
        expect(handler).not.toHaveBeenCalled();
    });

    it('triggers once', function () {
        on(obj, 'someevent', handler, { once: true });
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('allows to pass name-handler object to "once"', function () {
        var handlers = {
            foo: createSpy(),
            bar: createSpy()
        };

        on(obj, handlers, { once: true });

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);

        trigger(obj, 'foo');
        trigger(obj, 'bar');

        expect(handlers.foo).toHaveBeenCalledTimes(1);
        expect(handlers.bar).toHaveBeenCalledTimes(1);
    });

    it('triggers on init', function () {
        on(obj, 'someevent', handler, { triggerOnInit: true });
        expect(handler).toHaveBeenCalledTimes(1);
        trigger(obj, 'someevent');
        expect(handler).toHaveBeenCalledTimes(2);
    });

    it('adds debounced handler via debounce: true', function (done) {
        setTimeout(function () {
            expect(handler).toHaveBeenCalledTimes(1);
            done();
        }, 200);

        on(obj, 'someevent', handler, { debounce: true });
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
    });

    it('adds debounced handler via debounce: 0', function (done) {
        setTimeout(function () {
            expect(handler).toHaveBeenCalledTimes(1);
            done();
        }, 200);

        on(obj, 'someevent', handler, { debounce: 0 });
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
    });

    it('adds debounced handler via debounce: number', function (done) {
        setTimeout(function () {
            expect(handler).toHaveBeenCalledTimes(0);
        }, 100);

        setTimeout(function () {
            done();
            expect(handler).toHaveBeenCalledTimes(1);
        }, 300);

        on(obj, 'someevent', handler, { debounce: 200 });
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
        trigger(obj, 'someevent');
    });
}); /* eslint-disable import/no-extraneous-dependencies, no-shadow, max-lines, import/extensions */

/***/ }),

/***/ "./spec/events/tree_change_spec.js":
/*!*****************************************!*\
  !*** ./spec/events/tree_change_spec.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addTreeListner = __webpack_require__(/*! src/on/_addtreelistener */ "../src/on/_addtreelistener.js");

var removeTreeListner = __webpack_require__(/*! src/off/_removetreelistener */ "../src/off/_removetreelistener.js");

var makeObject = __webpack_require__(/*! ../../helpers/makeobject */ "./helpers/makeobject.js");

var createSpy = __webpack_require__(/*! ../../helpers/createspy */ "./helpers/createspy.js");

/* eslint-disable import/no-extraneous-dependencies, import/extensions */
describe('Tree change events (internal feature)', function () {
    it('should listen tree and should remove listeners from previous subtree', function () {
        var obj = makeObject('a.b.c.d.e');
        var handler = createSpy();
        addTreeListner(obj, 'a.b.c.d.e', handler);

        obj.a.b.c.d.e = {};
        expect(handler).toHaveBeenCalledTimes(1);

        // once again
        obj.a.b.c.d.e = {};
        expect(handler).toHaveBeenCalledTimes(2);

        var d = obj.a.b.c.d;
        obj.a.b.c.d = makeObject('e');
        d.e = {};
        expect(handler).toHaveBeenCalledTimes(3);

        var c = obj.a.b.c;
        obj.a.b.c = makeObject('d.e');
        c.d = makeObject('e');
        expect(handler).toHaveBeenCalledTimes(4);

        var b = obj.a.b;
        obj.a.b = makeObject('c.d.e');
        b.c = makeObject('d.e');
        expect(handler).toHaveBeenCalledTimes(5);

        var a = obj.a;
        obj.a = makeObject('b.c.d.e');
        a.b = makeObject('c.d.e');
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
        var obj = makeObject('a.b.c');
        var handler = createSpy();
        addTreeListner(obj, 'a.b.c', handler);
        removeTreeListner(obj, 'a.b.c', handler);

        obj.a.b.c = {};
        expect(handler).not.toHaveBeenCalled();

        obj.a.b = makeObject('c');
        expect(handler).not.toHaveBeenCalled();

        obj.a = makeObject('b.c');
        expect(handler).not.toHaveBeenCalled();
    });

    it('should remove tree listener without callback', function () {
        var obj = makeObject('a.b.c');
        var handler = createSpy();
        addTreeListner(obj, 'a.b.c', handler);
        removeTreeListner(obj, 'a.b.c');

        obj.a.b.c = {};
        expect(handler).not.toHaveBeenCalled();

        obj.a.b = makeObject('c');
        expect(handler).not.toHaveBeenCalled();

        obj.a = makeObject('b.c');
        expect(handler).not.toHaveBeenCalled();
    });

    it('should not remove tree listener by wrong callback', function () {
        var obj = makeObject('a.b.c');
        var handler = createSpy();
        addTreeListner(obj, 'a.b.c', handler);
        removeTreeListner(obj, 'a.b.c', function () {});

        obj.a.b.c = {};
        expect(handler).toHaveBeenCalledTimes(1);

        obj.a.b = makeObject('c');
        expect(handler).toHaveBeenCalledTimes(2);

        obj.a = makeObject('b.c');
        expect(handler).toHaveBeenCalledTimes(3);
    });
});

/***/ }),

/***/ "./spec/mediate_spec.js":
/*!******************************!*\
  !*** ./spec/mediate_spec.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mediate = __webpack_require__(/*! src/mediate */ "../src/mediate.js");

describe('mediate', function () {
    it('throws an error if an object is null', function () {
        expect(function () {
            mediate(null, 'a', String);
        }).toThrow();
    });

    it('mediates', function () {
        var obj = {};

        mediate(obj, 'a', function (v) {
            return Number(v);
        });
        mediate(obj, ['b', 'c'], function (v) {
            return Number(v);
        });

        obj.a = obj.b = obj.c = '123';

        expect(typeof obj.a).toEqual('number');
        expect(typeof obj.b).toEqual('number');
        expect(typeof obj.c).toEqual('number');
    });

    it('mediates using key-mediator object', function () {
        var obj = {};

        mediate(obj, {
            a: function (v) {
                return Number(v);
            },
            b: function (v) {
                return Number(v);
            }
        });

        obj.a = obj.b = '123';

        expect(typeof obj.a).toEqual('number');
        expect(typeof obj.b).toEqual('number');
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ "./spec/mq/add_spec.js":
/*!*****************************!*\
  !*** ./spec/mq/add_spec.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");

describe('mq.fn.add', function () {
    it('adds once', function () {
        var el1 = window.document.createElement('div');
        var el2 = window.document.createElement('div');
        var el3 = window.document.createElement('div');
        var el4 = window.document.createElement('div');
        var el5 = window.document.createElement('div');
        var result = Array.from($([el1, el2, el3]).add([el2, el3, el4, el5]));

        expect(result).toEqual([el1, el2, el3, el4, el5]);
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ "./spec/mq/events_spec.js":
/*!********************************!*\
  !*** ./spec/mq/events_spec.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _this = this; /* eslint-disable import/no-extraneous-dependencies, import/extensions */


var $ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");

var simulateClick = __webpack_require__(/*! ../../helpers/simulateclick */ "./helpers/simulateclick.js");

describe('mq events', function () {
    var testSandbox = void 0;
    var child1 = void 0;
    var child2 = void 0;
    var grandchild1 = void 0;
    var handler = void 0;

    beforeEach(function () {
        testSandbox = window.document.createElement('div');

        testSandbox.innerHTML = '\n            <div class="child1">\n                <div class="grandchild1"></div>\n            </div>\n            <div class="child2"></div>\n        ';

        child1 = testSandbox.querySelector('.child1');
        child2 = testSandbox.querySelector('.child2');
        grandchild1 = testSandbox.querySelector('.grandchild1');

        _this.handler = function () {};
        spyOn(_this, 'handler');
        handler = _this.handler;
    });

    afterEach(function () {
        $([testSandbox, child1, child2, grandchild1]).off('click');
    });

    it('adds event listener', function () {
        $(testSandbox).on('click', handler);
        simulateClick(testSandbox);
        expect(handler).toHaveBeenCalled();
    });

    it('removes event listener (listener is specified)', function () {
        $(testSandbox).on('click', handler).off('click', handler);
        simulateClick(testSandbox);
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes event listener (listener is not specified)', function () {
        $(testSandbox).on('click', handler).off('click');
        simulateClick(testSandbox);
        expect(handler).not.toHaveBeenCalled();
    });

    it('adds namespaced listener', function () {
        $(testSandbox).on('click.yo', handler);
        simulateClick(testSandbox);
        expect(handler).toHaveBeenCalled();
    });

    it('removes namespaced listener (listener is specified)', function () {
        $(testSandbox).on('click.yo', handler).off('click.yo', handler);
        simulateClick(testSandbox);
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes namespaced listener (listener is not specified)', function () {
        $(testSandbox).on('click.yo', handler).off('click.yo');
        simulateClick(testSandbox);
        expect(handler).not.toHaveBeenCalled();
    });

    it('adds bubbling event listener', function () {
        $(testSandbox).on('click', handler);
        simulateClick(grandchild1);
        expect(handler).toHaveBeenCalled();
    });

    it('adds delegated event listener', function () {
        $(testSandbox).on('click', '.child1', handler);
        simulateClick(child1);
        expect(handler).toHaveBeenCalled();
    });

    it('adds delegated event listener (click on grandchildren)', function () {
        $(testSandbox).on('click', '.child1', handler);
        simulateClick(grandchild1);
        expect(handler).toHaveBeenCalled();
    });

    it('does not trigger when clicked on wrong child', function () {
        $(testSandbox).on('click', '.child2', handler);
        simulateClick(grandchild1);
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes delegated event listener (selector and handler are specified)', function () {
        $(testSandbox).on('click', '.child1', handler).off('click', '.child1', handler);
        simulateClick(child1);
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes delegated event listener (selector is specified, handler is not specified)', function () {
        $(testSandbox).on('click', '.child1', handler).off('click', '.child1');
        simulateClick(child1);
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes delegated event listener (selector is not specified, handler is specified)', function () {
        $(testSandbox).on('click', '.child1', handler).off('click', handler);
        simulateClick(child1);
        expect(handler).not.toHaveBeenCalled();
    });

    it('removes delegated event listener (selector and handler are not specified)', function () {
        $(testSandbox).on('click', '.child1', handler).off('click');
        simulateClick(child1);
        expect(handler).not.toHaveBeenCalled();
    });

    it('stops propagation', function () {
        $(testSandbox).on('click', handler);
        $(child1).on('click', function (evt) {
            return evt.stopPropagation();
        });
        simulateClick(child1);
        expect(handler).not.toHaveBeenCalled();
    });
});

/***/ }),

/***/ "./spec/mq/init_spec.js":
/*!******************************!*\
  !*** ./spec/mq/init_spec.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");

describe('mq initialization', function () {
    var testSandbox = void 0;

    beforeEach(function () {
        testSandbox = window.document.createElement('div');

        testSandbox.innerHTML = '\n            <div class="test">\n                <div class="test-1"></div>\n                <div class="test-2"></div>\n                <div class="test-3"></div>\n            </div>\n        ';
    });

    it('accepts window', function () {
        var result = $(window);
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual(window);
    });

    it('accepts document', function () {
        var result = $(window.document);
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual(window.document);
    });

    it('parses HTML', function () {
        var result = $('<div></div><span></span>');

        expect(result.length).toEqual(2);
        expect(result[0].tagName).toEqual('DIV');
        expect(result[1].tagName).toEqual('SPAN');
    });

    it('converts array-like', function () {
        var children = testSandbox.querySelectorAll('*');
        var result = $(children);

        expect(children.length).toEqual(result.length);

        for (var i = 0; i < children.length; i++) {
            expect(children[i]).toEqual(result[i]);
        }
    });

    it('converts one element', function () {
        var element = window.document.querySelector('*');
        var result = $(element);

        expect(result.length).toEqual(1);
        expect(element).toEqual(result[0]);
    });

    it('uses context', function () {
        expect($('.test-1', testSandbox).length).toEqual(1);
    });

    it('does not use wrong context', function () {
        expect($('.test-1', '.wrong-context').length).toEqual(0);
    });

    it('allows to pass null', function () {
        expect($(null).length).toEqual(0);
    });

    it('allows to pass nothing', function () {
        expect($().length).toEqual(0);
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ "./spec/mq/parsehtml_spec.js":
/*!***********************************!*\
  !*** ./spec/mq/parsehtml_spec.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! src/_mq */ "../src/_mq/index.js");

describe('mq.parseHTML', function () {
    it('parses HTML', function () {
        var result = $.parseHTML('<div></div><span></span>');

        expect(result.length).toEqual(2);
        expect(result[0].tagName).toEqual('DIV');
        expect(result[1].tagName).toEqual('SPAN');
    });

    it('parses contextual elements', function () {
        var result = $.parseHTML('<td></td><td></td>');

        expect(result.length).toEqual(2);
        expect(result[0].tagName).toEqual('TD');
        expect(result[1].tagName).toEqual('TD');
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ "./spec/remove_spec.js":
/*!*****************************!*\
  !*** ./spec/remove_spec.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var remove = __webpack_require__(/*! src/remove */ "../src/remove.js");

var on = __webpack_require__(/*! src/on */ "../src/on/index.js");

var bindNode = __webpack_require__(/*! src/bindnode */ "../src/bindnode/index.js");

var bound = __webpack_require__(/*! src/bound */ "../src/bound.js");

var trigger = __webpack_require__(/*! src/trigger */ "../src/trigger/index.js");

var createSpy = __webpack_require__(/*! ../helpers/createspy */ "./helpers/createspy.js");

/* eslint-disable import/no-extraneous-dependencies, import/extensions */
describe('remove', function () {
    it('throws an error if an object is null', function () {
        expect(function () {
            remove(null, 'a');
        }).toThrow();
    });

    it('removes a property', function () {
        var obj = {
            a: 1
        };

        remove(obj, 'a');
        expect('a' in obj).toBe(false);
    });

    it('removes a property and its events', function () {
        var obj = {
            a: 1
        };
        var handler = createSpy();

        on(obj, 'change:a', handler);
        trigger(obj, 'change:a');
        expect(handler).toHaveBeenCalledTimes(1);
        remove(obj, 'a');
        trigger(obj, 'change:a');
        expect(handler).toHaveBeenCalledTimes(1);
        expect('a' in obj).toBe(false);
    });

    it('removes a property and its bindings', function () {
        var obj = {
            a: 1
        };
        var node = window.document.createElement('div');

        bindNode(obj, 'a', node);
        expect(bound(obj, 'a')).toEqual(node);
        remove(obj, 'a');
        expect(bound(obj, 'a')).toEqual(null);
        expect('a' in obj).toBe(false);
    });
});

/***/ }),

/***/ "./spec/set_spec.js":
/*!**************************!*\
  !*** ./spec/set_spec.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var set = __webpack_require__(/*! src/set */ "../src/set.js");

describe('set', function () {
    it('throws an error if an object is null', function () {
        expect(function () {
            set(null, 'x', 1);
        }).toThrow();
    });

    it('sets', function () {
        var obj = {};
        set(obj, 'x', 42);
        expect(obj.x).toEqual(42);

        set(obj, {
            y: 1,
            z: 2
        });
        expect(obj.y).toEqual(1);
        expect(obj.z).toEqual(2);
    });

    it('does not throw if key is falsy', function () {
        expect(function () {
            set({}, null, 1);
        }).not.toThrow();
    });
}); /* eslint-disable import/no-extraneous-dependencies, import/extensions */

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi babel-polyfill ./index ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"../node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map