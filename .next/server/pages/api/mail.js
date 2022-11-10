"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "sparkpost":
/*!****************************!*\
  !*** external "sparkpost" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sparkpost");

/***/ }),

/***/ "(api)/./pages/api/mail.js":
/*!***************************!*\
  !*** ./pages/api/mail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SparkPost = __webpack_require__(/*! sparkpost */ \"sparkpost\");\nasync function emailHandler(req, res) {\n    const client = new SparkPost(process.env.SPARKPOST);\n    const data = JSON.parse(req.body);\n    const { email , message  } = data;\n    client.transmissions.send({\n        content: {\n            form: \"omkar.t@edreamz.in\",\n            subject: \"Test Email\",\n            html: \"<html><body><p>${message}</p></body></html>\"\n        },\n        recipients: [\n            {\n                address: email\n            }\n        ]\n    }).then(()=>{\n        res.statusCode = 200;\n        res.setHeader(\"Content-Type\", \"application-json\");\n        res.end(JSON.stringify({\n            error: null\n        }));\n    }).catch(()=>{\n        res.statusCode = 500;\n        res.setHeader(\"Content-Type\", \"application-json\");\n        res.end(JSON.stringify({\n            error: \"error sending email\"\n        }));\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDRCQUFXLENBQUM7QUFFdEMsZUFBZUMsWUFBWSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUNqQyxNQUFNQyxNQUFNLEdBQUcsSUFBSUwsU0FBUyxDQUFDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO0lBQ25ELE1BQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDO0lBQ2pDLE1BQU0sRUFBQ0MsS0FBSyxHQUFFQyxPQUFPLEdBQUMsR0FBR0wsSUFBSTtJQUU3QkosTUFBTSxDQUFDVSxhQUFhLENBQ25CQyxJQUFJLENBQUM7UUFDRkMsT0FBTyxFQUFFO1lBQ0xDLElBQUksRUFBRSxvQkFBb0I7WUFDMUJDLE9BQU8sRUFBRSxZQUFZO1lBQ3JCQyxJQUFJLEVBQUUsNkNBQTZDO1NBQ3REO1FBQ0RDLFVBQVUsRUFBRTtZQUFDO2dCQUFFQyxPQUFPLEVBQUdULEtBQUs7YUFBRTtTQUFDO0tBQ3BDLENBQUMsQ0FDRFUsSUFBSSxDQUFDLElBQU07UUFDUm5CLEdBQUcsQ0FBQ29CLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDckJwQixHQUFHLENBQUNxQixTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbERyQixHQUFHLENBQUNzQixHQUFHLENBQUNoQixJQUFJLENBQUNpQixTQUFTLENBQUM7WUFBRUMsS0FBSyxFQUFHLElBQUk7U0FBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFDLElBQU07UUFDVHpCLEdBQUcsQ0FBQ29CLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDckJwQixHQUFHLENBQUNxQixTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbERyQixHQUFHLENBQUNzQixHQUFHLENBQUNoQixJQUFJLENBQUNpQixTQUFTLENBQUM7WUFBRUMsS0FBSyxFQUFHLHFCQUFxQjtTQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxpRUFBZTFCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYmxvZy8uL3BhZ2VzL2FwaS9tYWlsLmpzPzdkMTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3BhcmtQb3N0ID0gcmVxdWlyZShcInNwYXJrcG9zdFwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZW1haWxIYW5kbGVyKHJlcSwgcmVzKXtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgU3BhcmtQb3N0KHByb2Nlc3MuZW52LlNQQVJLUE9TVCk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuICAgIGNvbnN0IHtlbWFpbCwgbWVzc2FnZX0gPSBkYXRhO1xuXG4gICAgY2xpZW50LnRyYW5zbWlzc2lvbnNcbiAgICAuc2VuZCh7XG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIGZvcm06IFwib21rYXIudEBlZHJlYW16LmluXCIsXG4gICAgICAgICAgICBzdWJqZWN0OiBcIlRlc3QgRW1haWxcIixcbiAgICAgICAgICAgIGh0bWw6ICc8aHRtbD48Ym9keT48cD4ke21lc3NhZ2V9PC9wPjwvYm9keT48L2h0bWw+JyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVjaXBpZW50czogW3sgYWRkcmVzcyA6IGVtYWlsIH1dXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24tanNvblwiKTtcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yIDogbnVsbCB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uLWpzb25cIik7XG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBlcnJvciA6IFwiZXJyb3Igc2VuZGluZyBlbWFpbFwiIH0pKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbWFpbEhhbmRsZXI7Il0sIm5hbWVzIjpbIlNwYXJrUG9zdCIsInJlcXVpcmUiLCJlbWFpbEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiU1BBUktQT1NUIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJlbWFpbCIsIm1lc3NhZ2UiLCJ0cmFuc21pc3Npb25zIiwic2VuZCIsImNvbnRlbnQiLCJmb3JtIiwic3ViamVjdCIsImh0bWwiLCJyZWNpcGllbnRzIiwiYWRkcmVzcyIsInRoZW4iLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwiZW5kIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.js"));
module.exports = __webpack_exports__;

})();