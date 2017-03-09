(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define(["vuex"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vuex")) : factory(root["vuex"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_100__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_copyObject.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 23),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 24);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/isArray.js ***!
  \*****************************/
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/keys.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 10);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/enumerations/type.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ProxyWrapper = __webpack_require__(/*! ProxyWrapper */ 18);

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProxyWrapper2.default.getProxy({
    Any: Symbol('Any'),
    Array: Symbol('Array'),
    Boolean: Symbol('Boolean'),
    Complex: Symbol('Complex'),
    ModelObject: Symbol('ModelObject'),
    Number: Symbol('Number'),
    Object: Symbol('Object'),
    String: Symbol('String'),
    Symbol: Symbol('Symbol')
});

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_assocIndexOf.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 12);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_baseGetTag.js ***!
  \*********************************/
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_baseRest.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 87),
    overRest = __webpack_require__(/*! ./_overRest */ 81),
    setToString = __webpack_require__(/*! ./_setToString */ 82);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isObject.js ***!
  \******************************/
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_arrayMap.js ***!
  \*******************************/
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/_overArg.js ***!
  \******************************/
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./~/lodash/each.js ***!
  \**************************/
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./~/lodash/eq.js ***!
  \************************/
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/forOwn.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 51),
    castFunction = __webpack_require__(/*! ./_castFunction */ 54);

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/isFunction.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 5),
    isObject = __webpack_require__(/*! ./isObject */ 7);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/keysIn.js ***!
  \****************************/
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./src/ModelObject/getActions.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _type = __webpack_require__(/*! enumerations/type */ 3);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (type) {
    if (type === _type2.default.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
};

/***/ }),
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./src/ModelObject/index.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _applyData = __webpack_require__(/*! ModelObject/applyData */ 34);

var _applyData2 = _interopRequireDefault(_applyData);

var _generateActions = __webpack_require__(/*! ModelObject/generateActions */ 35);

var _generateActions2 = _interopRequireDefault(_generateActions);

var _generateModule = __webpack_require__(/*! ModelObject/generateModule */ 36);

var _generateModule2 = _interopRequireDefault(_generateModule);

var _generateObjectId = __webpack_require__(/*! ModelObject/generateObjectId */ 37);

var _generateObjectId2 = _interopRequireDefault(_generateObjectId);

var _persist = __webpack_require__(/*! ModelObject/persist */ 38);

var _persist2 = _interopRequireDefault(_persist);

var _ProxyWrapper = __webpack_require__(/*! ProxyWrapper */ 18);

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wm = new WeakMap();

var ModelObject = function () {
    function ModelObject(store, data, template) {
        var customActions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, ModelObject);

        wm.set(this, {
            $moduleId: _generateObjectId2.default.call(this),
            $store: store,
            $template: template
        });
        _applyData2.default.call(this, data, template);
        _generateActions2.default.call(this, template, customActions);
        var proxy = _ProxyWrapper2.default.getProxy(this);
        _generateModule2.default.call(proxy, template, customActions);
        return proxy;
    }

    _createClass(ModelObject, [{
        key: 'toJSON',
        value: function toJSON() {
            return _persist2.default.call(this, {}, this.$template);
        }
    }, {
        key: '$moduleId',
        get: function get() {
            return wm.get(this).$moduleId;
        }
    }, {
        key: '$store',
        get: function get() {
            return wm.get(this).$store;
        }
    }, {
        key: '$template',
        get: function get() {
            return wm.get(this).$template;
        }
    }]);

    return ModelObject;
}();

exports.default = ModelObject;

/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/ProxyWrapper/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys2 = __webpack_require__(/*! lodash/keys */ 2);

var _keys3 = _interopRequireDefault(_keys2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wm = new WeakMap();

var ProxyWrapper = function () {
    function ProxyWrapper() {
        _classCallCheck(this, ProxyWrapper);
    }

    _createClass(ProxyWrapper, null, [{
        key: 'getProxy',
        value: function getProxy(target) {
            var keys = (0, _keys3.default)(target);
            keys.forEach(function (key) {
                if (_typeof(target[key]) === 'object' && !Array.isArray(target[key]) && !wm.get(target[key])) {
                    target[key] = ProxyWrapper.getProxy(target[key]);
                    wm.set(target[key], true);
                }
            });
            target = new Proxy(target, {
                get: function get(t, key) {
                    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== 'symbol' && // synthetic toString, etc. functions (possibly related to VueJS)
                    key !== '__ob__' && // protection for VueJS models
                    key !== '_isVue' && key !== 'toJSON' && // JSON.stringify
                    key !== 'actions' && key !== '$moduleId' && key !== '$store' && key !== '$template' && key !== 'then' && keys.indexOf(key) === -1) {
                        throw new Error('unknown property \'' + key + '\'');
                    }
                    return t[key];
                }
            });
            return target;
        }
    }]);

    return ProxyWrapper;
}();

