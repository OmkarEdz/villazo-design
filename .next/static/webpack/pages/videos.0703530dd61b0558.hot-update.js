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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Videos = function(param) {\n    var global = param.global, videospage = param.videospage, footerData = param.footerData, navigation = param.navigation;\n    _s();\n    var videosList = videospage.attributes.video;\n    var mainvideosList = [];\n    videosList.forEach(function(element, index) {\n        mainvideosList.push(element);\n    });\n    var moreBtn = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    // moreBtn.current.classList.remove(\"show_BTN\");\n    // if (videospage.attributes.video.length > 4) {\n    //   moreBtn.current.classList.add(\"show_BTN\");\n    // }\n    var myLoader = function(param) {\n        var src = param.src, width = param.width, quality = param.quality;\n        return \"\".concat(src, \"?w=\").concat(width, \"&q=\").concat(quality || 75);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    var mdl = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlIframe = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlLoader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var mdlContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var youtubeVideo = function(e) {\n        mdl.current.classList.add(\"show_popup\");\n        e.target.classList.add(\"active\");\n        var _$param = e.target.getAttribute(\"data-url\");\n        console.log(_$param);\n        mdlIframe.current.setAttribute(\"src\", _$param);\n        setTimeout(function() {\n            mdlLoader.current.classList.add(\"hide_loader\");\n            mdlContent.current.classList.add(\"show_Content\");\n        }, 2500);\n    };\n    var onCloseClick = function(e) {\n        mdl.current.classList.remove(\"show_popup\");\n        mdlIframe.current.setAttribute(\"src\", \"\");\n        mdlLoader.current.classList.remove(\"hide_loader\");\n        mdlContent.current.classList.remove(\"show_Content\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-img bg-white sold_pg_wrap videos_pg_wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        navigation: navigation,\n                        global: global\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttons-wrap video-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"video-heading\",\n                                    children: \"VIDEOS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"video-wrap \".concat(showMore ? \"show-all\" : \"\"),\n                                    children: [\n                                        mainvideosList.map(function(element) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"video-box\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"video_item_wrap\",\n                                                        \"data-url\": element.youtubeEmebedURL,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                                src: element.youtubeEmebedURL,\n                                                                title: \"YouTube video player\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 66,\n                                                                columnNumber: 19\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                href: \"javascript:;\",\n                                                                className: \"youtubeIcon\",\n                                                                onClick: youtubeVideo\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                                lineNumber: 67,\n                                                                columnNumber: 19\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"video-name\",\n                                                        children: element.heading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"video-content\",\n                                                        children: element.subheading\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                ]\n                                            }, mainvideosList.key, true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, _this);\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"video-btn contact-btn sold-btn moreBtnHide\",\n                                            ref: moreBtn,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"javascript:;\",\n                                                onClick: function() {\n                                                    return setShowMore(!showMore);\n                                                },\n                                                children: showMore ? \"Less\" : \"More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main_popup video-modal\",\n                                    ref: mdl,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"custom_model\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"loader\",\n                                                ref: mdlLoader\n                                            }, void 0, false, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"custom_model_dialog\",\n                                                ref: mdlContent,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"javascript:;\",\n                                                        onClick: onCloseClick,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa-solid fa-xmark\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 65\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                                        ref: mdlIframe,\n                                                        id: \"popupIframe\",\n                                                        src: \"https://www.youtube.com/embed/fx3kvqPuTB4\",\n                                                        title: \"YouTube video player\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                footerProp: footerData\n            }, void 0, false, {\n                fileName: \"/Users/edtest/villazzo-local-frontend/pages/videos.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Videos, \"pK8qxnSrYnfNljzF1ZITM/+3Mmk=\");\n_c = Videos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOLDhEQUFDbkQsMERBQU07Z0JBQUMrRCxVQUFVLEVBQUV2RCxVQUFVOzs7OztxQkFBSTs7b0JBQ2pDLENBQ0o7QUFDSCxDQUFDO0dBcEZLSCxNQUFNO0FBQU5BLEtBQUFBLE1BQU07O0FBK0daLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvcy5qcz9mOTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuY29uc3QgVmlkZW9zID0gKHtcbiAgZ2xvYmFsLFxuICB2aWRlb3NwYWdlLFxuICBmb290ZXJEYXRhLFxuICBuYXZpZ2F0aW9uLFxufSkgPT4ge1xuICAgIGxldCB2aWRlb3NMaXN0ID0gdmlkZW9zcGFnZS5hdHRyaWJ1dGVzLnZpZGVvXG4gICAgbGV0IG1haW52aWRlb3NMaXN0ID0gW11cbiAgICB2aWRlb3NMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBtYWludmlkZW9zTGlzdC5wdXNoKGVsZW1lbnQpXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBtb3JlQnRuID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIC8vIG1vcmVCdG4uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd19CVE5cIik7XG4gICAgLy8gaWYgKHZpZGVvc3BhZ2UuYXR0cmlidXRlcy52aWRlby5sZW5ndGggPiA0KSB7XG4gICAgLy8gICBtb3JlQnRuLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNob3dfQlROXCIpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IG15TG9hZGVyID0gKHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgICByZXR1cm4gYCR7c3JjfT93PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbiAgICB9XG5cbiAgICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBtZGwgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbWRsSWZyYW1lID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG1kbExvYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBtZGxDb250ZW50ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHlvdXR1YmVWaWRlbyA9IChlKSA9PiB7XG4gICAgICBtZGwuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19wb3B1cFwiKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBsZXQgcGFyYW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtKTtcbiAgICAgIG1kbElmcmFtZS5jdXJyZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLHBhcmFtKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtZGxMb2FkZXIuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZV9sb2FkZXJcIik7XG4gICAgICAgIG1kbENvbnRlbnQuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic2hvd19Db250ZW50XCIpO1xuICAgICAgfSwgMjUwMClcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgb25DbG9zZUNsaWNrID0gKGUpID0+IHtcbiAgICAgIG1kbC5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93X3BvcHVwXCIpO1xuICAgICAgbWRsSWZyYW1lLmN1cnJlbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsXCJcIik7XG4gICAgICBtZGxMb2FkZXIuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZV9sb2FkZXJcIik7XG4gICAgICBtZGxDb250ZW50LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dfQ29udGVudFwiKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWltZyBiZy13aGl0ZSBzb2xkX3BnX3dyYXAgdmlkZW9zX3BnX3dyYXBcIj5cbiAgICAgICAgPEhlYWRlciBuYXZpZ2F0aW9uPXtuYXZpZ2F0aW9ufSBnbG9iYWw9e2dsb2JhbH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtd3JhcCB2aWRlby13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidmlkZW8taGVhZGluZ1wiPlZJREVPUzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHZpZGVvLXdyYXAgJHtzaG93TW9yZSA/IFwic2hvdy1hbGxcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgIHttYWludmlkZW9zTGlzdC5tYXAoKGVsZW1lbnQpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e21haW52aWRlb3NMaXN0LmtleX0gY2xhc3NOYW1lPVwidmlkZW8tYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb19pdGVtX3dyYXBcIiBkYXRhLXVybD17ZWxlbWVudC55b3V0dWJlRW1lYmVkVVJMfT5cbiAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtlbGVtZW50LnlvdXR1YmVFbWViZWRVUkx9IHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJ5b3V0dWJlSWNvblwiIG9uQ2xpY2s9e3lvdXR1YmVWaWRlb30+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ2aWRlby1uYW1lXCI+e2VsZW1lbnQuaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZGVvLWNvbnRlbnRcIj57ZWxlbWVudC5zdWJoZWFkaW5nfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWJ0biBjb250YWN0LWJ0biBzb2xkLWJ0biBtb3JlQnRuSGlkZVwiIHJlZj17bW9yZUJ0bn0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb3JlKCFzaG93TW9yZSl9PlxuICAgICAgICAgICAgICAgICAge3Nob3dNb3JlID8gXCJMZXNzXCIgOiBcIk1vcmVcIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcG9wdXAgdmlkZW8tbW9kYWxcIiByZWY9e21kbH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tX21vZGVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiByZWY9e21kbExvYWRlcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21fbW9kZWxfZGlhbG9nXCIgcmVmPXttZGxDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXtvbkNsb3NlQ2xpY2t9PjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgIDxpZnJhbWUgcmVmPXttZGxJZnJhbWV9IGlkPVwicG9wdXBJZnJhbWVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9meDNrdnFQdVRCNFwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgZm9vdGVyUHJvcD17Zm9vdGVyRGF0YX0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW1xuICAgIGdsb2JhbFJlcyxcbiAgICB2aWRlb3NwYWdlUmVzLFxuICAgIGZvb3RlclJlcyxcbiAgICBuYXZpZ2F0aW9uUmVzLFxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2dsb2JhbFwiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICBmZXRjaEFQSShcIi92aWRlb3NwYWdlXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgIGZldGNoQVBJKFwiL2Zvb3RlclwiLCB7IHBvcHVsYXRlOiBcImRlZXBcIiB9KSxcbiAgICBmZXRjaEFQSShcIi9oZWFkZXItbmF2XCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEsXG4gICAgICB2aWRlb3NwYWdlOiB2aWRlb3NwYWdlUmVzLmRhdGEsXG4gICAgICBmb290ZXJEYXRhOiBmb290ZXJSZXMuZGF0YSxcbiAgICAgIG5hdmlnYXRpb246IG5hdmlnYXRpb25SZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkhlYWRlciIsIkltYWdlIiwiZ2V0U3RyYXBpTWVkaWEiLCJMaW5rIiwiVmlkZW9zIiwiZ2xvYmFsIiwidmlkZW9zcGFnZSIsImZvb3RlckRhdGEiLCJuYXZpZ2F0aW9uIiwidmlkZW9zTGlzdCIsImF0dHJpYnV0ZXMiLCJ2aWRlbyIsIm1haW52aWRlb3NMaXN0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsInB1c2giLCJtb3JlQnRuIiwidXNlUmVmIiwibXlMb2FkZXIiLCJzcmMiLCJ3aWR0aCIsInF1YWxpdHkiLCJzaG93TW9yZSIsInNldFNob3dNb3JlIiwibWRsIiwibWRsSWZyYW1lIiwibWRsTG9hZGVyIiwibWRsQ29udGVudCIsInlvdXR1YmVWaWRlbyIsImUiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGFyZ2V0IiwicGFyYW0iLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsIm9uQ2xvc2VDbGljayIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZGF0YS11cmwiLCJ5b3V0dWJlRW1lYmVkVVJMIiwiaWZyYW1lIiwidGl0bGUiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJoMiIsImhlYWRpbmciLCJwIiwic3ViaGVhZGluZyIsImtleSIsInJlZiIsImkiLCJpZCIsImZvb3RlclByb3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videos.js\n"));

/***/ })

});