webpackHotUpdate_N_E("pages/mutual_funds/[mf]",{

/***/ "./src/pages/mutual_funds/[mf].js":
/*!****************************************!*\
  !*** ./src/pages/mutual_funds/[mf].js ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _components_diff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/diff */ \"./src/components/diff.js\");\n/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/chart */ \"./src/components/chart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/mutual_funds/[mf].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar MF = function MF(_ref) {\n  _s();\n\n  var caption = _ref.caption,\n      mutual_funds = _ref.mutual_funds,\n      portfolio = _ref.portfolio;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  if (router.isFallback) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 16\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    dirction: \"column\",\n    justify: \"left\",\n    as: \"main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    fontSize: \"xl\",\n    ml: 5,\n    color: \"gray.500\",\n    as: \"b\",\n    mt: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, caption, \"'s portfolio changes in November, 2020.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    orientation: \"horizontal\",\n    colorScheme: \"teal\",\n    mb: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    ml: 10,\n    pd: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"], {\n    variant: \"enclosed\",\n    colorScheme: \"teal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabList\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 29\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 33\n    }\n  }, \"Changes\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 33\n    }\n  }, \"Current Portfolio\")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabPanels\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 29\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabPanel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 33\n    }\n  }, __jsx(_components_diff__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    caption: caption,\n    mutual_funds: mutual_funds,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 37\n    }\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabPanel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 33\n    }\n  }, __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    portfolio: portfolio,\n    caption: caption,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 37\n    }\n  })))))));\n}; // This function gets called at build time\n\n\n_s(MF, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = MF;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MF);\n\nvar _c;\n\n$RefreshReg$(_c, \"MF\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL211dHVhbF9mdW5kcy9bbWZdLmpzP2NjYzMiXSwibmFtZXMiOlsiTUYiLCJjYXB0aW9uIiwibXV0dWFsX2Z1bmRzIiwicG9ydGZvbGlvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsRUFBRSxHQUFHLFNBQUxBLEVBQUssT0FBMEM7QUFBQTs7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDakQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFJRCxNQUFNLENBQUNFLFVBQVgsRUFBdUI7QUFDbkIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0g7O0FBRUQsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQU0sWUFBUSxFQUFDLFFBQWY7QUFBd0IsV0FBTyxFQUFDLE1BQWhDO0FBQXVDLE1BQUUsRUFBQyxNQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxxREFBRDtBQUFNLFlBQVEsRUFBQyxJQUFmO0FBQW9CLE1BQUUsRUFBRSxDQUF4QjtBQUEyQixTQUFLLEVBQUMsVUFBakM7QUFBNEMsTUFBRSxFQUFDLEdBQS9DO0FBQW1ELE1BQUUsRUFBRSxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tMLE9BREwsNENBRFIsRUFLUSxNQUFDLHdEQUFEO0FBQ0ksZUFBVyxFQUFDLFlBRGhCO0FBRUksZUFBVyxFQUFDLE1BRmhCO0FBR0ksTUFBRSxFQUFFLENBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxSLEVBV1EsTUFBQyxvREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQU0sV0FBTyxFQUFDLFVBQWQ7QUFBeUIsZUFBVyxFQUFDLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixDQURKLEVBS0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUNJLFdBQU8sRUFBRUEsT0FEYjtBQUVJLGdCQUFZLEVBQUVDLFlBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBT0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUNJLGFBQVMsRUFBRUMsU0FEZjtBQUVJLFdBQU8sRUFBRUYsT0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixDQUxKLENBREosQ0FYUixDQURKLENBREo7QUFzQ0gsQ0E3Q0QsQyxDQStDQTs7O0dBL0NNRCxFO1VBQ2FLLHFEOzs7S0FEYkwsRTs7QUFxRlNBLGlFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL211dHVhbF9mdW5kcy9bbWZdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBUYWJzLFxuICAgIFRhYkxpc3QsXG4gICAgVGV4dCxcbiAgICBUYWIsXG4gICAgVGFiUGFuZWwsXG4gICAgVGFiUGFuZWxzLFxuICAgIEZsZXgsXG4gICAgRGl2aWRlcixcbiAgICBCb3gsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IERpZmZQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlmZic7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGFydCc7XG5pbXBvcnQgR2V0TUZTdG9ja3MgZnJvbSAnLi4vLi4vbGliL21mX3N0b2Nrcyc7XG5cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgTUYgPSAoeyBjYXB0aW9uLCBtdXR1YWxfZnVuZHMsIHBvcnRmb2xpbyB9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEZsZXggZGlyY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5PVwibGVmdFwiIGFzPVwibWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgbWw9ezV9IGNvbG9yPVwiZ3JheS41MDBcIiBhcz1cImJcIiBtdD17MTB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcHRpb259J3MgcG9ydGZvbGlvIGNoYW5nZXMgaW4gTm92ZW1iZXIsIDIwMjAuXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1sPXsxMH0gcGQ9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMgdmFyaWFudD1cImVuY2xvc2VkXCIgY29sb3JTY2hlbWU9XCJ0ZWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWI+Q2hhbmdlczwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiPkN1cnJlbnQgUG9ydGZvbGlvPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWZmUGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb249e2NhcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0dWFsX2Z1bmRzPXttdXR1YWxfZnVuZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0Zm9saW89e3BvcnRmb2xpb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtjYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVscz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbiAgICBsZXQgZnVuZHMgPSBhd2FpdCBwcmlzbWEubXV0dWFsX2Z1bmRzLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIG1vbnRoOiB7XG4gICAgICAgICAgICAgICAgZXF1YWxzOiA5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3RpbmN0OiBbJ2Z1bmRfaG91c2UnXVxuICAgIH0pO1xuXG4gICAgbGV0IHBhdGhzID0gW107XG4gICAgZnVuZHMubWFwKChmdW5kKSA9PiB7XG4gICAgICAgIHBhdGhzLnB1c2goe1xuICAgICAgICAgICAgcGFyYW1zOiB7IG1mOiBmdW5kLmZ1bmRfaG91c2UgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCBNRiA9IHBhcmFtcy5tZjtcblxuICAgIGNvbnNvbGUubG9nKGBHZXR0aW5nIGRpZmYgZm9yICR7TUZ9YCk7XG5cbiAgICBsZXQgcHJvcHMgPSBhd2FpdCBHZXRNRlN0b2NrcyhNRiwgMTEsIDIwKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiBwcm9wc1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1GO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/mutual_funds/[mf].js\n");

/***/ })

})