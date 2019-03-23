webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/getClubEvents.ts":
/*!*************************************!*\
  !*** ./components/getClubEvents.ts ***!
  \*************************************/
/*! exports provided: getClubEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClubEvents", function() { return getClubEvents; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


function getClubEvents(setEvents) {
  fetch('https://api.apify.com/v2/datasets/PdumrJ2iWNSc8HCcY/items?format=json&clean=1').then(function (res) {
    return res.json();
  }).then(function (out) {
    return out.map(function (data) {
      setEvents(function (events) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, events, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.club, data));
      });
    });
  });
}

/***/ })

})
//# sourceMappingURL=index.js.2f01eb7973cc4375795f.hot-update.js.map