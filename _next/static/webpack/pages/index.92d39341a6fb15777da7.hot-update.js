webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar TableinTableComp = function TableinTableComp(_ref) {\n  var fundHouse = _ref.fundHouse;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 5,\n    minW: 4,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, fundHouse.change_percentage_aum, '%'), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 15,\n    minW: 15,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, fundHouse.change_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat(fundHouse.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 25\n    }\n  }, fundHouse.fund_name)))));\n};\n\n_c = TableinTableComp;\n\nvar LiComp = function LiComp(_ref2) {\n  var _stock$fundHouses$;\n\n  var stock = _ref2.stock;\n  var numRows = stock.fundHouses.length;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, stock.stock_name), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, stock.industry), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat((_stock$fundHouses$ = stock.fundHouses[0]) === null || _stock$fundHouses$ === void 0 ? void 0 : _stock$fundHouses$.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 25\n    }\n  }, numRows)))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 29\n    }\n  }, \"AUM%\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 29\n    }\n  }, \"Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 29\n    }\n  }, \"Fund\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }, stock.fundHouses.map(function (fundHouse) {\n    return __jsx(TableinTableComp, {\n      key: fundHouse.fund_house,\n      fundHouse: fundHouse,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 29\n      }\n    });\n  })))));\n};\n\n_c2 = LiComp;\n\nvar IndexPage = function IndexPage(_ref3) {\n  var stocks = _ref3.stocks;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    direction: \"column\",\n    align: \"left\",\n    justify: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    pd: 10,\n    spacing: 3,\n    ml: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    fontSize: \"2xl\",\n    textColor: \"gray.600\",\n    mt: 10,\n    ml: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, \"We track the best of mutual funds and filter out the stocks that they have added in the last month.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    orientation: \"horizontal\",\n    colorScheme: \"teal\",\n    mb: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    mt: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    fontSize: \"md\",\n    textColor: \"gray.600\",\n    mb: 5,\n    ml: 6,\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 25\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the mutual fund-house name to get more details about their portfolio.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    fontSize: \"md\",\n    textColor: \"gray.600\",\n    mb: 4,\n    ml: 5,\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 25\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the no,of fund-house count to get more details about one of the mutaul fund-house that has entered the stock.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    colorScheme: \"teal\",\n    textColor: \"gray.600\",\n    textAlign: \"match-parent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 29\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 33\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 37\n    }\n  }, \"Stock Name\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 37\n    }\n  }, \"Industry\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 37\n    }\n  }, \"No,of MFs\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 37\n    }\n  }, \"Mutual Funds\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 29\n    }\n  }, Object.entries(stocks.entry).map(function (_ref4) {\n    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n        isin = _ref5[0],\n        stock = _ref5[1];\n\n    return __jsx(LiComp, {\n      key: isin,\n      stock: stock,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 41\n      }\n    });\n  })))))));\n};\n\n_c3 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TableinTableComp\");\n$RefreshReg$(_c2, \"LiComp\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiVGFibGVpblRhYmxlQ29tcCIsImZ1bmRIb3VzZSIsImNoYW5nZV9wZXJjZW50YWdlX2F1bSIsImNoYW5nZV9xdWFudGl0eSIsImZ1bmRfaG91c2UiLCJmdW5kX25hbWUiLCJMaUNvbXAiLCJzdG9jayIsIm51bVJvd3MiLCJmdW5kSG91c2VzIiwibGVuZ3RoIiwic3RvY2tfbmFtZSIsImluZHVzdHJ5IiwibWFwIiwiSW5kZXhQYWdlIiwic3RvY2tzIiwiT2JqZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaXNpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFHQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN4QyxTQUNJLE1BQUMsbURBQUQ7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFJLEtBQUMsRUFBRSxDQUFQO0FBQVUsUUFBSSxFQUFFLENBQWhCO0FBQW1CLGFBQVMsRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFNBQVMsQ0FBQ0MscUJBRGYsRUFFSyxHQUZMLENBREosRUFLSSxNQUFDLG1EQUFEO0FBQUksS0FBQyxFQUFFLEVBQVA7QUFBVyxRQUFJLEVBQUUsRUFBakI7QUFBcUIsYUFBUyxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsU0FBUyxDQUFDRSxlQURmLENBTEosRUFRSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLDBCQUFt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REo7QUFBQSxHQURILENBREwsQ0FyQ0osQ0F2Q0osQ0FaSixDQURKLENBREosQ0FESjtBQXdHSCxDQXpHRDs7TUFBTU8sUzs7QUE4SlNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBUZXh0LFxuICAgIFN0YWNrLFxuICAgIERpdmlkZXIsXG4gICAgSGVhZGluZyxcbiAgICBCb3gsXG4gICAgRmxleCxcbiAgICBUYWJsZSxcbiAgICBUcixcbiAgICBUZCxcbiAgICBUYm9keSxcbiAgICBUaGVhZCxcbiAgICBUaFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5jb25zdCBUYWJsZWluVGFibGVDb21wID0gKHsgZnVuZEhvdXNlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VHIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPFRkIHc9ezV9IG1pblc9ezR9IHRleHRBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICB7ZnVuZEhvdXNlLmNoYW5nZV9wZXJjZW50YWdlX2F1bX1cbiAgICAgICAgICAgICAgICB7JyUnfVxuICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgIDxUZCB3PXsxNX0gbWluVz17MTV9IHRleHRBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICB7ZnVuZEhvdXNlLmNoYW5nZV9xdWFudGl0eX1cbiAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICA8VGQgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbXV0dWFsX2Z1bmRzLyR7ZnVuZEhvdXNlLmZ1bmRfaG91c2V9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHU+e2Z1bmRIb3VzZS5mdW5kX25hbWV9PC91PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgPC9Ucj5cbiAgICApO1xufTtcblxuY29uc3QgTGlDb21wID0gKHsgc3RvY2sgfSkgPT4ge1xuICAgIGNvbnN0IG51bVJvd3MgPSBzdG9jay5mdW5kSG91c2VzLmxlbmd0aDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VHI+XG4gICAgICAgICAgICA8VGQ+e3N0b2NrLnN0b2NrX25hbWV9PC9UZD5cblxuICAgICAgICAgICAgPFRkPntzdG9jay5pbmR1c3RyeX08L1RkPlxuXG4gICAgICAgICAgICA8VGQgZGlzcGxheT17Wyd0YWJsZS1jZWxsJywgJ3RhYmxlLWNlbGwnLCAndGFibGUtY2VsbCcsICdub25lJywgJ25vbmUnXX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9tdXR1YWxfZnVuZHMvJHtzdG9jay5mdW5kSG91c2VzWzBdPy5mdW5kX2hvdXNlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1PntudW1Sb3dzfTwvdT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvVGQ+XG5cbiAgICAgICAgICAgIDxUZCBkaXNwbGF5PXtbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ3RhYmxlLWNlbGwnLCAndGFibGUtY2VsbCddfT5cbiAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDxUaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+QVVNJTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPlF1YW50aXR5PC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+RnVuZDwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgICA8L1RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RvY2suZnVuZEhvdXNlcy5tYXAoKGZ1bmRIb3VzZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZWluVGFibGVDb21wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZnVuZEhvdXNlLmZ1bmRfaG91c2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRIb3VzZT17ZnVuZEhvdXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgPC9Ucj5cbiAgICApO1xufTtcblxuY29uc3QgSW5kZXhQYWdlID0gKHsgc3RvY2tzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJsZWZ0XCIganVzdGlmeT1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2sgcGQ9ezEwfSBzcGFjaW5nPXszfSBtbD17MTB9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiIHRleHRDb2xvcj1cImdyYXkuNjAwXCIgbXQ9ezEwfSBtbD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZSB0cmFjayB0aGUgYmVzdCBvZiBtdXR1YWwgZnVuZHMgYW5kIGZpbHRlciBvdXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9ja3MgdGhhdCB0aGV5IGhhdmUgYWRkZWQgaW4gdGhlIGxhc3QgbW9udGguXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94IG10PXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiZ3JheS42MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1iPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPXs2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXJlIHRoZSBsaXN0IG9mIHN0b2NrcyB0aGF0IHZhcmlvdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXR1YWwgZnVuZHMgaGF2ZSBmcmVzaGx5IGVudGVyZWQgbGFzdCBtb250aC4gQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB0aGUgbXV0dWFsIGZ1bmQtaG91c2UgbmFtZSB0byBnZXQgbW9yZSBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQgdGhlaXIgcG9ydGZvbGlvLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImdyYXkuNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgZm9sbG93aW5nIGFyZSB0aGUgbGlzdCBvZiBzdG9ja3MgdGhhdCB2YXJpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0dWFsIGZ1bmRzIGhhdmUgZnJlc2hseSBlbnRlcmVkIGxhc3QgbW9udGguIENsaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gdGhlIG5vLG9mIGZ1bmQtaG91c2UgY291bnQgdG8gZ2V0IG1vcmUgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IG9uZSBvZiB0aGUgbXV0YXVsIGZ1bmQtaG91c2UgdGhhdCBoYXMgZW50ZXJlZCB0aGUgc3RvY2suXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiZ3JheS42MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cIm1hdGNoLXBhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+U3RvY2sgTmFtZTwvVGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5JbmR1c3RyeTwvVGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vLG9mIE1Gc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXV0dWFsIEZ1bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhzdG9ja3MuZW50cnkpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbaXNpbiwgc3RvY2tdKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpQ29tcCBrZXk9e2lzaW59IHN0b2NrPXtzdG9ja30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gICAgbGV0IGZ1bmRzID0gYXdhaXQgcHJpc21hLm1mX2RpZmYuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgY3VycmVudF9tb250aDoge1xuICAgICAgICAgICAgICAgIGVxdWFsczogMTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeToge1xuICAgICAgICAgICAgY2hhbmdlX21hcmtldF92YWx1ZTogJ2Rlc2MnXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBzdG9ja3MgPSB7XG4gICAgICAgIGVudHJ5OiB7fSxcbiAgICAgICAgZXhpdDoge30sXG4gICAgICAgIHJlZHVjZWQ6IHt9LFxuICAgICAgICBpbmNyZWFzZWQ6IHt9LFxuICAgICAgICBoZWxkOiB7fVxuICAgIH07XG5cbiAgICBmdW5kcy5tYXAoKG1mKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZVN0b2NrcyA9IHN0b2Nrc1ttZi5zdGF0ZS50b1N0cmluZygpXTtcblxuICAgICAgICBpZiAoIXN0YXRlU3RvY2tzW21mLmlzaW5dKSB7XG4gICAgICAgICAgICBzdGF0ZVN0b2Nrc1ttZi5pc2luXSA9IHtcbiAgICAgICAgICAgICAgICBzdG9ja19uYW1lOiBtZi5zdG9ja19uYW1lLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaW5kdXN0cnk6IG1mLmluZHVzdHJ5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaXNpbjogbWYuaXNpbi50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGZ1bmRIb3VzZXM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVTdG9ja3NbbWYuaXNpbl0uZnVuZEhvdXNlcy5wdXNoKHtcbiAgICAgICAgICAgIGZ1bmRfbmFtZTogbWYuZnVuZF9uYW1lLFxuICAgICAgICAgICAgZnVuZF9ob3VzZTogbWYuZnVuZF9ob3VzZSxcbiAgICAgICAgICAgIGN1cnJlbnRfcXVhbnRpdHk6IG1mLmN1cnJlbnRfcXVhbnRpdHkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNoYW5nZV9xdWFudGl0eTogbWYuY2hhbmdlX3F1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFuZ2VfbWFya2V0X3ZhbHVlOiBOdW1iZXIobWYuY2hhbmdlX21hcmtldF92YWx1ZSkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgIGNoYW5nZV9wZXJjZW50YWdlX2F1bTogTnVtYmVyKG1mLmNoYW5nZV9wZXJjZW50YWdlX2F1bSkudG9GaXhlZCgyKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzdG9ja3M6IHN0b2Nrc1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})