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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlIframe = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        mdl.current.classList.add(\"show_popup\");\n        e.target.classList.add(\"active\");\n        var _$param = e.target.getAttribute(\"data-url\");\n        mdlIframe.current.setAttribute(\"src\", _$param);\n        setTimeout(function() {\n            mdlLoader.current.classList.add(\"hide_loader\");\n            mdlContent.current.classList.add(\"show_Content\");\n        }, 2500);\n    };\n    var onCloseClick = function(e) {\n        mdl.current.classList.remove(\"show_popup\");\n        mdlIframe.current.setAttribute(\"src\", \"\");\n        mdlLoader.current.classList.remove(\"hide_loader\");\n        mdlContent.current.classList.remove(\"show_Content\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: mainvideosList.map(function(element) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-box\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"video_item_wrap\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                            src: element.youtubeEmebedURL,\n                                                            title: \"YouTube video player\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 19\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"javascript:;\",\n                                                            className: \"youtubeIcon\",\n                                                            onClick: youtubeVideo,\n                                                            \"data-url\": element.youtubeEmebedURL,\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"fa-brands fa-youtube\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 59,\n                                                                columnNumber: 125\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"video-name\",\n                                                    children: element.heading\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"video-content\",\n                                                    children: element.subheading\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, mainvideosList.key, true, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                mainvideosList.map(function(index) {\n                                    if (index.length < 4) {\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"javascript:;\",\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, _this);\n                                    }\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main_popup video-modal\",\n                                    ref: mdl,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"custom_model\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"loader\",\n                                                ref: mdlLoader\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"custom_model_dialog\",\n                                                ref: mdlContent,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"javascript:;\",\n                                                        onClick: onCloseClick,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-xmark\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 65\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                        ref: mdlIframe,\n                                                        id: \"popupIframe\",\n                                                        src: \"\",\n                                                        title: \"YouTube video player\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"InUkRRrorWJdgOUR7us0hgoXP/s=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjswQkFDTiw4REFBQy9DLDBEQUFNO2dCQUFDNkQsVUFBVSxFQUFFckQsVUFBVTs7Ozs7cUJBQUk7O29CQUNqQyxDQUNKO0FBQ0gsQ0FBQztHQWhGS0gsTUFBTTtBQUFOQSxLQUFBQSxNQUFNOztBQTJHWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlb3MuanM/Zjk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbmNvbnN0IFZpZGVvcyA9ICh7XG4gIGdsb2JhbCxcbiAgdmlkZW9zcGFnZSxcbiAgZm9vdGVyRGF0YSxcbiAgbmF2aWdhdGlvbixcbn0pID0+IHtcbiAgICBsZXQgdmlkZW9zTGlzdCA9IHZpZGVvc3BhZ2UuYXR0cmlidXRlcy52aWRlb1xuICAgIGxldCBtYWludmlkZW9zTGlzdCA9IFtdXG4gICAgdmlkZW9zTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgbWFpbnZpZGVvc0xpc3QucHVzaChlbGVtZW50KVxuICAgIH0pXG4gICAgY29uc3QgbXlMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICAgIHJldHVybiBgJHtzcmN9P3c9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxuICAgIH1cblxuICAgIGNvbnN0IFtzaG93TW9yZSwgc2V0U2hvd01vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG1kbCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtZGxJZnJhbWUgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbWRsTG9hZGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1kbENvbnRlbnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgeW91dHViZVZpZGVvID0gKGUpID0+IHtcbiAgICAgIG1kbC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93X3BvcHVwXCIpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGxldCBwYXJhbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdXJsXCIpO1xuICAgICAgbWRsSWZyYW1lLmN1cnJlbnQuc2V0QXR0cmlidXRlKFwic3JjXCIscGFyYW0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1kbExvYWRlci5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlX2xvYWRlclwiKTtcbiAgICAgICAgbWRsQ29udGVudC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93X0NvbnRlbnRcIik7XG4gICAgICB9LCAyNTAwKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBvbkNsb3NlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgbWRsLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dfcG9wdXBcIik7XG4gICAgICBtZGxJZnJhbWUuY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcIlwiKTtcbiAgICAgIG1kbExvYWRlci5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlX2xvYWRlclwiKTtcbiAgICAgIG1kbENvbnRlbnQuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd19Db250ZW50XCIpO1xuICAgIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW1nIGJnLXdoaXRlIHNvbGRfcGdfd3JhcCB2aWRlb3NfcGdfd3JhcFwiPlxuICAgICAgICA8SGVhZGVyIG5hdmlnYXRpb249e25hdmlnYXRpb259IGdsb2JhbD17Z2xvYmFsfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy13cmFwIHZpZGVvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ2aWRlby1oZWFkaW5nXCI+VklERU9TPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdmlkZW8td3JhcCAke3Nob3dNb3JlID8gXCJzaG93LWFsbFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAge21haW52aWRlb3NMaXN0Lm1hcCgoZWxlbWVudCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17bWFpbnZpZGVvc0xpc3Qua2V5fSBjbGFzc05hbWU9XCJ2aWRlby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvX2l0ZW1fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9e2VsZW1lbnQueW91dHViZUVtZWJlZFVSTH0gdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cInlvdXR1YmVJY29uXCIgb25DbGljaz17eW91dHViZVZpZGVvfSBkYXRhLXVybD17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfT48aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEteW91dHViZVwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInZpZGVvLW5hbWVcIj57ZWxlbWVudC5oZWFkaW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlkZW8tY29udGVudFwiPntlbGVtZW50LnN1YmhlYWRpbmd9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHttYWludmlkZW9zTGlzdC5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleC5sZW5ndGggPCAgNCkge1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tYnRuIGNvbnRhY3QtYnRuIHNvbGQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01vcmUoIXNob3dNb3JlKX0+XG4gICAgICAgICAgICAgICAgICAgIHtzaG93TW9yZSA/IFwiTGVzc1wiIDogXCJNb3JlXCJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX3BvcHVwIHZpZGVvLW1vZGFsXCIgcmVmPXttZGx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbV9tb2RlbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIgcmVmPXttZGxMb2FkZXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tX21vZGVsX2RpYWxvZ1wiIHJlZj17bWRsQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25DbGljaz17b25DbG9zZUNsaWNrfT48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICA8aWZyYW1lIHJlZj17bWRsSWZyYW1lfSBpZD1cInBvcHVwSWZyYW1lXCIgc3JjPVwiXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cdFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciBmb290ZXJQcm9wPXtmb290ZXJEYXRhfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbXG4gICAgZ2xvYmFsUmVzLFxuICAgIHZpZGVvc3BhZ2VSZXMsXG4gICAgZm9vdGVyUmVzLFxuICAgIG5hdmlnYXRpb25SZXMsXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL3ZpZGVvc3BhZ2VcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvZm9vdGVyXCIsIHsgcG9wdWxhdGU6IFwiZGVlcFwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2hlYWRlci1uYXZcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxSZXMuZGF0YSxcbiAgICAgIHZpZGVvc3BhZ2U6IHZpZGVvc3BhZ2VSZXMuZGF0YSxcbiAgICAgIGZvb3RlckRhdGE6IGZvb3RlclJlcy5kYXRhLFxuICAgICAgbmF2aWdhdGlvbjogbmF2aWdhdGlvblJlcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3NcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiSGVhZGVyIiwiSW1hZ2UiLCJnZXRTdHJhcGlNZWRpYSIsIkxpbmsiLCJWaWRlb3MiLCJnbG9iYWwiLCJ2aWRlb3NwYWdlIiwiZm9vdGVyRGF0YSIsIm5hdmlnYXRpb24iLCJ2aWRlb3NMaXN0IiwiYXR0cmlidXRlcyIsInZpZGVvIiwibWFpbnZpZGVvc0xpc3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwicHVzaCIsIm15TG9hZGVyIiwic3JjIiwid2lkdGgiLCJxdWFsaXR5Iiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsIm1kbCIsInVzZVJlZiIsIm1kbElmcmFtZSIsIm1kbExvYWRlciIsIm1kbENvbnRlbnQiLCJ5b3V0dWJlVmlkZW8iLCJlIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInRhcmdldCIsInBhcmFtIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsIm9uQ2xvc2VDbGljayIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaWZyYW1lIiwieW91dHViZUVtZWJlZFVSTCIsInRpdGxlIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZGF0YS11cmwiLCJpIiwiaDIiLCJoZWFkaW5nIiwicCIsInN1YmhlYWRpbmciLCJrZXkiLCJsZW5ndGgiLCJyZWYiLCJpZCIsImZvb3RlclByb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});