webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Weekend.tsx":
/*!********************************!*\
  !*** ./components/Weekend.tsx ***!
  \********************************/
/*! exports provided: Weekend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weekend", function() { return Weekend; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/mcintyres/Code/nox/vita-nox/components/Weekend.tsx";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex-grow: 1;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  margin: 1rem;\n  border-radius: 0.25rem;\n  padding: 1rem;\n  min-height: 30rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Weekend = function Weekend(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "This Weekend"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WeekendWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, [5, 6, 7].map(function (day) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WeekendNight, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Friday ", nextDate(day)));
  })));
};

var nextDate = function nextDate(dayNum) {
  return new Date().getDate() + (dayNum - 1 - new Date().getDay() + 7) % 7 + 1;
};

var WeekendWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var WeekendNight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.fcef97bd533a3f141dcc.hot-update.js.map