exports.default = ProxyWrapper;

/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_SetCache.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 1);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/_apply.js ***!
  \****************************/
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/lodash/_arrayIncludes.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 25);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./~/lodash/_arrayIncludesWith.js ***!
  \****************************************/
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_assignValue.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 24),
    eq = __webpack_require__(/*! ./eq */ 12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/lodash/_baseAssignValue.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ 61);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_baseIndexOf.js ***!
  \**********************************/
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_baseUnary.js ***!
  \********************************/
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_cacheHas.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 25);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_createAssigner.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ 6),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 74);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/lodash/_root.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 62);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/cloneDeep.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ 46);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/extend.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assignIn */ 83);


/***/ }),
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/lodash/isArrayLikeObject.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 90),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPE = exports.ModelObject = undefined;

var _type = __webpack_require__(/*! enumerations/type */ 3);

var _type2 = _interopRequireDefault(_type);

var _ModelObject = __webpack_require__(/*! ModelObject */ 17);

var _ModelObject2 = _interopRequireDefault(_ModelObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelObject = exports.ModelObject = _ModelObject2.default;
var TYPE = exports.TYPE = _type2.default;

/***/ }),
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./src/ModelObject/applyData.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cloneDeep2 = __webpack_require__(/*! lodash/cloneDeep */ 30);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _defaults2 = __webpack_require__(/*! lodash/defaults */ 85);

var _defaults3 = _interopRequireDefault(_defaults2);

var _intersection2 = __webpack_require__(/*! lodash/intersection */ 88);

var _intersection3 = _interopRequireDefault(_intersection2);

var _keys2 = __webpack_require__(/*! lodash/keys */ 2);

var _keys3 = _interopRequireDefault(_keys2);

var _difference2 = __webpack_require__(/*! lodash/difference */ 86);

var _difference3 = _interopRequireDefault(_difference2);

var _isString2 = __webpack_require__(/*! lodash/isString */ 95);

var _isString3 = _interopRequireDefault(_isString2);

var _isNumber2 = __webpack_require__(/*! lodash/isNumber */ 94);

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isObject2 = __webpack_require__(/*! lodash/isObject */ 7);

var _isObject3 = _interopRequireDefault(_isObject2);

var _isBoolean2 = __webpack_require__(/*! lodash/isBoolean */ 91);

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _each2 = __webpack_require__(/*! lodash/each */ 11);

var _each3 = _interopRequireDefault(_each2);

var _isArray2 = __webpack_require__(/*! lodash/isArray */ 1);

var _isArray3 = _interopRequireDefault(_isArray2);

var _isUndefined2 = __webpack_require__(/*! lodash/isUndefined */ 96);

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (data, template) {
    if (!this) {
        return;
    }
    prefixes = [];
    validate.call(data, template);
    apply.call(this, data, template);
};

var _ModelObject = __webpack_require__(/*! ModelObject */ 17);

var _ModelObject2 = _interopRequireDefault(_ModelObject);

