/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AllCards.jsx":
/*!*************************************!*\
  !*** ./src/components/AllCards.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllCards)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OneCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneCard */ \"./src/components/OneCard.jsx\");\n\n\nfunction AllCards(_ref) {\n  var questions = _ref.questions;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, questions === null || questions === void 0 ? void 0 : questions.map(function (el) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OneCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: el.id,\n      questions: el\n    });\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGxDYXJkcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNSO0FBRWpCLFNBQVNHLFFBQVEsT0FBZ0I7RUFBQSxJQUFiQyxTQUFTLFFBQVRBLFNBQVM7RUFDMUMsb0JBQ0Usd0VBQ0dBLFNBQVMsYUFBVEEsU0FBUyx1QkFBVEEsU0FBUyxDQUFFQyxHQUFHLENBQUMsVUFBQ0MsRUFBRTtJQUFBLG9CQUFLLDJEQUFDLGdEQUFPO01BQUMsR0FBRyxFQUFFQSxFQUFFLENBQUNDLEVBQUc7TUFBQyxTQUFTLEVBQUVEO0lBQUcsRUFBRztFQUFBLEVBQUMsQ0FDM0Q7QUFFViIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1mbGFzaGNhcmRzLWNoYWxsYW5nZS1zc3ItbXNrLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2FyZHMuanN4P2Q2ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9uZUNhcmQgZnJvbSAnLi9PbmVDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsQ2FyZHMoeyBxdWVzdGlvbnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cXVlc3Rpb25zPy5tYXAoKGVsKSA9PiA8T25lQ2FyZCBrZXk9e2VsLmlkfSBxdWVzdGlvbnM9e2VsfSAvPil9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk9uZUNhcmQiLCJBbGxDYXJkcyIsInF1ZXN0aW9ucyIsIm1hcCIsImVsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AllCards.jsx\n");

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainPage */ \"./src/components/MainPage.jsx\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ \"./src/components/NavBar.jsx\");\n/* harmony import */ var _AllCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllCards */ \"./src/components/AllCards.jsx\");\n\n\n\n\n\nfunction App(_ref) {\n  var questions = _ref.questions,\n    ques = _ref.ques;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      ques: ques\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {\n    path: \"/theme/:id\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AllCards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      questions: questions\n    })\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFDZjtBQUNKO0FBQ0k7QUFFbkIsU0FBU00sR0FBRyxPQUFzQjtFQUFBLElBQW5CQyxTQUFTLFFBQVRBLFNBQVM7SUFBRUMsSUFBSSxRQUFKQSxJQUFJO0VBQzNDLG9CQUNFLHVJQUVFLDJEQUFDLCtDQUFNLE9BQUcsZUFDViwyREFBQyxvREFBTSxxQkFDTCwyREFBQyxtREFBSztJQUFDLElBQUksRUFBQyxHQUFHO0lBQUMsT0FBTyxlQUFFLDJEQUFDLGlEQUFRO01BQUMsSUFBSSxFQUFFQTtJQUFLO0VBQUksRUFBRyxlQUNyRCwyREFBQyxtREFBSztJQUFDLElBQUksRUFBQyxZQUFZO0lBQUMsT0FBTyxlQUFFLDJEQUFDLGlEQUFRO01BQUMsU0FBUyxFQUFFRDtJQUFVO0VBQUksRUFBRyxDQUNqRSxDQUNSO0FBRVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZmxhc2hjYXJkcy1jaGFsbGFuZ2Utc3NyLW1zay8uL3NyYy9jb21wb25lbnRzL0FwcC5qc3g/YzU4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcic7XG5pbXBvcnQgQWxsQ2FyZHMgZnJvbSAnLi9BbGxDYXJkcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IHF1ZXN0aW9ucywgcXVlcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PE1haW5QYWdlIHF1ZXM9e3F1ZXN9IC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi90aGVtZS86aWRcIiBlbGVtZW50PXs8QWxsQ2FyZHMgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IC8+fSAvPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXMiLCJSb3V0ZSIsIk1haW5QYWdlIiwiTmF2QmFyIiwiQWxsQ2FyZHMiLCJBcHAiLCJxdWVzdGlvbnMiLCJxdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n");

/***/ }),

