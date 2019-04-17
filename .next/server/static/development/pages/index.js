module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/about/team.tsx":
/*!**********************************!*\
  !*** ./component/about/team.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\about\\team.tsx";


var TeamPage = function TeamPage(w) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "colorlib-trainers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-md-offset-2 text-center colorlib-heading animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Our Experienced Professor"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, w.map(function (value, index) {
    return (// <div className="col-md-3 col-sm-3 animate-box">
      // 	<div className="trainers-entry">
      // 		<div className="trainer-img" style={{backgroundImage : 'url(/static/images/person1.jpg)'}} ></div>
      // 		<div className="desc">
      // 			<h3>Olivia Young</h3>
      // 			<span>Teacher</span>
      // 		</div>
      // 		<p>Far far away, behind the word mountains, far from the countries Vokalia</p>
      // 		<p className="social"><a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a></p>
      // 	</div>
      // </div>
      // <div className="col-md-3 col-sm-3 animate-box">
      // 	<div className="trainers-entry">
      // 		<div className="trainer-img" style={{backgroundImage : 'url(/static/images/person2.jpg)'}} ></div>
      // 		<div className="desc">
      // 			<h3>Daniel Anderson</h3>
      // 			<span>Professor</span>
      // 		</div>
      // 		<p>Far far away, behind the word mountains, far from the countries Vokalia</p>
      // 		<p className="social"><a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a></p>
      // 	</div>
      // </div>
      // <div className="col-md-3 col-sm-3 animate-box">
      // 	<div className="trainers-entry">
      // 		<div className="trainer-img" style={{backgroundImage : 'url(/static/images/person3.jpg)'}} ></div>
      // 		<div className="desc">
      // 			<h3>David Brook</h3>
      // 			<span>Teacher</span>
      // 		</div>
      // 		<p>Far far away, behind the word mountains, far from the countries Vokalia</p>
      // 		<p className="social"><a href="#">Twitter</a> <a href="#">Facebook</a> <a href="#">Email</a></p>
      // 	</div>
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-md-3 col-sm-3 animate-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "trainers-entry",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "trainer-img",
        style: {
          backgroundImage: 'url(/static/images/person4.jpg)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, value.name), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, value.position)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, value.info), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        className: "social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: value.t_link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Twitter"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: value.f_link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Facebook"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: value.e_link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Email"))))
    );
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamPage);

/***/ }),

/***/ "./component/index/classes.tsx":
/*!*************************************!*\
  !*** ./component/index/classes.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\classes.tsx";


var OurClasses = function OurClasses() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "colorlib-classes colorlib-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-md-offset-2 text-center colorlib-heading animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Available Quiz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-4 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes-img",
    style: {
      backgroundImage: 'url(/static/images/classes-1.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "price text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$450"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Developing Mobile Apps Quiz")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Pointing has no control about the blind texts it is an almost unorthographic life"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-arrow-right3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-4 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes-img",
    style: {
      backgroundImage: 'url(/static/images/classes-2.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "price text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "$450"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Technical Quiz")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Pointing has no control about the blind texts it is an almost unorthographic life"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-arrow-right3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-4 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes-img",
    style: {
      backgroundImage: 'url(/static/images/classes-3.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "price text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "$450"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "General Quiz")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Pointing has no control about the blind texts it is an almost unorthographic life"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-arrow-right3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-4 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes-img",
    style: {
      backgroundImage: 'url(/static/images/classes-4.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "price text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "$450"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Awareness Quiz")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Pointing has no control about the blind texts it is an almost unorthographic life"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-arrow-right3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-4 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes-img",
    style: {
      backgroundImage: 'url(/static/images/classes-5.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "price text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "$450"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Reasoning Quiz")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Pointing has no control about the blind texts it is an almost unorthographic life"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-arrow-right3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-4 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "classes-img",
    style: {
      backgroundImage: 'url(/static/images/classes-6.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "price text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "$450"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Grammar Quiz")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Pointing has no control about the blind texts it is an almost unorthographic life"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-arrow-right3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (OurClasses);

/***/ }),

/***/ "./component/index/courses.tsx":
/*!*************************************!*\
  !*** ./component/index/courses.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\courses.tsx";


var Courses = function Courses() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-4 intro-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "intro-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "one-third color-1 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-market",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Create Online Quiz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "view-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "View More")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "one-third color-2 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-open-book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Online Quiz Store"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "view-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "View More")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "one-third color-3 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "50% off in first selected Quiz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "view-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "View More"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Courses);

/***/ }),

