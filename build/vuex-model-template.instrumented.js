(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("es6-promise"), require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define(["es6-promise", "vuex"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("es6-promise"), require("vuex")) : factory(root["es6-promise"], root["vuex"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_105__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(21),
    baseAssignValue = __webpack_require__(22);

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
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ProxyWrapper = __webpack_require__(6);

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProxyWrapper2.default.getProxy({
    Any: Symbol('Any'),
    Array: Symbol('Array'),
    Boolean: Symbol('Boolean'),
    Complex: Symbol('Complex'),
    Function: Symbol('Function'),
    Number: Symbol('Number'),
    Object: Symbol('Object'),
    String: Symbol('String'),
    Symbol: Symbol('Symbol')
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(13);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProxyWrapper = undefined;

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _keys2 = __webpack_require__(4);

var _keys3 = _interopRequireDefault(_keys2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __objectProperties = Object.getOwnPropertyNames(Object.prototype);
var wm = new WeakMap();

var ProxyWrapper = exports.ProxyWrapper = function () {
    function ProxyWrapper() {
        _classCallCheck(this, ProxyWrapper);
    }

    _createClass(ProxyWrapper, null, [{
        key: 'getProxy',
        value: function getProxy(target) {
            var keys = (0, _keys3.default)(target);
            target = new Proxy(target, {
                get: function get(t, key) {
                    if (keys.indexOf(key) === -1) {
                        throw new Error('unknown property \'' + key + '\' in target');
                    }
                    return t[key];
                }
            });
            return target;
        }
    }]);

    return ProxyWrapper;
}();

var customProperties = [];

var VuexProxyWrapper = function () {
    function VuexProxyWrapper() {
        _classCallCheck(this, VuexProxyWrapper);
    }

    _createClass(VuexProxyWrapper, null, [{
        key: 'setCustomProperties',
        value: function setCustomProperties() {
            var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (!(0, _isArray3.default)(properties)) {
                throw new Error('expected properties to be an array of strings');
            }
            customProperties = properties;
        }
    }, {
        key: 'getProxy',
        value: function getProxy(target) {
            var keys = (0, _keys3.default)(target);
            keys.forEach(function (key) {
                if (_typeof(target[key]) === 'object' && !Array.isArray(target[key]) && !wm.get(target[key])) {
                    target[key] = VuexProxyWrapper.getProxy(target[key]);
                    wm.set(target[key], true);
                }
            });
            target = new Proxy(target, {
                get: function get(t, key) {
                    if (__objectProperties.indexOf(key) === -1 && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== 'symbol' && // synthetic toString, etc. functions (possibly related to VueJS)
                    key !== '__ob__' && // VueJS models
                    key !== '_isVue' && // VueJS models
                    key !== 'actions' && // vuex-model-template
                    key !== 'properties' && // vuex-model-template
                    key !== 'then' && // promises & thenable objects
                    key !== 'toJSON' && // JSON.stringify
                    key.length && key[0] !== '$' && keys.indexOf(key) === -1 && customProperties.indexOf(key) === -1) {
                        throw new Error('unknown property \'' + key + '\' in target');
                    }
                    return t[key];
                }
            });
            return target;
        }
    }]);

    return VuexProxyWrapper;
}();

exports.default = VuexProxyWrapper;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(45),
    overRest = __webpack_require__(46),
    setToString = __webpack_require__(47);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(14);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObject = __webpack_require__(5);

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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(97),
    castFunction = __webpack_require__(100);

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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _applyData = __webpack_require__(19);

var _applyData2 = _interopRequireDefault(_applyData);

var _deserialize = __webpack_require__(96);

var _deserialize2 = _interopRequireDefault(_deserialize);

var _persist = __webpack_require__(101);

var _persist2 = _interopRequireDefault(_persist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Promise = typeof Promise === 'undefined' ? __webpack_require__(2).Promise : Promise;

var wm = new WeakMap();

var AbstractModelObject = function () {
    function AbstractModelObject(raw, options) {
        var _this = this;

        _classCallCheck(this, AbstractModelObject);

        if (!options || !options.template) {
            throw new Error('options.template needs to be defined');
        }
        var template = options.template;
        console.log('ctor > deserialize raw data', this, raw);
        var waitReady = (0, _deserialize2.default)(raw, template).then(function (deserialized) {
            console.log('ctor > deserialize raw data (completed)', deserialized, _this);
            console.log('ctor > apply data to instance', _this);
            var applyPromises = _applyData2.default.call(_this, deserialized, template);
            if (applyPromises) {
                console.log('ctor > apply data to instance (in progress, waiting for ' + applyPromises.length + ' asynchronous calls)', _this);
            }
            return _Promise.resolve(applyPromises);
        }).then(function () {
            console.log('ctor > apply data to instance (completed)', _this);
            console.log('ctor > apply $onCreate', _this);
            return _this.$onCreate();
        });
        waitReady = waitReady.then(function () {
            console.log('ctor > apply strategy (completed)', _this);
            console.log('ctor > instance ready', _this);
            wm.get(_this).$isReady = true;
            return _this;
        });
        wm.set(this, {
            isReady: false,
            options: options,
            waitReady: waitReady
        });
    }

    _createClass(AbstractModelObject, [{
        key: '$onCreate',
        value: function $onCreate() {
            console.log('AbstractModelObject.$onCreate', this);
            return _Promise.resolve();
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            return _persist2.default.call(this, {}, this.$template, false);
        }
    }, {
        key: 'toFullJSON',
        value: function toFullJSON() {
            return _persist2.default.call(this, {}, this.$template, true);
        }
    }, {
        key: '$isReady',
        get: function get() {
            return wm.get(this).isReady;
        }
    }, {
        key: '$options',
        get: function get() {
            return wm.get(this).options;
        }
    }, {
        key: '$waitReady',
        get: function get() {
            return wm.get(this).waitReady;
        }
    }]);

    return AbstractModelObject;
}();

exports.default = AbstractModelObject;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaults2 = __webpack_require__(41);

var _defaults3 = _interopRequireDefault(_defaults2);

var _cloneDeep2 = __webpack_require__(24);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _intersection2 = __webpack_require__(79);

var _intersection3 = _interopRequireDefault(_intersection2);

var _difference2 = __webpack_require__(84);

var _difference3 = _interopRequireDefault(_difference2);

var _isString2 = __webpack_require__(91);

var _isString3 = _interopRequireDefault(_isString2);

var _isNumber2 = __webpack_require__(92);

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isFunction2 = __webpack_require__(9);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isObject2 = __webpack_require__(5);

var _isObject3 = _interopRequireDefault(_isObject2);

var _isBoolean2 = __webpack_require__(93);

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _each2 = __webpack_require__(17);

var _each3 = _interopRequireDefault(_each2);

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _isUndefined2 = __webpack_require__(94);

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _keys2 = __webpack_require__(4);

var _keys3 = _interopRequireDefault(_keys2);

var _filter2 = __webpack_require__(95);

var _filter3 = _interopRequireDefault(_filter2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.validateProperty = validateProperty;

exports.default = function (data, template) {
    if (!this) {
        return;
    }
    prefixes = [];
    validate.call(data, template);
    (0, _defaults3.default)(this, data);
    var promises = apply.call(this, data, data, template) || [];
    if (promises.length) {
        console.log('applying defaults', data);
    }
    if (promises.length) {
        return _Promise.all(promises).then(function () {
            return data;
        });
    }
};

var _type = __webpack_require__(3);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Promise = typeof Promise === 'undefined' ? __webpack_require__(2).Promise : Promise;

var prefixes = [];
function throwTypeError(type, data) {
    throw new Error('expected \'' + type.toString() + '\' but got \'' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)) + '\' in \'' + prefixes.join('.') + '\'');
}
function throwPersistenceError(type) {
    throw new Error('expected \'' + prefixes.join('.') + '\' of type \'' + type.toString() + '\' to be transient');
}
function throwReadonlyError(type) {
    throw new Error('expected \'' + prefixes.join('.') + '\' of type \'' + type.toString() + '\' to be readonly');
}
function getTemplateProperties(template) {
    return (0, _filter3.default)((0, _keys3.default)(template), function (key) {
        return typeof template[key] !== 'function';
    });
}
function validateProperty(template) {
    if ((0, _isUndefined3.default)(this)) {
        return;
    }
    if (!template) {
        return;
    }
    switch (template.type) {
        case _type2.default.Any:
            break;
        case _type2.default.Array:
            if (!(0, _isArray3.default)(this)) {
                throwTypeError(template.type, this);
            } else if (!template.items) {
                break;
            } else {
                (0, _each3.default)(this, function (item) {
                    validateProperty.call(item, template.items);
                });
            }
            break;
        case _type2.default.Boolean:
            if (!(0, _isBoolean3.default)(this)) {
                throwTypeError(template.type, this);
            }
            break;
        case _type2.default.Complex:
            if (!(0, _isObject3.default)(this)) {
                throwTypeError(template.type, this);
            }
            validate.call(this, template.properties);
            break;
        case _type2.default.Function:
            if (!(0, _isFunction3.default)(this)) {
                throwTypeError(template.type, this);
            }
            if (!template.transient) {
                throwPersistenceError(template.type);
            }
            if (!template.readonly) {
                throwReadonlyError(template.type);
            }
            break;
        case _type2.default.Number:
            if (!(0, _isNumber3.default)(this)) {
                throwTypeError(template.type, this);
            }
            break;
        case _type2.default.Object:
            if (!(0, _isObject3.default)(this)) {
                throwTypeError(template.type, this);
            }
            break;
        case _type2.default.String:
            if (!(0, _isString3.default)(this)) {
                throwTypeError(template.type, this);
            }
            break;
        default:
            throw new Error('unexpected type');
    }
}
function validate(template) {
    var _this = this;

    var unexpectedProperties = (0, _difference3.default)((0, _keys3.default)(this), getTemplateProperties(template));
    if ((!template.strict || template.strict()) && unexpectedProperties.length) {
        var message = 'unexpected properties found in \'' + (prefixes.join('.') || 'data') + '\': \'' + unexpectedProperties + '\'';
        throw new Error(message);
    }
    var expectedProperties = (0, _intersection3.default)((0, _keys3.default)(this), getTemplateProperties(template));
    (0, _each3.default)(expectedProperties, function (expectedProperty) {
        var _context;

        prefixes.push(expectedProperty);
        (_context = _this[expectedProperty], validateProperty).call(_context, template[expectedProperty]);
        prefixes.splice(-1);
    });
}
function apply(rawData, data, template) {
    var _this2 = this;

    var promises = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var defaultProperties = (0, _difference3.default)(getTemplateProperties(template), (0, _keys3.default)(data));
    (0, _each3.default)(defaultProperties, function (property) {
        if (template[property].type !== _type2.default.Complex) {
            if (template[property].type === _type2.default.Function && (0, _isFunction3.default)(template[property].defaultValue)) {
                _this2[property] = template[property].defaultValue.bind(_this2);
            } else if ((0, _isFunction3.default)(template[property].defaultValue)) {
                var value = template[property].defaultValue(rawData);
                if (value.then) {
                    promises.push(_Promise.resolve(value).then(function (result) {
                        _this2[property] = result;
                    }));
                } else {
                    _this2[property] = value;
                }
            } else {
                _this2[property] = (0, _cloneDeep3.default)(template[property].defaultValue);
            }
        } else {
            var _context2;

            console.log('apply default value to complex type', property);
            _this2[property] = {};
            var propData = data && data[property];
            (_context2 = _this2[property], apply).call(_context2, rawData, propData, template[property].properties, promises);
        }
    });
    var definedProperties = (0, _intersection3.default)(getTemplateProperties(template), (0, _keys3.default)(data));
    (0, _each3.default)(definedProperties, function (property) {
        if (template[property].type === _type2.default.Complex && data[property]) {
            var _context3;

            console.log('apply default to properties of complex type', property);
            (_context3 = _this2[property], apply).call(_context3, rawData, data[property], template[property].properties, promises);
        }
    });
    return promises;
}

/***/ }),
/* 20 */
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
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(22),
    eq = __webpack_require__(14);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(43);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(7),
    isIterateeCall = __webpack_require__(48);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(50);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(62);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(28);

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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(28);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(82),
    isObjectLike = __webpack_require__(11);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var strategy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    var proxy = _ProxyWrapper2.default.getProxy(this);
    strategy(proxy);
    return proxy;
};

var _ProxyWrapper = __webpack_require__(6);

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mutate = mutate;
exports.act = act;

var _vuex = __webpack_require__(105);

function mutate(name) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return (0, _vuex.mapMutations)([name])[name].call(this, args);
}
function act(name) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    if (args.length === 0) {
        return (0, _vuex.mapActions)([name])[name].call(this);
    } else if (args.length) {
        return (0, _vuex.mapActions)([name])[name].call(this, args);
    }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _type = __webpack_require__(3);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (template) {
    if (template.readonly) {
        return [];
    } else if (template.type === _type2.default.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TYPE = exports.ModelObject = undefined;
exports.setCustomProperties = setCustomProperties;

var _type = __webpack_require__(3);

var _type2 = _interopRequireDefault(_type);

var _ModelObject = __webpack_require__(40);

var _ModelObject2 = _interopRequireDefault(_ModelObject);

var _ProxyWrapper = __webpack_require__(6);

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

var _VuexModelObject = __webpack_require__(102);

var _VuexModelObject2 = _interopRequireDefault(_VuexModelObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _VuexModelObject2.default;
var ModelObject = exports.ModelObject = _ModelObject2.default;
var TYPE = exports.TYPE = _type2.default;
function setCustomProperties(properties) {
    _ProxyWrapper2.default.setCustomProperties(properties);
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AbstractModelObject2 = __webpack_require__(18);

var _AbstractModelObject3 = _interopRequireDefault(_AbstractModelObject2);

var _wrapInstance = __webpack_require__(34);

var _wrapInstance2 = _interopRequireDefault(_wrapInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelObject = function (_AbstractModelObject) {
    _inherits(ModelObject, _AbstractModelObject);

    function ModelObject(data, template) {
        var _ret;

        _classCallCheck(this, ModelObject);

        var _this = _possibleConstructorReturn(this, (ModelObject.__proto__ || Object.getPrototypeOf(ModelObject)).call(this, data, template));

        return _ret = _wrapInstance2.default.call(_this), _possibleConstructorReturn(_this, _ret);
    }

    return ModelObject;
}(_AbstractModelObject3.default);

exports.default = ModelObject;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(20),
    assignInWith = __webpack_require__(42),
    baseRest = __webpack_require__(7),
    customDefaultsAssignIn = __webpack_require__(49);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1),
    createAssigner = __webpack_require__(23),
    keysIn = __webpack_require__(15);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(44);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(20);

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
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(14);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(51),
    arrayEach = __webpack_require__(57),
    assignValue = __webpack_require__(21),
    baseAssign = __webpack_require__(58),
    baseAssignIn = __webpack_require__(59),
    cloneBuffer = __webpack_require__(60),
    copyArray = __webpack_require__(64),
    copySymbols = __webpack_require__(65),
    copySymbolsIn = __webpack_require__(67),
    getAllKeys = __webpack_require__(69),
    getAllKeysIn = __webpack_require__(70),
    getTag = __webpack_require__(71),
    initCloneArray = __webpack_require__(72),
    initCloneByTag = __webpack_require__(73),
    initCloneObject = __webpack_require__(74),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(78),
    isObject = __webpack_require__(5),
    keys = __webpack_require__(4);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(52),
    listCacheDelete = __webpack_require__(53),
    listCacheGet = __webpack_require__(54),
    listCacheHas = __webpack_require__(55),
    listCacheSet = __webpack_require__(56);

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
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(8);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(8);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(8);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(8);

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
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1),
    keys = __webpack_require__(4);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1),
    keysIn = __webpack_require__(15);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(25);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)(module)))

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ }),
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1),
    getSymbols = __webpack_require__(66);

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
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1),
    getSymbolsIn = __webpack_require__(68);

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
/* 68 */
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
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(13);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(75),
    getPrototype = __webpack_require__(76),
    isPrototype = __webpack_require__(77);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(13);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(16),
    baseIntersection = __webpack_require__(80),
    baseRest = __webpack_require__(7),
    castArrayLikeObject = __webpack_require__(81);

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(26),
    arrayIncludes = __webpack_require__(27),
    arrayIncludesWith = __webpack_require__(29),
    arrayMap = __webpack_require__(16),
    baseUnary = __webpack_require__(30),
    cacheHas = __webpack_require__(31);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(32);

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(9),
    isLength = __webpack_require__(83);

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
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(85),
    baseFlatten = __webpack_require__(86),
    baseRest = __webpack_require__(7),
    isArrayLikeObject = __webpack_require__(32);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(26),
    arrayIncludes = __webpack_require__(27),
    arrayIncludesWith = __webpack_require__(29),
    arrayMap = __webpack_require__(16),
    baseUnary = __webpack_require__(30),
    cacheHas = __webpack_require__(31);

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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(87),
    isFlattenable = __webpack_require__(88);

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
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(89),
    isArguments = __webpack_require__(90),
    isArray = __webpack_require__(0);

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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(25);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(11);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObjectLike = __webpack_require__(11);

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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObjectLike = __webpack_require__(11);

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
/* 94 */
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
/* 95 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(33);

var _map3 = _interopRequireDefault(_map2);

var _forOwn2 = __webpack_require__(12);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _type = __webpack_require__(3);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Promise = typeof Promise === 'undefined' ? __webpack_require__(2).Promise : Promise;

function visit(rawData, template) {
    var _this = this;

    var promises = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (!this) {
        return;
    }
    (0, _forOwn3.default)(template, function (property, key) {
        if (property.type === _type2.default.Array && property.items && property.items.deserialize) {
            console.log('deserialize array property', key, _this[key]);
            var promise = void 0;
            if (property.deserialize) {
                promise = _Promise.resolve(property.deserialize.call(rawData, _this[key], rawData)).then(function (result) {
                    console.log('deserialized property', key, result);
                    _this[key] = result;
                    return result;
                });
            } else {
                promise = _Promise.resolve(_this[key]);
            }
            promises.push(promise.then(function (items) {
                var itemPromises = (0, _map3.default)(items, function (item) {
                    return _Promise.resolve(property.items.deserialize.call(rawData, item, rawData));
                });
                return _Promise.all(itemPromises).then(function (results) {
                    console.log('deserialized array property', key, results);
                    _this[key] = results;
                });
            }));
        } else if (property.deserialize) {
            console.log('deserialize property', key);
            promises.push(_Promise.resolve(property.deserialize.call(rawData, _this[key], rawData)).then(function (result) {
                console.log('deserialized property', key, result);
                _this[key] = result;
            }));
        } else if (property.type === _type2.default.Complex) {
            var _context;

            (_context = _this[key], visit).call(_context, rawData, property.properties, promises);
        }
    });
    return promises;
}

exports.default = function (data, template) {
    var dataPromise = template.deserialize ? _Promise.resolve(template.deserialize(data)) : _Promise.resolve(data);
    return dataPromise.then(function (resolvedData) {
        var promises = visit.call(resolvedData, resolvedData, template) || [];
        if (promises.length) {
            console.log('deserializing', resolvedData);
        }
        return _Promise.all(promises).then(function () {
            return resolvedData;
        });
    });
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(98),
    keys = __webpack_require__(4);

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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(99);

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
/* 99 */
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
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(33);

