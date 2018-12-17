(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["loadmanager"] = factory();
	else
		root["loadmanager"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var loadManager =
/*#__PURE__*/
function () {
  function loadManager(options) {
    var _this = this;

    _classCallCheck(this, loadManager);

    this.level = 0;
    this.scripts = [];
    this.listener = {};
    this.scriptListener;
    this.options = _objectSpread({}, {
      explicit: false,
      no_cookie: false
    }, options);
    this.on('complete', function () {
      return _this.ready();
    });
  }

  _createClass(loadManager, [{
    key: "setScripts",
    value: function setScripts() {
      var _this2 = this;

      var scripts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (scripts && Array.isArray(scripts)) {
        scripts.forEach(function (script) {
          return _this2.addScript(script);
        });
      }
    }
  }, {
    key: "getScripts",
    value: function getScripts() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      if (level === -1) return this.scripts;
      if (level === 0) return [];
      return this.scripts.filter(function (script) {
        return script.level <= level;
      });
    }
  }, {
    key: "addScript",
    value: function addScript(_ref) {
      var key = _ref.key,
          path = _ref.path,
          _ref$level = _ref.level,
          level = _ref$level === void 0 ? 1 : _ref$level,
          _ref$position = _ref.position,
          position = _ref$position === void 0 ? 'body' : _ref$position;
      this.scripts.push({
        key: key,
        path: path,
        level: level,
        position: position
      });
    }
  }, {
    key: "clearScripts",
    value: function clearScripts() {
      this.scripts = [];
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      this.level = level; // set cookie

      var d = new Date();
      var days = 100;
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie = "_lm_level=" + level + ";path=/;expires=" + d.toGMTString();
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      // get from cookie
      var value = document.cookie.match('(^|;) ?_lm_level=([^;]*)(;|$)');
      var level = value ? value[2] : null;
      return parseInt(level || this.level);
    } // Load

  }, {
    key: "load",
    value: function load() {
      var _this3 = this;

      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      this.setLevel(level);
      if (level == 0) return;
      var scripts = this.getScripts(level);
      scripts.forEach(function (script) {
        return _this3.addToDom(script);
      });
      var counter = 0;

      var checkComplete = function checkComplete() {
        counter++;

        if (counter >= scripts.length) {
          _this3.emit('completed');
        }
      };

      this.on('loaded', function () {
        return checkComplete();
      });
      this.on('error', function () {
        return checkComplete();
      });
    }
  }, {
    key: "addToDom",
    value: function addToDom(data) {
      var _this4 = this;

      if (data.loaded) return;
      var script = document.createElement('script');
      script.src = data.path;
      script.setAttribute('id', data.key);
      script.addEventListener('load', function (event) {
        _this4.emit('loaded', data);

        data.loaded = true;
      });
      script.addEventListener('error', function (event) {
        _this4.emit('error', data);

        data.loaded = false;
      });

      if (data.position == 'body') {
        document.body.appendChild(script);
      } else {
        document.head.appendChild(script);
      }

      console.log(script);
    } // SCRIPT LISTENERS

  }, {
    key: "whenever",
    value: function whenever(key) {
      return new Promise(function (resolve, reject) {
        if (this.scripts.filter(function (script) {
          return script.key === key && script.loaded === true;
        }).length >= 1) {
          resolve();
        } else {
          this.scriptListener[key].push(resolve);
        }
      });
    }
  }, {
    key: "has",
    value: function has(key) {
      return new Promise(function (resolve, reject) {
        if (this.scripts.filter(function (script) {
          return script.key === key && script.loaded === true;
        }).length >= 1) {
          resolve();
        } else {
          reject();
        }
      });
    }
  }, {
    key: "ready",
    value: function ready() {
      for (var key in this.scriptListener) {
        this.scriptListener[key].forEach(function (callback) {
          return callback();
        });
      }
    } // EVENT HANDLING

  }, {
    key: "on",
    value: function on(name, callback) {
      if (!this.listener[name]) {
        this.listener[name] = [];
      }

      this.listener[name].push(callback);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      if (!this.listener[name]) return;
      this.listener[name].foreach(function (listener) {
        return listener(data);
      });
    }
  }]);

  return loadManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (loadManager);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=loadmanager.js.map