var _type = __webpack_require__(/*! enumerations/type */ 3);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateProperty(template) {
    if ((0, _isUndefined3.default)(this)) {
        return;
    }
    switch (template.type) {
        case _type2.default.Any:
            break;
        case _type2.default.Array:
            if (!(0, _isArray3.default)(this)) {
                throwError(template.type, this);
            } else {
                (0, _each3.default)(this, function (item) {
                    validateProperty.call(item, template.items);
                });
            }
            break;
        case _type2.default.Boolean:
            if (!(0, _isBoolean3.default)(this)) {
                throwError(template.type, this);
            }
            break;
        case _type2.default.Complex:
            if (!(0, _isObject3.default)(this)) {
                throwError(template.type, this);
            }
            validate.call(this, template.properties);
            break;
        case _type2.default.ModelObject:
            if (this && !(this instanceof _ModelObject2.default)) {
                throwError(template.type, this);
            }
            break;
        case _type2.default.Number:
            if (!(0, _isNumber3.default)(this)) {
                throwError(template.type, this);
            }
            break;
        case _type2.default.Object:
            if (!(0, _isObject3.default)(this)) {
                throwError(template.type, this);
            }
            break;
        case _type2.default.String:
            if (!(0, _isString3.default)(this)) {
                throwError(template.type, this);
            }
            break;
        default:
            throw new Error('unexpected type');
    }
}
function throwError(type, data) {
    throw new Error('expected \'' + type.toString() + '\' but got \'' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)) + '\' in \'' + prefixes.join('.') + '\'');
}
var prefixes = [];
function validate(template) {
    var _this = this;

    var unexpectedProperties = (0, _difference3.default)((0, _keys3.default)(this), (0, _keys3.default)(template));
    if (unexpectedProperties.length) {
        throw new Error('unexpected properties found in \'' + (prefixes.join('.') || 'data') + '\': \'' + unexpectedProperties + '\'');
    }
    var expectedProperties = (0, _intersection3.default)((0, _keys3.default)(this), (0, _keys3.default)(template));
    (0, _each3.default)(expectedProperties, function (expectedProperty) {
        var _context;

        prefixes.push(expectedProperty);
        (_context = _this[expectedProperty], validateProperty).call(_context, template[expectedProperty]);
        prefixes.splice(-1);
    });
}
function apply(data, template) {
    var _this2 = this;

    (0, _defaults3.default)(this, data);
    var defaultProperties = (0, _difference3.default)((0, _keys3.default)(template), (0, _keys3.default)(data));
    (0, _each3.default)(defaultProperties, function (property) {
        if (template[property].type !== _type2.default.Complex) {
            _this2[property] = (0, _cloneDeep3.default)(template[property].defaultValue);
        } else {
            var _context2;

            console.log('apply default value to complex type', property);
            _this2[property] = {};
            var propData = data && data[property];
            (_context2 = _this2[property], apply).call(_context2, propData, template[property].properties);
        }
    });
}

/***/ }),
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./src/ModelObject/generateActions.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extend2 = __webpack_require__(/*! lodash/extend */ 31);

var _extend3 = _interopRequireDefault(_extend2);

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ 13);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _each2 = __webpack_require__(/*! lodash/each */ 11);

var _each3 = _interopRequireDefault(_each2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (template, customActions) {
    this.actions = _extends({}, visitUserActions.call(this, template), visitCustomActions.call(this, customActions));
};

var _mixin = __webpack_require__(/*! vuex/mixin */ 39);

var _getActions = __webpack_require__(/*! ModelObject/getActions */ 16);

var _getActions2 = _interopRequireDefault(_getActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = [];
function visitUserActions(template) {
    var _this = this;

    var actions = {};
    var properties = Object.getOwnPropertyNames(template);
    (0, _each3.default)(properties, function (property) {
        actions[property] = {};
        (0, _forOwn3.default)((0, _getActions2.default)(template[property].type), function (key) {
            var actionName = '[' + _this.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            actions[property][key] = function () {
                var _console;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                (_console = console).log.apply(_console, ['do', actionName].concat(args));
                _mixin.act.call.apply(_mixin.act, [_this, actionName].concat(args));
            };
        });
        if (template[property].properties) {
            prefixes.push(property);
            actions[property] = (0, _extend3.default)(actions[property], visitUserActions.call(_this, template[property].properties));
            prefixes.splice(-1);
        }
    });
    return actions;
}
function visitCustomActions(customModule) {
    var _this2 = this;

    var actions = {};
    (0, _forOwn3.default)(customModule, function (value, key) {
        var actionName = '[' + _this2.$moduleId + ']:' + key;
        actions[key] = function () {
            var _console2;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            (_console2 = console).log.apply(_console2, ['do', actionName].concat(args));
            _mixin.act.call.apply(_mixin.act, [_this2, actionName].concat(args));
        };
    });
    return actions;
}

/***/ }),
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./src/ModelObject/generateModule.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduce2 = __webpack_require__(/*! lodash/reduce */ 97);

var _reduce3 = _interopRequireDefault(_reduce2);

var _cloneDeep2 = __webpack_require__(/*! lodash/cloneDeep */ 30);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extend2 = __webpack_require__(/*! lodash/extend */ 31);

var _extend3 = _interopRequireDefault(_extend2);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ 14);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ 13);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _each2 = __webpack_require__(/*! lodash/each */ 11);