/***/ "./component/index/data.tsx":
/*!**********************************!*\
  !*** ./component/index/data.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\data.tsx";


var Data = function Data() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: "colorlib-counter",
    className: "colorlib-counters",
    style: {
      backgroundImage: 'url(/static/images/img_bg_2.jpg)'
    },
    "data-stellar-background-ratio": "0.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-10 col-md-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 col-sm-6 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "counter-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter js-counter",
    "data-from": "0",
    "data-to": "1539",
    "data-speed": "5000",
    "data-refresh-interval": "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Courses")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 col-sm-6 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "counter-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-student",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter js-counter",
    "data-from": "0",
    "data-to": "3653",
    "data-speed": "5000",
    "data-refresh-interval": "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Students")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 col-sm-6 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "counter-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-professor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter js-counter",
    "data-from": "0",
    "data-to": "2300",
    "data-speed": "5000",
    "data-refresh-interval": "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Teachers")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 col-sm-6 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "counter-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-earth-globe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter js-counter",
    "data-from": "0",
    "data-to": "200",
    "data-speed": "5000",
    "data-refresh-interval": "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "colorlib-counter-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Countries"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ }),

/***/ "./component/index/info.tsx":
/*!**********************************!*\
  !*** ./component/index/info.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\info.tsx";


var Info = function Info() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", {
    id: "colorlib-hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "flexslider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    style: {
      backgroundImage: 'url(/static/images/img_bg_1.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-sm-12 col-md-offset-2 slider-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slider-text-inner text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Best Online Learning System"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn btn-primary btn-lg btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Register Now"))))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    style: {
      backgroundImage: 'url(/static/images/img_bg_2.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-sm-12 col-md-offset-2 slider-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slider-text-inner text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Online Quiz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn btn-primary btn-lg btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Free Trial"))))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    style: {
      backgroundImage: 'url(/static/images/img_bg_3.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-sm-12 col-md-offset-2 slider-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slider-text-inner text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Education is a Key to Success"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn btn-primary btn-lg btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Register Now"))))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    style: {
      backgroundImage: 'url(/static/images/img_bg_4.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-sm-12 col-md-offset-2 slider-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "slider-text-inner text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Build ,Play and Share Fantastic Quizzes"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "btn btn-primary btn-lg btn-learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Register Now"))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./component/index/info_box.tsx":
/*!**************************************!*\
  !*** ./component/index/info_box.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\info_box.tsx";


var InfoBox = function InfoBox() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: "colorlib-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 text-center animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-books",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Create Quiz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Separated they live in Bookmarksgrove right at the coast of the Semantics")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 text-center animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-professor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Take Quiz"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Separated they live in Bookmarksgrove right at the coast of the Semantics")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 text-center animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Answer key"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Separated they live in Bookmarksgrove right at the coast of the Semantics")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 text-center animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "flaticon-diploma",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, " Certificate"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Separated they live in Bookmarksgrove right at the coast of the Semantics")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoBox);

/***/ }),

/***/ "./component/index/news.tsx":
/*!**********************************!*\
  !*** ./component/index/news.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\news.tsx";


var RecentNews = function RecentNews() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "colorlib-blog colorlib-light-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-md-offset-2 text-center colorlib-heading animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Recent News"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-6 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("article", {
    className: "article-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    className: "blog-img",
    style: {
      backgroundImage: 'url(/static/images/blog-1.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "18"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Apr"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Creating Mobile Apps")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Posted by:"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "James Smith")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "f-blog animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    className: "blog-img",
    style: {
      backgroundImage: 'url(/static/images/blog-1.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "How to Create Website in Scratch")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "04 March 2018")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "f-blog animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    className: "blog-img",
    style: {
      backgroundImage: 'url(/static/images/blog-2.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "How to Convert PSD File to HTML File?")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "04 March 2018")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "f-blog animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    className: "blog-img",
    style: {
      backgroundImage: 'url(/static/images/blog-3.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "How to Build Games App in Mobile")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "04 March 2018")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentNews);

/***/ }),

