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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    var moreBtn = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // moreBtn.current.classList.remove(\"show_BTN\");\n    // if (videospage.attributes.video.length > 4) {\n    //   moreBtn.current.classList.add(\"show_BTN\");\n    // }\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        // mdl.current.classList.add(\"show_popup\");\n        e.target.classList.add(\"active\");\n        e.target.parentNode.parentNode.classList.add(\"show_popup\");\n        var element = document.querySelector(\".show_popup\");\n        setTimeout(function() {\n            // element.childNodes.mdlLoader.classList.add(\"hide_loader\");\n            mdlContent.current.classList.add(\"show_Content\");\n        }, 2500);\n    };\n    var onCloseClick = function(e) {\n        mdl.current.classList.remove(\"show_popup\");\n        mdlLoader.current.classList.remove(\"hide_loader\");\n        mdlContent.current.classList.remove(\"show_Content\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: [\n                                        mainvideosList.map(function(element, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"video-box\",\n                                                ref: mdl,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"video_item_wrap\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                src: element.youtubeEmebedURL,\n                                                                title: \"YouTube video player\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 64,\n                                                                columnNumber: 19\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                href: \"javascript:;\",\n                                                                className: \"youtubeIcon\",\n                                                                onClick: youtubeVideo,\n                                                                \"data-url\": element.youtubeEmebedURL,\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                    className: \"fa-brands fa-youtube\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                    lineNumber: 65,\n                                                                    columnNumber: 125\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 65,\n                                                                columnNumber: 19\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"video-name\",\n                                                        children: element.heading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"video-content\",\n                                                        children: element.subheading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"main_popup video-modal\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"custom_model\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"loader\",\n                                                                    ref: mdlLoader\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                    lineNumber: 71,\n                                                                    columnNumber: 21\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"custom_model_dialog\",\n                                                                    ref: mdlContent,\n                                                                    children: [\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                            href: \"javascript:;\",\n                                                                            onClick: onCloseClick,\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                                className: \"fa-solid fa-xmark\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                                lineNumber: 73,\n                                                                                columnNumber: 69\n                                                                            }, _this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                            lineNumber: 73,\n                                                                            columnNumber: 23\n                                                                        }, _this),\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                            id: \"popupIframe\",\n                                                                            src: element.youtubeEmebedURL,\n                                                                            title: \"YouTube video player\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                            lineNumber: 74,\n                                                                            columnNumber: 23\n                                                                        }, _this)\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                    lineNumber: 72,\n                                                                    columnNumber: 21\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, \"video\".concat(index), true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 15\n                                            }, _this);\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn moreBtnHide\",\n                                            ref: moreBtn,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"javascript:;\",\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"EQ0ctA1OsKWHUfB4uA5cA8Yfj4o=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsUUFBUTtvRUFBQ0csR0FBRyxFQUFFbEIsU0FBUzs7Ozs7eUVBQVE7OEVBQzlDLDhEQUFDYyxLQUFHO29FQUFDQyxTQUFTLEVBQUMscUJBQXFCO29FQUFDRyxHQUFHLEVBQUVqQixVQUFVOztzRkFDbEQsOERBQUNxQixHQUFDOzRFQUFDQyxJQUFJLEVBQUMsY0FBYzs0RUFBQ0MsT0FBTyxFQUFFWixZQUFZO3NGQUFFLDRFQUFDYyxHQUFDO2dGQUFDWCxTQUFTLEVBQUMsbUJBQW1COzs7OztxRkFBSzs7Ozs7aUZBQUk7c0ZBQ3ZGLDhEQUFDSSxRQUFNOzRFQUFDWSxFQUFFLEVBQUMsYUFBYTs0RUFBQ3JDLEdBQUcsRUFBRU4sT0FBTyxDQUFDZ0MsZ0JBQWdCOzRFQUFFQyxLQUFLLEVBQUMsc0JBQXNCOzs7OztpRkFBVTs7Ozs7O3lFQUMxRjs7Ozs7O2lFQUNGOzs7Ozs2REFDRjs7K0NBZkUsT0FBTSxDQUFRLE9BQU5oQyxLQUFLLENBQUU7Ozs7cURBZ0JuQjt5Q0FDTCxDQUFDO3NEQUNGLDhEQUFDeUIsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLDRDQUE0Qzs0Q0FBQ0csR0FBRyxFQUFFM0IsT0FBTztzREFDdEUsNEVBQUMrQixHQUFDO2dEQUFDQyxJQUFJLEVBQUMsY0FBYztnREFBQ0MsT0FBTyxFQUFFOzJEQUFNMUIsV0FBVyxDQUFDLENBQUNELFFBQVEsQ0FBQztpREFBQTswREFDekRBLFFBQVEsR0FBRyxNQUFNLEdBQUcsTUFBTTs7Ozs7cURBQ3pCOzs7OztpREFDQTs7Ozs7O3lDQUNGOzs7Ozs7aUNBQ0Y7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUN4QiwwREFBTTtnQkFBQzJELFVBQVUsRUFBRW5ELFVBQVU7Ozs7O3FCQUFJOztvQkFDakMsQ0FDSjtBQUNILENBQUM7R0FsRktILE1BQU07QUFBTkEsS0FBQUEsTUFBTTs7QUE2R1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW9zLmpzP2Y5NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5jb25zdCBWaWRlb3MgPSAoe1xuICBnbG9iYWwsXG4gIHZpZGVvc3BhZ2UsXG4gIGZvb3RlckRhdGEsXG4gIG5hdmlnYXRpb24sXG59KSA9PiB7XG4gICAgbGV0IHZpZGVvc0xpc3QgPSB2aWRlb3NwYWdlLmF0dHJpYnV0ZXMudmlkZW9cbiAgICBsZXQgbWFpbnZpZGVvc0xpc3QgPSBbXVxuICAgIHZpZGVvc0xpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIG1haW52aWRlb3NMaXN0LnB1c2goZWxlbWVudClcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1vcmVCdG4gPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgLy8gbW9yZUJ0bi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93X0JUTlwiKTtcbiAgICAvLyBpZiAodmlkZW9zcGFnZS5hdHRyaWJ1dGVzLnZpZGVvLmxlbmd0aCA+IDQpIHtcbiAgICAvLyAgIG1vcmVCdG4uY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19CVE5cIik7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICAgIHJldHVybiBgJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICAgIH1cblxuICAgIGNvbnN0IFtzaG93TW9yZSwgc2V0U2hvd01vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG1kbCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBcbiAgICBjb25zdCBtZGxMb2FkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbWRsQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCB5b3V0dWJlVmlkZW8gPSAoZSkgPT4ge1xuICAgICAgLy8gbWRsLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNob3dfcG9wdXBcIik7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzaG93X3BvcHVwXCIpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd19wb3B1cFwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBlbGVtZW50LmNoaWxkTm9kZXMubWRsTG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlX2xvYWRlclwiKTtcbiAgICAgICAgbWRsQ29udGVudC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93X0NvbnRlbnRcIik7XG4gICAgICB9LCAyNTAwKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBvbkNsb3NlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgbWRsLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dfcG9wdXBcIik7XG4gICAgICBtZGxMb2FkZXIuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZV9sb2FkZXJcIik7XG4gICAgICBtZGxDb250ZW50LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dfQ29udGVudFwiKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWltZyBiZy13aGl0ZSBzb2xkX3BnX3dyYXAgdmlkZW9zX3BnX3dyYXBcIj5cbiAgICAgICAgPEhlYWRlciBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBnbG9iYWw9e2dsb2JhbH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtd3JhcCB2aWRlby13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW8taGVhZGluZ1wiPlZJREVPUzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpZGVvLXdyYXAgJHtzaG93TW9yZSA/IFwic2hvdy1hbGxcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgIHttYWludmlkZW9zTGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgdmlkZW8ke2luZGV4fWB9IGNsYXNzTmFtZT1cInZpZGVvLWJveFwiIHJlZj17bWRsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvX2l0ZW1fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e2VsZW1lbnQueW91dHViZUVtZWJlZFVSTH0gdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cInlvdXR1YmVJY29uXCIgb25DbGljaz17eW91dHViZVZpZGVvfSBkYXRhLXVybD17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfT48aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEteW91dHViZVwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInZpZGVvLW5hbWVcIj57ZWxlbWVudC5oZWFkaW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlkZW8tY29udGVudFwiPntlbGVtZW50LnN1YmhlYWRpbmd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9wb3B1cCB2aWRlby1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21fbW9kZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiByZWY9e21kbExvYWRlcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tX21vZGVsX2RpYWxvZ1wiIHJlZj17bWRsQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9e29uQ2xvc2VDbGlja30+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJwb3B1cElmcmFtZVwiIHNyYz17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfSB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tYnRuIGNvbnRhY3QtYnRuIHNvbGQtYnRuIG1vcmVCdG5IaWRlXCIgcmVmPXttb3JlQnRufT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vcmUoIXNob3dNb3JlKX0+XG4gICAgICAgICAgICAgICAgICB7c2hvd01vcmUgPyBcIkxlc3NcIiA6IFwiTW9yZVwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciBmb290ZXJQcm9wPXtmb290ZXJEYXRhfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbXG4gICAgZ2xvYmFsUmVzLFxuICAgIHZpZGVvc3BhZ2VSZXMsXG4gICAgZm9vdGVyUmVzLFxuICAgIG5hdmlnYXRpb25SZXMsXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL3ZpZGVvc3BhZ2VcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvZm9vdGVyXCIsIHsgcG9wdWxhdGU6IFwiZGVlcFwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2hlYWRlci1uYXZcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxSZXMuZGF0YSxcbiAgICAgIHZpZGVvc3BhZ2U6IHZpZGVvc3BhZ2VSZXMuZGF0YSxcbiAgICAgIGZvb3RlckRhdGE6IGZvb3RlclJlcy5kYXRhLFxuICAgICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvblJlcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3NcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiSGVhZGVyIiwiSW1hZ2UiLCJnZXRTdHJhcGlNZWRpYSIsIkxpbmsiLCJWaWRlb3MiLCJnbG9iYWwiLCJ2aWRlb3NwYWdlIiwiZm9vdGVyRGF0YSIsIm5hdmlnYXRpb24iLCJ2aWRlb3NMaXN0IiwiYXR0cmlidXRlcyIsInZpZGVvIiwibWFpbnZpZGVvc0xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwicHVzaCIsIm1vcmVCdG4iLCJ1c2VSZWYiLCJteUxvYWRlciIsInNyYyIsIndpZHRoIiwicXVhbGl0eSIsInNob3dNb3JlIiwic2V0U2hvd01vcmUiLCJtZGwiLCJtZGxMb2FkZXIiLCJtZGxDb250ZW50IiwieW91dHViZVZpZGVvIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInBhcmVudE5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsIm9uQ2xvc2VDbGljayIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicmVmIiwiaWZyYW1lIiwieW91dHViZUVtZWJlZFVSTCIsInRpdGxlIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZGF0YS11cmwiLCJpIiwiaDIiLCJoZWFkaW5nIiwicCIsInN1YmhlYWRpbmciLCJpZCIsImZvb3RlclByb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});