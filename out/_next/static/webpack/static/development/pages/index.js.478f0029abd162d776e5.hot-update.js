webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/Header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/andreacasino/Documents/Projects/personal-page/components/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  var linkData = ['About', 'Work', 'Contact Me'];
  var links = linkData.map(function (link, idx) {
    return __jsx("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link, idx === page && _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.selectedLink),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("a", {
      href: "whatever",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, link));
  });
  return __jsx("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "ANDREA CASINO"), __jsx("ul", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, links));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.478f0029abd162d776e5.hot-update.js.map