/***/ "./component/index/que.tsx":
/*!*********************************!*\
  !*** ./component/index/que.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\que.tsx";


var QuestionPage = function QuestionPage(w) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "fancy-collapse-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "panel-group",
    id: "accordion",
    role: "tablist",
    "aria-multiselectable": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, w.map(function (value, index) {
    return (//  <div className="panel panel-default">
      //      <div className="panel-heading" role="tab" id="headingOne">
      //          <h4 className="panel-title">
      //              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Why choose us?
      //              </a>
      //          </h4>
      //      </div>
      //      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      //          <div className="panel-body">
      //              <div className="row">
      //                           <div className="col-md-6">
      //                               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
      //                           </div>
      //                           <div className="col-md-6">
      //                               <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      //                           </div>
      //                       </div>
      //          </div>
      //      </div>
      //  </div>
      //  <div className="panel panel-default">
      //      <div className="panel-heading" role="tab" id="headingTwo">
      //          <h4 className="panel-title">
      //              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What we do?
      //              </a>
      //          </h4>
      //      </div>
      //      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      //          <div className="panel-body">
      //              <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      //                         <ul>
      //                             <li>Separated they live in Bookmarksgrove right</li>
      //                             <li>Separated they live in Bookmarksgrove right</li>
      //                         </ul>
      //          </div>
      //      </div>
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "panel panel-default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "panel-heading",
        role: "tab",
        id: value.q_id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
        className: "panel-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        className: "collapsed",
        "data-toggle": "collapse",
        "data-parent": "#accordion",
        href: value.link,
        "aria-expanded": "false",
        "aria-controls": "collapseThree",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, value.que))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        id: value.a_id,
        className: "panel-collapse collapse",
        role: "tabpanel",
        "aria-labelledby": value.q_id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "panel-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, value.data))))
    );
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionPage);

/***/ }),

/***/ "./component/index/testimonial.tsx":
/*!*****************************************!*\
  !*** ./component/index/testimonial.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\testimonial.tsx";


var Testimonial = function Testimonial() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: "colorlib-testimony",
    className: "testimony-img",
    style: {
      backgroundImage: 'url(/static/images/img_bg_2.jpg)'
    },
    "data-stellar-background-ratio": "0.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-md-offset-2 text-center colorlib-heading animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "What Are The Users Says"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-md-offset-2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "owl-carousel1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "testimony-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "testimony-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Sophia Foster"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "figure-img",
    style: {
      backgroundImage: 'url(/static/images/person1.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "testimony-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "testimony-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "John Collins"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "figure-img",
    style: {
      backgroundImage: 'url(/static/images/person2.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "testimony-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "testimony-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Adam Ross"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "figure-img",
    style: {
      backgroundImage: 'url(/static/images/person3.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./component/index/upcoming.tsx":
/*!**************************************!*\
  !*** ./component/index/upcoming.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\index\\upcoming.tsx";


var UpComingEvent = function UpComingEvent() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "colorlib-event",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-md-offset-2 text-center colorlib-heading animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Upcoming Events"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "event-flex row-pb-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "half event-img animate-box",
    style: {
      backgroundImage: 'url(/static/images/event.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "event-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "19"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Apr")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "organizer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Organized by:"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Noah Henderson")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "event.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "We Held Free Training for Basic Programming"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "291 South 21th Street, Suite 721 New York NY 10016")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "event-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "19"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Apr")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "organizer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Organized by:"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Noah Henderson")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "event.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "You're Invited 1st Anniversary of Quizy"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "291 South 21th Street, Suite 721 New York NY 10016")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "event-entry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "19"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Apr")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "organizer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Organized by:"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Noah Henderson")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "event.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Practice Workshop 2018"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "291 South 21th Street, Suite 721 New York NY 10016")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UpComingEvent);

/***/ }),

/***/ "./component/layout.tsx":
/*!******************************!*\
  !*** ./component/layout.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\layout.tsx";



var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Quizy' : _ref$title,
      _ref$page = _ref.page,
      page = _ref$page === void 0 ? "Home" : _ref$page;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "description",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "keywords",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "author",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    property: "og:title",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    property: "og:image",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    property: "og:url",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    property: "og:site_name",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    property: "og:description",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "twitter:title",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "twitter:image",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "twitter:url",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "twitter:card",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:400,700,800",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    href: "https://fonts.googleapis.com/css?family=Playfair+Display:400,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/animate.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/icomoon.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/bootstrap.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/magnific-popup.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/flexslider.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/owl.carousel.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/owl.theme.default.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/fonts/flaticon/font/flaticon.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
    rel: "stylesheet",
    href: "/static/css/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/modernizr-2.6.2.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/respond.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "colorlib-loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
    className: "colorlib-nav",
    role: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "upper-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-xs-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Welcome to Quizy")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-xs-6 col-md-push-2 text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "colorlib-social-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-dribbble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "btn-apply",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Apply Now")))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "top-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-2 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: "colorlib-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/static/images/logo.png",
    alt: "logo",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), "Quizy"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-10 text-right menu-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "btn-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Login"))))))))), children, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: "colorlib-subscribe",
    className: "subs-img",
    style: {
      backgroundImage: 'url(/static/images/img_bg_2.jpg)'
    },
    "data-stellar-background-ratio": "0.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-8 col-md-offset-2 text-center colorlib-heading animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Subscribe Newsletter"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Subscribe our newsletter and get latest update"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-6 col-md-offset-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    className: "form-inline qbstp-header-subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-three-forth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    className: "form-control",
    id: "email",
    placeholder: "Enter your email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-one-third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    type: "submit",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Subscribe Now")))))))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", {
    id: "colorlib-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row row-pb-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 colorlib-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "About Quizy"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "colorlib-social-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-dribbble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 colorlib-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Quick Links"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "colorlib-footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), " About Us")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), " Contact"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 colorlib-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Recent Post"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "f-blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    className: "blog-img",
    style: {
      backgroundImage: 'url(/static/images/blog-1.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Creating Mobile Apps")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "18 April 2018")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "f-blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    className: "blog-img",
    style: {
      backgroundImage: 'url(/static/images/blog-2.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Creating Mobile Apps")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "18 April 2018")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "f-blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    className: "blog-img",
    style: {
      backgroundImage: 'url(/static/images/blog-3.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "blog.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Creating Mobile Apps")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "18 April 2018"))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-3 colorlib-widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Contact Info"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "colorlib-footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "291 South 21th Street, ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), " Suite 721 New York NY 10016"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "tel://1234567920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), " + 1235 2355 98")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "mailto:info@yoursite.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), " info@yoursite.com")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "http://luxehotel.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-location4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), " yourwebsite.com")))))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "gototop js-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    className: "js-gotop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-arrow-up2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/jquery.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/jquery.easing.1.3.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/bootstrap.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/jquery.waypoints.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/jquery.stellar.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/jquery.flexslider-min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/owl.carousel.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/jquery.magnific-popup.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/magnific-popup-options.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/jquery.countTo.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("script", {
    src: "/static/js/main.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./data/index.ts":
/*!***********************!*\
  !*** ./data/index.ts ***!
  \***********************/
