"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/videos",{

/***/ "./pages/videos.js":
/*!*************************!*\
  !*** ./pages/videos.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    console.log(omkar);\n    console.log(videosList.length);\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlIframe = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        mdl.current.classList.add(\"show_popup\");\n        e.target.classList.add(\"active\");\n        var _$param = e.target.getAttribute(\"data-url\");\n        mdlIframe.current.setAttribute(\"src\", _$param);\n        setTimeout(function() {\n            mdlLoader.current.classList.add(\"hide_loader\");\n            mdlContent.current.classList.add(\"show_Content\");\n        }, 2500);\n    };\n    var onCloseClick = function(e) {\n        mdl.current.classList.remove(\"show_popup\");\n        mdlIframe.current.setAttribute(\"src\", \"\");\n        mdlLoader.current.classList.remove(\"hide_loader\");\n        mdlContent.current.classList.remove(\"show_Content\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: mainvideosList.map(function(element) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-box\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"video_item_wrap\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                            src: element.youtubeEmebedURL,\n                                                            title: \"YouTube video player\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"javascript:;\",\n                                                            className: \"youtubeIcon\",\n                                                            onClick: youtubeVideo,\n                                                            \"data-url\": element.youtubeEmebedURL,\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"fa-brands fa-youtube\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 125\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"video-name\",\n                                                    children: element.heading\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"video-content\",\n                                                    children: element.subheading\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, mainvideosList.key, true, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this),\n                                mainvideosList.map(function(index) {\n                                    if (index.length < 4) {\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"javascript:;\",\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, _this);\n                                    }\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main_popup video-modal\",\n                                    ref: mdl,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"custom_model\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"loader\",\n                                                ref: mdlLoader\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"custom_model_dialog\",\n                                                ref: mdlContent,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"javascript:;\",\n                                                        onClick: onCloseClick,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-xmark\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 65\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                        ref: mdlIframe,\n                                                        id: \"popupIframe\",\n                                                        src: \"\",\n                                                        title: \"YouTube video player\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"InUkRRrorWJdgOUR7us0hgoXP/s=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0RBQUM0QixLQUFLLEVBQUMsc0JBQXNCOzs7Ozs2REFBVTs7Ozs7O3FEQUNsRjs7Ozs7OzZDQUNGOzs7Ozt5Q0FDRjs7Ozs7O2lDQUNGOzs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDbkQsMERBQU07Z0JBQUNnRSxVQUFVLEVBQUV4RCxVQUFVOzs7OztxQkFBSTs7b0JBQ2pDLENBQ0o7QUFDSCxDQUFDO0dBbEZLSCxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBNkdaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvcy5qcz9mOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuY29uc3QgVmlkZW9zID0gKHtcbiAgZ2xvYmFsLFxuICB2aWRlb3NwYWdlLFxuICBmb290ZXJEYXRhLFxuICBuYXZpZ2F0aW9uLFxufSkgPT4ge1xuICAgIGxldCB2aWRlb3NMaXN0ID0gdmlkZW9zcGFnZS5hdHRyaWJ1dGVzLnZpZGVvXG4gICAgbGV0IG1haW52aWRlb3NMaXN0ID0gW11cbiAgICB2aWRlb3NMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBtYWludmlkZW9zTGlzdC5wdXNoKGVsZW1lbnQpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhvbWthcik7XG4gICAgY29uc29sZS5sb2codmlkZW9zTGlzdC5sZW5ndGgpO1xuICAgIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgICByZXR1cm4gYCR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgICB9XG5cbiAgICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBtZGwgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbWRsSWZyYW1lID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1kbExvYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtZGxDb250ZW50ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHlvdXR1YmVWaWRlbyA9IChlKSA9PiB7XG4gICAgICBtZGwuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19wb3B1cFwiKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBsZXQgcGFyYW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiKTtcbiAgICAgIG1kbElmcmFtZS5jdXJyZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLHBhcmFtKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtZGxMb2FkZXIuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZV9sb2FkZXJcIik7XG4gICAgICAgIG1kbENvbnRlbnQuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19Db250ZW50XCIpO1xuICAgICAgfSwgMjUwMClcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgb25DbG9zZUNsaWNrID0gKGUpID0+IHtcbiAgICAgIG1kbC5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93X3BvcHVwXCIpO1xuICAgICAgbWRsSWZyYW1lLmN1cnJlbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsXCJcIik7XG4gICAgICBtZGxMb2FkZXIuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZV9sb2FkZXJcIik7XG4gICAgICBtZGxDb250ZW50LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dfQ29udGVudFwiKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWltZyBiZy13aGl0ZSBzb2xkX3BnX3dyYXAgdmlkZW9zX3BnX3dyYXBcIj5cbiAgICAgICAgPEhlYWRlciBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBnbG9iYWw9e2dsb2JhbH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtd3JhcCB2aWRlby13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW8taGVhZGluZ1wiPlZJREVPUzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpZGVvLXdyYXAgJHtzaG93TW9yZSA/IFwic2hvdy1hbGxcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgIHttYWludmlkZW9zTGlzdC5tYXAoKGVsZW1lbnQpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e21haW52aWRlb3NMaXN0LmtleX0gY2xhc3NOYW1lPVwidmlkZW8tYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb19pdGVtX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtlbGVtZW50LnlvdXR1YmVFbWViZWRVUkx9IHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJ5b3V0dWJlSWNvblwiIG9uQ2xpY2s9e3lvdXR1YmVWaWRlb30gZGF0YS11cmw9e2VsZW1lbnQueW91dHViZUVtZWJlZFVSTH0+PGkgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLXlvdXR1YmVcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aWRlby1uYW1lXCI+e2VsZW1lbnQuaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZGVvLWNvbnRlbnRcIj57ZWxlbWVudC5zdWJoZWFkaW5nfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bWFpbnZpZGVvc0xpc3QubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXgubGVuZ3RoIDwgIDQpIHtcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWJ0biBjb250YWN0LWJ0biBzb2xkLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb3JlKCFzaG93TW9yZSl9PlxuICAgICAgICAgICAgICAgICAgICB7c2hvd01vcmUgPyBcIkxlc3NcIiA6IFwiTW9yZVwifVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9wb3B1cCB2aWRlby1tb2RhbFwiIHJlZj17bWRsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21fbW9kZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIHJlZj17bWRsTG9hZGVyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbV9tb2RlbF9kaWFsb2dcIiByZWY9e21kbENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9e29uQ2xvc2VDbGlja30+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgPGlmcmFtZSByZWY9e21kbElmcmFtZX0gaWQ9XCJwb3B1cElmcmFtZVwiIHNyYz1cIlwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgZm9vdGVyUHJvcD17Zm9vdGVyRGF0YX0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW1xuICAgIGdsb2JhbFJlcyxcbiAgICB2aWRlb3NwYWdlUmVzLFxuICAgIGZvb3RlclJlcyxcbiAgICBuYXZpZ2F0aW9uUmVzLFxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICBmZXRjaEFQSShcIi92aWRlb3NwYWdlXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2Zvb3RlclwiLCB7IHBvcHVsYXRlOiBcImRlZXBcIiB9KSxcbiAgICBmZXRjaEFQSShcIi9oZWFkZXItbmF2XCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEsXG4gICAgICB2aWRlb3NwYWdlOiB2aWRlb3NwYWdlUmVzLmRhdGEsXG4gICAgICBmb290ZXJEYXRhOiBmb290ZXJSZXMuZGF0YSxcbiAgICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb25SZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkhlYWRlciIsIkltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJMaW5rIiwiVmlkZW9zIiwiZ2xvYmFsIiwidmlkZW9zcGFnZSIsImZvb3RlckRhdGEiLCJuYXZpZ2F0aW9uIiwidmlkZW9zTGlzdCIsImF0dHJpYnV0ZXMiLCJ2aWRlbyIsIm1haW52aWRlb3NMaXN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwib21rYXIiLCJsZW5ndGgiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsInNob3dNb3JlIiwic2V0U2hvd01vcmUiLCJtZGwiLCJ1c2VSZWYiLCJtZGxJZnJhbWUiLCJtZGxMb2FkZXIiLCJtZGxDb250ZW50IiwieW91dHViZVZpZGVvIiwiZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YXJnZXQiLCJwYXJhbSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJvbkNsb3NlQ2xpY2siLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImlmcmFtZSIsInlvdXR1YmVFbWViZWRVUkwiLCJ0aXRsZSIsImEiLCJocmVmIiwib25DbGljayIsImRhdGEtdXJsIiwiaSIsImgyIiwiaGVhZGluZyIsInAiLCJzdWJoZWFkaW5nIiwia2V5IiwicmVmIiwiaWQiLCJmb290ZXJQcm9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});