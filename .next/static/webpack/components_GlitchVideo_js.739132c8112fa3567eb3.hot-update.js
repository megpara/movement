"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_GlitchVideo_js",{

/***/ "./components/GlitchVideo.js":
/*!***********************************!*\
  !*** ./components/GlitchVideo.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GlitchVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_GlitchPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/GlitchPass.js */ \"./node_modules/three/examples/jsm/postprocessing/GlitchPass.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/meganparadowski/repos/movement/components/GlitchVideo.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction GlitchVideo(_ref) {\n  _s();\n\n  var doneLoading = _ref.doneLoading;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var scene = new three__WEBPACK_IMPORTED_MODULE_6__.Scene(); // const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);\n\n    var camera = new three__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);\n    camera.position.z = 1;\n    var renderer = new three__WEBPACK_IMPORTED_MODULE_6__.WebGLRenderer();\n    var image = document.getElementById(\"img\");\n    var container = document.getElementById(\"videoContainer\");\n    container.appendChild(renderer.domElement);\n    var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement); //Crazy sizing\n\n    var ratio = 1.7777777777777777;\n    console.log(window.innerWidth, window.innerHeight);\n    var width = window.innerHeight * ratio;\n    console.log(ratio, width);\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    var texture = new three__WEBPACK_IMPORTED_MODULE_6__.Texture(image);\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_6__.PlaneBufferGeometry(ratio, 1);\n    var material = new three__WEBPACK_IMPORTED_MODULE_6__.MeshBasicMaterial({\n      map: texture\n    });\n    var plane = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(geometry, material);\n    scene.add(plane);\n    var composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__.EffectComposer(renderer);\n    var renderPass = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    composer.addPass(renderPass);\n    var glitchPass = new three_examples_jsm_postprocessing_GlitchPass_js__WEBPACK_IMPORTED_MODULE_4__.GlitchPass();\n    var isMouseMoving = false;\n    var frame;\n    var frameCount = 0;\n\n    function animate() {\n      if (isMouseMoving) {\n        glitchPass.goWild = true;\n      }\n\n      if (frameCount > 30) {\n        glitchPass.goWild = false;\n        composer.removePass(glitchPass);\n      }\n\n      frame = requestAnimationFrame(animate);\n      frameCount += 1;\n      composer.render();\n    }\n\n    animate();\n\n    function onWindowResize() {\n      console.log(\"resize\");\n      setTimeout(function () {\n        renderer.setSize(0, 0);\n        width = window.innerHeight * ratio;\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n      }, 100);\n    }\n\n    var timer;\n\n    function checkMouseStop() {\n      clearTimeout(timer);\n      timer = setTimeout(function () {\n        isMouseMoving = false;\n      }, 200);\n    }\n\n    function onMouseMove() {\n      checkMouseStop();\n\n      if (!isMouseMoving) {\n        isMouseMoving = true;\n        frameCount = 0;\n        composer.addPass(glitchPass);\n      }\n    }\n\n    window.addEventListener(\"resize\", onWindowResize);\n    window.addEventListener(\"mousemove\", onMouseMove); // video.oncanplay = () => {\n    //   doneLoading();\n    // };\n\n    return function () {\n      cancelAnimationFrame(frame);\n      window.removeEventListener(\"resize\", onWindowResize);\n      window.removeEventListener(\"mousemove\", onMouseMove);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"videoContainer\",\n      style: {\n        position: \"absolute\",\n        overflow: \"hidden\",\n        width: \"100%\",\n        height: \"100%\",\n        top: 0,\n        left: 0,\n        zIndex: \"-1\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      // id=\"video\"\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().homeVideo),\n      src: \"/index.png \" // autoPlay\n      // loop\n      // muted\n      // playsInline=\"False\"\n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(GlitchVideo, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = GlitchVideo;\n\nvar _c;\n\n$RefreshReg$(_c, \"GlitchVideo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDaUQsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NSLGNBQWxDO0FBQ0F6QyxJQUFBQSxNQUFNLENBQUNpRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ0QsV0FBckMsRUFsRmMsQ0FtRmQ7QUFDQTtBQUNBOztBQUVBLFdBQU8sWUFBTTtBQUNYRSxNQUFBQSxvQkFBb0IsQ0FBQ2hCLEtBQUQsQ0FBcEI7QUFDQWxDLE1BQUFBLE1BQU0sQ0FBQ21ELG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVixjQUFyQztBQUNBekMsTUFBQUEsTUFBTSxDQUFDbUQsbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0NILFdBQXhDO0FBQ0QsS0FKRDtBQUtELEdBNUZRLEVBNEZOLEVBNUZNLENBQVQ7QUE2RkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLFFBQUUsRUFBQyxnQkFETDtBQUVFLFdBQUssRUFBRTtBQUNMN0MsUUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTGlELFFBQUFBLFFBQVEsRUFBRSxRQUZMO0FBR0xuQyxRQUFBQSxLQUFLLEVBQUUsTUFIRjtBQUlMb0MsUUFBQUEsTUFBTSxFQUFFLE1BSkg7QUFLTEMsUUFBQUEsR0FBRyxFQUFFLENBTEE7QUFNTEMsUUFBQUEsSUFBSSxFQUFFLENBTkQ7QUFPTEMsUUFBQUEsTUFBTSxFQUFFO0FBUEg7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFhRTtBQUNFO0FBQ0EsZUFBUyxFQUFFcEUsMEVBRmI7QUFHRSxTQUFHLEVBQUMsYUFITixDQUlFO0FBQ0E7QUFDQTtBQUNBOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBLGtCQURGO0FBeUJEOztHQXZIdUJNOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dsaXRjaFZpZGVvLmpzP2ZiMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBHbGl0Y2hQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9HbGl0Y2hQYXNzLmpzXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdsaXRjaFZpZGVvKHsgZG9uZUxvYWRpbmcgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgLy8gY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSgtMSwgMSwgMSwgLTEsIDAsIDEpO1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIDQ1LFxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAxLFxuICAgICAgMTAwMFxuICAgICk7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb0NvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgLy9DcmF6eSBzaXppbmdcbiAgICBjb25zdCByYXRpbyA9IDEuNzc3Nzc3Nzc3Nzc3Nzc3NztcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiByYXRpbztcbiAgICBjb25zb2xlLmxvZyhyYXRpbywgd2lkdGgpO1xuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoaW1hZ2UpO1xuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeShyYXRpbywgMSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRleHR1cmUgfSk7XG4gICAgY29uc3QgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHNjZW5lLmFkZChwbGFuZSk7XG5cbiAgICBjb25zdCBjb21wb3NlciA9IG5ldyBFZmZlY3RDb21wb3NlcihyZW5kZXJlcik7XG4gICAgY29uc3QgcmVuZGVyUGFzcyA9IG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyUGFzcyk7XG5cbiAgICBjb25zdCBnbGl0Y2hQYXNzID0gbmV3IEdsaXRjaFBhc3MoKTtcblxuICAgIGxldCBpc01vdXNlTW92aW5nID0gZmFsc2U7XG5cbiAgICBsZXQgZnJhbWU7XG4gICAgbGV0IGZyYW1lQ291bnQgPSAwO1xuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICBpZiAoaXNNb3VzZU1vdmluZykge1xuICAgICAgICBnbGl0Y2hQYXNzLmdvV2lsZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZnJhbWVDb3VudCA+IDMwKSB7XG4gICAgICAgIGdsaXRjaFBhc3MuZ29XaWxkID0gZmFsc2U7XG4gICAgICAgIGNvbXBvc2VyLnJlbW92ZVBhc3MoZ2xpdGNoUGFzcyk7XG4gICAgICB9XG4gICAgICBmcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgIGZyYW1lQ291bnQgKz0gMTtcbiAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG5cbiAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzaXplXCIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSgwLCAwKTtcbiAgICAgICAgd2lkdGggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiByYXRpbztcbiAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgbGV0IHRpbWVyO1xuICAgIGZ1bmN0aW9uIGNoZWNrTW91c2VTdG9wKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlzTW91c2VNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCkge1xuICAgICAgY2hlY2tNb3VzZVN0b3AoKTtcbiAgICAgIGlmICghaXNNb3VzZU1vdmluZykge1xuICAgICAgICBpc01vdXNlTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgZnJhbWVDb3VudCA9IDA7XG4gICAgICAgIGNvbXBvc2VyLmFkZFBhc3MoZ2xpdGNoUGFzcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG4gICAgLy8gdmlkZW8ub25jYW5wbGF5ID0gKCkgPT4ge1xuICAgIC8vICAgZG9uZUxvYWRpbmcoKTtcbiAgICAvLyB9O1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJ2aWRlb0NvbnRhaW5lclwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB6SW5kZXg6IFwiLTFcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8aW1nXG4gICAgICAgIC8vIGlkPVwidmlkZW9cIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ob21lVmlkZW99XG4gICAgICAgIHNyYz1cIi9pbmRleC5wbmcgXCJcbiAgICAgICAgLy8gYXV0b1BsYXlcbiAgICAgICAgLy8gbG9vcFxuICAgICAgICAvLyBtdXRlZFxuICAgICAgICAvLyBwbGF5c0lubGluZT1cIkZhbHNlXCJcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0Iiwic3R5bGVzIiwiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJHbGl0Y2hQYXNzIiwiT3JiaXRDb250cm9scyIsIkdsaXRjaFZpZGVvIiwiZG9uZUxvYWRpbmciLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJpbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJjb250cm9scyIsInJhdGlvIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwic2V0U2l6ZSIsInRleHR1cmUiLCJUZXh0dXJlIiwiZ2VvbWV0cnkiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInBsYW5lIiwiTWVzaCIsImFkZCIsImNvbXBvc2VyIiwicmVuZGVyUGFzcyIsImFkZFBhc3MiLCJnbGl0Y2hQYXNzIiwiaXNNb3VzZU1vdmluZyIsImZyYW1lIiwiZnJhbWVDb3VudCIsImFuaW1hdGUiLCJnb1dpbGQiLCJyZW1vdmVQYXNzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwib25XaW5kb3dSZXNpemUiLCJzZXRUaW1lb3V0IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInRpbWVyIiwiY2hlY2tNb3VzZVN0b3AiLCJjbGVhclRpbWVvdXQiLCJvbk1vdXNlTW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvdmVyZmxvdyIsImhlaWdodCIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJob21lVmlkZW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GlitchVideo.js\n");

/***/ })

});