(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./demo2/demo2.jsx":
/*!*************************!*\
  !*** ./demo2/demo2.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// JSX is an XML-like syntax that simplifies composing React components.\n\n // When using JSX, you don't have to worry about creating elemnts with\n// React.createElement. JSX handles all these details for you.\n//\n// This demo is functionally identical to Demo 1.\n\nvar HelloComponent = /*#__PURE__*/function (_React$Component) {\n  _inherits(HelloComponent, _React$Component);\n\n  var _super = _createSuper(HelloComponent);\n\n  function HelloComponent() {\n    _classCallCheck(this, HelloComponent);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(HelloComponent, [{\n    key: \"render\",\n    value: function render() {\n      // Children are composed just like child XML/HTML nodes.\n      // `{...}` can be used to interpolate raw JavaScript.\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Hello \", this.props.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"!\"));\n    }\n  }]);\n\n  return HelloComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(\n/*#__PURE__*/\n// Properties look like HTML attributes in JSX.\nreact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelloComponent, {\n  name: \"GitHub\"\n}), document.getElementById(\"container\")); // It's worth noting that JSX assumes all calls with a <lowercaseInitialLetter>\n// refers to an actual HTML element, and all custom components must have an\n// <UppercaseInitialLetter>.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZW1vMi9kZW1vMi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vMi9kZW1vMi5qc3g/ZmVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBKU1ggaXMgYW4gWE1MLWxpa2Ugc3ludGF4IHRoYXQgc2ltcGxpZmllcyBjb21wb3NpbmcgUmVhY3QgY29tcG9uZW50cy5cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5cbi8vIFdoZW4gdXNpbmcgSlNYLCB5b3UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dCBjcmVhdGluZyBlbGVtbnRzIHdpdGhcbi8vIFJlYWN0LmNyZWF0ZUVsZW1lbnQuIEpTWCBoYW5kbGVzIGFsbCB0aGVzZSBkZXRhaWxzIGZvciB5b3UuXG4vL1xuLy8gVGhpcyBkZW1vIGlzIGZ1bmN0aW9uYWxseSBpZGVudGljYWwgdG8gRGVtbyAxLlxuY2xhc3MgSGVsbG9Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgLy8gQ2hpbGRyZW4gYXJlIGNvbXBvc2VkIGp1c3QgbGlrZSBjaGlsZCBYTUwvSFRNTCBub2Rlcy5cbiAgICAvLyBgey4uLn1gIGNhbiBiZSB1c2VkIHRvIGludGVycG9sYXRlIHJhdyBKYXZhU2NyaXB0LlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBIZWxsbyB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICA8c3Ryb25nPiE8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIC8vIFByb3BlcnRpZXMgbG9vayBsaWtlIEhUTUwgYXR0cmlidXRlcyBpbiBKU1guXG4gIDxIZWxsb0NvbXBvbmVudCBuYW1lPVwiR2l0SHViXCIgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpXG4pXG5cbi8vIEl0J3Mgd29ydGggbm90aW5nIHRoYXQgSlNYIGFzc3VtZXMgYWxsIGNhbGxzIHdpdGggYSA8bG93ZXJjYXNlSW5pdGlhbExldHRlcj5cbi8vIHJlZmVycyB0byBhbiBhY3R1YWwgSFRNTCBlbGVtZW50LCBhbmQgYWxsIGN1c3RvbSBjb21wb25lbnRzIG11c3QgaGF2ZSBhblxuLy8gPFVwcGVyY2FzZUluaXRpYWxMZXR0ZXI+LlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7OztBQVZBO0FBQ0E7QUFZQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./demo2/demo2.jsx\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./demo2/demo2.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo2/demo2.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"// JSX is an XML-like syntax that simplifies composing React components.\\n\\nimport React from \\\"react\\\"\\nimport ReactDOM from \\\"react-dom\\\"\\n\\n// When using JSX, you don't have to worry about creating elemnts with\\n// React.createElement. JSX handles all these details for you.\\n//\\n// This demo is functionally identical to Demo 1.\\nclass HelloComponent extends React.Component {\\n  render() {\\n    // Children are composed just like child XML/HTML nodes.\\n    // `{...}` can be used to interpolate raw JavaScript.\\n    return (\\n      <div>\\n        Hello {this.props.name}\\n        <strong>!</strong>\\n      </div>\\n    )\\n  }\\n}\\n\\nReactDOM.render(\\n  // Properties look like HTML attributes in JSX.\\n  <HelloComponent name=\\\"GitHub\\\" />,\\n  document.getElementById(\\\"container\\\")\\n)\\n\\n// It's worth noting that JSX assumes all calls with a <lowercaseInitialLetter>\\n// refers to an actual HTML element, and all custom components must have an\\n// <UppercaseInitialLetter>.\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW8yL2RlbW8yLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RlbW8yL2RlbW8yLmpzeD82Njg5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLy8gSlNYIGlzIGFuIFhNTC1saWtlIHN5bnRheCB0aGF0IHNpbXBsaWZpZXMgY29tcG9zaW5nIFJlYWN0IGNvbXBvbmVudHMuXFxuXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBSZWFjdERPTSBmcm9tIFxcXCJyZWFjdC1kb21cXFwiXFxuXFxuLy8gV2hlbiB1c2luZyBKU1gsIHlvdSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IGNyZWF0aW5nIGVsZW1udHMgd2l0aFxcbi8vIFJlYWN0LmNyZWF0ZUVsZW1lbnQuIEpTWCBoYW5kbGVzIGFsbCB0aGVzZSBkZXRhaWxzIGZvciB5b3UuXFxuLy9cXG4vLyBUaGlzIGRlbW8gaXMgZnVuY3Rpb25hbGx5IGlkZW50aWNhbCB0byBEZW1vIDEuXFxuY2xhc3MgSGVsbG9Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xcbiAgcmVuZGVyKCkge1xcbiAgICAvLyBDaGlsZHJlbiBhcmUgY29tcG9zZWQganVzdCBsaWtlIGNoaWxkIFhNTC9IVE1MIG5vZGVzLlxcbiAgICAvLyBgey4uLn1gIGNhbiBiZSB1c2VkIHRvIGludGVycG9sYXRlIHJhdyBKYXZhU2NyaXB0LlxcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICBIZWxsbyB7dGhpcy5wcm9wcy5uYW1lfVxcbiAgICAgICAgPHN0cm9uZz4hPC9zdHJvbmc+XFxuICAgICAgPC9kaXY+XFxuICAgIClcXG4gIH1cXG59XFxuXFxuUmVhY3RET00ucmVuZGVyKFxcbiAgLy8gUHJvcGVydGllcyBsb29rIGxpa2UgSFRNTCBhdHRyaWJ1dGVzIGluIEpTWC5cXG4gIDxIZWxsb0NvbXBvbmVudCBuYW1lPVxcXCJHaXRIdWJcXFwiIC8+LFxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcImNvbnRhaW5lclxcXCIpXFxuKVxcblxcbi8vIEl0J3Mgd29ydGggbm90aW5nIHRoYXQgSlNYIGFzc3VtZXMgYWxsIGNhbGxzIHdpdGggYSA8bG93ZXJjYXNlSW5pdGlhbExldHRlcj5cXG4vLyByZWZlcnMgdG8gYW4gYWN0dWFsIEhUTUwgZWxlbWVudCwgYW5kIGFsbCBjdXN0b20gY29tcG9uZW50cyBtdXN0IGhhdmUgYW5cXG4vLyA8VXBwZXJjYXNlSW5pdGlhbExldHRlcj4uXFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/raw-loader/dist/cjs.js!./demo2/demo2.jsx\n");

/***/ })

}]);