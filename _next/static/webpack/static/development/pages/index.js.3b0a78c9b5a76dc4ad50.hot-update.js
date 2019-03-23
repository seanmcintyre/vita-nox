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
  fetch('https://api.apify.com/v2/actor-tasks/YDocxufNmzfg9xrr7/runs/last/dataset/items?token=YuDiJjt4YRgyzP3Exzpkjkaqe&format=json&clean=1').then(function (res) {
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
//# sourceMappingURL=index.js.3b0a78c9b5a76dc4ad50.hot-update.js.map