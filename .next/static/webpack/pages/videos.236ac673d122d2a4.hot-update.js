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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    var moreBtn = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // moreBtn.current.classList.remove(\"show_BTN\");\n    // if (videospage.attributes.video.length > 4) {\n    //   moreBtn.current.classList.add(\"show_BTN\");\n    // }\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        e.target.classList.add(\"active\");\n        e.target.parentNode.parentNode.classList.add(\"show_popup\");\n    };\n    var onCloseClick = function(e) {\n        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(\"show_popup\");\n        var _$param = e.target.parentNode.getAttribute(\"data-url\");\n        console.log(_$param);\n        var resetIframe = e.target.closest(\"iframe\").attr(data);\n        alert(resetIframe);\n    // e.target.next().setAttribute(\"src\",param);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: [\n                                        mainvideosList.map(function(element, index) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"video-box\",\n                                                ref: mdl,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"video_item_wrap\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                src: element.youtubeEmebedURL,\n                                                                title: \"YouTube video player\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 60,\n                                                                columnNumber: 19\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                href: \"javascript:;\",\n                                                                className: \"youtubeIcon\",\n                                                                onClick: youtubeVideo\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 19\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"video-name\",\n                                                        children: element.heading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"video-content\",\n                                                        children: element.subheading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"main_popup video-modal\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"custom_model\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"loader hide_loader\",\n                                                                    ref: mdlLoader\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                    lineNumber: 67,\n                                                                    columnNumber: 21\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"custom_model_dialog show_Content\",\n                                                                    ref: mdlContent,\n                                                                    \"data-url\": element.youtubeEmebedURL,\n                                                                    children: [\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                            \"data-url\": element.youtubeEmebedURL,\n                                                                            href: \"javascript:;\",\n                                                                            onClick: onCloseClick,\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                                className: \"fa-solid fa-xmark\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                                lineNumber: 69,\n                                                                                columnNumber: 105\n                                                                            }, _this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                            lineNumber: 69,\n                                                                            columnNumber: 23\n                                                                        }, _this),\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                            id: \"popupIframe\",\n                                                                            src: element.youtubeEmebedURL,\n                                                                            title: \"YouTube video player\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                            lineNumber: 70,\n                                                                            columnNumber: 23\n                                                                        }, _this)\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                    lineNumber: 68,\n                                                                    columnNumber: 21\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, \"video\".concat(index), true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 15\n                                            }, _this);\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn moreBtnHide\",\n                                            ref: moreBtn,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"javascript:;\",\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"EQ0ctA1OsKWHUfB4uA5cA8Yfj4o=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBRXRCLFVBQVU7b0VBQUVpQyxVQUFRLEVBQUU5QyxPQUFPLENBQUNxQyxnQkFBZ0I7O3NGQUNuRyw4REFBQ0UsR0FBQzs0RUFBQ08sVUFBUSxFQUFFOUMsT0FBTyxDQUFDcUMsZ0JBQWdCOzRFQUFFRyxJQUFJLEVBQUMsY0FBYzs0RUFBQ0MsT0FBTyxFQUFFckIsWUFBWTtzRkFBRSw0RUFBQzJCLEdBQUM7Z0ZBQUNmLFNBQVMsRUFBQyxtQkFBbUI7Ozs7O3FGQUFLOzs7OztpRkFBSTtzRkFDM0gsOERBQUNJLFFBQU07NEVBQUNZLEVBQUUsRUFBQyxhQUFhOzRFQUFDMUMsR0FBRyxFQUFFTixPQUFPLENBQUNxQyxnQkFBZ0I7NEVBQUVDLEtBQUssRUFBQyxzQkFBc0I7Ozs7O2lGQUFVOzs7Ozs7eUVBQzFGOzs7Ozs7aUVBQ0Y7Ozs7OzZEQUNGOzsrQ0FmRSxPQUFNLENBQVEsT0FBTnJDLEtBQUssQ0FBRTs7OztxREFnQm5CO3lDQUNMLENBQUM7c0RBQ0YsOERBQUM4QixLQUFHOzRDQUFDQyxTQUFTLEVBQUMsNENBQTRDOzRDQUFDRyxHQUFHLEVBQUVoQyxPQUFPO3NEQUN0RSw0RUFBQ29DLEdBQUM7Z0RBQUNDLElBQUksRUFBQyxjQUFjO2dEQUFDQyxPQUFPLEVBQUU7MkRBQU0vQixXQUFXLENBQUMsQ0FBQ0QsUUFBUSxDQUFDO2lEQUFBOzBEQUN6REEsUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNOzs7OztxREFDekI7Ozs7O2lEQUNBOzs7Ozs7eUNBQ0Y7Ozs7OztpQ0FDRjs7Ozs7NkJBQ0Y7Ozs7OztxQkFDRjswQkFDTiw4REFBQ3hCLDBEQUFNO2dCQUFDZ0UsVUFBVSxFQUFFeEQsVUFBVTs7Ozs7cUJBQUk7O29CQUNqQyxDQUNKO0FBQ0gsQ0FBQztHQTlFS0gsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQXlHWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlb3MuanM/Zjk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbmNvbnN0IFZpZGVvcyA9ICh7XG4gIGdsb2JhbCxcbiAgdmlkZW9zcGFnZSxcbiAgZm9vdGVyRGF0YSxcbiAgbmF2aWdhdGlvbixcbn0pID0+IHtcbiAgICBsZXQgdmlkZW9zTGlzdCA9IHZpZGVvc3BhZ2UuYXR0cmlidXRlcy52aWRlb1xuICAgIGxldCBtYWludmlkZW9zTGlzdCA9IFtdXG4gICAgdmlkZW9zTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgbWFpbnZpZGVvc0xpc3QucHVzaChlbGVtZW50KVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgbW9yZUJ0biA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICAvLyBtb3JlQnRuLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dfQlROXCIpO1xuICAgIC8vIGlmICh2aWRlb3NwYWdlLmF0dHJpYnV0ZXMudmlkZW8ubGVuZ3RoID4gNCkge1xuICAgIC8vICAgbW9yZUJ0bi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93X0JUTlwiKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBteUxvYWRlciA9ICh7IHNyYywgd2lkdGgsIHF1YWxpdHkgfSkgPT4ge1xuICAgICAgcmV0dXJuIGAke3NyY30/dz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG4gICAgfVxuXG4gICAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbWRsID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1kbExvYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtZGxDb250ZW50ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHlvdXR1YmVWaWRlbyA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJzaG93X3BvcHVwXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBvbkNsb3NlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93X3BvcHVwXCIpO1xuICAgICAgbGV0IHBhcmFtID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtKTtcbiAgICAgIGNvbnN0IHJlc2V0SWZyYW1lID0gZS50YXJnZXQuY2xvc2VzdCgnaWZyYW1lJykuYXR0cihkYXRhKTtcbiAgICAgIGFsZXJ0KHJlc2V0SWZyYW1lKTtcbiAgICAgIC8vIGUudGFyZ2V0Lm5leHQoKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixwYXJhbSk7XG4gICAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbWcgYmctd2hpdGUgc29sZF9wZ193cmFwIHZpZGVvc19wZ193cmFwXCI+XG4gICAgICAgIDxIZWFkZXIgbmF2aWdhdGlvbj17bmF2aWdhdGlvbn0gZ2xvYmFsPXtnbG9iYWx9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLXdyYXAgdmlkZW8td3JhcHBlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInZpZGVvLWhlYWRpbmdcIj5WSURFT1M8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B2aWRlby13cmFwICR7c2hvd01vcmUgPyBcInNob3ctYWxsXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICB7bWFpbnZpZGVvc0xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17YHZpZGVvJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ2aWRlby1ib3hcIiByZWY9e21kbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb19pdGVtX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtlbGVtZW50LnlvdXR1YmVFbWViZWRVUkx9IHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJ5b3V0dWJlSWNvblwiIG9uQ2xpY2s9e3lvdXR1YmVWaWRlb30+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aWRlby1uYW1lXCI+e2VsZW1lbnQuaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZGVvLWNvbnRlbnRcIj57ZWxlbWVudC5zdWJoZWFkaW5nfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcG9wdXAgdmlkZW8tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tX21vZGVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyIGhpZGVfbG9hZGVyXCIgcmVmPXttZGxMb2FkZXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbV9tb2RlbF9kaWFsb2cgc2hvd19Db250ZW50XCIgcmVmPXttZGxDb250ZW50fSBkYXRhLXVybD17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXVybD17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17b25DbG9zZUNsaWNrfT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBpZD1cInBvcHVwSWZyYW1lXCIgc3JjPXtlbGVtZW50LnlvdXR1YmVFbWViZWRVUkx9IHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1idG4gY29udGFjdC1idG4gc29sZC1idG4gbW9yZUJ0bkhpZGVcIiByZWY9e21vcmVCdG59PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9yZSghc2hvd01vcmUpfT5cbiAgICAgICAgICAgICAgICAgIHtzaG93TW9yZSA/IFwiTGVzc1wiIDogXCJNb3JlXCJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Plx0XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIGZvb3RlclByb3A9e2Zvb3RlckRhdGF9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBSdW4gQVBJIGNhbGxzIGluIHBhcmFsbGVsXG4gIGNvbnN0IFtcbiAgICBnbG9iYWxSZXMsXG4gICAgdmlkZW9zcGFnZVJlcyxcbiAgICBmb290ZXJSZXMsXG4gICAgbmF2aWdhdGlvblJlcyxcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi9nbG9iYWxcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvdmlkZW9zcGFnZVwiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICBmZXRjaEFQSShcIi9mb290ZXJcIiwgeyBwb3B1bGF0ZTogXCJkZWVwXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvaGVhZGVyLW5hdlwiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhLFxuICAgICAgdmlkZW9zcGFnZTogdmlkZW9zcGFnZVJlcy5kYXRhLFxuICAgICAgZm9vdGVyRGF0YTogZm9vdGVyUmVzLmRhdGEsXG4gICAgICBuYXZpZ2F0aW9uOiBuYXZpZ2F0aW9uUmVzLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvc1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb290ZXIiLCJIZWFkZXIiLCJJbWFnZSIsImdldFN0cmFwaU1lZGlhIiwiTGluayIsIlZpZGVvcyIsImdsb2JhbCIsInZpZGVvc3BhZ2UiLCJmb290ZXJEYXRhIiwibmF2aWdhdGlvbiIsInZpZGVvc0xpc3QiLCJhdHRyaWJ1dGVzIiwidmlkZW8iLCJtYWludmlkZW9zTGlzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwdXNoIiwibW9yZUJ0biIsInVzZVJlZiIsIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5Iiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsIm1kbCIsIm1kbExvYWRlciIsIm1kbENvbnRlbnQiLCJ5b3V0dWJlVmlkZW8iLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicGFyZW50Tm9kZSIsIm9uQ2xvc2VDbGljayIsInJlbW92ZSIsInBhcmFtIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInJlc2V0SWZyYW1lIiwiY2xvc2VzdCIsImF0dHIiLCJkYXRhIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInJlZiIsImlmcmFtZSIsInlvdXR1YmVFbWViZWRVUkwiLCJ0aXRsZSIsImEiLCJocmVmIiwib25DbGljayIsImgyIiwiaGVhZGluZyIsInAiLCJzdWJoZWFkaW5nIiwiZGF0YS11cmwiLCJpIiwiaWQiLCJmb290ZXJQcm9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});