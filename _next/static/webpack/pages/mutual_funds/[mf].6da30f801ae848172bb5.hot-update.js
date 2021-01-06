webpackHotUpdate_N_E("pages/mutual_funds/[mf]",{

/***/ "./src/pages/mutual_funds/[mf].js":
/*!****************************************!*\
  !*** ./src/pages/mutual_funds/[mf].js ***!
  \****************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _components_diff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/diff */ \"./src/components/diff.js\");\n/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/chart */ \"./src/components/chart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/mutual_funds/[mf].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar MF = function MF(_ref) {\n  _s();\n\n  var caption = _ref.caption,\n      mutual_funds = _ref.mutual_funds,\n      portfolio = _ref.portfolio;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  if (router.isFallback) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 16\n      }\n    }, \"loading...\");\n  }\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    ml: 10,\n    maxW: \"6xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    fontSize: \"xl\",\n    ml: 5,\n    color: \"gray.500\",\n    as: \"b\",\n    mt: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, caption, \"'s portfolio changes in November, 2020.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    orientation: \"horizontal\",\n    colorScheme: \"teal\",\n    mb: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    ml: 10,\n    pd: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"], {\n    variant: \"enclosed\",\n    colorScheme: \"teal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabList\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 29\n    }\n  }, \"Changes\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Tab\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 29\n    }\n  }, \"Current Portfolio\")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabPanels\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabPanel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  }, __jsx(_components_diff__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    caption: caption,\n    mutual_funds: mutual_funds,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 33\n    }\n  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"TabPanel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 29\n    }\n  }, __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    portfolio: portfolio,\n    caption: caption,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 33\n    }\n  })))))));\n}; // This function gets called at build time\n\n\n_s(MF, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = MF;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MF);\n\nvar _c;\n\n$RefreshReg$(_c, \"MF\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL211dHVhbF9mdW5kcy9bbWZdLmpzP2NjYzMiXSwibmFtZXMiOlsiTUYiLCJjYXB0aW9uIiwibXV0dWFsX2Z1bmRzIiwicG9ydGZvbGlvIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsRUFBRSxHQUFHLFNBQUxBLEVBQUssT0FBMEM7QUFBQTs7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLFlBQThCLFFBQTlCQSxZQUE4QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDakQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFJRCxNQUFNLENBQUNFLFVBQVgsRUFBdUI7QUFDbkIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0g7O0FBRUQsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU8sTUFBRSxFQUFFLEVBQVg7QUFBZSxRQUFJLEVBQUMsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBTSxZQUFRLEVBQUMsSUFBZjtBQUFvQixNQUFFLEVBQUUsQ0FBeEI7QUFBMkIsU0FBSyxFQUFDLFVBQWpDO0FBQTRDLE1BQUUsRUFBQyxHQUEvQztBQUFtRCxNQUFFLEVBQUUsRUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxPQURMLDRDQURKLEVBS0ksTUFBQyx3REFBRDtBQUFTLGVBQVcsRUFBQyxZQUFyQjtBQUFrQyxlQUFXLEVBQUMsTUFBOUM7QUFBcUQsTUFBRSxFQUFFLENBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU9JLE1BQUMsb0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRDtBQUFNLFdBQU8sRUFBQyxVQUFkO0FBQXlCLGVBQVcsRUFBQyxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosQ0FESixFQUtJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFDSSxXQUFPLEVBQUVBLE9BRGI7QUFFSSxnQkFBWSxFQUFFQyxZQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFDSSxhQUFTLEVBQUVDLFNBRGY7QUFFSSxXQUFPLEVBQUVGLE9BRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosQ0FMSixDQURKLENBUEosQ0FESixDQURKO0FBa0NILENBekNELEMsQ0EyQ0E7OztHQTNDTUQsRTtVQUNhSyxxRDs7O0tBRGJMLEU7O0FBaUZTQSxpRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9tdXR1YWxfZnVuZHMvW21mXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGFicyxcbiAgICBUYWJMaXN0LFxuICAgIFRleHQsXG4gICAgVGFiLFxuICAgIFRhYlBhbmVsLFxuICAgIFRhYlBhbmVscyxcbiAgICBTdGFjayxcbiAgICBEaXZpZGVyLFxuICAgIEJveCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgRGlmZlBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWZmJztcbmltcG9ydCBDaGFydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoYXJ0JztcbmltcG9ydCBHZXRNRlN0b2NrcyBmcm9tICcuLi8uLi9saWIvbWZfc3RvY2tzJztcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBNRiA9ICh7IGNhcHRpb24sIG11dHVhbF9mdW5kcywgcG9ydGZvbGlvIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8U3RhY2sgbWw9ezEwfSBtYXhXPVwiNnhsXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIG1sPXs1fSBjb2xvcj1cImdyYXkuNTAwXCIgYXM9XCJiXCIgbXQ9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAge2NhcHRpb259J3MgcG9ydGZvbGlvIGNoYW5nZXMgaW4gTm92ZW1iZXIsIDIwMjAuXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY29sb3JTY2hlbWU9XCJ0ZWFsXCIgbWI9ezR9IC8+XG5cbiAgICAgICAgICAgICAgICA8Qm94IG1sPXsxMH0gcGQ9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYnMgdmFyaWFudD1cImVuY2xvc2VkXCIgY29sb3JTY2hlbWU9XCJ0ZWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiPkNoYW5nZXM8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiPkN1cnJlbnQgUG9ydGZvbGlvPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpZmZQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtjYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0dWFsX2Z1bmRzPXttdXR1YWxfZnVuZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydGZvbGlvPXtwb3J0Zm9saW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtjYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVscz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuICAgIGxldCBmdW5kcyA9IGF3YWl0IHByaXNtYS5tdXR1YWxfZnVuZHMuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgbW9udGg6IHtcbiAgICAgICAgICAgICAgICBlcXVhbHM6IDlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGlzdGluY3Q6IFsnZnVuZF9ob3VzZSddXG4gICAgfSk7XG5cbiAgICBsZXQgcGF0aHMgPSBbXTtcbiAgICBmdW5kcy5tYXAoKGZ1bmQpID0+IHtcbiAgICAgICAgcGF0aHMucHVzaCh7XG4gICAgICAgICAgICBwYXJhbXM6IHsgbWY6IGZ1bmQuZnVuZF9ob3VzZSB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHM6IHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IE1GID0gcGFyYW1zLm1mO1xuXG4gICAgY29uc29sZS5sb2coYEdldHRpbmcgZGlmZiBmb3IgJHtNRn1gKTtcblxuICAgIGxldCBwcm9wcyA9IGF3YWl0IEdldE1GU3RvY2tzKE1GLCAxMSwgMjApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTUY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/mutual_funds/[mf].js\n");

/***/ })

})