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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GlitchVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_GlitchPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/GlitchPass.js */ \"./node_modules/three/examples/jsm/postprocessing/GlitchPass.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/meganparadowski/repos/movement/components/GlitchVideo.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction GlitchVideo(_ref) {\n  _s();\n\n  var doneLoading = _ref.doneLoading;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var scene = new three__WEBPACK_IMPORTED_MODULE_6__.Scene(); // const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);\n\n    var camera = new three__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);\n    camera.position.z = 1;\n    var renderer = new three__WEBPACK_IMPORTED_MODULE_6__.WebGLRenderer();\n    var image = document.getElementById(\"img\");\n    var container = document.getElementById(\"videoContainer\");\n    container.appendChild(renderer.domElement);\n    var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_5__.OrbitControls(camera, renderer.domElement); //Crazy sizing\n\n    var ratio = 1.7777777777777777;\n    console.log(window.innerWidth, window.innerHeight);\n    var width = window.innerHeight * ratio;\n    console.log(ratio, width);\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    var texture = new three__WEBPACK_IMPORTED_MODULE_6__.Texture(image);\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_6__.PlaneBufferGeometry(ratio, 1);\n    var material = new three__WEBPACK_IMPORTED_MODULE_6__.MeshBasicMaterial({\n      map: texture\n    });\n    var plane = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(geometry, material);\n    scene.add(plane);\n    var composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__.EffectComposer(renderer);\n    var renderPass = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    composer.addPass(renderPass);\n    var glitchPass = new three_examples_jsm_postprocessing_GlitchPass_js__WEBPACK_IMPORTED_MODULE_4__.GlitchPass();\n    var isMouseMoving = false;\n    var frame;\n    var frameCount = 0;\n\n    function animate() {\n      if (isMouseMoving) {\n        glitchPass.goWild = true;\n      }\n\n      if (frameCount > 30) {\n        glitchPass.goWild = false;\n        composer.removePass(glitchPass);\n      }\n\n      frame = requestAnimationFrame(animate);\n      frameCount += 1;\n      composer.render();\n    }\n\n    animate();\n\n    function onWindowResize() {\n      console.log(\"resize\");\n      setTimeout(function () {\n        renderer.setSize(0, 0);\n        width = window.innerHeight * ratio;\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n      }, 100);\n    }\n\n    var timer;\n\n    function checkMouseStop() {\n      clearTimeout(timer);\n      timer = setTimeout(function () {\n        isMouseMoving = false;\n      }, 200);\n    }\n\n    function onMouseMove() {\n      checkMouseStop();\n\n      if (!isMouseMoving) {\n        isMouseMoving = true;\n        frameCount = 0;\n        composer.addPass(glitchPass);\n      }\n    }\n\n    window.addEventListener(\"resize\", onWindowResize);\n    window.addEventListener(\"mousemove\", onMouseMove); // video.oncanplay = () => {\n    //   doneLoading();\n    // };\n\n    return function () {\n      cancelAnimationFrame(frame);\n      window.removeEventListener(\"resize\", onWindowResize);\n      window.removeEventListener(\"mousemove\", onMouseMove);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"videoContainer\",\n      style: {\n        position: \"absolute\",\n        overflow: \"hidden\",\n        width: \"100%\",\n        height: \"100%\",\n        top: 0,\n        left: 0,\n        zIndex: \"-1\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"image\", {\n      // id=\"video\"\n      // className={styles.homeVideo}\n      src: \"/index.png \" // autoPlay\n      // loop\n      // muted\n      // playsInline=\"False\"\n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(GlitchVideo, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = GlitchVideo;\n\nvar _c;\n\n$RefreshReg$(_c, \"GlitchVideo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2lELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUixjQUFsQztBQUNBekMsSUFBQUEsTUFBTSxDQUFDaUQsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNELFdBQXJDLEVBbEZjLENBbUZkO0FBQ0E7QUFDQTs7QUFFQSxXQUFPLFlBQU07QUFDWEUsTUFBQUEsb0JBQW9CLENBQUNoQixLQUFELENBQXBCO0FBQ0FsQyxNQUFBQSxNQUFNLENBQUNtRCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsY0FBckM7QUFDQXpDLE1BQUFBLE1BQU0sQ0FBQ21ELG1CQUFQLENBQTJCLFdBQTNCLEVBQXdDSCxXQUF4QztBQUNELEtBSkQ7QUFLRCxHQTVGUSxFQTRGTixFQTVGTSxDQUFUO0FBNkZBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxRQUFFLEVBQUMsZ0JBREw7QUFFRSxXQUFLLEVBQUU7QUFDTDdDLFFBQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxpRCxRQUFBQSxRQUFRLEVBQUUsUUFGTDtBQUdMbkMsUUFBQUEsS0FBSyxFQUFFLE1BSEY7QUFJTG9DLFFBQUFBLE1BQU0sRUFBRSxNQUpIO0FBS0xDLFFBQUFBLEdBQUcsRUFBRSxDQUxBO0FBTUxDLFFBQUFBLElBQUksRUFBRSxDQU5EO0FBT0xDLFFBQUFBLE1BQU0sRUFBRTtBQVBIO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBYUU7QUFDRTtBQUNBO0FBQ0EsU0FBRyxFQUFDLGFBSE4sQ0FJRTtBQUNBO0FBQ0E7QUFDQTs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQSxrQkFERjtBQXlCRDs7R0F2SHVCOUQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2xpdGNoVmlkZW8uanM/ZmIxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRWZmZWN0Q29tcG9zZXIuanNcIjtcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1JlbmRlclBhc3MuanNcIjtcbmltcG9ydCB7IEdsaXRjaFBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0dsaXRjaFBhc3MuanNcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2xpdGNoVmlkZW8oeyBkb25lTG9hZGluZyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAvLyBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKC0xLCAxLCAxLCAtMSwgMCwgMSk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgNDUsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIDEsXG4gICAgICAxMDAwXG4gICAgKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDE7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1wiKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvQ29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAvL0NyYXp5IHNpemluZ1xuICAgIGNvbnN0IHJhdGlvID0gMS43Nzc3Nzc3Nzc3Nzc3Nzc3O1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHJhdGlvO1xuICAgIGNvbnNvbGUubG9nKHJhdGlvLCB3aWR0aCk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShpbWFnZSk7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KHJhdGlvLCAxKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dHVyZSB9KTtcbiAgICBjb25zdCBwbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgc2NlbmUuYWRkKHBsYW5lKTtcblxuICAgIGNvbnN0IGNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyKTtcbiAgICBjb25zdCByZW5kZXJQYXNzID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSk7XG4gICAgY29tcG9zZXIuYWRkUGFzcyhyZW5kZXJQYXNzKTtcblxuICAgIGNvbnN0IGdsaXRjaFBhc3MgPSBuZXcgR2xpdGNoUGFzcygpO1xuXG4gICAgbGV0IGlzTW91c2VNb3ZpbmcgPSBmYWxzZTtcblxuICAgIGxldCBmcmFtZTtcbiAgICBsZXQgZnJhbWVDb3VudCA9IDA7XG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIGlmIChpc01vdXNlTW92aW5nKSB7XG4gICAgICAgIGdsaXRjaFBhc3MuZ29XaWxkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmcmFtZUNvdW50ID4gMzApIHtcbiAgICAgICAgZ2xpdGNoUGFzcy5nb1dpbGQgPSBmYWxzZTtcbiAgICAgICAgY29tcG9zZXIucmVtb3ZlUGFzcyhnbGl0Y2hQYXNzKTtcbiAgICAgIH1cbiAgICAgIGZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgZnJhbWVDb3VudCArPSAxO1xuICAgICAgY29tcG9zZXIucmVuZGVyKCk7XG4gICAgfVxuICAgIGFuaW1hdGUoKTtcblxuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXNpemVcIik7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKDAsIDApO1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHJhdGlvO1xuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgICBsZXQgdGltZXI7XG4gICAgZnVuY3Rpb24gY2hlY2tNb3VzZVN0b3AoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaXNNb3VzZU1vdmluZyA9IGZhbHNlO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoKSB7XG4gICAgICBjaGVja01vdXNlU3RvcCgpO1xuICAgICAgaWYgKCFpc01vdXNlTW92aW5nKSB7XG4gICAgICAgIGlzTW91c2VNb3ZpbmcgPSB0cnVlO1xuICAgICAgICBmcmFtZUNvdW50ID0gMDtcbiAgICAgICAgY29tcG9zZXIuYWRkUGFzcyhnbGl0Y2hQYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAvLyB2aWRlby5vbmNhbnBsYXkgPSAoKSA9PiB7XG4gICAgLy8gICBkb25lTG9hZGluZygpO1xuICAgIC8vIH07XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cInZpZGVvQ29udGFpbmVyXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHpJbmRleDogXCItMVwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxpbWFnZVxuICAgICAgICAvLyBpZD1cInZpZGVvXCJcbiAgICAgICAgLy8gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZVZpZGVvfVxuICAgICAgICBzcmM9XCIvaW5kZXgucG5nIFwiXG4gICAgICAgIC8vIGF1dG9QbGF5XG4gICAgICAgIC8vIGxvb3BcbiAgICAgICAgLy8gbXV0ZWRcbiAgICAgICAgLy8gcGxheXNJbmxpbmU9XCJGYWxzZVwiXG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInN0eWxlcyIsIlRIUkVFIiwiRWZmZWN0Q29tcG9zZXIiLCJSZW5kZXJQYXNzIiwiR2xpdGNoUGFzcyIsIk9yYml0Q29udHJvbHMiLCJHbGl0Y2hWaWRlbyIsImRvbmVMb2FkaW5nIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiY29udHJvbHMiLCJyYXRpbyIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsInNldFNpemUiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImdlb21ldHJ5IiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJtYXAiLCJwbGFuZSIsIk1lc2giLCJhZGQiLCJjb21wb3NlciIsInJlbmRlclBhc3MiLCJhZGRQYXNzIiwiZ2xpdGNoUGFzcyIsImlzTW91c2VNb3ZpbmciLCJmcmFtZSIsImZyYW1lQ291bnQiLCJhbmltYXRlIiwiZ29XaWxkIiwicmVtb3ZlUGFzcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIm9uV2luZG93UmVzaXplIiwic2V0VGltZW91dCIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJ0aW1lciIsImNoZWNrTW91c2VTdG9wIiwiY2xlYXJUaW1lb3V0Iiwib25Nb3VzZU1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiekluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GlitchVideo.js\n");

/***/ })

});