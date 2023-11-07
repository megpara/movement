"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./components/Modal.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Nav.module.css */ \"./styles/Nav.module.css\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup */ \"./components/Popup.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/meganparadowski/repos/movement/components/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar paths = {\n  \"/info\": \"01\",\n  \"/work\": \"02\",\n  \"/press\": \"03\"\n};\nvar homePath = \"/\";\nfunction Nav(_ref) {\n  _s();\n\n  var props = _ref.props;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isModalOpen = _useState[0],\n      setIsModalOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      isPopupOpen = _useState2[0],\n      setIsPopupOpen = _useState2[1];\n\n  var closeModal = function closeModal() {\n    return setIsModalOpen(false);\n  };\n\n  var closePopup = function closePopup() {\n    return setIsPopupOpen(false);\n  };\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  var path = router.asPath;\n  var showAlternateNav = path !== homePath;\n\n  if (showAlternateNav) {\n    var nav = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"absolute md:p-[3rem] p-[2rem] flex w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          className: \"h-[20px] cursor-pointer\",\n          src: \"/volta.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-end items-center md:text-base text-xs\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"info\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/info\",\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"work\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/work\",\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"press\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/press\",\n            children: \"Press\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"co-lab\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/teaching\",\n            children: \"Teaching\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this);\n  } else {\n    var nav = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topleft), \" \").concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbg)),\n        children: \"M\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topleft),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/info\",\n          children: \"Megan Paradowski\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottomleft), \" buttonTertiary\"),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          target: \"_blank\",\n          href: \"http://eepurl.com/hXmbYz\",\n          children: \"Say Hello\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottomright), \" \").concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbg)),\n        children: \"03\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/press\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottomright),\n          children: \"Press\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topright), \" \").concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbg)),\n        children: \"04\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/teaching\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topright),\n          children: \"Teaching\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {\n        open: isModalOpen,\n        closeModal: closeModal\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: nav\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Nav, \"AYILSLIORF7c/gCs6JRwSvWneK4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUEsWUFERjtBQXlCRDs7QUFFRCxzQkFBTztBQUFBLGNBQU1NO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBN0V1Qlo7VUFPUEo7OztLQVBPSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz9hMTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05hdi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmNvbnN0IHBhdGhzID0ge1xuICBcIi9pbmZvXCI6IFwiMDFcIixcbiAgXCIvd29ya1wiOiBcIjAyXCIsXG4gIFwiL3ByZXNzXCI6IFwiMDNcIixcbn07XG5jb25zdCBob21lUGF0aCA9IFwiL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoeyBwcm9wcyB9KSB7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNQb3B1cE9wZW4sIHNldElzUG9wdXBPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiBzZXRJc1BvcHVwT3BlbihmYWxzZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBwYXRoID0gcm91dGVyLmFzUGF0aDtcbiAgY29uc3Qgc2hvd0FsdGVybmF0ZU5hdiA9IHBhdGggIT09IGhvbWVQYXRoO1xuICBpZiAoc2hvd0FsdGVybmF0ZU5hdikge1xuICAgIHZhciBuYXYgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIG1kOnAtWzNyZW1dIHAtWzJyZW1dIGZsZXggdy1mdWxsXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi92b2x0YS5wbmdcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIG1kOnRleHQtYmFzZSB0ZXh0LXhzXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtZDpwbC00IHBsLTJcIiArIChwYXRoLmluY2x1ZGVzKFwiaW5mb1wiKSA/IFwiIGZvbnQtdGhpblwiIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luZm9cIj5BYm91dDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcIm1kOnBsLTQgcGwtMlwiICsgKHBhdGguaW5jbHVkZXMoXCJ3b3JrXCIpID8gXCIgZm9udC10aGluXCIgOiBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPldvcms8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtZDpwbC00IHBsLTJcIiArIChwYXRoLmluY2x1ZGVzKFwicHJlc3NcIikgPyBcIiBmb250LXRoaW5cIiA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmVzc1wiPlByZXNzPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwibWQ6cGwtNCBwbC0yXCIgKyAocGF0aC5pbmNsdWRlcyhcImNvLWxhYlwiKSA/IFwiIGZvbnQtdGhpblwiIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3RlYWNoaW5nXCI+VGVhY2hpbmc8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmF2ID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvcGxlZnR9ICR7c3R5bGVzLm5hdmJnfWB9Pk08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BsZWZ0fT5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BsZWZ0fSBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsT3Blbih0cnVlKX0+ICovfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5mb1wiPk1lZ2FuIFBhcmFkb3dza2k8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3R0b21sZWZ0fSAke3N0eWxlcy5uYXZiZ31gfT5TYXkgSGVsbG88L2Rpdj4gKi99XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm90dG9tbGVmdH0gYnV0dG9uVGVydGlhcnlgfT5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL2VlcHVybC5jb20vaFhtYll6XCI+XG4gICAgICAgICAgICBTYXkgSGVsbG9cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvdHRvbXJpZ2h0fSAke3N0eWxlcy5uYXZiZ31gfT4wMzwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL3ByZXNzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tcmlnaHR9PlByZXNzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9wcmlnaHR9ICR7c3R5bGVzLm5hdmJnfWB9PjA0PC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhY2hpbmdcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50b3ByaWdodH0+VGVhY2hpbmc8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPE1vZGFsIG9wZW49e2lzTW9kYWxPcGVufSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSAvPlxuICAgICAgICB7LyogPFBvcHVwIG9wZW49e2lzUG9wdXBPcGVufSBjbG9zZVBvcHVwPXtjbG9zZVBvcHVwfSAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gPGRpdj57bmF2fTwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJNb2RhbCIsIkxpbmsiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUG9wdXAiLCJwYXRocyIsImhvbWVQYXRoIiwiTmF2IiwicHJvcHMiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaXNQb3B1cE9wZW4iLCJzZXRJc1BvcHVwT3BlbiIsImNsb3NlTW9kYWwiLCJjbG9zZVBvcHVwIiwicm91dGVyIiwicGF0aCIsImFzUGF0aCIsInNob3dBbHRlcm5hdGVOYXYiLCJuYXYiLCJpbmNsdWRlcyIsInRvcGxlZnQiLCJuYXZiZyIsImJvdHRvbWxlZnQiLCJib3R0b21yaWdodCIsInRvcHJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});