/***/ "./src/components/MainPage.jsx":
/*!*************************************!*\
  !*** ./src/components/MainPage.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MainPage(_ref) {\n  var ques = _ref.ques;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\",\n    style: {\n      display: 'flex',\n      marginTop: '60px',\n      flexDirection: 'row'\n    }\n  }, ques.map(function (el) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card text-bg-primary mb-3\",\n      style: {\n        width: '24rem',\n        marginLeft: '30px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card-header\"\n    }, \"Flash card\", ' ', el.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"card-body\",\n      style: {\n        background: '#0dcaf0'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      href: \"/theme/\".concat(el.id),\n      style: {\n        color: 'black',\n        fontSize: '18px'\n      }\n    }, el.them), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"card-text\",\n      style: {\n        color: 'black'\n      }\n    }, \"\\u041F\\u0440\\u043E\\u0432\\u0435\\u0440\\u044C\\u0442\\u0435 \\u0441\\u0432\\u043E\\u0438 \\u0437\\u043D\\u0430\\u043D\\u0438\\u044F \\u0432 \\u0442\\u0435\\u043C\\u0435\", ' ', el.them, \".\")));\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluUGFnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsU0FBU0MsUUFBUSxPQUFXO0VBQUEsSUFBUkMsSUFBSSxRQUFKQSxJQUFJO0VBQ3JDLG9CQUNFO0lBQUssU0FBUyxFQUFDLFdBQVc7SUFBQyxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFLE1BQU07TUFBRUMsYUFBYSxFQUFFO0lBQU07RUFBRSxHQUM1RkgsSUFBSSxDQUFDSSxHQUFHLENBQUMsVUFBQ0MsRUFBRTtJQUFBLG9CQUNYO01BQUssU0FBUyxFQUFDLDJCQUEyQjtNQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUsT0FBTztRQUFFQyxVQUFVLEVBQUU7TUFBTztJQUFFLGdCQUN2RjtNQUFLLFNBQVMsRUFBQztJQUFhLGlCQUV6QixHQUFHLEVBQ0hGLEVBQUUsQ0FBQ0csRUFBRSxDQUNGLGVBQ047TUFBSyxTQUFTLEVBQUMsV0FBVztNQUFDLEtBQUssRUFBRTtRQUFFQyxVQUFVLEVBQUU7TUFBVTtJQUFFLGdCQUMxRDtNQUFHLElBQUksbUJBQVlKLEVBQUUsQ0FBQ0csRUFBRSxDQUFHO01BQUMsS0FBSyxFQUFFO1FBQUVFLEtBQUssRUFBRSxPQUFPO1FBQUVDLFFBQVEsRUFBRTtNQUFPO0lBQUUsR0FBRU4sRUFBRSxDQUFDTyxJQUFJLENBQUssZUFDdEY7TUFBRyxTQUFTLEVBQUMsV0FBVztNQUFDLEtBQUssRUFBRTtRQUFFRixLQUFLLEVBQUU7TUFBUTtJQUFFLDJKQUVoRCxHQUFHLEVBQ0hMLEVBQUUsQ0FBQ08sSUFBSSxNQUVOLENBQ0EsQ0FDRjtFQUFBLENBQ1AsQ0FBQyxDQUNFO0FBRVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZmxhc2hjYXJkcy1jaGFsbGFuZ2Utc3NyLW1zay8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzeD80NDFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKHsgcXVlcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogJzYwcHgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cbiAgICAgIHtxdWVzLm1hcCgoZWwpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtYmctcHJpbWFyeSBtYi0zXCIgc3R5bGU9e3sgd2lkdGg6ICcyNHJlbScsIG1hcmdpbkxlZnQ6ICczMHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICBGbGFzaCBjYXJkXG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAge2VsLmlkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJyMwZGNhZjAnIH19PlxuICAgICAgICAgICAgPGEgaHJlZj17YC90aGVtZS8ke2VsLmlkfWB9IHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogJzE4cHgnIH19PntlbC50aGVtfTwvYT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlxuICAgICAgICAgICAgICDQn9GA0L7QstC10YDRjNGC0LUg0YHQstC+0Lgg0LfQvdCw0L3QuNGPINCyINGC0LXQvNC1XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHtlbC50aGVtfVxuICAgICAgICAgICAgICAuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNYWluUGFnZSIsInF1ZXMiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsIm1hcCIsImVsIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiaWQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250U2l6ZSIsInRoZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MainPage.jsx\n");

/***/ }),

