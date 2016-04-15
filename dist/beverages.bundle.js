/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(2),

	    __webpack_require__(3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, _, BeveragesView) {
	    'use strict';

	    $.fn.beverages = function (options) {
	        var settings = _.clone(options);
	        settings.el = this;
	        new BeveragesView(settings).render();
	    };

	    return $;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(5),
	    __webpack_require__(1),

	    __webpack_require__(10),

	    __webpack_require__(11),
	    __webpack_require__(13),

	    __webpack_require__(17),
	    __webpack_require__(20),

	    __webpack_require__(21)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (Backbone, rivets, $, template, Beverages, i18n) {
	    'use strict';

	    /* === Rivets configuration === */
	    rivets.formatters.theineLevel100 = function (value) {
	        switch (value) {
	            case 'none':
	                return 0;
	            case 'low':
	                return 25;
	            case 'medium':
	                return 50;
	            case 'high':
	                return 75;
	            case 'coffee':
	            case 'unknown':
	            default:
	                return 100;
	        }
	    };

	    rivets.formatters.minMax = function (value, separator) {
	        if (value) {
	            if (value.min) {
	                return value.max && value.min !== value.max
	                    ? value.min + (separator ? separator : '-') + value.max
	                    : value.min;
	            } else if (value.max) {
	                return value.max;
	            }
	        }
	        return '';
	    };

	    rivets.formatters.showMinMax = function (value) {
	        return value && (value.min || value.max);
	    };

	    /* === Backbone view === */
	    return Backbone.View.extend({

	        beverages: null,
	        context: {
	            i18n: null,
	            ready: false
	        },

	        rview: null,

	        events: {
	            'click .beverage .bev-icon': 'toggleDetail'
	        },

	        initialize: function (options) {
	            var gSheetId;
	            if (options) {
	                gSheetId = options.gSheetId;
	                this.context.i18n = i18n(options.lang);
	            } else {
	                this.context.i18n = i18n();
	            }

	            if (gSheetId) {
	                this.beverages = new Beverages(null, {
	                    gSheetId: gSheetId
	                });

	                this.beverages.on('request', function () {
	                    this.context.ready = false;
	                }, this).on('sync', function () {
	                    this.context.ready = true;
	                    this.tooltip();
	                }, this).fetch();
	            } else {
	                // FIXME display an error message
	            }
	        },

	        render: function () {
	            // remove any previous binding
	            if (this.rview) {
	                this.rview.unbind();
	            }

	            // bind template to context
	            this.context.beverages = this.beverages;
	            this.rview = rivets.bind(this.$el.html(template), this.context);

	            // init tooltips
	            this.tooltip();

	            // return
	            return this;
	        },

	        /**
	         * Initializes the tooltips and popovers of the rendered page. This is set only on existing elements: the method
	         * should be called again any time a new tooltip trigger element is added to the page.
	         */
	        tooltip: function () {
	            this.$('[data-toggle="tooltip"]').tooltip();
	            this.$('[data-toggle="popover"]').popover();
	        },

	        toggleDetail: function (event) {
	            $(event.currentTarget.closest('.beverage')).toggleClass('detailed');
	        },

	        remove: function () {
	            if (this.rview) {
	                this.rview.unbind();
	            }
	            return Backbone.View.prototype.remove();
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
	var underscore = __webpack_require__(2);
	var jquery = __webpack_require__(1);

	//     Backbone.js 1.3.3

	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self === self && self) ||
	            (typeof global == 'object' && global.global === global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(1), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    try { $ = require('jquery'); } catch (e) {}
	    factory(root, exports, _, $);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	})(function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend({}, options, {validate: true}));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1};

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = {added: [], merged: [], removed: removed};
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] ||
	        this._byId[this.modelId(obj.attributes || obj)] ||
	        obj.cid && this._byId[obj.cid];
	    },

	    // Returns `true` if the model is in the collection.
	    has: function(obj) {
	      return this.get(obj) != null;
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return this.map(attr + '');
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function(model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function(eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function(eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;
	});



	/*** EXPORTS FROM exports-loader ***/
	module.exports = Backbone;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(6),
	    __webpack_require__(2),
	    __webpack_require__(1),

	    __webpack_require__(9)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (rivets, _, $) {
	    'use strict';

	    /* Make sure Array.isArray is available (should be). */
	    if (!Array.isArray) {
	        Array.isArray = function (arg) {
	            return Object.prototype.toString.call(arg) === '[object Array]';
	        };
	    }

	    /* === Arrays === */

	    rivets.formatters.join = function (array, separator) {
	        return Array.isArray(array) ? array.join(separator) : array;
	    };

	    rivets.formatters.contains = function (array, needle) {
	        return Array.isArray(array) ? _.indexOf(array, needle) > -1 : false;
	    };

	    rivets.formatters.isEmpty = function (array) {
	        return !Array.isArray(array) || array.length === 0;
	    }

	    /* === String === */

	    rivets.formatters.startWithCap = function (string) {
	        return typeof string === 'string' && string.length > 0
	            ? string.charAt(0).toUpperCase() + string.substr(1)
	            : string;
	    };

	    /* === Utils === */

	    rivets.formatters.not = function (value) {
	        return !value;
	    };

	    rivets.formatters.map = function (value, map) {
	        return value && map ? map[value] : value;
	    }

	    /* === Misc === */

	    rivets.formatters.unit = function (value, unit) {
	        return value || value === 0 ? value + unit : value;
	    };

	    /* === Custom binders === */

	    rivets.binders.addclass = function (el, value) {
	        if (el.addedClass) {
	            $(el).removeClass(el.addedClass);
	            delete el.addedClass;
	        }

	        if (value) {
	            $(el).addClass(value);
	            el.addedClass = value;
	        }
	    };

	    // Need to add a binder because rv-value="0" fails
	    rivets.binders.progress = function (el, value) {
	        el.value = value;
	        el.max = 100;
	    };

	    return rivets;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// Rivets.js
	// version: 0.8.1
	// author: Michael Richards
	// license: MIT
	(function() {
	  var Rivets, bindMethod, unbindMethod, _ref,
	    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    __slice = [].slice,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	  Rivets = {
	    options: ['prefix', 'templateDelimiters', 'rootInterface', 'preloadData', 'handler'],
	    extensions: ['binders', 'formatters', 'components', 'adapters'],
	    "public": {
	      binders: {},
	      components: {},
	      formatters: {},
	      adapters: {},
	      prefix: 'rv',
	      templateDelimiters: ['{', '}'],
	      rootInterface: '.',
	      preloadData: true,
	      handler: function(context, ev, binding) {
	        return this.call(context, ev, binding.view.models);
	      },
	      configure: function(options) {
	        var descriptor, key, option, value;
	        if (options == null) {
	          options = {};
	        }
	        for (option in options) {
	          value = options[option];
	          if (option === 'binders' || option === 'components' || option === 'formatters' || option === 'adapters') {
	            for (key in value) {
	              descriptor = value[key];
	              Rivets[option][key] = descriptor;
	            }
	          } else {
	            Rivets["public"][option] = value;
	          }
	        }
	      },
	      bind: function(el, models, options) {
	        var view;
	        if (models == null) {
	          models = {};
	        }
	        if (options == null) {
	          options = {};
	        }
	        view = new Rivets.View(el, models, options);
	        view.bind();
	        return view;
	      },
	      init: function(component, el, data) {
	        var scope, view;
	        if (data == null) {
	          data = {};
	        }
	        if (el == null) {
	          el = document.createElement('div');
	        }
	        component = Rivets["public"].components[component];
	        el.innerHTML = component.template.call(this, el);
	        scope = component.initialize.call(this, el, data);
	        view = new Rivets.View(el, scope);
	        view.bind();
	        return view;
	      }
	    }
	  };

	  if (window['jQuery'] || window['$']) {
	    _ref = 'on' in jQuery.prototype ? ['on', 'off'] : ['bind', 'unbind'], bindMethod = _ref[0], unbindMethod = _ref[1];
	    Rivets.Util = {
	      bindEvent: function(el, event, handler) {
	        return jQuery(el)[bindMethod](event, handler);
	      },
	      unbindEvent: function(el, event, handler) {
	        return jQuery(el)[unbindMethod](event, handler);
	      },
	      getInputValue: function(el) {
	        var $el;
	        $el = jQuery(el);
	        if ($el.attr('type') === 'checkbox') {
	          return $el.is(':checked');
	        } else {
	          return $el.val();
	        }
	      }
	    };
	  } else {
	    Rivets.Util = {
	      bindEvent: (function() {
	        if ('addEventListener' in window) {
	          return function(el, event, handler) {
	            return el.addEventListener(event, handler, false);
	          };
	        }
	        return function(el, event, handler) {
	          return el.attachEvent('on' + event, handler);
	        };
	      })(),
	      unbindEvent: (function() {
	        if ('removeEventListener' in window) {
	          return function(el, event, handler) {
	            return el.removeEventListener(event, handler, false);
	          };
	        }
	        return function(el, event, handler) {
	          return el.detachEvent('on' + event, handler);
	        };
	      })(),
	      getInputValue: function(el) {
	        var o, _i, _len, _results;
	        if (el.type === 'checkbox') {
	          return el.checked;
	        } else if (el.type === 'select-multiple') {
	          _results = [];
	          for (_i = 0, _len = el.length; _i < _len; _i++) {
	            o = el[_i];
	            if (o.selected) {
	              _results.push(o.value);
	            }
	          }
	          return _results;
	        } else {
	          return el.value;
	        }
	      }
	    };
	  }

	  Rivets.TypeParser = (function() {
	    function TypeParser() {}

	    TypeParser.types = {
	      primitive: 0,
	      keypath: 1
	    };

	    TypeParser.parse = function(string) {
	      if (/^'.*'$|^".*"$/.test(string)) {
	        return {
	          type: this.types.primitive,
	          value: string.slice(1, -1)
	        };
	      } else if (string === 'true') {
	        return {
	          type: this.types.primitive,
	          value: true
	        };
	      } else if (string === 'false') {
	        return {
	          type: this.types.primitive,
	          value: false
	        };
	      } else if (string === 'null') {
	        return {
	          type: this.types.primitive,
	          value: null
	        };
	      } else if (string === 'undefined') {
	        return {
	          type: this.types.primitive,
	          value: void 0
	        };
	      } else if (isNaN(Number(string)) === false) {
	        return {
	          type: this.types.primitive,
	          value: Number(string)
	        };
	      } else {
	        return {
	          type: this.types.keypath,
	          value: string
	        };
	      }
	    };

	    return TypeParser;

	  })();

	  Rivets.TextTemplateParser = (function() {
	    function TextTemplateParser() {}

	    TextTemplateParser.types = {
	      text: 0,
	      binding: 1
	    };

	    TextTemplateParser.parse = function(template, delimiters) {
	      var index, lastIndex, lastToken, length, substring, tokens, value;
	      tokens = [];
	      length = template.length;
	      index = 0;
	      lastIndex = 0;
	      while (lastIndex < length) {
	        index = template.indexOf(delimiters[0], lastIndex);
	        if (index < 0) {
	          tokens.push({
	            type: this.types.text,
	            value: template.slice(lastIndex)
	          });
	          break;
	        } else {
	          if (index > 0 && lastIndex < index) {
	            tokens.push({
	              type: this.types.text,
	              value: template.slice(lastIndex, index)
	            });
	          }
	          lastIndex = index + delimiters[0].length;
	          index = template.indexOf(delimiters[1], lastIndex);
	          if (index < 0) {
	            substring = template.slice(lastIndex - delimiters[1].length);
	            lastToken = tokens[tokens.length - 1];
	            if ((lastToken != null ? lastToken.type : void 0) === this.types.text) {
	              lastToken.value += substring;
	            } else {
	              tokens.push({
	                type: this.types.text,
	                value: substring
	              });
	            }
	            break;
	          }
	          value = template.slice(lastIndex, index).trim();
	          tokens.push({
	            type: this.types.binding,
	            value: value
	          });
	          lastIndex = index + delimiters[1].length;
	        }
	      }
	      return tokens;
	    };

	    return TextTemplateParser;

	  })();

	  Rivets.View = (function() {
	    function View(els, models, options) {
	      var k, option, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5;
	      this.els = els;
	      this.models = models;
	      if (options == null) {
	        options = {};
	      }
	      this.update = __bind(this.update, this);
	      this.publish = __bind(this.publish, this);
	      this.sync = __bind(this.sync, this);
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.select = __bind(this.select, this);
	      this.traverse = __bind(this.traverse, this);
	      this.build = __bind(this.build, this);
	      this.buildBinding = __bind(this.buildBinding, this);
	      this.bindingRegExp = __bind(this.bindingRegExp, this);
	      this.options = __bind(this.options, this);
	      if (!(this.els.jquery || this.els instanceof Array)) {
	        this.els = [this.els];
	      }
	      _ref1 = Rivets.extensions;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        option = _ref1[_i];
	        this[option] = {};
	        if (options[option]) {
	          _ref2 = options[option];
	          for (k in _ref2) {
	            v = _ref2[k];
	            this[option][k] = v;
	          }
	        }
	        _ref3 = Rivets["public"][option];
	        for (k in _ref3) {
	          v = _ref3[k];
	          if ((_base = this[option])[k] == null) {
	            _base[k] = v;
	          }
	        }
	      }
	      _ref4 = Rivets.options;
	      for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
	        option = _ref4[_j];
	        this[option] = (_ref5 = options[option]) != null ? _ref5 : Rivets["public"][option];
	      }
	      this.build();
	    }

	    View.prototype.options = function() {
	      var option, options, _i, _len, _ref1;
	      options = {};
	      _ref1 = Rivets.extensions.concat(Rivets.options);
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        option = _ref1[_i];
	        options[option] = this[option];
	      }
	      return options;
	    };

	    View.prototype.bindingRegExp = function() {
	      return new RegExp("^" + this.prefix + "-");
	    };

	    View.prototype.buildBinding = function(binding, node, type, declaration) {
	      var context, ctx, dependencies, keypath, options, pipe, pipes;
	      options = {};
	      pipes = (function() {
	        var _i, _len, _ref1, _results;
	        _ref1 = declaration.split('|');
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          pipe = _ref1[_i];
	          _results.push(pipe.trim());
	        }
	        return _results;
	      })();
	      context = (function() {
	        var _i, _len, _ref1, _results;
	        _ref1 = pipes.shift().split('<');
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          ctx = _ref1[_i];
	          _results.push(ctx.trim());
	        }
	        return _results;
	      })();
	      keypath = context.shift();
	      options.formatters = pipes;
	      if (dependencies = context.shift()) {
	        options.dependencies = dependencies.split(/\s+/);
	      }
	      return this.bindings.push(new Rivets[binding](this, node, type, keypath, options));
	    };

	    View.prototype.build = function() {
	      var el, parse, _i, _len, _ref1;
	      this.bindings = [];
	      parse = (function(_this) {
	        return function(node) {
	          var block, childNode, delimiters, n, parser, text, token, tokens, _i, _j, _len, _len1, _ref1, _results;
	          if (node.nodeType === 3) {
	            parser = Rivets.TextTemplateParser;
	            if (delimiters = _this.templateDelimiters) {
	              if ((tokens = parser.parse(node.data, delimiters)).length) {
	                if (!(tokens.length === 1 && tokens[0].type === parser.types.text)) {
	                  for (_i = 0, _len = tokens.length; _i < _len; _i++) {
	                    token = tokens[_i];
	                    text = document.createTextNode(token.value);
	                    node.parentNode.insertBefore(text, node);
	                    if (token.type === 1) {
	                      _this.buildBinding('TextBinding', text, null, token.value);
	                    }
	                  }
	                  node.parentNode.removeChild(node);
	                }
	              }
	            }
	          } else if (node.nodeType === 1) {
	            block = _this.traverse(node);
	          }
	          if (!block) {
	            _ref1 = (function() {
	              var _k, _len1, _ref1, _results1;
	              _ref1 = node.childNodes;
	              _results1 = [];
	              for (_k = 0, _len1 = _ref1.length; _k < _len1; _k++) {
	                n = _ref1[_k];
	                _results1.push(n);
	              }
	              return _results1;
	            })();
	            _results = [];
	            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	              childNode = _ref1[_j];
	              _results.push(parse(childNode));
	            }
	            return _results;
	          }
	        };
	      })(this);
	      _ref1 = this.els;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        el = _ref1[_i];
	        parse(el);
	      }
	      this.bindings.sort(function(a, b) {
	        var _ref2, _ref3;
	        return (((_ref2 = b.binder) != null ? _ref2.priority : void 0) || 0) - (((_ref3 = a.binder) != null ? _ref3.priority : void 0) || 0);
	      });
	    };

	    View.prototype.traverse = function(node) {
	      var attribute, attributes, binder, bindingRegExp, block, identifier, regexp, type, value, _i, _j, _len, _len1, _ref1, _ref2, _ref3;
	      bindingRegExp = this.bindingRegExp();
	      block = node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE';
	      _ref1 = node.attributes;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        attribute = _ref1[_i];
	        if (bindingRegExp.test(attribute.name)) {
	          type = attribute.name.replace(bindingRegExp, '');
	          if (!(binder = this.binders[type])) {
	            _ref2 = this.binders;
	            for (identifier in _ref2) {
	              value = _ref2[identifier];
	              if (identifier !== '*' && identifier.indexOf('*') !== -1) {
	                regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
	                if (regexp.test(type)) {
	                  binder = value;
	                }
	              }
	            }
	          }
	          binder || (binder = this.binders['*']);
	          if (binder.block) {
	            block = true;
	            attributes = [attribute];
	          }
	        }
	      }
	      _ref3 = attributes || node.attributes;
	      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	        attribute = _ref3[_j];
	        if (bindingRegExp.test(attribute.name)) {
	          type = attribute.name.replace(bindingRegExp, '');
	          this.buildBinding('Binding', node, type, attribute.value);
	        }
	      }
	      if (!block) {
	        type = node.nodeName.toLowerCase();
	        if (this.components[type] && !node._bound) {
	          this.bindings.push(new Rivets.ComponentBinding(this, node, type));
	          block = true;
	        }
	      }
	      return block;
	    };

	    View.prototype.select = function(fn) {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        if (fn(binding)) {
	          _results.push(binding);
	        }
	      }
	      return _results;
	    };

	    View.prototype.bind = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.bind());
	      }
	      return _results;
	    };

	    View.prototype.unbind = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.unbind());
	      }
	      return _results;
	    };

	    View.prototype.sync = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(typeof binding.sync === "function" ? binding.sync() : void 0);
	      }
	      return _results;
	    };

	    View.prototype.publish = function() {
	      var binding, _i, _len, _ref1, _results;
	      _ref1 = this.select(function(b) {
	        var _ref1;
	        return (_ref1 = b.binder) != null ? _ref1.publishes : void 0;
	      });
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(binding.publish());
	      }
	      return _results;
	    };

	    View.prototype.update = function(models) {
	      var binding, key, model, _i, _len, _ref1, _results;
	      if (models == null) {
	        models = {};
	      }
	      for (key in models) {
	        model = models[key];
	        this.models[key] = model;
	      }
	      _ref1 = this.bindings;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        binding = _ref1[_i];
	        _results.push(typeof binding.update === "function" ? binding.update(models) : void 0);
	      }
	      return _results;
	    };

	    return View;

	  })();

	  Rivets.Binding = (function() {
	    function Binding(view, el, type, keypath, options) {
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.keypath = keypath;
	      this.options = options != null ? options : {};
	      this.getValue = __bind(this.getValue, this);
	      this.update = __bind(this.update, this);
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.publish = __bind(this.publish, this);
	      this.sync = __bind(this.sync, this);
	      this.set = __bind(this.set, this);
	      this.eventHandler = __bind(this.eventHandler, this);
	      this.formattedValue = __bind(this.formattedValue, this);
	      this.parseTarget = __bind(this.parseTarget, this);
	      this.observe = __bind(this.observe, this);
	      this.setBinder = __bind(this.setBinder, this);
	      this.formatters = this.options.formatters || [];
	      this.dependencies = [];
	      this.formatterObservers = {};
	      this.model = void 0;
	      this.setBinder();
	    }

	    Binding.prototype.setBinder = function() {
	      var identifier, regexp, value, _ref1;
	      if (!(this.binder = this.view.binders[this.type])) {
	        _ref1 = this.view.binders;
	        for (identifier in _ref1) {
	          value = _ref1[identifier];
	          if (identifier !== '*' && identifier.indexOf('*') !== -1) {
	            regexp = new RegExp("^" + (identifier.replace(/\*/g, '.+')) + "$");
	            if (regexp.test(this.type)) {
	              this.binder = value;
	              this.args = new RegExp("^" + (identifier.replace(/\*/g, '(.+)')) + "$").exec(this.type);
	              this.args.shift();
	            }
	          }
	        }
	      }
	      this.binder || (this.binder = this.view.binders['*']);
	      if (this.binder instanceof Function) {
	        return this.binder = {
	          routine: this.binder
	        };
	      }
	    };

	    Binding.prototype.observe = function(obj, keypath, callback) {
	      return Rivets.sightglass(obj, keypath, callback, {
	        root: this.view.rootInterface,
	        adapters: this.view.adapters
	      });
	    };

	    Binding.prototype.parseTarget = function() {
	      var token;
	      token = Rivets.TypeParser.parse(this.keypath);
	      if (token.type === 0) {
	        return this.value = token.value;
	      } else {
	        this.observer = this.observe(this.view.models, this.keypath, this.sync);
	        return this.model = this.observer.target;
	      }
	    };

	    Binding.prototype.formattedValue = function(value) {
	      var ai, arg, args, fi, formatter, id, observer, processedArgs, _base, _i, _j, _len, _len1, _ref1;
	      _ref1 = this.formatters;
	      for (fi = _i = 0, _len = _ref1.length; _i < _len; fi = ++_i) {
	        formatter = _ref1[fi];
	        args = formatter.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g);
	        id = args.shift();
	        formatter = this.view.formatters[id];
	        args = (function() {
	          var _j, _len1, _results;
	          _results = [];
	          for (_j = 0, _len1 = args.length; _j < _len1; _j++) {
	            arg = args[_j];
	            _results.push(Rivets.TypeParser.parse(arg));
	          }
	          return _results;
	        })();
	        processedArgs = [];
	        for (ai = _j = 0, _len1 = args.length; _j < _len1; ai = ++_j) {
	          arg = args[ai];
	          processedArgs.push(arg.type === 0 ? arg.value : ((_base = this.formatterObservers)[fi] || (_base[fi] = {}), !(observer = this.formatterObservers[fi][ai]) ? (observer = this.observe(this.view.models, arg.value, this.sync), this.formatterObservers[fi][ai] = observer) : void 0, observer.value()));
	        }
	        if ((formatter != null ? formatter.read : void 0) instanceof Function) {
	          value = formatter.read.apply(formatter, [value].concat(__slice.call(processedArgs)));
	        } else if (formatter instanceof Function) {
	          value = formatter.apply(null, [value].concat(__slice.call(processedArgs)));
	        }
	      }
	      return value;
	    };

	    Binding.prototype.eventHandler = function(fn) {
	      var binding, handler;
	      handler = (binding = this).view.handler;
	      return function(ev) {
	        return handler.call(fn, this, ev, binding);
	      };
	    };

	    Binding.prototype.set = function(value) {
	      var _ref1;
	      value = value instanceof Function && !this.binder["function"] ? this.formattedValue(value.call(this.model)) : this.formattedValue(value);
	      return (_ref1 = this.binder.routine) != null ? _ref1.call(this, this.el, value) : void 0;
	    };

	    Binding.prototype.sync = function() {
	      var dependency, observer;
	      return this.set((function() {
	        var _i, _j, _len, _len1, _ref1, _ref2, _ref3;
	        if (this.observer) {
	          if (this.model !== this.observer.target) {
	            _ref1 = this.dependencies;
	            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	              observer = _ref1[_i];
	              observer.unobserve();
	            }
	            this.dependencies = [];
	            if (((this.model = this.observer.target) != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
	              _ref3 = this.options.dependencies;
	              for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
	                dependency = _ref3[_j];
	                observer = this.observe(this.model, dependency, this.sync);
	                this.dependencies.push(observer);
	              }
	            }
	          }
	          return this.observer.value();
	        } else {
	          return this.value;
	        }
	      }).call(this));
	    };

	    Binding.prototype.publish = function() {
	      var args, formatter, id, value, _i, _len, _ref1, _ref2, _ref3;
	      if (this.observer) {
	        value = this.getValue(this.el);
	        _ref1 = this.formatters.slice(0).reverse();
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          formatter = _ref1[_i];
	          args = formatter.split(/\s+/);
	          id = args.shift();
	          if ((_ref2 = this.view.formatters[id]) != null ? _ref2.publish : void 0) {
	            value = (_ref3 = this.view.formatters[id]).publish.apply(_ref3, [value].concat(__slice.call(args)));
	          }
	        }
	        return this.observer.setValue(value);
	      }
	    };

	    Binding.prototype.bind = function() {
	      var dependency, observer, _i, _len, _ref1, _ref2, _ref3;
	      this.parseTarget();
	      if ((_ref1 = this.binder.bind) != null) {
	        _ref1.call(this, this.el);
	      }
	      if ((this.model != null) && ((_ref2 = this.options.dependencies) != null ? _ref2.length : void 0)) {
	        _ref3 = this.options.dependencies;
	        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	          dependency = _ref3[_i];
	          observer = this.observe(this.model, dependency, this.sync);
	          this.dependencies.push(observer);
	        }
	      }
	      if (this.view.preloadData) {
	        return this.sync();
	      }
	    };

	    Binding.prototype.unbind = function() {
	      var ai, args, fi, observer, _i, _len, _ref1, _ref2, _ref3, _ref4;
	      if ((_ref1 = this.binder.unbind) != null) {
	        _ref1.call(this, this.el);
	      }
	      if ((_ref2 = this.observer) != null) {
	        _ref2.unobserve();
	      }
	      _ref3 = this.dependencies;
	      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
	        observer = _ref3[_i];
	        observer.unobserve();
	      }
	      this.dependencies = [];
	      _ref4 = this.formatterObservers;
	      for (fi in _ref4) {
	        args = _ref4[fi];
	        for (ai in args) {
	          observer = args[ai];
	          observer.unobserve();
	        }
	      }
	      return this.formatterObservers = {};
	    };

	    Binding.prototype.update = function(models) {
	      var _ref1, _ref2;
	      if (models == null) {
	        models = {};
	      }
	      this.model = (_ref1 = this.observer) != null ? _ref1.target : void 0;
	      return (_ref2 = this.binder.update) != null ? _ref2.call(this, models) : void 0;
	    };

	    Binding.prototype.getValue = function(el) {
	      if (this.binder && (this.binder.getValue != null)) {
	        return this.binder.getValue.call(this, el);
	      } else {
	        return Rivets.Util.getInputValue(el);
	      }
	    };

	    return Binding;

	  })();

	  Rivets.ComponentBinding = (function(_super) {
	    __extends(ComponentBinding, _super);

	    function ComponentBinding(view, el, type) {
	      var attribute, bindingRegExp, propertyName, _i, _len, _ref1, _ref2;
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.unbind = __bind(this.unbind, this);
	      this.bind = __bind(this.bind, this);
	      this.locals = __bind(this.locals, this);
	      this.component = this.view.components[this.type];
	      this["static"] = {};
	      this.observers = {};
	      this.upstreamObservers = {};
	      bindingRegExp = view.bindingRegExp();
	      _ref1 = this.el.attributes || [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        attribute = _ref1[_i];
	        if (!bindingRegExp.test(attribute.name)) {
	          propertyName = this.camelCase(attribute.name);
	          if (__indexOf.call((_ref2 = this.component["static"]) != null ? _ref2 : [], propertyName) >= 0) {
	            this["static"][propertyName] = attribute.value;
	          } else {
	            this.observers[propertyName] = attribute.value;
	          }
	        }
	      }
	    }

	    ComponentBinding.prototype.sync = function() {};

	    ComponentBinding.prototype.update = function() {};

	    ComponentBinding.prototype.publish = function() {};

	    ComponentBinding.prototype.locals = function() {
	      var key, observer, result, value, _ref1, _ref2;
	      result = {};
	      _ref1 = this["static"];
	      for (key in _ref1) {
	        value = _ref1[key];
	        result[key] = value;
	      }
	      _ref2 = this.observers;
	      for (key in _ref2) {
	        observer = _ref2[key];
	        result[key] = observer.value();
	      }
	      return result;
	    };

	    ComponentBinding.prototype.camelCase = function(string) {
	      return string.replace(/-([a-z])/g, function(grouped) {
	        return grouped[1].toUpperCase();
	      });
	    };

	    ComponentBinding.prototype.bind = function() {
	      var k, key, keypath, observer, option, options, scope, v, _base, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _results;
	      if (!this.bound) {
	        _ref1 = this.observers;
	        for (key in _ref1) {
	          keypath = _ref1[key];
	          this.observers[key] = this.observe(this.view.models, keypath, ((function(_this) {
	            return function(key) {
	              return function() {
	                return _this.componentView.models[key] = _this.observers[key].value();
	              };
	            };
	          })(this)).call(this, key));
	        }
	        this.bound = true;
	      }
	      if (this.componentView != null) {
	        return this.componentView.bind();
	      } else {
	        this.el.innerHTML = this.component.template.call(this);
	        scope = this.component.initialize.call(this, this.el, this.locals());
	        this.el._bound = true;
	        options = {};
	        _ref2 = Rivets.extensions;
	        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
	          option = _ref2[_i];
	          options[option] = {};
	          if (this.component[option]) {
	            _ref3 = this.component[option];
	            for (k in _ref3) {
	              v = _ref3[k];
	              options[option][k] = v;
	            }
	          }
	          _ref4 = this.view[option];
	          for (k in _ref4) {
	            v = _ref4[k];
	            if ((_base = options[option])[k] == null) {
	              _base[k] = v;
	            }
	          }
	        }
	        _ref5 = Rivets.options;
	        for (_j = 0, _len1 = _ref5.length; _j < _len1; _j++) {
	          option = _ref5[_j];
	          options[option] = (_ref6 = this.component[option]) != null ? _ref6 : this.view[option];
	        }
	        this.componentView = new Rivets.View(this.el, scope, options);
	        this.componentView.bind();
	        _ref7 = this.observers;
	        _results = [];
	        for (key in _ref7) {
	          observer = _ref7[key];
	          _results.push(this.upstreamObservers[key] = this.observe(this.componentView.models, key, ((function(_this) {
	            return function(key, observer) {
	              return function() {
	                return observer.setValue(_this.componentView.models[key]);
	              };
	            };
	          })(this)).call(this, key, observer)));
	        }
	        return _results;
	      }
	    };

	    ComponentBinding.prototype.unbind = function() {
	      var key, observer, _ref1, _ref2, _ref3;
	      _ref1 = this.upstreamObservers;
	      for (key in _ref1) {
	        observer = _ref1[key];
	        observer.unobserve();
	      }
	      _ref2 = this.observers;
	      for (key in _ref2) {
	        observer = _ref2[key];
	        observer.unobserve();
	      }
	      return (_ref3 = this.componentView) != null ? _ref3.unbind.call(this) : void 0;
	    };

	    return ComponentBinding;

	  })(Rivets.Binding);

	  Rivets.TextBinding = (function(_super) {
	    __extends(TextBinding, _super);

	    function TextBinding(view, el, type, keypath, options) {
	      this.view = view;
	      this.el = el;
	      this.type = type;
	      this.keypath = keypath;
	      this.options = options != null ? options : {};
	      this.sync = __bind(this.sync, this);
	      this.formatters = this.options.formatters || [];
	      this.dependencies = [];
	      this.formatterObservers = {};
	    }

	    TextBinding.prototype.binder = {
	      routine: function(node, value) {
	        return node.data = value != null ? value : '';
	      }
	    };

	    TextBinding.prototype.sync = function() {
	      return TextBinding.__super__.sync.apply(this, arguments);
	    };

	    return TextBinding;

	  })(Rivets.Binding);

	  Rivets["public"].binders.text = function(el, value) {
	    if (el.textContent != null) {
	      return el.textContent = value != null ? value : '';
	    } else {
	      return el.innerText = value != null ? value : '';
	    }
	  };

	  Rivets["public"].binders.html = function(el, value) {
	    return el.innerHTML = value != null ? value : '';
	  };

	  Rivets["public"].binders.show = function(el, value) {
	    return el.style.display = value ? '' : 'none';
	  };

	  Rivets["public"].binders.hide = function(el, value) {
	    return el.style.display = value ? 'none' : '';
	  };

	  Rivets["public"].binders.enabled = function(el, value) {
	    return el.disabled = !value;
	  };

	  Rivets["public"].binders.disabled = function(el, value) {
	    return el.disabled = !!value;
	  };

	  Rivets["public"].binders.checked = {
	    publishes: true,
	    priority: 2000,
	    bind: function(el) {
	      return Rivets.Util.bindEvent(el, 'change', this.publish);
	    },
	    unbind: function(el) {
	      return Rivets.Util.unbindEvent(el, 'change', this.publish);
	    },
	    routine: function(el, value) {
	      var _ref1;
	      if (el.type === 'radio') {
	        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) === (value != null ? value.toString() : void 0);
	      } else {
	        return el.checked = !!value;
	      }
	    }
	  };

	  Rivets["public"].binders.unchecked = {
	    publishes: true,
	    priority: 2000,
	    bind: function(el) {
	      return Rivets.Util.bindEvent(el, 'change', this.publish);
	    },
	    unbind: function(el) {
	      return Rivets.Util.unbindEvent(el, 'change', this.publish);
	    },
	    routine: function(el, value) {
	      var _ref1;
	      if (el.type === 'radio') {
	        return el.checked = ((_ref1 = el.value) != null ? _ref1.toString() : void 0) !== (value != null ? value.toString() : void 0);
	      } else {
	        return el.checked = !value;
	      }
	    }
	  };

	  Rivets["public"].binders.value = {
	    publishes: true,
	    priority: 3000,
	    bind: function(el) {
	      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
	        this.event = el.tagName === 'SELECT' ? 'change' : 'input';
	        return Rivets.Util.bindEvent(el, this.event, this.publish);
	      }
	    },
	    unbind: function(el) {
	      if (!(el.tagName === 'INPUT' && el.type === 'radio')) {
	        return Rivets.Util.unbindEvent(el, this.event, this.publish);
	      }
	    },
	    routine: function(el, value) {
	      var o, _i, _len, _ref1, _ref2, _ref3, _results;
	      if (el.tagName === 'INPUT' && el.type === 'radio') {
	        return el.setAttribute('value', value);
	      } else if (window.jQuery != null) {
	        el = jQuery(el);
	        if ((value != null ? value.toString() : void 0) !== ((_ref1 = el.val()) != null ? _ref1.toString() : void 0)) {
	          return el.val(value != null ? value : '');
	        }
	      } else {
	        if (el.type === 'select-multiple') {
	          if (value != null) {
	            _results = [];
	            for (_i = 0, _len = el.length; _i < _len; _i++) {
	              o = el[_i];
	              _results.push(o.selected = (_ref2 = o.value, __indexOf.call(value, _ref2) >= 0));
	            }
	            return _results;
	          }
	        } else if ((value != null ? value.toString() : void 0) !== ((_ref3 = el.value) != null ? _ref3.toString() : void 0)) {
	          return el.value = value != null ? value : '';
	        }
	      }
	    }
	  };

	  Rivets["public"].binders["if"] = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      var attr, declaration;
	      if (this.marker == null) {
	        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
	        declaration = el.getAttribute(attr);
	        this.marker = document.createComment(" rivets: " + this.type + " " + declaration + " ");
	        this.bound = false;
	        el.removeAttribute(attr);
	        el.parentNode.insertBefore(this.marker, el);
	        return el.parentNode.removeChild(el);
	      }
	    },
	    unbind: function() {
	      var _ref1;
	      return (_ref1 = this.nested) != null ? _ref1.unbind() : void 0;
	    },
	    routine: function(el, value) {
	      var key, model, models, _ref1;
	      if (!!value === !this.bound) {
	        if (value) {
	          models = {};
	          _ref1 = this.view.models;
	          for (key in _ref1) {
	            model = _ref1[key];
	            models[key] = model;
	          }
	          (this.nested || (this.nested = new Rivets.View(el, models, this.view.options()))).bind();
	          this.marker.parentNode.insertBefore(el, this.marker.nextSibling);
	          return this.bound = true;
	        } else {
	          el.parentNode.removeChild(el);
	          this.nested.unbind();
	          return this.bound = false;
	        }
	      }
	    },
	    update: function(models) {
	      var _ref1;
	      return (_ref1 = this.nested) != null ? _ref1.update(models) : void 0;
	    }
	  };

	  Rivets["public"].binders.unless = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      return Rivets["public"].binders["if"].bind.call(this, el);
	    },
	    unbind: function() {
	      return Rivets["public"].binders["if"].unbind.call(this);
	    },
	    routine: function(el, value) {
	      return Rivets["public"].binders["if"].routine.call(this, el, !value);
	    },
	    update: function(models) {
	      return Rivets["public"].binders["if"].update.call(this, models);
	    }
	  };

	  Rivets["public"].binders['on-*'] = {
	    "function": true,
	    priority: 1000,
	    unbind: function(el) {
	      if (this.handler) {
	        return Rivets.Util.unbindEvent(el, this.args[0], this.handler);
	      }
	    },
	    routine: function(el, value) {
	      if (this.handler) {
	        Rivets.Util.unbindEvent(el, this.args[0], this.handler);
	      }
	      return Rivets.Util.bindEvent(el, this.args[0], this.handler = this.eventHandler(value));
	    }
	  };

	  Rivets["public"].binders['each-*'] = {
	    block: true,
	    priority: 4000,
	    bind: function(el) {
	      var attr, view, _i, _len, _ref1;
	      if (this.marker == null) {
	        attr = [this.view.prefix, this.type].join('-').replace('--', '-');
	        this.marker = document.createComment(" rivets: " + this.type + " ");
	        this.iterated = [];
	        el.removeAttribute(attr);
	        el.parentNode.insertBefore(this.marker, el);
	        el.parentNode.removeChild(el);
	      } else {
	        _ref1 = this.iterated;
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          view = _ref1[_i];
	          view.bind();
	        }
	      }
	    },
	    unbind: function(el) {
	      var view, _i, _len, _ref1, _results;
	      if (this.iterated != null) {
	        _ref1 = this.iterated;
	        _results = [];
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          view = _ref1[_i];
	          _results.push(view.unbind());
	        }
	        return _results;
	      }
	    },
	    routine: function(el, collection) {
	      var binding, data, i, index, key, model, modelName, options, previous, template, view, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _ref3, _results;
	      modelName = this.args[0];
	      collection = collection || [];
	      if (this.iterated.length > collection.length) {
	        _ref1 = Array(this.iterated.length - collection.length);
	        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	          i = _ref1[_i];
	          view = this.iterated.pop();
	          view.unbind();
	          this.marker.parentNode.removeChild(view.els[0]);
	        }
	      }
	      for (index = _j = 0, _len1 = collection.length; _j < _len1; index = ++_j) {
	        model = collection[index];
	        data = {
	          index: index
	        };
	        data[modelName] = model;
	        if (this.iterated[index] == null) {
	          _ref2 = this.view.models;
	          for (key in _ref2) {
	            model = _ref2[key];
	            if (data[key] == null) {
	              data[key] = model;
	            }
	          }
	          previous = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker;
	          options = this.view.options();
	          options.preloadData = true;
	          template = el.cloneNode(true);
	          view = new Rivets.View(template, data, options);
	          view.bind();
	          this.iterated.push(view);
	          this.marker.parentNode.insertBefore(template, previous.nextSibling);
	        } else if (this.iterated[index].models[modelName] !== model) {
	          this.iterated[index].update(data);
	        }
	      }
	      if (el.nodeName === 'OPTION') {
	        _ref3 = this.view.bindings;
	        _results = [];
	        for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
	          binding = _ref3[_k];
	          if (binding.el === this.marker.parentNode && binding.type === 'value') {
	            _results.push(binding.sync());
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      }
	    },
	    update: function(models) {
	      var data, key, model, view, _i, _len, _ref1, _results;
	      data = {};
	      for (key in models) {
	        model = models[key];
	        if (key !== this.args[0]) {
	          data[key] = model;
	        }
	      }
	      _ref1 = this.iterated;
	      _results = [];
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        view = _ref1[_i];
	        _results.push(view.update(data));
	      }
	      return _results;
	    }
	  };

	  Rivets["public"].binders['class-*'] = function(el, value) {
	    var elClass;
	    elClass = " " + el.className + " ";
	    if (!value === (elClass.indexOf(" " + this.args[0] + " ") !== -1)) {
	      return el.className = value ? "" + el.className + " " + this.args[0] : elClass.replace(" " + this.args[0] + " ", ' ').trim();
	    }
	  };

	  Rivets["public"].binders['*'] = function(el, value) {
	    if (value != null) {
	      return el.setAttribute(this.type, value);
	    } else {
	      return el.removeAttribute(this.type);
	    }
	  };

	  Rivets["public"].adapters['.'] = {
	    id: '_rv',
	    counter: 0,
	    weakmap: {},
	    weakReference: function(obj) {
	      var id, _base, _name;
	      if (!obj.hasOwnProperty(this.id)) {
	        id = this.counter++;
	        Object.defineProperty(obj, this.id, {
	          value: id
	        });
	      }
	      return (_base = this.weakmap)[_name = obj[this.id]] || (_base[_name] = {
	        callbacks: {}
	      });
	    },
	    cleanupWeakReference: function(ref, id) {
	      if (!Object.keys(ref.callbacks).length) {
	        if (!(ref.pointers && Object.keys(ref.pointers).length)) {
	          return delete this.weakmap[id];
	        }
	      }
	    },
	    stubFunction: function(obj, fn) {
	      var map, original, weakmap;
	      original = obj[fn];
	      map = this.weakReference(obj);
	      weakmap = this.weakmap;
	      return obj[fn] = function() {
	        var callback, k, r, response, _i, _len, _ref1, _ref2, _ref3, _ref4;
	        response = original.apply(obj, arguments);
	        _ref1 = map.pointers;
	        for (r in _ref1) {
	          k = _ref1[r];
	          _ref4 = (_ref2 = (_ref3 = weakmap[r]) != null ? _ref3.callbacks[k] : void 0) != null ? _ref2 : [];
	          for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
	            callback = _ref4[_i];
	            callback();
	          }
	        }
	        return response;
	      };
	    },
	    observeMutations: function(obj, ref, keypath) {
	      var fn, functions, map, _base, _i, _len;
	      if (Array.isArray(obj)) {
	        map = this.weakReference(obj);
	        if (map.pointers == null) {
	          map.pointers = {};
	          functions = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice'];
	          for (_i = 0, _len = functions.length; _i < _len; _i++) {
	            fn = functions[_i];
	            this.stubFunction(obj, fn);
	          }
	        }
	        if ((_base = map.pointers)[ref] == null) {
	          _base[ref] = [];
	        }
	        if (__indexOf.call(map.pointers[ref], keypath) < 0) {
	          return map.pointers[ref].push(keypath);
	        }
	      }
	    },
	    unobserveMutations: function(obj, ref, keypath) {
	      var idx, map, pointers;
	      if (Array.isArray(obj) && (obj[this.id] != null)) {
	        if (map = this.weakmap[obj[this.id]]) {
	          if (pointers = map.pointers[ref]) {
	            if ((idx = pointers.indexOf(keypath)) >= 0) {
	              pointers.splice(idx, 1);
	            }
	            if (!pointers.length) {
	              delete map.pointers[ref];
	            }
	            return this.cleanupWeakReference(map, obj[this.id]);
	          }
	        }
	      }
	    },
	    observe: function(obj, keypath, callback) {
	      var callbacks, desc, value;
	      callbacks = this.weakReference(obj).callbacks;
	      if (callbacks[keypath] == null) {
	        callbacks[keypath] = [];
	        desc = Object.getOwnPropertyDescriptor(obj, keypath);
	        if (!((desc != null ? desc.get : void 0) || (desc != null ? desc.set : void 0))) {
	          value = obj[keypath];
	          Object.defineProperty(obj, keypath, {
	            enumerable: true,
	            get: function() {
	              return value;
	            },
	            set: (function(_this) {
	              return function(newValue) {
	                var map, _i, _len, _ref1;
	                if (newValue !== value) {
	                  _this.unobserveMutations(value, obj[_this.id], keypath);
	                  value = newValue;
	                  if (map = _this.weakmap[obj[_this.id]]) {
	                    callbacks = map.callbacks;
	                    if (callbacks[keypath]) {
	                      _ref1 = callbacks[keypath].slice();
	                      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	                        callback = _ref1[_i];
	                        if (__indexOf.call(callbacks[keypath], callback) >= 0) {
	                          callback();
	                        }
	                      }
	                    }
	                    return _this.observeMutations(newValue, obj[_this.id], keypath);
	                  }
	                }
	              };
	            })(this)
	          });
	        }
	      }
	      if (__indexOf.call(callbacks[keypath], callback) < 0) {
	        callbacks[keypath].push(callback);
	      }
	      return this.observeMutations(obj[keypath], obj[this.id], keypath);
	    },
	    unobserve: function(obj, keypath, callback) {
	      var callbacks, idx, map;
	      if (map = this.weakmap[obj[this.id]]) {
	        if (callbacks = map.callbacks[keypath]) {
	          if ((idx = callbacks.indexOf(callback)) >= 0) {
	            callbacks.splice(idx, 1);
	            if (!callbacks.length) {
	              delete map.callbacks[keypath];
	            }
	          }
	          this.unobserveMutations(obj[keypath], obj[this.id], keypath);
	          return this.cleanupWeakReference(map, obj[this.id]);
	        }
	      }
	    },
	    get: function(obj, keypath) {
	      return obj[keypath];
	    },
	    set: function(obj, keypath, value) {
	      return obj[keypath] = value;
	    }
	  };

	  Rivets.factory = function(sightglass) {
	    Rivets.sightglass = sightglass;
	    Rivets["public"]._ = Rivets;
	    return Rivets["public"];
	  };

	  if (typeof (typeof module !== "undefined" && module !== null ? module.exports : void 0) === 'object') {
	    module.exports = Rivets.factory(__webpack_require__(8));
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function(sightglass) {
	      return this.rivets = Rivets.factory(sightglass);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    this.rivets = Rivets.factory(sightglass);
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
	  // Public sightglass interface.
	  function sightglass(obj, keypath, callback, options) {
	    return new Observer(obj, keypath, callback, options)
	  }

	  // Batteries not included.
	  sightglass.adapters = {}

	  // Constructs a new keypath observer and kicks things off.
	  function Observer(obj, keypath, callback, options) {
	    this.options = options || {}
	    this.options.adapters = this.options.adapters || {}
	    this.obj = obj
	    this.keypath = keypath
	    this.callback = callback
	    this.objectPath = []
	    this.update = this.update.bind(this)
	    this.parse()

	    if (isObject(this.target = this.realize())) {
	      this.set(true, this.key, this.target, this.callback)
	    }
	  }

	  // Tokenizes the provided keypath string into interface + path tokens for the
	  // observer to work with.
	  Observer.tokenize = function(keypath, interfaces, root) {
	    var tokens = []
	    var current = {i: root, path: ''}
	    var index, chr

	    for (index = 0; index < keypath.length; index++) {
	      chr = keypath.charAt(index)

	      if (!!~interfaces.indexOf(chr)) {
	        tokens.push(current)
	        current = {i: chr, path: ''}
	      } else {
	        current.path += chr
	      }
	    }

	    tokens.push(current)
	    return tokens
	  }

	  // Parses the keypath using the interfaces defined on the view. Sets variables
	  // for the tokenized keypath as well as the end key.
	  Observer.prototype.parse = function() {
	    var interfaces = this.interfaces()
	    var root, path

	    if (!interfaces.length) {
	      error('Must define at least one adapter interface.')
	    }

	    if (!!~interfaces.indexOf(this.keypath[0])) {
	      root = this.keypath[0]
	      path = this.keypath.substr(1)
	    } else {
	      if (typeof (root = this.options.root || sightglass.root) === 'undefined') {
	        error('Must define a default root adapter.')
	      }

	      path = this.keypath
	    }

	    this.tokens = Observer.tokenize(path, interfaces, root)
	    this.key = this.tokens.pop()
	  }

	  // Realizes the full keypath, attaching observers for every key and correcting
	  // old observers to any changed objects in the keypath.
	  Observer.prototype.realize = function() {
	    var current = this.obj
	    var unreached = false
	    var prev

	    this.tokens.forEach(function(token, index) {
	      if (isObject(current)) {
	        if (typeof this.objectPath[index] !== 'undefined') {
	          if (current !== (prev = this.objectPath[index])) {
	            this.set(false, token, prev, this.update)
	            this.set(true, token, current, this.update)
	            this.objectPath[index] = current
	          }
	        } else {
	          this.set(true, token, current, this.update)
	          this.objectPath[index] = current
	        }

	        current = this.get(token, current)
	      } else {
	        if (unreached === false) {
	          unreached = index
	        }

	        if (prev = this.objectPath[index]) {
	          this.set(false, token, prev, this.update)
	        }
	      }
	    }, this)

	    if (unreached !== false) {
	      this.objectPath.splice(unreached)
	    }

	    return current
	  }

	  // Updates the keypath. This is called when any intermediary key is changed.
	  Observer.prototype.update = function() {
	    var next, oldValue

	    if ((next = this.realize()) !== this.target) {
	      if (isObject(this.target)) {
	        this.set(false, this.key, this.target, this.callback)
	      }

	      if (isObject(next)) {
	        this.set(true, this.key, next, this.callback)
	      }

	      oldValue = this.value()
	      this.target = next

	      if (this.value() !== oldValue) this.callback()
	    }
	  }

	  // Reads the current end value of the observed keypath. Returns undefined if
	  // the full keypath is unreachable.
	  Observer.prototype.value = function() {
	    if (isObject(this.target)) {
	      return this.get(this.key, this.target)
	    }
	  }

	  // Sets the current end value of the observed keypath. Calling setValue when
	  // the full keypath is unreachable is a no-op.
	  Observer.prototype.setValue = function(value) {
	    if (isObject(this.target)) {
	      this.adapter(this.key).set(this.target, this.key.path, value)
	    }
	  }

	  // Gets the provided key on an object.
	  Observer.prototype.get = function(key, obj) {
	    return this.adapter(key).get(obj, key.path)
	  }

	  // Observes or unobserves a callback on the object using the provided key.
	  Observer.prototype.set = function(active, key, obj, callback) {
	    var action = active ? 'observe' : 'unobserve'
	    this.adapter(key)[action](obj, key.path, callback)
	  }

	  // Returns an array of all unique adapter interfaces available.
	  Observer.prototype.interfaces = function() {
	    var interfaces = Object.keys(this.options.adapters)

	    Object.keys(sightglass.adapters).forEach(function(i) {
	      if (!~interfaces.indexOf(i)) {
	        interfaces.push(i)
	      }
	    })

	    return interfaces
	  }

	  // Convenience function to grab the adapter for a specific key.
	  Observer.prototype.adapter = function(key) {
	    return this.options.adapters[key.i] ||
	      sightglass.adapters[key.i]
	  }

	  // Unobserves the entire keypath.
	  Observer.prototype.unobserve = function() {
	    var obj

	    this.tokens.forEach(function(token, index) {
	      if (obj = this.objectPath[index]) {
	        this.set(false, token, obj, this.update)
	      }
	    }, this)

	    if (isObject(this.target)) {
	      this.set(false, this.key, this.target, this.callback)
	    }
	  }

	  // Check if a value is an object than can be observed.
	  function isObject(obj) {
	    return typeof obj === 'object' && obj !== null
	  }

	  // Error thrower.
	  function error(message) {
	    throw new Error('[sightglass] ' + message)
	  }

	  // Export module for Node and the browser.
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = sightglass
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return this.sightglass = sightglass
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    this.sightglass = sightglass
	  }
	}).call(this);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var underscore = __webpack_require__(2);
	var jquery = __webpack_require__(1);

	/* global define: true */
	(function (root, factory) {
	    'use strict';
	    if (true) {
	        // CommonJS
	        factory(__webpack_require__(6), __webpack_require__(4));
	    } else if (typeof define === 'function' && define.amd) {
	        // AMD. Register as an anonymous module.
	        define(['rivets', 'backbone'], factory);
	    } else {
	        // Browser globals
	        factory(root.rivets, root.Backbone);
	    }
	})
	(this, function (rivets, Backbone) {
	    'use strict';

	    var Model = Backbone.Model,
	        Collection = Backbone.Collection;

	    /**
	     * @param {Model}  model
	     * @param {String} keypath
	     * @param {*}      [value]
	     *
	     * @returns {*}
	     */
	    function getterSetter(obj, keypath, value) {
	        if (!(obj instanceof Model) && !(obj instanceof Collection)) {
	            return;
	        }

	        if (arguments.length === 3) {
	            if (keypath === '*') {
	                // setting all attributes
	                // value should be an Object
	                obj.set(value);
	                return;
	            }
	            // setting the only attribute
	            obj.set(keypath, value);
	            return;
	        }

	        if (keypath === '*') {
	            // all attributes
	            value = obj.attributes;
	        } else {
	            // one attribute
	            value = obj.get(keypath);
	        }

	        // rivets cant iterate over Backbone.Collection -> return Array
	        if (value instanceof Collection) {
	            return value.models;
	        }

	        return value;
	    }

	    /**
	     * @param {String} action on or off
	     * @returns {Function}
	     */
	    function onOffFactory(action) {

	        /**
	         * @param {Model}    model
	         * @param {String}   keypath
	         * @param {Function} callback
	         */
	        return function (model, keypath, callback) {
	            if (!(model instanceof Model)) {
	                return;
	            }

	            var value = model.get(keypath);

	            var eventName = 'change' + (keypath === '*' ? '' : (':' + keypath));
	            model[action](eventName, callback);

	            if (value instanceof Collection) {
	                value[action]('add remove reset sort', callback);
	            }
	        };
	    }

	    // Configure rivets data-bind for Backbone.js
	    rivets.adapters[':'] = {
	        observe: onOffFactory('on'),
	        unobserve: onOffFactory('off'),
	        get: getterSetter,
	        set: getterSetter
	    };

	    return rivets;
	});



	/*** EXPORTS FROM exports-loader ***/
	module.exports = Backbone;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\">\n    <div rv-hide=\"ready\" class=\"card card-block\">\n        <i class=\"icon-loading\"></i> {i18n.loading}\n    </div>\n    <table class=\"table table-hover\">\n        <tbody>\n        <tr rv-each-b=\"beverages.models\">\n            <td>\n                <div class=\"beverage\">\n                    <div class=\"headers\">\n                        <span class=\"bev-icon\" rv-addclass=\"b:basis\"\n                              data-toggle=\"tooltip\" data-placement=\"right\"\n                              rv-class-packaged=\"b:packaged\"\n                              rv-title=\"b:basis | map i18n.basis\">\n                            <i class=\"bev-icon-back\"></i>\n                            <i class=\"bev-icon-front\"></i>\n                        </span>\n                        <div class=\"name\">{b:name}</div>\n                        <div class=\"brand\">{b:brand}</div>\n                    </div>\n                    <div class=\"more\">\n                        <div class=\"benefits\" rv-class-hide=\"b:benefits | isEmpty | not\">\n                            {b:benefits | join ', ' | startWithCap}\n                        </div>\n                        <div class=\"note\" rv-if=\"b:note\">\n                            <button class=\"btn btn-plain\" data-toggle=\"popover\" data-trigger=\"focus\"\n                                    rv-data-content=\"b:note\">\n                                <i class=\"icon-note\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"strength\">\n                        <div class=\"moment\">\n                            <ul>\n                                <li rv-class-text-muted=\"b:time.morning | not\">\n                                    <i class=\"icon-morning\" rv-title=\"i18n.moment.morning\"\n                                       data-toggle=\"tooltip\" data-placement=\"bottom\"></i>\n                                </li>\n                                <li rv-class-text-muted=\"b:time.daytime | not\">\n                                    <i class=\"icon-daytime\" rv-title=\"i18n.moment.daytime\"\n                                       data-toggle=\"tooltip\" data-placement=\"bottom\"></i>\n                                </li>\n                                <li rv-class-text-muted=\"b:time.evening | not\">\n                                    <i class=\"icon-evening\" rv-title=\"i18n.moment.evening\"\n                                       data-toggle=\"tooltip\" data-placement=\"bottom\"></i>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"theine-level\">\n                            <progress rv-progress=\"b:theine | theineLevel100\" rv-addclass=\"b:theine\">\n                                {i18n.theine.content}{i18n.typo.colon} {b:theine | map i18n.theine}\n                            </progress>\n                        </div>\n                    </div>\n                    <div class=\"preparation\">\n                        <div rv-class-invisible=\"b:preparation.temp | showMinMax | not\">\n                            <i class=\"icon-temp\"></i> {b:preparation.temp | minMax ' - ' | unit '&deg;C'}\n                        </div>\n                        <div rv-class-invisible=\"b:preparation.time | showMinMax | not\">\n                            <i class=\"icon-time\"></i> {b:preparation.time | minMax ' - ' | unit '&nbsp;min'}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <small class=\"text-muted\">{b:ingredients | join ', ' | startWithCap}</small>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4),
	    __webpack_require__(12)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (Backbone, Beverage) {
	    'use strict';

	    var beverageOrder = {
	        'tea-black': 0,
	        'tea-green': 1,
	        'tea-oolong': 1,
	        'tea-white': 2,
	        'rooibos': 3,
	        'infusion': 4,
	        'coffee': 5,
	        'cocoa': 6
	    };

	    return Backbone.Collection.extend({
	        model: Beverage,
	        gSheetId: null,

	        initialize: function (models, options) {
	            if (options) {
	                this.gSheetId = options.gSheetId;
	            }
	        },

	        url: function () {
	            return this.gSheetId
	                ? 'https://spreadsheets.google.com/feeds/list/' + this.gSheetId + '/od6/public/values?alt=json'
	                : null;
	        },

	        parse: function (data) {
	            return data.feed.entry;
	        },

	        comparator: function (item) {
	            return beverageOrder[item.get('basis')];
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(4)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (Backbone) {
	    'use strict';

	    function get(data, field) {
	        return data['gsx$' + field]['$t'];
	    }

	    function getInt(data, field) {
	        var value = get(data, field);
	        return value ? parseInt(value) : value;
	    }

	    function getBool(data, field, mandatory) {
	        var value = get(data, field);

	        if (!value && mandatory) {
	            return false;
	        }
	        return value ? value.toLowerCase() === 'true' : value;
	    }

	    function getCsv(data, field) {
	        var value = get(data, field);
	        return value
	            ? value.split(',').map(Function.prototype.call, String.prototype.trim)
	            : value;
	    }

	    function getMinMax(data, field) {
	        return {
	            min: getInt(data, field + '-min'),
	            max: getInt(data, field + '-max')
	        };
	    }

	    return Backbone.Model.extend({
	        parse: function (data) {
	            var result = {
	                name: get(data, 'name'),
	                brand: get(data, 'brand'),
	                basis: get(data, 'basis'),
	                stock: getBool(data, 'stock', true),
	                packaged: getBool(data, 'packaged', true),
	                theine: get(data, 'theine'),
	                time: {
	                    morning: getBool(data, 'morning', false),
	                    daytime: getBool(data, 'daytime', false),
	                    evening: getBool(data, 'evening', false)
	                },
	                preparation: {
	                    temp: getMinMax(data, 't'),
	                    time: getMinMax(data, 'time')
	                },
	                ingredients: getCsv(data, 'ingredients'),
	                benefits: getCsv(data, 'benefits'),
	                note: get(data, 'note')
	            };
	            return result;
	        }
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(2)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (_) {
	    'use strict';

	    const DEFAULT_LANGUAGE = 'en',
	        SUPPORTED_LANGUAGES = [DEFAULT_LANGUAGE, 'fr'];

	    function getLang(language) {
	        if (language) {
	            var lg = language.toLowerCase();
	            if (_.indexOf(SUPPORTED_LANGUAGES, lg) > -1) {
	                return lg;
	            }
	        }

	        return DEFAULT_LANGUAGE;
	    }

	    return function (language) {
	        return __webpack_require__(14)("./" + getLang(language) + '/labels.json');
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en/labels.json": 15,
		"./fr/labels.json": 16
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 14;


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
		"typo": {
			"colon": ":"
		},
		"basis": {
			"tea-black": "Black tea",
			"tea-green": "Green tea",
			"tea-oolong": "Oolong tea",
			"tea-white": "White tea",
			"rooibos": "Rooibos",
			"infusion": "Infusion/herbal tea",
			"coffee": "Coffee",
			"cocoa": "Cocoa"
		},
		"theine": {
			"content": "Theine content",
			"none": "none",
			"low": "low",
			"medium": "medium",
			"high": "high",
			"coffee": "coffee",
			"unknown": "unknown"
		},
		"moment": {
			"morning": "Morning",
			"daytime": "Daytime",
			"evening": "Evening"
		},
		"loading": "We are emptying our cup while looking how you can fill yours. Thanks for your patience."
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"typo": {
			"colon": " :"
		},
		"basis": {
			"tea-black": "Thé noir",
			"tea-green": "Thé vert",
			"tea-oolong": "Thé oolong",
			"tea-white": "Thé blanc",
			"rooibos": "Rooibos (thé rouge)",
			"infusion": "Infusion/tisane",
			"coffee": "Café",
			"cocoa": "Cacao"
		},
		"theine": {
			"content": "Teneur en théine",
			"none": "aucune",
			"low": "faible",
			"medium": "moyenne",
			"high": "élevée",
			"coffee": "café",
			"unknown": "inconnue"
		},
		"moment": {
			"morning": "Matin",
			"daytime": "Journée",
			"evening": "Soirée"
		},
		"loading": "Merci de patienter, nous vidons notre tasse et cherchons de quoi remplir la vôtre."
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Tether, Tether) {/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);

	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.tooltip = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  /* global Tether */

	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): tooltip.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Tooltip = (function ($) {

	    /**
	     * Check for Tether dependency
	     * Tether - http://github.hubspot.com/tether/
	     */
	    if (__webpack_provided_window_dot_Tether === undefined) {
	      throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)');
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'tooltip';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.tooltip';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var JQUERY_NO_CONFLICT = $.fn[NAME];
	    var TRANSITION_DURATION = 150;
	    var CLASS_PREFIX = 'bs-tether';

	    var Default = {
	      animation: true,
	      template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
	      trigger: 'hover focus',
	      title: '',
	      delay: 0,
	      html: false,
	      selector: false,
	      placement: 'top',
	      offset: '0 0',
	      constraints: []
	    };

	    var DefaultType = {
	      animation: 'boolean',
	      template: 'string',
	      title: '(string|element|function)',
	      trigger: 'string',
	      delay: '(number|object)',
	      html: 'boolean',
	      selector: '(string|boolean)',
	      placement: '(string|function)',
	      offset: 'string',
	      constraints: 'array'
	    };

	    var AttachmentMap = {
	      TOP: 'bottom center',
	      RIGHT: 'middle left',
	      BOTTOM: 'top center',
	      LEFT: 'middle right'
	    };

	    var HoverState = {
	      IN: 'in',
	      OUT: 'out'
	    };

	    var Event = {
	      HIDE: 'hide' + EVENT_KEY,
	      HIDDEN: 'hidden' + EVENT_KEY,
	      SHOW: 'show' + EVENT_KEY,
	      SHOWN: 'shown' + EVENT_KEY,
	      INSERTED: 'inserted' + EVENT_KEY,
	      CLICK: 'click' + EVENT_KEY,
	      FOCUSIN: 'focusin' + EVENT_KEY,
	      FOCUSOUT: 'focusout' + EVENT_KEY,
	      MOUSEENTER: 'mouseenter' + EVENT_KEY,
	      MOUSELEAVE: 'mouseleave' + EVENT_KEY
	    };

	    var ClassName = {
	      FADE: 'fade',
	      IN: 'in'
	    };

	    var Selector = {
	      TOOLTIP: '.tooltip',
	      TOOLTIP_INNER: '.tooltip-inner'
	    };

	    var TetherClass = {
	      element: false,
	      enabled: false
	    };

	    var Trigger = {
	      HOVER: 'hover',
	      FOCUS: 'focus',
	      CLICK: 'click',
	      MANUAL: 'manual'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Tooltip = (function () {
	      function Tooltip(element, config) {
	        _classCallCheck(this, Tooltip);

	        // private
	        this._isEnabled = true;
	        this._timeout = 0;
	        this._hoverState = '';
	        this._activeTrigger = {};
	        this._tether = null;

	        // protected
	        this.element = element;
	        this.config = this._getConfig(config);
	        this.tip = null;

	        this._setListeners();
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * jQuery
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Tooltip, [{
	        key: 'enable',

	        // public

	        value: function enable() {
	          this._isEnabled = true;
	        }
	      }, {
	        key: 'disable',
	        value: function disable() {
	          this._isEnabled = false;
	        }
	      }, {
	        key: 'toggleEnabled',
	        value: function toggleEnabled() {
	          this._isEnabled = !this._isEnabled;
	        }
	      }, {
	        key: 'toggle',
	        value: function toggle(event) {
	          if (event) {
	            var dataKey = this.constructor.DATA_KEY;
	            var context = $(event.currentTarget).data(dataKey);

	            if (!context) {
	              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	              $(event.currentTarget).data(dataKey, context);
	            }

	            context._activeTrigger.click = !context._activeTrigger.click;

	            if (context._isWithActiveTrigger()) {
	              context._enter(null, context);
	            } else {
	              context._leave(null, context);
	            }
	          } else {

	            if ($(this.getTipElement()).hasClass(ClassName.IN)) {
	              this._leave(null, this);
	              return;
	            }

	            this._enter(null, this);
	          }
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          clearTimeout(this._timeout);

	          this.cleanupTether();

	          $.removeData(this.element, this.constructor.DATA_KEY);

	          $(this.element).off(this.constructor.EVENT_KEY);

	          if (this.tip) {
	            $(this.tip).remove();
	          }

	          this._isEnabled = null;
	          this._timeout = null;
	          this._hoverState = null;
	          this._activeTrigger = null;
	          this._tether = null;

	          this.element = null;
	          this.config = null;
	          this.tip = null;
	        }
	      }, {
	        key: 'show',
	        value: function show() {
	          var _this = this;

	          var showEvent = $.Event(this.constructor.Event.SHOW);

	          if (this.isWithContent() && this._isEnabled) {
	            $(this.element).trigger(showEvent);

	            var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

	            if (showEvent.isDefaultPrevented() || !isInTheDom) {
	              return;
	            }

	            var tip = this.getTipElement();
	            var tipId = _Util['default'].getUID(this.constructor.NAME);

	            tip.setAttribute('id', tipId);
	            this.element.setAttribute('aria-describedby', tipId);

	            this.setContent();

	            if (this.config.animation) {
	              $(tip).addClass(ClassName.FADE);
	            }

	            var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

	            var attachment = this._getAttachment(placement);

	            $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);

	            $(this.element).trigger(this.constructor.Event.INSERTED);

	            this._tether = new Tether({
	              attachment: attachment,
	              element: tip,
	              target: this.element,
	              classes: TetherClass,
	              classPrefix: CLASS_PREFIX,
	              offset: this.config.offset,
	              constraints: this.config.constraints,
	              addTargetClasses: false
	            });

	            _Util['default'].reflow(tip);
	            this._tether.position();

	            $(tip).addClass(ClassName.IN);

	            var complete = function complete() {
	              var prevHoverState = _this._hoverState;
	              _this._hoverState = null;

	              $(_this.element).trigger(_this.constructor.Event.SHOWN);

	              if (prevHoverState === HoverState.OUT) {
	                _this._leave(null, _this);
	              }
	            };

	            if (_Util['default'].supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
	              $(this.tip).one(_Util['default'].TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
	              return;
	            }

	            complete();
	          }
	        }
	      }, {
	        key: 'hide',
	        value: function hide(callback) {
	          var _this2 = this;

	          var tip = this.getTipElement();
	          var hideEvent = $.Event(this.constructor.Event.HIDE);
	          var complete = function complete() {
	            if (_this2._hoverState !== HoverState.IN && tip.parentNode) {
	              tip.parentNode.removeChild(tip);
	            }

	            _this2.element.removeAttribute('aria-describedby');
	            $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
	            _this2.cleanupTether();

	            if (callback) {
	              callback();
	            }
	          };

	          $(this.element).trigger(hideEvent);

	          if (hideEvent.isDefaultPrevented()) {
	            return;
	          }

	          $(tip).removeClass(ClassName.IN);

	          if (_Util['default'].supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

	            $(tip).one(_Util['default'].TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	          } else {
	            complete();
	          }

	          this._hoverState = '';
	        }

	        // protected

	      }, {
	        key: 'isWithContent',
	        value: function isWithContent() {
	          return Boolean(this.getTitle());
	        }
	      }, {
	        key: 'getTipElement',
	        value: function getTipElement() {
	          return this.tip = this.tip || $(this.config.template)[0];
	        }
	      }, {
	        key: 'setContent',
	        value: function setContent() {
	          var $tip = $(this.getTipElement());

	          this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

	          $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

	          this.cleanupTether();
	        }
	      }, {
	        key: 'setElementContent',
	        value: function setElementContent($element, content) {
	          var html = this.config.html;
	          if (typeof content === 'object' && (content.nodeType || content.jquery)) {
	            // content is a DOM node or a jQuery
	            if (html) {
	              if (!$(content).parent().is($element)) {
	                $element.empty().append(content);
	              }
	            } else {
	              $element.text($(content).text());
	            }
	          } else {
	            $element[html ? 'html' : 'text'](content);
	          }
	        }
	      }, {
	        key: 'getTitle',
	        value: function getTitle() {
	          var title = this.element.getAttribute('data-original-title');

	          if (!title) {
	            title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
	          }

	          return title;
	        }
	      }, {
	        key: 'cleanupTether',
	        value: function cleanupTether() {
	          if (this._tether) {
	            this._tether.destroy();
	          }
	        }

	        // private

	      }, {
	        key: '_getAttachment',
	        value: function _getAttachment(placement) {
	          return AttachmentMap[placement.toUpperCase()];
	        }
	      }, {
	        key: '_setListeners',
	        value: function _setListeners() {
	          var _this3 = this;

	          var triggers = this.config.trigger.split(' ');

	          triggers.forEach(function (trigger) {
	            if (trigger === 'click') {
	              $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, $.proxy(_this3.toggle, _this3));
	            } else if (trigger !== Trigger.MANUAL) {
	              var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
	              var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;

	              $(_this3.element).on(eventIn, _this3.config.selector, $.proxy(_this3._enter, _this3)).on(eventOut, _this3.config.selector, $.proxy(_this3._leave, _this3));
	            }
	          });

	          if (this.config.selector) {
	            this.config = $.extend({}, this.config, {
	              trigger: 'manual',
	              selector: ''
	            });
	          } else {
	            this._fixTitle();
	          }
	        }
	      }, {
	        key: '_fixTitle',
	        value: function _fixTitle() {
	          var titleType = typeof this.element.getAttribute('data-original-title');
	          if (this.element.getAttribute('title') || titleType !== 'string') {
	            this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
	            this.element.setAttribute('title', '');
	          }
	        }
	      }, {
	        key: '_enter',
	        value: function _enter(event, context) {
	          var dataKey = this.constructor.DATA_KEY;

	          context = context || $(event.currentTarget).data(dataKey);

	          if (!context) {
	            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	            $(event.currentTarget).data(dataKey, context);
	          }

	          if (event) {
	            context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
	          }

	          if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {
	            context._hoverState = HoverState.IN;
	            return;
	          }

	          clearTimeout(context._timeout);

	          context._hoverState = HoverState.IN;

	          if (!context.config.delay || !context.config.delay.show) {
	            context.show();
	            return;
	          }

	          context._timeout = setTimeout(function () {
	            if (context._hoverState === HoverState.IN) {
	              context.show();
	            }
	          }, context.config.delay.show);
	        }
	      }, {
	        key: '_leave',
	        value: function _leave(event, context) {
	          var dataKey = this.constructor.DATA_KEY;

	          context = context || $(event.currentTarget).data(dataKey);

	          if (!context) {
	            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	            $(event.currentTarget).data(dataKey, context);
	          }

	          if (event) {
	            context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
	          }

	          if (context._isWithActiveTrigger()) {
	            return;
	          }

	          clearTimeout(context._timeout);

	          context._hoverState = HoverState.OUT;

	          if (!context.config.delay || !context.config.delay.hide) {
	            context.hide();
	            return;
	          }

	          context._timeout = setTimeout(function () {
	            if (context._hoverState === HoverState.OUT) {
	              context.hide();
	            }
	          }, context.config.delay.hide);
	        }
	      }, {
	        key: '_isWithActiveTrigger',
	        value: function _isWithActiveTrigger() {
	          for (var trigger in this._activeTrigger) {
	            if (this._activeTrigger[trigger]) {
	              return true;
	            }
	          }

	          return false;
	        }
	      }, {
	        key: '_getConfig',
	        value: function _getConfig(config) {
	          config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

	          if (config.delay && typeof config.delay === 'number') {
	            config.delay = {
	              show: config.delay,
	              hide: config.delay
	            };
	          }

	          _Util['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);

	          return config;
	        }
	      }, {
	        key: '_getDelegateConfig',
	        value: function _getDelegateConfig() {
	          var config = {};

	          if (this.config) {
	            for (var key in this.config) {
	              if (this.constructor.Default[key] !== this.config[key]) {
	                config[key] = this.config[key];
	              }
	            }
	          }

	          return config;
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);
	            var _config = typeof config === 'object' ? config : null;

	            if (!data && /destroy|hide/.test(config)) {
	              return;
	            }

	            if (!data) {
	              data = new Tooltip(this, _config);
	              $(this).data(DATA_KEY, data);
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config]();
	            }
	          });
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }, {
	        key: 'Default',
	        get: function get() {
	          return Default;
	        }
	      }, {
	        key: 'NAME',
	        get: function get() {
	          return NAME;
	        }
	      }, {
	        key: 'DATA_KEY',
	        get: function get() {
	          return DATA_KEY;
	        }
	      }, {
	        key: 'Event',
	        get: function get() {
	          return Event;
	        }
	      }, {
	        key: 'EVENT_KEY',
	        get: function get() {
	          return EVENT_KEY;
	        }
	      }, {
	        key: 'DefaultType',
	        get: function get() {
	          return DefaultType;
	        }
	      }]);

	      return Tooltip;
	    })();

	    $.fn[NAME] = Tooltip._jQueryInterface;
	    $.fn[NAME].Constructor = Tooltip;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Tooltip._jQueryInterface;
	    };

	    return Tooltip;
	  })(jQuery);

	  module.exports = Tooltip;
	});


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18), __webpack_require__(18)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.2.2 */

	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require, exports, module) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}

	function getScrollParent(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;

	  if (position === 'fixed') {
	    return el;
	  }

	  var parent = el;
	  while (parent = parent.parentNode) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}

	    if (typeof style === 'undefined' || style === null) {
	      return parent;
	    }

	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;

	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        return parent;
	      }
	    }
	  }

	  return document.body;
	}

	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();

	var zeroPosCache = {};
	var getOrigin = function getOrigin(doc) {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = doc._tetherZeroElement;
	  if (typeof node === 'undefined') {
	    node = doc.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });

	    doc.body.appendChild(node);

	    doc._tetherZeroElement = node;
	  }

	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = {};

	    var rect = node.getBoundingClientRect();
	    for (var k in rect) {
	      // Can't use extend, as on IE9, elements don't resolve to be hasOwnProperty
	      zeroPosCache[id][k] = rect[k];
	    }

	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }

	  return zeroPosCache[id];
	};

	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }

	  var docEl = doc.documentElement;

	  var box = {};
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = el.getBoundingClientRect();
	  for (var k in rect) {
	    box[k] = rect[k];
	  }

	  var origin = getOrigin(doc);

	  box.top -= origin.top;
	  box.left -= origin.left;

	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }

	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;

	  return box;
	}

	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}

	function getScrollBarSize() {
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';

	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });

	  outer.appendChild(inner);

	  document.body.appendChild(outer);

	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;

	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }

	  document.body.removeChild(outer);

	  var width = widthContained - widthScroll;

	  return { width: width, height: width };
	}

	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var args = [];

	  Array.prototype.push.apply(args, arguments);

	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });

	  return out;
	}

	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}

	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}

	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}

	function getClassName(el) {
	  if (el.className instanceof SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}

	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}

	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });

	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}

	var deferred = [];

	var defer = function defer(fn) {
	  deferred.push(fn);
	};

	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};

	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }

	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings !== 'undefined' && typeof this.bindings[event] !== 'undefined') {
	        return;
	      }

	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;

	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }

	          handler.apply(context, args);

	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);

	  return Evented;
	})();

	TetherBase.Utils = {
	  getScrollParent: getScrollParent,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize
	};
	/* globals TetherBase, performance */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}

	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParent = _TetherBase$Utils.getScrollParent;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;

	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

	  return a + diff >= b && b >= a - diff;
	}

	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');

	  var transforms = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();

	var tethers = [];

	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};

	function now() {
	  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	    return performance.now();
	  }
	  return +new Date();
	}

	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;

	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);

	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }

	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }

	    if (typeof pendingTimeout !== 'undefined') {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }

	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };

	  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();

	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};

	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};

	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};

	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }

	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }

	  return { left: left, top: top };
	};

	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }

	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }

	  return { left: left, top: top };
	};

	function addOffset() {
	  var out = { top: 0, left: 0 };

	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }

	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }

	    out.top += top;
	    out.left += left;
	  });

	  return out;
	}

	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }

	  return offset;
	}

	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');

	  var _value$split2 = _slicedToArray(_value$split, 2);

	  var top = _value$split2[0];
	  var left = _value$split2[1];

	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;

	var TetherClass = (function () {
	  function TetherClass(options) {
	    var _this = this;

	    _classCallCheck(this, TetherClass);

	    this.position = this.position.bind(this);

	    tethers.push(this);

	    this.history = [];

	    this.setOptions(options, false);

	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });

	    this.position();
	  }

	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;

	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;

	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };

	      this.options = extend(defaults, options);

	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;

	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;

	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }

	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }

	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });

	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }

	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }

	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);

	      if (typeof this.scrollParent !== 'undefined') {
	        this.disable();
	      }

	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParent = this.target;
	      } else {
	        this.scrollParent = getScrollParent(this.target);
	      }

	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);

	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };

	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;

	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;

	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }

	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;

	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }

	          var style = getComputedStyle(target);

	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }

	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };

	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }

	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }

	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }

	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;

	      if (this.scrollParent !== document) {
	        this.scrollParent.addEventListener('scroll', this.position);
	      }

	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;

	      if (typeof this.scrollParent !== 'undefined') {
	        this.scrollParent.removeEventListener('scroll', this.position);
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this3 = this;

	      this.disable();

	      tethers.forEach(function (tether, i) {
	        if (tether === _this3) {
	          tethers.splice(i, 1);
	          return;
	        }
	      });
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this4 = this;

	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }

	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;

	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }

	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this4.getClass('element-attached') + '-' + side);
	        all.push(_this4.getClass('target-attached') + '-' + side);
	      });

	      defer(function () {
	        if (!(typeof _this4._addAttachClasses !== 'undefined')) {
	          return;
	        }

	        updateClasses(_this4.element, _this4._addAttachClasses, all);
	        if (!(_this4.options.addTargetClasses === false)) {
	          updateClasses(_this4.target, _this4._addAttachClasses, all);
	        }

	        delete _this4._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this5 = this;

	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)

	      if (!this.enabled) {
	        return;
	      }

	      this.clearCache();

	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

	      this.updateAttachClasses(this.attachment, targetAttachment);

	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this5.element);
	      });

	      var width = elementPos.width;
	      var height = elementPos.height;

	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;

	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }

	      var targetPos = this.cache('target-bounds', function () {
	        return _this5.getTargetBounds();
	      });
	      var targetSize = targetPos;

	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);

	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;

	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });

	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }

	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },

	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };

	      var scrollbarSize = undefined;
	      if (document.body.scrollWidth > window.innerWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }

	      if (document.body.scrollHeight > window.innerHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }

	      if (['', 'static'].indexOf(document.body.style.position) === -1 || ['', 'static'].indexOf(document.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = document.body.scrollHeight - top - height;
	        next.page.right = document.body.scrollWidth - left - width;
	      }

	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this5.cache('target-offsetparent', function () {
	            return getOffsetParent(_this5.target);
	          });
	          var offsetPosition = _this5.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;

	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });

	          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;

	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }

	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.

	      this.move(next);

	      this.history.unshift(next);

	      if (this.history.length > 3) {
	        this.history.pop();
	      }

	      if (flushChanges) {
	        flush();
	      }

	      return true;
	    }

	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this6 = this;

	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }

	      var same = {};

	      for (var type in pos) {
	        same[type] = {};

	        for (var key in pos[type]) {
	          var found = false;

	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }

	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }

	      var css = { top: '', left: '', right: '', bottom: '' };

	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this6.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this6.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }

	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }

	          css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';

	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }

	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };

	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this6.cache('target-offsetparent', function () {
	            return getOffsetParent(_this6.target);
	          });

	          if (getOffsetParent(_this6.element) !== offsetParent) {
	            defer(function () {
	              _this6.element.parentNode.removeChild(_this6.element);
	              offsetParent.appendChild(_this6.element);
	            });
	          }

	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }

	      if (!moved) {
	        var offsetParentIsBody = true;
	        var currentNode = this.element.parentNode;
	        while (currentNode && currentNode.tagName !== 'BODY') {
	          if (getComputedStyle(currentNode).position !== 'static') {
	            offsetParentIsBody = false;
	            break;
	          }

	          currentNode = currentNode.parentNode;
	        }

	        if (!offsetParentIsBody) {
	          this.element.parentNode.removeChild(this.element);
	          document.body.appendChild(this.element);
	        }
	      }

	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];

	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }

	      if (write) {
	        defer(function () {
	          extend(_this6.element.style, writeCSS);
	        });
	      }
	    }
	  }]);

	  return TetherClass;
	})();

	TetherClass.modules = [];

	TetherBase.position = position;

	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParent;
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }

	  if (to === document) {
	    to = to.documentElement;
	  }

	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);

	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }

	  return to;
	}

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;

	    if (!this.options.constraints) {
	      return true;
	    }

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;

	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }

	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });

	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;

	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;

	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });

	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });

	    var addClasses = [];

	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);

	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;

	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }

	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');

	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }

	      var bounds = getBoundingRect(_this, to);

	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }

	      if (changeAttachY === 'together') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top -= height;
	            eAttachment.top = 'bottom';
	          }
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top') {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom') {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top += height;
	            eAttachment.top = 'top';
	          }
	        }

	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }

	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }

	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }

	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }

	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }

	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }

	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }

	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }

	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }

	      pin = pin || [];

	      var pinned = [];
	      var oob = [];

	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }

	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }

	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }

	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }

	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }

	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }

	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }

	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }

	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }

	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	      }
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    var targetPos = this.getTargetBounds();

	    var bottom = top + height;
	    var right = left + width;

	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }

	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }

	    var allClasses = [];
	    var addClasses = [];

	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }

	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return true;
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (!this.options.shift) {
	      return;
	    }

	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }

	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];

	      var _shift = shift;

	      var _shift2 = _slicedToArray(_shift, 2);

	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];

	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }

	    top += shiftTop;
	    left += shiftLeft;

	    return { top: top, left: left };
	  }
	});
	return Tether;

	}));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);

	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.util = mod.exports;
	  }
	})(this, function (exports, module) {
	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): util.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  'use strict';

	  var Util = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Private TransitionEnd Helpers
	     * ------------------------------------------------------------------------
	     */

	    var transition = false;

	    var TransitionEndEvent = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    // shoutout AngusCroll (https://goo.gl/pxwQGp)
	    function toType(obj) {
	      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	    }

	    function isElement(obj) {
	      return (obj[0] || obj).nodeType;
	    }

	    function getSpecialTransitionEndEvent() {
	      return {
	        bindType: transition.end,
	        delegateType: transition.end,
	        handle: function handle(event) {
	          if ($(event.target).is(this)) {
	            return event.handleObj.handler.apply(this, arguments);
	          }
	        }
	      };
	    }

	    function transitionEndTest() {
	      if (window.QUnit) {
	        return false;
	      }

	      var el = document.createElement('bootstrap');

	      for (var _name in TransitionEndEvent) {
	        if (el.style[_name] !== undefined) {
	          return { end: TransitionEndEvent[_name] };
	        }
	      }

	      return false;
	    }

	    function transitionEndEmulator(duration) {
	      var _this = this;

	      var called = false;

	      $(this).one(Util.TRANSITION_END, function () {
	        called = true;
	      });

	      setTimeout(function () {
	        if (!called) {
	          Util.triggerTransitionEnd(_this);
	        }
	      }, duration);

	      return this;
	    }

	    function setTransitionEndSupport() {
	      transition = transitionEndTest();

	      $.fn.emulateTransitionEnd = transitionEndEmulator;

	      if (Util.supportsTransitionEnd()) {
	        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	      }
	    }

	    /**
	     * --------------------------------------------------------------------------
	     * Public Util Api
	     * --------------------------------------------------------------------------
	     */

	    var Util = {

	      TRANSITION_END: 'bsTransitionEnd',

	      getUID: function getUID(prefix) {
	        do {
	          prefix += ~ ~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
	        } while (document.getElementById(prefix));
	        return prefix;
	      },

	      getSelectorFromElement: function getSelectorFromElement(element) {
	        var selector = element.getAttribute('data-target');

	        if (!selector) {
	          selector = element.getAttribute('href') || '';
	          selector = /^#[a-z]/i.test(selector) ? selector : null;
	        }

	        return selector;
	      },

	      reflow: function reflow(element) {
	        new Function('bs', 'return bs')(element.offsetHeight);
	      },

	      triggerTransitionEnd: function triggerTransitionEnd(element) {
	        $(element).trigger(transition.end);
	      },

	      supportsTransitionEnd: function supportsTransitionEnd() {
	        return Boolean(transition);
	      },

	      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
	        for (var property in configTypes) {
	          if (configTypes.hasOwnProperty(property)) {
	            var expectedTypes = configTypes[property];
	            var value = config[property];
	            var valueType = undefined;

	            if (value && isElement(value)) {
	              valueType = 'element';
	            } else {
	              valueType = toType(value);
	            }

	            if (!new RegExp(expectedTypes).test(valueType)) {
	              throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
	            }
	          }
	        }
	      }
	    };

	    setTransitionEndSupport();

	    return Util;
	  })(jQuery);

	  module.exports = Util;
	});



/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(1);

	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./tooltip'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Tooltip);
	    global.popover = mod.exports;
	  }
	})(this, function (exports, module, _tooltip) {
	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var _Tooltip2 = _interopRequireDefault(_tooltip);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): popover.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Popover = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'popover';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.popover';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var Default = $.extend({}, _Tooltip2['default'].Default, {
	      placement: 'right',
	      trigger: 'click',
	      content: '',
	      template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
	    });

	    var DefaultType = $.extend({}, _Tooltip2['default'].DefaultType, {
	      content: '(string|element|function)'
	    });

	    var ClassName = {
	      FADE: 'fade',
	      IN: 'in'
	    };

	    var Selector = {
	      TITLE: '.popover-title',
	      CONTENT: '.popover-content',
	      ARROW: '.popover-arrow'
	    };

	    var Event = {
	      HIDE: 'hide' + EVENT_KEY,
	      HIDDEN: 'hidden' + EVENT_KEY,
	      SHOW: 'show' + EVENT_KEY,
	      SHOWN: 'shown' + EVENT_KEY,
	      INSERTED: 'inserted' + EVENT_KEY,
	      CLICK: 'click' + EVENT_KEY,
	      FOCUSIN: 'focusin' + EVENT_KEY,
	      FOCUSOUT: 'focusout' + EVENT_KEY,
	      MOUSEENTER: 'mouseenter' + EVENT_KEY,
	      MOUSELEAVE: 'mouseleave' + EVENT_KEY
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Popover = (function (_Tooltip) {
	      _inherits(Popover, _Tooltip);

	      function Popover() {
	        _classCallCheck(this, Popover);

	        _get(Object.getPrototypeOf(Popover.prototype), 'constructor', this).apply(this, arguments);
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * jQuery
	       * ------------------------------------------------------------------------
	       */

	      _createClass(Popover, [{
	        key: 'isWithContent',

	        // overrides

	        value: function isWithContent() {
	          return this.getTitle() || this._getContent();
	        }
	      }, {
	        key: 'getTipElement',
	        value: function getTipElement() {
	          return this.tip = this.tip || $(this.config.template)[0];
	        }
	      }, {
	        key: 'setContent',
	        value: function setContent() {
	          var $tip = $(this.getTipElement());

	          // we use append for html objects to maintain js events
	          this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
	          this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

	          $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

	          this.cleanupTether();
	        }

	        // private

	      }, {
	        key: '_getContent',
	        value: function _getContent() {
	          return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);
	            var _config = typeof config === 'object' ? config : null;

	            if (!data && /destroy|hide/.test(config)) {
	              return;
	            }

	            if (!data) {
	              data = new Popover(this, _config);
	              $(this).data(DATA_KEY, data);
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config]();
	            }
	          });
	        }
	      }, {
	        key: 'VERSION',

	        // getters

	        get: function get() {
	          return VERSION;
	        }
	      }, {
	        key: 'Default',
	        get: function get() {
	          return Default;
	        }
	      }, {
	        key: 'NAME',
	        get: function get() {
	          return NAME;
	        }
	      }, {
	        key: 'DATA_KEY',
	        get: function get() {
	          return DATA_KEY;
	        }
	      }, {
	        key: 'Event',
	        get: function get() {
	          return Event;
	        }
	      }, {
	        key: 'EVENT_KEY',
	        get: function get() {
	          return EVENT_KEY;
	        }
	      }, {
	        key: 'DefaultType',
	        get: function get() {
	          return DefaultType;
	        }
	      }]);

	      return Popover;
	    })(_Tooltip2['default']);

	    $.fn[NAME] = Popover._jQueryInterface;
	    $.fn[NAME].Constructor = Popover;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Popover._jQueryInterface;
	    };

	    return Popover;
	  })(jQuery);

	  module.exports = Popover;
	});



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./beverages.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./beverages.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*!\n * Bootstrap v4.0.0-alpha.2 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active {\n  outline: 0;\n}\n\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n@-moz-viewport {\n  width: device-width;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n@-o-viewport {\n  width: device-width;\n}\n\n@-webkit-viewport {\n  width: device-width;\n}\n\n@viewport {\n  width: device-width;\n}\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\n\nh1,\nh2,\nh3,\nh4,\n.beverage .headers .name,\nh5,\n.beverage .headers .brand,\nh6 {\n  margin-top: 0;\n  margin-bottom: .5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\na {\n  color: #0275d8;\n  text-decoration: none;\n}\n\na:focus,\na:hover {\n  color: #014c8c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\ntable {\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: left;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n}\n\ninput[type=\"search\"] {\n  box-sizing: inherit;\n  -webkit-appearance: none;\n}\n\noutput {\n  display: inline-block;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1,\nh2,\nh3,\nh4,\n.beverage .headers .name,\nh5,\n.beverage .headers .brand,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4,\n.beverage .headers .name {\n  font-size: 1.5rem;\n}\n\nh5,\n.beverage .headers .brand {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\n.h1 {\n  font-size: 2.5rem;\n}\n\n.h2 {\n  font-size: 2rem;\n}\n\n.h3 {\n  font-size: 1.75rem;\n}\n\n.h4 {\n  font-size: 1.5rem;\n}\n\n.h5 {\n  font-size: 1.25rem;\n}\n\n.h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal;\n}\n\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline,\n.beverage .strength .moment ul {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item,\n.beverage .strength .moment ul > li {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child),\n.beverage .strength .moment ul > li:not(:last-child) {\n  margin-right: 5px;\n}\n\n.dl-horizontal {\n  margin-right: -1.875rem;\n  margin-left: -1.875rem;\n}\n\n.dl-horizontal::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  line-height: 1.5;\n  color: #818a91;\n}\n\n.blockquote-footer::before {\n  content: \"\\2014   \\A0\";\n}\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0;\n}\n\n.blockquote-reverse .blockquote-footer::before {\n  content: \"\";\n}\n\n.blockquote-reverse .blockquote-footer::after {\n  content: \"\\A0   \\2014\";\n}\n\n.img-fluid {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 0.3rem;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  line-height: 1.5;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #818a91;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ncode {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem;\n}\n\nkbd {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem;\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  line-height: 1.5;\n  color: #373a3c;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n\n@media (min-width: 544px) {\n  .container {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 940px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n\n.row,\n.beverage,\n.beverage .more,\n.beverage .strength {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-left: -0.9375rem;\n  margin-right: -0.9375rem;\n}\n\n.col-xs-1,\n.col-xs-2,\n.beverage .more .note,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.beverage .headers,\n.beverage .strength,\n.beverage .strength .moment,\n.beverage .strength .theine-level,\n.beverage.detailed .preparation,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.beverage .more .benefits,\n.col-xs-11,\n.col-xs-12,\n.beverage .more,\n.beverage.detailed .more .benefits,\n.beverage.detailed .more .note,\n.beverage.detailed .strength .moment,\n.beverage.detailed .strength .theine-level,\n.col-sm-1,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-md-1,\n.col-md-2,\n.beverage.detailed .strength,\n.col-md-3,\n.beverage.detailed .more,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-lg-1,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-xl-1,\n.col-xl-2,\n.col-xl-3,\n.col-xl-4,\n.col-xl-5,\n.col-xl-6,\n.col-xl-7,\n.col-xl-8,\n.col-xl-9,\n.col-xl-10,\n.col-xl-11,\n.col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n\n.col-xs-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 8.33333%;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n}\n\n.col-xs-2,\n.beverage .more .note {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 16.66667%;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n}\n\n.col-xs-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n}\n\n.col-xs-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 33.33333%;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n}\n\n.col-xs-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 41.66667%;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n}\n\n.col-xs-6,\n.beverage .headers,\n.beverage .strength,\n.beverage .strength .moment,\n.beverage .strength .theine-level,\n.beverage.detailed .preparation {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n}\n\n.col-xs-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 58.33333%;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n}\n\n.col-xs-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 66.66667%;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n}\n\n.col-xs-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n}\n\n.col-xs-10,\n.beverage .more .benefits {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 83.33333%;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n}\n\n.col-xs-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 91.66667%;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n}\n\n.col-xs-12,\n.beverage .more,\n.beverage.detailed .more .benefits,\n.beverage.detailed .more .note,\n.beverage.detailed .strength .moment,\n.beverage.detailed .strength .theine-level {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 544px) {\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333%;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n  }\n\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66667%;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n  }\n\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n\n  .col-sm-4,\n  .beverage .more,\n  .beverage .strength {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n  }\n\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66667%;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n  }\n\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n  }\n\n  .col-sm-8,\n  .beverage .headers {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n  }\n\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333%;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n  }\n\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66667%;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n  }\n\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333%;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n  }\n\n  .col-md-2,\n  .beverage.detailed .strength,\n  .beverage.detailed .preparation {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66667%;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n  }\n\n  .col-md-3,\n  .beverage .strength,\n  .beverage.detailed .more {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n\n  .col-md-4,\n  .beverage .more {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n  }\n\n  .col-md-5,\n  .beverage .headers {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66667%;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n  }\n\n  .col-md-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n\n  .col-md-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n  }\n\n  .col-md-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n  }\n\n  .col-md-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n\n  .col-md-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333%;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n  }\n\n  .col-md-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66667%;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n  }\n\n  .col-md-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333%;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n  }\n\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66667%;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n  }\n\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n  }\n\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66667%;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n  }\n\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n  }\n\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n  }\n\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333%;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n  }\n\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66667%;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n  }\n\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 8.33333%;\n        -ms-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n  }\n\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.66667%;\n        -ms-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n  }\n\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 33.33333%;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n  }\n\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 41.66667%;\n        -ms-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n  }\n\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 58.33333%;\n        -ms-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n  }\n\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 66.66667%;\n        -ms-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n  }\n\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 83.33333%;\n        -ms-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n  }\n\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 91.66667%;\n        -ms-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n  }\n\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n\n  .col-xl-pull-0 {\n    right: auto;\n  }\n\n  .col-xl-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-xl-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-xl-pull-3 {\n    right: 25%;\n  }\n\n  .col-xl-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-xl-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-xl-pull-6 {\n    right: 50%;\n  }\n\n  .col-xl-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-xl-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-xl-pull-9 {\n    right: 75%;\n  }\n\n  .col-xl-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-xl-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-xl-pull-12 {\n    right: 100%;\n  }\n\n  .col-xl-push-0 {\n    left: auto;\n  }\n\n  .col-xl-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-xl-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-xl-push-3 {\n    left: 25%;\n  }\n\n  .col-xl-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-xl-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-xl-push-6 {\n    left: 50%;\n  }\n\n  .col-xl-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-xl-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-xl-push-9 {\n    left: 75%;\n  }\n\n  .col-xl-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-xl-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-xl-push-12 {\n    left: 100%;\n  }\n\n  .col-xl-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-xl-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-xl-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-xl-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-xl-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-xl-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-xl-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-xl-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-xl-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-xl-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-xl-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-xl-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-xl-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n.col-xs-first {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n      -ms-flex-order: -1;\n          order: -1;\n}\n\n.col-xs-last {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n@media (min-width: 544px) {\n  .col-sm-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1;\n  }\n\n  .col-sm-last {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1;\n  }\n\n  .col-md-last {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1;\n  }\n\n  .col-lg-last {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl-first {\n    -webkit-box-ordinal-group: 0;\n    -webkit-order: -1;\n        -ms-flex-order: -1;\n            order: -1;\n  }\n\n  .col-xl-last {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n}\n\n.row-xs-top {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n              -ms-grid-row-align: flex-start;\n          align-items: flex-start;\n}\n\n.row-xs-center {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n              -ms-grid-row-align: center;\n          align-items: center;\n}\n\n.row-xs-bottom {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n              -ms-grid-row-align: flex-end;\n          align-items: flex-end;\n}\n\n@media (min-width: 544px) {\n  .row-sm-top {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n  }\n\n  .row-sm-center {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n  }\n\n  .row-sm-bottom {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n                -ms-grid-row-align: flex-end;\n            align-items: flex-end;\n  }\n}\n\n@media (min-width: 768px) {\n  .row-md-top {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n  }\n\n  .row-md-center {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n  }\n\n  .row-md-bottom {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n                -ms-grid-row-align: flex-end;\n            align-items: flex-end;\n  }\n}\n\n@media (min-width: 992px) {\n  .row-lg-top {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n  }\n\n  .row-lg-center {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n  }\n\n  .row-lg-bottom {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n                -ms-grid-row-align: flex-end;\n            align-items: flex-end;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row-xl-top {\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n                -ms-grid-row-align: flex-start;\n            align-items: flex-start;\n  }\n\n  .row-xl-center {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n                -ms-grid-row-align: center;\n            align-items: center;\n  }\n\n  .row-xl-bottom {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n                -ms-grid-row-align: flex-end;\n            align-items: flex-end;\n  }\n}\n\n.col-xs-top {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n}\n\n.col-xs-center {\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n\n.col-xs-bottom {\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n}\n\n@media (min-width: 544px) {\n  .col-sm-top {\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n  }\n\n  .col-sm-center {\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n            align-self: center;\n  }\n\n  .col-sm-bottom {\n    -webkit-align-self: flex-end;\n        -ms-flex-item-align: end;\n            align-self: flex-end;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-top {\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n  }\n\n  .col-md-center {\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n            align-self: center;\n  }\n\n  .col-md-bottom {\n    -webkit-align-self: flex-end;\n        -ms-flex-item-align: end;\n            align-self: flex-end;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg-top {\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n  }\n\n  .col-lg-center {\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n            align-self: center;\n  }\n\n  .col-lg-bottom {\n    -webkit-align-self: flex-end;\n        -ms-flex-item-align: end;\n            align-self: flex-end;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl-top {\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n  }\n\n  .col-xl-center {\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n            align-self: center;\n  }\n\n  .col-xl-bottom {\n    -webkit-align-self: flex-end;\n        -ms-flex-item-align: end;\n            align-self: flex-end;\n  }\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  line-height: 1.5;\n  vertical-align: top;\n  border-top: 1px solid #eceeef;\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #eceeef;\n}\n\n.table tbody + tbody {\n  border-top: 2px solid #eceeef;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #eceeef;\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #eceeef;\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.table-hover tbody tr:hover {\n  background-color: #f5f5f5;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f5f5f5;\n}\n\n.table-hover .table-active:hover {\n  background-color: #e8e8e8;\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: #e8e8e8;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8;\n}\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7;\n}\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: 0.01%;\n  overflow-x: auto;\n}\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c;\n}\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef;\n}\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c;\n}\n\n.table-inverse.table-bordered {\n  border: 0;\n}\n\n.table-inverse th,\n.table-inverse td,\n.table-inverse thead th {\n  border-color: #55595c;\n}\n\n.table-reflow thead {\n  float: left;\n}\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap;\n}\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef;\n}\n\n.table-reflow th:last-child,\n.table-reflow td:last-child {\n  border-right: 1px solid #eceeef;\n}\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef;\n}\n\n.table-reflow tr {\n  float: left;\n}\n\n.table-reflow tr th,\n.table-reflow tr td {\n  display: block !important;\n  border: 1px solid #eceeef;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: none;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control::placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:disabled,\n.form-control[readonly] {\n  background-color: #eceeef;\n  opacity: 1;\n}\n\n.form-control:disabled {\n  cursor: not-allowed;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n}\n\n.form-control-label {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 2.25rem;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"].form-control,\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"].form-control {\n    line-height: 1.8625rem;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"].form-control,\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"].form-control {\n    line-height: 3.16667rem;\n  }\n}\n\n.form-control-static {\n  min-height: 2.25rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n}\n\n.form-control-static.form-control-sm,\n.form-control-static.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n\n.radio label,\n.checkbox label {\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio label input:only-child,\n.checkbox label input:only-child {\n  position: static;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -.25rem;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: .75rem;\n}\n\ninput[type=\"radio\"]:disabled,\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"]:disabled,\ninput[type=\"checkbox\"].disabled {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\n.checkbox-inline.disabled {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\n.checkbox.disabled label {\n  cursor: not-allowed;\n}\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5625rem;\n  background-size: 1.4625rem 1.4625rem;\n}\n\n.has-success .text-help,\n.has-success .form-control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #5cb85c;\n}\n\n.has-success .form-control {\n  border-color: #5cb85c;\n}\n\n.has-success .input-group-addon {\n  color: #5cb85c;\n  border-color: #5cb85c;\n  background-color: #eaf6ea;\n}\n\n.has-success .form-control-feedback {\n  color: #5cb85c;\n}\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjNWNiODVjIiBkPSJNMjMzLjggNjEwYy0xMy4zIDAtMjYtNi0zNC0xNi44TDkwLjUgNDQ4LjhDNzYuMyA0MzAgODAgNDAzLjMgOTguOCAzODljMTguOC0xNC4yIDQ1LjUtMTAuNCA1OS44IDguNGw3MiA5NUw0NTEuMyAyNDJjMTIuNS0yMCAzOC44LTI2LjIgNTguOC0xMy43IDIwIDEyLjQgMjYgMzguNyAxMy43IDU4LjhMMjcwIDU5MGMtNy40IDEyLTIwLjIgMTkuNC0zNC4zIDIwaC0yeiIvPjwvc3ZnPg==\");\n}\n\n.has-warning .text-help,\n.has-warning .form-control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #f0ad4e;\n}\n\n.has-warning .form-control {\n  border-color: #f0ad4e;\n}\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white;\n}\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e;\n}\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZjBhZDRlIiBkPSJNNjAzIDY0MC4ybC0yNzguNS01MDljLTMuOC02LjYtMTAuOC0xMC42LTE4LjUtMTAuNnMtMTQuNyA0LTE4LjUgMTAuNkw5IDY0MC4yYy0zLjcgNi41LTMuNiAxNC40LjIgMjAuOCAzLjggNi41IDEwLjggMTAuNCAxOC4zIDEwLjRoNTU3YzcuNiAwIDE0LjYtNCAxOC40LTEwLjQgMy41LTYuNCAzLjYtMTQuNCAwLTIwLjh6bS0yNjYuNC0zMGgtNjEuMlY1NDloNjEuMnY2MS4yem0wLTEwN2gtNjEuMlYzMDRoNjEuMnYxOTl6Ii8+PC9zdmc+\");\n}\n\n.has-danger .text-help,\n.has-danger .form-control-label,\n.has-danger .radio,\n.has-danger .checkbox,\n.has-danger .radio-inline,\n.has-danger .checkbox-inline,\n.has-danger.radio label,\n.has-danger.checkbox label,\n.has-danger.radio-inline label,\n.has-danger.checkbox-inline label {\n  color: #d9534f;\n}\n\n.has-danger .form-control {\n  border-color: #d9534f;\n}\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7;\n}\n\n.has-danger .form-control-feedback {\n  color: #d9534f;\n}\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZDk1MzRmIiBkPSJNNDQ3IDU0NC40Yy0xNC40IDE0LjQtMzcuNiAxNC40LTUyIDBsLTg5LTkyLjctODkgOTIuN2MtMTQuNSAxNC40LTM3LjcgMTQuNC01MiAwLTE0LjQtMTQuNC0xNC40LTM3LjYgMC01Mmw5Mi40LTk2LjMtOTIuNC05Ni4zYy0xNC40LTE0LjQtMTQuNC0zNy42IDAtNTJzMzcuNi0xNC4zIDUyIDBsODkgOTIuOCA4OS4yLTkyLjdjMTQuNC0xNC40IDM3LjYtMTQuNCA1MiAwIDE0LjMgMTQuNCAxNC4zIDM3LjYgMCA1MkwzNTQuNiAzOTZsOTIuNCA5Ni40YzE0LjQgMTQuNCAxNC40IDM3LjYgMCA1MnoiLz48L3N2Zz4=\");\n}\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:focus,\n.btn:hover {\n  text-decoration: none;\n}\n\n.btn.focus {\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n}\n\n.btn.disabled,\n.btn:disabled {\n  cursor: not-allowed;\n  opacity: .65;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n  background-image: none;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #014682;\n  border-color: #01315a;\n}\n\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary:disabled:focus,\n.btn-primary:disabled.focus {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary:disabled:hover {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-secondary:hover {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-secondary:focus,\n.btn-secondary.focus {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-secondary:active,\n.btn-secondary.active,\n.open > .btn-secondary.dropdown-toggle {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n  background-image: none;\n}\n\n.btn-secondary:active:hover,\n.btn-secondary:active:focus,\n.btn-secondary:active.focus,\n.btn-secondary.active:hover,\n.btn-secondary.active:focus,\n.btn-secondary.active.focus,\n.open > .btn-secondary.dropdown-toggle:hover,\n.open > .btn-secondary.dropdown-toggle:focus,\n.open > .btn-secondary.dropdown-toggle.focus {\n  color: #373a3c;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-secondary.disabled:focus,\n.btn-secondary.disabled.focus,\n.btn-secondary:disabled:focus,\n.btn-secondary:disabled.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-secondary.disabled:hover,\n.btn-secondary:disabled:hover {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n  background-image: none;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1f7e9a;\n}\n\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info:disabled:focus,\n.btn-info:disabled.focus {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info.disabled:hover,\n.btn-info:disabled:hover {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n  background-image: none;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #2d672d;\n}\n\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success:disabled:focus,\n.btn-success:disabled.focus {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success.disabled:hover,\n.btn-success:disabled:hover {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n  background-image: none;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #b06d0f;\n}\n\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning:disabled:focus,\n.btn-warning:disabled.focus {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning:disabled:hover {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n  background-image: none;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #8b211e;\n}\n\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger:disabled:focus,\n.btn-danger:disabled.focus {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger:disabled:hover {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-primary-outline {\n  color: #0275d8;\n  background-image: none;\n  background-color: transparent;\n  border-color: #0275d8;\n}\n\n.btn-primary-outline:focus,\n.btn-primary-outline.focus,\n.btn-primary-outline:active,\n.btn-primary-outline.active,\n.open > .btn-primary-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary-outline:hover {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary-outline.disabled:focus,\n.btn-primary-outline.disabled.focus,\n.btn-primary-outline:disabled:focus,\n.btn-primary-outline:disabled.focus {\n  border-color: #43a7fd;\n}\n\n.btn-primary-outline.disabled:hover,\n.btn-primary-outline:disabled:hover {\n  border-color: #43a7fd;\n}\n\n.btn-secondary-outline {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc;\n}\n\n.btn-secondary-outline:focus,\n.btn-secondary-outline.focus,\n.btn-secondary-outline:active,\n.btn-secondary-outline.active,\n.open > .btn-secondary-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.btn-secondary-outline:hover {\n  color: #fff;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.btn-secondary-outline.disabled:focus,\n.btn-secondary-outline.disabled.focus,\n.btn-secondary-outline:disabled:focus,\n.btn-secondary-outline:disabled.focus {\n  border-color: white;\n}\n\n.btn-secondary-outline.disabled:hover,\n.btn-secondary-outline:disabled:hover {\n  border-color: white;\n}\n\n.btn-info-outline {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de;\n}\n\n.btn-info-outline:focus,\n.btn-info-outline.focus,\n.btn-info-outline:active,\n.btn-info-outline.active,\n.open > .btn-info-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info-outline:hover {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info-outline.disabled:focus,\n.btn-info-outline.disabled.focus,\n.btn-info-outline:disabled:focus,\n.btn-info-outline:disabled.focus {\n  border-color: #b0e1ef;\n}\n\n.btn-info-outline.disabled:hover,\n.btn-info-outline:disabled:hover {\n  border-color: #b0e1ef;\n}\n\n.btn-success-outline {\n  color: #5cb85c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5cb85c;\n}\n\n.btn-success-outline:focus,\n.btn-success-outline.focus,\n.btn-success-outline:active,\n.btn-success-outline.active,\n.open > .btn-success-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success-outline:hover {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success-outline.disabled:focus,\n.btn-success-outline.disabled.focus,\n.btn-success-outline:disabled:focus,\n.btn-success-outline:disabled.focus {\n  border-color: #a3d7a3;\n}\n\n.btn-success-outline.disabled:hover,\n.btn-success-outline:disabled:hover {\n  border-color: #a3d7a3;\n}\n\n.btn-warning-outline {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e;\n}\n\n.btn-warning-outline:focus,\n.btn-warning-outline.focus,\n.btn-warning-outline:active,\n.btn-warning-outline.active,\n.open > .btn-warning-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning-outline:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning-outline.disabled:focus,\n.btn-warning-outline.disabled.focus,\n.btn-warning-outline:disabled:focus,\n.btn-warning-outline:disabled.focus {\n  border-color: #f8d9ac;\n}\n\n.btn-warning-outline.disabled:hover,\n.btn-warning-outline:disabled:hover {\n  border-color: #f8d9ac;\n}\n\n.btn-danger-outline {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f;\n}\n\n.btn-danger-outline:focus,\n.btn-danger-outline.focus,\n.btn-danger-outline:active,\n.btn-danger-outline.active,\n.open > .btn-danger-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger-outline:hover {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger-outline.disabled:focus,\n.btn-danger-outline.disabled.focus,\n.btn-danger-outline:disabled:focus,\n.btn-danger-outline:disabled.focus {\n  border-color: #eba5a3;\n}\n\n.btn-danger-outline.disabled:hover,\n.btn-danger-outline:disabled:hover {\n  border-color: #eba5a3;\n}\n\n.btn-link,\n.btn-plain {\n  font-weight: normal;\n  color: #0275d8;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-plain,\n.btn-link:active,\n.btn-plain:active,\n.btn-link.active,\n.active.btn-plain,\n.btn-link:disabled,\n.btn-plain:disabled {\n  background-color: transparent;\n}\n\n.btn-link,\n.btn-plain,\n.btn-link:focus,\n.btn-plain:focus,\n.btn-link:active,\n.btn-plain:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-plain:hover {\n  border-color: transparent;\n}\n\n.btn-link:focus,\n.btn-plain:focus,\n.btn-link:hover,\n.btn-plain:hover {\n  color: #014c8c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link:disabled:focus,\n.btn-plain:disabled:focus,\n.btn-link:disabled:hover,\n.btn-plain:disabled:hover {\n  color: #818a91;\n  text-decoration: none;\n}\n\n.btn-lg {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem;\n}\n\n.btn-sm {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  transition-property: height;\n}\n\n.card {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 0.25rem;\n}\n\n.card-block {\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.card-header:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top: 1px solid #e5e5e5;\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n\n.card-primary {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.card-success {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.card-info {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.card-warning {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.card-danger {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.card-primary-outline {\n  background-color: transparent;\n  border-color: #0275d8;\n}\n\n.card-secondary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n}\n\n.card-info-outline {\n  background-color: transparent;\n  border-color: #5bc0de;\n}\n\n.card-success-outline {\n  background-color: transparent;\n  border-color: #5cb85c;\n}\n\n.card-warning-outline {\n  background-color: transparent;\n  border-color: #f0ad4e;\n}\n\n.card-danger-outline {\n  background-color: transparent;\n  border-color: #d9534f;\n}\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff;\n}\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-blockquote > footer {\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.card-inverse .card-link:focus,\n.card-inverse .card-link:hover {\n  color: #fff;\n}\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0;\n}\n\n.card-img {\n  border-radius: 0.25rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n\n.card-img-top {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card-img-bottom {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n\n@media (min-width: 544px) {\n  .card-deck {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    margin-right: -.625rem;\n    margin-left: -.625rem;\n  }\n\n  .card-deck .card {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0;\n        -ms-flex: 1 0 0;\n            flex: 1 0 0;\n    margin-right: .625rem;\n    margin-left: .625rem;\n  }\n}\n\n@media (min-width: 544px) {\n  .card-group {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n\n  .card-group .card {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 0;\n        -ms-flex: 1 0 0;\n            flex: 1 0 0;\n  }\n\n  .card-group .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n\n  .card-group .card:first-child {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  .card-group .card:first-child .card-img-top {\n    border-top-right-radius: 0;\n  }\n\n  .card-group .card:first-child .card-img-bottom {\n    border-bottom-right-radius: 0;\n  }\n\n  .card-group .card:last-child {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n  }\n\n  .card-group .card:last-child .card-img-top {\n    border-top-left-radius: 0;\n  }\n\n  .card-group .card:last-child .card-img-bottom {\n    border-bottom-left-radius: 0;\n  }\n\n  .card-group .card:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n\n  .card-group .card:not(:first-child):not(:last-child) .card-img-top,\n  .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n    border-radius: 0;\n  }\n}\n\n@media (min-width: 544px) {\n  .card-columns {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n       -moz-column-gap: 1.25rem;\n            column-gap: 1.25rem;\n  }\n\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress,\n.beverage .strength .theine-level progress {\n  display: block;\n  width: 100%;\n  height: 1rem;\n  margin-bottom: 1rem;\n}\n\n.progress[value],\n.beverage .strength .theine-level progress[value] {\n  color: #0074d9;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.progress[value]::-webkit-progress-bar,\n.beverage .strength .theine-level progress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 0.25rem;\n}\n\n.progress[value]::-webkit-progress-value::before,\n.beverage .strength .theine-level progress[value]::-webkit-progress-value::before {\n  content: attr(value);\n}\n\n.progress[value]::-webkit-progress-value,\n.beverage .strength .theine-level progress[value]::-webkit-progress-value {\n  background-color: #0074d9;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.progress[value=\"100\"]::-webkit-progress-value,\n.beverage .strength .theine-level progress[value=\"100\"]::-webkit-progress-value {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress,\n  .beverage .strength .theine-level progress {\n    background-color: #eee;\n    border-radius: 0.25rem;\n  }\n\n  .progress-bar {\n    display: inline-block;\n    height: 1rem;\n    text-indent: -999rem;\n    background-color: #0074d9;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .progress[width^=\"0\"],\n  .beverage .strength .theine-level progress[width^=\"0\"] {\n    min-width: 2rem;\n    color: #818a91;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .progress[width=\"100%\"],\n  .beverage .strength .theine-level progress[width=\"100%\"] {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n}\n\n.progress-striped[value]::-webkit-progress-value,\n.beverage .strength .theine-level progress[value].unknown::-webkit-progress-value {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-striped[value]::-moz-progress-bar,\n.beverage .strength .theine-level progress[value].unknown::-moz-progress-bar {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-bar-striped {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-size: 1rem 1rem;\n  }\n}\n\n.progress-animated[value]::-webkit-progress-value {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-animated[value]::-moz-progress-bar {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-animated .progress-bar-striped {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n            animation: progress-bar-stripes 2s linear infinite;\n  }\n}\n\n.progress-success[value]::-webkit-progress-value {\n  background-color: #5cb85c;\n}\n\n.progress-success[value]::-moz-progress-bar {\n  background-color: #5cb85c;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-success .progress-bar {\n    background-color: #5cb85c;\n  }\n}\n\n.progress-info[value]::-webkit-progress-value {\n  background-color: #5bc0de;\n}\n\n.progress-info[value]::-moz-progress-bar {\n  background-color: #5bc0de;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-info .progress-bar {\n    background-color: #5bc0de;\n  }\n}\n\n.progress-warning[value]::-webkit-progress-value {\n  background-color: #f0ad4e;\n}\n\n.progress-warning[value]::-moz-progress-bar {\n  background-color: #f0ad4e;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-warning .progress-bar {\n    background-color: #f0ad4e;\n  }\n}\n\n.progress-danger[value]::-webkit-progress-value {\n  background-color: #d9534f;\n}\n\n.progress-danger[value]::-moz-progress-bar {\n  background-color: #d9534f;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-danger .progress-bar {\n    background-color: #d9534f;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  opacity: 0;\n}\n\n.tooltip.in {\n  opacity: 0.9;\n}\n\n.tooltip.tooltip-top,\n.tooltip.bs-tether-element-attached-bottom {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n\n.tooltip.tooltip-top .tooltip-arrow,\n.tooltip.bs-tether-element-attached-bottom .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.tooltip-right,\n.tooltip.bs-tether-element-attached-left {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n\n.tooltip.tooltip-right .tooltip-arrow,\n.tooltip.bs-tether-element-attached-left .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.tooltip-bottom,\n.tooltip.bs-tether-element-attached-top {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n\n.tooltip.tooltip-bottom .tooltip-arrow,\n.tooltip.bs-tether-element-attached-top .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.tooltip-left,\n.tooltip.bs-tether-element-attached-right {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n\n.tooltip.tooltip-left .tooltip-arrow,\n.tooltip.bs-tether-element-attached-right .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n\n.popover.popover-top,\n.popover.bs-tether-element-attached-bottom {\n  margin-top: -10px;\n}\n\n.popover.popover-top .popover-arrow,\n.popover.bs-tether-element-attached-bottom .popover-arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  border-bottom-width: 0;\n}\n\n.popover.popover-top .popover-arrow::after,\n.popover.bs-tether-element-attached-bottom .popover-arrow::after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \"\";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n\n.popover.popover-right,\n.popover.bs-tether-element-attached-left {\n  margin-left: 10px;\n}\n\n.popover.popover-right .popover-arrow,\n.popover.bs-tether-element-attached-left .popover-arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: rgba(0, 0, 0, 0.25);\n  border-left-width: 0;\n}\n\n.popover.popover-right .popover-arrow::after,\n.popover.bs-tether-element-attached-left .popover-arrow::after {\n  bottom: -10px;\n  left: 1px;\n  content: \"\";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n\n.popover.popover-bottom,\n.popover.bs-tether-element-attached-top {\n  margin-top: 10px;\n}\n\n.popover.popover-bottom .popover-arrow,\n.popover.bs-tether-element-attached-top .popover-arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.popover-bottom .popover-arrow::after,\n.popover.bs-tether-element-attached-top .popover-arrow::after {\n  top: 1px;\n  margin-left: -10px;\n  content: \"\";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n\n.popover.popover-left,\n.popover.bs-tether-element-attached-right {\n  margin-left: -10px;\n}\n\n.popover.popover-left .popover-arrow,\n.popover.bs-tether-element-attached-right .popover-arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.popover-left .popover-arrow::after,\n.popover.bs-tether-element-attached-right .popover-arrow::after {\n  right: 1px;\n  bottom: -10px;\n  content: \"\";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: -0.7rem -0.7rem 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover-arrow,\n.popover-arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover-arrow {\n  border-width: 11px;\n}\n\n.popover-arrow::after {\n  content: \"\";\n  border-width: 10px;\n}\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-xs-left {\n  float: left !important;\n}\n\n.pull-xs-right {\n  float: right !important;\n}\n\n.pull-xs-none {\n  float: none !important;\n}\n\n@media (min-width: 544px) {\n  .pull-sm-left {\n    float: left !important;\n  }\n\n  .pull-sm-right {\n    float: right !important;\n  }\n\n  .pull-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .pull-md-left {\n    float: left !important;\n  }\n\n  .pull-md-right {\n    float: right !important;\n  }\n\n  .pull-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .pull-lg-left {\n    float: left !important;\n  }\n\n  .pull-lg-right {\n    float: right !important;\n  }\n\n  .pull-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .pull-xl-left {\n    float: left !important;\n  }\n\n  .pull-xl-right {\n    float: right !important;\n  }\n\n  .pull-xl-none {\n    float: none !important;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n.text-hide {\n  font: \"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-xs-left {\n  text-align: left !important;\n}\n\n.text-xs-right {\n  text-align: right !important;\n}\n\n.text-xs-center {\n  text-align: center !important;\n}\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n\n  .text-sm-right {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n\n  .text-md-right {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n\n  .text-lg-right {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n\n  .text-xl-right {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-normal {\n  font-weight: normal;\n}\n\n.font-weight-bold {\n  font-weight: bold;\n}\n\n.font-italic {\n  font-style: italic;\n}\n\n.text-muted,\n.beverage .headers .brand {\n  color: #818a91;\n}\n\n.text-primary {\n  color: #0275d8 !important;\n}\n\na.text-primary:focus,\na.text-primary:hover {\n  color: #025aa5;\n}\n\n.text-success {\n  color: #5cb85c !important;\n}\n\na.text-success:focus,\na.text-success:hover {\n  color: #449d44;\n}\n\n.text-info {\n  color: #5bc0de !important;\n}\n\na.text-info:focus,\na.text-info:hover {\n  color: #31b0d5;\n}\n\n.text-warning {\n  color: #f0ad4e !important;\n}\n\na.text-warning:focus,\na.text-warning:hover {\n  color: #ec971f;\n}\n\n.text-danger {\n  color: #d9534f !important;\n}\n\na.text-danger:focus,\na.text-danger:hover {\n  color: #c9302c;\n}\n\n.bg-inverse {\n  color: #eceeef;\n  background-color: #373a3c;\n}\n\n.bg-faded {\n  background-color: #f7f7f9;\n}\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #0275d8 !important;\n}\n\na.bg-primary:focus,\na.bg-primary:hover {\n  background-color: #025aa5;\n}\n\n.bg-success {\n  color: #fff !important;\n  background-color: #5cb85c !important;\n}\n\na.bg-success:focus,\na.bg-success:hover {\n  background-color: #449d44;\n}\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important;\n}\n\na.bg-info:focus,\na.bg-info:hover {\n  background-color: #31b0d5;\n}\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important;\n}\n\na.bg-warning:focus,\na.bg-warning:hover {\n  background-color: #ec971f;\n}\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important;\n}\n\na.bg-danger:focus,\na.bg-danger:hover {\n  background-color: #c9302c;\n}\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-a-0 {\n  margin: 0 0 !important;\n}\n\n.m-t-0 {\n  margin-top: 0 !important;\n}\n\n.m-r-0 {\n  margin-right: 0 !important;\n}\n\n.m-b-0 {\n  margin-bottom: 0 !important;\n}\n\n.m-l-0 {\n  margin-left: 0 !important;\n}\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-a-1 {\n  margin: 1rem 1rem !important;\n}\n\n.m-t-1 {\n  margin-top: 1rem !important;\n}\n\n.m-r-1 {\n  margin-right: 1rem !important;\n}\n\n.m-b-1 {\n  margin-bottom: 1rem !important;\n}\n\n.m-l-1 {\n  margin-left: 1rem !important;\n}\n\n.m-x-1 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.m-y-1 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-a-2 {\n  margin: 1.5rem 1.5rem !important;\n}\n\n.m-t-2 {\n  margin-top: 1.5rem !important;\n}\n\n.m-r-2 {\n  margin-right: 1.5rem !important;\n}\n\n.m-b-2 {\n  margin-bottom: 1.5rem !important;\n}\n\n.m-l-2 {\n  margin-left: 1.5rem !important;\n}\n\n.m-x-2 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.m-y-2 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-a-3 {\n  margin: 3rem 3rem !important;\n}\n\n.m-t-3 {\n  margin-top: 3rem !important;\n}\n\n.m-r-3 {\n  margin-right: 3rem !important;\n}\n\n.m-b-3 {\n  margin-bottom: 3rem !important;\n}\n\n.m-l-3 {\n  margin-left: 3rem !important;\n}\n\n.m-x-3 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.m-y-3 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.p-a-0 {\n  padding: 0 0 !important;\n}\n\n.p-t-0 {\n  padding-top: 0 !important;\n}\n\n.p-r-0 {\n  padding-right: 0 !important;\n}\n\n.p-b-0 {\n  padding-bottom: 0 !important;\n}\n\n.p-l-0 {\n  padding-left: 0 !important;\n}\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-a-1 {\n  padding: 1rem 1rem !important;\n}\n\n.p-t-1 {\n  padding-top: 1rem !important;\n}\n\n.p-r-1 {\n  padding-right: 1rem !important;\n}\n\n.p-b-1 {\n  padding-bottom: 1rem !important;\n}\n\n.p-l-1 {\n  padding-left: 1rem !important;\n}\n\n.p-x-1 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.p-y-1 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-a-2 {\n  padding: 1.5rem 1.5rem !important;\n}\n\n.p-t-2 {\n  padding-top: 1.5rem !important;\n}\n\n.p-r-2 {\n  padding-right: 1.5rem !important;\n}\n\n.p-b-2 {\n  padding-bottom: 1.5rem !important;\n}\n\n.p-l-2 {\n  padding-left: 1.5rem !important;\n}\n\n.p-x-2 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.p-y-2 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-a-3 {\n  padding: 3rem 3rem !important;\n}\n\n.p-t-3 {\n  padding-top: 3rem !important;\n}\n\n.p-r-3 {\n  padding-right: 3rem !important;\n}\n\n.p-b-3 {\n  padding-bottom: 3rem !important;\n}\n\n.p-l-3 {\n  padding-left: 3rem !important;\n}\n\n.p-x-3 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.p-y-3 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.hidden-xs-up {\n  display: none !important;\n}\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important;\n  }\n}\n\n.hidden-xl-down {\n  display: none !important;\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n/*!\n *  Font Awesome 4.5.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(24) + ") format(\"truetype\"), url(" + __webpack_require__(25) + ") format(\"woff\"), url(" + __webpack_require__(26) + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fa,\n.bev-icon .bev-icon-back,\n.bev-icon .bev-icon-front,\n.icon-morning,\n.icon-daytime,\n.icon-evening,\n.icon-note,\n.icon-temp,\n.icon-time,\n.icon-loading {\n  display: inline-block;\n  font: normal normal normal 14px / 1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* makes the font 33% larger relative to the icon container */\n\n.fa-lg,\n.icon-loading {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n\n.fa-2x,\n.beverage.detailed .headers .bev-icon {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-spin,\n.icon-loading {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n\n.fa-stack,\n.bev-icon {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n\n.fa-stack-1x,\n.bev-icon .bev-icon-front,\n.fa-stack-2x,\n.bev-icon .bev-icon-back {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.fa-stack-1x,\n.bev-icon .bev-icon-front {\n  line-height: inherit;\n}\n\n.fa-stack-2x,\n.bev-icon .bev-icon-back {\n  font-size: 2em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n/* Create a text border (from http://stackoverflow.com/a/8712442/1734119) */\n\n/* Beverages icons */\n\n.bev-icon {\n  float: left;\n  margin-top: -2px;\n  margin-right: 5px;\n}\n\n.bev-icon .bev-icon-back:before {\n  content: \"\\F0C8\";\n}\n\n.bev-icon.tea-white.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #ddd, -2px -1px 0 #ddd, -2px 0px 0 #ddd, -2px 1px 0 #ddd, -2px 2px 0 #ddd, -1px -2px 0 #ddd, -1px -1px 0 #ddd, -1px 0px 0 #ddd, -1px 1px 0 #ddd, -1px 2px 0 #ddd, 0px -2px 0 #ddd, 0px -1px 0 #ddd, 0px 0px 0 #ddd, 0px 1px 0 #ddd, 0px 2px 0 #ddd, 1px -2px 0 #ddd, 1px -1px 0 #ddd, 1px 0px 0 #ddd, 1px 1px 0 #ddd, 1px 2px 0 #ddd, 2px -2px 0 #ddd, 2px -1px 0 #ddd, 2px 0px 0 #ddd, 2px 1px 0 #ddd, 2px 2px 0 #ddd;\n}\n\n.bev-icon.tea-white .bev-icon-back {\n  color: #666;\n  text-shadow: -2px -2px 0 #666, -2px -1px 0 #666, -2px 0px 0 #666, -2px 1px 0 #666, -2px 2px 0 #666, -1px -2px 0 #666, -1px -1px 0 #666, -1px 0px 0 #666, -1px 1px 0 #666, -1px 2px 0 #666, 0px -2px 0 #666, 0px -1px 0 #666, 0px 0px 0 #666, 0px 1px 0 #666, 0px 2px 0 #666, 1px -2px 0 #666, 1px -1px 0 #666, 1px 0px 0 #666, 1px 1px 0 #666, 1px 2px 0 #666, 2px -2px 0 #666, 2px -1px 0 #666, 2px 0px 0 #666, 2px 1px 0 #666, 2px 2px 0 #666;\n}\n\n.bev-icon.tea-white .bev-icon-front {\n  color: #ddd;\n}\n\n.bev-icon.tea-white .bev-icon-front:before {\n  content: \"\\F06C\";\n}\n\n.bev-icon.tea-green.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #7f7, -2px -1px 0 #7f7, -2px 0px 0 #7f7, -2px 1px 0 #7f7, -2px 2px 0 #7f7, -1px -2px 0 #7f7, -1px -1px 0 #7f7, -1px 0px 0 #7f7, -1px 1px 0 #7f7, -1px 2px 0 #7f7, 0px -2px 0 #7f7, 0px -1px 0 #7f7, 0px 0px 0 #7f7, 0px 1px 0 #7f7, 0px 2px 0 #7f7, 1px -2px 0 #7f7, 1px -1px 0 #7f7, 1px 0px 0 #7f7, 1px 1px 0 #7f7, 1px 2px 0 #7f7, 2px -2px 0 #7f7, 2px -1px 0 #7f7, 2px 0px 0 #7f7, 2px 1px 0 #7f7, 2px 2px 0 #7f7;\n}\n\n.bev-icon.tea-green .bev-icon-back {\n  color: #666;\n  text-shadow: -2px -2px 0 #666, -2px -1px 0 #666, -2px 0px 0 #666, -2px 1px 0 #666, -2px 2px 0 #666, -1px -2px 0 #666, -1px -1px 0 #666, -1px 0px 0 #666, -1px 1px 0 #666, -1px 2px 0 #666, 0px -2px 0 #666, 0px -1px 0 #666, 0px 0px 0 #666, 0px 1px 0 #666, 0px 2px 0 #666, 1px -2px 0 #666, 1px -1px 0 #666, 1px 0px 0 #666, 1px 1px 0 #666, 1px 2px 0 #666, 2px -2px 0 #666, 2px -1px 0 #666, 2px 0px 0 #666, 2px 1px 0 #666, 2px 2px 0 #666;\n}\n\n.bev-icon.tea-green .bev-icon-front {\n  color: #7f7;\n}\n\n.bev-icon.tea-green .bev-icon-front:before {\n  content: \"\\F06C\";\n}\n\n.bev-icon.tea-oolong.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #7bd, -2px -1px 0 #7bd, -2px 0px 0 #7bd, -2px 1px 0 #7bd, -2px 2px 0 #7bd, -1px -2px 0 #7bd, -1px -1px 0 #7bd, -1px 0px 0 #7bd, -1px 1px 0 #7bd, -1px 2px 0 #7bd, 0px -2px 0 #7bd, 0px -1px 0 #7bd, 0px 0px 0 #7bd, 0px 1px 0 #7bd, 0px 2px 0 #7bd, 1px -2px 0 #7bd, 1px -1px 0 #7bd, 1px 0px 0 #7bd, 1px 1px 0 #7bd, 1px 2px 0 #7bd, 2px -2px 0 #7bd, 2px -1px 0 #7bd, 2px 0px 0 #7bd, 2px 1px 0 #7bd, 2px 2px 0 #7bd;\n}\n\n.bev-icon.tea-oolong .bev-icon-back {\n  color: #666;\n  text-shadow: -2px -2px 0 #666, -2px -1px 0 #666, -2px 0px 0 #666, -2px 1px 0 #666, -2px 2px 0 #666, -1px -2px 0 #666, -1px -1px 0 #666, -1px 0px 0 #666, -1px 1px 0 #666, -1px 2px 0 #666, 0px -2px 0 #666, 0px -1px 0 #666, 0px 0px 0 #666, 0px 1px 0 #666, 0px 2px 0 #666, 1px -2px 0 #666, 1px -1px 0 #666, 1px 0px 0 #666, 1px 1px 0 #666, 1px 2px 0 #666, 2px -2px 0 #666, 2px -1px 0 #666, 2px 0px 0 #666, 2px 1px 0 #666, 2px 2px 0 #666;\n}\n\n.bev-icon.tea-oolong .bev-icon-front {\n  color: #7bd;\n}\n\n.bev-icon.tea-oolong .bev-icon-front:before {\n  content: \"\\F06C\";\n}\n\n.bev-icon.tea-black.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #111, -2px -1px 0 #111, -2px 0px 0 #111, -2px 1px 0 #111, -2px 2px 0 #111, -1px -2px 0 #111, -1px -1px 0 #111, -1px 0px 0 #111, -1px 1px 0 #111, -1px 2px 0 #111, 0px -2px 0 #111, 0px -1px 0 #111, 0px 0px 0 #111, 0px 1px 0 #111, 0px 2px 0 #111, 1px -2px 0 #111, 1px -1px 0 #111, 1px 0px 0 #111, 1px 1px 0 #111, 1px 2px 0 #111, 2px -2px 0 #111, 2px -1px 0 #111, 2px 0px 0 #111, 2px 1px 0 #111, 2px 2px 0 #111;\n}\n\n.bev-icon.tea-black .bev-icon-back {\n  color: #666;\n  text-shadow: -2px -2px 0 #666, -2px -1px 0 #666, -2px 0px 0 #666, -2px 1px 0 #666, -2px 2px 0 #666, -1px -2px 0 #666, -1px -1px 0 #666, -1px 0px 0 #666, -1px 1px 0 #666, -1px 2px 0 #666, 0px -2px 0 #666, 0px -1px 0 #666, 0px 0px 0 #666, 0px 1px 0 #666, 0px 2px 0 #666, 1px -2px 0 #666, 1px -1px 0 #666, 1px 0px 0 #666, 1px 1px 0 #666, 1px 2px 0 #666, 2px -2px 0 #666, 2px -1px 0 #666, 2px 0px 0 #666, 2px 1px 0 #666, 2px 2px 0 #666;\n}\n\n.bev-icon.tea-black .bev-icon-front {\n  color: #111;\n}\n\n.bev-icon.tea-black .bev-icon-front:before {\n  content: \"\\F06C\";\n}\n\n.bev-icon.rooibos.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #f55, -2px -1px 0 #f55, -2px 0px 0 #f55, -2px 1px 0 #f55, -2px 2px 0 #f55, -1px -2px 0 #f55, -1px -1px 0 #f55, -1px 0px 0 #f55, -1px 1px 0 #f55, -1px 2px 0 #f55, 0px -2px 0 #f55, 0px -1px 0 #f55, 0px 0px 0 #f55, 0px 1px 0 #f55, 0px 2px 0 #f55, 1px -2px 0 #f55, 1px -1px 0 #f55, 1px 0px 0 #f55, 1px 1px 0 #f55, 1px 2px 0 #f55, 2px -2px 0 #f55, 2px -1px 0 #f55, 2px 0px 0 #f55, 2px 1px 0 #f55, 2px 2px 0 #f55;\n}\n\n.bev-icon.rooibos .bev-icon-back {\n  color: #666;\n  text-shadow: -2px -2px 0 #666, -2px -1px 0 #666, -2px 0px 0 #666, -2px 1px 0 #666, -2px 2px 0 #666, -1px -2px 0 #666, -1px -1px 0 #666, -1px 0px 0 #666, -1px 1px 0 #666, -1px 2px 0 #666, 0px -2px 0 #666, 0px -1px 0 #666, 0px 0px 0 #666, 0px 1px 0 #666, 0px 2px 0 #666, 1px -2px 0 #666, 1px -1px 0 #666, 1px 0px 0 #666, 1px 1px 0 #666, 1px 2px 0 #666, 2px -2px 0 #666, 2px -1px 0 #666, 2px 0px 0 #666, 2px 1px 0 #666, 2px 2px 0 #666;\n}\n\n.bev-icon.rooibos .bev-icon-front {\n  color: #f55;\n}\n\n.bev-icon.rooibos .bev-icon-front:before {\n  content: \"\\F06C\";\n}\n\n.bev-icon.infusion.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #bfb, -2px -1px 0 #bfb, -2px 0px 0 #bfb, -2px 1px 0 #bfb, -2px 2px 0 #bfb, -1px -2px 0 #bfb, -1px -1px 0 #bfb, -1px 0px 0 #bfb, -1px 1px 0 #bfb, -1px 2px 0 #bfb, 0px -2px 0 #bfb, 0px -1px 0 #bfb, 0px 0px 0 #bfb, 0px 1px 0 #bfb, 0px 2px 0 #bfb, 1px -2px 0 #bfb, 1px -1px 0 #bfb, 1px 0px 0 #bfb, 1px 1px 0 #bfb, 1px 2px 0 #bfb, 2px -2px 0 #bfb, 2px -1px 0 #bfb, 2px 0px 0 #bfb, 2px 1px 0 #bfb, 2px 2px 0 #bfb;\n}\n\n.bev-icon.infusion .bev-icon-back {\n  color: #666;\n  text-shadow: -2px -2px 0 #666, -2px -1px 0 #666, -2px 0px 0 #666, -2px 1px 0 #666, -2px 2px 0 #666, -1px -2px 0 #666, -1px -1px 0 #666, -1px 0px 0 #666, -1px 1px 0 #666, -1px 2px 0 #666, 0px -2px 0 #666, 0px -1px 0 #666, 0px 0px 0 #666, 0px 1px 0 #666, 0px 2px 0 #666, 1px -2px 0 #666, 1px -1px 0 #666, 1px 0px 0 #666, 1px 1px 0 #666, 1px 2px 0 #666, 2px -2px 0 #666, 2px -1px 0 #666, 2px 0px 0 #666, 2px 1px 0 #666, 2px 2px 0 #666;\n}\n\n.bev-icon.infusion .bev-icon-front {\n  color: #bfb;\n}\n\n.bev-icon.infusion .bev-icon-front:before {\n  content: \"\\F18C\";\n}\n\n.bev-icon.coffee.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #ddd, -2px -1px 0 #ddd, -2px 0px 0 #ddd, -2px 1px 0 #ddd, -2px 2px 0 #ddd, -1px -2px 0 #ddd, -1px -1px 0 #ddd, -1px 0px 0 #ddd, -1px 1px 0 #ddd, -1px 2px 0 #ddd, 0px -2px 0 #ddd, 0px -1px 0 #ddd, 0px 0px 0 #ddd, 0px 1px 0 #ddd, 0px 2px 0 #ddd, 1px -2px 0 #ddd, 1px -1px 0 #ddd, 1px 0px 0 #ddd, 1px 1px 0 #ddd, 1px 2px 0 #ddd, 2px -2px 0 #ddd, 2px -1px 0 #ddd, 2px 0px 0 #ddd, 2px 1px 0 #ddd, 2px 2px 0 #ddd;\n}\n\n.bev-icon.coffee .bev-icon-back {\n  color: #000;\n  text-shadow: -2px -2px 0 #000, -2px -1px 0 #000, -2px 0px 0 #000, -2px 1px 0 #000, -2px 2px 0 #000, -1px -2px 0 #000, -1px -1px 0 #000, -1px 0px 0 #000, -1px 1px 0 #000, -1px 2px 0 #000, 0px -2px 0 #000, 0px -1px 0 #000, 0px 0px 0 #000, 0px 1px 0 #000, 0px 2px 0 #000, 1px -2px 0 #000, 1px -1px 0 #000, 1px 0px 0 #000, 1px 1px 0 #000, 1px 2px 0 #000, 2px -2px 0 #000, 2px -1px 0 #000, 2px 0px 0 #000, 2px 1px 0 #000, 2px 2px 0 #000;\n}\n\n.bev-icon.coffee .bev-icon-front {\n  color: #ddd;\n}\n\n.bev-icon.coffee .bev-icon-front:before {\n  content: \"\\F0F4\";\n}\n\n.bev-icon.cocoa.packaged .bev-icon-back {\n  text-shadow: -2px -2px 0 #ddd, -2px -1px 0 #ddd, -2px 0px 0 #ddd, -2px 1px 0 #ddd, -2px 2px 0 #ddd, -1px -2px 0 #ddd, -1px -1px 0 #ddd, -1px 0px 0 #ddd, -1px 1px 0 #ddd, -1px 2px 0 #ddd, 0px -2px 0 #ddd, 0px -1px 0 #ddd, 0px 0px 0 #ddd, 0px 1px 0 #ddd, 0px 2px 0 #ddd, 1px -2px 0 #ddd, 1px -1px 0 #ddd, 1px 0px 0 #ddd, 1px 1px 0 #ddd, 1px 2px 0 #ddd, 2px -2px 0 #ddd, 2px -1px 0 #ddd, 2px 0px 0 #ddd, 2px 1px 0 #ddd, 2px 2px 0 #ddd;\n}\n\n.bev-icon.cocoa .bev-icon-back {\n  color: #823906;\n  text-shadow: -2px -2px 0 #823906, -2px -1px 0 #823906, -2px 0px 0 #823906, -2px 1px 0 #823906, -2px 2px 0 #823906, -1px -2px 0 #823906, -1px -1px 0 #823906, -1px 0px 0 #823906, -1px 1px 0 #823906, -1px 2px 0 #823906, 0px -2px 0 #823906, 0px -1px 0 #823906, 0px 0px 0 #823906, 0px 1px 0 #823906, 0px 2px 0 #823906, 1px -2px 0 #823906, 1px -1px 0 #823906, 1px 0px 0 #823906, 1px 1px 0 #823906, 1px 2px 0 #823906, 2px -2px 0 #823906, 2px -1px 0 #823906, 2px 0px 0 #823906, 2px 1px 0 #823906, 2px 2px 0 #823906;\n}\n\n.bev-icon.cocoa .bev-icon-front {\n  color: #ddd;\n}\n\n.bev-icon.cocoa .bev-icon-front:before {\n  content: \"\\F0F4\";\n}\n\n/* Other icons */\n\n/* Moment of day */\n\n.icon-morning:before {\n  content: \"\\E855\";\n}\n\n.icon-daytime:before {\n  content: \"\\E1AD\";\n}\n\n.icon-evening:before {\n  content: \"\\E3A7\";\n}\n\n/* Misc. */\n\n.icon-note:before {\n  content: \"\\F27A\";\n}\n\n.icon-temp:before {\n  content: \"\\E80E\";\n}\n\n.icon-time:before {\n  content: \"\\E88C\";\n}\n\n/* Loading */\n\n.icon-loading:before {\n  content: \"\\F1CE\";\n}\n\n.beverage .bev-icon {\n  cursor: pointer;\n}\n\n.beverage .headers .brand {\n  display: none;\n}\n\n.beverage .strength {\n  text-align: center;\n}\n\n.beverage .strength .moment ul {\n  margin-bottom: 0;\n}\n\n.beverage .strength .theine-level progress.unknown[value]::-webkit-progress-value {\n  background-color: #818a91;\n}\n\n.beverage .strength .theine-level progress.unknown[value]::-moz-progress-bar {\n  background-color: #818a91;\n}\n\n@media screen and (min-width: 0\\0) {\n  .beverage .strength .theine-level progress.unknown .progress-bar {\n    background-color: #818a91;\n  }\n}\n\n.beverage .strength .theine-level progress.none[value]::-webkit-progress-value,\n.beverage .strength .theine-level progress.low[value]::-webkit-progress-value {\n  background-color: #5cb85c;\n}\n\n.beverage .strength .theine-level progress.none[value]::-moz-progress-bar,\n.beverage .strength .theine-level progress.low[value]::-moz-progress-bar {\n  background-color: #5cb85c;\n}\n\n@media screen and (min-width: 0\\0) {\n  .beverage .strength .theine-level progress.none .progress-bar,\n  .beverage .strength .theine-level progress.low .progress-bar {\n    background-color: #5cb85c;\n  }\n}\n\n.beverage .strength .theine-level progress.medium[value]::-webkit-progress-value,\n.beverage .strength .theine-level progress.high[value]::-webkit-progress-value {\n  background-color: #f0ad4e;\n}\n\n.beverage .strength .theine-level progress.medium[value]::-moz-progress-bar,\n.beverage .strength .theine-level progress.high[value]::-moz-progress-bar {\n  background-color: #f0ad4e;\n}\n\n@media screen and (min-width: 0\\0) {\n  .beverage .strength .theine-level progress.medium .progress-bar,\n  .beverage .strength .theine-level progress.high .progress-bar {\n    background-color: #f0ad4e;\n  }\n}\n\n.beverage .strength .theine-level progress.coffee[value]::-webkit-progress-value {\n  background-color: #d9534f;\n}\n\n.beverage .strength .theine-level progress.coffee[value]::-moz-progress-bar {\n  background-color: #d9534f;\n}\n\n@media screen and (min-width: 0\\0) {\n  .beverage .strength .theine-level progress.coffee .progress-bar {\n    background-color: #d9534f;\n  }\n}\n\n.beverage .preparation {\n  display: none;\n  text-align: center;\n}\n\n.beverage.detailed .headers .brand {\n  display: initial;\n}\n\n.beverage.detailed .preparation {\n  display: initial;\n}\n\n/* Utility classes */\n\n.btn-plain {\n  color: inherit;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvc3JjL21haW4vc2Nzcy9iZXZlcmFnZXMuc2NzcyIsInNvdXJjZXMiOlsiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvc3JjL21haW4vc2Nzcy9iZXZlcmFnZXMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL3NyYy9tYWluL3Njc3MvX2Jvb3RzdHJhcC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fbWl4aW5zLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9faG92ZXIuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2ltYWdlLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19sYWJlbC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fcmVzZXQtZmlsdGVyLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19yZXNpemUuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3NjcmVlbi1yZWFkZXIuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3NpemUuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3RhYi1mb2N1cy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fcmVzZXQtdGV4dC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fdGV4dC1lbXBoYXNpcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fdGV4dC1oaWRlLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL190ZXh0LXRydW5jYXRlLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbGVydC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnV0dG9ucy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fY2FyZHMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3BhZ2luYXRpb24uc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2xpc3RzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19saXN0LWdyb3VwLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19uYXYtZGl2aWRlci5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZm9ybXMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3Byb2dyZXNzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL190YWJsZS1yb3cuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JhY2tncm91bmQtdmFyaWFudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYm9yZGVyLXJhZGl1cy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JhZGllbnRzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19jbGVhcmZpeC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fY2VudGVyLWJsb2NrLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkLWZyYW1ld29yay5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fcHVsbHMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fbm9ybWFsaXplLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ByaW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3JlYm9vdC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL190eXBlLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2ltYWdlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19jb2RlLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2dyaWQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdGFibGVzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2Zvcm1zLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2J1dHRvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fYW5pbWF0aW9uLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2NhcmQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fcHJvZ3Jlc3Muc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdG9vbHRpcC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19wb3BvdmVyLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3V0aWxpdGllcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMtYmFja2dyb3VuZC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMtc3BhY2luZy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMtcmVzcG9uc2l2ZS5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvc3JjL21haW4vc2Nzcy9faWNvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL3NyYy9tYWluL3Njc3MvX2ZvbnQtdmFyaWFibGVzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvY3lDaG9wL2JldmVyYWdlcy1qcy9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19taXhpbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fY29yZS5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvbm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL19sYXJnZXIuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fYW5pbWF0ZWQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9jeUNob3AvYmV2ZXJhZ2VzLWpzL25vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9fc3RhY2tlZC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2N5Q2hvcC9iZXZlcmFnZXMtanMvc3JjL21haW4vc2Nzcy9fbWl4aW5zLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImJvb3RzdHJhcFwiO1xuQGltcG9ydCBcImljb25zXCI7XG5cbi5iZXZlcmFnZSB7XG4gIEBleHRlbmQgLnJvdztcblxuICAuYmV2LWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5oZWFkZXJzIHtcbiAgICBAZXh0ZW5kIC5jb2wteHMtNjtcbiAgICBAZXh0ZW5kIC5jb2wtc20tODtcbiAgICBAZXh0ZW5kIC5jb2wtbWQtNTtcblxuICAgIC5uYW1lIHtcbiAgICAgIEBleHRlbmQgaDQ7XG4gICAgfVxuXG4gICAgLmJyYW5kIHtcbiAgICAgIEBleHRlbmQgaDU7XG4gICAgICBAZXh0ZW5kIC50ZXh0LW11dGVkO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubW9yZSB7XG4gICAgQGV4dGVuZCAuY29sLXhzLTEyO1xuICAgIEBleHRlbmQgLmNvbC1zbS00O1xuICAgIEBleHRlbmQgLmNvbC1tZC00O1xuXG4gICAgQGV4dGVuZCAucm93O1xuICAgIC5iZW5lZml0cyB7XG4gICAgICBAZXh0ZW5kIC5jb2wteHMtMTA7XG4gICAgfVxuICAgIC5ub3RlIHtcbiAgICAgIEBleHRlbmQgLmNvbC14cy0yO1xuICAgIH1cbiAgfVxuXG4gIC5zdHJlbmd0aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgQGV4dGVuZCAuY29sLXhzLTY7XG4gICAgQGV4dGVuZCAuY29sLXNtLTQ7XG4gICAgQGV4dGVuZCAuY29sLW1kLTM7XG5cbiAgICBAZXh0ZW5kIC5yb3c7XG4gICAgLm1vbWVudCwgLnRoZWluZS1sZXZlbCB7XG4gICAgICBAZXh0ZW5kIC5jb2wteHMtNjtcbiAgICB9XG5cbiAgICAubW9tZW50IHtcbiAgICAgIHVsIHtcbiAgICAgICAgQGV4dGVuZCAubGlzdC1pbmxpbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgPiBsaSB7XG4gICAgICAgICAgQGV4dGVuZCAubGlzdC1pbmxpbmUtaXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50aGVpbmUtbGV2ZWwge1xuICAgICAgcHJvZ3Jlc3Mge1xuICAgICAgICBAZXh0ZW5kIC5wcm9ncmVzcztcblxuICAgICAgICAmLnVua25vd24ge1xuICAgICAgICAgIEBleHRlbmQgLnByb2dyZXNzLXN0cmlwZWQ7XG4gICAgICAgICAgQGluY2x1ZGUgcHJvZ3Jlc3MtdmFyaWFudCgkdGV4dC1tdXRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgJi5ub25lLCAmLmxvdyB7XG4gICAgICAgICAgQGluY2x1ZGUgcHJvZ3Jlc3MtdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmcpO1xuICAgICAgICB9XG4gICAgICAgICYubWVkaXVtLCAmLmhpZ2gge1xuICAgICAgICAgIEBpbmNsdWRlIHByb2dyZXNzLXZhcmlhbnQoJHByb2dyZXNzLWJhci13YXJuaW5nLWJnKTtcbiAgICAgICAgfVxuICAgICAgICAmLmNvZmZlZSB7XG4gICAgICAgICAgQGluY2x1ZGUgcHJvZ3Jlc3MtdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJlcGFyYXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLy8mOm5vdCguZGV0YWlsZWQpIHtcbiAgLy99XG5cbiAgJi5kZXRhaWxlZCB7XG4gICAgLmhlYWRlcnMge1xuICAgICAgLmJldi1pY29uIHtcbiAgICAgICAgQGV4dGVuZCAuZmEtMng7XG4gICAgICB9XG5cbiAgICAgIC5icmFuZCB7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vcmUge1xuICAgICAgQGV4dGVuZCAuY29sLW1kLTM7XG5cbiAgICAgIC5iZW5lZml0cywgLm5vdGUge1xuICAgICAgICBAZXh0ZW5kIC5jb2wteHMtMTI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0cmVuZ3RoIHtcbiAgICAgIEBleHRlbmQgLmNvbC1tZC0yO1xuXG4gICAgICAubW9tZW50LCAudGhlaW5lLWxldmVsIHtcbiAgICAgICAgQGV4dGVuZCAuY29sLXhzLTEyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcmVwYXJhdGlvbiB7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgQGV4dGVuZCAuY29sLXhzLTY7XG4gICAgICBAZXh0ZW5kIC5jb2wtbWQtMjtcbiAgICB9XG4gIH1cbn1cblxuLyogVXRpbGl0eSBjbGFzc2VzICovXG4uYnRuLXBsYWluIHtcbiAgQGV4dGVuZCAuYnRuLWxpbms7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiAwO1xufVxuIiwiLyohXG4gKiBCb290c3RyYXAgdjQuMC4wLWFscGhhLjIgKGh0dHA6Ly9nZXRib290c3RyYXAuY29tKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNSBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG5cbiRlbmFibGUtZmxleDogdHJ1ZTtcblxuLy8gQ29yZSB2YXJpYWJsZXMgYW5kIG1peGluc1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG5cbi8vIFJlc2V0IGFuZCBkZXBlbmRlbmNpZXNcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3Mvbm9ybWFsaXplXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ByaW50XCI7XG5cbi8vIENvcmUgQ1NTXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3JlYm9vdFwiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy90eXBlXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2ltYWdlc1wiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9jb2RlXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2dyaWRcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdGFibGVzXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Zvcm1zXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2J1dHRvbnNcIjtcblxuLy8gQ29tcG9uZW50c1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9hbmltYXRpb25cIjtcbi8vQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9kcm9wZG93blwiO1xuLy9AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2J1dHRvbi1ncm91cFwiO1xuLy9AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2lucHV0LWdyb3VwXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvY3VzdG9tLWZvcm1zXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbmF2XCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbmF2YmFyXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2NhcmRcIjtcbi8vQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9icmVhZGNydW1iXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvcGFnaW5hdGlvblwiO1xuLy9AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3BhZ2VyXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbGFiZWxzXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvanVtYm90cm9uXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYWxlcnRcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvcHJvZ3Jlc3NcIjtcbi8vQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9tZWRpYVwiO1xuLy9AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2xpc3QtZ3JvdXBcIjtcbi8vQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9yZXNwb25zaXZlLWVtYmVkXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvY2xvc2VcIjtcblxuLy8gQ29tcG9uZW50cyB3LyBKYXZhU2NyaXB0XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbW9kYWxcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdG9vbHRpcFwiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9wb3BvdmVyXCI7XG4vL0BpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvY2Fyb3VzZWxcIjtcblxuLy8gVXRpbGl0eSBjbGFzc2VzXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3V0aWxpdGllc1wiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy91dGlsaXRpZXMtYmFja2dyb3VuZFwiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy91dGlsaXRpZXMtc3BhY2luZ1wiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy91dGlsaXRpZXMtcmVzcG9uc2l2ZVwiO1xuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gQ29weSBzZXR0aW5ncyBmcm9tIHRoaXMgZmlsZSBpbnRvIHRoZSBwcm92aWRlZCBgX2N1c3RvbS5zY3NzYCB0byBvdmVycmlkZVxuLy8gdGhlIEJvb3RzdHJhcCBkZWZhdWx0cyB3aXRob3V0IG1vZGlmeWluZyBrZXksIHZlcnNpb25lZCBmaWxlcy5cblxuXG4vLyBUYWJsZSBvZiBDb250ZW50c1xuLy9cbi8vIENvbG9yc1xuLy8gT3B0aW9uc1xuLy8gU3BhY2luZ1xuLy8gQm9keVxuLy8gTGlua3Ncbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vIEdyaWQgY29udGFpbmVyc1xuLy8gR3JpZCBjb2x1bW5zXG4vLyBGb250c1xuLy8gQ29tcG9uZW50c1xuXG4vLyBHZW5lcmFsIHZhcmlhYmxlIHN0cnVjdHVyZVxuLy9cbi8vIFZhcmlhYmxlIGZvcm1hdCBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1tb2RpZmllci1zdGF0ZS1wcm9wZXJ0eWAgb3JkZXIuXG5cblxuLy8gQ29sb3JzXG4vL1xuLy8gR3JheXNjYWxlIGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgQm9vdHN0cmFwLlxuXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAgICAgIzM3M2EzYyAhZGVmYXVsdDtcbiRncmF5OiAgICAgICAgICAgICAgICAgICAgICAjNTU1OTVjICFkZWZhdWx0O1xuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgICAgICM4MThhOTEgIWRlZmF1bHQ7XG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgICAgI2VjZWVlZiAhZGVmYXVsdDtcbiRncmF5LWxpZ2h0ZXN0OiAgICAgICAgICAgICAjZjdmN2Y5ICFkZWZhdWx0O1xuXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAgICAgIzAyNzVkOCAhZGVmYXVsdDtcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICAgICAjNWNiODVjICFkZWZhdWx0O1xuJGJyYW5kLWluZm86ICAgICAgICAgICAgICAgICM1YmMwZGUgIWRlZmF1bHQ7XG4kYnJhbmQtd2FybmluZzogICAgICAgICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtZmxleDogICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cblxuJHNwYWNlcjogICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwYWNlci14OiAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJHNwYWNlci15OiAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJHNwYWNlcnM6IChcbiAgMDogKFxuICAgIHg6ICAgMCxcbiAgICB5OiAgIDBcbiAgKSxcbiAgMTogKFxuICAgIHg6ICAgJHNwYWNlci14LFxuICAgIHk6ICAgJHNwYWNlci15XG4gICksXG4gIDI6IChcbiAgICB4OiAgICgkc3BhY2VyLXggKiAxLjUpLFxuICAgIHk6ICAgKCRzcGFjZXIteSAqIDEuNSlcbiAgKSxcbiAgMzogKFxuICAgIHg6ICAgKCRzcGFjZXIteCAqIDMpLFxuICAgIHk6ICAgKCRzcGFjZXIteSAqIDMpXG4gIClcbikgIWRlZmF1bHQ7XG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcbiAgeHM6IDAsXG4gIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXG4gIHNtOiA1NDRweCxcbiAgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxuICBtZDogNzY4cHgsXG4gIC8vIExhcmdlIHNjcmVlbiAvIGRlc2t0b3BcbiAgbGc6IDk5MnB4LFxuICAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU3NnB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NDBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgMS44NzVyZW0gIWRlZmF1bHQ7IC8vIDMwcHhcblxuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LXNlcmlmOiAgICAgICAgICBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIFBpeGVsIHZhbHVlIHVzZWQgdG8gcmVzcG9uc2l2ZWx5IHNjYWxlIGFsbCB0eXBvZ3JhcGh5LiBBcHBsaWVkIHRvIHRoZSBgPGh0bWw+YCBlbGVtZW50LlxuJGZvbnQtc2l6ZS1yb290OiAgICAgICAgICAgICAxNnB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhzOiAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAoJHNwYWNlciAvIDIpICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgIDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4kYWJici1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1ib3JkZXItY29sb3I6ICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKDAsMCwwLC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIDVweCAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgKDQgLyAzKSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC13aWR0aC1sZzogICAgICAgICAkY2FyZXQtd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1zbS1jZWxsLXBhZGRpbmc6ICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kdGFibGUtYmctYWNjZW50OiAgICAgICAgICAgICAgICNmOWY5ZjkgIWRlZmF1bHQ7XG4kdGFibGUtYmctaG92ZXI6ICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kdGFibGUtYmctYWN0aXZlOiAgICAgICAgICAgICAgICR0YWJsZS1iZy1ob3ZlciAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgIG5vcm1hbCAhZGVmYXVsdDtcblxuJGJ0bi1wcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tcHJpbWFyeS1iZzogICAgICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJGJ0bi1wcmltYXJ5LWJvcmRlcjogICAgICAgICAgICAgJGJ0bi1wcmltYXJ5LWJnICFkZWZhdWx0O1xuXG4kYnRuLXNlY29uZGFyeS1jb2xvcjogICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuJGJ0bi1zZWNvbmRhcnktYmc6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tc2Vjb25kYXJ5LWJvcmRlcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRidG4taW5mby1jb2xvcjogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWluZm8tYmc6ICAgICAgICAgICAgICAgICAgICAkYnJhbmQtaW5mbyAhZGVmYXVsdDtcbiRidG4taW5mby1ib3JkZXI6ICAgICAgICAgICAgICAgICRidG4taW5mby1iZyAhZGVmYXVsdDtcblxuJGJ0bi1zdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuJGJ0bi1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgICAgJGJ0bi1zdWNjZXNzLWJnICFkZWZhdWx0O1xuXG4kYnRuLXdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgICAkYnRuLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG5cbiRidG4tZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1iZzogICAgICAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuJGJ0bi1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgICAgJGJ0bi1kYW5nZXItYmcgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGlucHV0LWJnLWRpc2FibGVkOiAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXkgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvcm0gY29udHJvbHMgYW5kIGJ1dHRvbnNcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItZm9jdXM6ICAgICAgICAgICAgICM2NmFmZTkgIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdy1mb2N1czogICAgICAgICByZ2JhKDEwMiwxNzUsMjMzLC42KSAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgLjI3NXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQpICsgKCRpbnB1dC1wYWRkaW5nLXkgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAoKCRmb250LXNpemUtbGcgKiAkbGluZS1oZWlnaHQtbGcpICsgKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAoKCRmb250LXNpemUtc20gKiAkbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyKSkgIWRlZmF1bHQ7XG5cbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICRzcGFjZXIteSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXJzb3ItZGlzYWJsZWQ6ICAgICAgICAgICAgICAgIG5vdC1hbGxvd2VkICFkZWZhdWx0O1xuXG4vLyBGb3JtIHZhbGlkYXRpb24gaWNvbnNcbiRmb3JtLWljb24tc3VjY2VzczogXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBMk1USWdOemt5SWo0OGNHRjBhQ0JtYVd4c1BTSWpOV05pT0RWaklpQmtQU0pOTWpNekxqZ2dOakV3WXkweE15NHpJREF0TWpZdE5pMHpOQzB4Tmk0NFREa3dMalVnTkRRNExqaEROell1TXlBME16QWdPREFnTkRBekxqTWdPVGd1T0NBek9EbGpNVGd1T0MweE5DNHlJRFExTGpVdE1UQXVOQ0ExT1M0NElEZ3VOR3czTWlBNU5VdzBOVEV1TXlBeU5ESmpNVEl1TlMweU1DQXpPQzQ0TFRJMkxqSWdOVGd1T0MweE15NDNJREl3SURFeUxqUWdNallnTXpndU55QXhNeTQzSURVNExqaE1NamN3SURVNU1HTXROeTQwSURFeUxUSXdMaklnTVRrdU5DMHpOQzR6SURJd2FDMHllaUl2UGp3dmMzWm5QZz09XCIgIWRlZmF1bHQ7XG4kZm9ybS1pY29uLXdhcm5pbmc6IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQTJNVElnTnpreUlqNDhjR0YwYUNCbWFXeHNQU0lqWmpCaFpEUmxJaUJrUFNKTk5qQXpJRFkwTUM0eWJDMHlOemd1TlMwMU1EbGpMVE11T0MwMkxqWXRNVEF1T0MweE1DNDJMVEU0TGpVdE1UQXVObk10TVRRdU55QTBMVEU0TGpVZ01UQXVOa3c1SURZME1DNHlZeTB6TGpjZ05pNDFMVE11TmlBeE5DNDBMaklnTWpBdU9DQXpMamdnTmk0MUlERXdMamdnTVRBdU5DQXhPQzR6SURFd0xqUm9OVFUzWXpjdU5pQXdJREUwTGpZdE5DQXhPQzQwTFRFd0xqUWdNeTQxTFRZdU5DQXpMall0TVRRdU5DQXdMVEl3TGpoNmJTMHlOall1TkMwek1HZ3ROakV1TWxZMU5EbG9OakV1TW5ZMk1TNHllbTB3TFRFd04yZ3ROakV1TWxZek1EUm9OakV1TW5ZeE9UbDZJaTgrUEM5emRtYytcIiAhZGVmYXVsdDtcbiRmb3JtLWljb24tZGFuZ2VyOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0EyTVRJZ056a3lJajQ4Y0dGMGFDQm1hV3hzUFNJalpEazFNelJtSWlCa1BTSk5ORFEzSURVME5DNDBZeTB4TkM0MElERTBMalF0TXpjdU5pQXhOQzQwTFRVeUlEQnNMVGc1TFRreUxqY3RPRGtnT1RJdU4yTXRNVFF1TlNBeE5DNDBMVE0zTGpjZ01UUXVOQzAxTWlBd0xURTBMalF0TVRRdU5DMHhOQzQwTFRNM0xqWWdNQzAxTW13NU1pNDBMVGsyTGpNdE9USXVOQzA1Tmk0ell5MHhOQzQwTFRFMExqUXRNVFF1TkMwek55NDJJREF0TlRKek16Y3VOaTB4TkM0eklEVXlJREJzT0RrZ09USXVPQ0E0T1M0eUxUa3lMamRqTVRRdU5DMHhOQzQwSURNM0xqWXRNVFF1TkNBMU1pQXdJREUwTGpNZ01UUXVOQ0F4TkM0eklETTNMallnTUNBMU1rd3pOVFF1TmlBek9UWnNPVEl1TkNBNU5pNDBZekUwTGpRZ01UUXVOQ0F4TkM0MElETTNMallnTUNBMU1ub2lMejQ4TDNOMlp6ND1cIiAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICByZ2JhKDAsMCwwLC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkZ3JheS1kYXJrLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LW5hdmJhcjogICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC1uYXZiYXItZml4ZWQ6ICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLXN0aWNreTogICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJnOiAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsOiAgICAgICAgICAgKCRzcGFjZXIgLyAyKSAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDEpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwuMjUpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoMCwwLDAsLjYpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgwLDAsMCwuOCkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKDAsMCwwLC4xNSkgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAgICAgIC41ZW0gMWVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LWRpc2FibGVkLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtbGluay1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRncmF5ICFkZWZhdWx0O1xuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICAjZGRkICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtanVzdGlmaWVkLWxpbmstYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtanVzdGlmaWVkLWFjdGl2ZS1saW5rLWJvcmRlci1jb2xvcjogICAgICRib2R5LWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgLjI3NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjogICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXI6ICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI6ICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2VyXG5cbiRwYWdlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJnICFkZWZhdWx0O1xuJHBhZ2VyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRwYWdlci1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kcGFnZXItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnZXItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cbiRwYWdlci1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHN0YXRlcyBhbmQgYWxlcnRzXG4vL1xuLy8gRGVmaW5lIGNvbG9ycyBmb3IgZm9ybSBmZWVkYmFjayBzdGF0ZXMgYW5kLCBieSBkZWZhdWx0LCBhbGVydHMuXG5cbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICAgICAgICAgICAgICMzYzc2M2QgIWRlZmF1bHQ7XG4kc3RhdGUtc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAjZGZmMGQ4ICFkZWZhdWx0O1xuJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgICAgZGFya2VuKCRzdGF0ZS1zdWNjZXNzLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1pbmZvLXRleHQ6ICAgICAgICAgICAgICAgICMzMTcwOGYgIWRlZmF1bHQ7XG4kc3RhdGUtaW5mby1iZzogICAgICAgICAgICAgICAgICAjZDllZGY3ICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKCRzdGF0ZS1pbmZvLWJnLCA3JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS13YXJuaW5nLXRleHQ6ICAgICAgICAgICAgICM4YTZkM2IgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1iZzogICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuJHN0YXRlLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgZGFya2VuKCRzdGF0ZS13YXJuaW5nLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1kYW5nZXItdGV4dDogICAgICAgICAgICAgICNhOTQ0NDIgIWRlZmF1bHQ7XG4kc3RhdGUtZGFuZ2VyLWJnOiAgICAgICAgICAgICAgICAjZjJkZWRlICFkZWZhdWx0O1xuJHN0YXRlLWRhbmdlci1ib3JkZXI6ICAgICAgICAgICAgZGFya2VuKCRzdGF0ZS1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgIDFweCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXMtaW5uZXI6ICRjYXJkLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuJGNhcmQtbGluay1ob3Zlci1jb2xvcjogICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgIDVweCAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci10aXRsZS1iZzogICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDogICAgICAgICAgICgkcG9wb3Zlci1hcnJvdy13aWR0aCArIDEpICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgMC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gTGFiZWxzXG5cbiRsYWJlbC1kZWZhdWx0LWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGxhYmVsLXByaW1hcnktYmc6ICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kbGFiZWwtc3VjY2Vzcy1iZzogICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbiRsYWJlbC1pbmZvLWJnOiAgICAgICAgICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuJGxhYmVsLXdhcm5pbmctYmc6ICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kbGFiZWwtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGxhYmVsLWxpbmstaG92ZXItY29sb3I6ICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRsYWJlbC1mb250LXdlaWdodDogICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICRsaW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgI2U1ZTVlNSAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICA5MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgIDYwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgIGJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYWxlcnQtc3VjY2Vzcy1iZzogICAgICAgICAgICAkc3RhdGUtc3VjY2Vzcy1iZyAhZGVmYXVsdDtcbiRhbGVydC1zdWNjZXNzLXRleHQ6ICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAkc3RhdGUtc3VjY2Vzcy1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC1pbmZvLWJnOiAgICAgICAgICAgICAgICRzdGF0ZS1pbmZvLWJnICFkZWZhdWx0O1xuJGFsZXJ0LWluZm8tdGV4dDogICAgICAgICAgICAgJHN0YXRlLWluZm8tdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1pbmZvLWJvcmRlcjogICAgICAgICAgICRzdGF0ZS1pbmZvLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LXdhcm5pbmctYmc6ICAgICAgICAgICAgJHN0YXRlLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG4kYWxlcnQtd2FybmluZy10ZXh0OiAgICAgICAgICAkc3RhdGUtd2FybmluZy10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LXdhcm5pbmctYm9yZGVyOiAgICAgICAgJHN0YXRlLXdhcm5pbmctYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkc3RhdGUtZGFuZ2VyLWJnICFkZWZhdWx0O1xuJGFsZXJ0LWRhbmdlci10ZXh0OiAgICAgICAgICAgJHN0YXRlLWRhbmdlci10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LWRhbmdlci1ib3JkZXI6ICAgICAgICAgJHN0YXRlLWRhbmdlci1ib3JkZXIgIWRlZmF1bHQ7XG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZzogICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci13YXJuaW5nLWJnOiAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1pbmZvLWJnOiAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG5cblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXI6ICAgICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLXRleHQtY29sb3I6ICBsaWdodGVuKCRsaXN0LWdyb3VwLWFjdGl2ZS1iZywgNDAlKSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtdGV4dC1jb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWxpbmstY29sb3I6ICAgICAgICAgIzU1NSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWxpbmstaG92ZXItY29sb3I6ICAgJGxpc3QtZ3JvdXAtbGluay1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWxpbmstaGVhZGluZy1jb2xvcjogIzMzMyAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICNkZGQgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXZlcnRpY2FsOiAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmctaG9yaXpvbnRhbDogMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgIFwiL1wiICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgwLDAsMCwuNikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgIDAgMXB4IDAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICNiZDQxNDcgIWRlZmF1bHQ7XG4kY29kZS1iZzogICAgICAgICAgICAgICAgICAgICAjZjdmN2Y5ICFkZWZhdWx0O1xuXG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcblxuJHByZS1iZzogICAgICAgICAgICAgICAgICAgICAgI2Y3ZjdmOSAhZGVmYXVsdDtcbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcHJlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgMzQwcHggIWRlZmF1bHQ7XG4iLCIvLyBUb2dnbGVzXG4vL1xuLy8gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGdsb2JhbCB2YXJpYWJsZXMgdG8gZW5hYmxlIGNlcnRhaW4gdGhlbWUgZmVhdHVyZXMuXG5cbkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgQGlmICRlbmFibGUtc2hhZG93cyB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gIH1cbn1cblxuLy8gVXRpbGl0aWVzXG5AaW1wb3J0IFwibWl4aW5zL2JyZWFrcG9pbnRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2hvdmVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL2ltYWdlXCI7XG5AaW1wb3J0IFwibWl4aW5zL2xhYmVsXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc2V0LWZpbHRlclwiO1xuQGltcG9ydCBcIm1peGlucy9yZXNpemVcIjtcbkBpbXBvcnQgXCJtaXhpbnMvc2NyZWVuLXJlYWRlclwiO1xuQGltcG9ydCBcIm1peGlucy9zaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RhYi1mb2N1c1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC10ZXh0XCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtZW1waGFzaXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGV4dC1oaWRlXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtdHJ1bmNhdGVcIjtcblxuLy8gLy8gQ29tcG9uZW50c1xuQGltcG9ydCBcIm1peGlucy9hbGVydFwiO1xuQGltcG9ydCBcIm1peGlucy9idXR0b25zXCI7XG5AaW1wb3J0IFwibWl4aW5zL2NhcmRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3BhZ2luYXRpb25cIjtcbkBpbXBvcnQgXCJtaXhpbnMvbGlzdHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvbGlzdC1ncm91cFwiO1xuQGltcG9ydCBcIm1peGlucy9uYXYtZGl2aWRlclwiO1xuQGltcG9ydCBcIm1peGlucy9mb3Jtc1wiO1xuQGltcG9ydCBcIm1peGlucy9wcm9ncmVzc1wiO1xuQGltcG9ydCBcIm1peGlucy90YWJsZS1yb3dcIjtcblxuLy8gLy8gU2tpbnNcbkBpbXBvcnQgXCJtaXhpbnMvYmFja2dyb3VuZC12YXJpYW50XCI7XG5AaW1wb3J0IFwibWl4aW5zL2JvcmRlci1yYWRpdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JhZGllbnRzXCI7XG5cbi8vIC8vIExheW91dFxuQGltcG9ydCBcIm1peGlucy9jbGVhcmZpeFwiO1xuQGltcG9ydCBcIm1peGlucy9jZW50ZXItYmxvY2tcIjtcbi8vIEBpbXBvcnQgXCJtaXhpbnMvbmF2YmFyLWFsaWduXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWQtZnJhbWV3b3JrXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWRcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcHVsbHNcIjtcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU0NHB4LCBtZDogNzY4cHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTQ0cHgsIG1kOiA3NjhweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTQ0cHgsIG1kOiA3NjhweCkpXG4vLyAgICA1NDRweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4xLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NDRweCwgbWQ6IDc2OHB4KSlcbi8vICAgIDc2N3B4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAxcHgsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGhvdmVyIHtcbiAgQGlmICRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnkge1xuICAgIC8vIFNlZSBNZWRpYSBRdWVyaWVzIExldmVsIDQ6IGh0dHA6Ly9kcmFmdHMuY3Nzd2cub3JnL21lZGlhcXVlcmllcy8jaG92ZXJcbiAgICAvLyBDdXJyZW50bHkgc2hpbW1lZCBieSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9tcTQtaG92ZXItc2hpbVxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAmOmhvdmVyIHsgQGNvbnRlbnQgfVxuICAgIH1cbiAgfVxuICBAZWxzZSB7XG4gICAgJjpob3ZlciB7IEBjb250ZW50IH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMge1xuICBAaWYgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeSB7XG4gICAgJjpmb2N1cyB7IEBjb250ZW50IH1cbiAgICBAaW5jbHVkZSBob3ZlciB7IEBjb250ZW50IH1cbiAgfVxuICBAZWxzZSB7XG4gICAgJjpmb2N1cyxcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gIEBpZiAkZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5IHtcbiAgICAmLFxuICAgICY6Zm9jdXMge1xuICAgICAgQGNvbnRlbnRcbiAgICB9XG4gICAgQGluY2x1ZGUgaG92ZXIgeyBAY29udGVudCB9XG4gIH1cbiAgQGVsc2Uge1xuICAgICYsXG4gICAgJjpmb2N1cyxcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICBAaWYgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeSB7XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBAY29udGVudFxuICAgIH1cbiAgICBAaW5jbHVkZSBob3ZlciB7IEBjb250ZW50IH1cbiAgfVxuICBAZWxzZSB7XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbWFnZSBNaXhpbnNcbi8vIC0gUmVzcG9uc2l2ZSBpbWFnZVxuLy8gLSBSZXRpbmEgaW1hZ2VcblxuXG4vLyBSZXNwb25zaXZlIGltYWdlXG4vL1xuLy8gS2VlcCBpbWFnZXMgZnJvbSBzY2FsaW5nIGJleW9uZCB0aGUgd2lkdGggb2YgdGhlaXIgcGFyZW50cy5cblxuQG1peGluIGltZy1mbHVpZCgkZGlzcGxheTogYmxvY2spIHtcbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIG1heC13aWR0aDogMTAwJTsgLy8gUGFydCAxOiBTZXQgYSBtYXhpbXVtIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRcbiAgaGVpZ2h0OiBhdXRvOyAvLyBQYXJ0IDI6IFNjYWxlIHRoZSBoZWlnaHQgYWNjb3JkaW5nIHRvIHRoZSB3aWR0aCwgb3RoZXJ3aXNlIHlvdSBnZXQgc3RyZXRjaGluZ1xufVxuXG5cbi8vIFJldGluYSBpbWFnZVxuLy9cbi8vIFNob3J0IHJldGluYSBtaXhpbiBmb3Igc2V0dGluZyBiYWNrZ3JvdW5kLWltYWdlIGFuZCAtc2l6ZS5cblxuQG1peGluIGltZy1yZXRpbmEoJGZpbGUtMXgsICRmaWxlLTJ4LCAkd2lkdGgtMXgsICRoZWlnaHQtMXgpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRmaWxlLTF4KTtcblxuICAvLyBBdXRvcHJlZml4ZXIgdGFrZXMgY2FyZSBvZiBhZGRpbmcgLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIGFuZCAtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvLFxuICAvLyBidXQgZG9lc24ndCBjb252ZXJ0IGRwcHg9PmRwaS5cbiAgLy8gVGhlcmUncyBubyBzdWNoIHRoaW5nIGFzIHVucHJlZml4ZWQgbWluLWRldmljZS1waXhlbC1yYXRpbyBzaW5jZSBpdCdzIG5vbnN0YW5kYXJkLlxuICAvLyBDb21wYXRpYmlsaXR5IGluZm86IGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtbWVkaWEtcmVzb2x1dGlvblxuICBAbWVkaWFcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgLy8gSUU5LTExIGRvbid0IHN1cHBvcnQgZHBweFxuICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgeyAvLyBTdGFuZGFyZGl6ZWRcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZpbGUtMngpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJHdpZHRoLTF4ICRoZWlnaHQtMXg7XG4gIH1cbn1cbiIsIi8vIExhYmVsc1xuXG5AbWl4aW4gbGFiZWwtdmFyaWFudCgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICZbaHJlZl0ge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5LlxuXG5AbWl4aW4gcmVzZXQtZmlsdGVyKCkge1xuICBmaWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSlcIjtcbn1cbiIsIi8vIFJlc2l6ZSBhbnl0aGluZ1xuXG5AbWl4aW4gcmVzaXphYmxlKCRkaXJlY3Rpb24pIHtcbiAgcmVzaXplOiAkZGlyZWN0aW9uOyAvLyBPcHRpb25zOiBob3Jpem9udGFsLCB2ZXJ0aWNhbCwgYm90aFxuICBvdmVyZmxvdzogYXV0bzsgLy8gUGVyIENTUzMgVUksIGByZXNpemVgIG9ubHkgYXBwbGllcyB3aGVuIGBvdmVyZmxvd2AgaXNuJ3QgYHZpc2libGVgXG59XG4iLCIvLyBPbmx5IGRpc3BsYXkgY29udGVudCB0byBzY3JlZW4gcmVhZGVyc1xuLy9cbi8vIFNlZTogaHR0cDovL2ExMXlwcm9qZWN0LmNvbS9wb3N0cy9ob3ctdG8taGlkZS1jb250ZW50L1xuXG5AbWl4aW4gc3Itb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBVc2UgaW4gY29uanVuY3Rpb24gd2l0aCAuc3Itb25seSB0byBvbmx5IGRpc3BsYXkgY29udGVudCB3aGVuIGl0J3MgZm9jdXNlZC5cbi8vXG4vLyBVc2VmdWwgZm9yIFwiU2tpcCB0byBtYWluIGNvbnRlbnRcIiBsaW5rczsgc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTMvTk9URS1XQ0FHMjAtVEVDSFMtMjAxMzA5MDUvRzFcbi8vXG4vLyBDcmVkaXQ6IEhUTUw1IEJvaWxlcnBsYXRlXG5cbkBtaXhpbiBzci1vbmx5LWZvY3VzYWJsZSB7XG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgY2xpcDogYXV0bztcbiAgfVxufVxuIiwiLy8gU2l6aW5nIHNob3J0Y3V0c1xuXG5AbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQ6ICR3aWR0aCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG4iLCIvLyBXZWJLaXQtc3R5bGUgZm9jdXNcblxuQG1peGluIHRhYi1mb2N1cygpIHtcbiAgLy8gRGVmYXVsdFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbiAgLy8gV2ViS2l0XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG4iLCJAbWl4aW4gcmVzZXQtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgLy8gV2UgZGVsaWJlcmF0ZWx5IGRvIE5PVCByZXNldCBmb250LXNpemUuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gRmFsbGJhY2sgZm9yIHdoZXJlIGBzdGFydGAgaXMgbm90IHN1cHBvcnRlZFxuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuIiwiLy8gVHlwb2dyYXBoeVxuXG5AbWl4aW4gdGV4dC1lbXBoYXNpcy12YXJpYW50KCRwYXJlbnQsICRjb2xvcikge1xuICAjeyRwYXJlbnR9IHtcbiAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSN7JHBhcmVudH0ge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ1NTIGltYWdlIHJlcGxhY2VtZW50XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiBcIjAvMFwiIGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4iLCIvLyBUZXh0IHRydW5jYXRlXG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbkBtaXhpbiB0ZXh0LXRydW5jYXRlKCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCIvLyBBbGVydHNcblxuQG1peGluIGFsZXJ0LXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIsICRib2R5LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcblxuICBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2VuKCRib3JkZXIsIDUlKTtcbiAgfVxuICAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6IGRhcmtlbigkYm9keS1jb2xvciwgMTAlKTtcbiAgfVxufVxuIiwiLy8gQnV0dG9uIHZhcmlhbnRzXG4vL1xuLy8gRWFzaWx5IHB1bXAgb3V0IGRlZmF1bHQgc3R5bGVzLCBhcyB3ZWxsIGFzIDpob3ZlciwgOmZvY3VzLCA6YWN0aXZlLFxuLy8gYW5kIGRpc2FibGVkIG9wdGlvbnMgZm9yIGFsbCBidXR0b25zXG5cbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyKSB7XG4gICRhY3RpdmUtYmFja2dyb3VuZDogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAkYWN0aXZlLWJvcmRlcjogZGFya2VuKCRib3JkZXIsIDEyJSk7XG5cbiAgY29sb3I6ICRjb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSkpO1xuXG4gIEBpbmNsdWRlIGhvdmVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWN0aXZlLWJvcmRlcjtcbiAgfVxuXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBib3JkZXItY29sb3I6ICRhY3RpdmUtYm9yZGVyO1xuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAub3BlbiA+ICYuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWN0aXZlLWJvcmRlcjtcbiAgICAvLyBSZW1vdmUgdGhlIGdyYWRpZW50IGZvciB0aGUgcHJlc3NlZC9hY3RpdmUgc3RhdGVcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTclKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICAgIH1cbiAgfVxuXG4gICYuZGlzYWJsZWQsXG4gICY6ZGlzYWJsZWQge1xuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICRjb2xvcjtcblxuICAmOmZvY3VzLFxuICAmLmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gIH1cbiAgQGluY2x1ZGUgaG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gIH1cblxuICAmLmRpc2FibGVkLFxuICAmOmRpc2FibGVkIHtcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjAlKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgaG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjAlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQnV0dG9uIHNpemVzXG5AbWl4aW4gYnV0dG9uLXNpemUoJHBhZGRpbmcteSwgJHBhZGRpbmcteCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICBwYWRkaW5nOiAkcGFkZGluZy15ICRwYWRkaW5nLXg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG59XG4iLCIvLyBDYXJkIHZhcmlhbnRzXG5cbkBtaXhpbiBjYXJkLXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbn1cblxuQG1peGluIGNhcmQtb3V0bGluZS12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG59XG5cbi8vXG4vLyBJbnZlcnNlIHRleHQgd2l0aGluIGEgY2FyZCBmb3IgdXNlIHdpdGggZGFyayBiYWNrZ3JvdW5kc1xuLy9cblxuQG1peGluIGNhcmQtaW52ZXJzZSB7XG4gIC5jYXJkLWhlYWRlcixcbiAgLmNhcmQtZm9vdGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkY2FyZC1ib3JkZXItd2lkdGggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gIH1cbiAgLmNhcmQtaGVhZGVyLFxuICAuY2FyZC1mb290ZXIsXG4gIC5jYXJkLXRpdGxlLFxuICAuY2FyZC1ibG9ja3F1b3RlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuY2FyZC1saW5rLFxuICAuY2FyZC10ZXh0LFxuICAuY2FyZC1ibG9ja3F1b3RlID4gZm9vdGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjUpO1xuICB9XG4gIC5jYXJkLWxpbmsge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY2FyZC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gUGFnaW5hdGlvblxuXG5AbWl4aW4gcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gIC5wYWdlLWxpbmsge1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIH1cblxuICAucGFnZS1pdGVtIHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgLnBhZ2UtbGluayB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gTGlzdHNcblxuLy8gVW5zdHlsZWQga2VlcHMgbGlzdCBpdGVtcyBibG9jayBsZXZlbCwganVzdCByZW1vdmVzIGRlZmF1bHQgYnJvd3NlciBwYWRkaW5nIGFuZCBsaXN0LXN0eWxlXG5AbWl4aW4gbGlzdC11bnN0eWxlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiIsIi8vIExpc3QgR3JvdXBzXG5cbkBtaXhpbiBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kLCAkY29sb3IpIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIH1cblxuICBhLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0sXG4gIGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSG9yaXpvbnRhbCBkaXZpZGVyc1xuLy9cbi8vIERpdmlkZXJzIChiYXNpY2FsbHkgYW4gaHIpIHdpdGhpbiBkcm9wZG93bnMgYW5kIG5hdiBsaXN0c1xuXG5AbWl4aW4gbmF2LWRpdmlkZXIoJGNvbG9yOiAjZTVlNWU1KSB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46ICgkc3BhY2VyLXkgLyAyKSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG59XG4iLCIvLyBGb3JtIHZhbGlkYXRpb24gc3RhdGVzXG4vL1xuLy8gVXNlZCBpbiBfZm9ybXMuc2NzcyB0byBnZW5lcmF0ZSB0aGUgZm9ybSB2YWxpZGF0aW9uIENTUyBmb3Igd2FybmluZ3MsIGVycm9ycyxcbi8vIGFuZCBzdWNjZXNzZXMuXG5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkY29sb3IpIHtcbiAgLy8gQ29sb3IgdGhlIGxhYmVsIGFuZCBoZWxwIHRleHRcbiAgLnRleHQtaGVscCxcbiAgLmZvcm0tY29udHJvbC1sYWJlbCxcbiAgLnJhZGlvLFxuICAuY2hlY2tib3gsXG4gIC5yYWRpby1pbmxpbmUsXG4gIC5jaGVja2JveC1pbmxpbmUsXG4gICYucmFkaW8gbGFiZWwsXG4gICYuY2hlY2tib3ggbGFiZWwsXG4gICYucmFkaW8taW5saW5lIGxhYmVsLFxuICAmLmNoZWNrYm94LWlubGluZSBsYWJlbCAge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gIH1cbiAgLy8gU2V0IHRoZSBib3JkZXIgYW5kIGJveCBzaGFkb3cgb24gc3BlY2lmaWMgaW5wdXRzIHRvIG1hdGNoXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIC8vIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSkpOyAvLyBSZWRlY2xhcmUgc28gdHJhbnNpdGlvbnMgd29ya1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAvLyBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLWNvbG9yLCAxMCUpO1xuICAgICAgLy8gJHNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA2cHggbGlnaHRlbigkYm9yZGVyLWNvbG9yLCAyMCUpO1xuICAgICAgLy8gQGluY2x1ZGUgYm94LXNoYWRvdygkc2hhZG93KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdmFsaWRhdGlvbiBzdGF0ZXMgYWxzbyBmb3IgYWRkb25zXG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgNDAlKTtcbiAgfVxuICAvLyBPcHRpb25hbCBmZWVkYmFjayBpY29uXG4gIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gRm9ybSBjb250cm9sIGZvY3VzIHN0YXRlXG4vL1xuLy8gR2VuZXJhdGUgYSBjdXN0b21pemVkIGZvY3VzIHN0YXRlIGFuZCBmb3IgYW55IGlucHV0IHdpdGggdGhlIHNwZWNpZmllZCBjb2xvcixcbi8vIHdoaWNoIGRlZmF1bHRzIHRvIHRoZSBgQGlucHV0LWJvcmRlci1mb2N1c2AgdmFyaWFibGUuXG4vL1xuLy8gV2UgaGlnaGx5IGVuY291cmFnZSB5b3UgdG8gbm90IGN1c3RvbWl6ZSB0aGUgZGVmYXVsdCB2YWx1ZSwgYnV0IGluc3RlYWQgdXNlXG4vLyB0aGlzIHRvIHR3ZWFrIGNvbG9ycyBvbiBhbiBhcy1uZWVkZWQgYmFzaXMuIFRoaXMgYWVzdGhldGljIGNoYW5nZSBpcyBiYXNlZCBvblxuLy8gV2ViS2l0J3MgZGVmYXVsdCBzdHlsZXMsIGJ1dCBhcHBsaWNhYmxlIHRvIGEgd2lkZXIgcmFuZ2Ugb2YgYnJvd3NlcnMuIEl0c1xuLy8gdXNhYmlsaXR5IGFuZCBhY2Nlc3NpYmlsaXR5IHNob3VsZCBiZSB0YWtlbiBpbnRvIGFjY291bnQgd2l0aCBhbnkgY2hhbmdlLlxuLy9cbi8vIEV4YW1wbGUgdXNhZ2U6IGNoYW5nZSB0aGUgZGVmYXVsdCBibHVlIGJvcmRlciBhbmQgc2hhZG93IHRvIHdoaXRlIGZvciBiZXR0ZXJcbi8vIGNvbnRyYXN0IGFnYWluc3QgYSBkYXJrIGdyYXkgYmFja2dyb3VuZC5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtZm9jdXMoKSB7XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1mb2N1cztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgICRzaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4ICRpbnB1dC1ib3gtc2hhZG93LWZvY3VzO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJHNoYWRvdyk7XG4gIH1cbn1cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIFJlbGF0aXZlIHRleHQgc2l6ZSwgcGFkZGluZywgYW5kIGJvcmRlci1yYWRpaSBjaGFuZ2VzIGZvciBmb3JtIGNvbnRyb2xzLiBGb3Jcbi8vIGhvcml6b250YWwgc2l6aW5nLCB3cmFwIGNvbnRyb2xzIGluIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy4gYDxzZWxlY3Q+YFxuLy8gZWxlbWVudCBnZXRzIHNwZWNpYWwgbG92ZSBiZWNhdXNlIGl0J3Mgc3BlY2lhbCwgYW5kIHRoYXQncyBhIGZhY3QhXG5cbkBtaXhpbiBpbnB1dC1zaXplKCRwYXJlbnQsICRpbnB1dC1oZWlnaHQsICRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICB9XG5cbiAgc2VsZWN0I3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICB9XG5cbiAgdGV4dGFyZWEjeyRwYXJlbnR9LFxuICBzZWxlY3RbbXVsdGlwbGVdI3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4iLCIvLyBQcm9ncmVzcyBiYXJzXG5cbkBtaXhpbiBwcm9ncmVzcy12YXJpYW50KCRjb2xvcikge1xuICAmW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG5cbiAgJlt2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cblxuICAvLyBJRTlcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowXFwwKSB7XG4gICAgLnByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUYWJsZXNcblxuQG1peGluIHRhYmxlLXJvdy12YXJpYW50KCRzdGF0ZSwgJGJhY2tncm91bmQpIHtcbiAgLy8gRXhhY3Qgc2VsZWN0b3JzIGJlbG93IHJlcXVpcmVkIHRvIG92ZXJyaWRlIGAudGFibGUtc3RyaXBlZGAgYW5kIHByZXZlbnRcbiAgLy8gaW5oZXJpdGFuY2UgdG8gbmVzdGVkIHRhYmxlcy5cbiAgLnRhYmxlLSN7JHN0YXRlfSB7XG4gICAgJixcbiAgICA+IHRoLFxuICAgID4gdGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSG92ZXIgc3RhdGVzIGZvciBgLnRhYmxlLWhvdmVyYFxuICAvLyBOb3RlOiB0aGlzIGlzIG5vdCBhdmFpbGFibGUgZm9yIGNlbGxzIG9yIHJvd3Mgd2l0aGluIGB0aGVhZGAgb3IgYHRmb290YC5cbiAgLnRhYmxlLWhvdmVyIHtcbiAgICAkaG92ZXItYmFja2dyb3VuZDogZGFya2VuKCRiYWNrZ3JvdW5kLCA1JSk7XG5cbiAgICAudGFibGUtI3skc3RhdGV9IHtcbiAgICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG5cbiAgICAgICAgPiB0ZCxcbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcblxuQG1peGluIGJnLXZhcmlhbnQoJHBhcmVudCwgJGNvbG9yKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSN7JHBhcmVudH0ge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBTaW5nbGUgc2lkZSBib3JkZXItcmFkaXVzXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXM6ICRib3JkZXItcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIH1cbn1cblxuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIH1cbn1cblxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgfVxufVxuIiwiLy8gR3JhZGllbnRzXG5cbi8vIEhvcml6b250YWwgZ3JhZGllbnQsIGZyb20gbGVmdCB0byByaWdodFxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOVxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOS5cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTlcbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTtcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn0iLCJAbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG4iLCIvLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5cbkBtaXhpbiBjZW50ZXItYmxvY2soKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIiwiLy8gRnJhbWV3b3JrIGdyaWQgZ2VuZXJhdGlvblxuLy9cbi8vIFVzZWQgb25seSBieSBCb290c3RyYXAgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGdyaWQgY2xhc3NlcyBnaXZlblxuLy8gYW55IHZhbHVlIG9mIGAkZ3JpZC1jb2x1bW5zYC5cblxuQG1peGluIG1ha2UtZ3JpZC1jb2x1bW5zKCRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgLy8gQ29tbW9uIHByb3BlcnRpZXMgZm9yIGFsbCBicmVha3BvaW50c1xuICAlZ3JpZC1jb2x1bW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBQcmV2ZW50IGNvbHVtbnMgZnJvbSBjb2xsYXBzaW5nIHdoZW4gZW1wdHlcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgLy8gSW5uZXIgZ3V0dGVyIHZpYSBwYWRkaW5nXG4gICAgcGFkZGluZy1sZWZ0OiAoJGd1dHRlciAvIDIpO1xuICAgIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG4gIH1cbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGJyZWFrcG9pbnRzKSB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LSN7JGl9IHtcbiAgICAgICAgQGV4dGVuZCAlZ3JpZC1jb2x1bW47XG4gICAgICB9XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgIC8vIFdvcmsgYXJvdW5kIGNyb3NzLW1lZGlhIEBleHRlbmQgKGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL3Nhc3MvaXNzdWVzLzEwNTApXG4gICAgICAlZ3JpZC1jb2x1bW4tZmxvYXQtI3skYnJlYWtwb2ludH0ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xuICAgICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LSN7JGl9IHtcbiAgICAgICAgICBAaWYgbm90ICRlbmFibGUtZmxleCB7XG4gICAgICAgICAgICBAZXh0ZW5kICVncmlkLWNvbHVtbi1mbG9hdC0jeyRicmVha3BvaW50fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWFrZS1jb2wtc3BhbigkaSwgJGNvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAZWFjaCAkbW9kaWZpZXIgaW4gKHB1bGwsIHB1c2gsIG9mZnNldCkge1xuICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRjb2x1bW5zIHtcbiAgICAgICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LSN7JG1vZGlmaWVyfS0jeyRpfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYWtlLWNvbC1tb2RpZmllcigkbW9kaWZpZXIsICRpLCAkY29sdW1ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xuICBAaWYgbm90ICRlbmFibGUtZmxleCB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcbiAgfVxufVxuXG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICBtYXgtd2lkdGg6ICRjb250YWluZXItbWF4LXdpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIEBpZiAkZW5hYmxlLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeCgpO1xuICB9XG4gIG1hcmdpbi1sZWZ0OiAgKCRndXR0ZXIgLyAtMik7XG4gIG1hcmdpbi1yaWdodDogKCRndXR0ZXIgLyAtMik7XG59XG5cbkBtaXhpbiBtYWtlLWNvbCgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAaWYgbm90ICRlbmFibGUtZmxleCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtc3Bhbigkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgQGlmICRlbmFibGUtZmxleCB7XG4gICAgZmxleDogMCAwIHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG4gIH0gQGVsc2Uge1xuICAgIHdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICB9XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtcHVzaCgkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgbGVmdDogaWYoJHNpemUgPiAwLCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpLCBhdXRvKTtcbn1cblxuQG1peGluIG1ha2UtY29sLXB1bGwoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIHJpZ2h0OiBpZigkc2l6ZSA+IDAsIHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyksIGF1dG8pO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtbW9kaWZpZXIoJHR5cGUsICRzaXplLCAkY29sdW1ucykge1xuICAvLyBXb3JrIGFyb3VuZCB0aGUgbGFjayBvZiBkeW5hbWljIG1peGluIEBpbmNsdWRlIHN1cHBvcnQgKGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL3Nhc3MvaXNzdWVzLzYyNilcbiAgQGlmICR0eXBlID09IHB1c2gge1xuICAgIEBpbmNsdWRlIG1ha2UtY29sLXB1c2goJHNpemUsICRjb2x1bW5zKTtcbiAgfSBAZWxzZSBpZiAkdHlwZSA9PSBwdWxsIHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbC1wdWxsKCRzaXplLCAkY29sdW1ucyk7XG4gIH0gQGVsc2UgaWYgJHR5cGUgPT0gb2Zmc2V0IHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zKTtcbiAgfVxufVxuIiwiQG1peGluIHB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5AbWl4aW4gcHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuIiwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vL1xuLy8gMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cbi8vIDIuIFByZXZlbnQgaU9TIGFuZCBJRSB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2UsXG4vLyAgICB3aXRob3V0IGRpc2FibGluZyB1c2VyIHpvb20uXG4vL1xuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8vIDFcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8vIDJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvLyAyXG59XG5cbi8vXG4vLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXG4vL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXG4vLyBhbmQgRmlyZWZveC5cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXG4vL1xuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1haW4sXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy9cbi8vIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXG4vLyAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4vL1xuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIDFcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvLyAyXG59XG5cbi8vXG4vLyBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuLy8gUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbi8vXG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cbi8vIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cbi8vXG5cbltoaWRkZW5dLFxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vLyBMaW5rc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuLy9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vL1xuLy8gSW1wcm92ZSByZWFkYWJpbGl0eSBvZiBmb2N1c2VkIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgYWxzbyBpbiBhblxuLy8gYWN0aXZlL2hvdmVyIHN0YXRlLlxuLy9cblxuYSB7XG4gICY6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gICY6aG92ZXIge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbn1cblxuLy8gVGV4dC1sZXZlbCBzZW1hbnRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4vL1xuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXG4vLyBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cbi8vXG5cbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuLy9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLy9cbi8vIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8vIEVtYmVkZGVkIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cbi8vXG5cbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLy9cbi8vIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxuLy9cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBHcm91cGluZyBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXG4vL1xuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG4vL1xuLy8gQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxuLy9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vL1xuLy8gQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy9cbi8vIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLy8gRm9ybXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxuLy8gc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxuLy9cblxuLy9cbi8vIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxuLy8gMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IGluaGVyaXQ7IC8vIDFcbiAgZm9udDogaW5oZXJpdDsgLy8gMlxuICBtYXJnaW46IDA7IC8vIDNcbn1cblxuLy9cbi8vIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxuLy9cblxuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXG4vLyBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxuLy8gQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cbi8vIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cbi8vXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vL1xuLy8gMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2Bcbi8vICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxuLy8gMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuLy8gMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcbi8vICAgIGBpbnB1dGAgYW5kIG90aGVycy5cbi8vXG5cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvLyAyXG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gM1xufVxuXG4vL1xuLy8gUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbi8vXG5cbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLy9cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cbi8vXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxuLy8gdGhlIFVBIHN0eWxlc2hlZXQuXG4vL1xuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8vXG4vLyBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXG4vLyBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxuLy9cbi8vIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXG4vLyAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxuLy9cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gMVxuICBwYWRkaW5nOiAwOyAvLyAyXG59XG5cbi8vXG4vLyBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxuLy8gYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbi8vIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cbi8vXG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vL1xuLy8gMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4vLyAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuLy9cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvLyAxXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvLzJcbn1cblxuLy9cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxuLy8gU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuLy8gcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxuLy9cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8vXG4vLyBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXG4vL1xuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLy9cbi8vIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cbi8vIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cbi8vXG5cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDsgLy8gMVxuICBwYWRkaW5nOiAwOyAvLyAyXG59XG5cbi8vXG4vLyBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxuLy9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy9cbi8vIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cbi8vIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxuLy9cblxub3B0Z3JvdXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy8gVGFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuLy9cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG4iLCIvLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2Jsb2IvbWFzdGVyL3NyYy9jc3MvbWFpbi5jc3NcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFByaW50IHN0eWxlcy5cbi8vIElubGluZWQgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgSFRUUCByZXF1ZXN0OiBoNWJwLmNvbS9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AbWVkaWEgcHJpbnQge1xuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGEsXG4gIGE6dmlzaXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICBhYmJyW3RpdGxlXTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKHRpdGxlKSBcIilcIjtcbiAgfVxuXG4gIHByZSxcbiAgYmxvY2txdW90ZSB7XG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICM5OTk7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG5cbiAgdGhlYWQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDsgLy8gaDVicC5jb20vdFxuICB9XG5cbiAgdHIsXG4gIGltZyB7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIHAsXG4gIGgyLFxuICBoMyB7XG4gICAgb3JwaGFuczogMztcbiAgICB3aWRvd3M6IDM7XG4gIH1cblxuICBoMixcbiAgaDMge1xuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xuICB9XG5cbiAgLy8gQm9vdHN0cmFwIHNwZWNpZmljIGNoYW5nZXMgc3RhcnRcblxuICAvLyBCb290c3RyYXAgY29tcG9uZW50c1xuICAubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5idG4sXG4gIC5kcm9wdXAgPiAuYnRuIHtcbiAgICA+IC5jYXJldCB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5sYWJlbCB7XG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkICMwMDA7XG4gIH1cblxuICAudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDtcblxuICAgIHRkLFxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnRhYmxlLWJvcmRlcmVkIHtcbiAgICB0aCxcbiAgICB0ZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gQm9vdHN0cmFwIHNwZWNpZmljIGNoYW5nZXMgZW5kXG59XG4iLCIvLyBSZWJvb3Rcbi8vXG4vLyBHbG9iYWwgcmVzZXRzIHRvIGNvbW1vbiBIVE1MIGVsZW1lbnRzIGFuZCBtb3JlIGZvciBlYXNpZXIgdXNhZ2UgYnkgQm9vdHN0cmFwLlxuLy8gQWRkcyBhZGRpdGlvbmFsIHJ1bGVzIG9uIHRvcCBvZiBOb3JtYWxpemUuY3NzLCBpbmNsdWRpbmcgc2V2ZXJhbCBvdmVycmlkZXMuXG5cblxuLy8gUmVzZXQgdGhlIGJveC1zaXppbmdcbi8vXG4vLyBDaGFuZ2UgZnJvbSBgYm94LXNpemluZzogY29udGVudC1ib3hgIHRvIGBib3JkZXItYm94YCBzbyB0aGF0IHdoZW4geW91IGFkZFxuLy8gYHBhZGRpbmdgIG9yIGBib3JkZXJgcyB0byBhbiBlbGVtZW50LCB0aGUgb3ZlcmFsbCBkZWNsYXJlZCBgd2lkdGhgIGRvZXMgbm90XG4vLyBjaGFuZ2UuIEZvciBleGFtcGxlLCBgd2lkdGg6IDEwMHB4O2Agd2lsbCBhbHdheXMgYmUgYDEwMHB4YCBkZXNwaXRlIHRoZVxuLy8gYGJvcmRlcjogMTBweCBzb2xpZCByZWQ7YCBhbmQgYHBhZGRpbmc6IDIwcHg7YC5cbi8vXG4vLyBIZWFkcyB1cCEgVGhpcyByZXNldCBtYXkgY2F1c2UgY29uZmxpY3RzIHdpdGggc29tZSB0aGlyZC1wYXJ0eSB3aWRnZXRzLiBGb3Jcbi8vIHJlY29tbWVuZGF0aW9ucyBvbiByZXNvbHZpbmcgc3VjaCBjb25mbGljdHMsIHNlZVxuLy8gaHR0cDovL2dldGJvb3RzdHJhcC5jb20vZ2V0dGluZy1zdGFydGVkLyN0aGlyZC1ib3gtc2l6aW5nLlxuLy9cbi8vIENyZWRpdDogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9pbmhlcml0aW5nLWJveC1zaXppbmctcHJvYmFibHktc2xpZ2h0bHktYmV0dGVyLWJlc3QtcHJhY3RpY2UvXG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5cbi8vIE1ha2Ugdmlld3BvcnQgcmVzcG9uc2l2ZVxuLy9cbi8vIEB2aWV3cG9ydCBpcyBuZWVkZWQgYmVjYXVzZSBJRSAxMCsgZG9lc24ndCBob25vciA8bWV0YSBuYW1lPVwidmlld3BvcnRcIj4gaW5cbi8vIHNvbWUgY2FzZXMuIFNlZSBodHRwOi8vdGlta2FkbGVjLmNvbS8yMDEyLzEwL2llMTAtc25hcC1tb2RlLWFuZC1yZXNwb25zaXZlLWRlc2lnbi8uXG4vLyBFdmVudHVhbGx5IEB2aWV3cG9ydCB3aWxsIHJlcGxhY2UgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCI+LiBJdCdzIGJlZW4gbWFudWFsbHlcbi8vIHByZWZpeGVkIGZvciBmb3J3YXJkLWNvbXBhdGliaWxpdHkuXG4vL1xuLy8gSG93ZXZlciwgYGRldmljZS13aWR0aGAgaXMgYnJva2VuIG9uIElFIDEwIG9uIFdpbmRvd3MgKFBob25lKSA4LFxuLy8gKHNlZSBodHRwOi8vdGlta2FkbGVjLmNvbS8yMDEzLzAxL3dpbmRvd3MtcGhvbmUtOC1hbmQtZGV2aWNlLXdpZHRoLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMDQ5Nylcbi8vIGFuZCB0aGUgZml4IGZvciB0aGF0IGludm9sdmVzIGEgc25pcHBldCBvZiBKYXZhU2NyaXB0IHRvIHNuaWZmIHRoZSB1c2VyIGFnZW50XG4vLyBhbmQgYXBwbHkgc29tZSBjb25kaXRpb25hbCBDU1MuXG4vL1xuLy8gU2VlIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2dldHRpbmctc3RhcnRlZC8jc3VwcG9ydC1pZTEwLXdpZHRoIGZvciB0aGUgcmVsZXZhbnQgaGFjay5cbi8vXG4vLyBXcmFwIGBAdmlld3BvcnRgIHdpdGggYEBhdC1yb290YCBmb3Igd2hlbiBmb2xrcyBkbyBhIG5lc3RlZCBpbXBvcnQgKGUuZy4sXG4vLyBgLmNsYXNzLW5hbWUgeyBAaW1wb3J0IFwiYm9vdHN0cmFwXCI7IH1gKS5cbi8vXG4vLyBJbmNsdWRlcyBmdXR1cmUtcHJvb2ZlZCB2ZW5kb3IgcHJlZml4ZXMgYXMgd2VsbC5cbkBhdC1yb290IHtcbiAgQC1tb3otdmlld3BvcnQgICAgICB7IHdpZHRoOiBkZXZpY2Utd2lkdGg7IH1cbiAgQC1tcy12aWV3cG9ydCAgICAgICB7IHdpZHRoOiBkZXZpY2Utd2lkdGg7IH1cbiAgQC1vLXZpZXdwb3J0ICAgICAgICB7IHdpZHRoOiBkZXZpY2Utd2lkdGg7IH1cbiAgQC13ZWJraXQtdmlld3BvcnQgICB7IHdpZHRoOiBkZXZpY2Utd2lkdGg7IH1cbiAgQHZpZXdwb3J0ICAgICAgICAgICB7IHdpZHRoOiBkZXZpY2Utd2lkdGg7IH1cbn1cblxuXG4vL1xuLy8gUmVzZXQgSFRNTCwgYm9keSwgYW5kIG1vcmVcbi8vXG5cbmh0bWwge1xuICAvLyBTZXRzIGEgc3BlY2lmaWMgZGVmYXVsdCBgZm9udC1zaXplYCBmb3IgdXNlciB3aXRoIGByZW1gIHR5cGUgc2NhbGVzLlxuICBmb250LXNpemU6ICRmb250LXNpemUtcm9vdDtcbiAgLy8gQ2hhbmdlcyB0aGUgZGVmYXVsdCB0YXAgaGlnaGxpZ2h0IHRvIGJlIGNvbXBsZXRlbHkgdHJhbnNwYXJlbnQgaW4gaU9TLlxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG59XG5cbmJvZHkge1xuICAvLyBNYWtlIHRoZSBgYm9keWAgdXNlIHRoZSBgZm9udC1zaXplLXJvb3RgXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIC8vIEdvIGVhc3kgb24gdGhlIGV5ZXMgYW5kIHVzZSBzb21ldGhpbmcgb3RoZXIgdGhhbiBgIzAwMGAgZm9yIHRleHRcbiAgY29sb3I6ICRib2R5LWNvbG9yO1xuICAvLyBCeSBkZWZhdWx0LCBgPGJvZHk+YCBoYXMgbm8gYGJhY2tncm91bmQtY29sb3JgIHNvIHdlIHNldCBvbmUgYXMgYSBiZXN0IHByYWN0aWNlLlxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbn1cblxuLy8gU3VwcHJlc3MgdGhlIGZvY3VzIG91dGxpbmUgb24gZWxlbWVudHMgdGhhdCBjYW5ub3QgYmUgYWNjZXNzZWQgdmlhIGtleWJvYXJkLlxuLy8gVGhpcyBwcmV2ZW50cyBhbiB1bndhbnRlZCBmb2N1cyBvdXRsaW5lIGZyb20gYXBwZWFyaW5nIGFyb3VuZCBlbGVtZW50cyB0aGF0XG4vLyBtaWdodCBzdGlsbCByZXNwb25kIHRvIHBvaW50ZXIgZXZlbnRzLlxuLy9cbi8vIENyZWRpdDogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxuW3RhYmluZGV4PVwiLTFcIl06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLy9cbi8vIFR5cG9ncmFwaHlcbi8vXG5cbi8vIFJlbW92ZSB0b3AgbWFyZ2lucyBmcm9tIGhlYWRpbmdzXG4vL1xuLy8gQnkgZGVmYXVsdCwgYDxoMT5gLWA8aDY+YCBhbGwgcmVjZWl2ZSB0b3AgYW5kIGJvdHRvbSBtYXJnaW5zLiBXZSBudWtlIHRoZSB0b3Bcbi8vIG1hcmdpbiBmb3IgZWFzaWVyIGNvbnRyb2wgd2l0aGluIHR5cGUgc2NhbGVzIGFzIGl0IGF2b2lkcyBtYXJnaW4gY29sbGFwc2luZy5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLy8gUmVzZXQgbWFyZ2lucyBvbiBwYXJhZ3JhcGhzXG4vL1xuLy8gU2ltaWxhcmx5LCB0aGUgdG9wIG1hcmdpbiBvbiBgPHA+YHMgZ2V0IHJlc2V0LiBIb3dldmVyLCB3ZSBhbHNvIHJlc2V0IHRoZVxuLy8gYm90dG9tIG1hcmdpbiB0byB1c2UgYHJlbWAgdW5pdHMgaW5zdGVhZCBvZiBgZW1gLlxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi8vIEFiYnJldmlhdGlvbnMgYW5kIGFjcm9ueW1zXG5hYmJyW3RpdGxlXSxcbi8vIEFkZCBkYXRhLSogYXR0cmlidXRlIHRvIGhlbHAgb3V0IG91ciB0b29sdGlwIHBsdWdpbiwgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNTI1N1xuYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSB7XG4gIGN1cnNvcjogaGVscDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAkYWJici1ib3JkZXItY29sb3I7XG59XG5cbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5vbCxcbnVsLFxuZGwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5vbCBvbCxcbnVsIHVsLFxub2wgdWwsXG51bCBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmR0IHtcbiAgZm9udC13ZWlnaHQ6ICRkdC1mb250LXdlaWdodDtcbn1cblxuZGQge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7IC8vIFVuZG8gYnJvd3NlciBkZWZhdWx0XG59XG5cbmJsb2NrcXVvdGUge1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG5cbi8vXG4vLyBMaW5rc1xuLy9cblxuYSB7XG4gIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1kZWNvcmF0aW9uO1xuXG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICBjb2xvcjogJGxpbmstaG92ZXItY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1ob3Zlci1kZWNvcmF0aW9uO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgQGluY2x1ZGUgdGFiLWZvY3VzKCk7XG4gIH1cbn1cblxuXG4vL1xuLy8gQ29kZVxuLy9cblxucHJlIHtcbiAgLy8gUmVtb3ZlIGJyb3dzZXIgZGVmYXVsdCB0b3AgbWFyZ2luXG4gIG1hcmdpbi10b3A6IDA7XG4gIC8vIFJlc2V0IGJyb3dzZXIgZGVmYXVsdCBvZiBgMWVtYCB0byB1c2UgYHJlbWBzXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cblxuLy9cbi8vIEZpZ3VyZXNcbi8vXG5cbmZpZ3VyZSB7XG4gIC8vIE5vcm1hbGl6ZSBhZGRzIGBtYXJnaW5gIHRvIGBmaWd1cmVgcyBhcyBicm93c2VycyBhcHBseSBpdCBpbmNvbnNpc3RlbnRseS5cbiAgLy8gV2UgcmVzZXQgdGhhdCB0byBjcmVhdGUgYSBiZXR0ZXIgZmxvdyBpbi1wYWdlLlxuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG5cbi8vXG4vLyBJbWFnZXNcbi8vXG5cbmltZyB7XG4gIC8vIEJ5IGRlZmF1bHQsIGA8aW1nPmBzIGFyZSBgaW5saW5lLWJsb2NrYC4gVGhpcyBhc3N1bWVzIHRoYXQsIGFuZCB2ZXJ0aWNhbGx5XG4gIC8vIGNlbnRlcnMgdGhlbS4gVGhpcyB3b24ndCBhcHBseSBzaG91bGQgeW91IHJlc2V0IHRoZW0gdG8gYGJsb2NrYCBsZXZlbC5cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLy8gTm90ZTogYDxpbWc+YHMgYXJlIGRlbGliZXJhdGVseSBub3QgbWFkZSByZXNwb25zaXZlIGJ5IGRlZmF1bHQuXG4gIC8vIEZvciB0aGUgcmF0aW9uYWxlIGJlaGluZCB0aGlzLCBzZWUgdGhlIGNvbW1lbnRzIG9uIHRoZSBgLmltZy1mbHVpZGAgY2xhc3MuXG59XG5cblxuLy8gaU9TIFwiY2xpY2thYmxlIGVsZW1lbnRzXCIgZml4IGZvciByb2xlPVwiYnV0dG9uXCJcbi8vXG4vLyBGaXhlcyBcImNsaWNrYWJpbGl0eVwiIGlzc3VlIChhbmQgbW9yZSBnZW5lcmFsbHksIHRoZSBmaXJpbmcgb2YgZXZlbnRzIHN1Y2ggYXMgZm9jdXMgYXMgd2VsbClcbi8vIGZvciB0cmFkaXRpb25hbGx5IG5vbi1mb2N1c2FibGUgZWxlbWVudHMgd2l0aCByb2xlPVwiYnV0dG9uXCJcbi8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2xpY2sjU2FmYXJpX01vYmlsZVxuXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vLyBBdm9pZCAzMDBtcyBjbGljayBkZWxheSBvbiB0b3VjaCBkZXZpY2VzIHRoYXQgc3VwcG9ydCB0aGUgYHRvdWNoLWFjdGlvbmAgQ1NTIHByb3BlcnR5LlxuLy9cbi8vIEluIHBhcnRpY3VsYXIsIHVubGlrZSBtb3N0IG90aGVyIGJyb3dzZXJzLCBJRTExK0VkZ2Ugb24gV2luZG93cyAxMCBvbiB0b3VjaCBkZXZpY2VzIGFuZCBJRSBNb2JpbGUgMTAtMTFcbi8vIERPTidUIHJlbW92ZSB0aGUgY2xpY2sgZGVsYXkgd2hlbiBgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiPmAgaXMgcHJlc2VudC5cbi8vIEhvd2V2ZXIsIHRoZXkgRE8gc3VwcG9ydCByZW1vdmluZyB0aGUgY2xpY2sgZGVsYXkgdmlhIGB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbmAuXG4vLyBTZWU6XG4vLyAqIGh0dHA6Ly92NC1hbHBoYS5nZXRib290c3RyYXAuY29tL2NvbnRlbnQvcmVib290LyNjbGljay1kZWxheS1vcHRpbWl6YXRpb24tZm9yLXRvdWNoXG4vLyAqIGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtdG91Y2gtYWN0aW9uXG4vLyAqIGh0dHA6Ly9wYXRyaWNraGxhdWtlLmdpdGh1Yi5pby90b3VjaC90ZXN0cy9yZXN1bHRzLyNzdXBwcmVzc2luZy0zMDBtcy1kZWxheVxuXG5hLFxuYXJlYSxcbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdLFxuaW5wdXQsXG5sYWJlbCxcbnNlbGVjdCxcbnN1bW1hcnksXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5cbi8vXG4vLyBUYWJsZXNcbi8vXG5cbnRhYmxlIHtcbiAgLy8gUmVzZXQgZm9yIG5lc3Rpbmcgd2l0aGluIHBhcmVudHMgd2l0aCBgYmFja2dyb3VuZC1jb2xvcmAuXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1iZztcbn1cblxuY2FwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICBwYWRkaW5nLWJvdHRvbTogJHRhYmxlLWNlbGwtcGFkZGluZztcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcbn1cblxudGgge1xuICAvLyBDZW50ZXJlZCBieSBkZWZhdWx0LCBidXQgbGVmdC1hbGlnbi1lZCB0byBtYXRjaCB0aGUgYHRkYHMgYmVsb3cuXG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLy9cbi8vIEZvcm1zXG4vL1xuXG5sYWJlbCB7XG4gIC8vIEFsbG93IGxhYmVscyB0byB1c2UgYG1hcmdpbmAgZm9yIHNwYWNpbmcuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi8vIFdvcmsgYXJvdW5kIGEgRmlyZWZveC9JRSBidWcgd2hlcmUgdGhlIHRyYW5zcGFyZW50IGBidXR0b25gIGJhY2tncm91bmRcbi8vIHJlc3VsdHMgaW4gYSBsb3NzIG9mIHRoZSBkZWZhdWx0IGBidXR0b25gIGZvY3VzIHN0eWxlcy5cbi8vXG4vLyBDcmVkaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWl0Y3NzL2Jhc2UvXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICAvLyBSZW1vdmUgYWxsIGBtYXJnaW5gcyBzbyBvdXIgY2xhc3NlcyBkb24ndCBoYXZlIHRvIGRvIGl0IHRoZW1zZWx2ZXMuXG4gIG1hcmdpbjogMDtcbiAgLy8gTm9ybWFsaXplIGluY2x1ZGVzIGBmb250OiBpbmhlcml0O2AsIHNvIGBmb250LWZhbWlseWAuIGBmb250LXNpemVgLCBldGMgYXJlXG4gIC8vIHByb3Blcmx5IGluaGVyaXRlZC4gSG93ZXZlciwgYGxpbmUtaGVpZ2h0YCBpc24ndCBhZGRyZXNzZWQgdGhlcmUuIFVzaW5nIHRoaXNcbiAgLy8gZW5zdXJlcyB3ZSBkb24ndCBuZWVkIHRvIHVubmVjZXNzYXJpbHkgcmVkZWNsYXJlIHRoZSBnbG9iYWwgZm9udCBzdGFjay5cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIC8vIGlPUyBhZGRzIHJvdW5kZWQgYm9yZGVycyBieSBkZWZhdWx0XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbnRleHRhcmVhIHtcbiAgLy8gVGV4dGFyZWFzIHNob3VsZCByZWFsbHkgb25seSByZXNpemUgdmVydGljYWxseSBzbyB0aGV5IGRvbid0IGJyZWFrIHRoZWlyIChob3Jpem9udGFsKSBjb250YWluZXJzLlxuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG5maWVsZHNldCB7XG4gIC8vIENocm9tZSBhbmQgRmlyZWZveCBzZXQgYSBgbWluLXdpZHRoOiBtaW4tY29udGVudDtgIG9uIGZpZWxkc2V0cyxcbiAgLy8gc28gd2UgcmVzZXQgdGhhdCB0byBlbnN1cmUgaXQgYmVoYXZlcyBtb3JlIGxpa2UgYSBzdGFuZGFyZCBibG9jayBlbGVtZW50LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMjM1OS5cbiAgbWluLXdpZHRoOiAwO1xuICAvLyBSZXNldCB0aGUgZGVmYXVsdCBvdXRsaW5lIGJlaGF2aW9yIG9mIGZpZWxkc2V0cyBzbyB0aGV5IGRvbid0IGFmZmVjdCBwYWdlIGxheW91dC5cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIC8vIFJlc2V0IHRoZSBlbnRpcmUgbGVnZW5kIGVsZW1lbnQgdG8gbWF0Y2ggdGhlIGBmaWVsZHNldGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuLy8gIGJvcmRlcjogMDtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC8vIFVuZG8gTm9ybWFsaXplJ3MgZGVmYXVsdCBoZXJlIHRvIG1hdGNoIG91ciBnbG9iYWwgb3ZlcnJpZGVzLlxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAvLyBUaGlzIG92ZXJyaWRlcyB0aGUgZXh0cmEgcm91bmRlZCBjb3JuZXJzIG9uIHNlYXJjaCBpbnB1dHMgaW4gaU9TIHNvIHRoYXQgb3VyXG4gIC8vIGAuZm9ybS1jb250cm9sYCBjbGFzcyBjYW4gcHJvcGVybHkgc3R5bGUgdGhlbS4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IHNpbXBseVxuICAvLyBiZSBhZGRlZCB0byBgLmZvcm0tY29udHJvbGAgYXMgaXQncyBub3Qgc3BlY2lmaWMgZW5vdWdoLiBGb3IgZGV0YWlscywgc2VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE1ODYuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLy8gdG9kbzogbmVlZGVkP1xub3V0cHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuLy8gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4vLyAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbn1cblxuLy8gQWx3YXlzIGhpZGUgYW4gZWxlbWVudCB3aXRoIHRoZSBgaGlkZGVuYCBIVE1MIGF0dHJpYnV0ZSAoZnJvbSBQdXJlQ1NTKS5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiLy9cbi8vIEhlYWRpbmdzXG4vL1xuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XG4gIG1hcmdpbi1ib3R0b206ICRoZWFkaW5ncy1tYXJnaW4tYm90dG9tO1xuICBmb250LWZhbWlseTogJGhlYWRpbmdzLWZvbnQtZmFtaWx5O1xuICBmb250LXdlaWdodDogJGhlYWRpbmdzLWZvbnQtd2VpZ2h0O1xuICBsaW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xufVxuXG5oMSB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTsgfVxuaDIgeyBmb250LXNpemU6ICRmb250LXNpemUtaDI7IH1cbmgzIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgzOyB9XG5oNCB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNDsgfVxuaDUgeyBmb250LXNpemU6ICRmb250LXNpemUtaDU7IH1cbmg2IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg2OyB9XG5cbi8vIFRoZXNlIGRlY2xhcmF0aW9ucyBhcmUga2VwdCBzZXBhcmF0ZSBmcm9tIGFuZCBwbGFjZWQgYWZ0ZXJcbi8vIHRoZSBwcmV2aW91cyB0YWctYmFzZWQgZGVjbGFyYXRpb25zIHNvIHRoYXQgdGhlIGNsYXNzZXMgYmVhdCB0aGUgdGFncyBpblxuLy8gdGhlIENTUyBjYXNjYWRlLCBhbmQgdGh1cyA8aDEgY2xhc3M9XCJoMlwiPiB3aWxsIGJlIHN0eWxlZCBsaWtlIGFuIGgyLlxuLmgxIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgxOyB9XG4uaDIgeyBmb250LXNpemU6ICRmb250LXNpemUtaDI7IH1cbi5oMyB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMzsgfVxuLmg0IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg0OyB9XG4uaDUgeyBmb250LXNpemU6ICRmb250LXNpemUtaDU7IH1cbi5oNiB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNjsgfVxuXG4ubGVhZCB7XG4gIGZvbnQtc2l6ZTogJGxlYWQtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJGxlYWQtZm9udC13ZWlnaHQ7XG59XG5cbi8vIFR5cGUgZGlzcGxheSBjbGFzc2VzXG4uZGlzcGxheS0xIHtcbiAgZm9udC1zaXplOiAkZGlzcGxheTEtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRkaXNwbGF5MS13ZWlnaHQ7XG59XG4uZGlzcGxheS0yIHtcbiAgZm9udC1zaXplOiAkZGlzcGxheTItc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRkaXNwbGF5Mi13ZWlnaHQ7XG59XG4uZGlzcGxheS0zIHtcbiAgZm9udC1zaXplOiAkZGlzcGxheTMtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRkaXNwbGF5My13ZWlnaHQ7XG59XG4uZGlzcGxheS00IHtcbiAgZm9udC1zaXplOiAkZGlzcGxheTQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRkaXNwbGF5NC13ZWlnaHQ7XG59XG5cblxuLy9cbi8vIEhvcml6b250YWwgcnVsZXNcbi8vXG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogJHNwYWNlci15O1xuICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyLXk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogJGhyLWJvcmRlci13aWR0aCBzb2xpZCAkaHItYm9yZGVyLWNvbG9yO1xufVxuXG5cbi8vXG4vLyBFbXBoYXNpc1xuLy9cblxuc21hbGwsXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxubWFyayxcbi5tYXJrIHtcbiAgcGFkZGluZzogLjJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXRlLXdhcm5pbmctYmc7XG59XG5cblxuLy9cbi8vIExpc3RzXG4vL1xuXG4ubGlzdC11bnN0eWxlZCB7XG4gIEBpbmNsdWRlIGxpc3QtdW5zdHlsZWQ7XG59XG5cbi8vIElubGluZSB0dXJucyBsaXN0IGl0ZW1zIGludG8gaW5saW5lLWJsb2NrXG4ubGlzdC1pbmxpbmUge1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkO1xufVxuLmxpc3QtaW5saW5lLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6ICRsaXN0LWlubGluZS1wYWRkaW5nO1xuICB9XG59XG5cbi8vIEhvcml6b250YWwgZGVzY3JpcHRpb24gbGlzdHMgdy8gZ3JpZCBjbGFzc2VzXG4uZGwtaG9yaXpvbnRhbCB7XG4gIG1hcmdpbi1yaWdodDogLSRncmlkLWd1dHRlci13aWR0aDtcbiAgbWFyZ2luLWxlZnQ6IC0kZ3JpZC1ndXR0ZXItd2lkdGg7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuXG5cbi8vXG4vLyBNaXNjXG4vL1xuXG4vLyBCdWlsZHMgb24gYGFiYnJgXG4uaW5pdGlhbGlzbSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vLyBCbG9ja3F1b3Rlc1xuLmJsb2NrcXVvdGUge1xuICBwYWRkaW5nOiAoJHNwYWNlciAvIDIpICRzcGFjZXI7XG4gIG1hcmdpbi1ib3R0b206ICRzcGFjZXI7XG4gIGZvbnQtc2l6ZTogJGJsb2NrcXVvdGUtZm9udC1zaXplO1xuICBib3JkZXItbGVmdDogLjI1cmVtIHNvbGlkICRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjtcbn1cblxuLmJsb2NrcXVvdGUtZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogODAlOyAvLyBiYWNrIHRvIGRlZmF1bHQgZm9udC1zaXplXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkYmxvY2txdW90ZS1zbWFsbC1jb2xvcjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDE0IFxcMDBBMFwiOyAvLyBlbSBkYXNoLCBuYnNwXG4gIH1cbn1cblxuLy8gT3Bwb3NpdGUgYWxpZ25tZW50IG9mIGJsb2NrcXVvdGVcbi5ibG9ja3F1b3RlLXJldmVyc2Uge1xuICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2VyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBib3JkZXItcmlnaHQ6IC4yNXJlbSBzb2xpZCAkYmxvY2txdW90ZS1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4uYmxvY2txdW90ZS1yZXZlcnNlIC5ibG9ja3F1b3RlLWZvb3RlciB7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcXDAwQTAgXFwyMDE0XCI7IC8vIG5ic3AsIGVtIGRhc2hcbiAgfVxufVxuIiwiLy8gUmVzcG9uc2l2ZSBpbWFnZXMgKGVuc3VyZSBpbWFnZXMgZG9uJ3Qgc2NhbGUgYmV5b25kIHRoZWlyIHBhcmVudHMpXG4vL1xuLy8gVGhpcyBpcyBwdXJwb3NlZnVsbHkgb3B0LWluIHZpYSBhbiBleHBsaWNpdCBjbGFzcyByYXRoZXIgdGhhbiBiZWluZyB0aGUgZGVmYXVsdCBmb3IgYWxsIGA8aW1nPmBzLlxuLy8gV2UgcHJldmlvdXNseSB0cmllZCB0aGUgXCJpbWFnZXMgYXJlIHJlc3BvbnNpdmUgYnkgZGVmYXVsdFwiIGFwcHJvYWNoIGluIEJvb3RzdHJhcCB2Mixcbi8vIGFuZCBhYmFuZG9uZWQgaXQgaW4gQm9vdHN0cmFwIHYzIGJlY2F1c2UgaXQgYnJlYWtzIGxvdHMgb2YgdGhpcmQtcGFydHkgd2lkZ2V0cyAoaW5jbHVkaW5nIEdvb2dsZSBNYXBzKVxuLy8gd2hpY2ggd2VyZW4ndCBleHBlY3RpbmcgdGhlIGltYWdlcyB3aXRoaW4gdGhlbXNlbHZlcyB0byBiZSBpbnZvbHVudGFyaWx5IHJlc2l6ZWQuXG4vLyBTZWUgYWxzbyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE4MTc4XG4uaW1nLWZsdWlkIHtcbiAgQGluY2x1ZGUgaW1nLWZsdWlkKCk7XG59XG5cbi8vIFJvdW5kZWQgY29ybmVyc1xuLmltZy1yb3VuZGVkIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cy1sZyk7XG59XG5cbi8vIEltYWdlIHRodW1ibmFpbHNcbi5pbWctdGh1bWJuYWlsIHtcbiAgcGFkZGluZzogJHRodW1ibmFpbC1wYWRkaW5nO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGh1bWJuYWlsLWJnO1xuICBib3JkZXI6ICR0aHVtYm5haWwtYm9yZGVyLXdpZHRoIHNvbGlkICR0aHVtYm5haWwtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCAxcHggMnB4IHJnYmEoMCwwLDAsLjA3NSkpO1xuXG4gIC8vIEtlZXAgdGhlbSBhdCBtb3N0IDEwMCUgd2lkZVxuICBAaW5jbHVkZSBpbWctZmx1aWQoaW5saW5lLWJsb2NrKTtcbn1cblxuLy8gUGVyZmVjdCBjaXJjbGVcbi5pbWctY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vL1xuLy8gRmlndXJlc1xuLy9cblxuLmZpZ3VyZSB7XG4gIC8vIEVuc3VyZXMgdGhlIGNhcHRpb24ncyB0ZXh0IGFsaWducyB3aXRoIHRoZSBpbWFnZS5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlndXJlLWltZyB7XG4gIG1hcmdpbi1ib3R0b206ICgkc3BhY2VyLXkgLyAyKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5maWd1cmUtY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogJGdyYXktbGlnaHQ7XG59XG4iLCIvLyBJbmxpbmUgYW5kIGJsb2NrIGNvZGUgc3R5bGVzXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbW9ub3NwYWNlO1xufVxuXG4vLyBJbmxpbmUgY29kZVxuY29kZSB7XG4gIHBhZGRpbmc6IC4ycmVtIC40cmVtO1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICRjb2RlLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29kZS1iZztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG59XG5cbi8vIFVzZXIgaW5wdXQgdHlwaWNhbGx5IGVudGVyZWQgdmlhIGtleWJvYXJkXG5rYmQge1xuICBwYWRkaW5nOiAuMnJlbSAuNHJlbTtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAka2JkLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAka2JkLWJnO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzLXNtKTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIC0uMXJlbSAwIHJnYmEoMCwwLDAsLjI1KSk7XG5cbiAga2JkIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LXdlaWdodDogJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxufVxuXG4vLyBCbG9ja3Mgb2YgY29kZVxucHJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJHByZS1jb2xvcjtcblxuICAvLyBBY2NvdW50IGZvciBzb21lIGNvZGUgb3V0cHV0cyB0aGF0IHBsYWNlIGNvZGUgdGFncyBpbiBwcmUgdGFnc1xuICBjb2RlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi8vIEVuYWJsZSBzY3JvbGxhYmxlIGJsb2NrcyBvZiBjb2RlXG4ucHJlLXNjcm9sbGFibGUge1xuICBtYXgtaGVpZ2h0OiAkcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIiwiLy8gQ29udGFpbmVyIHdpZHRoc1xuLy9cbi8vIFNldCB0aGUgY29udGFpbmVyIHdpZHRoLCBhbmQgb3ZlcnJpZGUgaXQgZm9yIGZpeGVkIG5hdmJhcnMgaW4gbWVkaWEgcXVlcmllcy5cblxuLmNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyKCk7XG4gIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoKTtcblxufVxuXG5cbi8vIEZsdWlkIGNvbnRhaW5lclxuLy9cbi8vIFV0aWxpemVzIHRoZSBtaXhpbiBtZWFudCBmb3IgZml4ZWQgd2lkdGggY29udGFpbmVycywgYnV0IHdpdGhvdXQgYW55IGRlZmluZWRcbi8vIHdpZHRoIGZvciBmbHVpZCwgZnVsbCB3aWR0aCBsYXlvdXRzLlxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXIoKTtcbn1cblxuXG4vLyBSb3dcbi8vXG4vLyBSb3dzIGNvbnRhaW4gYW5kIGNsZWFyIHRoZSBmbG9hdHMgb2YgeW91ciBjb2x1bW5zLlxuXG5AaWYgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuICAucm93IHtcbiAgICBAaW5jbHVkZSBtYWtlLXJvdygpO1xuICB9XG59XG5cblxuLy8gQ29sdW1uc1xuLy9cbi8vIENvbW1vbiBzdHlsZXMgZm9yIHNtYWxsIGFuZCBsYXJnZSBncmlkIGNvbHVtbnNcblxuQGlmICRlbmFibGUtZ3JpZC1jbGFzc2VzIHtcbiAgQGluY2x1ZGUgbWFrZS1ncmlkLWNvbHVtbnMoKTtcbn1cblxuXG4vLyBGbGV4IHZhcmlhdGlvblxuLy9cbi8vIEN1c3RvbSBzdHlsZXMgZm9yIGFkZGl0aW9uYWwgZmxleCBhbGlnbm1lbnQgb3B0aW9ucy5cblxuQGlmICRlbmFibGUtZmxleCBhbmQgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuXG4gIC8vIEZsZXggY29sdW1uIHJlb3JkZXJpbmdcblxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgIC5jb2wtI3skYnJlYWtwb2ludH0tZmlyc3QgeyBvcmRlcjogLTE7IH1cbiAgICAgIC5jb2wtI3skYnJlYWtwb2ludH0tbGFzdCAgeyBvcmRlcjogMTsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFsaWdubWVudCBmb3IgZXZlcnkgY29sdW1uIGluIHJvd1xuXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgLnJvdy0jeyRicmVha3BvaW50fS10b3AgICAgeyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAgICAgLnJvdy0jeyRicmVha3BvaW50fS1jZW50ZXIgeyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAucm93LSN7JGJyZWFrcG9pbnR9LWJvdHRvbSB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFsaWdubWVudCBwZXIgY29sdW1uXG5cbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LXRvcCAgICB7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cbiAgICAgIC5jb2wtI3skYnJlYWtwb2ludH0tY2VudGVyIHsgYWxpZ24tc2VsZjogY2VudGVyOyB9XG4gICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LWJvdHRvbSB7IGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQmFzaWMgQm9vdHN0cmFwIHRhYmxlXG4vL1xuXG4udGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyO1xuXG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogJHRhYmxlLWNlbGwtcGFkZGluZztcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogJHRhYmxlLWJvcmRlci13aWR0aCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgdGhlYWQgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgYm9yZGVyLWJvdHRvbTogKDIgKiAkdGFibGUtYm9yZGVyLXdpZHRoKSBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgdGJvZHkgKyB0Ym9keSB7XG4gICAgYm9yZGVyLXRvcDogKDIgKiAkdGFibGUtYm9yZGVyLXdpZHRoKSBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbiAgfVxufVxuXG5cbi8vXG4vLyBDb25kZW5zZWQgdGFibGUgdy8gaGFsZiBwYWRkaW5nXG4vL1xuXG4udGFibGUtc20ge1xuICB0aCxcbiAgdGQge1xuICAgIHBhZGRpbmc6ICR0YWJsZS1zbS1jZWxsLXBhZGRpbmc7XG4gIH1cbn1cblxuXG4vLyBCb3JkZXJlZCB2ZXJzaW9uXG4vL1xuLy8gQWRkIGJvcmRlcnMgYWxsIGFyb3VuZCB0aGUgdGFibGUgYW5kIGJldHdlZW4gYWxsIHRoZSBjb2x1bW5zLlxuXG4udGFibGUtYm9yZGVyZWQge1xuICBib3JkZXI6ICR0YWJsZS1ib3JkZXItd2lkdGggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcblxuICB0aCxcbiAgdGQge1xuICAgIGJvcmRlcjogJHRhYmxlLWJvcmRlci13aWR0aCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgdGhlYWQge1xuICAgIHRoLFxuICAgIHRkIHtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6ICgyICogJHRhYmxlLWJvcmRlci13aWR0aCk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gWmVicmEtc3RyaXBpbmdcbi8vXG4vLyBEZWZhdWx0IHplYnJhLXN0cmlwZSBzdHlsZXMgKGFsdGVybmF0aW5nIGdyYXkgYW5kIHRyYW5zcGFyZW50IGJhY2tncm91bmRzKVxuXG4udGFibGUtc3RyaXBlZCB7XG4gIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1iZy1hY2NlbnQ7XG4gIH1cbn1cblxuXG4vLyBIb3ZlciBlZmZlY3Rcbi8vXG4vLyBQbGFjZWQgaGVyZSBzaW5jZSBpdCBoYXMgdG8gY29tZSBhZnRlciB0aGUgcG90ZW50aWFsIHplYnJhIHN0cmlwaW5nXG5cbi50YWJsZS1ob3ZlciB7XG4gIHRib2R5IHRyIHtcbiAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFibGUtYmctaG92ZXI7XG4gICAgfVxuICB9XG59XG5cblxuLy8gVGFibGUgYmFja2dyb3VuZHNcbi8vXG4vLyBFeGFjdCBzZWxlY3RvcnMgYmVsb3cgcmVxdWlyZWQgdG8gb3ZlcnJpZGUgYC50YWJsZS1zdHJpcGVkYCBhbmQgcHJldmVudFxuLy8gaW5oZXJpdGFuY2UgdG8gbmVzdGVkIHRhYmxlcy5cblxuLy8gR2VuZXJhdGUgdGhlIGNvbnRleHR1YWwgdmFyaWFudHNcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KGFjdGl2ZSwgJHRhYmxlLWJnLWFjdGl2ZSk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudChzdWNjZXNzLCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudChpbmZvLCAkc3RhdGUtaW5mby1iZyk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudCh3YXJuaW5nLCAkc3RhdGUtd2FybmluZy1iZyk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudChkYW5nZXIsICRzdGF0ZS1kYW5nZXItYmcpO1xuXG5cbi8vIFJlc3BvbnNpdmUgdGFibGVzXG4vL1xuLy8gV3JhcCB5b3VyIHRhYmxlcyBpbiBgLnRhYmxlLXJlc3BvbnNpdmVgIGFuZCB3ZSdsbCBtYWtlIHRoZW0gbW9iaWxlIGZyaWVuZGx5XG4vLyBieSBlbmFibGluZyBob3Jpem9udGFsIHNjcm9sbGluZy4gT25seSBhcHBsaWVzIDw3NjhweC4gRXZlcnl0aGluZyBhYm92ZSB0aGF0XG4vLyB3aWxsIGRpc3BsYXkgbm9ybWFsbHkuXG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAwLjAxJTsgLy8gV29ya2Fyb3VuZCBmb3IgSUU5IGJ1ZyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTQ4MzcpXG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgLy8gVE9ETzogZmluZCBvdXQgaWYgd2UgbmVlZCB0aGlzIHN0aWxsLlxuICAvL1xuICAvLyBib3JkZXI6ICR0YWJsZS1ib3JkZXItd2lkdGggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgLy8gLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMDA1N1xufVxuXG5cbi50aGVhZC1pbnZlcnNlIHtcbiAgdGgge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWRhcms7XG4gIH1cbn1cbi50aGVhZC1kZWZhdWx0IHtcbiAgdGgge1xuICAgIGNvbG9yOiAkZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodGVyO1xuICB9XG59XG5cbi50YWJsZS1pbnZlcnNlIHtcbiAgY29sb3I6ICRncmF5LWxpZ2h0ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWRhcms7XG5cbiAgJi50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgdGgsXG4gIHRkLFxuICB0aGVhZCB0aCB7XG4gICAgYm9yZGVyLWNvbG9yOiAkZ3JheTtcbiAgfVxufVxuXG5cbi50YWJsZS1yZWZsb3cge1xuICB0aGVhZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICB0Ym9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIHRoLFxuICB0ZCB7XG4gICAgYm9yZGVyLXRvcDogJHRhYmxlLWJvcmRlci13aWR0aCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1sZWZ0OiAkdGFibGUtYm9yZGVyLXdpZHRoIHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkdGFibGUtYm9yZGVyLXdpZHRoIHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgdGhlYWQsXG4gIHRib2R5LFxuICB0Zm9vdCB7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIHRyOmxhc3QtY2hpbGQge1xuICAgICAgICB0aCxcbiAgICAgICAgdGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206ICR0YWJsZS1ib3JkZXItd2lkdGggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyIHtcbiAgICBmbG9hdDogbGVmdDtcblxuICAgIHRoLFxuICAgIHRkIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6ICR0YWJsZS1ib3JkZXItd2lkdGggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBUZXh0dWFsIGZvcm0gY29udHJvbHNcbi8vXG5cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIC8vIE1ha2UgaW5wdXRzIGF0IGxlYXN0IHRoZSBoZWlnaHQgb2YgdGhlaXIgYnV0dG9uIGNvdW50ZXJwYXJ0IChiYXNlIGxpbmUtaGVpZ2h0ICsgcGFkZGluZyArIGJvcmRlcilcbiAgLy8gaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15ICRpbnB1dC1wYWRkaW5nLXg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmc7XG4gIC8vIFJlc2V0IHVudXN1YWwgRmlyZWZveC1vbi1BbmRyb2lkIGRlZmF1bHQgc3R5bGU7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2lzc3Vlcy8yMTQuXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcbiAgLy8gTm90ZTogVGhpcyBoYXMgbm8gZWZmZWN0IG9uIDxzZWxlY3Q+cyBpbiBzb21lIGJyb3dzZXJzLCBkdWUgdG8gdGhlIGxpbWl0ZWQgc3R5bGFiaWxpdHkgb2YgYDxzZWxlY3Q+YHMgaW4gQ1NTLlxuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzKTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygkaW5wdXQtYm94LXNoYWRvdyk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cyk7XG5cbiAgLy8gTWFrZSBpbnB1dHMgYXQgbGVhc3QgdGhlIGhlaWdodCBvZiB0aGVpciBidXR0b24gY291bnRlcnBhcnQgKGJhc2UgbGluZS1oZWlnaHQgKyBwYWRkaW5nICsgYm9yZGVyKS5cbiAgLy8gT25seSBhcHBseSB0aGUgaGVpZ2h0IHRvIHRleHR1YWwgaW5wdXRzIGFuZCBzb21lIHNlbGVjdHMuXG4gIC8vICY6bm90KHRleHRhcmVhKSxcbiAgLy8gJjpub3Qoc2VsZWN0W3NpemVdKSxcbiAgLy8gJjpub3Qoc2VsZWN0W211bHRpcGxlXSkge1xuICAvLyAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgLy8gfVxuXG4gIC8vIFVuc3R5bGUgdGhlIGNhcmV0IG9uIGA8c2VsZWN0PmBzIGluIElFMTArLlxuICAmOjotbXMtZXhwYW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAvLyBDdXN0b21pemUgdGhlIGA6Zm9jdXNgIHN0YXRlIHRvIGltaXRhdGUgbmF0aXZlIFdlYktpdCBzdHlsZXMuXG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC1mb2N1cygpO1xuXG4gIC8vIFBsYWNlaG9sZGVyXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyO1xuICAgIC8vIE92ZXJyaWRlIEZpcmVmb3gncyB1bnVzdWFsIGRlZmF1bHQgb3BhY2l0eTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2LlxuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAvLyBEaXNhYmxlZCBhbmQgcmVhZC1vbmx5IGlucHV0c1xuICAvL1xuICAvLyBIVE1MNSBzYXlzIHRoYXQgY29udHJvbHMgdW5kZXIgYSBmaWVsZHNldCA+IGxlZ2VuZDpmaXJzdC1jaGlsZCB3b24ndCBiZVxuICAvLyBkaXNhYmxlZCBpZiB0aGUgZmllbGRzZXQgaXMgZGlzYWJsZWQuIER1ZSB0byBpbXBsZW1lbnRhdGlvbiBkaWZmaWN1bHR5LCB3ZVxuICAvLyBkb24ndCBob25vciB0aGF0IGVkZ2UgY2FzZTsgd2Ugc3R5bGUgdGhlbSBhcyBkaXNhYmxlZCBhbnl3YXkuXG4gICY6ZGlzYWJsZWQsXG4gICZbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctZGlzYWJsZWQ7XG4gICAgLy8gaU9TIGZpeCBmb3IgdW5yZWFkYWJsZSBkaXNhYmxlZCBjb250ZW50OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTY1NS5cbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICB9XG59XG5cblxuLy8gTWFrZSBmaWxlIGlucHV0cyBiZXR0ZXIgbWF0Y2ggdGV4dCBpbnB1dHMgYnkgZm9yY2luZyB0aGVtIHRvIG5ldyBsaW5lcy5cbi5mb3JtLWNvbnRyb2wtZmlsZSxcbi5mb3JtLWNvbnRyb2wtcmFuZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vL1xuLy8gTGFiZWxzXG4vL1xuXG4vLyBGb3IgdXNlIHdpdGggaG9yaXpvbnRhbCBhbmQgaW5saW5lIGZvcm1zLCB3aGVuIHlvdSBuZWVkIHRoZSBsYWJlbCB0ZXh0IHRvXG4vLyBhbGlnbiB3aXRoIHRoZSBmb3JtIGNvbnRyb2xzLlxuLmZvcm0tY29udHJvbC1sYWJlbCB7XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXkgJGlucHV0LXBhZGRpbmcteDtcbiAgbWFyZ2luLWJvdHRvbTogMDsgLy8gT3ZlcnJpZGUgdGhlIGA8bGFiZWw+YCBkZWZhdWx0XG59XG5cblxuLy8gVG9kbzogY2xlYXIgdGhpcyB1cFxuXG4vLyBTcGVjaWFsIHN0eWxlcyBmb3IgaU9TIHRlbXBvcmFsIGlucHV0c1xuLy9cbi8vIEluIE1vYmlsZSBTYWZhcmksIHNldHRpbmcgYGRpc3BsYXk6IGJsb2NrYCBvbiB0ZW1wb3JhbCBpbnB1dHMgY2F1c2VzIHRoZVxuLy8gdGV4dCB3aXRoaW4gdGhlIGlucHV0IHRvIGJlY29tZSB2ZXJ0aWNhbGx5IG1pc2FsaWduZWQuIEFzIGEgd29ya2Fyb3VuZCwgd2Vcbi8vIHNldCBhIHBpeGVsIGxpbmUtaGVpZ2h0IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gaGVpZ2h0IG9mIHRoZSBpbnB1dCwgYnV0IG9ubHlcbi8vIGZvciBTYWZhcmkuIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM5ODQ4XG4vL1xuLy8gTm90ZSB0aGF0IGFzIG9mIDguMywgaU9TIGRvZXNuJ3Qgc3VwcG9ydCBgZGF0ZXRpbWVgIG9yIGB3ZWVrYC5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkge1xuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4gIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSxcbiAgaW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcbiAgICAmLmZvcm0tY29udHJvbCB7XG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICB9XG5cbiAgICAmLmlucHV0LXNtLFxuICAgIC5pbnB1dC1ncm91cC1zbSAmLmZvcm0tY29udHJvbCB7XG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbTtcbiAgICB9XG5cbiAgICAmLmlucHV0LWxnLFxuICAgIC5pbnB1dC1ncm91cC1sZyAmLmZvcm0tY29udHJvbCB7XG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sZztcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBTdGF0aWMgZm9ybSBjb250cm9sIHRleHRcbi8vXG4vLyBBcHBseSBjbGFzcyB0byBhbiBlbGVtZW50IHRvIG1ha2UgYW55IHN0cmluZyBvZiB0ZXh0IGFsaWduIHdpdGggbGFiZWxzIGluIGFcbi8vIGhvcml6b250YWwgZm9ybSBsYXlvdXQuXG5cbi5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgbWluLWhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgLy8gU2l6ZSBpdCBhcHByb3ByaWF0ZWx5IG5leHQgdG8gcmVhbCBmb3JtIGNvbnRyb2xzXG4gIHBhZGRpbmctdG9wOiAkaW5wdXQtcGFkZGluZy15O1xuICBwYWRkaW5nLWJvdHRvbTogJGlucHV0LXBhZGRpbmcteTtcbiAgLy8gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGZyb20gYHBgXG4gIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgJi5mb3JtLWNvbnRyb2wtc20sXG4gICYuZm9ybS1jb250cm9sLWxnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBCdWlsZCBvbiBgLmZvcm0tY29udHJvbGAgd2l0aCBtb2RpZmllciBjbGFzc2VzIHRvIGRlY3JlYXNlIG9yIGluY3JlYXNlIHRoZVxuLy8gaGVpZ2h0IGFuZCBmb250LXNpemUgb2YgZm9ybSBjb250cm9scy5cbi8vXG4vLyBUaGUgYC5mb3JtLWdyb3VwLSogZm9ybS1jb250cm9sYCB2YXJpYXRpb25zIGFyZSBzYWRseSBkdXBsaWNhdGVkIHRvIGF2b2lkIHRoZVxuLy8gaXNzdWUgZG9jdW1lbnRlZCBpbiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE1MDc0LlxuXG4uZm9ybS1jb250cm9sLXNtIHtcbiAgLy8gaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtO1xuICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15LXNtICRpbnB1dC1wYWRkaW5nLXgtc207XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1zbTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbSk7XG59XG5cbi5mb3JtLWNvbnRyb2wtbGcge1xuICAvLyBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGc7XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktbGcgJGlucHV0LXBhZGRpbmcteC1sZztcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWxnO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzLWxnKTtcbn1cblxuXG4vLyBGb3JtIGdyb3Vwc1xuLy9cbi8vIERlc2lnbmVkIHRvIGhlbHAgd2l0aCB0aGUgb3JnYW5pemF0aW9uIGFuZCBzcGFjaW5nIG9mIHZlcnRpY2FsIGZvcm1zLiBGb3Jcbi8vIGhvcml6b250YWwgZm9ybXMsIHVzZSB0aGUgcHJlZGVmaW5lZCBncmlkIGNsYXNzZXMuXG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTtcbn1cblxuXG4vLyBDaGVja2JveGVzIGFuZCByYWRpb3Ncbi8vXG4vLyBJbmRlbnQgdGhlIGxhYmVscyB0byBwb3NpdGlvbiByYWRpb3MvY2hlY2tib3hlcyBhcyBoYW5naW5nIGNvbnRyb2xzLlxuXG4ucmFkaW8sXG4uY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBtYXJnaW4tdG9wOiAgICAoJHNwYWNlciAqIC43NSk7XG4gIG1hcmdpbi1ib3R0b206ICgkc3BhY2VyICogLjc1KTtcblxuICBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAvLyBXaGVuIHRoZXJlJ3Mgbm8gbGFiZWxzLCBkb24ndCBwb3NpdGlvbiB0aGUgaW5wdXQuXG4gICAgaW5wdXQ6b25seS1jaGlsZCB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIH1cbiAgfVxufVxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5yYWRpby1pbmxpbmUgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbi5jaGVja2JveC1pbmxpbmUgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAuMjVyZW07XG4gIC8vIG1hcmdpbi10b3A6IDRweCBcXDk7XG4gIG1hcmdpbi1sZWZ0OiAtMS4yNXJlbTtcbn1cblxuLnJhZGlvICsgLnJhZGlvLFxuLmNoZWNrYm94ICsgLmNoZWNrYm94IHtcbiAgLy8gTW92ZSB1cCBzaWJsaW5nIHJhZGlvcyBvciBjaGVja2JveGVzIGZvciB0aWdodGVyIHNwYWNpbmdcbiAgbWFyZ2luLXRvcDogLS4yNXJlbTtcbn1cblxuLy8gUmFkaW9zIGFuZCBjaGVja2JveGVzIG9uIHNhbWUgbGluZVxuLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmFkaW8taW5saW5lICsgLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUgKyAuY2hlY2tib3gtaW5saW5lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcbn1cblxuLy8gQXBwbHkgc2FtZSBkaXNhYmxlZCBjdXJzb3IgdHdlYWsgYXMgZm9yIGlucHV0c1xuLy8gU29tZSBzcGVjaWFsIGNhcmUgaXMgbmVlZGVkIGJlY2F1c2UgPGxhYmVsPnMgZG9uJ3QgaW5oZXJpdCB0aGVpciBwYXJlbnQncyBgY3Vyc29yYC5cbi8vXG4vLyBOb3RlOiBOZWl0aGVyIHJhZGlvcyBub3IgY2hlY2tib3hlcyBjYW4gYmUgcmVhZG9ubHkuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAmOmRpc2FibGVkLFxuICAmLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cbi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgZGlyZWN0bHkgb24gPGxhYmVsPnNcbi5yYWRpby1pbmxpbmUsXG4uY2hlY2tib3gtaW5saW5lIHtcbiAgJi5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICB9XG59XG4vLyBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIG9uIGVsZW1lbnRzIHdpdGggPGxhYmVsPiBkZXNjZW5kYW50c1xuLnJhZGlvLFxuLmNoZWNrYm94IHtcbiAgJi5kaXNhYmxlZCB7XG4gICAgbGFiZWwge1xuICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBmZWVkYmFjayBzdGF0ZXNcbi8vXG4vLyBBcHBseSBjb250ZXh0dWFsIGFuZCBzZW1hbnRpYyBzdGF0ZXMgdG8gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2xzLlxuXG4uZm9ybS1jb250cm9sLXN1Y2Nlc3MsXG4uZm9ybS1jb250cm9sLXdhcm5pbmcsXG4uZm9ybS1jb250cm9sLWRhbmdlciB7XG4gIHBhZGRpbmctcmlnaHQ6ICgkaW5wdXQtcGFkZGluZy14ICogMyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodCAoJGlucHV0LWhlaWdodCAqIC4yNSk7XG4gIGJhY2tncm91bmQtc2l6ZTogKCRpbnB1dC1oZWlnaHQgKiAuNjUpICgkaW5wdXQtaGVpZ2h0ICogLjY1KTtcbn1cblxuLy8gRm9ybSB2YWxpZGF0aW9uIHN0YXRlc1xuLmhhcy1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJGJyYW5kLXN1Y2Nlc3MpO1xuXG4gIC5mb3JtLWNvbnRyb2wtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRmb3JtLWljb24tc3VjY2Vzcyk7XG4gIH1cbn1cblxuLmhhcy13YXJuaW5nIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJGJyYW5kLXdhcm5pbmcpO1xuXG4gIC5mb3JtLWNvbnRyb2wtd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRmb3JtLWljb24td2FybmluZyk7XG4gIH1cbn1cblxuLmhhcy1kYW5nZXIge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkYnJhbmQtZGFuZ2VyKTtcblxuICAuZm9ybS1jb250cm9sLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRmb3JtLWljb24tZGFuZ2VyKTtcbiAgfVxufVxuXG5cblxuXG4vLyAuZm9ybS1jb250cm9sLXN1Y2Nlc3Mge1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIjeyRmb3JtLWljb24tc3VjY2Vzc31cIik7XG4vLyAgIGJvcmRlci1jb2xvcjogJGJyYW5kLXN1Y2Nlc3M7XG4vLyB9XG4vL1xuLy8gLmZvcm0tY29udHJvbC13YXJuaW5nIHtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiI3skZm9ybS1pY29uLXdhcm5pbmd9XCIpO1xuLy8gICBib3JkZXItY29sb3I6ICRicmFuZC13YXJuaW5nO1xuLy8gfVxuLy9cbi8vIC5mb3JtLWNvbnRyb2wtZXJyb3Ige1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIjeyRmb3JtLWljb24tZGFuZ2VyfVwiKTtcbi8vICAgYm9yZGVyLWNvbG9yOiAkYnJhbmQtZGFuZ2VyO1xuLy8gfVxuXG5cbi8vIC5oYXMtZmVlZGJhY2sge1xuLy8gICAvLyBFbmFibGUgYWJzb2x1dGUgcG9zaXRpb25pbmdcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy9cbi8vICAgLy8gRW5zdXJlIGljb25zIGRvbid0IG92ZXJsYXAgdGV4dFxuLy8gICAuZm9ybS1jb250cm9sIHtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAoJGlucHV0LWhlaWdodCAqIDEuMjUpO1xuLy8gICB9XG4vLyB9XG4vLyAvLyBGZWVkYmFjayBpY29uXG4vLyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB6LWluZGV4OiAyOyAvLyBFbnN1cmUgaWNvbiBpcyBhYm92ZSBpbnB1dCBncm91cHNcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIHdpZHRoOiAkaW5wdXQtaGVpZ2h0O1xuLy8gICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4vLyAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuLy8gfVxuLy8gLmlucHV0LWxnICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi8vIC5pbnB1dC1ncm91cC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuLy8gICB3aWR0aDogJGlucHV0LWhlaWdodC1sZztcbi8vICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxnO1xuLy8gICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sZztcbi8vIH1cbi8vIC5pbnB1dC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4vLyAuaW5wdXQtZ3JvdXAtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbi8vICAgd2lkdGg6ICRpbnB1dC1oZWlnaHQtc207XG4vLyAgIGhlaWdodDogJGlucHV0LWhlaWdodC1zbTtcbi8vICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc207XG4vLyB9XG4vL1xuLy8gLy8gRm9ybSB2YWxpZGF0aW9uIHN0YXRlc1xuLy8gLmhhcy1zdWNjZXNzIHtcbi8vICAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLXN1Y2Nlc3MtdGV4dCwgJHN0YXRlLXN1Y2Nlc3MtdGV4dCwgJHN0YXRlLXN1Y2Nlc3MtYmcpO1xuLy8gfVxuLy8gLmhhcy13YXJuaW5nIHtcbi8vICAgQGluY2x1ZGUgZm9ybS1jb250cm9sLXZhbGlkYXRpb24oJHN0YXRlLXdhcm5pbmctdGV4dCwgJHN0YXRlLXdhcm5pbmctdGV4dCwgJHN0YXRlLXdhcm5pbmctYmcpO1xuLy8gfVxuLy8gLmhhcy1kYW5nZXIge1xuLy8gICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtZGFuZ2VyLXRleHQsICRzdGF0ZS1kYW5nZXItdGV4dCwgJHN0YXRlLWRhbmdlci1iZyk7XG4vLyB9XG4vL1xuLy8gLy8gUmVwb3NpdGlvbiBmZWVkYmFjayBpY29uIGlmIGlucHV0IGhhcyB2aXNpYmxlIGxhYmVsIGFib3ZlXG4vLyAuaGFzLWZlZWRiYWNrIGxhYmVsIHtcbi8vXG4vLyAgIH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4vLyAgICAgLy8gVE9ETzogcmVkbyB0aGlzIHNpbmNlIHdlIG51a2VkIHRoZSBgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkYFxuLy8gICAgIHRvcDogMDsgLy8gSGVpZ2h0IG9mIHRoZSBgbGFiZWxgIGFuZCBpdHMgbWFyZ2luXG4vLyAgIH1cbi8vXG4vLyAgICYuc3Itb25seSB+IC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuLy8gICAgIHRvcDogMDtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIElubGluZSBmb3Jtc1xuLy9cbi8vIE1ha2UgZm9ybXMgYXBwZWFyIGlubGluZSgtYmxvY2spIGJ5IGFkZGluZyB0aGUgYC5mb3JtLWlubGluZWAgY2xhc3MuIElubGluZVxuLy8gZm9ybXMgYmVnaW4gc3RhY2tlZCBvbiBleHRyYSBzbWFsbCAobW9iaWxlKSBkZXZpY2VzIGFuZCB0aGVuIGdvIGlubGluZSB3aGVuXG4vLyB2aWV3cG9ydHMgcmVhY2ggPDc2OHB4LlxuLy9cbi8vIFJlcXVpcmVzIHdyYXBwaW5nIGlucHV0cyBhbmQgbGFiZWxzIHdpdGggYC5mb3JtLWdyb3VwYCBmb3IgcHJvcGVyIGRpc3BsYXkgb2Zcbi8vIGRlZmF1bHQgSFRNTCBmb3JtIGNvbnRyb2xzIGFuZCBvdXIgY3VzdG9tIGZvcm0gY29udHJvbHMgKGUuZy4sIGlucHV0IGdyb3VwcykuXG5cbi5mb3JtLWlubGluZSB7XG5cbiAgLy8gS2ljayBpbiB0aGUgaW5saW5lXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICAvLyBJbmxpbmUtYmxvY2sgYWxsIHRoZSB0aGluZ3MgZm9yIFwiaW5saW5lXCJcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBmb2xrcyB0byAqbm90KiB1c2UgYC5mb3JtLWdyb3VwYFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IGF1dG87IC8vIFByZXZlbnQgbGFiZWxzIGZyb20gc3RhY2tpbmcgYWJvdmUgaW5wdXRzIGluIGAuZm9ybS1ncm91cGBcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdGF0aWMgY29udHJvbHMgYmVoYXZlIGxpa2UgcmVndWxhciBvbmVzXG4gICAgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAuaW5wdXQtZ3JvdXAtYWRkb24sXG4gICAgICAuaW5wdXQtZ3JvdXAtYnRuLFxuICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElucHV0IGdyb3VwcyBuZWVkIHRoYXQgMTAwJSB3aWR0aCB0aG91Z2hcbiAgICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wtbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luIG9uIHJhZGlvcy9jaGVja2JveGVzIHRoYXQgd2VyZSB1c2VkIGZvciBzdGFja2luZywgYW5kXG4gICAgLy8gdGhlbiB1bmRvIHRoZSBmbG9hdGluZyBvZiByYWRpb3MgYW5kIGNoZWNrYm94ZXMgdG8gbWF0Y2guXG4gICAgLnJhZGlvLFxuICAgIC5jaGVja2JveCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAgIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLy8gUmUtb3ZlcnJpZGUgdGhlIGZlZWRiYWNrIGljb24uXG4gICAgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBCYXNlIHN0eWxlc1xuLy9cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6ICRidG4tZm9udC13ZWlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXksICRidG4tcGFkZGluZy14LCAkZm9udC1zaXplLWJhc2UsICRsaW5lLWhlaWdodCwgJGJ0bi1ib3JkZXItcmFkaXVzKTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjJzIGVhc2UtaW4tb3V0KTtcblxuICAmLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBAaW5jbHVkZSB0YWItZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICYuZm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuICB9XG5cbiAgJi5kaXNhYmxlZCxcbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIG9wYWNpdHk6IC42NTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cbi8vIEZ1dHVyZS1wcm9vZiBkaXNhYmxpbmcgb2YgY2xpY2tzIG9uIGA8YT5gIGVsZW1lbnRzXG5hLmJ0bi5kaXNhYmxlZCxcbmZpZWxkc2V0W2Rpc2FibGVkXSBhLmJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5cbi8vXG4vLyBBbHRlcm5hdGUgYnV0dG9uc1xuLy9cblxuLmJ0bi1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1wcmltYXJ5LWNvbG9yLCAkYnRuLXByaW1hcnktYmcsICRidG4tcHJpbWFyeS1ib3JkZXIpO1xufVxuLmJ0bi1zZWNvbmRhcnkge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXNlY29uZGFyeS1jb2xvciwgJGJ0bi1zZWNvbmRhcnktYmcsICRidG4tc2Vjb25kYXJ5LWJvcmRlcik7XG59XG4uYnRuLWluZm8ge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLWluZm8tY29sb3IsICRidG4taW5mby1iZywgJGJ0bi1pbmZvLWJvcmRlcik7XG59XG4uYnRuLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXN1Y2Nlc3MtY29sb3IsICRidG4tc3VjY2Vzcy1iZywgJGJ0bi1zdWNjZXNzLWJvcmRlcik7XG59XG4uYnRuLXdhcm5pbmcge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXdhcm5pbmctY29sb3IsICRidG4td2FybmluZy1iZywgJGJ0bi13YXJuaW5nLWJvcmRlcik7XG59XG4uYnRuLWRhbmdlciB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tZGFuZ2VyLWNvbG9yLCAkYnRuLWRhbmdlci1iZywgJGJ0bi1kYW5nZXItYm9yZGVyKTtcbn1cblxuLy8gUmVtb3ZlIGFsbCBiYWNrZ3JvdW5kc1xuLmJ0bi1wcmltYXJ5LW91dGxpbmUge1xuICBAaW5jbHVkZSBidXR0b24tb3V0bGluZS12YXJpYW50KCRidG4tcHJpbWFyeS1iZyk7XG59XG4uYnRuLXNlY29uZGFyeS1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUtdmFyaWFudCgkYnRuLXNlY29uZGFyeS1ib3JkZXIpO1xufVxuLmJ0bi1pbmZvLW91dGxpbmUge1xuICBAaW5jbHVkZSBidXR0b24tb3V0bGluZS12YXJpYW50KCRidG4taW5mby1iZyk7XG59XG4uYnRuLXN1Y2Nlc3Mtb3V0bGluZSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1zdWNjZXNzLWJnKTtcbn1cbi5idG4td2FybmluZy1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUtdmFyaWFudCgkYnRuLXdhcm5pbmctYmcpO1xufVxuLmJ0bi1kYW5nZXItb3V0bGluZSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1kYW5nZXItYmcpO1xufVxuXG5cbi8vXG4vLyBMaW5rIGJ1dHRvbnNcbi8vXG5cbi8vIE1ha2UgYSBidXR0b24gbG9vayBhbmQgYmVoYXZlIGxpa2UgYSBsaW5rXG4uYnRuLWxpbmsge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogJGxpbmstY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgJixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG4gICYsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIEBpbmNsdWRlIGhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICBjb2xvcjogJGxpbmstaG92ZXItY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1ob3Zlci1kZWNvcmF0aW9uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gICY6ZGlzYWJsZWQge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkYnRuLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIEJ1dHRvbiBTaXplc1xuLy9cblxuLmJ0bi1sZyB7XG4gIC8vIGxpbmUtaGVpZ2h0OiBlbnN1cmUgZXZlbi1udW1iZXJlZCBoZWlnaHQgb2YgYnV0dG9uIG5leHQgdG8gbGFyZ2UgaW5wdXRcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXktbGcsICRidG4tcGFkZGluZy14LWxnLCAkZm9udC1zaXplLWxnLCAkbGluZS1oZWlnaHQtbGcsICRidG4tYm9yZGVyLXJhZGl1cy1sZyk7XG59XG4uYnRuLXNtIHtcbiAgLy8gbGluZS1oZWlnaHQ6IGVuc3VyZSBwcm9wZXIgaGVpZ2h0IG9mIGJ1dHRvbiBuZXh0IHRvIHNtYWxsIGlucHV0XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRidG4tcGFkZGluZy15LXNtLCAkYnRuLXBhZGRpbmcteC1zbSwgJGZvbnQtc2l6ZS1zbSwgJGxpbmUtaGVpZ2h0LXNtLCAkYnRuLWJvcmRlci1yYWRpdXMtc20pO1xufVxuXG5cbi8vXG4vLyBCbG9jayBidXR0b25cbi8vXG5cbi5idG4tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIFZlcnRpY2FsbHkgc3BhY2Ugb3V0IG11bHRpcGxlIGJsb2NrIGJ1dHRvbnNcbi5idG4tYmxvY2sgKyAuYnRuLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyBTcGVjaWZpY2l0eSBvdmVycmlkZXNcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgJi5idG4tYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIuZmFkZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG5cbiAgJi5pbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uY29sbGFwc2Uge1xuICBkaXNwbGF5OiBub25lO1xuXG4gICYuaW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC8vIHRyJi5pbiAgICB7IGRpc3BsYXk6IHRhYmxlLXJvdzsgfVxuICAvLyB0Ym9keSYuaW4geyBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7IH1cbn1cblxuLmNvbGxhcHNpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodDtcbn1cbiIsIi8vXG4vLyBCYXNlIHN0eWxlc1xuLy9cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAkY2FyZC1zcGFjZXIteTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtYmc7XG4gIGJvcmRlcjogJGNhcmQtYm9yZGVyLXdpZHRoIHNvbGlkICRjYXJkLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkY2FyZC1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmNhcmQtYmxvY2sge1xuICBwYWRkaW5nOiAkY2FyZC1zcGFjZXIteDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAkY2FyZC1zcGFjZXIteTtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAtKCRjYXJkLXNwYWNlci15IC8gMik7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jYXJkLXRleHQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi8vIC5jYXJkLWFjdGlvbnMge1xuLy8gICBwYWRkaW5nOiAkY2FyZC1zcGFjZXIteSAkY2FyZC1zcGFjZXIteDtcblxuLy8gICAuY2FyZC1saW5rICsgLmNhcmQtbGluayB7XG4vLyAgICAgbWFyZ2luLWxlZnQ6ICRjYXJkLXNwYWNlci14O1xuLy8gICB9XG4vLyB9XG5cbi5jYXJkLWxpbmsge1xuICBAaW5jbHVkZSBob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgKyAuY2FyZC1saW5rIHtcbiAgICBtYXJnaW4tbGVmdDogJGNhcmQtc3BhY2VyLXg7XG4gIH1cbn1cblxuQGlmICRlbmFibGUtcm91bmRlZCB7XG4gIC5jYXJkIHtcbiAgICA+IC5saXN0LWdyb3VwOmZpcnN0LWNoaWxkIHtcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkY2FyZC1ib3JkZXItcmFkaXVzICRjYXJkLWJvcmRlci1yYWRpdXMgMCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgID4gLmxpc3QtZ3JvdXA6bGFzdC1jaGlsZCB7XG4gICAgICAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgJGNhcmQtYm9yZGVyLXJhZGl1cyAkY2FyZC1ib3JkZXItcmFkaXVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vXG4vLyBPcHRpb25hbCB0ZXh0dWFsIGNhcHNcbi8vXG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6ICRjYXJkLXNwYWNlci15ICRjYXJkLXNwYWNlci14O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1jYXAtYmc7XG4gIGJvcmRlci1ib3R0b206ICRjYXJkLWJvcmRlci13aWR0aCBzb2xpZCAkY2FyZC1ib3JkZXItY29sb3I7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkY2FyZC1ib3JkZXItcmFkaXVzLWlubmVyICRjYXJkLWJvcmRlci1yYWRpdXMtaW5uZXIgMCAwKTtcbiAgfVxufVxuXG4uY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiAkY2FyZC1zcGFjZXIteSAkY2FyZC1zcGFjZXIteDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtY2FwLWJnO1xuICBib3JkZXItdG9wOiAkY2FyZC1ib3JkZXItd2lkdGggc29saWQgJGNhcmQtYm9yZGVyLWNvbG9yO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwIDAgJGNhcmQtYm9yZGVyLXJhZGl1cy1pbm5lciAkY2FyZC1ib3JkZXItcmFkaXVzLWlubmVyKTtcbiAgfVxufVxuXG5cbi8vXG4vLyBCYWNrZ3JvdW5kIHZhcmlhdGlvbnNcbi8vXG5cbi5jYXJkLXByaW1hcnkge1xuICBAaW5jbHVkZSBjYXJkLXZhcmlhbnQoJGJyYW5kLXByaW1hcnksICRicmFuZC1wcmltYXJ5KTtcbn1cbi5jYXJkLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBjYXJkLXZhcmlhbnQoJGJyYW5kLXN1Y2Nlc3MsICRicmFuZC1zdWNjZXNzKTtcbn1cbi5jYXJkLWluZm8ge1xuICBAaW5jbHVkZSBjYXJkLXZhcmlhbnQoJGJyYW5kLWluZm8sICRicmFuZC1pbmZvKTtcbn1cbi5jYXJkLXdhcm5pbmcge1xuICBAaW5jbHVkZSBjYXJkLXZhcmlhbnQoJGJyYW5kLXdhcm5pbmcsICRicmFuZC13YXJuaW5nKTtcbn1cbi5jYXJkLWRhbmdlciB7XG4gIEBpbmNsdWRlIGNhcmQtdmFyaWFudCgkYnJhbmQtZGFuZ2VyLCAkYnJhbmQtZGFuZ2VyKTtcbn1cblxuLy8gUmVtb3ZlIGFsbCBiYWNrZ3JvdW5kc1xuLmNhcmQtcHJpbWFyeS1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgY2FyZC1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1wcmltYXJ5LWJnKTtcbn1cbi5jYXJkLXNlY29uZGFyeS1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgY2FyZC1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1zZWNvbmRhcnktYm9yZGVyKTtcbn1cbi5jYXJkLWluZm8tb3V0bGluZSB7XG4gIEBpbmNsdWRlIGNhcmQtb3V0bGluZS12YXJpYW50KCRidG4taW5mby1iZyk7XG59XG4uY2FyZC1zdWNjZXNzLW91dGxpbmUge1xuICBAaW5jbHVkZSBjYXJkLW91dGxpbmUtdmFyaWFudCgkYnRuLXN1Y2Nlc3MtYmcpO1xufVxuLmNhcmQtd2FybmluZy1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgY2FyZC1vdXRsaW5lLXZhcmlhbnQoJGJ0bi13YXJuaW5nLWJnKTtcbn1cbi5jYXJkLWRhbmdlci1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgY2FyZC1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1kYW5nZXItYmcpO1xufVxuXG4vL1xuLy8gSW52ZXJzZSB0ZXh0IHdpdGhpbiBhIGNhcmQgZm9yIHVzZSB3aXRoIGRhcmsgYmFja2dyb3VuZHNcbi8vXG5cbi5jYXJkLWludmVyc2Uge1xuICBAaW5jbHVkZSBjYXJkLWludmVyc2U7XG59XG5cbi8vXG4vLyBCbG9ja3F1b3RlXG4vL1xuXG4uY2FyZC1ibG9ja3F1b3RlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi8vIENhcmQgaW1hZ2Vcbi5jYXJkLWltZyB7XG4gIC8vIG1hcmdpbjogLTEuMzI1cmVtO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKC4yNXJlbSk7XG59XG4uY2FyZC1pbWctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuXG5cblxuLy8gQ2FyZCBpbWFnZSBjYXBzXG4uY2FyZC1pbWctdG9wIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkY2FyZC1ib3JkZXItcmFkaXVzLWlubmVyICRjYXJkLWJvcmRlci1yYWRpdXMtaW5uZXIgMCAwKTtcbn1cbi5jYXJkLWltZy1ib3R0b20ge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDAgMCAkY2FyZC1ib3JkZXItcmFkaXVzLWlubmVyICRjYXJkLWJvcmRlci1yYWRpdXMtaW5uZXIpO1xufVxuXG5cbi8vXG4vLyBDYXJkIHNldFxuLy9cblxuQGlmICRlbmFibGUtZmxleCB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICAuY2FyZC1kZWNrIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtLjYyNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtLjYyNXJlbTtcblxuICAgICAgLmNhcmQge1xuICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNjI1cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogLjYyNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gQGVsc2Uge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgLmNhcmQtZGVjayB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICBib3JkZXItc3BhY2luZzogMS4yNXJlbSAwO1xuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHdpZHRoOiAxJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhcmQtZGVjay13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTEuMjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogLTEuMjVyZW07XG4gICAgfVxuICB9XG59XG5cbi8vXG4vLyBDYXJkIGdyb3Vwc1xuLy9cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAuY2FyZC1ncm91cCB7XG4gICAgQGlmICRlbmFibGUtZmxleCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICB9IEBlbHNlIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIEBpZiAkZW5hYmxlLWZsZXgge1xuICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgfVxuXG4gICAgICArIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgcm91bmRlZCBjb3JuZXJzXG4gICAgICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcblxuICAgICAgICAgIC5jYXJkLWltZy10b3Age1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLWltZy1ib3R0b20ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xuXG4gICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC1pbWctYm90dG9tIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgICAgICAgLmNhcmQtaW1nLXRvcCxcbiAgICAgICAgICAuY2FyZC1pbWctYm90dG9tIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIENhcmRcbi8vXG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgLmNhcmQtY29sdW1ucyB7XG4gICAgY29sdW1uLWNvdW50OiAzO1xuICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG5cbiAgICAuY2FyZCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTsgLy8gRG9uJ3QgbGV0IHRoZW0gZXhjZWVkIHRoZSBjb2x1bW4gd2lkdGhcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBQcm9ncmVzcyBhbmltYXRpb25zXG4vL1xuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkc3BhY2VyLXkgMDsgfVxuICB0byAgICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxufVxuXG5cbi8vXG4vLyBCYXNpYyBwcm9ncmVzcyBiYXJcbi8vXG5cbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkc3BhY2VyLXk7IC8vIHRvZG86IG1ha2UgYSBuZXcgdmFyIGZvciB0aGlzXG4gIG1hcmdpbi1ib3R0b206ICRzcGFjZXIteTtcbn1cbi5wcm9ncmVzc1t2YWx1ZV0ge1xuICAvLyBJRTEwIHVzZXMgYGNvbG9yYCB0byBzZXQgdGhlIGJhciBiYWNrZ3JvdW5kLWNvbG9yXG4gIGNvbG9yOiAjMDA3NGQ5O1xuICAvLyBSZW1vdmUgRmlyZWZveCBhbmQgT3BlcmEgYm9yZGVyXG4gIGJvcmRlcjogMDtcbiAgLy8gUmVzZXQgdGhlIGRlZmF1bHQgYXBwZWFyYW5jZVxuICBhcHBlYXJhbmNlOiBub25lO1xufVxuLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoMCwwLDAsLjEpKTtcbn1cbi5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIodmFsdWUpO1xufVxuLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cbi5wcm9ncmVzc1t2YWx1ZT1cIjEwMFwiXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xufVxuXG4vLyBGaXJlZm94IHN0eWxlcyBtdXN0IGJlIGVudGlyZWx5IHNlcGFyYXRlIG9yIGl0IGJ1c3RzIFdlYmtpdCBzdHlsZXMuXG4vL1xuLy8gQ29tbWVudGVkIG91dCBmb3Igbm93IGJlY2F1c2UgbGludGVyLlxuLy9cbi8vICQtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4vLyAgIC5wcm9ncmVzc1t2YWx1ZV0ge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4vLyAgICAgLmJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuLy8gICAgIC5ib3gtc2hhZG93KGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgwLDAsMCwuMSkpO1xuLy8gICB9XG4vLyAgIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGQ5O1xuLy8gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuLy8gICB9XG4vLyAgIC5wcm9ncmVzc1t2YWx1ZT1cIjBcIl06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbi8vICAgICBjb2xvcjogJGdyYXktbGlnaHQ7XG4vLyAgICAgbWluLXdpZHRoOiAycmVtO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4vLyAgIH1cbi8vICAgLnByb2dyZXNzW3ZhbHVlPVwiMTAwXCJdOjotbW96LXByb2dyZXNzLWJhciB7XG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbi8vICAgfVxuLy8gfVxuXG4vLyBJRTkgaGFja3MgdG8gYWNjb21wYW55IGN1c3RvbSBtYXJrdXAuIFdlIGRvbid0IG5lZWQgdG8gc2NvcGUgdGhpcyB2aWEgbWVkaWEgcXVlcmllcywgYnV0IEkgZmVlbCBiZXR0ZXIgZG9pbmcgaXQgYW55d2F5LlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowXFwwKSB7XG4gIC5wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgwLDAsMCwuMSkpO1xuICB9XG4gIC5wcm9ncmVzcy1iYXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6ICRzcGFjZXIteTtcbiAgICB0ZXh0LWluZGVudDogLTk5OXJlbTsgLy8gU2ltdWxhdGUgaGlkaW5nIG9mIHZhbHVlIGFzIGluIG5hdGl2ZSBgPHByb2dyZXNzPmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGQ5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG4gIC5wcm9ncmVzc1t3aWR0aF49XCIwXCJdIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgY29sb3I6ICRncmF5LWxpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cbiAgLnByb2dyZXNzW3dpZHRoPVwiMTAwJVwiXSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxufVxuXG5cbi8vXG4vLyBTdHJpcGVkXG4vL1xuXG4ucHJvZ3Jlc3Mtc3RyaXBlZFt2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBAaW5jbHVkZSBncmFkaWVudC1zdHJpcGVkKCk7XG4gIGJhY2tncm91bmQtc2l6ZTogJHNwYWNlci15ICRzcGFjZXIteTtcbn1cbi5wcm9ncmVzcy1zdHJpcGVkW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuICBAaW5jbHVkZSBncmFkaWVudC1zdHJpcGVkKCk7XG4gIGJhY2tncm91bmQtc2l6ZTogJHNwYWNlci15ICRzcGFjZXIteTtcbn1cbi8vIElFOVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowXFwwKSB7XG4gIC5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtc3RyaXBlZCgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJHNwYWNlci15ICRzcGFjZXIteTtcbiAgfVxufVxuXG5cbi8vXG4vLyBBbmltYXRlZFxuLy9cblxuLnByb2dyZXNzLWFuaW1hdGVkW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlO1xufVxuLnByb2dyZXNzLWFuaW1hdGVkW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuICBhbmltYXRpb246IHByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi8vIElFOVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowXFwwKSB7XG4gIC5wcm9ncmVzcy1hbmltYXRlZCAucHJvZ3Jlc3MtYmFyLXN0cmlwZWQge1xuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlO1xuICB9XG59XG5cblxuLy9cbi8vIFZhcmlhdGlvbnNcbi8vXG5cbi5wcm9ncmVzcy1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgcHJvZ3Jlc3MtdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmcpO1xufVxuLnByb2dyZXNzLWluZm8ge1xuICBAaW5jbHVkZSBwcm9ncmVzcy12YXJpYW50KCRwcm9ncmVzcy1iYXItaW5mby1iZyk7XG59XG4ucHJvZ3Jlc3Mtd2FybmluZyB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLXZhcmlhbnQoJHByb2dyZXNzLWJhci13YXJuaW5nLWJnKTtcbn1cbi5wcm9ncmVzcy1kYW5nZXIge1xuICBAaW5jbHVkZSBwcm9ncmVzcy12YXJpYW50KCRwcm9ncmVzcy1iYXItZGFuZ2VyLWJnKTtcbn1cbiIsIi8vIEJhc2UgY2xhc3Ncbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAkemluZGV4LXRvb2x0aXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBPdXIgcGFyZW50IGVsZW1lbnQgY2FuIGJlIGFyYml0cmFyeSBzaW5jZSB0b29sdGlwcyBhcmUgYnkgZGVmYXVsdCBpbnNlcnRlZCBhcyBhIHNpYmxpbmcgb2YgdGhlaXIgdGFyZ2V0IGVsZW1lbnQuXG4gIC8vIFNvIHJlc2V0IG91ciBmb250IGFuZCB0ZXh0IHByb3BlcnRpZXMgdG8gYXZvaWQgaW5oZXJpdGluZyB3ZWlyZCB2YWx1ZXMuXG4gIEBpbmNsdWRlIHJlc2V0LXRleHQoKTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBvcGFjaXR5OiAwO1xuXG4gICYuaW4geyBvcGFjaXR5OiAkdG9vbHRpcC1vcGFjaXR5OyB9XG5cbiAgJi50b29sdGlwLXRvcCxcbiAgJi5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1ib3R0b20ge1xuICAgIHBhZGRpbmc6ICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcblxuICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi50b29sdGlwLXJpZ2h0LFxuICAmLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWxlZnQge1xuICAgIHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcblxuICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gICAgfVxuICB9XG4gICYudG9vbHRpcC1ib3R0b20sXG4gICYuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtdG9wIHtcbiAgICBwYWRkaW5nOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi50b29sdGlwLWxlZnQsXG4gICYuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtcmlnaHQge1xuICAgIHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG5cbiAgICAudG9vbHRpcC1hcnJvdyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG4vLyBXcmFwcGVyIGZvciB0aGUgdG9vbHRpcCBjb250ZW50XG4udG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogJHRvb2x0aXAtbWF4LXdpZHRoO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBjb2xvcjogJHRvb2x0aXAtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvb2x0aXAtYmc7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xufVxuXG4vLyBBcnJvd3Ncbi50b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuIiwiLnBvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1wb3BvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAkcG9wb3Zlci1tYXgtd2lkdGg7XG4gIHBhZGRpbmc6IDFweDtcbiAgLy8gT3VyIHBhcmVudCBlbGVtZW50IGNhbiBiZSBhcmJpdHJhcnkgc2luY2UgdG9vbHRpcHMgYXJlIGJ5IGRlZmF1bHQgaW5zZXJ0ZWQgYXMgYSBzaWJsaW5nIG9mIHRoZWlyIHRhcmdldCBlbGVtZW50LlxuICAvLyBTbyByZXNldCBvdXIgZm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzIHRvIGF2b2lkIGluaGVyaXRpbmcgd2VpcmQgdmFsdWVzLlxuICBAaW5jbHVkZSByZXNldC10ZXh0KCk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcG92ZXItYmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogJHBvcG92ZXItYm9yZGVyLXdpZHRoIHNvbGlkICRwb3BvdmVyLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cy1sZyk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yKSk7XG5cblxuICAvLyBQb3BvdmVyIGRpcmVjdGlvbnNcblxuICAmLnBvcG92ZXItdG9wLFxuICAmLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWJvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuXG4gICAgLnBvcG92ZXItYXJyb3cge1xuICAgICAgYm90dG9tOiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHBvcG92ZXItYXJyb3ctY29sb3I7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5wb3BvdmVyLXJpZ2h0LFxuICAmLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAkcG9wb3Zlci1hcnJvdy13aWR0aDtcblxuICAgIC5wb3BvdmVyLWFycm93IHtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgICAgbWFyZ2luLXRvcDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3R0b206IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnBvcG92ZXItYm90dG9tLFxuICAmLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLXRvcCB7XG4gICAgbWFyZ2luLXRvcDogJHBvcG92ZXItYXJyb3ctd2lkdGg7XG5cbiAgICAucG9wb3Zlci1hcnJvdyB7XG4gICAgICB0b3A6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnBvcG92ZXItbGVmdCxcbiAgJi5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy13aWR0aDtcblxuICAgIC5wb3BvdmVyLWFycm93IHtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgcmlnaHQ6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICAgIG1hcmdpbi10b3A6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IDFweDtcbiAgICAgICAgYm90dG9tOiAtJHBvcG92ZXItYXJyb3ctd2lkdGg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIE9mZnNldCB0aGUgcG9wb3ZlciB0byBhY2NvdW50IGZvciB0aGUgcG9wb3ZlciBhcnJvd1xuLnBvcG92ZXItdGl0bGUge1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgbWFyZ2luOiAwOyAvLyByZXNldCBoZWFkaW5nIG1hcmdpblxuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcG92ZXItdGl0bGUtYmc7XG4gIGJvcmRlci1ib3R0b206ICRwb3BvdmVyLWJvcmRlci13aWR0aCBzb2xpZCBkYXJrZW4oJHBvcG92ZXItdGl0bGUtYmcsIDUlKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygoJGJvcmRlci1yYWRpdXMtbGcgLSAxKSAoJGJvcmRlci1yYWRpdXMtbGcgLSAxKSAwIDApO1xufVxuXG4ucG9wb3Zlci1jb250ZW50IHtcbiAgcGFkZGluZzogOXB4IDE0cHg7XG59XG5cblxuLy8gQXJyb3dzXG4vL1xuLy8gLnBvcG92ZXItYXJyb3cgaXMgb3V0ZXIsIC5wb3BvdmVyLWFycm93OjphZnRlciBpcyBpbm5lclxuXG4ucG9wb3Zlci1hcnJvdyB7XG4gICYsXG4gICY6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgfVxufVxuLnBvcG92ZXItYXJyb3cge1xuICBib3JkZXItd2lkdGg6ICRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xufVxuLnBvcG92ZXItYXJyb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXdpZHRoOiAkcG9wb3Zlci1hcnJvdy13aWR0aDtcbn1cbiIsIi8vXG4vLyBGbG9hdHNcbi8vXG5cbi5jbGVhcmZpeCB7XG4gIEBpbmNsdWRlIGNsZWFyZml4KCk7XG59XG5cbi5jZW50ZXItYmxvY2sge1xuICBAaW5jbHVkZSBjZW50ZXItYmxvY2soKTtcbn1cblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgIC5wdWxsLSN7JGJyZWFrcG9pbnR9LWxlZnQge1xuICAgICAgQGluY2x1ZGUgcHVsbC1sZWZ0KCk7XG4gICAgfVxuICAgIC5wdWxsLSN7JGJyZWFrcG9pbnR9LXJpZ2h0IHtcbiAgICAgIEBpbmNsdWRlIHB1bGwtcmlnaHQoKTtcbiAgICB9XG4gICAgLnB1bGwtI3skYnJlYWtwb2ludH0tbm9uZSB7XG4gICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vXG4vLyBTY3JlZW5yZWFkZXJzXG4vL1xuXG4uc3Itb25seSB7XG4gIEBpbmNsdWRlIHNyLW9ubHkoKTtcbn1cblxuLnNyLW9ubHktZm9jdXNhYmxlIHtcbiAgQGluY2x1ZGUgc3Itb25seS1mb2N1c2FibGUoKTtcbn1cblxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1oaWRlIHtcbiAgQGluY2x1ZGUgdGV4dC1oaWRlKCk7XG59XG5cblxuLy9cbi8vIFRleHRcbi8vXG5cbi8vIEFsaWdubWVudFxuXG4udGV4dC1qdXN0aWZ5ICAgICAgICB7IHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDsgfVxuLnRleHQtbm93cmFwICAgICAgICAgeyB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7IH1cbi50ZXh0LXRydW5jYXRlICAgICAgIHsgQGluY2x1ZGUgdGV4dC10cnVuY2F0ZTsgfVxuXG4vLyBSZXNwb25zaXZlIGFsaWdubWVudFxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgLnRleHQtI3skYnJlYWtwb2ludH0tbGVmdCAgIHsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50OyB9XG4gICAgLnRleHQtI3skYnJlYWtwb2ludH0tcmlnaHQgIHsgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgfVxuICAgIC50ZXh0LSN7JGJyZWFrcG9pbnR9LWNlbnRlciB7IHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIH1cbn1cblxuLy8gVHJhbnNmb3JtYXRpb25cblxuLnRleHQtbG93ZXJjYXNlICAgICAgeyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7IH1cbi50ZXh0LXVwcGVyY2FzZSAgICAgIHsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50OyB9XG4udGV4dC1jYXBpdGFsaXplICAgICB7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7IH1cblxuLy8gV2VpZ2h0IGFuZCBpdGFsaWNzXG5cbi5mb250LXdlaWdodC1ub3JtYWwgIHsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuLmZvbnQtd2VpZ2h0LWJvbGQgICAgeyBmb250LXdlaWdodDogYm9sZDsgfVxuLmZvbnQtaXRhbGljICAgICAgICAgeyBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuLy8gQ29udGV4dHVhbCBjb2xvcnNcblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogJHRleHQtbXV0ZWQ7XG59XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtcHJpbWFyeScsICRicmFuZC1wcmltYXJ5KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1zdWNjZXNzJywgJGJyYW5kLXN1Y2Nlc3MpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LWluZm8nLCAkYnJhbmQtaW5mbyk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtd2FybmluZycsICRicmFuZC13YXJuaW5nKTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1kYW5nZXInLCAkYnJhbmQtZGFuZ2VyKTtcbiIsIi8vXG4vLyBDb250ZXh0dWFsIGJhY2tncm91bmRzXG4vL1xuXG4vLyBJbnZlcnNlXG4vLyBUT0RPOiByZWRvIHRoaXMgYXMgYSBwcm9wZXIgY2xhc3Ncbi5iZy1pbnZlcnNlIHtcbiAgY29sb3I6ICRncmF5LWxpZ2h0ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWRhcms7XG59XG5cbi5iZy1mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0ZXN0O1xufVxuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctcHJpbWFyeScsICRicmFuZC1wcmltYXJ5KTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLXN1Y2Nlc3MnLCAkYnJhbmQtc3VjY2Vzcyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1pbmZvJywgJGJyYW5kLWluZm8pO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctd2FybmluZycsICRicmFuZC13YXJuaW5nKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLWRhbmdlcicsICRicmFuZC1kYW5nZXIpO1xuIiwiLy8gTWFyZ2luIGFuZCBQYWRkaW5nXG5cbi5tLXgtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogIGF1dG8gIWltcG9ydGFudDtcbn1cblxuQGVhY2ggJHByb3AsICRhYmJyZXYgaW4gKG1hcmdpbjogbSwgcGFkZGluZzogcCkge1xuICBAZWFjaCAkc2l6ZSwgJGxlbmd0aHMgaW4gJHNwYWNlcnMge1xuICAgICRsZW5ndGgteDogICBtYXAtZ2V0KCRsZW5ndGhzLCB4KTtcbiAgICAkbGVuZ3RoLXk6ICAgbWFwLWdldCgkbGVuZ3RocywgeSk7XG5cbiAgICAuI3skYWJicmV2fS1hLSN7JHNpemV9IHsgI3skcHJvcH06ICAgICAgICAkbGVuZ3RoLXkgJGxlbmd0aC14ICFpbXBvcnRhbnQ7IH0gLy8gYSA9IEFsbCBzaWRlc1xuICAgIC4jeyRhYmJyZXZ9LXQtI3skc2l6ZX0geyAjeyRwcm9wfS10b3A6ICAgICRsZW5ndGgteSAhaW1wb3J0YW50OyB9XG4gICAgLiN7JGFiYnJldn0tci0jeyRzaXplfSB7ICN7JHByb3B9LXJpZ2h0OiAgJGxlbmd0aC14ICFpbXBvcnRhbnQ7IH1cbiAgICAuI3skYWJicmV2fS1iLSN7JHNpemV9IHsgI3skcHJvcH0tYm90dG9tOiAkbGVuZ3RoLXkgIWltcG9ydGFudDsgfVxuICAgIC4jeyRhYmJyZXZ9LWwtI3skc2l6ZX0geyAjeyRwcm9wfS1sZWZ0OiAgICRsZW5ndGgteCAhaW1wb3J0YW50OyB9XG5cbiAgICAvLyBBeGVzXG4gICAgLiN7JGFiYnJldn0teC0jeyRzaXplfSB7XG4gICAgICAjeyRwcm9wfS1yaWdodDogICRsZW5ndGgteCAhaW1wb3J0YW50O1xuICAgICAgI3skcHJvcH0tbGVmdDogICAkbGVuZ3RoLXggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLiN7JGFiYnJldn0teS0jeyRzaXplfSB7XG4gICAgICAjeyRwcm9wfS10b3A6ICAgICRsZW5ndGgteSAhaW1wb3J0YW50O1xuICAgICAgI3skcHJvcH0tYm90dG9tOiAkbGVuZ3RoLXkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUG9zaXRpb25pbmdcblxuLnBvcy1mLXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtbmF2YmFyLWZpeGVkO1xufVxuIiwiLy9cbi8vIFJlc3BvbnNpdmUgdXRpbGl0aWVzXG4vL1xuXG5AZWFjaCAkYnAgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgLmhpZGRlbi0jeyRicH0tdXAge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJwKSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5oaWRkZW4tI3skYnB9LWRvd24ge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnApIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBQcmludCB1dGlsaXRpZXNcbi8vXG4vLyBNZWRpYSBxdWVyaWVzIGFyZSBwbGFjZWQgb24gdGhlIGluc2lkZSB0byBiZSBtaXhpbi1mcmllbmRseS5cblxuLnZpc2libGUtcHJpbnQtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtcHJpbnQtaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZGRlbi1wcmludCB7XG4gIEBtZWRpYSBwcmludCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIvKiFcbiAqICBGb250IEF3ZXNvbWUgNC41LjAgYnkgQGRhdmVnYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pbyAtIEBmb250YXdlc29tZVxuICogIExpY2Vuc2UgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8vbGljZW5zZSAoRm9udDogU0lMIE9GTCAxLjEsIENTUzogTUlUIExpY2Vuc2UpXG4gKi9cbkBpbXBvcnQgXCJmb250LXZhcmlhYmxlc1wiO1xuXG4kZmEtZm9udC1wYXRoOiAkaWNvbW9vbi1mb250LXBhdGg7XG5cbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL21peGluc1wiO1xuLy9AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL3BhdGhcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvY29yZVwiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9sYXJnZXJcIjtcbi8vQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9maXhlZC13aWR0aFwiO1xuLy9AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL2xpc3RcIjtcbi8vQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9ib3JkZXJlZC1wdWxsZWRcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3MvYW5pbWF0ZWRcIjtcbi8vQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9mb250LWF3ZXNvbWUvc2Nzcy9yb3RhdGVkLWZsaXBwZWRcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL3Njc3Mvc3RhY2tlZFwiO1xuLy9AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9zY3NzL2ljb25zXCI7XG5cbkBpbXBvcnQgXCJfbWl4aW5zXCI7XG5cbiRwYWNrYWdlZC1zdHJva2Utd2lkdGg6IDI7XG5cbiRiYWNrLXRlYTogIzY2NjtcbiRiYWNrLWluZnVzaW9uOiAjNjY2O1xuJGJhY2stY29jb2E6ICM4MjM5MDY7XG4kYmFjay1jb2ZmZWU6ICMwMDA7XG5cbiRiZXYtdmFyaWFudHM6IChcbiAgICAgICAgdGVhLXdoaXRlOiAoXG4gICAgICAgICAgICAgICAgYmFjay1jb2xvcjogJGJhY2stdGVhLFxuICAgICAgICAgICAgICAgIGZyb250LWNvbG9yOiAjZGRkLFxuICAgICAgICAgICAgICAgIGljb246ICRpY29uLWxlYWZcbiAgICAgICAgKSwgdGVhLWdyZWVuOiAoXG4gICAgICAgICAgICAgICAgYmFjay1jb2xvcjogJGJhY2stdGVhLFxuICAgICAgICAgICAgICAgIGZyb250LWNvbG9yOiAjN2Y3LFxuICAgICAgICAgICAgICAgIGljb246ICRpY29uLWxlYWZcbiAgICAgICAgKSwgdGVhLW9vbG9uZzogKFxuICAgICAgICAgICAgICAgIGJhY2stY29sb3I6ICRiYWNrLXRlYSxcbiAgICAgICAgICAgICAgICBmcm9udC1jb2xvcjogIzdiZCxcbiAgICAgICAgICAgICAgICBpY29uOiAkaWNvbi1sZWFmXG4gICAgICAgICksIHRlYS1ibGFjazogKFxuICAgICAgICAgICAgICAgIGJhY2stY29sb3I6ICRiYWNrLXRlYSxcbiAgICAgICAgICAgICAgICBmcm9udC1jb2xvcjogIzExMSxcbiAgICAgICAgICAgICAgICBpY29uOiAkaWNvbi1sZWFmXG4gICAgICAgICksIHJvb2lib3M6IChcbiAgICAgICAgICAgICAgICBiYWNrLWNvbG9yOiAkYmFjay10ZWEsXG4gICAgICAgICAgICAgICAgZnJvbnQtY29sb3I6ICNmNTUsXG4gICAgICAgICAgICAgICAgaWNvbjogJGljb24tbGVhZlxuICAgICAgICApLCBpbmZ1c2lvbjogKFxuICAgICAgICAgICAgICAgIGJhY2stY29sb3I6ICRiYWNrLWluZnVzaW9uLFxuICAgICAgICAgICAgICAgIGZyb250LWNvbG9yOiAjYmZiLFxuICAgICAgICAgICAgICAgIGljb246ICRpY29uLXBhZ2VsaW5lc1xuICAgICAgICApLCBjb2ZmZWU6IChcbiAgICAgICAgICAgICAgICBiYWNrLWNvbG9yOiAjMDAwLFxuICAgICAgICAgICAgICAgIGZyb250LWNvbG9yOiAjZGRkLFxuICAgICAgICAgICAgICAgIGljb246ICRpY29uLWN1cFxuICAgICAgICApLCBjb2NvYTogKFxuICAgICAgICAgICAgICAgIGJhY2stY29sb3I6ICM4MjM5MDYsXG4gICAgICAgICAgICAgICAgZnJvbnQtY29sb3I6ICNkZGQsXG4gICAgICAgICAgICAgICAgaWNvbjogJGljb24tY3VwXG4gICAgICAgIClcbik7XG5cbi8qIEJldmVyYWdlcyBpY29ucyAqL1xuQG1peGluIGJldi1pY29uLXZhcmlhbnQoJGJldi12YXJpYW50KSB7XG4gICYucGFja2FnZWQge1xuICAgIC5iZXYtaWNvbi1iYWNrIHtcbiAgICAgIEBpbmNsdWRlIHN0cm9rZSgkcGFja2FnZWQtc3Ryb2tlLXdpZHRoLCBtYXAtZ2V0KCRiZXYtdmFyaWFudCwgZnJvbnQtY29sb3IpKTtcbiAgICB9XG4gIH1cblxuICAuYmV2LWljb24tYmFjayB7XG4gICAgY29sb3I6IG1hcC1nZXQoJGJldi12YXJpYW50LCBiYWNrLWNvbG9yKTtcbiAgICBAaW5jbHVkZSBzdHJva2UoJHBhY2thZ2VkLXN0cm9rZS13aWR0aCwgbWFwLWdldCgkYmV2LXZhcmlhbnQsIGJhY2stY29sb3IpKTtcbiAgfVxuXG4gIC5iZXYtaWNvbi1mcm9udCB7XG4gICAgY29sb3I6IG1hcC1nZXQoJGJldi12YXJpYW50LCBmcm9udC1jb2xvcik7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBtYXAtZ2V0KCRiZXYtdmFyaWFudCwgaWNvbik7XG4gICAgfVxuICB9XG59XG5cbi5iZXYtaWNvbiB7XG4gIEBleHRlbmQgLmZhLXN0YWNrO1xuXG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcblxuICAuYmV2LWljb24tYmFjayB7XG4gICAgQGV4dGVuZCAuZmE7XG4gICAgQGV4dGVuZCAuZmEtc3RhY2stMng7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAkaWNvbi1zcXVhcmU7XG4gICAgfVxuICB9XG5cbiAgLmJldi1pY29uLWZyb250IHtcbiAgICBAZXh0ZW5kIC5mYTtcbiAgICBAZXh0ZW5kIC5mYS1zdGFjay0xeDtcbiAgfVxuXG4gIEBlYWNoICRiZXYtdmFyaWFudCwgJG5hbWUgaW4gJGJldi12YXJpYW50cyB7XG4gICAgJi4jeyRiZXYtdmFyaWFudH0ge1xuICAgICAgQGluY2x1ZGUgYmV2LWljb24tdmFyaWFudChtYXAtZ2V0KCRiZXYtdmFyaWFudHMsICN7JGJldi12YXJpYW50fSkpO1xuICAgIH1cbiAgfVxufVxuXG4vKiBPdGhlciBpY29ucyAqL1xuQG1peGluIGljb24oJGljb24tdmFyKSB7XG4gIEBleHRlbmQgLmZhO1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJGljb24tdmFyO1xuICB9XG59XG5cbi8qIE1vbWVudCBvZiBkYXkgKi9cbi5pY29uLW1vcm5pbmcge1xuICBAaW5jbHVkZSBpY29uKCRpY29uLWFsYXJtKTtcbn1cblxuLmljb24tZGF5dGltZSB7XG4gIEBpbmNsdWRlIGljb24oJGljb24tc3VuKTtcbn1cblxuLmljb24tZXZlbmluZyB7XG4gIEBpbmNsdWRlIGljb24oJGljb24tbW9vbik7XG59XG5cbi8qIE1pc2MuICovXG4uaWNvbi1ub3RlIHtcbiAgQGluY2x1ZGUgaWNvbigkaWNvbi1jb21tZW50aW5nKTtcbn1cblxuLmljb24tdGVtcCB7XG4gIEBpbmNsdWRlIGljb24oJGljb24tZmlyZSk7XG59XG5cbi5pY29uLXRpbWUge1xuICBAaW5jbHVkZSBpY29uKCRpY29uLWhvdXJnbGFzcyk7XG59XG5cbi8qIExvYWRpbmcgKi9cbi5pY29uLWxvYWRpbmcge1xuICBAaW5jbHVkZSBpY29uKCRpY29uLWNpcmNsZS1vLW5vdGNoKTtcbiAgQGV4dGVuZCAuZmEtbGc7XG4gIEBleHRlbmQgLmZhLXNwaW47XG59XG4iLCIkaWNvbW9vbi1mb250LXBhdGg6IFwiLi4vZm9udHNcIiAhZGVmYXVsdDtcblxuJGljb24tYWxhcm06IFwiXFxlODU1XCI7XG4kaWNvbi1tb29uOiBcIlxcZTNhN1wiO1xuJGljb24tc3VuOiBcIlxcZTFhZFwiO1xuJGljb24taG91cmdsYXNzOiBcIlxcZTg4Y1wiO1xuJGljb24tZmlyZTogXCJcXGU4MGVcIjtcbiRpY29uLWxlYWY6IFwiXFxmMDZjXCI7XG4kaWNvbi1zcXVhcmU6IFwiXFxmMGM4XCI7XG4kaWNvbi1jdXA6IFwiXFxmMGY0XCI7XG4kaWNvbi1wYWdlbGluZXM6IFwiXFxmMThjXCI7XG4kaWNvbi1jaXJjbGUtby1ub3RjaDogXCJcXGYxY2VcIjtcbiRpY29uLWNvbW1lbnRpbmc6IFwiXFxmMjdhXCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgc3JjOlxuICAgICAgICAgIHVybCgnI3skaWNvbW9vbi1mb250LXBhdGh9L2ljb21vb24udHRmP2gybnlhbScpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICAgICB1cmwoJyN7JGljb21vb24tZm9udC1wYXRofS9pY29tb29uLndvZmY/aDJueWFtJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICAgdXJsKCcjeyRpY29tb29uLWZvbnQtcGF0aH0vaWNvbW9vbi5zdmc/aDJueWFtI2ljb21vb24nKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4iLCIvLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiRmYS1mb250LXBhdGg6ICAgICAgICBcIi4uL2ZvbnRzXCIgIWRlZmF1bHQ7XG4kZmEtZm9udC1zaXplLWJhc2U6ICAgMTRweCAhZGVmYXVsdDtcbiRmYS1saW5lLWhlaWdodC1iYXNlOiAxICFkZWZhdWx0O1xuLy8kZmEtZm9udC1wYXRoOiAgICAgICAgXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9mb250c1wiICFkZWZhdWx0OyAvLyBmb3IgcmVmZXJlbmNpbmcgQm9vdHN0cmFwIENETiBmb250IGZpbGVzIGRpcmVjdGx5XG4kZmEtY3NzLXByZWZpeDogICAgICAgZmEgIWRlZmF1bHQ7XG4kZmEtdmVyc2lvbjogICAgICAgICAgXCI0LjYuMVwiICFkZWZhdWx0O1xuJGZhLWJvcmRlci1jb2xvcjogICAgICNlZWUgIWRlZmF1bHQ7XG4kZmEtaW52ZXJzZTogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRmYS1saS13aWR0aDogICAgICAgICAoMzBlbSAvIDE0KSAhZGVmYXVsdDtcblxuJGZhLXZhci01MDBweDogXCJcXGYyNmVcIjtcbiRmYS12YXItYWRqdXN0OiBcIlxcZjA0MlwiO1xuJGZhLXZhci1hZG46IFwiXFxmMTcwXCI7XG4kZmEtdmFyLWFsaWduLWNlbnRlcjogXCJcXGYwMzdcIjtcbiRmYS12YXItYWxpZ24tanVzdGlmeTogXCJcXGYwMzlcIjtcbiRmYS12YXItYWxpZ24tbGVmdDogXCJcXGYwMzZcIjtcbiRmYS12YXItYWxpZ24tcmlnaHQ6IFwiXFxmMDM4XCI7XG4kZmEtdmFyLWFtYXpvbjogXCJcXGYyNzBcIjtcbiRmYS12YXItYW1idWxhbmNlOiBcIlxcZjBmOVwiO1xuJGZhLXZhci1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzogXCJcXGYyYTNcIjtcbiRmYS12YXItYW5jaG9yOiBcIlxcZjEzZFwiO1xuJGZhLXZhci1hbmRyb2lkOiBcIlxcZjE3YlwiO1xuJGZhLXZhci1hbmdlbGxpc3Q6IFwiXFxmMjA5XCI7XG4kZmEtdmFyLWFuZ2xlLWRvdWJsZS1kb3duOiBcIlxcZjEwM1wiO1xuJGZhLXZhci1hbmdsZS1kb3VibGUtbGVmdDogXCJcXGYxMDBcIjtcbiRmYS12YXItYW5nbGUtZG91YmxlLXJpZ2h0OiBcIlxcZjEwMVwiO1xuJGZhLXZhci1hbmdsZS1kb3VibGUtdXA6IFwiXFxmMTAyXCI7XG4kZmEtdmFyLWFuZ2xlLWRvd246IFwiXFxmMTA3XCI7XG4kZmEtdmFyLWFuZ2xlLWxlZnQ6IFwiXFxmMTA0XCI7XG4kZmEtdmFyLWFuZ2xlLXJpZ2h0OiBcIlxcZjEwNVwiO1xuJGZhLXZhci1hbmdsZS11cDogXCJcXGYxMDZcIjtcbiRmYS12YXItYXBwbGU6IFwiXFxmMTc5XCI7XG4kZmEtdmFyLWFyY2hpdmU6IFwiXFxmMTg3XCI7XG4kZmEtdmFyLWFyZWEtY2hhcnQ6IFwiXFxmMWZlXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1kb3duOiBcIlxcZjBhYlwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtbGVmdDogXCJcXGYwYThcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLW8tZG93bjogXCJcXGYwMWFcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLW8tbGVmdDogXCJcXGYxOTBcIjtcbiRmYS12YXItYXJyb3ctY2lyY2xlLW8tcmlnaHQ6IFwiXFxmMThlXCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS1vLXVwOiBcIlxcZjAxYlwiO1xuJGZhLXZhci1hcnJvdy1jaXJjbGUtcmlnaHQ6IFwiXFxmMGE5XCI7XG4kZmEtdmFyLWFycm93LWNpcmNsZS11cDogXCJcXGYwYWFcIjtcbiRmYS12YXItYXJyb3ctZG93bjogXCJcXGYwNjNcIjtcbiRmYS12YXItYXJyb3ctbGVmdDogXCJcXGYwNjBcIjtcbiRmYS12YXItYXJyb3ctcmlnaHQ6IFwiXFxmMDYxXCI7XG4kZmEtdmFyLWFycm93LXVwOiBcIlxcZjA2MlwiO1xuJGZhLXZhci1hcnJvd3M6IFwiXFxmMDQ3XCI7XG4kZmEtdmFyLWFycm93cy1hbHQ6IFwiXFxmMGIyXCI7XG4kZmEtdmFyLWFycm93cy1oOiBcIlxcZjA3ZVwiO1xuJGZhLXZhci1hcnJvd3MtdjogXCJcXGYwN2RcIjtcbiRmYS12YXItYXNsLWludGVycHJldGluZzogXCJcXGYyYTNcIjtcbiRmYS12YXItYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOiBcIlxcZjJhMlwiO1xuJGZhLXZhci1hc3RlcmlzazogXCJcXGYwNjlcIjtcbiRmYS12YXItYXQ6IFwiXFxmMWZhXCI7XG4kZmEtdmFyLWF1ZGlvLWRlc2NyaXB0aW9uOiBcIlxcZjI5ZVwiO1xuJGZhLXZhci1hdXRvbW9iaWxlOiBcIlxcZjFiOVwiO1xuJGZhLXZhci1iYWNrd2FyZDogXCJcXGYwNGFcIjtcbiRmYS12YXItYmFsYW5jZS1zY2FsZTogXCJcXGYyNGVcIjtcbiRmYS12YXItYmFuOiBcIlxcZjA1ZVwiO1xuJGZhLXZhci1iYW5rOiBcIlxcZjE5Y1wiO1xuJGZhLXZhci1iYXItY2hhcnQ6IFwiXFxmMDgwXCI7XG4kZmEtdmFyLWJhci1jaGFydC1vOiBcIlxcZjA4MFwiO1xuJGZhLXZhci1iYXJjb2RlOiBcIlxcZjAyYVwiO1xuJGZhLXZhci1iYXJzOiBcIlxcZjBjOVwiO1xuJGZhLXZhci1iYXR0ZXJ5LTA6IFwiXFxmMjQ0XCI7XG4kZmEtdmFyLWJhdHRlcnktMTogXCJcXGYyNDNcIjtcbiRmYS12YXItYmF0dGVyeS0yOiBcIlxcZjI0MlwiO1xuJGZhLXZhci1iYXR0ZXJ5LTM6IFwiXFxmMjQxXCI7XG4kZmEtdmFyLWJhdHRlcnktNDogXCJcXGYyNDBcIjtcbiRmYS12YXItYmF0dGVyeS1lbXB0eTogXCJcXGYyNDRcIjtcbiRmYS12YXItYmF0dGVyeS1mdWxsOiBcIlxcZjI0MFwiO1xuJGZhLXZhci1iYXR0ZXJ5LWhhbGY6IFwiXFxmMjQyXCI7XG4kZmEtdmFyLWJhdHRlcnktcXVhcnRlcjogXCJcXGYyNDNcIjtcbiRmYS12YXItYmF0dGVyeS10aHJlZS1xdWFydGVyczogXCJcXGYyNDFcIjtcbiRmYS12YXItYmVkOiBcIlxcZjIzNlwiO1xuJGZhLXZhci1iZWVyOiBcIlxcZjBmY1wiO1xuJGZhLXZhci1iZWhhbmNlOiBcIlxcZjFiNFwiO1xuJGZhLXZhci1iZWhhbmNlLXNxdWFyZTogXCJcXGYxYjVcIjtcbiRmYS12YXItYmVsbDogXCJcXGYwZjNcIjtcbiRmYS12YXItYmVsbC1vOiBcIlxcZjBhMlwiO1xuJGZhLXZhci1iZWxsLXNsYXNoOiBcIlxcZjFmNlwiO1xuJGZhLXZhci1iZWxsLXNsYXNoLW86IFwiXFxmMWY3XCI7XG4kZmEtdmFyLWJpY3ljbGU6IFwiXFxmMjA2XCI7XG4kZmEtdmFyLWJpbm9jdWxhcnM6IFwiXFxmMWU1XCI7XG4kZmEtdmFyLWJpcnRoZGF5LWNha2U6IFwiXFxmMWZkXCI7XG4kZmEtdmFyLWJpdGJ1Y2tldDogXCJcXGYxNzFcIjtcbiRmYS12YXItYml0YnVja2V0LXNxdWFyZTogXCJcXGYxNzJcIjtcbiRmYS12YXItYml0Y29pbjogXCJcXGYxNWFcIjtcbiRmYS12YXItYmxhY2stdGllOiBcIlxcZjI3ZVwiO1xuJGZhLXZhci1ibGluZDogXCJcXGYyOWRcIjtcbiRmYS12YXItYmx1ZXRvb3RoOiBcIlxcZjI5M1wiO1xuJGZhLXZhci1ibHVldG9vdGgtYjogXCJcXGYyOTRcIjtcbiRmYS12YXItYm9sZDogXCJcXGYwMzJcIjtcbiRmYS12YXItYm9sdDogXCJcXGYwZTdcIjtcbiRmYS12YXItYm9tYjogXCJcXGYxZTJcIjtcbiRmYS12YXItYm9vazogXCJcXGYwMmRcIjtcbiRmYS12YXItYm9va21hcms6IFwiXFxmMDJlXCI7XG4kZmEtdmFyLWJvb2ttYXJrLW86IFwiXFxmMDk3XCI7XG4kZmEtdmFyLWJyYWlsbGU6IFwiXFxmMmExXCI7XG4kZmEtdmFyLWJyaWVmY2FzZTogXCJcXGYwYjFcIjtcbiRmYS12YXItYnRjOiBcIlxcZjE1YVwiO1xuJGZhLXZhci1idWc6IFwiXFxmMTg4XCI7XG4kZmEtdmFyLWJ1aWxkaW5nOiBcIlxcZjFhZFwiO1xuJGZhLXZhci1idWlsZGluZy1vOiBcIlxcZjBmN1wiO1xuJGZhLXZhci1idWxsaG9ybjogXCJcXGYwYTFcIjtcbiRmYS12YXItYnVsbHNleWU6IFwiXFxmMTQwXCI7XG4kZmEtdmFyLWJ1czogXCJcXGYyMDdcIjtcbiRmYS12YXItYnV5c2VsbGFkczogXCJcXGYyMGRcIjtcbiRmYS12YXItY2FiOiBcIlxcZjFiYVwiO1xuJGZhLXZhci1jYWxjdWxhdG9yOiBcIlxcZjFlY1wiO1xuJGZhLXZhci1jYWxlbmRhcjogXCJcXGYwNzNcIjtcbiRmYS12YXItY2FsZW5kYXItY2hlY2stbzogXCJcXGYyNzRcIjtcbiRmYS12YXItY2FsZW5kYXItbWludXMtbzogXCJcXGYyNzJcIjtcbiRmYS12YXItY2FsZW5kYXItbzogXCJcXGYxMzNcIjtcbiRmYS12YXItY2FsZW5kYXItcGx1cy1vOiBcIlxcZjI3MVwiO1xuJGZhLXZhci1jYWxlbmRhci10aW1lcy1vOiBcIlxcZjI3M1wiO1xuJGZhLXZhci1jYW1lcmE6IFwiXFxmMDMwXCI7XG4kZmEtdmFyLWNhbWVyYS1yZXRybzogXCJcXGYwODNcIjtcbiRmYS12YXItY2FyOiBcIlxcZjFiOVwiO1xuJGZhLXZhci1jYXJldC1kb3duOiBcIlxcZjBkN1wiO1xuJGZhLXZhci1jYXJldC1sZWZ0OiBcIlxcZjBkOVwiO1xuJGZhLXZhci1jYXJldC1yaWdodDogXCJcXGYwZGFcIjtcbiRmYS12YXItY2FyZXQtc3F1YXJlLW8tZG93bjogXCJcXGYxNTBcIjtcbiRmYS12YXItY2FyZXQtc3F1YXJlLW8tbGVmdDogXCJcXGYxOTFcIjtcbiRmYS12YXItY2FyZXQtc3F1YXJlLW8tcmlnaHQ6IFwiXFxmMTUyXCI7XG4kZmEtdmFyLWNhcmV0LXNxdWFyZS1vLXVwOiBcIlxcZjE1MVwiO1xuJGZhLXZhci1jYXJldC11cDogXCJcXGYwZDhcIjtcbiRmYS12YXItY2FydC1hcnJvdy1kb3duOiBcIlxcZjIxOFwiO1xuJGZhLXZhci1jYXJ0LXBsdXM6IFwiXFxmMjE3XCI7XG4kZmEtdmFyLWNjOiBcIlxcZjIwYVwiO1xuJGZhLXZhci1jYy1hbWV4OiBcIlxcZjFmM1wiO1xuJGZhLXZhci1jYy1kaW5lcnMtY2x1YjogXCJcXGYyNGNcIjtcbiRmYS12YXItY2MtZGlzY292ZXI6IFwiXFxmMWYyXCI7XG4kZmEtdmFyLWNjLWpjYjogXCJcXGYyNGJcIjtcbiRmYS12YXItY2MtbWFzdGVyY2FyZDogXCJcXGYxZjFcIjtcbiRmYS12YXItY2MtcGF5cGFsOiBcIlxcZjFmNFwiO1xuJGZhLXZhci1jYy1zdHJpcGU6IFwiXFxmMWY1XCI7XG4kZmEtdmFyLWNjLXZpc2E6IFwiXFxmMWYwXCI7XG4kZmEtdmFyLWNlcnRpZmljYXRlOiBcIlxcZjBhM1wiO1xuJGZhLXZhci1jaGFpbjogXCJcXGYwYzFcIjtcbiRmYS12YXItY2hhaW4tYnJva2VuOiBcIlxcZjEyN1wiO1xuJGZhLXZhci1jaGVjazogXCJcXGYwMGNcIjtcbiRmYS12YXItY2hlY2stY2lyY2xlOiBcIlxcZjA1OFwiO1xuJGZhLXZhci1jaGVjay1jaXJjbGUtbzogXCJcXGYwNWRcIjtcbiRmYS12YXItY2hlY2stc3F1YXJlOiBcIlxcZjE0YVwiO1xuJGZhLXZhci1jaGVjay1zcXVhcmUtbzogXCJcXGYwNDZcIjtcbiRmYS12YXItY2hldnJvbi1jaXJjbGUtZG93bjogXCJcXGYxM2FcIjtcbiRmYS12YXItY2hldnJvbi1jaXJjbGUtbGVmdDogXCJcXGYxMzdcIjtcbiRmYS12YXItY2hldnJvbi1jaXJjbGUtcmlnaHQ6IFwiXFxmMTM4XCI7XG4kZmEtdmFyLWNoZXZyb24tY2lyY2xlLXVwOiBcIlxcZjEzOVwiO1xuJGZhLXZhci1jaGV2cm9uLWRvd246IFwiXFxmMDc4XCI7XG4kZmEtdmFyLWNoZXZyb24tbGVmdDogXCJcXGYwNTNcIjtcbiRmYS12YXItY2hldnJvbi1yaWdodDogXCJcXGYwNTRcIjtcbiRmYS12YXItY2hldnJvbi11cDogXCJcXGYwNzdcIjtcbiRmYS12YXItY2hpbGQ6IFwiXFxmMWFlXCI7XG4kZmEtdmFyLWNocm9tZTogXCJcXGYyNjhcIjtcbiRmYS12YXItY2lyY2xlOiBcIlxcZjExMVwiO1xuJGZhLXZhci1jaXJjbGUtbzogXCJcXGYxMGNcIjtcbiRmYS12YXItY2lyY2xlLW8tbm90Y2g6IFwiXFxmMWNlXCI7XG4kZmEtdmFyLWNpcmNsZS10aGluOiBcIlxcZjFkYlwiO1xuJGZhLXZhci1jbGlwYm9hcmQ6IFwiXFxmMGVhXCI7XG4kZmEtdmFyLWNsb2NrLW86IFwiXFxmMDE3XCI7XG4kZmEtdmFyLWNsb25lOiBcIlxcZjI0ZFwiO1xuJGZhLXZhci1jbG9zZTogXCJcXGYwMGRcIjtcbiRmYS12YXItY2xvdWQ6IFwiXFxmMGMyXCI7XG4kZmEtdmFyLWNsb3VkLWRvd25sb2FkOiBcIlxcZjBlZFwiO1xuJGZhLXZhci1jbG91ZC11cGxvYWQ6IFwiXFxmMGVlXCI7XG4kZmEtdmFyLWNueTogXCJcXGYxNTdcIjtcbiRmYS12YXItY29kZTogXCJcXGYxMjFcIjtcbiRmYS12YXItY29kZS1mb3JrOiBcIlxcZjEyNlwiO1xuJGZhLXZhci1jb2RlcGVuOiBcIlxcZjFjYlwiO1xuJGZhLXZhci1jb2RpZXBpZTogXCJcXGYyODRcIjtcbiRmYS12YXItY29mZmVlOiBcIlxcZjBmNFwiO1xuJGZhLXZhci1jb2c6IFwiXFxmMDEzXCI7XG4kZmEtdmFyLWNvZ3M6IFwiXFxmMDg1XCI7XG4kZmEtdmFyLWNvbHVtbnM6IFwiXFxmMGRiXCI7XG4kZmEtdmFyLWNvbW1lbnQ6IFwiXFxmMDc1XCI7XG4kZmEtdmFyLWNvbW1lbnQtbzogXCJcXGYwZTVcIjtcbiRmYS12YXItY29tbWVudGluZzogXCJcXGYyN2FcIjtcbiRmYS12YXItY29tbWVudGluZy1vOiBcIlxcZjI3YlwiO1xuJGZhLXZhci1jb21tZW50czogXCJcXGYwODZcIjtcbiRmYS12YXItY29tbWVudHMtbzogXCJcXGYwZTZcIjtcbiRmYS12YXItY29tcGFzczogXCJcXGYxNGVcIjtcbiRmYS12YXItY29tcHJlc3M6IFwiXFxmMDY2XCI7XG4kZmEtdmFyLWNvbm5lY3RkZXZlbG9wOiBcIlxcZjIwZVwiO1xuJGZhLXZhci1jb250YW86IFwiXFxmMjZkXCI7XG4kZmEtdmFyLWNvcHk6IFwiXFxmMGM1XCI7XG4kZmEtdmFyLWNvcHlyaWdodDogXCJcXGYxZjlcIjtcbiRmYS12YXItY3JlYXRpdmUtY29tbW9uczogXCJcXGYyNWVcIjtcbiRmYS12YXItY3JlZGl0LWNhcmQ6IFwiXFxmMDlkXCI7XG4kZmEtdmFyLWNyZWRpdC1jYXJkLWFsdDogXCJcXGYyODNcIjtcbiRmYS12YXItY3JvcDogXCJcXGYxMjVcIjtcbiRmYS12YXItY3Jvc3NoYWlyczogXCJcXGYwNWJcIjtcbiRmYS12YXItY3NzMzogXCJcXGYxM2NcIjtcbiRmYS12YXItY3ViZTogXCJcXGYxYjJcIjtcbiRmYS12YXItY3ViZXM6IFwiXFxmMWIzXCI7XG4kZmEtdmFyLWN1dDogXCJcXGYwYzRcIjtcbiRmYS12YXItY3V0bGVyeTogXCJcXGYwZjVcIjtcbiRmYS12YXItZGFzaGJvYXJkOiBcIlxcZjBlNFwiO1xuJGZhLXZhci1kYXNoY3ViZTogXCJcXGYyMTBcIjtcbiRmYS12YXItZGF0YWJhc2U6IFwiXFxmMWMwXCI7XG4kZmEtdmFyLWRlYWY6IFwiXFxmMmE0XCI7XG4kZmEtdmFyLWRlYWZuZXNzOiBcIlxcZjJhNFwiO1xuJGZhLXZhci1kZWRlbnQ6IFwiXFxmMDNiXCI7XG4kZmEtdmFyLWRlbGljaW91czogXCJcXGYxYTVcIjtcbiRmYS12YXItZGVza3RvcDogXCJcXGYxMDhcIjtcbiRmYS12YXItZGV2aWFudGFydDogXCJcXGYxYmRcIjtcbiRmYS12YXItZGlhbW9uZDogXCJcXGYyMTlcIjtcbiRmYS12YXItZGlnZzogXCJcXGYxYTZcIjtcbiRmYS12YXItZG9sbGFyOiBcIlxcZjE1NVwiO1xuJGZhLXZhci1kb3QtY2lyY2xlLW86IFwiXFxmMTkyXCI7XG4kZmEtdmFyLWRvd25sb2FkOiBcIlxcZjAxOVwiO1xuJGZhLXZhci1kcmliYmJsZTogXCJcXGYxN2RcIjtcbiRmYS12YXItZHJvcGJveDogXCJcXGYxNmJcIjtcbiRmYS12YXItZHJ1cGFsOiBcIlxcZjFhOVwiO1xuJGZhLXZhci1lZGdlOiBcIlxcZjI4MlwiO1xuJGZhLXZhci1lZGl0OiBcIlxcZjA0NFwiO1xuJGZhLXZhci1lamVjdDogXCJcXGYwNTJcIjtcbiRmYS12YXItZWxsaXBzaXMtaDogXCJcXGYxNDFcIjtcbiRmYS12YXItZWxsaXBzaXMtdjogXCJcXGYxNDJcIjtcbiRmYS12YXItZW1waXJlOiBcIlxcZjFkMVwiO1xuJGZhLXZhci1lbnZlbG9wZTogXCJcXGYwZTBcIjtcbiRmYS12YXItZW52ZWxvcGUtbzogXCJcXGYwMDNcIjtcbiRmYS12YXItZW52ZWxvcGUtc3F1YXJlOiBcIlxcZjE5OVwiO1xuJGZhLXZhci1lbnZpcmE6IFwiXFxmMjk5XCI7XG4kZmEtdmFyLWVyYXNlcjogXCJcXGYxMmRcIjtcbiRmYS12YXItZXVyOiBcIlxcZjE1M1wiO1xuJGZhLXZhci1ldXJvOiBcIlxcZjE1M1wiO1xuJGZhLXZhci1leGNoYW5nZTogXCJcXGYwZWNcIjtcbiRmYS12YXItZXhjbGFtYXRpb246IFwiXFxmMTJhXCI7XG4kZmEtdmFyLWV4Y2xhbWF0aW9uLWNpcmNsZTogXCJcXGYwNmFcIjtcbiRmYS12YXItZXhjbGFtYXRpb24tdHJpYW5nbGU6IFwiXFxmMDcxXCI7XG4kZmEtdmFyLWV4cGFuZDogXCJcXGYwNjVcIjtcbiRmYS12YXItZXhwZWRpdGVkc3NsOiBcIlxcZjIzZVwiO1xuJGZhLXZhci1leHRlcm5hbC1saW5rOiBcIlxcZjA4ZVwiO1xuJGZhLXZhci1leHRlcm5hbC1saW5rLXNxdWFyZTogXCJcXGYxNGNcIjtcbiRmYS12YXItZXllOiBcIlxcZjA2ZVwiO1xuJGZhLXZhci1leWUtc2xhc2g6IFwiXFxmMDcwXCI7XG4kZmEtdmFyLWV5ZWRyb3BwZXI6IFwiXFxmMWZiXCI7XG4kZmEtdmFyLWZhY2Vib29rOiBcIlxcZjA5YVwiO1xuJGZhLXZhci1mYWNlYm9vay1mOiBcIlxcZjA5YVwiO1xuJGZhLXZhci1mYWNlYm9vay1vZmZpY2lhbDogXCJcXGYyMzBcIjtcbiRmYS12YXItZmFjZWJvb2stc3F1YXJlOiBcIlxcZjA4MlwiO1xuJGZhLXZhci1mYXN0LWJhY2t3YXJkOiBcIlxcZjA0OVwiO1xuJGZhLXZhci1mYXN0LWZvcndhcmQ6IFwiXFxmMDUwXCI7XG4kZmEtdmFyLWZheDogXCJcXGYxYWNcIjtcbiRmYS12YXItZmVlZDogXCJcXGYwOWVcIjtcbiRmYS12YXItZmVtYWxlOiBcIlxcZjE4MlwiO1xuJGZhLXZhci1maWdodGVyLWpldDogXCJcXGYwZmJcIjtcbiRmYS12YXItZmlsZTogXCJcXGYxNWJcIjtcbiRmYS12YXItZmlsZS1hcmNoaXZlLW86IFwiXFxmMWM2XCI7XG4kZmEtdmFyLWZpbGUtYXVkaW8tbzogXCJcXGYxYzdcIjtcbiRmYS12YXItZmlsZS1jb2RlLW86IFwiXFxmMWM5XCI7XG4kZmEtdmFyLWZpbGUtZXhjZWwtbzogXCJcXGYxYzNcIjtcbiRmYS12YXItZmlsZS1pbWFnZS1vOiBcIlxcZjFjNVwiO1xuJGZhLXZhci1maWxlLW1vdmllLW86IFwiXFxmMWM4XCI7XG4kZmEtdmFyLWZpbGUtbzogXCJcXGYwMTZcIjtcbiRmYS12YXItZmlsZS1wZGYtbzogXCJcXGYxYzFcIjtcbiRmYS12YXItZmlsZS1waG90by1vOiBcIlxcZjFjNVwiO1xuJGZhLXZhci1maWxlLXBpY3R1cmUtbzogXCJcXGYxYzVcIjtcbiRmYS12YXItZmlsZS1wb3dlcnBvaW50LW86IFwiXFxmMWM0XCI7XG4kZmEtdmFyLWZpbGUtc291bmQtbzogXCJcXGYxYzdcIjtcbiRmYS12YXItZmlsZS10ZXh0OiBcIlxcZjE1Y1wiO1xuJGZhLXZhci1maWxlLXRleHQtbzogXCJcXGYwZjZcIjtcbiRmYS12YXItZmlsZS12aWRlby1vOiBcIlxcZjFjOFwiO1xuJGZhLXZhci1maWxlLXdvcmQtbzogXCJcXGYxYzJcIjtcbiRmYS12YXItZmlsZS16aXAtbzogXCJcXGYxYzZcIjtcbiRmYS12YXItZmlsZXMtbzogXCJcXGYwYzVcIjtcbiRmYS12YXItZmlsbTogXCJcXGYwMDhcIjtcbiRmYS12YXItZmlsdGVyOiBcIlxcZjBiMFwiO1xuJGZhLXZhci1maXJlOiBcIlxcZjA2ZFwiO1xuJGZhLXZhci1maXJlLWV4dGluZ3Vpc2hlcjogXCJcXGYxMzRcIjtcbiRmYS12YXItZmlyZWZveDogXCJcXGYyNjlcIjtcbiRmYS12YXItZmxhZzogXCJcXGYwMjRcIjtcbiRmYS12YXItZmxhZy1jaGVja2VyZWQ6IFwiXFxmMTFlXCI7XG4kZmEtdmFyLWZsYWctbzogXCJcXGYxMWRcIjtcbiRmYS12YXItZmxhc2g6IFwiXFxmMGU3XCI7XG4kZmEtdmFyLWZsYXNrOiBcIlxcZjBjM1wiO1xuJGZhLXZhci1mbGlja3I6IFwiXFxmMTZlXCI7XG4kZmEtdmFyLWZsb3BweS1vOiBcIlxcZjBjN1wiO1xuJGZhLXZhci1mb2xkZXI6IFwiXFxmMDdiXCI7XG4kZmEtdmFyLWZvbGRlci1vOiBcIlxcZjExNFwiO1xuJGZhLXZhci1mb2xkZXItb3BlbjogXCJcXGYwN2NcIjtcbiRmYS12YXItZm9sZGVyLW9wZW4tbzogXCJcXGYxMTVcIjtcbiRmYS12YXItZm9udDogXCJcXGYwMzFcIjtcbiRmYS12YXItZm9udGljb25zOiBcIlxcZjI4MFwiO1xuJGZhLXZhci1mb3J0LWF3ZXNvbWU6IFwiXFxmMjg2XCI7XG4kZmEtdmFyLWZvcnVtYmVlOiBcIlxcZjIxMVwiO1xuJGZhLXZhci1mb3J3YXJkOiBcIlxcZjA0ZVwiO1xuJGZhLXZhci1mb3Vyc3F1YXJlOiBcIlxcZjE4MFwiO1xuJGZhLXZhci1mcm93bi1vOiBcIlxcZjExOVwiO1xuJGZhLXZhci1mdXRib2wtbzogXCJcXGYxZTNcIjtcbiRmYS12YXItZ2FtZXBhZDogXCJcXGYxMWJcIjtcbiRmYS12YXItZ2F2ZWw6IFwiXFxmMGUzXCI7XG4kZmEtdmFyLWdicDogXCJcXGYxNTRcIjtcbiRmYS12YXItZ2U6IFwiXFxmMWQxXCI7XG4kZmEtdmFyLWdlYXI6IFwiXFxmMDEzXCI7XG4kZmEtdmFyLWdlYXJzOiBcIlxcZjA4NVwiO1xuJGZhLXZhci1nZW5kZXJsZXNzOiBcIlxcZjIyZFwiO1xuJGZhLXZhci1nZXQtcG9ja2V0OiBcIlxcZjI2NVwiO1xuJGZhLXZhci1nZzogXCJcXGYyNjBcIjtcbiRmYS12YXItZ2ctY2lyY2xlOiBcIlxcZjI2MVwiO1xuJGZhLXZhci1naWZ0OiBcIlxcZjA2YlwiO1xuJGZhLXZhci1naXQ6IFwiXFxmMWQzXCI7XG4kZmEtdmFyLWdpdC1zcXVhcmU6IFwiXFxmMWQyXCI7XG4kZmEtdmFyLWdpdGh1YjogXCJcXGYwOWJcIjtcbiRmYS12YXItZ2l0aHViLWFsdDogXCJcXGYxMTNcIjtcbiRmYS12YXItZ2l0aHViLXNxdWFyZTogXCJcXGYwOTJcIjtcbiRmYS12YXItZ2l0bGFiOiBcIlxcZjI5NlwiO1xuJGZhLXZhci1naXR0aXA6IFwiXFxmMTg0XCI7XG4kZmEtdmFyLWdsYXNzOiBcIlxcZjAwMFwiO1xuJGZhLXZhci1nbGlkZTogXCJcXGYyYTVcIjtcbiRmYS12YXItZ2xpZGUtZzogXCJcXGYyYTZcIjtcbiRmYS12YXItZ2xvYmU6IFwiXFxmMGFjXCI7XG4kZmEtdmFyLWdvb2dsZTogXCJcXGYxYTBcIjtcbiRmYS12YXItZ29vZ2xlLXBsdXM6IFwiXFxmMGQ1XCI7XG4kZmEtdmFyLWdvb2dsZS1wbHVzLXNxdWFyZTogXCJcXGYwZDRcIjtcbiRmYS12YXItZ29vZ2xlLXdhbGxldDogXCJcXGYxZWVcIjtcbiRmYS12YXItZ3JhZHVhdGlvbi1jYXA6IFwiXFxmMTlkXCI7XG4kZmEtdmFyLWdyYXRpcGF5OiBcIlxcZjE4NFwiO1xuJGZhLXZhci1ncm91cDogXCJcXGYwYzBcIjtcbiRmYS12YXItaC1zcXVhcmU6IFwiXFxmMGZkXCI7XG4kZmEtdmFyLWhhY2tlci1uZXdzOiBcIlxcZjFkNFwiO1xuJGZhLXZhci1oYW5kLWdyYWItbzogXCJcXGYyNTVcIjtcbiRmYS12YXItaGFuZC1saXphcmQtbzogXCJcXGYyNThcIjtcbiRmYS12YXItaGFuZC1vLWRvd246IFwiXFxmMGE3XCI7XG4kZmEtdmFyLWhhbmQtby1sZWZ0OiBcIlxcZjBhNVwiO1xuJGZhLXZhci1oYW5kLW8tcmlnaHQ6IFwiXFxmMGE0XCI7XG4kZmEtdmFyLWhhbmQtby11cDogXCJcXGYwYTZcIjtcbiRmYS12YXItaGFuZC1wYXBlci1vOiBcIlxcZjI1NlwiO1xuJGZhLXZhci1oYW5kLXBlYWNlLW86IFwiXFxmMjViXCI7XG4kZmEtdmFyLWhhbmQtcG9pbnRlci1vOiBcIlxcZjI1YVwiO1xuJGZhLXZhci1oYW5kLXJvY2stbzogXCJcXGYyNTVcIjtcbiRmYS12YXItaGFuZC1zY2lzc29ycy1vOiBcIlxcZjI1N1wiO1xuJGZhLXZhci1oYW5kLXNwb2NrLW86IFwiXFxmMjU5XCI7XG4kZmEtdmFyLWhhbmQtc3RvcC1vOiBcIlxcZjI1NlwiO1xuJGZhLXZhci1oYXJkLW9mLWhlYXJpbmc6IFwiXFxmMmE0XCI7XG4kZmEtdmFyLWhhc2h0YWc6IFwiXFxmMjkyXCI7XG4kZmEtdmFyLWhkZC1vOiBcIlxcZjBhMFwiO1xuJGZhLXZhci1oZWFkZXI6IFwiXFxmMWRjXCI7XG4kZmEtdmFyLWhlYWRwaG9uZXM6IFwiXFxmMDI1XCI7XG4kZmEtdmFyLWhlYXJ0OiBcIlxcZjAwNFwiO1xuJGZhLXZhci1oZWFydC1vOiBcIlxcZjA4YVwiO1xuJGZhLXZhci1oZWFydGJlYXQ6IFwiXFxmMjFlXCI7XG4kZmEtdmFyLWhpc3Rvcnk6IFwiXFxmMWRhXCI7XG4kZmEtdmFyLWhvbWU6IFwiXFxmMDE1XCI7XG4kZmEtdmFyLWhvc3BpdGFsLW86IFwiXFxmMGY4XCI7XG4kZmEtdmFyLWhvdGVsOiBcIlxcZjIzNlwiO1xuJGZhLXZhci1ob3VyZ2xhc3M6IFwiXFxmMjU0XCI7XG4kZmEtdmFyLWhvdXJnbGFzcy0xOiBcIlxcZjI1MVwiO1xuJGZhLXZhci1ob3VyZ2xhc3MtMjogXCJcXGYyNTJcIjtcbiRmYS12YXItaG91cmdsYXNzLTM6IFwiXFxmMjUzXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy1lbmQ6IFwiXFxmMjUzXCI7XG4kZmEtdmFyLWhvdXJnbGFzcy1oYWxmOiBcIlxcZjI1MlwiO1xuJGZhLXZhci1ob3VyZ2xhc3MtbzogXCJcXGYyNTBcIjtcbiRmYS12YXItaG91cmdsYXNzLXN0YXJ0OiBcIlxcZjI1MVwiO1xuJGZhLXZhci1ob3V6ejogXCJcXGYyN2NcIjtcbiRmYS12YXItaHRtbDU6IFwiXFxmMTNiXCI7XG4kZmEtdmFyLWktY3Vyc29yOiBcIlxcZjI0NlwiO1xuJGZhLXZhci1pbHM6IFwiXFxmMjBiXCI7XG4kZmEtdmFyLWltYWdlOiBcIlxcZjAzZVwiO1xuJGZhLXZhci1pbmJveDogXCJcXGYwMWNcIjtcbiRmYS12YXItaW5kZW50OiBcIlxcZjAzY1wiO1xuJGZhLXZhci1pbmR1c3RyeTogXCJcXGYyNzVcIjtcbiRmYS12YXItaW5mbzogXCJcXGYxMjlcIjtcbiRmYS12YXItaW5mby1jaXJjbGU6IFwiXFxmMDVhXCI7XG4kZmEtdmFyLWlucjogXCJcXGYxNTZcIjtcbiRmYS12YXItaW5zdGFncmFtOiBcIlxcZjE2ZFwiO1xuJGZhLXZhci1pbnN0aXR1dGlvbjogXCJcXGYxOWNcIjtcbiRmYS12YXItaW50ZXJuZXQtZXhwbG9yZXI6IFwiXFxmMjZiXCI7XG4kZmEtdmFyLWludGVyc2V4OiBcIlxcZjIyNFwiO1xuJGZhLXZhci1pb3hob3N0OiBcIlxcZjIwOFwiO1xuJGZhLXZhci1pdGFsaWM6IFwiXFxmMDMzXCI7XG4kZmEtdmFyLWpvb21sYTogXCJcXGYxYWFcIjtcbiRmYS12YXItanB5OiBcIlxcZjE1N1wiO1xuJGZhLXZhci1qc2ZpZGRsZTogXCJcXGYxY2NcIjtcbiRmYS12YXIta2V5OiBcIlxcZjA4NFwiO1xuJGZhLXZhci1rZXlib2FyZC1vOiBcIlxcZjExY1wiO1xuJGZhLXZhci1rcnc6IFwiXFxmMTU5XCI7XG4kZmEtdmFyLWxhbmd1YWdlOiBcIlxcZjFhYlwiO1xuJGZhLXZhci1sYXB0b3A6IFwiXFxmMTA5XCI7XG4kZmEtdmFyLWxhc3RmbTogXCJcXGYyMDJcIjtcbiRmYS12YXItbGFzdGZtLXNxdWFyZTogXCJcXGYyMDNcIjtcbiRmYS12YXItbGVhZjogXCJcXGYwNmNcIjtcbiRmYS12YXItbGVhbnB1YjogXCJcXGYyMTJcIjtcbiRmYS12YXItbGVnYWw6IFwiXFxmMGUzXCI7XG4kZmEtdmFyLWxlbW9uLW86IFwiXFxmMDk0XCI7XG4kZmEtdmFyLWxldmVsLWRvd246IFwiXFxmMTQ5XCI7XG4kZmEtdmFyLWxldmVsLXVwOiBcIlxcZjE0OFwiO1xuJGZhLXZhci1saWZlLWJvdXk6IFwiXFxmMWNkXCI7XG4kZmEtdmFyLWxpZmUtYnVveTogXCJcXGYxY2RcIjtcbiRmYS12YXItbGlmZS1yaW5nOiBcIlxcZjFjZFwiO1xuJGZhLXZhci1saWZlLXNhdmVyOiBcIlxcZjFjZFwiO1xuJGZhLXZhci1saWdodGJ1bGItbzogXCJcXGYwZWJcIjtcbiRmYS12YXItbGluZS1jaGFydDogXCJcXGYyMDFcIjtcbiRmYS12YXItbGluazogXCJcXGYwYzFcIjtcbiRmYS12YXItbGlua2VkaW46IFwiXFxmMGUxXCI7XG4kZmEtdmFyLWxpbmtlZGluLXNxdWFyZTogXCJcXGYwOGNcIjtcbiRmYS12YXItbGludXg6IFwiXFxmMTdjXCI7XG4kZmEtdmFyLWxpc3Q6IFwiXFxmMDNhXCI7XG4kZmEtdmFyLWxpc3QtYWx0OiBcIlxcZjAyMlwiO1xuJGZhLXZhci1saXN0LW9sOiBcIlxcZjBjYlwiO1xuJGZhLXZhci1saXN0LXVsOiBcIlxcZjBjYVwiO1xuJGZhLXZhci1sb2NhdGlvbi1hcnJvdzogXCJcXGYxMjRcIjtcbiRmYS12YXItbG9jazogXCJcXGYwMjNcIjtcbiRmYS12YXItbG9uZy1hcnJvdy1kb3duOiBcIlxcZjE3NVwiO1xuJGZhLXZhci1sb25nLWFycm93LWxlZnQ6IFwiXFxmMTc3XCI7XG4kZmEtdmFyLWxvbmctYXJyb3ctcmlnaHQ6IFwiXFxmMTc4XCI7XG4kZmEtdmFyLWxvbmctYXJyb3ctdXA6IFwiXFxmMTc2XCI7XG4kZmEtdmFyLWxvdy12aXNpb246IFwiXFxmMmE4XCI7XG4kZmEtdmFyLW1hZ2ljOiBcIlxcZjBkMFwiO1xuJGZhLXZhci1tYWduZXQ6IFwiXFxmMDc2XCI7XG4kZmEtdmFyLW1haWwtZm9yd2FyZDogXCJcXGYwNjRcIjtcbiRmYS12YXItbWFpbC1yZXBseTogXCJcXGYxMTJcIjtcbiRmYS12YXItbWFpbC1yZXBseS1hbGw6IFwiXFxmMTIyXCI7XG4kZmEtdmFyLW1hbGU6IFwiXFxmMTgzXCI7XG4kZmEtdmFyLW1hcDogXCJcXGYyNzlcIjtcbiRmYS12YXItbWFwLW1hcmtlcjogXCJcXGYwNDFcIjtcbiRmYS12YXItbWFwLW86IFwiXFxmMjc4XCI7XG4kZmEtdmFyLW1hcC1waW46IFwiXFxmMjc2XCI7XG4kZmEtdmFyLW1hcC1zaWduczogXCJcXGYyNzdcIjtcbiRmYS12YXItbWFyczogXCJcXGYyMjJcIjtcbiRmYS12YXItbWFycy1kb3VibGU6IFwiXFxmMjI3XCI7XG4kZmEtdmFyLW1hcnMtc3Ryb2tlOiBcIlxcZjIyOVwiO1xuJGZhLXZhci1tYXJzLXN0cm9rZS1oOiBcIlxcZjIyYlwiO1xuJGZhLXZhci1tYXJzLXN0cm9rZS12OiBcIlxcZjIyYVwiO1xuJGZhLXZhci1tYXhjZG46IFwiXFxmMTM2XCI7XG4kZmEtdmFyLW1lYW5wYXRoOiBcIlxcZjIwY1wiO1xuJGZhLXZhci1tZWRpdW06IFwiXFxmMjNhXCI7XG4kZmEtdmFyLW1lZGtpdDogXCJcXGYwZmFcIjtcbiRmYS12YXItbWVoLW86IFwiXFxmMTFhXCI7XG4kZmEtdmFyLW1lcmN1cnk6IFwiXFxmMjIzXCI7XG4kZmEtdmFyLW1pY3JvcGhvbmU6IFwiXFxmMTMwXCI7XG4kZmEtdmFyLW1pY3JvcGhvbmUtc2xhc2g6IFwiXFxmMTMxXCI7XG4kZmEtdmFyLW1pbnVzOiBcIlxcZjA2OFwiO1xuJGZhLXZhci1taW51cy1jaXJjbGU6IFwiXFxmMDU2XCI7XG4kZmEtdmFyLW1pbnVzLXNxdWFyZTogXCJcXGYxNDZcIjtcbiRmYS12YXItbWludXMtc3F1YXJlLW86IFwiXFxmMTQ3XCI7XG4kZmEtdmFyLW1peGNsb3VkOiBcIlxcZjI4OVwiO1xuJGZhLXZhci1tb2JpbGU6IFwiXFxmMTBiXCI7XG4kZmEtdmFyLW1vYmlsZS1waG9uZTogXCJcXGYxMGJcIjtcbiRmYS12YXItbW9keDogXCJcXGYyODVcIjtcbiRmYS12YXItbW9uZXk6IFwiXFxmMGQ2XCI7XG4kZmEtdmFyLW1vb24tbzogXCJcXGYxODZcIjtcbiRmYS12YXItbW9ydGFyLWJvYXJkOiBcIlxcZjE5ZFwiO1xuJGZhLXZhci1tb3RvcmN5Y2xlOiBcIlxcZjIxY1wiO1xuJGZhLXZhci1tb3VzZS1wb2ludGVyOiBcIlxcZjI0NVwiO1xuJGZhLXZhci1tdXNpYzogXCJcXGYwMDFcIjtcbiRmYS12YXItbmF2aWNvbjogXCJcXGYwYzlcIjtcbiRmYS12YXItbmV1dGVyOiBcIlxcZjIyY1wiO1xuJGZhLXZhci1uZXdzcGFwZXItbzogXCJcXGYxZWFcIjtcbiRmYS12YXItb2JqZWN0LWdyb3VwOiBcIlxcZjI0N1wiO1xuJGZhLXZhci1vYmplY3QtdW5ncm91cDogXCJcXGYyNDhcIjtcbiRmYS12YXItb2Rub2tsYXNzbmlraTogXCJcXGYyNjNcIjtcbiRmYS12YXItb2Rub2tsYXNzbmlraS1zcXVhcmU6IFwiXFxmMjY0XCI7XG4kZmEtdmFyLW9wZW5jYXJ0OiBcIlxcZjIzZFwiO1xuJGZhLXZhci1vcGVuaWQ6IFwiXFxmMTliXCI7XG4kZmEtdmFyLW9wZXJhOiBcIlxcZjI2YVwiO1xuJGZhLXZhci1vcHRpbi1tb25zdGVyOiBcIlxcZjIzY1wiO1xuJGZhLXZhci1vdXRkZW50OiBcIlxcZjAzYlwiO1xuJGZhLXZhci1wYWdlbGluZXM6IFwiXFxmMThjXCI7XG4kZmEtdmFyLXBhaW50LWJydXNoOiBcIlxcZjFmY1wiO1xuJGZhLXZhci1wYXBlci1wbGFuZTogXCJcXGYxZDhcIjtcbiRmYS12YXItcGFwZXItcGxhbmUtbzogXCJcXGYxZDlcIjtcbiRmYS12YXItcGFwZXJjbGlwOiBcIlxcZjBjNlwiO1xuJGZhLXZhci1wYXJhZ3JhcGg6IFwiXFxmMWRkXCI7XG4kZmEtdmFyLXBhc3RlOiBcIlxcZjBlYVwiO1xuJGZhLXZhci1wYXVzZTogXCJcXGYwNGNcIjtcbiRmYS12YXItcGF1c2UtY2lyY2xlOiBcIlxcZjI4YlwiO1xuJGZhLXZhci1wYXVzZS1jaXJjbGUtbzogXCJcXGYyOGNcIjtcbiRmYS12YXItcGF3OiBcIlxcZjFiMFwiO1xuJGZhLXZhci1wYXlwYWw6IFwiXFxmMWVkXCI7XG4kZmEtdmFyLXBlbmNpbDogXCJcXGYwNDBcIjtcbiRmYS12YXItcGVuY2lsLXNxdWFyZTogXCJcXGYxNGJcIjtcbiRmYS12YXItcGVuY2lsLXNxdWFyZS1vOiBcIlxcZjA0NFwiO1xuJGZhLXZhci1wZXJjZW50OiBcIlxcZjI5NVwiO1xuJGZhLXZhci1waG9uZTogXCJcXGYwOTVcIjtcbiRmYS12YXItcGhvbmUtc3F1YXJlOiBcIlxcZjA5OFwiO1xuJGZhLXZhci1waG90bzogXCJcXGYwM2VcIjtcbiRmYS12YXItcGljdHVyZS1vOiBcIlxcZjAzZVwiO1xuJGZhLXZhci1waWUtY2hhcnQ6IFwiXFxmMjAwXCI7XG4kZmEtdmFyLXBpZWQtcGlwZXI6IFwiXFxmMWE3XCI7XG4kZmEtdmFyLXBpZWQtcGlwZXItYWx0OiBcIlxcZjFhOFwiO1xuJGZhLXZhci1waW50ZXJlc3Q6IFwiXFxmMGQyXCI7XG4kZmEtdmFyLXBpbnRlcmVzdC1wOiBcIlxcZjIzMVwiO1xuJGZhLXZhci1waW50ZXJlc3Qtc3F1YXJlOiBcIlxcZjBkM1wiO1xuJGZhLXZhci1wbGFuZTogXCJcXGYwNzJcIjtcbiRmYS12YXItcGxheTogXCJcXGYwNGJcIjtcbiRmYS12YXItcGxheS1jaXJjbGU6IFwiXFxmMTQ0XCI7XG4kZmEtdmFyLXBsYXktY2lyY2xlLW86IFwiXFxmMDFkXCI7XG4kZmEtdmFyLXBsdWc6IFwiXFxmMWU2XCI7XG4kZmEtdmFyLXBsdXM6IFwiXFxmMDY3XCI7XG4kZmEtdmFyLXBsdXMtY2lyY2xlOiBcIlxcZjA1NVwiO1xuJGZhLXZhci1wbHVzLXNxdWFyZTogXCJcXGYwZmVcIjtcbiRmYS12YXItcGx1cy1zcXVhcmUtbzogXCJcXGYxOTZcIjtcbiRmYS12YXItcG93ZXItb2ZmOiBcIlxcZjAxMVwiO1xuJGZhLXZhci1wcmludDogXCJcXGYwMmZcIjtcbiRmYS12YXItcHJvZHVjdC1odW50OiBcIlxcZjI4OFwiO1xuJGZhLXZhci1wdXp6bGUtcGllY2U6IFwiXFxmMTJlXCI7XG4kZmEtdmFyLXFxOiBcIlxcZjFkNlwiO1xuJGZhLXZhci1xcmNvZGU6IFwiXFxmMDI5XCI7XG4kZmEtdmFyLXF1ZXN0aW9uOiBcIlxcZjEyOFwiO1xuJGZhLXZhci1xdWVzdGlvbi1jaXJjbGU6IFwiXFxmMDU5XCI7XG4kZmEtdmFyLXF1ZXN0aW9uLWNpcmNsZS1vOiBcIlxcZjI5Y1wiO1xuJGZhLXZhci1xdW90ZS1sZWZ0OiBcIlxcZjEwZFwiO1xuJGZhLXZhci1xdW90ZS1yaWdodDogXCJcXGYxMGVcIjtcbiRmYS12YXItcmE6IFwiXFxmMWQwXCI7XG4kZmEtdmFyLXJhbmRvbTogXCJcXGYwNzRcIjtcbiRmYS12YXItcmViZWw6IFwiXFxmMWQwXCI7XG4kZmEtdmFyLXJlY3ljbGU6IFwiXFxmMWI4XCI7XG4kZmEtdmFyLXJlZGRpdDogXCJcXGYxYTFcIjtcbiRmYS12YXItcmVkZGl0LWFsaWVuOiBcIlxcZjI4MVwiO1xuJGZhLXZhci1yZWRkaXQtc3F1YXJlOiBcIlxcZjFhMlwiO1xuJGZhLXZhci1yZWZyZXNoOiBcIlxcZjAyMVwiO1xuJGZhLXZhci1yZWdpc3RlcmVkOiBcIlxcZjI1ZFwiO1xuJGZhLXZhci1yZW1vdmU6IFwiXFxmMDBkXCI7XG4kZmEtdmFyLXJlbnJlbjogXCJcXGYxOGJcIjtcbiRmYS12YXItcmVvcmRlcjogXCJcXGYwYzlcIjtcbiRmYS12YXItcmVwZWF0OiBcIlxcZjAxZVwiO1xuJGZhLXZhci1yZXBseTogXCJcXGYxMTJcIjtcbiRmYS12YXItcmVwbHktYWxsOiBcIlxcZjEyMlwiO1xuJGZhLXZhci1yZXR3ZWV0OiBcIlxcZjA3OVwiO1xuJGZhLXZhci1ybWI6IFwiXFxmMTU3XCI7XG4kZmEtdmFyLXJvYWQ6IFwiXFxmMDE4XCI7XG4kZmEtdmFyLXJvY2tldDogXCJcXGYxMzVcIjtcbiRmYS12YXItcm90YXRlLWxlZnQ6IFwiXFxmMGUyXCI7XG4kZmEtdmFyLXJvdGF0ZS1yaWdodDogXCJcXGYwMWVcIjtcbiRmYS12YXItcm91YmxlOiBcIlxcZjE1OFwiO1xuJGZhLXZhci1yc3M6IFwiXFxmMDllXCI7XG4kZmEtdmFyLXJzcy1zcXVhcmU6IFwiXFxmMTQzXCI7XG4kZmEtdmFyLXJ1YjogXCJcXGYxNThcIjtcbiRmYS12YXItcnVibGU6IFwiXFxmMTU4XCI7XG4kZmEtdmFyLXJ1cGVlOiBcIlxcZjE1NlwiO1xuJGZhLXZhci1zYWZhcmk6IFwiXFxmMjY3XCI7XG4kZmEtdmFyLXNhdmU6IFwiXFxmMGM3XCI7XG4kZmEtdmFyLXNjaXNzb3JzOiBcIlxcZjBjNFwiO1xuJGZhLXZhci1zY3JpYmQ6IFwiXFxmMjhhXCI7XG4kZmEtdmFyLXNlYXJjaDogXCJcXGYwMDJcIjtcbiRmYS12YXItc2VhcmNoLW1pbnVzOiBcIlxcZjAxMFwiO1xuJGZhLXZhci1zZWFyY2gtcGx1czogXCJcXGYwMGVcIjtcbiRmYS12YXItc2VsbHN5OiBcIlxcZjIxM1wiO1xuJGZhLXZhci1zZW5kOiBcIlxcZjFkOFwiO1xuJGZhLXZhci1zZW5kLW86IFwiXFxmMWQ5XCI7XG4kZmEtdmFyLXNlcnZlcjogXCJcXGYyMzNcIjtcbiRmYS12YXItc2hhcmU6IFwiXFxmMDY0XCI7XG4kZmEtdmFyLXNoYXJlLWFsdDogXCJcXGYxZTBcIjtcbiRmYS12YXItc2hhcmUtYWx0LXNxdWFyZTogXCJcXGYxZTFcIjtcbiRmYS12YXItc2hhcmUtc3F1YXJlOiBcIlxcZjE0ZFwiO1xuJGZhLXZhci1zaGFyZS1zcXVhcmUtbzogXCJcXGYwNDVcIjtcbiRmYS12YXItc2hla2VsOiBcIlxcZjIwYlwiO1xuJGZhLXZhci1zaGVxZWw6IFwiXFxmMjBiXCI7XG4kZmEtdmFyLXNoaWVsZDogXCJcXGYxMzJcIjtcbiRmYS12YXItc2hpcDogXCJcXGYyMWFcIjtcbiRmYS12YXItc2hpcnRzaW5idWxrOiBcIlxcZjIxNFwiO1xuJGZhLXZhci1zaG9wcGluZy1iYWc6IFwiXFxmMjkwXCI7XG4kZmEtdmFyLXNob3BwaW5nLWJhc2tldDogXCJcXGYyOTFcIjtcbiRmYS12YXItc2hvcHBpbmctY2FydDogXCJcXGYwN2FcIjtcbiRmYS12YXItc2lnbi1pbjogXCJcXGYwOTBcIjtcbiRmYS12YXItc2lnbi1sYW5ndWFnZTogXCJcXGYyYTdcIjtcbiRmYS12YXItc2lnbi1vdXQ6IFwiXFxmMDhiXCI7XG4kZmEtdmFyLXNpZ25hbDogXCJcXGYwMTJcIjtcbiRmYS12YXItc2lnbmluZzogXCJcXGYyYTdcIjtcbiRmYS12YXItc2ltcGx5YnVpbHQ6IFwiXFxmMjE1XCI7XG4kZmEtdmFyLXNpdGVtYXA6IFwiXFxmMGU4XCI7XG4kZmEtdmFyLXNreWF0bGFzOiBcIlxcZjIxNlwiO1xuJGZhLXZhci1za3lwZTogXCJcXGYxN2VcIjtcbiRmYS12YXItc2xhY2s6IFwiXFxmMTk4XCI7XG4kZmEtdmFyLXNsaWRlcnM6IFwiXFxmMWRlXCI7XG4kZmEtdmFyLXNsaWRlc2hhcmU6IFwiXFxmMWU3XCI7XG4kZmEtdmFyLXNtaWxlLW86IFwiXFxmMTE4XCI7XG4kZmEtdmFyLXNuYXBjaGF0OiBcIlxcZjJhYlwiO1xuJGZhLXZhci1zbmFwY2hhdC1naG9zdDogXCJcXGYyYWNcIjtcbiRmYS12YXItc25hcGNoYXQtc3F1YXJlOiBcIlxcZjJhZFwiO1xuJGZhLXZhci1zb2NjZXItYmFsbC1vOiBcIlxcZjFlM1wiO1xuJGZhLXZhci1zb3J0OiBcIlxcZjBkY1wiO1xuJGZhLXZhci1zb3J0LWFscGhhLWFzYzogXCJcXGYxNWRcIjtcbiRmYS12YXItc29ydC1hbHBoYS1kZXNjOiBcIlxcZjE1ZVwiO1xuJGZhLXZhci1zb3J0LWFtb3VudC1hc2M6IFwiXFxmMTYwXCI7XG4kZmEtdmFyLXNvcnQtYW1vdW50LWRlc2M6IFwiXFxmMTYxXCI7XG4kZmEtdmFyLXNvcnQtYXNjOiBcIlxcZjBkZVwiO1xuJGZhLXZhci1zb3J0LWRlc2M6IFwiXFxmMGRkXCI7XG4kZmEtdmFyLXNvcnQtZG93bjogXCJcXGYwZGRcIjtcbiRmYS12YXItc29ydC1udW1lcmljLWFzYzogXCJcXGYxNjJcIjtcbiRmYS12YXItc29ydC1udW1lcmljLWRlc2M6IFwiXFxmMTYzXCI7XG4kZmEtdmFyLXNvcnQtdXA6IFwiXFxmMGRlXCI7XG4kZmEtdmFyLXNvdW5kY2xvdWQ6IFwiXFxmMWJlXCI7XG4kZmEtdmFyLXNwYWNlLXNodXR0bGU6IFwiXFxmMTk3XCI7XG4kZmEtdmFyLXNwaW5uZXI6IFwiXFxmMTEwXCI7XG4kZmEtdmFyLXNwb29uOiBcIlxcZjFiMVwiO1xuJGZhLXZhci1zcG90aWZ5OiBcIlxcZjFiY1wiO1xuJGZhLXZhci1zcXVhcmU6IFwiXFxmMGM4XCI7XG4kZmEtdmFyLXNxdWFyZS1vOiBcIlxcZjA5NlwiO1xuJGZhLXZhci1zdGFjay1leGNoYW5nZTogXCJcXGYxOGRcIjtcbiRmYS12YXItc3RhY2stb3ZlcmZsb3c6IFwiXFxmMTZjXCI7XG4kZmEtdmFyLXN0YXI6IFwiXFxmMDA1XCI7XG4kZmEtdmFyLXN0YXItaGFsZjogXCJcXGYwODlcIjtcbiRmYS12YXItc3Rhci1oYWxmLWVtcHR5OiBcIlxcZjEyM1wiO1xuJGZhLXZhci1zdGFyLWhhbGYtZnVsbDogXCJcXGYxMjNcIjtcbiRmYS12YXItc3Rhci1oYWxmLW86IFwiXFxmMTIzXCI7XG4kZmEtdmFyLXN0YXItbzogXCJcXGYwMDZcIjtcbiRmYS12YXItc3RlYW06IFwiXFxmMWI2XCI7XG4kZmEtdmFyLXN0ZWFtLXNxdWFyZTogXCJcXGYxYjdcIjtcbiRmYS12YXItc3RlcC1iYWNrd2FyZDogXCJcXGYwNDhcIjtcbiRmYS12YXItc3RlcC1mb3J3YXJkOiBcIlxcZjA1MVwiO1xuJGZhLXZhci1zdGV0aG9zY29wZTogXCJcXGYwZjFcIjtcbiRmYS12YXItc3RpY2t5LW5vdGU6IFwiXFxmMjQ5XCI7XG4kZmEtdmFyLXN0aWNreS1ub3RlLW86IFwiXFxmMjRhXCI7XG4kZmEtdmFyLXN0b3A6IFwiXFxmMDRkXCI7XG4kZmEtdmFyLXN0b3AtY2lyY2xlOiBcIlxcZjI4ZFwiO1xuJGZhLXZhci1zdG9wLWNpcmNsZS1vOiBcIlxcZjI4ZVwiO1xuJGZhLXZhci1zdHJlZXQtdmlldzogXCJcXGYyMWRcIjtcbiRmYS12YXItc3RyaWtldGhyb3VnaDogXCJcXGYwY2NcIjtcbiRmYS12YXItc3R1bWJsZXVwb246IFwiXFxmMWE0XCI7XG4kZmEtdmFyLXN0dW1ibGV1cG9uLWNpcmNsZTogXCJcXGYxYTNcIjtcbiRmYS12YXItc3Vic2NyaXB0OiBcIlxcZjEyY1wiO1xuJGZhLXZhci1zdWJ3YXk6IFwiXFxmMjM5XCI7XG4kZmEtdmFyLXN1aXRjYXNlOiBcIlxcZjBmMlwiO1xuJGZhLXZhci1zdW4tbzogXCJcXGYxODVcIjtcbiRmYS12YXItc3VwZXJzY3JpcHQ6IFwiXFxmMTJiXCI7XG4kZmEtdmFyLXN1cHBvcnQ6IFwiXFxmMWNkXCI7XG4kZmEtdmFyLXRhYmxlOiBcIlxcZjBjZVwiO1xuJGZhLXZhci10YWJsZXQ6IFwiXFxmMTBhXCI7XG4kZmEtdmFyLXRhY2hvbWV0ZXI6IFwiXFxmMGU0XCI7XG4kZmEtdmFyLXRhZzogXCJcXGYwMmJcIjtcbiRmYS12YXItdGFnczogXCJcXGYwMmNcIjtcbiRmYS12YXItdGFza3M6IFwiXFxmMGFlXCI7XG4kZmEtdmFyLXRheGk6IFwiXFxmMWJhXCI7XG4kZmEtdmFyLXRlbGV2aXNpb246IFwiXFxmMjZjXCI7XG4kZmEtdmFyLXRlbmNlbnQtd2VpYm86IFwiXFxmMWQ1XCI7XG4kZmEtdmFyLXRlcm1pbmFsOiBcIlxcZjEyMFwiO1xuJGZhLXZhci10ZXh0LWhlaWdodDogXCJcXGYwMzRcIjtcbiRmYS12YXItdGV4dC13aWR0aDogXCJcXGYwMzVcIjtcbiRmYS12YXItdGg6IFwiXFxmMDBhXCI7XG4kZmEtdmFyLXRoLWxhcmdlOiBcIlxcZjAwOVwiO1xuJGZhLXZhci10aC1saXN0OiBcIlxcZjAwYlwiO1xuJGZhLXZhci10aHVtYi10YWNrOiBcIlxcZjA4ZFwiO1xuJGZhLXZhci10aHVtYnMtZG93bjogXCJcXGYxNjVcIjtcbiRmYS12YXItdGh1bWJzLW8tZG93bjogXCJcXGYwODhcIjtcbiRmYS12YXItdGh1bWJzLW8tdXA6IFwiXFxmMDg3XCI7XG4kZmEtdmFyLXRodW1icy11cDogXCJcXGYxNjRcIjtcbiRmYS12YXItdGlja2V0OiBcIlxcZjE0NVwiO1xuJGZhLXZhci10aW1lczogXCJcXGYwMGRcIjtcbiRmYS12YXItdGltZXMtY2lyY2xlOiBcIlxcZjA1N1wiO1xuJGZhLXZhci10aW1lcy1jaXJjbGUtbzogXCJcXGYwNWNcIjtcbiRmYS12YXItdGludDogXCJcXGYwNDNcIjtcbiRmYS12YXItdG9nZ2xlLWRvd246IFwiXFxmMTUwXCI7XG4kZmEtdmFyLXRvZ2dsZS1sZWZ0OiBcIlxcZjE5MVwiO1xuJGZhLXZhci10b2dnbGUtb2ZmOiBcIlxcZjIwNFwiO1xuJGZhLXZhci10b2dnbGUtb246IFwiXFxmMjA1XCI7XG4kZmEtdmFyLXRvZ2dsZS1yaWdodDogXCJcXGYxNTJcIjtcbiRmYS12YXItdG9nZ2xlLXVwOiBcIlxcZjE1MVwiO1xuJGZhLXZhci10cmFkZW1hcms6IFwiXFxmMjVjXCI7XG4kZmEtdmFyLXRyYWluOiBcIlxcZjIzOFwiO1xuJGZhLXZhci10cmFuc2dlbmRlcjogXCJcXGYyMjRcIjtcbiRmYS12YXItdHJhbnNnZW5kZXItYWx0OiBcIlxcZjIyNVwiO1xuJGZhLXZhci10cmFzaDogXCJcXGYxZjhcIjtcbiRmYS12YXItdHJhc2gtbzogXCJcXGYwMTRcIjtcbiRmYS12YXItdHJlZTogXCJcXGYxYmJcIjtcbiRmYS12YXItdHJlbGxvOiBcIlxcZjE4MVwiO1xuJGZhLXZhci10cmlwYWR2aXNvcjogXCJcXGYyNjJcIjtcbiRmYS12YXItdHJvcGh5OiBcIlxcZjA5MVwiO1xuJGZhLXZhci10cnVjazogXCJcXGYwZDFcIjtcbiRmYS12YXItdHJ5OiBcIlxcZjE5NVwiO1xuJGZhLXZhci10dHk6IFwiXFxmMWU0XCI7XG4kZmEtdmFyLXR1bWJscjogXCJcXGYxNzNcIjtcbiRmYS12YXItdHVtYmxyLXNxdWFyZTogXCJcXGYxNzRcIjtcbiRmYS12YXItdHVya2lzaC1saXJhOiBcIlxcZjE5NVwiO1xuJGZhLXZhci10djogXCJcXGYyNmNcIjtcbiRmYS12YXItdHdpdGNoOiBcIlxcZjFlOFwiO1xuJGZhLXZhci10d2l0dGVyOiBcIlxcZjA5OVwiO1xuJGZhLXZhci10d2l0dGVyLXNxdWFyZTogXCJcXGYwODFcIjtcbiRmYS12YXItdW1icmVsbGE6IFwiXFxmMGU5XCI7XG4kZmEtdmFyLXVuZGVybGluZTogXCJcXGYwY2RcIjtcbiRmYS12YXItdW5kbzogXCJcXGYwZTJcIjtcbiRmYS12YXItdW5pdmVyc2FsLWFjY2VzczogXCJcXGYyOWFcIjtcbiRmYS12YXItdW5pdmVyc2l0eTogXCJcXGYxOWNcIjtcbiRmYS12YXItdW5saW5rOiBcIlxcZjEyN1wiO1xuJGZhLXZhci11bmxvY2s6IFwiXFxmMDljXCI7XG4kZmEtdmFyLXVubG9jay1hbHQ6IFwiXFxmMTNlXCI7XG4kZmEtdmFyLXVuc29ydGVkOiBcIlxcZjBkY1wiO1xuJGZhLXZhci11cGxvYWQ6IFwiXFxmMDkzXCI7XG4kZmEtdmFyLXVzYjogXCJcXGYyODdcIjtcbiRmYS12YXItdXNkOiBcIlxcZjE1NVwiO1xuJGZhLXZhci11c2VyOiBcIlxcZjAwN1wiO1xuJGZhLXZhci11c2VyLW1kOiBcIlxcZjBmMFwiO1xuJGZhLXZhci11c2VyLXBsdXM6IFwiXFxmMjM0XCI7XG4kZmEtdmFyLXVzZXItc2VjcmV0OiBcIlxcZjIxYlwiO1xuJGZhLXZhci11c2VyLXRpbWVzOiBcIlxcZjIzNVwiO1xuJGZhLXZhci11c2VyczogXCJcXGYwYzBcIjtcbiRmYS12YXItdmVudXM6IFwiXFxmMjIxXCI7XG4kZmEtdmFyLXZlbnVzLWRvdWJsZTogXCJcXGYyMjZcIjtcbiRmYS12YXItdmVudXMtbWFyczogXCJcXGYyMjhcIjtcbiRmYS12YXItdmlhY29pbjogXCJcXGYyMzdcIjtcbiRmYS12YXItdmlhZGVvOiBcIlxcZjJhOVwiO1xuJGZhLXZhci12aWFkZW8tc3F1YXJlOiBcIlxcZjJhYVwiO1xuJGZhLXZhci12aWRlby1jYW1lcmE6IFwiXFxmMDNkXCI7XG4kZmEtdmFyLXZpbWVvOiBcIlxcZjI3ZFwiO1xuJGZhLXZhci12aW1lby1zcXVhcmU6IFwiXFxmMTk0XCI7XG4kZmEtdmFyLXZpbmU6IFwiXFxmMWNhXCI7XG4kZmEtdmFyLXZrOiBcIlxcZjE4OVwiO1xuJGZhLXZhci12b2x1bWUtY29udHJvbC1waG9uZTogXCJcXGYyYTBcIjtcbiRmYS12YXItdm9sdW1lLWRvd246IFwiXFxmMDI3XCI7XG4kZmEtdmFyLXZvbHVtZS1vZmY6IFwiXFxmMDI2XCI7XG4kZmEtdmFyLXZvbHVtZS11cDogXCJcXGYwMjhcIjtcbiRmYS12YXItd2FybmluZzogXCJcXGYwNzFcIjtcbiRmYS12YXItd2VjaGF0OiBcIlxcZjFkN1wiO1xuJGZhLXZhci13ZWlibzogXCJcXGYxOGFcIjtcbiRmYS12YXItd2VpeGluOiBcIlxcZjFkN1wiO1xuJGZhLXZhci13aGF0c2FwcDogXCJcXGYyMzJcIjtcbiRmYS12YXItd2hlZWxjaGFpcjogXCJcXGYxOTNcIjtcbiRmYS12YXItd2hlZWxjaGFpci1hbHQ6IFwiXFxmMjliXCI7XG4kZmEtdmFyLXdpZmk6IFwiXFxmMWViXCI7XG4kZmEtdmFyLXdpa2lwZWRpYS13OiBcIlxcZjI2NlwiO1xuJGZhLXZhci13aW5kb3dzOiBcIlxcZjE3YVwiO1xuJGZhLXZhci13b246IFwiXFxmMTU5XCI7XG4kZmEtdmFyLXdvcmRwcmVzczogXCJcXGYxOWFcIjtcbiRmYS12YXItd3BiZWdpbm5lcjogXCJcXGYyOTdcIjtcbiRmYS12YXItd3Bmb3JtczogXCJcXGYyOThcIjtcbiRmYS12YXItd3JlbmNoOiBcIlxcZjBhZFwiO1xuJGZhLXZhci14aW5nOiBcIlxcZjE2OFwiO1xuJGZhLXZhci14aW5nLXNxdWFyZTogXCJcXGYxNjlcIjtcbiRmYS12YXIteS1jb21iaW5hdG9yOiBcIlxcZjIzYlwiO1xuJGZhLXZhci15LWNvbWJpbmF0b3Itc3F1YXJlOiBcIlxcZjFkNFwiO1xuJGZhLXZhci15YWhvbzogXCJcXGYxOWVcIjtcbiRmYS12YXIteWM6IFwiXFxmMjNiXCI7XG4kZmEtdmFyLXljLXNxdWFyZTogXCJcXGYxZDRcIjtcbiRmYS12YXIteWVscDogXCJcXGYxZTlcIjtcbiRmYS12YXIteWVuOiBcIlxcZjE1N1wiO1xuJGZhLXZhci15b3V0dWJlOiBcIlxcZjE2N1wiO1xuJGZhLXZhci15b3V0dWJlLXBsYXk6IFwiXFxmMTZhXCI7XG4kZmEtdmFyLXlvdXR1YmUtc3F1YXJlOiBcIlxcZjE2NlwiO1xuXG4iLCIvLyBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmYS1pY29uKCkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsICN7JGZhLWZvbnQtc2l6ZS1iYXNlfS8jeyRmYS1saW5lLWhlaWdodC1iYXNlfSBGb250QXdlc29tZTsgLy8gc2hvcnRlbmluZyBmb250IGRlY2xhcmF0aW9uXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDsgLy8gY2FuJ3QgaGF2ZSBmb250LXNpemUgaW5oZXJpdCBvbiBsaW5lIGFib3ZlLCBzbyBuZWVkIHRvIG92ZXJyaWRlXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvOyAvLyBvcHRpbWl6ZWxlZ2liaWxpdHkgdGhyb3dzIHRoaW5ncyBvZmYgIzEwOTRcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbn1cblxuQG1peGluIGZhLWljb24tcm90YXRlKCRkZWdyZWVzLCAkcm90YXRpb24pIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0jeyRyb3RhdGlvbn0pXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5cbkBtaXhpbiBmYS1pY29uLWZsaXAoJGhvcml6LCAkdmVydCwgJHJvdGF0aW9uKSB7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249I3skcm90YXRpb259LCBtaXJyb3I9MSlcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRob3JpeiwgJHZlcnQpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJGhvcml6LCAkdmVydCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkaG9yaXosICR2ZXJ0KTtcbn1cblxuXG4vLyBPbmx5IGRpc3BsYXkgY29udGVudCB0byBzY3JlZW4gcmVhZGVycy4gQSBsYSBCb290c3RyYXAgNC5cbi8vXG4vLyBTZWU6IGh0dHA6Ly9hMTF5cHJvamVjdC5jb20vcG9zdHMvaG93LXRvLWhpZGUtY29udGVudC9cblxuQG1peGluIHNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gIGJvcmRlcjogMDtcbn1cblxuLy8gVXNlIGluIGNvbmp1bmN0aW9uIHdpdGggLnNyLW9ubHkgdG8gb25seSBkaXNwbGF5IGNvbnRlbnQgd2hlbiBpdCdzIGZvY3VzZWQuXG4vL1xuLy8gVXNlZnVsIGZvciBcIlNraXAgdG8gbWFpbiBjb250ZW50XCIgbGlua3M7IHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDEzL05PVEUtV0NBRzIwLVRFQ0hTLTIwMTMwOTA1L0cxXG4vL1xuLy8gQ3JlZGl0OiBIVE1MNSBCb2lsZXJwbGF0ZVxuXG5AbWl4aW4gc3Itb25seS1mb2N1c2FibGUge1xuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGNsaXA6IGF1dG87XG4gIH1cbn1cbiIsIi8vIEJhc2UgQ2xhc3MgRGVmaW5pdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uI3skZmEtY3NzLXByZWZpeH0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsICN7JGZhLWZvbnQtc2l6ZS1iYXNlfS8jeyRmYS1saW5lLWhlaWdodC1iYXNlfSBGb250QXdlc29tZTsgLy8gc2hvcnRlbmluZyBmb250IGRlY2xhcmF0aW9uXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDsgLy8gY2FuJ3QgaGF2ZSBmb250LXNpemUgaW5oZXJpdCBvbiBsaW5lIGFib3ZlLCBzbyBuZWVkIHRvIG92ZXJyaWRlXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvOyAvLyBvcHRpbWl6ZWxlZ2liaWxpdHkgdGhyb3dzIHRoaW5ncyBvZmYgIzEwOTRcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbn1cbiIsIi8vIEljb24gU2l6ZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyogbWFrZXMgdGhlIGZvbnQgMzMlIGxhcmdlciByZWxhdGl2ZSB0byB0aGUgaWNvbiBjb250YWluZXIgKi9cbi4jeyRmYS1jc3MtcHJlZml4fS1sZyB7XG4gIGZvbnQtc2l6ZTogKDRlbSAvIDMpO1xuICBsaW5lLWhlaWdodDogKDNlbSAvIDQpO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTtcbn1cbi4jeyRmYS1jc3MtcHJlZml4fS0yeCB7IGZvbnQtc2l6ZTogMmVtOyB9XG4uI3skZmEtY3NzLXByZWZpeH0tM3ggeyBmb250LXNpemU6IDNlbTsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LTR4IHsgZm9udC1zaXplOiA0ZW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS01eCB7IGZvbnQtc2l6ZTogNWVtOyB9XG4iLCIvLyBTcGlubmluZyBJY29uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXNwaW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXB1bHNlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cbiIsIi8vIFN0YWNrZWQgSWNvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLTF4LCAuI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMngge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uI3skZmEtY3NzLXByZWZpeH0tc3RhY2stMXggeyBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxuLiN7JGZhLWNzcy1wcmVmaXh9LXN0YWNrLTJ4IHsgZm9udC1zaXplOiAyZW07IH1cbi4jeyRmYS1jc3MtcHJlZml4fS1pbnZlcnNlIHsgY29sb3I6ICRmYS1pbnZlcnNlOyB9XG4iLCIvKiBDcmVhdGUgYSB0ZXh0IGJvcmRlciAoZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84NzEyNDQyLzE3MzQxMTkpICovXG4vLy8gU3Ryb2tlIGZvbnQtY2hhcmFjdGVyXG4vLy8gQHBhcmFtICB7SW50ZWdlcn0gJHN0cm9rZSAtIFN0cm9rZSB3aWR0aFxuLy8vIEBwYXJhbSAge0NvbG9yfSAgICRjb2xvciAgLSBTdHJva2UgY29sb3Jcbi8vLyBAcmV0dXJuIHtMaXN0fSAgICAgICAgICAgIC0gdGV4dC1zaGFkb3cgbGlzdFxuQGZ1bmN0aW9uIHN0cm9rZSgkc3Ryb2tlLCAkY29sb3IpIHtcbiAgJHNoYWRvdzogKCk7XG4gICRmcm9tOiAkc3Ryb2tlKi0xO1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkc3Ryb2tlIHtcbiAgICBAZm9yICRqIGZyb20gJGZyb20gdGhyb3VnaCAkc3Ryb2tlIHtcbiAgICAgICRzaGFkb3c6IGFwcGVuZCgkc2hhZG93LCAkaSoxcHggJGoqMXB4IDAgJGNvbG9yLCBjb21tYSk7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJHNoYWRvdztcbn1cbi8vLyBTdHJva2UgZm9udC1jaGFyYWN0ZXJcbi8vLyBAcGFyYW0gIHtJbnRlZ2VyfSAkc3Ryb2tlIC0gU3Ryb2tlIHdpZHRoXG4vLy8gQHBhcmFtICB7Q29sb3J9ICAgJGNvbG9yICAtIFN0cm9rZSBjb2xvclxuLy8vIEByZXR1cm4ge1N0eWxlfSAgICAgICAgICAgLSB0ZXh0LXNoYWRvd1xuQG1peGluIHN0cm9rZSgkc3Ryb2tlLCAkY29sb3IpIHtcbiAgdGV4dC1zaGFkb3c6IHN0cm9rZSgkc3Ryb2tlLCAkY29sb3IpO1xufVxuIl0sIm1hcHBpbmdzIjoiO0FDQUE7Ozs7R0FJRztBa0NKSCw0RUFBNEU7QUFRNUUsSUFBSSxDQUFDO0VBQ0gsV0FBVyxFQUFFLFVBQVc7RUFDeEIsb0JBQW9CLEVBQUUsSUFBSztFQUMzQix3QkFBd0IsRUFBRSxJQUFLLEdBQ2hDOztBQU1ELElBQUksQ0FBQztFQUNILE1BQU0sRUFBRSxDQUFFLEdBQ1g7O0FBWUQsT0FBTztBQUNQLEtBQUs7QUFDTCxPQUFPO0FBQ1AsVUFBVTtBQUNWLE1BQU07QUFDTixNQUFNO0FBQ04sTUFBTTtBQUNOLE1BQU07QUFDTixJQUFJO0FBQ0osSUFBSTtBQUNKLEdBQUc7QUFDSCxPQUFPO0FBQ1AsT0FBTyxDQUFDO0VBQ04sT0FBTyxFQUFFLEtBQU0sR0FDaEI7O0FBT0QsS0FBSztBQUNMLE1BQU07QUFDTixRQUFRO0FBQ1IsS0FBSyxDQUFDO0VBQ0osT0FBTyxFQUFFLFlBQWE7RUFDdEIsY0FBYyxFQUFFLFFBQVMsR0FDMUI7O0FBT0QsS0FBSyxBQUFBLElBQUssRUFBQSxBQUFBLFFBQUMsQUFBQSxHQUFXO0VBQ3BCLE9BQU8sRUFBRSxJQUFLO0VBQ2QsTUFBTSxFQUFFLENBQUUsR0FDWDs7Q0FPRCxBQUFBLE1BQUMsQUFBQTtBQUNELFFBQVEsQ0FBQztFQUNQLE9BQU8sRUFBRSxJQUFLLEdBQ2Y7O0FBU0QsQ0FBQyxDQUFDO0VBQ0EsZ0JBQWdCLEVBQUUsV0FBWSxHQUMvQjs7QUFPRCxDQUFDLEFBQ0UsT0FBTyxD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RVF2QkYsSUFBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSdUJqQixJQUFJLEVRdkJGLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUnVCakIsSUFBSSxFUXZCRixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1J1QmpCLElBQUksRVF2QkYsSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSdUJqQixJQUFJLEVRdkJGLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUnVCakIsSUFBSSxFUXZCRixJQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1J1QmpCLElBQUksRVF2QkYsSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSdUJqQixJQUFJLEVRdkJGLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUnVCakIsSUFBSSxFUXZCRixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1J1QmpCLElBQUksRVF2QkYsR0FBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSdUJqQixJQUFJLEVRdkJGLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUnVCakIsSUFBSSxFUXZCRixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1J1QmpCLElBQUksRVF2QkYsR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSdUJqQixJQUFJLEVRdkJGLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUnVCakIsSUFBSSxFUXZCRixHQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1J1QmpCLElBQUksRVF2QkYsR0FBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSdUJqQixJQUFJLEVRdkJGLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUnVCakIsSUFBSSxFUXZCRixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1J1QmpCLElBQUksRVF2QkYsR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSdUJqQixJQUFJLEVRdkJGLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUnVCakIsSUFBSSxFUXZCRixHQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1J1QmpCLElB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ZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFF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LENBQUMsQ1JtQ2pCLElBQUksRVFuQ0YsSUFBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSbUNqQixJQUFJLEVRbkNGLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUm1DakIsSUFBSSxFUW5DRixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JtQ2pCLElBQUksRVFuQ0YsSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSbUNqQixJQUFJLEVRbkNGLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUm1DakIsSUFBSSxFUW5DRixJQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1JtQ2pCLElBQUksRVFuQ0YsSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSbUNqQixJQUFJLEVRbkNGLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUm1DakIsSUFBSSxFUW5DRixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JtQ2pCLElBQUksRVFuQ0YsR0FBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSbUNqQixJQUFJLEVRbkNGLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUm1DakIsSUFBSSxFUW5DRixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JtQ2pCLElBQUksRVFuQ0YsR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSbUNqQixJQUFJLEVRbkNGLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUm1DakIsSUFBSSxFUW5DRixHQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1JtQ2pCLElBQUksRVFuQ0YsR0FBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSbUNqQixJQUFJLEVRbkNGLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUm1DakIsSUFBSSxFUW5DRixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JtQ2pCLElBQUksRVFuQ0YsR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSbUNqQixJQUFJLEVRbkNGLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUm1DakIsSUFBSSxFUW5DRixHQUFFLENBQUssSUFBRSxD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Q0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVRZmdCLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmVuQyxJQUFJLEVR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QUFjLENBQUM7SVFqRGpCLFdBQVcsRUFWa0IsSUFBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSK0NqQixJQUFJLEVRL0NGLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUitDakIsSUFBSSxFUS9DRixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1IrQ2pCLElBQUksRVEvQ0YsSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSK0NqQixJQUFJLEVRL0NGLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUitDakIsSUFBSSxFUS9DRixJQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1IrQ2pCLElBQUksRVEvQ0YsSUFBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSK0NqQixJQUFJLEVRL0NGLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUitDakIsSUFBSSxFUS9DRixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1IrQ2pCLElBQUksRVEvQ0YsSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSK0NqQixJQUFJLEVRL0NGLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUitDakIsSUFBSSxFUS9DRixHQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1IrQ2pCLElBQUksRVEvQ0YsR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSK0NqQixJQUFJLEVRL0NGLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUitDakIsSUFBSSxFUS9DRixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1IrQ2pCLElBQUksRVEvQ0YsR0FBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSK0NqQixJQUFJLEVRL0NGLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUitDakIsSUFBSSxFUS9DRixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1IrQ2pCLElBQUksRVEvQ0YsR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSK0NqQixJQUFJLEVRL0NGLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUitDakIsSUFBSSxFUS9DRixHQUFFLENBQUssSUFB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QyxXQUFXLEVBVmtCLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmtEbEIsT0FBTyxFUWxESixJQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1JrRGxCLE9BQU8sRVFsREosSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSa0RsQixPQUFPLEVRbERKLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmtEbEIsT0FBTyxFUWxESixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JrRGxCLE9BQU8sRVFsREosSUFBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSa0RsQixPQUFPLEVRbERKLElBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmtEbEIsT0FBTyxFUWxESixJQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JrRGxCLE9BQU8sRVFsREosSUFBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSa0RsQixPQUFPLEVRbERKLElBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmtEbEIsT0FBTyxFUWxESixHQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1JrRGxCLE9BQU8sRVFsREosR0FBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENSa0RsQixPQUFPLEVRbERKLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmtEbEIsT0FBTyxFUWxESixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JrRGxCLE9BQU8sRVFsREosR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSa0RsQixPQUFPLEVRbERKLEdBQUUsQ0FBSyxJQUFFLENBQUssQ0FBQyxDUmtEbEIsT0FBTyxFUWxESixHQUFFLENBQUssSUFBRSxDQUFLLENBQUMsQ1JrRGxCLE9BQU8sRVFsREosR0FBRSxDQUFLLEdBQUUsQ0FBSyxDQUFDLENSa0RsQixPQUFPLEVRbERKLEdBQUUsQ0FBSyxHQUFFLENBQUssQ0FBQyxDUmtEbEIsT0FBTyxFUWxESixHQUFFLENBQUssR0FBRSxDQUFLLENBQUMsQ1JrRGxCLE9BQU8sRVFsREosR0FBRSxDQUFLLElBQUUsQ0FBSyxDQUFDLENS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 */", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "149f081f1aaa94c2cadb9309d7c2dab0.ttf";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7f00c6ed423bac2c93591b014fba7082.svg";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);