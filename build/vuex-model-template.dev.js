(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("vue"), require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "vue", "vuex"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("vue"), require("vuex")) : factory(root["lodash"], root["vue"], root["vuex"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

var _ProxyWrapper = __webpack_require__(/*! ProxyWrapper */ 3);

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
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(/*! lodash */ 1);

var _lodash2 = _interopRequireDefault(_lodash);

var _mixin = __webpack_require__(/*! vuex/mixin */ 7);

var _module = __webpack_require__(/*! ModelObject/module */ 5);

var _module2 = _interopRequireDefault(_module);

var _validate = __webpack_require__(/*! ModelObject/validate */ 6);

var _validate2 = _interopRequireDefault(_validate);

var _ProxyWrapper = __webpack_require__(/*! ProxyWrapper */ 3);

var _ProxyWrapper2 = _interopRequireDefault(_ProxyWrapper);

var _type = __webpack_require__(/*! enumerations/type */ 0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function apply(data, template) {
    var _this = this;

    var expectedProperties = _lodash2.default.intersection(_lodash2.default.keys(data), _lodash2.default.keys(template));
    _lodash2.default.defaults(this, data);
    var defaultProperties = _lodash2.default.difference(_lodash2.default.keys(template), _lodash2.default.keys(data));
    _lodash2.default.each(defaultProperties, function (property) {
        if (template[property].type !== _type2.default.Complex) {
            _this[property] = _lodash2.default.cloneDeep(template[property].defaultValue);
        } else {
            var _context;

            console.log('apply default value to complex type', property);
            _this[property] = {};
            (_context = _this[property], apply).call(_context, data && data[property] ? data[property] : undefined, template[property].properties);
        }
    });
}
function getActions(type) {
    if (type === _type2.default.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
}
var prefixes = [];
function visitUserActions(template) {
    var _this2 = this;

    var actions = {};
    var properties = Object.getOwnPropertyNames(template);
    _lodash2.default.each(properties, function (property) {
        actions[property] = {};
        var propertyActions = template[property].actions;
        _lodash2.default.forOwn(getActions(template[property].type), function (key) {
            var actionName = '[' + _this2.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            actions[property][key] = function () {
                var _console;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                (_console = console).log.apply(_console, ['do', actionName].concat(args));
                _mixin.act.call.apply(_mixin.act, [_this2, actionName].concat(args));
            };
        });
        if (template[property].properties) {
            prefixes.push(property);
            actions[property] = _lodash2.default.extend(actions[property], visitUserActions.call(_this2, template[property].properties));
            prefixes.splice(-1);
        }
    });
    return actions;
}
function visitCustomActions(customModule) {
    var _this3 = this;

    var actions = {};
    _lodash2.default.forOwn(customModule, function (value, key) {
        var actionName = '[' + _this3.$moduleId + ']:' + key;
        actions[key] = function () {
            var _console2;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            (_console2 = console).log.apply(_console2, ['do', actionName].concat(args));
            _mixin.act.call.apply(_mixin.act, [_this3, actionName].concat(args));
        };
    });
    return actions;
}
var ids = {};
var wm = new WeakMap();
function getId() {
    var key = this.constructor.name;
    ids[key] = ids[key] || 0;
    return key + '/' + ids[key]++;
}

var ModelObject = function () {
    function ModelObject(store, data, template) {
        var module = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, ModelObject);

        if (!store) {
            throw 'You must register the store before creating model objects.';
        }
        var id = getId.call(this);
        wm.set(this, {
            $moduleId: id,
            $store: store
        });
        _validate2.default.call(data, template);
        apply.call(this, data, template);
        this.actions = _extends({}, visitUserActions.call(this, template), visitCustomActions.call(this, module));
        var proxy = _ProxyWrapper2.default.getProxy(this);
        _module2.default.call(this, template, module);
        return proxy;
    }

    _createClass(ModelObject, [{
        key: '$moduleId',
        get: function get() {
            return wm.get(this).$moduleId;
        }
    }, {
        key: '$store',
        get: function get() {
            return wm.get(this).$store;
        }
    }]);

    return ModelObject;
}();

exports.default = ModelObject;

/***/ }),
/* 3 */
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(/*! lodash */ 1);

var _lodash2 = _interopRequireDefault(_lodash);

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
            var keys = _lodash2.default.keys(target);
            keys.forEach(function (key) {
                if (_typeof(target[key]) === 'object' && !Array.isArray(target[key]) && !wm.get(target[key])) {
                    target[key] = ProxyWrapper.getProxy(target[key]);
                    wm.set(target[key], true);
                }
            });
            return new Proxy(target, {
                get: function get(t, key) {
                    if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== 'symbol' && // synthetic toString, etc. functions (possibly related to VueJS)
                    key !== '__ob__' && // protection for VueJS models
                    key !== '_isVue' && key !== 'toJSON' && // JSON.stringify
                    key !== 'actions' && key !== '$moduleId' && key !== '$store' && key !== 'then' && keys.indexOf(key) === -1) {
                        throw new Error('unknown property \'' + key + '\'');
                    }
                    return t[key];
                }
            });
        }
    }]);

    return ProxyWrapper;
}();

exports.default = ProxyWrapper;

/***/ }),
/* 4 */
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

var _type = __webpack_require__(/*! enumerations/type */ 0);

var _type2 = _interopRequireDefault(_type);

var _ModelObject = __webpack_require__(/*! ModelObject */ 2);

