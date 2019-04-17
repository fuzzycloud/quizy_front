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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/contact/detail.tsx":
/*!**************************************!*\
  !*** ./component/contact/detail.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\contact\\detail.tsx";


var Contact_detail = function Contact_detail(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-10 col-md-offset-1 animate-box",
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
  }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "contact-info-wrap-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "con-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-location-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), " ", props.address)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "con-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-phone3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "tel://1234567920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.contact_no))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "con-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-paperplane",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "mailto:info@yoursite.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.email))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "con-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "icon-globe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.website)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact_detail);

/***/ }),

/***/ "./component/contact/form.tsx":
/*!************************************!*\
  !*** ./component/contact/form.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\contact\\form.tsx";


var Form = function Form() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-10 col-md-offset-1 animate-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Message Us"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    action: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    id: "fname",
    className: "form-control",
    placeholder: "Your firstname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    id: "lname",
    className: "form-control",
    placeholder: "Your lastname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    id: "email",
    className: "form-control",
    placeholder: "Your email address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    id: "subject",
    className: "form-control",
    placeholder: "Your subject of this message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", {
    name: "message",
    id: "message",
    className: "form-control",
    placeholder: "Say something about us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "submit",
    value: "Send Message",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./component/contact/info.tsx":
/*!************************************!*\
  !*** ./component/contact/info.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\component\\contact\\info.tsx";


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
      backgroundImage: 'url(/static/images/img_bg_2.jpg)'
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
    className: "col-md-6 col-sm-12 col-md-offset-3 slider-text",
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
  }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Home"), " | Contact"))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

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

/***/ "./data/contact.ts":
/*!*************************!*\
  !*** ./data/contact.ts ***!
  \*************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
var contact = {
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  website: 'yourwebsite.com',
  contact_no: '00 (440) 9865 562',
  email: 'support@colorlib.com'
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

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
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
/* harmony import */ var _component_contact_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/contact/info */ "./component/contact/info.tsx");
/* harmony import */ var _component_contact_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/contact/form */ "./component/contact/form.tsx");
/* harmony import */ var _data_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/contact */ "./data/contact.ts");
/* harmony import */ var _component_contact_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/contact/detail */ "./component/contact/detail.tsx");


var _jsxFileName = "F:\\Fuzzy Cloud\\quizy_front\\pages\\contact.tsx";







var ContactPage = function ContactPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_contact_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    id: "colorlib-contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, Object(_component_contact_detail__WEBPACK_IMPORTED_MODULE_7__["default"])(props), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_component_contact_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))))));
};

ContactPage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _data_contact__WEBPACK_IMPORTED_MODULE_6__["contact"]);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/contact.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Fuzzy Cloud\quizy_front\pages\contact.tsx */"./pages/contact.tsx");


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
//# sourceMappingURL=contact.js.map