webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Head/index.js":
/*!**********************************!*\
  !*** ./components/Head/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/Head/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/andreacasino/Documents/Projects/personal-page/components/Head/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import icon from './icon180x180.png';



var Head = function Head(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), description ? __jsx("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }) : null);
};

Head.propTypes = {
  /*
  The title of the page
  */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /*
  Short description of the document (limit to 150 characters)
  */
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Head.defaultProps = {
  description: null
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ })

})
//# sourceMappingURL=index.js.7d3545a157e0e8161d9c.hot-update.js.map