var _each3 = _interopRequireDefault(_each2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (template, module) {
    var _this3 = this;

    var mappedModule = {};
    (0, _forOwn3.default)(module, function (value, key) {
        mappedModule['[' + _this3.$moduleId + ']:' + key] = value;
    });
    return this.$store.registerModule(this.$moduleId, {
        state: this,
        actions: _extends({}, visitActions.call(this, template), mappedModule),
        mutations: _extends({}, visitMutations.call(this, template))
    });
};

var _getActions = __webpack_require__(/*! ModelObject/getActions */ 16);

var _getActions2 = _interopRequireDefault(_getActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = [];
function visitActions(template) {
    var _this = this;

    var actions = {};
    var properties = Object.getOwnPropertyNames(template);
    (0, _each3.default)(properties, function (property) {
        (0, _forOwn3.default)((0, _getActions2.default)(template[property].type), function (key) {
            var actionName = '[' + _this.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            actions[actionName] = function (_ref, value) {
                var commit = _ref.commit;

                console.log('act', actionName, value, _this);
                commit(actionName, value);
                if ((0, _isFunction3.default)(template[property].corollary)) {
                    template[property].corollary.call(_this);
                }
            };
        });
        if (template[property].properties) {
            prefixes.push(property);
            (0, _extend3.default)(actions, visitActions.call(_this, template[property].properties));
            prefixes.splice(-1);
        }
    });
    return actions;
}
function visitMutations(template) {
    var _this2 = this;

    var mutations = {};
    var properties = Object.getOwnPropertyNames(template);
    (0, _each3.default)(properties, function (property) {
        (0, _forOwn3.default)((0, _getActions2.default)(template[property].type), function (key) {
            var actionName = '[' + _this2.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            var chain = (0, _cloneDeep3.default)(prefixes);
            if (key === 'set') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, state)[property] = value;
                };
            } else if (key === 'clear') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, state)[property].splice(0);
                };
            } else if (key === 'add') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, state)[property].push(value);
                };
            } else if (key === 'remove') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    var array = (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, state)[property];
                    // https://vuejs.org/v2/guide/list.html#Caveats
                    var index = array.indexOf(value);
                    if (index !== -1) {
                        array.splice(index, 1);
                    } else {
                        console.log('item ' + value + ' not found');
                    }
                };
            }
        });
        if (template[property].properties) {
            prefixes.push(property);
            (0, _extend3.default)(mutations, visitMutations.call(_this2, template[property].properties));
            prefixes.splice(-1);
        }
    });
    return mutations;
}

/***/ }),
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./src/ModelObject/generateObjectId.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var key = this.constructor.name;
    ids[key] = ids[key] || 0;
    return key + "/" + ids[key]++;
};

var ids = {};

/***/ }),
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/ModelObject/persist.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ 14);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _forOwn2 = __webpack_require__(/*! lodash/forOwn */ 13);

var _forOwn3 = _interopRequireDefault(_forOwn2);

exports.default = persist;

var _type = __webpack_require__(/*! enumerations/type */ 3);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function persist(target, template) {
    var _this = this;

    (0, _forOwn3.default)(template, function (property, key) {
        if (property.transient) {
            return;
        }
        if (property.type === _type2.default.Object) {
            target[key] = _this[key];
        } else if (property.type === _type2.default.Complex) {
            if (_this[key]) {
                var _context;

                target[key] = (_context = _this[key], persist).call(_context, {}, property.properties);
            }
        } else if (property.type === _type2.default.ModelObject) {
            if ((0, _isFunction3.default)(property.transform)) {
                target[key] = property.transform(_this[key]);
            }
        } else {
            target[key] = _this[key];
        }
    });
    return target;
}

/***/ }),
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./src/vuex/mixin.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mutate = mutate;
exports.act = act;

var _vuex = __webpack_require__(/*! vuex */ 100);

function mutate(name) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    (0, _vuex.mapMutations)([name])[name].call(this, args);
}
function act(name) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    if (args.length === 1) {
        return (0, _vuex.mapActions)([name])[name].call(this, args.pop());
    } else {
        return (0, _vuex.mapActions)([name])[name].call(this, args);
    }
}

/***/ }),
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/_Stack.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 76),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 77),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 78),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 79),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 80);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/_Symbol.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 29);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_arrayEach.js ***!
  \********************************/
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_arrayPush.js ***!
  \********************************/
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_baseAssign.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 0),
    keys = __webpack_require__(/*! ./keys */ 2);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_baseAssignIn.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 0),
    keysIn = __webpack_require__(/*! ./keysIn */ 15);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_baseClone.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 40),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ 42),
    assignValue = __webpack_require__(/*! ./_assignValue */ 23),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ 44),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ 45),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ 55),
    copyArray = __webpack_require__(/*! ./_copyArray */ 56),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ 57),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ 58),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 63),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ 64),
    getTag = __webpack_require__(/*! ./_getTag */ 69),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ 70),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ 71),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ 72),
    isArray = __webpack_require__(/*! ./isArray */ 1),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 92),
    isObject = __webpack_require__(/*! ./isObject */ 7),
    keys = __webpack_require__(/*! ./keys */ 2);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_baseCreate.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 7);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_baseDifference.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 19),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ 21),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ 22),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 9),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 26),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 27);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 49 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_baseFlatten.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 43),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ 73);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 50 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/_baseFor.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 59);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 51 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_baseForOwn.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ 50),
    keys = __webpack_require__(/*! ./keys */ 2);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 52 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/lodash/_baseIntersection.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 19),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ 21),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ 22),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 9),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 26),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 27);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),