/***/ "./src/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NavBar() {\n  var loginHandler = function loginHandler(e) {\n    e.preventDefault();\n    fetch('/api/login', {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json'\n      },\n      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    className: \"navbar navbar-dark bg-primary\",\n    style: {\n      padding: '10px',\n      marginTop: '20px',\n      borderRadius: '10px',\n      backgroundColor: 'blue'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"navbar-brand\",\n    href: \"/\",\n    style: {\n      marginLeft: '5px'\n    }\n  }, \"FlashCards\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: loginHandler,\n    className: \"form-inline\",\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    name: \"name\",\n    className: \"form-control mr-sm-2\",\n    type: \"search\",\n    placeholder: \"Login\",\n    \"aria-label\": \"Search\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-info\",\n    style: {\n      marginLeft: '7px'\n    }\n  }, \"Submit\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLE1BQU0sR0FBRztFQUMvQixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJQyxDQUFDLEVBQUs7SUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCQyxLQUFLLENBQUMsWUFBWSxFQUFFO01BQ2xCQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUU7TUFDbEIsQ0FBQztNQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUNDLFdBQVcsQ0FBQyxJQUFJQyxRQUFRLENBQUNWLENBQUMsQ0FBQ1csTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELG9CQUNFLHFGQUNFO0lBQ0UsU0FBUyxFQUFDLCtCQUErQjtJQUN6QyxLQUFLLEVBQUU7TUFDTEMsT0FBTyxFQUFFLE1BQU07TUFBRUMsU0FBUyxFQUFFLE1BQU07TUFBRUMsWUFBWSxFQUFFLE1BQU07TUFBRUMsZUFBZSxFQUFFO0lBQzdFO0VBQUUsZ0JBRUY7SUFBRyxTQUFTLEVBQUMsY0FBYztJQUFDLElBQUksRUFBQyxHQUFHO0lBQUMsS0FBSyxFQUFFO01BQUVDLFVBQVUsRUFBRTtJQUFNO0VBQUUsZ0JBQWUsZUFDakY7SUFBTSxRQUFRLEVBQUVqQixZQUFhO0lBQUMsU0FBUyxFQUFDLGFBQWE7SUFBQyxLQUFLLEVBQUU7TUFBRWtCLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQy9FO0lBQU8sSUFBSSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUMsc0JBQXNCO0lBQUMsSUFBSSxFQUFDLFFBQVE7SUFBQyxXQUFXLEVBQUMsT0FBTztJQUFDLGNBQVc7RUFBUSxFQUFHLGVBQzVHO0lBQVEsSUFBSSxFQUFDLFFBQVE7SUFBQyxTQUFTLEVBQUMsY0FBYztJQUFDLEtBQUssRUFBRTtNQUFFRCxVQUFVLEVBQUU7SUFBTTtFQUFFLFlBQWdCLENBQ3ZGLENBQ0gsQ0FDRjtBQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWZsYXNoY2FyZHMtY2hhbGxhbmdlLXNzci1tc2svLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4PzY3ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCBsb2dpbkhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaCgnL2FwaS9sb2dpbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZS50YXJnZXQpKSksXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG5hdlxuICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogJzEwcHgnLCBtYXJnaW5Ub3A6ICcyMHB4JywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1cHgnIH19PkZsYXNoQ2FyZHM8L2E+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpbkhhbmRsZXJ9IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiTG9naW5cIiBhcmlhLWxhYmVsPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnN3B4JyB9fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZCYXIiLCJsb2dpbkhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luTGVmdCIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.jsx\n");

/***/ }),

