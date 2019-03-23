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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/mcintyres/Code/nox/vita-nox/components/Weekend.tsx";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* flex-grow: 1; */\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  margin: 1rem;\n  border-radius: 0.25rem;\n  padding: 1rem;\n  min-height: 30rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* display: flex; */\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Weekend = function Weekend(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "This Weekend"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WeekendWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, [5, 6, 7].filter(function (day) {
    return day;
  }).map(function (day) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WeekendNight, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, dayName[day], " ", nextDate(day)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(data).map(function (venue) {
      return data[venue].events.length > 0 && data[venue].events && data[venue].events.filter(function (event) {
        return event.time.includes(nextDate(day));
      }).map(function (event) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
          style: {
            color: 'rgb(220,50,70)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, venue), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, event.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            color: 'rgb(50,110,250)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, event.lineup), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }));
      });
    })));
  })));
};

var nextDate = function nextDate(dayNum) {
  return new Date().getDate() + (dayNum - 1 - new Date().getDay() + 7) % 7 + 1;
};

var WeekendWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var WeekendNight = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var dayName = {
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
};

/***/ })

})
//# sourceMappingURL=index.js.8b258225773c472df2ac.hot-update.js.map