/* 53 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/lodash/_castArrayLikeObject.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 32);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),
/* 54 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_castFunction.js ***!
  \***********************************/
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 55 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_cloneBuffer.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 29);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 99)(module)))

/***/ }),
/* 56 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_copyArray.js ***!
  \********************************/
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 57 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_copySymbols.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 0),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 67);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 58 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/lodash/_copySymbolsIn.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 0),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ 68);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 59 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/lodash/_createBaseFor.js ***!
  \************************************/
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 60 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/lodash/_customDefaultsAssignIn.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

module.exports = customDefaultsAssignIn;


/***/ }),
/* 61 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_defineProperty.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 65);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 62 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_freeGlobal.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 98)))

/***/ }),
/* 63 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_getAllKeys.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 10);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 64 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_getAllKeysIn.js ***!
  \***********************************/
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 65 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/_getNative.js ***!
  \********************************/
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 66 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 10);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 67 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/_getSymbols.js ***!
  \*********************************/
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 68 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_getSymbolsIn.js ***!
  \***********************************/
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 69 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/lodash/_getTag.js ***!
  \*****************************/
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 70 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_initCloneArray.js ***!
  \*************************************/
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 71 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_initCloneByTag.js ***!
  \*************************************/
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 72 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/lodash/_initCloneObject.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ 47),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 66),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 75);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 73 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/lodash/_isFlattenable.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 41),
    isArguments = __webpack_require__(/*! ./isArguments */ 89),
    isArray = __webpack_require__(/*! ./isArray */ 1);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 74 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_isIterateeCall.js ***!
  \*************************************/
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 75 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_isPrototype.js ***!
  \**********************************/
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 76 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/lodash/_listCacheClear.js ***!
  \*************************************/
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 77 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/lodash/_listCacheDelete.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 4);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 78 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheGet.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 4);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 79 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheHas.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 4);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 80 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheSet.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 4);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 81 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/_overRest.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ 20);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 82 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/_setToString.js ***!
  \**********************************/
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 83 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/assignIn.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 0),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ 28),
    keysIn = __webpack_require__(/*! ./keysIn */ 15);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),
/* 84 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/assignInWith.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ 0),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ 28),
    keysIn = __webpack_require__(/*! ./keysIn */ 15);

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

module.exports = assignInWith;


/***/ }),
/* 85 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/defaults.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ 20),
    assignInWith = __webpack_require__(/*! ./assignInWith */ 84),
    baseRest = __webpack_require__(/*! ./_baseRest */ 6),
    customDefaultsAssignIn = __webpack_require__(/*! ./_customDefaultsAssignIn */ 60);

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, customDefaultsAssignIn);
  return apply(assignInWith, undefined, args);
});

module.exports = defaults;


/***/ }),
/* 86 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/lodash/difference.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ 48),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ 49),
    baseRest = __webpack_require__(/*! ./_baseRest */ 6),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 32);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),
/* 87 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/identity.js ***!
  \******************************/
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 88 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./~/lodash/intersection.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ 9),
    baseIntersection = __webpack_require__(/*! ./_baseIntersection */ 52),
    baseRest = __webpack_require__(/*! ./_baseRest */ 6),
    castArrayLikeObject = __webpack_require__(/*! ./_castArrayLikeObject */ 53);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),
/* 89 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/isArguments.js ***!
  \*********************************/
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 90 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/isArrayLike.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 14),
    isLength = __webpack_require__(/*! ./isLength */ 93);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 91 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./~/lodash/isBoolean.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 5),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),
/* 92 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isBuffer.js ***!
  \******************************/
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 93 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isLength.js ***!
  \******************************/
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 94 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isNumber.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 5),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 95 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/lodash/isString.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 5),
    isArray = __webpack_require__(/*! ./isArray */ 1),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 8);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 96 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/lodash/isUndefined.js ***!
  \*********************************/
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 97 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/lodash/reduce.js ***!
  \****************************/
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 98 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 99 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 100 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "vuex" ***!
  \***********************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_100__;

/***/ }),
/* 101 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */33);


/***/ })
/******/ ]);
});
//# sourceMappingURL=vuex-model-template.dev.js.map