/*! exports provided: index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
var index = {
  title: 'Welcome to Quizy',
  info: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
  team: [{
    name: 'Olivia Young',
    position: 'Professor',
    info: 'Far far away, behind the word mountains, far from the countries Vokalia',
    image: 'url(/static/images/person4.jpg)',
    t_link: '#',
    f_link: '#',
    e_link: '#'
  }, {
    name: 'Olivia Young',
    position: 'Professor',
    info: 'Far far away, behind the word mountains, far from the countries Vokalia',
    image: '',
    t_link: '#',
    f_link: '#',
    e_link: '#'
  }, {
    name: 'Olivia Young',
    position: 'Professor',
    info: 'Far far away, behind the word mountains, far from the countries Vokalia',
    image: '',
    t_link: '#',
    f_link: '#',
    e_link: '#'
  }, {
    name: 'Olivia Young',
    position: 'Professor',
    info: 'Far far away, behind the word mountains, far from the countries Vokalia',
    image: '',
    t_link: '#',
    f_link: '#',
    e_link: '#'
  }],
  que: [{
    q_id: 'headingOne',
    a_id: 'collapseOne',
    link: '#collapseOne',
    que: 'Why choose us?',
    data: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  }, {
    q_id: 'headingTwo',
    a_id: 'collapseTwo',
    link: '#collapseTwo',
    que: 'What we Do?',
    data: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  }, {
    q_id: 'headingThree',
    a_id: 'collapseThree',
    link: '#collapseThree',
    que: 'Offer Services',
    data: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  }]
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


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
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/layout */ "./component/layout.tsx");
/* harmony import */ var _component_index_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/index/info */ "./component/index/info.tsx");
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/index */ "./data/index.ts");
/* harmony import */ var _component_about_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/about/team */ "./component/about/team.tsx");
/* harmony import */ var _component_index_courses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/index/courses */ "./component/index/courses.tsx");
/* harmony import */ var _component_index_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/index/data */ "./component/index/data.tsx");
/* harmony import */ var _component_index_classes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/index/classes */ "./component/index/classes.tsx");
/* harmony import */ var _component_index_testimonial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/index/testimonial */ "./component/index/testimonial.tsx");
/* harmony import */ var _component_index_upcoming__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/index/upcoming */ "./component/index/upcoming.tsx");
/* harmony import */ var _component_index_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/index/news */ "./component/index/news.tsx");
/* harmony import */ var _component_index_info_box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/index/info_box */ "./component/index/info_box.tsx");
/* harmony import */ var _component_index_que__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/index/que */ "./component/index/que.tsx");


var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\pages\\index.tsx";














var IndexPage = function IndexPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    id: "colorlib-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_courses__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "about-desc animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.info, "."), Object(_component_index_que__WEBPACK_IMPORTED_MODULE_14__["default"])(props.que)))))), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_info_box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_data__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_classes__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_testimonial__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), Object(_component_about_team__WEBPACK_IMPORTED_MODULE_6__["default"])(props.team), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_upcoming__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_index_news__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })));
};

IndexPage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _data_index__WEBPACK_IMPORTED_MODULE_5__["index"]);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Fuzzy Cloud\quizy_front\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map