/***/ "./src/components/OneCard.jsx":
/*!************************************!*\
  !*** ./src/components/OneCard.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OneCard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction OneCard(_ref) {\n  var questions = _ref.questions;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState2 = _slicedToArray(_useState, 2),\n    input = _useState2[0],\n    setInput = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState4 = _slicedToArray(_useState3, 2),\n    answer = _useState4[0],\n    setAnswer = _useState4[1];\n  var submitHa = function submitHa(e) {\n    e.preventDefault();\n    if (input.toLowerCase() === questions.answer.toLowerCase()) {\n      setAnswer('???????????? ??????????');\n    } else {\n      setAnswer('???????????????? ??????????');\n    }\n    setInput('');\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: submitHa\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mb-3\",\n    style: {\n      display: 'flex',\n      width: '35rem',\n      margin: 'auto',\n      flexDirection: 'column',\n      alignItems: 'center',\n      marginTop: '50px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"exampleInputEmail1\",\n    className: \"form-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null), questions.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    value: input,\n    onChange: function onChange(e) {\n      return setInput(e.target.value);\n    },\n    className: \"form-control\",\n    id: \"exampleInputEmail1\",\n    \"aria-describedby\": \"emailHelp\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-info\"\n  }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), answer)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9PbmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFcEMsU0FBU0csT0FBTyxPQUFnQjtFQUFBLElBQWJDLFNBQVMsUUFBVEEsU0FBUztFQUN6QyxnQkFBMEJGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBL0JHLEtBQUs7SUFBRUMsUUFBUTtFQUN0QixpQkFBNEJKLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUE7SUFBbkNLLE1BQU07SUFBRUMsU0FBUztFQUV4QixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFJQyxDQUFDLEVBQUs7SUFDdEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLElBQUlOLEtBQUssQ0FBQ08sV0FBVyxFQUFFLEtBQUtSLFNBQVMsQ0FBQ0csTUFBTSxDQUFDSyxXQUFXLEVBQUUsRUFBRTtNQUMxREosU0FBUyxDQUFDLGNBQWMsQ0FBQztJQUMzQixDQUFDLE1BQU07TUFDTEEsU0FBUyxDQUFDLGdCQUFnQixDQUFDO0lBQzdCO0lBQ0FGLFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFDZCxDQUFDO0VBRUQsb0JBQ0UscUZBQ0U7SUFBTSxRQUFRLEVBQUVHO0VBQVMsZ0JBQ3ZCO0lBQ0UsU0FBUyxFQUFDLE1BQU07SUFDaEIsS0FBSyxFQUFFO01BQ0xJLE9BQU8sRUFBRSxNQUFNO01BQ2ZDLEtBQUssRUFBRSxPQUFPO01BQ2RDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLGFBQWEsRUFBRSxRQUFRO01BQ3ZCQyxVQUFVLEVBQUUsUUFBUTtNQUNwQkMsU0FBUyxFQUFFO0lBQ2I7RUFBRSxnQkFFRjtJQUFPLE9BQU8sRUFBQyxvQkFBb0I7SUFBQyxTQUFTLEVBQUM7RUFBWSxnQkFDeEQsc0VBQU0sRUFDTGQsU0FBUyxDQUFDZSxRQUFRLENBQ2IsZUFDUjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsS0FBSyxFQUFFZCxLQUFNO0lBQUMsUUFBUSxFQUFFLGtCQUFDSyxDQUFDO01BQUEsT0FBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNVLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDLFNBQVMsRUFBQyxjQUFjO0lBQUMsRUFBRSxFQUFDLG9CQUFvQjtJQUFDLG9CQUFpQjtFQUFXLEVBQUcsZUFDNUosc0VBQU0sZUFDTjtJQUFRLElBQUksRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWMsc0RBQWtCLGVBQ2hFLHNFQUFNLEVBQ0xkLE1BQU0sQ0FDSCxDQUNELENBQ0g7QUFFViIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1mbGFzaGNhcmRzLWNoYWxsYW5nZS1zc3ItbXNrLy4vc3JjL2NvbXBvbmVudHMvT25lQ2FyZC5qc3g/YmMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT25lQ2FyZCh7IHF1ZXN0aW9ucyB9KSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgc3VibWl0SGEgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaW5wdXQudG9Mb3dlckNhc2UoKSA9PT0gcXVlc3Rpb25zLmFuc3dlci50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBzZXRBbnN3ZXIoJ9CS0LXRgNC90YvQuSDQvtGC0LLQtdGCJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFuc3dlcign0J3QtdCy0LXRgNC90YvQuSDQvtGC0LLQtdGCJyk7XG4gICAgfVxuICAgIHNldElucHV0KCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGF9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMzVyZW0nLFxuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnNTBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgPGgyIC8+XG4gICAgICAgICAgICB7cXVlc3Rpb25zLnF1ZXN0aW9ufVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj7QntGC0LLQtdGC0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAge2Fuc3dlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk9uZUNhcmQiLCJxdWVzdGlvbnMiLCJpbnB1dCIsInNldElucHV0IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwic3VibWl0SGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b0xvd2VyQ2FzZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwicXVlc3Rpb24iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/OneCard.jsx\n");

/***/ }),

/***/ "./src/components/index.jsx":
/*!**********************************!*\
  !*** ./src/components/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/components/App.jsx\");\n\n\n\n\nreact_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(document.getElementById('root'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], window.initState)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ29CO0FBQ0c7QUFDekI7QUFFeEJDLHlEQUEwQixDQUN4QkksUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDLGVBQy9CLDJEQUFDLDJEQUFhLHFCQUNaLDJEQUFDLDRDQUFHLEVBQUtDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFJLENBQ2YsQ0FDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZmxhc2hjYXJkcy1jaGFsbGFuZ2Utc3NyLW1zay8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzeD80ZTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET01DbGllbnQgZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuUmVhY3RET01DbGllbnQuaHlkcmF0ZVJvb3QoXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxBcHAgey4uLndpbmRvdy5pbml0U3RhdGV9IC8+XG4gIDwvQnJvd3NlclJvdXRlcj4sXG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET01DbGllbnQiLCJCcm93c2VyUm91dGVyIiwiQXBwIiwiaHlkcmF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwiaW5pdFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/index.jsx\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkweb_flashcards_challange_ssr_msk"] = this["webpackChunkweb_flashcards_challange_ssr_msk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/components/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;