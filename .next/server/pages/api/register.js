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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fregister.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fregister.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/register.js */ \"(api)/./pages/api/register.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_register_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_register_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/register\",\n        pathname: \"/api/register\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_register_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnJlZ2lzdGVyJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZyZWdpc3Rlci5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUNvRDtBQUNwRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsbURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG1EQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NydWRzLz8xM2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZWdpc3RlclwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JlZ2lzdGVyXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fregister.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ \"(api)/./pages/models/userModel.js\");\n/* harmony import */ var _validations_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validations/auth */ \"(api)/./pages/validations/auth.js\");\n/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common */ \"(api)/./pages/utils/common.js\");\n// backend/api/register.js\n\n // Import the User model\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name, email, password } = req.body;\n        // Validate request body\n        // if (!name || !email || !password) {\n        //   return res.status(400).json({ error: 'Name, email, and password are required' });\n        // }\n        // Validate request body against schema\n        const { error, value } = _validations_auth__WEBPACK_IMPORTED_MODULE_2__.registerSchema.validate(req.body, {\n            abortEarly: false\n        }); // Set abortEarly to false to get all errors\n        if (error) {\n            let errors = (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.extractErrors)(error);\n            return res.status(400).json({\n                errors\n            });\n        }\n        try {\n            // Find the user by email\n            const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                email\n            });\n            // Check if user exists and compare passwords\n            if (user) {\n                return res.status(400).json({\n                    errors: {\n                        email: \"Email already exist\"\n                    }\n                });\n            }\n            // Hash the password\n            const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10); // 10 is the salt rounds\n            // Create a new user with the hashed password\n            const newUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                name,\n                email,\n                password: hashedPassword\n            });\n            // Save the user to the database\n            // await newUser.save();\n            // Return success response\n            res.status(201).json({\n                message: \"User registered successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error registering user:\", error);\n            res.status(500).json({\n                error: \"Internal server error\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        return res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBRUU7QUFDZ0IsQ0FBQyx3QkFBd0I7QUFDbkI7QUFDTDtBQUU5QixlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFMUMsd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0QyxzRkFBc0Y7UUFDdEYsSUFBSTtRQUVKLHVDQUF1QztRQUN2QyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQUdYLDZEQUFjQSxDQUFDWSxRQUFRLENBQUNULElBQUlNLElBQUksRUFBRTtZQUFFSSxZQUFZO1FBQU0sSUFBSSw0Q0FBNEM7UUFDL0gsSUFBSUgsT0FBTztZQUNQLElBQUlJLFNBQVNiLDREQUFhQSxDQUFDUztZQUMzQixPQUFPTixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRjtZQUFPO1FBQ3pDO1FBRUEsSUFBSTtZQUVGLHlCQUF5QjtZQUN6QixNQUFNRyxPQUFPLE1BQU1sQix5REFBU0EsQ0FBQ21CLE9BQU8sQ0FBQztnQkFBRVg7WUFBTTtZQUU3Qyw2Q0FBNkM7WUFDN0MsSUFBSVUsTUFBTTtnQkFDUixPQUFPYixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRixRQUFRO3dCQUFDUCxPQUFNO29CQUFxQjtnQkFBRTtZQUN0RTtZQUVBLG9CQUFvQjtZQUNwQixNQUFNWSxpQkFBaUIsTUFBTXJCLGtEQUFXLENBQUNVLFVBQVUsS0FBSyx3QkFBd0I7WUFFaEYsNkNBQTZDO1lBQzdDLE1BQU1hLFVBQVUsTUFBTXRCLHlEQUFTQSxDQUFDdUIsTUFBTSxDQUFDO2dCQUNyQ2hCO2dCQUNBQztnQkFDQUMsVUFBVVc7WUFDWjtZQUVBLGdDQUFnQztZQUNoQyx3QkFBd0I7WUFFeEIsMEJBQTBCO1lBQzFCZixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFTyxTQUFTO1lBQStCO1FBQ2pFLEVBQUUsT0FBT2IsT0FBTztZQUNkYyxRQUFRZCxLQUFLLENBQUMsMkJBQTJCQTtZQUN6Q04sSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRU4sT0FBTztZQUF3QjtRQUN4RDtJQUNGLE9BQU87UUFDTE4sSUFBSXFCLFNBQVMsQ0FBQyxTQUFTO1lBQUM7U0FBTztRQUMvQixPQUFPckIsSUFBSVcsTUFBTSxDQUFDLEtBQUtXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRXZCLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDL0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NydWRzLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLmpzPzE3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYmFja2VuZC9hcGkvcmVnaXN0ZXIuanNcblxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHVzZXJNb2RlbCBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJzsgLy8gSW1wb3J0IHRoZSBVc2VyIG1vZGVsXG5pbXBvcnQge3JlZ2lzdGVyU2NoZW1hfSBmcm9tICcuLi92YWxpZGF0aW9ucy9hdXRoJ1xuaW1wb3J0IHtleHRyYWN0RXJyb3JzfSBmcm9tICcuLi91dGlscy9jb21tb24nXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIC8vIFZhbGlkYXRlIHJlcXVlc3QgYm9keVxuICAgIC8vIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgLy8gICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ05hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkJyB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBWYWxpZGF0ZSByZXF1ZXN0IGJvZHkgYWdhaW5zdCBzY2hlbWFcbiAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gcmVnaXN0ZXJTY2hlbWEudmFsaWRhdGUocmVxLmJvZHksIHsgYWJvcnRFYXJseTogZmFsc2UgfSk7IC8vIFNldCBhYm9ydEVhcmx5IHRvIGZhbHNlIHRvIGdldCBhbGwgZXJyb3JzXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSBleHRyYWN0RXJyb3JzKGVycm9yKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcnMgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcblxuICAgICAgLy8gRmluZCB0aGUgdXNlciBieSBlbWFpbFxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJNb2RlbC5maW5kT25lKHsgZW1haWwgfSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgZXhpc3RzIGFuZCBjb21wYXJlIHBhc3N3b3Jkc1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3JzOiB7ZW1haWw6J0VtYWlsIGFscmVhZHkgZXhpc3QnfSB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFzaCB0aGUgcGFzc3dvcmRcbiAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTsgLy8gMTAgaXMgdGhlIHNhbHQgcm91bmRzXG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyB1c2VyIHdpdGggdGhlIGhhc2hlZCBwYXNzd29yZFxuICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IHVzZXJNb2RlbC5jcmVhdGUoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFNhdmUgdGhlIHVzZXIgdG8gdGhlIGRhdGFiYXNlXG4gICAgICAvLyBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcblxuICAgICAgLy8gUmV0dXJuIHN1Y2Nlc3MgcmVzcG9uc2VcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHknIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWdpc3RlcmluZyB1c2VyOicsIGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJjcnlwdCIsInVzZXJNb2RlbCIsInJlZ2lzdGVyU2NoZW1hIiwiZXh0cmFjdEVycm9ycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwidmFsaWRhdGUiLCJhYm9ydEVhcmx5IiwiZXJyb3JzIiwic3RhdHVzIiwianNvbiIsInVzZXIiLCJmaW5kT25lIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

