webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/veeresh/opensource/flocks-ui/src/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar TableinTableComp = function TableinTableComp(_ref) {\n  var fundHouse = _ref.fundHouse;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 5,\n    minW: 4,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, fundHouse.change_percentage_aum, '%'), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    w: 15,\n    minW: 15,\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, fundHouse.change_quantity), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    textAlign: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat(fundHouse.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 25\n    }\n  }, fundHouse.fund_name)))));\n};\n\n_c = TableinTableComp;\n\nvar LiComp = function LiComp(_ref2) {\n  var _stock$fundHouses$;\n\n  var stock = _ref2.stock;\n  var numRows = stock.fundHouses.length;\n  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, stock.stock_name), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, stock.industry), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/mutual_funds/\".concat((_stock$fundHouses$ = stock.fundHouses[0]) === null || _stock$fundHouses$ === void 0 ? void 0 : _stock$fundHouses$.fund_house),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 25\n    }\n  }, numRows)))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 29\n    }\n  }, \"AUM%\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 29\n    }\n  }, \"Quantity\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 29\n    }\n  }, \"Fund\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }, stock.fundHouses.map(function (fundHouse) {\n    return __jsx(TableinTableComp, {\n      key: fundHouse.fund_house,\n      fundHouse: fundHouse,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 29\n      }\n    });\n  })))));\n};\n\n_c2 = LiComp;\n\nvar IndexPage = function IndexPage(_ref3) {\n  var stocks = _ref3.stocks;\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    direction: \"column\",\n    align: \"left\",\n    justify: \"left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    pd: 10,\n    spacing: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n    fontSize: \"2xl\",\n    textColor: \"gray.600\",\n    mt: 10,\n    ml: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, \"We track the best of mutual funds and filter out the stocks that they have added in the last month.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    orientation: \"horizontal\",\n    colorScheme: \"teal\",\n    mb: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    mt: 2,\n    maxW: \"8xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    fontSize: \"md\",\n    textColor: \"gray.600\",\n    mb: 4,\n    ml: 6,\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 29\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the mutual fund-house name to get more details about their portfolio.\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    fontSize: \"sg\",\n    textColor: \"gray.500\",\n    mb: 4,\n    pl: 5,\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 29\n    }\n  }, \"The following are the list of stocks that various mutual funds have freshly entered last month. Click on the no,of fund-house count to get more details about one of the mutaul fund-house that has entered the stock.\")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    colorScheme: \"teal\",\n    textColor: \"gray.600\",\n    textAlign: \"match-parent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Thead\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 29\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 33\n    }\n  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 37\n    }\n  }, \"Stock Name\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 37\n    }\n  }, \"Industry\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['table-cell', 'table-cell', 'table-cell', 'none', 'none'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 37\n    }\n  }, \"No,of MFs\"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Th\"], {\n    display: ['none', 'none', 'none', 'table-cell', 'table-cell'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 37\n    }\n  }, \"Mutual Funds\"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 29\n    }\n  }, Object.entries(stocks.entry).map(function (_ref4) {\n    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref4, 2),\n        isin = _ref5[0],\n        stock = _ref5[1];\n\n    return __jsx(LiComp, {\n      key: isin,\n      stock: stock,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 41\n      }\n    });\n  })))))));\n};\n\n_c3 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TableinTableComp\");\n$RefreshReg$(_c2, \"LiComp\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiVGFibGVpblRhYmxlQ29tcCIsImZ1bmRIb3VzZSIsImNoYW5nZV9wZXJjZW50YWdlX2F1bSIsImNoYW5nZV9xdWFudGl0eSIsImZ1bmRfaG91c2UiLCJmdW5kX25hbWUiLCJMaUNvbXAiLCJzdG9jayIsIm51bVJvd3MiLCJmdW5kSG91c2VzIiwibGVuZ3RoIiwic3RvY2tfbmFtZSIsImluZHVzdHJ5IiwibWFwIiwiSW5kZXhQYWdlIiwic3RvY2tzIiwiT2JqZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaXNpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFHQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN4QyxTQUNJLE1BQUMsbURBQUQ7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFJLEtBQUMsRUFBRSxDQUFQO0FBQVUsUUFBSSxFQUFFLENBQWhCO0FBQW1CLGFBQVMsRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFNBQVMsQ0FBQ0MscUJBRGYsRUFFSyxHQUZMLENBREosRUFLSSxNQUFDLG1EQUFEO0FBQUksS0FBQyxFQUFFLEVBQVA7QUFBVyxRQUFJLEVBQUUsRUFBakI7QUFBcUIsYUFBUyxFQUFDLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsU0FBUyxDQUFDRSxlQURmLENBTEosRUFRSSxNQUFDLG1EQUFEO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLDBCQUFt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LFdBQUssRUFBRVosS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBQUEsR0FESCxDQURMLENBckNKLENBMUNKLENBWkosQ0FESixDQURKLENBREo7QUEyR0gsQ0E1R0Q7O01BQU1PLFM7O0FBaUtTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGV4dCxcbiAgICBTdGFjayxcbiAgICBEaXZpZGVyLFxuICAgIEhlYWRpbmcsXG4gICAgQm94LFxuICAgIEZsZXgsXG4gICAgVGFibGUsXG4gICAgVHIsXG4gICAgVGQsXG4gICAgVGJvZHksXG4gICAgVGhlYWQsXG4gICAgVGhcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcblxuY29uc3QgVGFibGVpblRhYmxlQ29tcCA9ICh7IGZ1bmRIb3VzZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRyIHRleHRBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDxUZCB3PXs1fSBtaW5XPXs0fSB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAge2Z1bmRIb3VzZS5jaGFuZ2VfcGVyY2VudGFnZV9hdW19XG4gICAgICAgICAgICAgICAgeyclJ31cbiAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICA8VGQgdz17MTV9IG1pblc9ezE1fSB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAge2Z1bmRIb3VzZS5jaGFuZ2VfcXVhbnRpdHl9XG4gICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgPFRkIHRleHRBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL211dHVhbF9mdW5kcy8ke2Z1bmRIb3VzZS5mdW5kX2hvdXNlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1PntmdW5kSG91c2UuZnVuZF9uYW1lfTwvdT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgIDwvVHI+XG4gICAgKTtcbn07XG5cbmNvbnN0IExpQ29tcCA9ICh7IHN0b2NrIH0pID0+IHtcbiAgICBjb25zdCBudW1Sb3dzID0gc3RvY2suZnVuZEhvdXNlcy5sZW5ndGg7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRyPlxuICAgICAgICAgICAgPFRkPntzdG9jay5zdG9ja19uYW1lfTwvVGQ+XG5cbiAgICAgICAgICAgIDxUZD57c3RvY2suaW5kdXN0cnl9PC9UZD5cblxuICAgICAgICAgICAgPFRkIGRpc3BsYXk9e1sndGFibGUtY2VsbCcsICd0YWJsZS1jZWxsJywgJ3RhYmxlLWNlbGwnLCAnbm9uZScsICdub25lJ119PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbXV0dWFsX2Z1bmRzLyR7c3RvY2suZnVuZEhvdXNlc1swXT8uZnVuZF9ob3VzZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dT57bnVtUm93c308L3U+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L1RkPlxuXG4gICAgICAgICAgICA8VGQgZGlzcGxheT17Wydub25lJywgJ25vbmUnLCAnbm9uZScsICd0YWJsZS1jZWxsJywgJ3RhYmxlLWNlbGwnXX0+XG4gICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPkFVTSU8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5RdWFudGl0eTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPkZ1bmQ8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgICAgICAgPC9UaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0b2NrLmZ1bmRIb3VzZXMubWFwKChmdW5kSG91c2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVpblRhYmxlQ29tcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Z1bmRIb3VzZS5mdW5kX2hvdXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5kSG91c2U9e2Z1bmRIb3VzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgIDwvVHI+XG4gICAgKTtcbn07XG5cbmNvbnN0IEluZGV4UGFnZSA9ICh7IHN0b2NrcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwibGVmdFwiIGp1c3RpZnk9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHBkPXsxMH0gc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMnhsXCIgdGV4dENvbG9yPVwiZ3JheS42MDBcIiBtdD17MTB9IG1sPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIHRyYWNrIHRoZSBiZXN0IG9mIG11dHVhbCBmdW5kcyBhbmQgZmlsdGVyIG91dCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrcyB0aGF0IHRoZXkgaGF2ZSBhZGRlZCBpbiB0aGUgbGFzdCBtb250aC5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1iPXs0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezJ9IG1heFc9XCI4eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwiZ3JheS42MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYj17NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWw9ezZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvbGxvd2luZyBhcmUgdGhlIGxpc3Qgb2Ygc3RvY2tzIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaW91cyBtdXR1YWwgZnVuZHMgaGF2ZSBmcmVzaGx5IGVudGVyZWQgbGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aC4gQ2xpY2sgb24gdGhlIG11dHVhbCBmdW5kLWhvdXNlIG5hbWUgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IG1vcmUgZGV0YWlscyBhYm91dCB0aGVpciBwb3J0Zm9saW8uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJzZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImdyYXkuNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWI9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXJlIHRoZSBsaXN0IG9mIHN0b2NrcyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlvdXMgbXV0dWFsIGZ1bmRzIGhhdmUgZnJlc2hseSBlbnRlcmVkIGxhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGguIENsaWNrIG9uIHRoZSBubyxvZiBmdW5kLWhvdXNlIGNvdW50IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCBtb3JlIGRldGFpbHMgYWJvdXQgb25lIG9mIHRoZSBtdXRhdWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuZC1ob3VzZSB0aGF0IGhhcyBlbnRlcmVkIHRoZSBzdG9jay5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cImdyYXkuNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJtYXRjaC1wYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPlN0b2NrIE5hbWU8L1RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+SW5kdXN0cnk8L1RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YWJsZS1jZWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyxvZiBNRnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmxlLWNlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGFibGUtY2VsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11dHVhbCBGdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoc3RvY2tzLmVudHJ5KS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW2lzaW4sIHN0b2NrXSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaUNvbXAga2V5PXtpc2lufSBzdG9jaz17c3RvY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuICAgIGxldCBmdW5kcyA9IGF3YWl0IHByaXNtYS5tZl9kaWZmLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGN1cnJlbnRfbW9udGg6IHtcbiAgICAgICAgICAgICAgICBlcXVhbHM6IDExXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgICAgIGNoYW5nZV9tYXJrZXRfdmFsdWU6ICdkZXNjJ1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgc3RvY2tzID0ge1xuICAgICAgICBlbnRyeToge30sXG4gICAgICAgIGV4aXQ6IHt9LFxuICAgICAgICByZWR1Y2VkOiB7fSxcbiAgICAgICAgaW5jcmVhc2VkOiB7fSxcbiAgICAgICAgaGVsZDoge31cbiAgICB9O1xuXG4gICAgZnVuZHMubWFwKChtZikgPT4ge1xuICAgICAgICBsZXQgc3RhdGVTdG9ja3MgPSBzdG9ja3NbbWYuc3RhdGUudG9TdHJpbmcoKV07XG5cbiAgICAgICAgaWYgKCFzdGF0ZVN0b2Nrc1ttZi5pc2luXSkge1xuICAgICAgICAgICAgc3RhdGVTdG9ja3NbbWYuaXNpbl0gPSB7XG4gICAgICAgICAgICAgICAgc3RvY2tfbmFtZTogbWYuc3RvY2tfbmFtZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGluZHVzdHJ5OiBtZi5pbmR1c3RyeS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIGlzaW46IG1mLmlzaW4udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBmdW5kSG91c2VzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlU3RvY2tzW21mLmlzaW5dLmZ1bmRIb3VzZXMucHVzaCh7XG4gICAgICAgICAgICBmdW5kX25hbWU6IG1mLmZ1bmRfbmFtZSxcbiAgICAgICAgICAgIGZ1bmRfaG91c2U6IG1mLmZ1bmRfaG91c2UsXG4gICAgICAgICAgICBjdXJyZW50X3F1YW50aXR5OiBtZi5jdXJyZW50X3F1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjaGFuZ2VfcXVhbnRpdHk6IG1mLmNoYW5nZV9xdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgY2hhbmdlX21hcmtldF92YWx1ZTogTnVtYmVyKG1mLmNoYW5nZV9tYXJrZXRfdmFsdWUpLnRvRml4ZWQoMiksXG4gICAgICAgICAgICBjaGFuZ2VfcGVyY2VudGFnZV9hdW06IE51bWJlcihtZi5jaGFuZ2VfcGVyY2VudGFnZV9hdW0pLnRvRml4ZWQoMilcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc3RvY2tzOiBzdG9ja3NcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})