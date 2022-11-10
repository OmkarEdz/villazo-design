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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: \"omkar.t@edreamz.in\",\n            pass: \"Sahil@2020\"\n        },\n        secure: true\n    });\n    const mailData = {\n        from: \"omkar.t@edreamz.in\",\n        to: \"omkar.t@edreamz.in\",\n        subject: `Message From ${req.body.firstName}`,\n        text: req.body.message + \" | Sent from: \" + req.body.email,\n        html: `<div>${req.body.message}</div><p>Sent from:\n    ${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVVBLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2pDLElBQUlDLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0lBQ3RDLE1BQU1DLFdBQVcsR0FBR0YsVUFBVSxDQUFDRyxlQUFlLENBQUM7UUFDN0NDLElBQUksRUFBRSxHQUFHO1FBQ1RDLElBQUksRUFBRSxnQkFBZ0I7UUFDdEJDLElBQUksRUFBRTtZQUNIQyxJQUFJLEVBQUUsb0JBQW9CO1lBQ3pCQyxJQUFJLEVBQUUsWUFBWTtTQUNyQjtRQUNEQyxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRixNQUFNQyxRQUFRLEdBQUc7UUFDZkMsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQkMsRUFBRSxFQUFFLG9CQUFvQjtRQUN4QkMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFZixHQUFHLENBQUNnQixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDQyxJQUFJLEVBQUVsQixHQUFHLENBQUNnQixJQUFJLENBQUNHLE9BQU8sR0FBRyxnQkFBZ0IsR0FBR25CLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQ0ksS0FBSztRQUMxREMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFckIsR0FBRyxDQUFDZ0IsSUFBSSxDQUFDRyxPQUFPLENBQUM7SUFDL0IsRUFBRW5CLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQztLQUN2QjtJQUNEaEIsV0FBVyxDQUFDa0IsUUFBUSxDQUFDVixRQUFRLEVBQUUsU0FBVVcsR0FBRyxFQUFFQyxJQUFJLEVBQUU7UUFDbEQsSUFBR0QsR0FBRyxFQUNKRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO2FBRWhCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0lBQ3JCLENBQUMsQ0FBQztJQUNGdkIsR0FBRyxDQUFDMEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgbGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJylcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgcG9ydDogNDY1LFxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcbiAgICBhdXRoOiB7XG4gICAgICAgdXNlcjogJ29ta2FyLnRAZWRyZWFtei5pbicsXG4gICAgICAgIHBhc3M6ICdTYWhpbEAyMDIwJyxcbiAgICB9LFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgfSlcbiAgY29uc3QgbWFpbERhdGEgPSB7XG4gICAgZnJvbTogJ29ta2FyLnRAZWRyZWFtei5pbicsXG4gICAgdG86ICdvbWthci50QGVkcmVhbXouaW4nLFxuICAgIHN1YmplY3Q6IGBNZXNzYWdlIEZyb20gJHtyZXEuYm9keS5maXJzdE5hbWV9YCxcbiAgICB0ZXh0OiByZXEuYm9keS5tZXNzYWdlICsgXCIgfCBTZW50IGZyb206IFwiICsgcmVxLmJvZHkuZW1haWwsXG4gICAgaHRtbDogYDxkaXY+JHtyZXEuYm9keS5tZXNzYWdlfTwvZGl2PjxwPlNlbnQgZnJvbTpcbiAgICAke3JlcS5ib2R5LmVtYWlsfTwvcD5gXG4gIH1cbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcbiAgICBpZihlcnIpXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgZWxzZVxuICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgfSlcbiAgcmVzLnN0YXR1cygyMDApXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInNlY3VyZSIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImJvZHkiLCJmaXJzdE5hbWUiLCJ0ZXh0IiwibWVzc2FnZSIsImVtYWlsIiwiaHRtbCIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();