/***/ }),

/***/ "(api)/./pages/config/conn.js":
/*!******************************!*\
  !*** ./pages/config/conn.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n// MongoDB connection string\nconst MONGODB_URI = process?.env?.MONGODB_URI || \"mongodb://localhost:27017/auth_users\";\n// Test the connection\nmongoose.connect(MONGODB_URI, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n}).then(()=>console.log(\"MongoDB connected\")).catch((err)=>console.log(err));\nmodule.exports = mongoose.connection;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9jb25maWcvY29ubi5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDekIsNEJBQTRCO0FBQzVCLE1BQU1DLGNBQWNDLFNBQVNDLEtBQUtGLGVBQWU7QUFDakQsc0JBQXNCO0FBQ3RCRixTQUFTSyxPQUFPLENBQUNILGFBQWE7SUFDMUJJLGlCQUFpQjtJQUNqQkMsb0JBQW9CO0FBQ3hCLEdBQ0NDLElBQUksQ0FBQyxJQUFNQyxRQUFRQyxHQUFHLENBQUMsc0JBQ3ZCQyxLQUFLLENBQUNDLENBQUFBLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQ0U7QUFFMUJDLE9BQU9DLE9BQU8sR0FBR2QsU0FBU2UsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2NydWRzLy4vcGFnZXMvY29uZmlnL2Nvbm4uanM/YjQ4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG4vLyBNb25nb0RCIGNvbm5lY3Rpb24gc3RyaW5nXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3M/LmVudj8uTU9OR09EQl9VUkkgfHwgJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvYXV0aF91c2Vycyc7XG4vLyBUZXN0IHRoZSBjb25uZWN0aW9uXG5tb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxufSlcbi50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCcpKVxuLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbm5lY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/config/conn.js\n");

/***/ }),

