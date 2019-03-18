webpackHotUpdate("static/development/pages/index.js",{

/***/ "./facebook/index.ts":
/*!***************************!*\
  !*** ./facebook/index.ts ***!
  \***************************/
/*! exports provided: getClubEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClubEvents", function() { return getClubEvents; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


// export function initFBSDK() {
//   if ((window as any).FB === undefined) {
//     console.log('FB undefined -> provide callback');
//     (window as any).fbAsyncInit = function() {
//       initialize();
//     };
//   } else {
//     console.log('FB defined -> call init right away');
//     initialize();
//   }
//   function initialize() {
//     (window as any).FB.init({
//       appId: '2078600758914129',
//       cookie: true,
//       xfbml: true,
//       version: 'v3.2',
//     });
//   }
// }
// export function getEvents(setEvents) {
//   getClubEvents(FB, setEvents, 'BossaNovaCivicClub');
//   getClubEvents(FB, setEvents, 'moodringnyc');
//   getClubEvents(FB, setEvents, 'nowadaysnyc');
//   getClubEvents(FB, setEvents, 'elsewherespace');
// }
function getClubEvents(setEvents) {
  // FB.api(`/${club}/events`, 'GET', settings, (response: any) => {
  //   const newEvents = parseEvents(response, club);
  //   setEvents(events => ({
  //     ...events,
  //     [club]: newEvents,
  //   }));
  // });
  fetch('https://api.apify.com/v2/datasets/PdumrJ2iWNSc8HCcY/items?format=json&clean=1').then(function (res) {
    return res.json();
  }).then(function (out) {
    return out.map(function (data) {
      setEvents(function (events) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, events, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.club, data));
      });
    });
  });
} // function parseEvents(response: any, venue: any) {
//   const events = response.data
//     .sort(
//       (a: any, b: any) =>
//         (new Date(a.start_time) as any) -
//         (new Date(b.start_time) as any),
//     )
//     .map((event: any) => ({
//       ...event,
//       times: {
//         start: new Date(Date.parse(event.start_time)),
//         end: new Date(Date.parse(event.end_time)),
//       },
//     }));
//   console.log(`~*~*~ ${venue} ~*~*~`);
//   console.log('events: ', events);
//   return events;
//   // console.log('paging: ', response.paging);
// }
// const settings = {
//   fields: 'name,start_time,end_time,event_times,id',
//   limit: '50',
//   time_filter: 'upcoming',
// };

/***/ })

})
//# sourceMappingURL=index.js.cac5aa27afbf8cd70dd1.hot-update.js.map