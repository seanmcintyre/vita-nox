webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/App.tsx":
/*!***********************!*\
  !*** ./pages/App.tsx ***!
  \***********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../facebook */ "./facebook/index.ts");
/* harmony import */ var _Venues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Venues */ "./pages/Venues.tsx");


var _jsxFileName = "/Users/mcintyres/Code/nox/vita-nox/pages/App.tsx";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 2rem 4rem;\n  height: 100vw;\n  overflow-y: scroll;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: calc(100% - 10rem);\n  height: calc(100vh - 10rem);\n  position: absolute;\n  top: 5rem;\n  left: 5rem;\n  border-radius: 0.5rem;\n  z-index: -1;\n  opacity: 0.2;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

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





var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      events = _useState2[0],
      setEvents = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // clubs.forEach(club => getClubEvents(FB, setEvents, club));
    Object(_facebook__WEBPACK_IMPORTED_MODULE_4__["getClubEvents"])(setEvents);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Background, {
    src: "https://media0.giphy.com/media/xT9IgjHkJczyL3Ujle/giphy.gif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Events, {
    events: events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

var Events = function Events(_ref) {
  var events = _ref.events;
  return events ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EventsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Weekend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WeekendNight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Friday ", nextDate(5))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WeekendNight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Saturday ", nextDate(6))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WeekendNight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Sunday ", nextDate(7)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Venues__WEBPACK_IMPORTED_MODULE_5__["Venues"], {
    events: events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "loading...");
};

var nextDate = function nextDate(dayNum) {
  return new Date().getDate() + (dayNum - 1 - new Date().getDay() + 7) % 7 + 1;
};

var Weekend = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var WeekendNight = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Background = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject3());
var EventsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());

/***/ })

})
//# sourceMappingURL=index.js.0ca0eb9be0483df8192b.hot-update.js.map