/***/ "(api)/./pages/models/userModel.js":
/*!***********************************!*\
  !*** ./pages/models/userModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_conn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/conn */ \"(api)/./pages/config/conn.js\");\n/* harmony import */ var _config_conn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_conn__WEBPACK_IMPORTED_MODULE_1__);\n// models/userModel.js\n\n\nconst { Number, String } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types;\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst UserModel = (_config_conn__WEBPACK_IMPORTED_MODULE_1___default().models).users || _config_conn__WEBPACK_IMPORTED_MODULE_1___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9tb2RlbHMvdXNlck1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ1U7QUFDUztBQUN6QyxNQUFNLEVBQUNFLE1BQU0sRUFBRUMsTUFBTSxFQUFDLEdBQUdILHdEQUFlLENBQUNLLEtBQUs7QUFDOUMsTUFBTSxFQUFFRCxNQUFNLEVBQUUsR0FBR0osaURBQVFBO0FBRTNCLE1BQU1NLGFBQWEsSUFBSUYsT0FBTztJQUM1QkcsTUFBTTtRQUNKQyxNQUFNTDtRQUNOTSxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMRixNQUFNTDtRQUNOTSxVQUFVO1FBQ1ZFLFFBQVE7SUFDVjtJQUNBQyxVQUFVO1FBQ1JKLE1BQU1MO1FBQ05NLFVBQVU7SUFDWjtJQUNBSSxXQUFXO1FBQ1RMLE1BQU1NO1FBQ05DLFNBQVNELEtBQUtFLEdBQUc7SUFDbkI7QUFDRjtBQUVBLE1BQU1DLFlBQVloQiw0REFBbUIsQ0FBQ2tCLEtBQUssSUFBSWxCLHlEQUFrQixDQUFDLFNBQVNLO0FBRzNFLGlFQUFlVyxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J1ZHMvLi9wYWdlcy9tb2RlbHMvdXNlck1vZGVsLmpzP2EyMzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9kZWxzL3VzZXJNb2RlbC5qc1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBkYkNvbm5lY3Rpb24gZnJvbSAnLi4vY29uZmlnL2Nvbm4nXG5jb25zdCB7TnVtYmVyLCBTdHJpbmd9ID0gbW9uZ29vc2UuU2NoZW1hLlR5cGVzXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgY3JlYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbn0pO1xuXG5jb25zdCBVc2VyTW9kZWwgPSBkYkNvbm5lY3Rpb24ubW9kZWxzLnVzZXJzIHx8IGRiQ29ubmVjdGlvbi5tb2RlbCgndXNlcnMnLCB1c2VyU2NoZW1hKTtcblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWxcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRiQ29ubmVjdGlvbiIsIk51bWJlciIsIlN0cmluZyIsIlNjaGVtYSIsIlR5cGVzIiwidXNlclNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/utils/common.js":
