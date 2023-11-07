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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./components/Modal.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Nav.module.css */ \"./styles/Nav.module.css\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup */ \"./components/Popup.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/meganparadowski/repos/movement/components/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar paths = {\n  \"/info\": \"01\",\n  \"/work\": \"02\",\n  \"/press\": \"03\"\n};\nvar homePath = \"/\";\nfunction Nav(_ref) {\n  _s();\n\n  var props = _ref.props;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isModalOpen = _useState[0],\n      setIsModalOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      isPopupOpen = _useState2[0],\n      setIsPopupOpen = _useState2[1];\n\n  var closeModal = function closeModal() {\n    return setIsModalOpen(false);\n  };\n\n  var closePopup = function closePopup() {\n    return setIsPopupOpen(false);\n  };\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  var path = router.asPath;\n  var showAlternateNav = path !== homePath;\n\n  if (showAlternateNav) {\n    var nav = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"absolute md:p-[3rem] p-[2rem] flex w-full\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          className: \"h-[20px] cursor-pointer\",\n          src: \"/volta.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-end items-center md:text-base text-xs\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"info\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/info\",\n            children: \"About\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"work\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/work\",\n            children: \"Work\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"press\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/press\",\n            children: \"Press\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"md:pl-4 pl-2\" + (path.includes(\"co-lab\") ? \" font-thin\" : \"\"),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/teaching\",\n            children: \"Teaching\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this);\n  } else {\n    var nav = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topleft), \" \").concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbg)),\n        children: \"M\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topleft),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"/info\",\n          children: \"Megan Paradowski\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottomleft), \" buttonTertiary\"),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          target: \"_blank\",\n          href: \"http://eepurl.com/hXmbYz\",\n          children: \"Say Hello\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().bottomright), \" flex justify-end\"),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().icons),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            target: \"_blank\",\n            href: \"https://www.instagram.com/volta_collective/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: \"/insta-logo-white.png\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            target: \"_blank\",\n            href: \"https://vimeo.com/voltacollective\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: \"/vimeo-logo-white.png\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"mailto:info@voltacollective.com\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: \"/email_icon_white.png\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            target: \"_blank\",\n            href: \"https://voltacollective.com\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: \"/web-simple.png\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topright), \" \").concat((_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbg)),\n        children: \"04\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/teaching\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().topright),\n          children: \"Teaching\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {\n        open: isModalOpen,\n        closeModal: closeModal\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: nav\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Nav, \"AYILSLIORF7c/gCs6JRwSvWneK4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUErQkU7QUFBSyxpQkFBUyxZQUFLQSx3RUFBTCxjQUF3QkEscUVBQXhCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkYsZUFnQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUEsd0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENGLGVBbUNFLDhEQUFDLDJDQUFEO0FBQU8sWUFBSSxFQUFFUyxXQUFiO0FBQTBCLGtCQUFVLEVBQUVJO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUF3Q0Q7O0FBRUQsc0JBQU87QUFBQSxjQUFNTTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQTVGdUJaO1VBT1BKOzs7S0FQT0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXYubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5jb25zdCBwYXRocyA9IHtcbiAgXCIvaW5mb1wiOiBcIjAxXCIsXG4gIFwiL3dvcmtcIjogXCIwMlwiLFxuICBcIi9wcmVzc1wiOiBcIjAzXCIsXG59O1xuY29uc3QgaG9tZVBhdGggPSBcIi9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHsgcHJvcHMgfSkge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzUG9wdXBPcGVuLCBzZXRJc1BvcHVwT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0SXNNb2RhbE9wZW4oZmFsc2UpO1xuICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4gc2V0SXNQb3B1cE9wZW4oZmFsc2UpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgcGF0aCA9IHJvdXRlci5hc1BhdGg7XG4gIGNvbnN0IHNob3dBbHRlcm5hdGVOYXYgPSBwYXRoICE9PSBob21lUGF0aDtcbiAgaWYgKHNob3dBbHRlcm5hdGVOYXYpIHtcbiAgICB2YXIgbmF2ID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtZDpwLVszcmVtXSBwLVsycmVtXSBmbGV4IHctZnVsbFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC1bMjBweF0gY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvdm9sdGEucG5nXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBtZDp0ZXh0LWJhc2UgdGV4dC14c1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwibWQ6cGwtNCBwbC0yXCIgKyAocGF0aC5pbmNsdWRlcyhcImluZm9cIikgPyBcIiBmb250LXRoaW5cIiA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmZvXCI+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJtZDpwbC00IHBsLTJcIiArIChwYXRoLmluY2x1ZGVzKFwid29ya1wiKSA/IFwiIGZvbnQtdGhpblwiIDogXCJcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5Xb3JrPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwibWQ6cGwtNCBwbC0yXCIgKyAocGF0aC5pbmNsdWRlcyhcInByZXNzXCIpID8gXCIgZm9udC10aGluXCIgOiBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJlc3NcIj5QcmVzczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcIm1kOnBsLTQgcGwtMlwiICsgKHBhdGguaW5jbHVkZXMoXCJjby1sYWJcIikgPyBcIiBmb250LXRoaW5cIiA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFjaGluZ1wiPlRlYWNoaW5nPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5hdiA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50b3BsZWZ0fSAke3N0eWxlcy5uYXZiZ31gfT5NPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wbGVmdH0+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wbGVmdH0gb25DbGljaz17KCkgPT4gc2V0SXNNb2RhbE9wZW4odHJ1ZSl9PiAqL31cbiAgICAgICAgICA8TGluayBocmVmPVwiL2luZm9cIj5NZWdhbiBQYXJhZG93c2tpPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm90dG9tbGVmdH0gJHtzdHlsZXMubmF2Ymd9YH0+U2F5IEhlbGxvPC9kaXY+ICovfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvdHRvbWxlZnR9IGJ1dHRvblRlcnRpYXJ5YH0+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9lZXB1cmwuY29tL2hYbWJZelwiPlxuICAgICAgICAgICAgU2F5IEhlbGxvXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3R0b21yaWdodH0gZmxleCBqdXN0aWZ5LWVuZGB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdm9sdGFfY29sbGVjdGl2ZS9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbnN0YS1sb2dvLXdoaXRlLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly92aW1lby5jb20vdm9sdGFjb2xsZWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZpbWVvLWxvZ28td2hpdGUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb0B2b2x0YWNvbGxlY3RpdmUuY29tXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2VtYWlsX2ljb25fd2hpdGUucG5nXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3ZvbHRhY29sbGVjdGl2ZS5jb21cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvd2ViLXNpbXBsZS5wbmdcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50b3ByaWdodH0gJHtzdHlsZXMubmF2Ymd9YH0+MDQ8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFjaGluZ1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRvcHJpZ2h0fT5UZWFjaGluZzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TW9kYWwgb3Blbj17aXNNb2RhbE9wZW59IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IC8+XG4gICAgICAgIHsvKiA8UG9wdXAgb3Blbj17aXNQb3B1cE9wZW59IGNsb3NlUG9wdXA9e2Nsb3NlUG9wdXB9IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiA8ZGl2PntuYXZ9PC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbIk1vZGFsIiwiTGluayIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQb3B1cCIsInBhdGhzIiwiaG9tZVBhdGgiLCJOYXYiLCJwcm9wcyIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJpc1BvcHVwT3BlbiIsInNldElzUG9wdXBPcGVuIiwiY2xvc2VNb2RhbCIsImNsb3NlUG9wdXAiLCJyb3V0ZXIiLCJwYXRoIiwiYXNQYXRoIiwic2hvd0FsdGVybmF0ZU5hdiIsIm5hdiIsImluY2x1ZGVzIiwidG9wbGVmdCIsIm5hdmJnIiwiYm90dG9tbGVmdCIsImJvdHRvbXJpZ2h0IiwiaWNvbnMiLCJ0b3ByaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});