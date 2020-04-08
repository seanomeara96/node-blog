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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend-js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend-js/modules/MenuToggle.js":
/*!*******************************************!*\
  !*** ./frontend-js/modules/MenuToggle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// A \"doFirst\" method would be a cool idea\n// just to avoid all the setTimeout shenanigans\nvar MenuToggle =\n/*#__PURE__*/\nfunction () {\n  function MenuToggle() {\n    _classCallCheck(this, MenuToggle);\n\n    this.btn = document.querySelector('.menu-btn');\n    this.modal = document.querySelector('.menu');\n    this.nav = document.querySelector('.navigation');\n    this.footer = document.querySelector('.menu-footer');\n    this.events();\n    this.isOpen = false;\n  }\n\n  _createClass(MenuToggle, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.btn.addEventListener('click', function () {\n        _this.toggleMenu();\n      });\n    }\n  }, {\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      if (this.isOpen == false) {\n        this.openTheMenu();\n      } else {\n        this.closeTheMenu();\n      }\n\n      ;\n    }\n  }, {\n    key: \"openTheMenu\",\n    value: function openTheMenu() {\n      var _this2 = this;\n\n      this.modal.classList.remove('menu--is-closed');\n      this.modal.classList.add('menu--is-open');\n      this.isOpen = true;\n      setTimeout(function () {\n        return _this2.toggleContents();\n      }, 300);\n    }\n  }, {\n    key: \"closeTheMenu\",\n    value: function closeTheMenu() {\n      var _this3 = this;\n\n      this.toggleContents();\n      setTimeout(function () {\n        _this3.modal.classList.remove('menu--is-open');\n\n        _this3.modal.classList.add('menu--is-closed');\n\n        _this3.isOpen = false;\n      }, 100);\n    }\n  }, {\n    key: \"toggleContents\",\n    value: function toggleContents() {\n      this.nav.classList.toggle('navigation--is-visible');\n      this.footer.classList.toggle('menu-footer--is-visible');\n    }\n  }]);\n\n  return MenuToggle;\n}();\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuToggle);\n\n//# sourceURL=webpack:///./frontend-js/modules/MenuToggle.js?");

/***/ }),

/***/ "./frontend-js/scripts.js":
/*!********************************!*\
  !*** ./frontend-js/scripts.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_MenuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MenuToggle */ \"./frontend-js/modules/MenuToggle.js\");\n\n\nnew _modules_MenuToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./frontend-js/scripts.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ })

/******/ });