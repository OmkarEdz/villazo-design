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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    var moreBtn = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // moreBtn.current.classList.remove(\"show_BTN\");\n    // if (videospage.attributes.video.length > 4) {\n    //   moreBtn.current.classList.add(\"show_BTN\");\n    // }\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        e.target.classList.add(\"active\");\n        e.target.parentNode.parentNode.classList.add(\"show_popup\");\n    };\n    var iframe = document.querySelector(\"iframe\");\n    var iframeSrc = iframe.src;\n    var onCloseClick = function(e) {\n        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(\"show_popup\");\n        e.target.parentNode.parentNode.parentNode.parentNode.classList.add(\"abc\");\n        iframe.src = iframeSrc;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: [\n                                        mainvideosList.map(function(element, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"video-box\",\n                                                ref: mdl,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"video_item_wrap\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                src: element.youtubeEmebedURL,\n                                                                title: \"YouTube video player\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 59,\n                                                                columnNumber: 19\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                href: \"javascript:;\",\n                                                                className: \"youtubeIcon\",\n                                                                onClick: youtubeVideo,\n                                                                \"data-url\": element.youtubeEmebedURL\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 60,\n                                                                columnNumber: 19\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"video-name\",\n                                                        children: element.heading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"video-content\",\n                                                        children: element.subheading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"main_popup video-modal\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"custom_model\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"loader hide_loader\",\n                                                                    ref: mdlLoader\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                    lineNumber: 66,\n                                                                    columnNumber: 21\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"custom_model_dialog show_Content\",\n                                                                    ref: mdlContent,\n                                                                    children: [\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                            href: \"javascript:;\",\n                                                                            onClick: onCloseClick,\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                                className: \"fa-solid fa-xmark\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                                lineNumber: 68,\n                                                                                columnNumber: 69\n                                                                            }, _this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                            lineNumber: 68,\n                                                                            columnNumber: 23\n                                                                        }, _this),\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                            id: \"popupIframe\",\n                                                                            src: element.youtubeEmebedURL,\n                                                                            title: \"YouTube video player\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                            lineNumber: 69,\n                                                                            columnNumber: 23\n                                                                        }, _this)\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                    lineNumber: 67,\n                                                                    columnNumber: 21\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, \"video\".concat(index), true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, _this);\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn moreBtnHide\",\n                                            ref: moreBtn,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"javascript:;\",\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"EQ0ctA1OsKWHUfB4uA5cA8Yfj4o=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLGtDQUFrQztvRUFBQ0csR0FBRyxFQUFFakIsVUFBVTs7c0ZBQy9ELDhEQUFDb0IsR0FBQzs0RUFBQ0MsSUFBSSxFQUFDLGNBQWM7NEVBQUNDLE9BQU8sRUFBRVgsWUFBWTtzRkFBRSw0RUFBQ2lCLEdBQUM7Z0ZBQUNkLFNBQVMsRUFBQyxtQkFBbUI7Ozs7O3FGQUFLOzs7OztpRkFBSTtzRkFDdkYsOERBQUNQLFFBQU07NEVBQUNzQixFQUFFLEVBQUMsYUFBYTs0RUFBQ3BDLEdBQUcsRUFBRU4sT0FBTyxDQUFDK0IsZ0JBQWdCOzRFQUFFQyxLQUFLLEVBQUMsc0JBQXNCOzs7OztpRkFBVTs7Ozs7O3lFQUMxRjs7Ozs7O2lFQUNGOzs7Ozs2REFDRjs7K0NBZkUsT0FBTSxDQUFRLE9BQU4vQixLQUFLLENBQUU7Ozs7cURBZ0JuQjt5Q0FDTCxDQUFDO3NEQUNGLDhEQUFDeUIsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLDRDQUE0Qzs0Q0FBQ0csR0FBRyxFQUFFM0IsT0FBTztzREFDdEUsNEVBQUM4QixHQUFDO2dEQUFDQyxJQUFJLEVBQUMsY0FBYztnREFBQ0MsT0FBTyxFQUFFOzJEQUFNekIsV0FBVyxDQUFDLENBQUNELFFBQVEsQ0FBQztpREFBQTswREFDekRBLFFBQVEsR0FBRyxNQUFNLEdBQUcsTUFBTTs7Ozs7cURBQ3pCOzs7OztpREFDQTs7Ozs7O3lDQUNGOzs7Ozs7aUNBQ0Y7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUN4QiwwREFBTTtnQkFBQzBELFVBQVUsRUFBRWxELFVBQVU7Ozs7O3FCQUFJOztvQkFDakMsQ0FDSjtBQUNILENBQUM7R0E3RUtILE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUF3R1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW9zLmpzP2Y5NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5jb25zdCBWaWRlb3MgPSAoe1xuICBnbG9iYWwsXG4gIHZpZGVvc3BhZ2UsXG4gIGZvb3RlckRhdGEsXG4gIG5hdmlnYXRpb24sXG59KSA9PiB7XG4gICAgbGV0IHZpZGVvc0xpc3QgPSB2aWRlb3NwYWdlLmF0dHJpYnV0ZXMudmlkZW9cbiAgICBsZXQgbWFpbnZpZGVvc0xpc3QgPSBbXVxuICAgIHZpZGVvc0xpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIG1haW52aWRlb3NMaXN0LnB1c2goZWxlbWVudClcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1vcmVCdG4gPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgLy8gbW9yZUJ0bi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93X0JUTlwiKTtcbiAgICAvLyBpZiAodmlkZW9zcGFnZS5hdHRyaWJ1dGVzLnZpZGVvLmxlbmd0aCA+IDQpIHtcbiAgICAvLyAgIG1vcmVCdG4uY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19CVE5cIik7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICAgIHJldHVybiBgJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICAgIH1cblxuICAgIGNvbnN0IFtzaG93TW9yZSwgc2V0U2hvd01vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG1kbCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtZGxMb2FkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbWRsQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCB5b3V0dWJlVmlkZW8gPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwic2hvd19wb3B1cFwiKTtcbiAgICB9XG4gICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgICAgdmFyIGlmcmFtZVNyYyA9IGlmcmFtZS5zcmM7XG4gICAgY29uc3Qgb25DbG9zZUNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd19wb3B1cFwiKTtcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImFiY1wiKTtcbiAgICAgIFxuICAgICAgaWZyYW1lLnNyYyA9IGlmcmFtZVNyYztcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWltZyBiZy13aGl0ZSBzb2xkX3BnX3dyYXAgdmlkZW9zX3BnX3dyYXBcIj5cbiAgICAgICAgPEhlYWRlciBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBnbG9iYWw9e2dsb2JhbH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtd3JhcCB2aWRlby13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW8taGVhZGluZ1wiPlZJREVPUzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpZGVvLXdyYXAgJHtzaG93TW9yZSA/IFwic2hvdy1hbGxcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgIHttYWludmlkZW9zTGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgdmlkZW8ke2luZGV4fWB9IGNsYXNzTmFtZT1cInZpZGVvLWJveFwiIHJlZj17bWRsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvX2l0ZW1fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e2VsZW1lbnQueW91dHViZUVtZWJlZFVSTH0gdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cInlvdXR1YmVJY29uXCIgb25DbGljaz17eW91dHViZVZpZGVvfSBkYXRhLXVybD17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfT48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInZpZGVvLW5hbWVcIj57ZWxlbWVudC5oZWFkaW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlkZW8tY29udGVudFwiPntlbGVtZW50LnN1YmhlYWRpbmd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9wb3B1cCB2aWRlby1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21fbW9kZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXIgaGlkZV9sb2FkZXJcIiByZWY9e21kbExvYWRlcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tX21vZGVsX2RpYWxvZyBzaG93X0NvbnRlbnRcIiByZWY9e21kbENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXtvbkNsb3NlQ2xpY2t9PjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIGlkPVwicG9wdXBJZnJhbWVcIiBzcmM9e2VsZW1lbnQueW91dHViZUVtZWJlZFVSTH0gdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWJ0biBjb250YWN0LWJ0biBzb2xkLWJ0biBtb3JlQnRuSGlkZVwiIHJlZj17bW9yZUJ0bn0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb3JlKCFzaG93TW9yZSl9PlxuICAgICAgICAgICAgICAgICAge3Nob3dNb3JlID8gXCJMZXNzXCIgOiBcIk1vcmVcIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgZm9vdGVyUHJvcD17Zm9vdGVyRGF0YX0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW1xuICAgIGdsb2JhbFJlcyxcbiAgICB2aWRlb3NwYWdlUmVzLFxuICAgIGZvb3RlclJlcyxcbiAgICBuYXZpZ2F0aW9uUmVzLFxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICBmZXRjaEFQSShcIi92aWRlb3NwYWdlXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2Zvb3RlclwiLCB7IHBvcHVsYXRlOiBcImRlZXBcIiB9KSxcbiAgICBmZXRjaEFQSShcIi9oZWFkZXItbmF2XCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEsXG4gICAgICB2aWRlb3NwYWdlOiB2aWRlb3NwYWdlUmVzLmRhdGEsXG4gICAgICBmb290ZXJEYXRhOiBmb290ZXJSZXMuZGF0YSxcbiAgICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb25SZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkhlYWRlciIsIkltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJMaW5rIiwiVmlkZW9zIiwiZ2xvYmFsIiwidmlkZW9zcGFnZSIsImZvb3RlckRhdGEiLCJuYXZpZ2F0aW9uIiwidmlkZW9zTGlzdCIsImF0dHJpYnV0ZXMiLCJ2aWRlbyIsIm1haW52aWRlb3NMaXN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsInB1c2giLCJtb3JlQnRuIiwidXNlUmVmIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJzaG93TW9yZSIsInNldFNob3dNb3JlIiwibWRsIiwibWRsTG9hZGVyIiwibWRsQ29udGVudCIsInlvdXR1YmVWaWRlbyIsImUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXJlbnROb2RlIiwiaWZyYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaWZyYW1lU3JjIiwib25DbG9zZUNsaWNrIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJyZWYiLCJ5b3V0dWJlRW1lYmVkVVJMIiwidGl0bGUiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJkYXRhLXVybCIsImgyIiwiaGVhZGluZyIsInAiLCJzdWJoZWFkaW5nIiwiaSIsImlkIiwiZm9vdGVyUHJvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});