/*!*******************************!*\
  !*** ./pages/utils/common.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractErrors: () => (/* binding */ extractErrors)\n/* harmony export */ });\nconst extractErrors = (error)=>{\n    var errors = {};\n    error.details.forEach(function(detail) {\n        errors[detail.path[0]] = detail.message;\n    });\n    return errors;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy91dGlscy9jb21tb24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGdCQUFnQixDQUFDQztJQUMxQixJQUFJQyxTQUFTLENBQUM7SUFDZEQsTUFBTUUsT0FBTyxDQUFDQyxPQUFPLENBQUMsU0FBU0MsTUFBTTtRQUNqQ0gsTUFBTSxDQUFDRyxPQUFPQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUdELE9BQU9FLE9BQU87SUFDM0M7SUFDQSxPQUFPTDtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkcy8uL3BhZ2VzL3V0aWxzL2NvbW1vbi5qcz8zMWNiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHRyYWN0RXJyb3JzID0gKGVycm9yKT0+e1xuICAgIHZhciBlcnJvcnMgPSB7fTtcbiAgICBlcnJvci5kZXRhaWxzLmZvckVhY2goZnVuY3Rpb24oZGV0YWlsKSB7XG4gICAgICAgIGVycm9yc1tkZXRhaWwucGF0aFswXV0gPSBkZXRhaWwubWVzc2FnZVxuICAgIH0pO1xuICAgIHJldHVybiBlcnJvcnM7XG59XG4iXSwibmFtZXMiOlsiZXh0cmFjdEVycm9ycyIsImVycm9yIiwiZXJyb3JzIiwiZGV0YWlscyIsImZvckVhY2giLCJkZXRhaWwiLCJwYXRoIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/utils/common.js\n");

/***/ }),

/***/ "(api)/./pages/validations/auth.js":
/*!***********************************!*\
  !*** ./pages/validations/auth.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginSchema: () => (/* binding */ loginSchema),\n/* harmony export */   registerSchema: () => (/* binding */ registerSchema)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n// utils/validation.js\n\n// Validation schema for user registration\nconst registerSchema = joi__WEBPACK_IMPORTED_MODULE_0___default().object({\n    name: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required(),\n    email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().required(),\n    password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(6).required()\n});\n// Validation schema for user login\nconst loginSchema = joi__WEBPACK_IMPORTED_MODULE_0___default().object({\n    email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email().required(),\n    password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().required()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy92YWxpZGF0aW9ucy9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFFQTtBQUV0QiwwQ0FBMEM7QUFDbkMsTUFBTUMsaUJBQWlCRCxpREFBVSxDQUFDO0lBQ3ZDRyxNQUFNSCxpREFBVSxHQUFHSyxRQUFRO0lBQzNCQyxPQUFPTixpREFBVSxHQUFHTSxLQUFLLEdBQUdELFFBQVE7SUFDcENFLFVBQVVQLGlEQUFVLEdBQUdRLEdBQUcsQ0FBQyxHQUFHSCxRQUFRO0FBQ3hDLEdBQUc7QUFFSCxtQ0FBbUM7QUFDNUIsTUFBTUksY0FBY1QsaURBQVUsQ0FBQztJQUNwQ00sT0FBT04saURBQVUsR0FBR00sS0FBSyxHQUFHRCxRQUFRO0lBQ3BDRSxVQUFVUCxpREFBVSxHQUFHSyxRQUFRO0FBQ2pDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkcy8uL3BhZ2VzL3ZhbGlkYXRpb25zL2F1dGguanM/YjEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1dGlscy92YWxpZGF0aW9uLmpzXG5cbmltcG9ydCBKb2kgZnJvbSAnam9pJztcblxuLy8gVmFsaWRhdGlvbiBzY2hlbWEgZm9yIHVzZXIgcmVnaXN0cmF0aW9uXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTY2hlbWEgPSBKb2kub2JqZWN0KHtcbiAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxuICBwYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig2KS5yZXF1aXJlZCgpLFxufSk7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hIGZvciB1c2VyIGxvZ2luXG5leHBvcnQgY29uc3QgbG9naW5TY2hlbWEgPSBKb2kub2JqZWN0KHtcbiAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbn0pO1xuIl0sIm5hbWVzIjpbIkpvaSIsInJlZ2lzdGVyU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJwYXNzd29yZCIsIm1pbiIsImxvZ2luU2NoZW1hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/validations/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fregister&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fregister.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();