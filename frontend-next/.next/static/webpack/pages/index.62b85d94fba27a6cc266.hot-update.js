webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Product */ \"./components/Product.js\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Message */ \"./components/Message.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_Paginate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Paginate */ \"./components/Paginate.js\");\n/* harmony import */ var _components_ProductCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ProductCarousel */ \"./components/ProductCarousel.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/productActions */ \"./actions/productActions.js\");\n\n\n\nvar _jsxFileName = \"/Users/nexle-user/workspace/projects/traversy-media/proshop_mern/frontend-next/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar HomeScreen = function HomeScreen(_ref) {\n  var match = _ref.match;\n  match = match || {};\n  match.params = match.params || {};\n  var keyword = match.params.keyword;\n  var pageNumber = match.params.pageNumber || 1; //const dispatch = useDispatch()\n  //const productList = useSelector((state) => state.productList)\n  //const { loading, error, products, page, pages } = productList\n  //useEffect(() => {\n  // dispatch(listProducts(keyword, pageNumber))\n  //}, [dispatch, keyword, pageNumber])\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Meta__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), !keyword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ProductCarousel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      to: \"/\",\n      className: \"btn btn-light\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Latest Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this) : error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Message__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      variant: \"danger\",\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        children: products.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n            sm: 12,\n            md: 6,\n            lg: 4,\n            xl: 3,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Product__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              product: product\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this)\n          }, product._id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Paginate__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        pages: pages,\n        page: page,\n        keyword: keyword ? keyword : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = HomeScreen;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeScreen);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomeScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lU2NyZWVuIiwibWF0Y2giLCJwYXJhbXMiLCJrZXl3b3JkIiwicGFnZU51bWJlciIsImxvYWRpbmciLCJlcnJvciIsInByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsIl9pZCIsInBhZ2VzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDaENBLE9BQUssR0FBR0EsS0FBSyxJQUFJLEVBQWpCO0FBQ0FBLE9BQUssQ0FBQ0MsTUFBTixHQUFlRCxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsRUFBL0I7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUE3QjtBQUVBLE1BQU1DLFVBQVUsR0FBR0gsS0FBSyxDQUFDQyxNQUFOLENBQWFFLFVBQWIsSUFBMkIsQ0FBOUMsQ0FMZ0MsQ0FPaEM7QUFFQTtBQUNBO0FBRUE7QUFDQztBQUNEOztBQUVBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQUEsNEJBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUcsQ0FBQ0QsT0FBRCxnQkFDQyxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZ0JBR0MscUVBQUMsZ0RBQUQ7QUFBTSxRQUFFLEVBQUMsR0FBVDtBQUFhLGVBQVMsRUFBQyxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixFQVVHRSxPQUFPLGdCQUNOLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFETSxHQUVKQyxLQUFLLGdCQUNQLHFFQUFDLDJEQUFEO0FBQVMsYUFBTyxFQUFDLFFBQWpCO0FBQUEsZ0JBQTJCQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBR1A7QUFBQSw4QkFDRSxxRUFBQyxtREFBRDtBQUFBLGtCQUNHQyxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsOEJBQ1oscUVBQUMsbURBQUQ7QUFBdUIsY0FBRSxFQUFFLEVBQTNCO0FBQStCLGNBQUUsRUFBRSxDQUFuQztBQUFzQyxjQUFFLEVBQUUsQ0FBMUM7QUFBNkMsY0FBRSxFQUFFLENBQWpEO0FBQUEsbUNBQ0UscUVBQUMsMkRBQUQ7QUFBUyxxQkFBTyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVUEsT0FBTyxDQUFDQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFLHFFQUFDLDREQUFEO0FBQ0UsYUFBSyxFQUFFQyxLQURUO0FBRUUsWUFBSSxFQUFFQyxJQUZSO0FBR0UsZUFBTyxFQUFFVCxPQUFPLEdBQUdBLE9BQUgsR0FBYTtBQUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQSxvQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQWpERDs7S0FBTUgsVTs7QUFnRVNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0J1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcidcbmltcG9ydCBQYWdpbmF0ZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRlJ1xuaW1wb3J0IFByb2R1Y3RDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJvdXNlbCdcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBsaXN0UHJvZHVjdHMgfSBmcm9tICcuLi9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zJ1xuXG5jb25zdCBIb21lU2NyZWVuID0gKHsgbWF0Y2ggfSkgPT4ge1xuICBtYXRjaCA9IG1hdGNoIHx8IHt9XG4gIG1hdGNoLnBhcmFtcyA9IG1hdGNoLnBhcmFtcyB8fCB7fVxuICBjb25zdCBrZXl3b3JkID0gbWF0Y2gucGFyYW1zLmtleXdvcmRcblxuICBjb25zdCBwYWdlTnVtYmVyID0gbWF0Y2gucGFyYW1zLnBhZ2VOdW1iZXIgfHwgMVxuXG4gIC8vY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgLy9jb25zdCBwcm9kdWN0TGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdExpc3QpXG4gIC8vY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgcHJvZHVjdHMsIHBhZ2UsIHBhZ2VzIH0gPSBwcm9kdWN0TGlzdFxuXG4gIC8vdXNlRWZmZWN0KCgpID0+IHtcbiAgIC8vIGRpc3BhdGNoKGxpc3RQcm9kdWN0cyhrZXl3b3JkLCBwYWdlTnVtYmVyKSlcbiAgLy99LCBbZGlzcGF0Y2gsIGtleXdvcmQsIHBhZ2VOdW1iZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxNZXRhIC8+XG4gICAgICB7IWtleXdvcmQgPyAoXG4gICAgICAgIDxQcm9kdWN0Q2Fyb3VzZWwgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMaW5rIHRvPScvJyBjbGFzc05hbWU9J2J0biBidG4tbGlnaHQnPlxuICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cbiAgICAgIDxoMT5MYXRlc3QgUHJvZHVjdHM8L2gxPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgPE1lc3NhZ2UgdmFyaWFudD0nZGFuZ2VyJz57ZXJyb3J9PC9NZXNzYWdlPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICA8Q29sIGtleT17cHJvZHVjdC5faWR9IHNtPXsxMn0gbWQ9ezZ9IGxnPXs0fSB4bD17M30+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8UGFnaW5hdGVcbiAgICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICBrZXl3b3JkPXtrZXl3b3JkID8ga2V5d29yZCA6ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICByZXR1cm4geyBwcm9wczogeyBwYXJhbXM6IG51bGwgfSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnNvbGUubG9nKCd3aGF0IHRoZSBmdWNrJyk7XG4gIGNvbnN0IHJlcyAgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wcm9kdWN0cycpO1xuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zb2xlLmxvZygnd2hhdCB0aGUgZnVjaycsIHByb2R1Y3RzKTtcbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoeyBwYXJhbXM6IHsgc2x1ZzogcHJvZHVjdC5zbHVnIH0gfSkpO1xuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVTY3JlZW5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})