var _ModelObject2 = _interopRequireDefault(_ModelObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelObject = exports.ModelObject = _ModelObject2.default;
var TYPE = exports.TYPE = _type2.default;

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/ModelObject/module.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (template, module) {
    var _this3 = this;

    // mapping action to module id
    _lodash2.default.forOwn(module, function (value, key) {
        delete module[key];
        module['[' + _this3.$moduleId + ']:' + key] = value;
    });
    this.$store.registerModule(this.$moduleId, {
        state: this,
        actions: _extends({}, visitActions.call(this, template), module),
        mutations: _extends({}, visitMutations.call(this, template))
    });
    return module;
};

var _lodash = __webpack_require__(/*! lodash */ 1);

var _lodash2 = _interopRequireDefault(_lodash);

var _type = __webpack_require__(/*! enumerations/type */ 0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActions(type) {
    if (type === _type2.default.Array) {
        return ['set', 'add', 'remove', 'clear'];
    } else {
        return ['set'];
    }
}
var prefixes = [];
function visitActions(template) {
    var _this = this;

    var actions = {};
    var properties = Object.getOwnPropertyNames(template);
    _lodash2.default.each(properties, function (property) {
        _lodash2.default.forOwn(getActions(template[property].type), function (key) {
            var actionName = '[' + _this.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            actions[actionName] = function (_ref, value) {
                var commit = _ref.commit;

                console.log('act', actionName, value, _this);
                commit(actionName, value);
                _lodash2.default.each(template[property].sideEffects, function (sideEffect) {
                    var sideEffectName = '[' + _this.$moduleId + ']/' + sideEffect.property + ':' + sideEffect.action;
                    console.log('act/side-effect', sideEffectName, sideEffect.value);
                    commit(sideEffectName, sideEffect.value);
                });
            };
        });
        if (template[property].properties) {
            prefixes.push(property);
            _lodash2.default.extend(actions, visitActions.call(_this, template[property].properties));
            prefixes.splice(-1);
        }
    });
    return actions;
}
function visitMutations(template) {
    var _this2 = this;

    var mutations = {};
    var properties = Object.getOwnPropertyNames(template);
    _lodash2.default.each(properties, function (property) {
        _lodash2.default.forOwn(getActions(template[property].type), function (key) {
            var actionName = '[' + _this2.$moduleId + ']/' + prefixes.join('/') + (prefixes.length ? '/' : '') + property + ':' + key;
            var chain = _lodash2.default.cloneDeep(prefixes);
            if (key === 'set') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    _lodash2.default.reduce(chain, function (t, prop) {
                        return t[prop];
                    }, state)[property] = value;
                };
            } else if (key === 'clear') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    _lodash2.default.reduce(chain, function (t, prop) {
                        return t[prop];
                    }, state)[property].splice(0);
                };
            } else if (key === 'add') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    _lodash2.default.reduce(chain, function (t, prop) {
                        return t[prop];
                    }, state)[property].push(value);
                };
            } else if (key === 'remove') {
                mutations[actionName] = function (state, value) {
                    console.log('mutate', actionName, state, value);
                    var array = _lodash2.default.reduce(chain, function (t, prop) {
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
            _lodash2.default.extend(mutations, visitMutations.call(_this2, template[property].properties));
            prefixes.splice(-1);
        }
    });
    return mutations;
}

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./src/ModelObject/validate.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (template) {
    if (!this) {
        return;
    }
    stack = [];
    validate.call(this, template);
};

var _lodash = __webpack_require__(/*! lodash */ 1);

var _lodash2 = _interopRequireDefault(_lodash);

var _ModelObject = __webpack_require__(/*! ModelObject */ 2);

var _ModelObject2 = _interopRequireDefault(_ModelObject);

var _type = __webpack_require__(/*! enumerations/type */ 0);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stack = [];
function throwError(type, data) {
    throw new Error('expected \'' + type.toString() + '\' but got \'' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)) + '\' in \'' + stack.join('.') + '\'');
}
function validateProperty(template) {
    if (_lodash2.default.isUndefined(this)) {
        return;
    }
    switch (template.type) {
        case _type2.default.Any:
            break;
        case _type2.default.Array:
            if (!_lodash2.default.isArray(this)) {
                throwError(template.type, this);
            } else {
                _lodash2.default.each(this, function (item) {
                    validateProperty.call(item, template.items);
                });
            }
            break;
        case _type2.default.Boolean:
            if (!_lodash2.default.isBoolean(this)) {
                throwError(template.type, this);
            }
            break;
        case _type2.default.Complex:
            if (!_lodash2.default.isObject(this)) {
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
            if (!_lodash2.default.isNumber(this)) {
                throwError(template.type, this);
            }
            break;
        case _type2.default.Object:
            if (!_lodash2.default.isObject(this)) {
                throwError(template.type, this);
            }
            break;
        case _type2.default.String:
            if (!_lodash2.default.isString(this)) {
                throwError(template.type, this);
            }
            break;
        default:
            throw new Error('unexpected type');
    }
}
function validate(template) {
    var _this = this;

    var unexpectedProperties = _lodash2.default.difference(_lodash2.default.keys(this), _lodash2.default.keys(template));
    if (unexpectedProperties.length) {
        throw new Error('unexpected properties found in \'' + (stack.join('.') || 'data') + '\': \'' + unexpectedProperties + '\'');
    }
    var expectedProperties = _lodash2.default.intersection(_lodash2.default.keys(this), _lodash2.default.keys(template));
    _lodash2.default.each(expectedProperties, function (expectedProperty) {
        var _context;

        stack.push(expectedProperty);
        (_context = _this[expectedProperty], validateProperty).call(_context, template[expectedProperty]);
        stack.splice(-1);
    });
}
;

/***/ }),
/* 7 */
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

var _vue = __webpack_require__(/*! vue */ 8);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(/*! vuex */ 9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "vuex" ***!
  \***********************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */4);


/***/ })
/******/ ]);
});
//# sourceMappingURL=vuex-model-template.dev.js.map