var _map3 = _interopRequireDefault(_map2);

var _isFunction2 = __webpack_require__(9);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _forOwn2 = __webpack_require__(12);

var _forOwn3 = _interopRequireDefault(_forOwn2);

exports.default = persist;

var _type = __webpack_require__(3);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function persist(target, template) {
    var _this = this;

    var includeTransient = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    (0, _forOwn3.default)(template, function (property, key) {
        if (typeof property === 'function') {
            return;
        }
        if (!includeTransient && property.transient) {
            return;
        }
        if (property.type === _type2.default.Object) {
            target[key] = _this[key];
            if ((0, _isFunction3.default)(property.serialize)) {
                target[key] = property.serialize(_this[key]);
            }
        } else if (property.type === _type2.default.Complex) {
            if ((0, _isFunction3.default)(property.serialize)) {
                target[key] = property.serialize(_this[key]);
            } else if (_this[key]) {
                var _context;

                target[key] = (_context = _this[key], persist).call(_context, {}, property.properties, includeTransient);
            }
        } else if (property.type === _type2.default.Array && ((0, _isFunction3.default)(property.serialize) || property.items && (0, _isFunction3.default)(property.items.serialize))) {
            var array = _this[key];
            if ((0, _isFunction3.default)(property.serialize)) {
                target[key] = property.serialize(array);
                array = target[key];
            }
            if ((0, _isFunction3.default)(property.items.serialize)) {
                target[key] = (0, _map3.default)(array, property.items.serialize);
            }
        } else {
            target[key] = _this[key];
        }
    });
    if (template.serialize) {
        target = template.serialize(target);
    }
    return target;
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractModelObject2 = __webpack_require__(18);

var _AbstractModelObject3 = _interopRequireDefault(_AbstractModelObject2);

var _wrapInstance = __webpack_require__(34);

var _wrapInstance2 = _interopRequireDefault(_wrapInstance);

var _generateActions = __webpack_require__(103);

var _generateActions2 = _interopRequireDefault(_generateActions);

var _generateModule = __webpack_require__(106);

var _generateModule2 = _interopRequireDefault(_generateModule);

var _generateObjectId = __webpack_require__(108);

var _generateObjectId2 = _interopRequireDefault(_generateObjectId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Promise = typeof Promise === 'undefined' ? __webpack_require__(2).Promise : Promise;

var _store = void 0;
var wm = new WeakMap();

var VuexModelObject = function (_AbstractModelObject) {
    _inherits(VuexModelObject, _AbstractModelObject);

    function VuexModelObject() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _ref = arguments[1];
        var template = _ref.template,
            actions = _ref.actions,
            properties = _ref.properties;

        _classCallCheck(this, VuexModelObject);

        if (!_store) {
            throw new Error('Run VuexModelObject.use($store) before calling ctor');
        }
        if (!template) {
            throw new Error('options { template } must be defined');
        }
        if (!actions) {
            throw new Error('options { actions } must be defined');
        }
        if (!properties) {
            throw new Error('options { properties } must be defined');
        }
        data = data || {};

        var _this = _possibleConstructorReturn(this, (VuexModelObject.__proto__ || Object.getPrototypeOf(VuexModelObject)).call(this, data, {
            template: template,
            actions: actions,
            properties: properties
        }));

        wm.set(_this, {
            $objectId: _generateObjectId2.default.call(_this),
            $store: _store
        });
        return _this;
    }

    _createClass(VuexModelObject, [{
        key: '$initialize',
        value: function $initialize() {}
    }, {
        key: '$onCreate',
        value: function $onCreate() {
            var _this2 = this;

            console.log('VuexModelObject.$onCreate', this);
            return _get(VuexModelObject.prototype.__proto__ || Object.getPrototypeOf(VuexModelObject.prototype), '$onCreate', this).call(this).then(function () {
                console.log('VuexModelObject.$onCreate > generate actions', _this2);
                return _generateActions2.default.call(_this2);
            }).then(function () {
                console.log('VuexModelObject.$onCreate > generate module', _this2);
            }).then(function () {
                console.log('VuexModelObject.$onCreate > initialize', _this2);
            });
        }
    }, {
        key: '$actions',
        get: function get() {
            return this.$options.actions;
        }
    }, {
        key: '$moduleId',
        get: function get() {
            return this.constructor.name;
        }
    }, {
        key: '$properties',
        get: function get() {
            return this.$options.properties;
        }
    }, {
        key: '$store',
        get: function get() {
            return wm.get(this).$store;
        }
    }, {
        key: '$template',
        get: function get() {
            return this.$options.template;
        }
    }, {
        key: '$waitReady',
        get: function get() {
            var _this3 = this;

            var __private = wm.get(this);
            __private.waitReady = __private.waitReady || _get(VuexModelObject.prototype.__proto__ || Object.getPrototypeOf(VuexModelObject.prototype), '$waitReady', this).then(function () {
                return _Promise.resolve(_wrapInstance2.default.call(_this3, function (target) {
                    return _generateModule2.default.call(target, target.$template, target.$module);
                })).then(function (target) {
                    return _Promise.resolve(_this3.$initialize.call(target)).then(function () {
                        return target;
                    });
                });
            });
            return __private.waitReady;
        }
    }], [{
        key: 'use',
        value: function use(store) {
            if (!_store) {
                _store = store;
            } else {
                throw new Error('store already set');
            }
        }
    }]);

    return VuexModelObject;
}(_AbstractModelObject3.default);

exports.default = VuexModelObject;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isObject2 = __webpack_require__(5);

var _isObject3 = _interopRequireDefault(_isObject2);

var _extend2 = __webpack_require__(35);

var _extend3 = _interopRequireDefault(_extend2);

var _forOwn2 = __webpack_require__(12);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _each2 = __webpack_require__(17);

var _each3 = _interopRequireDefault(_each2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var _this4 = this;

    var rawActions = _extends({}, visitUserActions.call(this, this.$template), visitCustomActions.call(this, this.$actions));
    console.log('raw actions', rawActions, this);
    this.actions = {};
    buildActions.call(this, rawActions, this.actions);
    this.properties = {};
    if (this.$properties) {
        (0, _forOwn3.default)(this.$properties, function (property, key) {
            _this4.properties[key] = property.bind(_this4);
        });
    }
    this.properties = _ProxyWrapper2.default.getProxy(this.properties);
};

var _mixin = __webpack_require__(36);

var _getActions = __webpack_require__(37);

var _getActions2 = _interopRequireDefault(_getActions);

var _ProxyWrapper = __webpack_require__(6);

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Promise = typeof Promise === 'undefined' ? __webpack_require__(2).Promise : Promise;

var Action = function Action(name, customFn) {
    _classCallCheck(this, Action);

    this.name = name;
    this.customFn = customFn;
};

var prefixes = [];
function visitUserActions(template) {
    var _this = this;

    var actions = {};
    var properties = Object.getOwnPropertyNames(template);
    (0, _each3.default)(properties, function (property) {
        actions[property] = {};
        (0, _forOwn3.default)((0, _getActions2.default)(template[property]), function (key) {
            var actionName = '[' + _this.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            actions[property][key] = new Action(actionName);
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
        actions[key] = new Action(actionName, value);
    });
    return actions;
}
function buildActions(rawActions, target) {
    var _this3 = this;

    (0, _forOwn3.default)(rawActions, function (actions, key) {
        if (actions instanceof Action) {
            target[key] = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (actions.customFn) {
                    var _console;

                    (_console = console).log.apply(_console, ['do > custom action', actions.name, _this3].concat(args));
                    return _Promise.resolve(actions.customFn.apply(_this3, args));
                } else {
                    var _console2;

                    (_console2 = console).log.apply(_console2, ['do > action', actions.name, _this3].concat(args));
                    return _Promise.resolve(_mixin.act.call.apply(_mixin.act, [_this3, actions.name, _this3].concat(args)));
                }
            };
        } else if ((0, _isObject3.default)(actions)) {
            target[key] = {};
            buildActions.call(_this3, actions, target[key]);
            target[key] = _ProxyWrapper2.default.getProxy(target[key]);
        }
    });
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1),
    createAssigner = __webpack_require__(23),
    keysIn = __webpack_require__(15);

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
/* 105 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_105__;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isArray2 = __webpack_require__(0);

var _isArray3 = _interopRequireDefault(_isArray2);

var _reduce2 = __webpack_require__(107);

var _reduce3 = _interopRequireDefault(_reduce2);

var _cloneDeep2 = __webpack_require__(24);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extend2 = __webpack_require__(35);

var _extend3 = _interopRequireDefault(_extend2);

var _isFunction2 = __webpack_require__(9);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _forOwn2 = __webpack_require__(12);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _each2 = __webpack_require__(17);

var _each3 = _interopRequireDefault(_each2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {
    if (wm[this.$moduleId]) {
        _mixin.mutate.call(this, 'add' + this.$moduleId, wm[this.$moduleId], this);
        return;
    }
    wm[this.$moduleId] = {
        items: [this]
    };
    var actions = visitActions.call(this, this.$template);
    var mutations = visitMutations.call(this, this.$template);
    console.log('module > actions', actions);
    console.log('module > mutations', mutations);
    console.log('module > id', this.$moduleId);
    return this.$store.registerModule(this.$moduleId, {
        state: wm,
        actions: _extends({}, actions),
        mutations: _extends({}, mutations, _defineProperty({}, 'add' + this.$moduleId, function undefined(state, _ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                type = _ref5[0],
                obj = _ref5[1];

            type.items.push(obj);
        }))
    });
};

var _mixin = __webpack_require__(36);

var _applyData = __webpack_require__(19);

var _getActions = __webpack_require__(37);

var _getActions2 = _interopRequireDefault(_getActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _Promise = typeof Promise === 'undefined' ? __webpack_require__(2).Promise : Promise;

var prefixes = [];
function visitActions(template) {
    var _this = this;

    var actions = {};
    var properties = Object.getOwnPropertyNames(template);
    (0, _each3.default)(properties, function (property) {
        (0, _forOwn3.default)((0, _getActions2.default)(template[property]), function (key) {
            var actionName = '[' + _this.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            actions[actionName] = function (_ref, _ref2) {
                var commit = _ref.commit;

                var _ref3 = _slicedToArray(_ref2, 2),
                    target = _ref3[0],
                    value = _ref3[1];

                console.log('act', actionName, target, value);
                commit(actionName, [target, value]);
                if ((0, _isFunction3.default)(template[property].corollary)) {
                    console.log('act -> corollary', actionName, target, value);
                    return new _Promise(function (resolve, reject) {
                        try {
                            resolve(template[property].corollary.call(target, value));
                        } catch (error) {
                            reject(error);
                        }
                    });
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
        (0, _forOwn3.default)((0, _getActions2.default)(template[property]), function (key) {
            var actionName = '[' + _this2.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            var chain = (0, _cloneDeep3.default)(prefixes);
            if (key === 'set') {
                mutations[actionName] = function (state, args) {
                    var _args = _slicedToArray(args, 2),
                        target = _args[0],
                        value = _args[1];

                    console.log('mutate', actionName, target, value);
                    _applyData.validateProperty.call(value, template[property]);
                    var array = (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, target)[property];
                    if ((0, _isArray3.default)(array)) {
                        array.splice(0);
                        array.push.apply(array, _toConsumableArray(value));
                    } else {
                        (0, _reduce3.default)(chain, function (t, prop) {
                            return t[prop];
                        }, target)[property] = value;
                    }
                };
            } else if (key === 'clear') {
                mutations[actionName] = function (state, args) {
                    var _args2 = _slicedToArray(args, 2),
                        target = _args2[0],
                        value = _args2[1];

                    console.log('mutate', actionName, target, value);
                    (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, target)[property].splice(0);
                };
            } else if (key === 'add') {
                mutations[actionName] = function (state, args) {
                    var _args3 = _slicedToArray(args, 2),
                        target = _args3[0],
                        value = _args3[1];

                    console.log('mutate', actionName, target, value);
                    _applyData.validateProperty.call(value, template[property].items);
                    (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, target)[property].push(value);
                };
            } else if (key === 'remove') {
                mutations[actionName] = function (state, args) {
                    var _args4 = _slicedToArray(args, 2),
                        target = _args4[0],
                        value = _args4[1];

                    console.log('mutate', actionName, target, value);
                    var array = (0, _reduce3.default)(chain, function (t, prop) {
                        return t[prop];
                    }, target)[property];
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
var wm = {};

/***/ }),
/* 107 */
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
/* 108 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=vuex-model-template.instrumented.js.map