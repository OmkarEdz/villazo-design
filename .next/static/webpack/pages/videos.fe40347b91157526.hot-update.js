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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlIframe = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        mdl.current.classList.add(\"show_popup\");\n        e.target.classList.add(\"active\");\n        var _$param = e.target.getAttribute(\"data-url\");\n        mdlIframe.current.setAttribute(\"src\", _$param);\n        setTimeout(function() {\n            mdlLoader.current.classList.add(\"hide_loader\");\n            mdlContent.current.classList.add(\"show_Content\");\n        }, 2500);\n    };\n    var onCloseClick = function(e) {\n        mdl.current.classList.remove(\"show_popup\");\n        mdlIframe.current.setAttribute(\"src\", \"\");\n        mdlLoader.current.classList.remove(\"hide_loader\");\n        mdlContent.current.classList.remove(\"show_Content\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: mainvideosList.map(function(element) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-box\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"video_item_wrap\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                            src: element.youtubeEmebedURL,\n                                                            title: \"YouTube video player\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"javascript:;\",\n                                                            className: \"youtubeIcon\",\n                                                            onClick: youtubeVideo,\n                                                            \"data-url\": element.youtubeEmebedURL,\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"fa-brands fa-youtube\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 59,\n                                                                columnNumber: 125\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"video-name\",\n                                                    children: element.heading\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"video-content\",\n                                                    children: element.subheading\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, mainvideosList.key, true, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                mainvideosList.map(function(index) {\n                                    if (index > 4) {\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"javascript:;\",\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, _this);\n                                    }\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main_popup video-modal\",\n                                    ref: mdl,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"custom_model\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"loader\",\n                                                ref: mdlLoader\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"custom_model_dialog\",\n                                                ref: mdlContent,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"javascript:;\",\n                                                        onClick: onCloseClick,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-xmark\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 65\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                        ref: mdlIframe,\n                                                        id: \"popupIframe\",\n                                                        src: \"\",\n                                                        title: \"YouTube video player\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"InUkRRrorWJdgOUR7us0hgoXP/s=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0MsMERBQU07Z0JBQUM0RCxVQUFVLEVBQUVwRCxVQUFVOzs7OztxQkFBSTs7b0JBQ2pDLENBQ0o7QUFDSCxDQUFDO0dBaEZLSCxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBMkdaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvcy5qcz9mOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuY29uc3QgVmlkZW9zID0gKHtcbiAgZ2xvYmFsLFxuICB2aWRlb3NwYWdlLFxuICBmb290ZXJEYXRhLFxuICBuYXZpZ2F0aW9uLFxufSkgPT4ge1xuICAgIGxldCB2aWRlb3NMaXN0ID0gdmlkZW9zcGFnZS5hdHRyaWJ1dGVzLnZpZGVvXG4gICAgbGV0IG1haW52aWRlb3NMaXN0ID0gW11cbiAgICB2aWRlb3NMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBtYWludmlkZW9zTGlzdC5wdXNoKGVsZW1lbnQpXG4gICAgfSlcbiAgICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICAgICAgcmV0dXJuIGAke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gICAgfVxuXG4gICAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbWRsID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1kbElmcmFtZSA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtZGxMb2FkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbWRsQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCB5b3V0dWJlVmlkZW8gPSAoZSkgPT4ge1xuICAgICAgbWRsLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNob3dfcG9wdXBcIik7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgbGV0IHBhcmFtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS11cmxcIik7XG4gICAgICBtZGxJZnJhbWUuY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixwYXJhbSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWRsTG9hZGVyLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVfbG9hZGVyXCIpO1xuICAgICAgICBtZGxDb250ZW50LmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNob3dfQ29udGVudFwiKTtcbiAgICAgIH0sIDI1MDApXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG9uQ2xvc2VDbGljayA9IChlKSA9PiB7XG4gICAgICBtZGwuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd19wb3B1cFwiKTtcbiAgICAgIG1kbElmcmFtZS5jdXJyZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLFwiXCIpO1xuICAgICAgbWRsTG9hZGVyLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVfbG9hZGVyXCIpO1xuICAgICAgbWRsQ29udGVudC5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93X0NvbnRlbnRcIik7XG4gICAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbWcgYmctd2hpdGUgc29sZF9wZ193cmFwIHZpZGVvc19wZ193cmFwXCI+XG4gICAgICAgIDxIZWFkZXIgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gZ2xvYmFsPXtnbG9iYWx9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLXdyYXAgdmlkZW8td3JhcHBlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpZGVvLWhlYWRpbmdcIj5WSURFT1M8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B2aWRlby13cmFwICR7c2hvd01vcmUgPyBcInNob3ctYWxsXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICB7bWFpbnZpZGVvc0xpc3QubWFwKChlbGVtZW50KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXttYWludmlkZW9zTGlzdC5rZXl9IGNsYXNzTmFtZT1cInZpZGVvLWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9faXRlbV93cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfSB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwieW91dHViZUljb25cIiBvbkNsaWNrPXt5b3V0dWJlVmlkZW99IGRhdGEtdXJsPXtlbGVtZW50LnlvdXR1YmVFbWViZWRVUkx9PjxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS15b3V0dWJlXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidmlkZW8tbmFtZVwiPntlbGVtZW50LmhlYWRpbmd9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2aWRlby1jb250ZW50XCI+e2VsZW1lbnQuc3ViaGVhZGluZ308L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21haW52aWRlb3NMaXN0Lm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID4gNCkge1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tYnRuIGNvbnRhY3QtYnRuIHNvbGQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vcmUoIXNob3dNb3JlKX0+XG4gICAgICAgICAgICAgICAgICAgIHtzaG93TW9yZSA/IFwiTGVzc1wiIDogXCJNb3JlXCJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX3BvcHVwIHZpZGVvLW1vZGFsXCIgcmVmPXttZGx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbV9tb2RlbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIgcmVmPXttZGxMb2FkZXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tX21vZGVsX2RpYWxvZ1wiIHJlZj17bWRsQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17b25DbG9zZUNsaWNrfT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICA8aWZyYW1lIHJlZj17bWRsSWZyYW1lfSBpZD1cInBvcHVwSWZyYW1lXCIgc3JjPVwiXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciBmb290ZXJQcm9wPXtmb290ZXJEYXRhfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbXG4gICAgZ2xvYmFsUmVzLFxuICAgIHZpZGVvc3BhZ2VSZXMsXG4gICAgZm9vdGVyUmVzLFxuICAgIG5hdmlnYXRpb25SZXMsXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL3ZpZGVvc3BhZ2VcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvZm9vdGVyXCIsIHsgcG9wdWxhdGU6IFwiZGVlcFwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2hlYWRlci1uYXZcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxSZXMuZGF0YSxcbiAgICAgIHZpZGVvc3BhZ2U6IHZpZGVvc3BhZ2VSZXMuZGF0YSxcbiAgICAgIGZvb3RlckRhdGE6IGZvb3RlclJlcy5kYXRhLFxuICAgICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvblJlcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3NcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiSGVhZGVyIiwiSW1hZ2UiLCJnZXRTdHJhcGlNZWRpYSIsIkxpbmsiLCJWaWRlb3MiLCJnbG9iYWwiLCJ2aWRlb3NwYWdlIiwiZm9vdGVyRGF0YSIsIm5hdmlnYXRpb24iLCJ2aWRlb3NMaXN0IiwiYXR0cmlidXRlcyIsInZpZGVvIiwibWFpbnZpZGVvc0xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwicHVzaCIsIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5Iiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsIm1kbCIsInVzZVJlZiIsIm1kbElmcmFtZSIsIm1kbExvYWRlciIsIm1kbENvbnRlbnQiLCJ5b3V0dWJlVmlkZW8iLCJlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInRhcmdldCIsInBhcmFtIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsIm9uQ2xvc2VDbGljayIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaWZyYW1lIiwieW91dHViZUVtZWJlZFVSTCIsInRpdGxlIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZGF0YS11cmwiLCJpIiwiaDIiLCJoZWFkaW5nIiwicCIsInN1YmhlYWRpbmciLCJrZXkiLCJyZWYiLCJpZCIsImZvb3RlclByb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});