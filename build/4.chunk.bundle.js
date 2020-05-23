(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./demo3/demo3.jsx":
/*!*************************!*\
  !*** ./demo3/demo3.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Timer = /*#__PURE__*/function (_React$Component) {\n  _inherits(Timer, _React$Component);\n\n  var _super = _createSuper(Timer);\n\n  // In addition to properties (\"props\") passed from parents, React components\n  // can also contain internal state, referenced by `this.state`. To set the\n  // initial value for the state, set `this.state` inside the constructor. Don't\n  // forget to call the parent's constructor with `super`!\n  function Timer() {\n    var _this;\n\n    _classCallCheck(this, Timer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n    _this.state = {\n      time: 0\n    };\n    return _this;\n  } // React provides lifecycle hooks to set up and tear down components and\n  // third-party APIs if necessary. Here, we start a timer when the component\n  // mounts...\n\n\n  _createClass(Timer, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.timer = setInterval(function () {\n        _this2.tick();\n      }, 1000);\n    } // ... and remove the timer when the component unmounts. If we don't do this,\n    // we'll leak memory (and the timer will continue to fire even though our\n    // component is gone).\n\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.timer && clearInterval(this.timer);\n    } // Unlike properties, state is owned by the component, and can be changed\n    // using `this.setState`. Note that you should *never* modify `this.state`\n    // directly -- always use `this.setState` so that React knows the state has\n    // changed.\n    //\n    // Our timer function calls `setState`, which allows us to update one or more\n    // keys in our state. It has two versions:\n    //\n    // If we want to set specific state no matter what, we can pass an object:\n    //\n    //    this.setState({ time: 100 })\n    //\n    // But if we want to set some new state based on the current state (like we do\n    // here — we want to add one to the timer value), pass a function to setState\n    // instead. The function gets the current state as its first argument, and\n    // whatever you return is the new state.\n    //\n    //    this.setState(oldState => ({ time: oldState.time + 1 }))\n    //\n    // This is important to remember because React doesn't set the state\n    // *immediately*; it just queues a change for the next update. If you use data\n    // from `this.state` to determine your new state, you might be using the wrong\n    // values!\n    //\n    // Note that the state doesn't get totally replace by this object; instead,\n    // React merges this object with the current state.\n\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.setState(function (oldState) {\n        return {\n          time: oldState.time + 1\n        };\n      });\n    } // Render is called automatically when a component's state is updated with\n    // `setState`, `replaceState`, or when `forceUpdate` is called. Composed\n    // components are automatically re-rendered.\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Time: \", this.state.time);\n    }\n  }]);\n\n  return Timer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Timer, null), document.getElementById(\"container\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZW1vMy9kZW1vMy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vMy9kZW1vMy5qc3g/NWQ0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcblxuY2xhc3MgVGltZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBJbiBhZGRpdGlvbiB0byBwcm9wZXJ0aWVzIChcInByb3BzXCIpIHBhc3NlZCBmcm9tIHBhcmVudHMsIFJlYWN0IGNvbXBvbmVudHNcbiAgLy8gY2FuIGFsc28gY29udGFpbiBpbnRlcm5hbCBzdGF0ZSwgcmVmZXJlbmNlZCBieSBgdGhpcy5zdGF0ZWAuIFRvIHNldCB0aGVcbiAgLy8gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHN0YXRlLCBzZXQgYHRoaXMuc3RhdGVgIGluc2lkZSB0aGUgY29uc3RydWN0b3IuIERvbid0XG4gIC8vIGZvcmdldCB0byBjYWxsIHRoZSBwYXJlbnQncyBjb25zdHJ1Y3RvciB3aXRoIGBzdXBlcmAhXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lOiAwLFxuICAgIH1cbiAgfVxuXG4gIC8vIFJlYWN0IHByb3ZpZGVzIGxpZmVjeWNsZSBob29rcyB0byBzZXQgdXAgYW5kIHRlYXIgZG93biBjb21wb25lbnRzIGFuZFxuICAvLyB0aGlyZC1wYXJ0eSBBUElzIGlmIG5lY2Vzc2FyeS4gSGVyZSwgd2Ugc3RhcnQgYSB0aW1lciB3aGVuIHRoZSBjb21wb25lbnRcbiAgLy8gbW91bnRzLi4uXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnRpY2soKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICAvLyAuLi4gYW5kIHJlbW92ZSB0aGUgdGltZXIgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzLiBJZiB3ZSBkb24ndCBkbyB0aGlzLFxuICAvLyB3ZSdsbCBsZWFrIG1lbW9yeSAoYW5kIHRoZSB0aW1lciB3aWxsIGNvbnRpbnVlIHRvIGZpcmUgZXZlbiB0aG91Z2ggb3VyXG4gIC8vIGNvbXBvbmVudCBpcyBnb25lKS5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy50aW1lciAmJiBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH1cblxuICAvLyBVbmxpa2UgcHJvcGVydGllcywgc3RhdGUgaXMgb3duZWQgYnkgdGhlIGNvbXBvbmVudCwgYW5kIGNhbiBiZSBjaGFuZ2VkXG4gIC8vIHVzaW5nIGB0aGlzLnNldFN0YXRlYC4gTm90ZSB0aGF0IHlvdSBzaG91bGQgKm5ldmVyKiBtb2RpZnkgYHRoaXMuc3RhdGVgXG4gIC8vIGRpcmVjdGx5IC0tIGFsd2F5cyB1c2UgYHRoaXMuc2V0U3RhdGVgIHNvIHRoYXQgUmVhY3Qga25vd3MgdGhlIHN0YXRlIGhhc1xuICAvLyBjaGFuZ2VkLlxuICAvL1xuICAvLyBPdXIgdGltZXIgZnVuY3Rpb24gY2FsbHMgYHNldFN0YXRlYCwgd2hpY2ggYWxsb3dzIHVzIHRvIHVwZGF0ZSBvbmUgb3IgbW9yZVxuICAvLyBrZXlzIGluIG91ciBzdGF0ZS4gSXQgaGFzIHR3byB2ZXJzaW9uczpcbiAgLy9cbiAgLy8gSWYgd2Ugd2FudCB0byBzZXQgc3BlY2lmaWMgc3RhdGUgbm8gbWF0dGVyIHdoYXQsIHdlIGNhbiBwYXNzIGFuIG9iamVjdDpcbiAgLy9cbiAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWU6IDEwMCB9KVxuICAvL1xuICAvLyBCdXQgaWYgd2Ugd2FudCB0byBzZXQgc29tZSBuZXcgc3RhdGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUgKGxpa2Ugd2UgZG9cbiAgLy8gaGVyZSDigJQgd2Ugd2FudCB0byBhZGQgb25lIHRvIHRoZSB0aW1lciB2YWx1ZSksIHBhc3MgYSBmdW5jdGlvbiB0byBzZXRTdGF0ZVxuICAvLyBpbnN0ZWFkLiBUaGUgZnVuY3Rpb24gZ2V0cyB0aGUgY3VycmVudCBzdGF0ZSBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIGFuZFxuICAvLyB3aGF0ZXZlciB5b3UgcmV0dXJuIGlzIHRoZSBuZXcgc3RhdGUuXG4gIC8vXG4gIC8vICAgIHRoaXMuc2V0U3RhdGUob2xkU3RhdGUgPT4gKHsgdGltZTogb2xkU3RhdGUudGltZSArIDEgfSkpXG4gIC8vXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50IHRvIHJlbWVtYmVyIGJlY2F1c2UgUmVhY3QgZG9lc24ndCBzZXQgdGhlIHN0YXRlXG4gIC8vICppbW1lZGlhdGVseSo7IGl0IGp1c3QgcXVldWVzIGEgY2hhbmdlIGZvciB0aGUgbmV4dCB1cGRhdGUuIElmIHlvdSB1c2UgZGF0YVxuICAvLyBmcm9tIGB0aGlzLnN0YXRlYCB0byBkZXRlcm1pbmUgeW91ciBuZXcgc3RhdGUsIHlvdSBtaWdodCBiZSB1c2luZyB0aGUgd3JvbmdcbiAgLy8gdmFsdWVzIVxuICAvL1xuICAvLyBOb3RlIHRoYXQgdGhlIHN0YXRlIGRvZXNuJ3QgZ2V0IHRvdGFsbHkgcmVwbGFjZSBieSB0aGlzIG9iamVjdDsgaW5zdGVhZCxcbiAgLy8gUmVhY3QgbWVyZ2VzIHRoaXMgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUuXG4gIHRpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgob2xkU3RhdGUpID0+ICh7IHRpbWU6IG9sZFN0YXRlLnRpbWUgKyAxIH0pKVxuICB9XG5cbiAgLy8gUmVuZGVyIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gYSBjb21wb25lbnQncyBzdGF0ZSBpcyB1cGRhdGVkIHdpdGhcbiAgLy8gYHNldFN0YXRlYCwgYHJlcGxhY2VTdGF0ZWAsIG9yIHdoZW4gYGZvcmNlVXBkYXRlYCBpcyBjYWxsZWQuIENvbXBvc2VkXG4gIC8vIGNvbXBvbmVudHMgYXJlIGF1dG9tYXRpY2FsbHkgcmUtcmVuZGVyZWQuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5UaW1lOiB7dGhpcy5zdGF0ZS50aW1lfTwvZGl2PlxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8VGltZXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7OztBQS9EQTtBQUNBO0FBaUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./demo3/demo3.jsx\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./demo3/demo3.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo3/demo3.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"import React from \\\"react\\\"\\nimport ReactDOM from \\\"react-dom\\\"\\n\\nclass Timer extends React.Component {\\n  // In addition to properties (\\\"props\\\") passed from parents, React components\\n  // can also contain internal state, referenced by `this.state`. To set the\\n  // initial value for the state, set `this.state` inside the constructor. Don't\\n  // forget to call the parent's constructor with `super`!\\n  constructor(...args) {\\n    super(...args)\\n    this.state = {\\n      time: 0,\\n    }\\n  }\\n\\n  // React provides lifecycle hooks to set up and tear down components and\\n  // third-party APIs if necessary. Here, we start a timer when the component\\n  // mounts...\\n  componentDidMount() {\\n    this.timer = setInterval(() => {\\n      this.tick()\\n    }, 1000)\\n  }\\n\\n  // ... and remove the timer when the component unmounts. If we don't do this,\\n  // we'll leak memory (and the timer will continue to fire even though our\\n  // component is gone).\\n  componentWillUnmount() {\\n    this.timer && clearInterval(this.timer)\\n  }\\n\\n  // Unlike properties, state is owned by the component, and can be changed\\n  // using `this.setState`. Note that you should *never* modify `this.state`\\n  // directly -- always use `this.setState` so that React knows the state has\\n  // changed.\\n  //\\n  // Our timer function calls `setState`, which allows us to update one or more\\n  // keys in our state. It has two versions:\\n  //\\n  // If we want to set specific state no matter what, we can pass an object:\\n  //\\n  //    this.setState({ time: 100 })\\n  //\\n  // But if we want to set some new state based on the current state (like we do\\n  // here — we want to add one to the timer value), pass a function to setState\\n  // instead. The function gets the current state as its first argument, and\\n  // whatever you return is the new state.\\n  //\\n  //    this.setState(oldState => ({ time: oldState.time + 1 }))\\n  //\\n  // This is important to remember because React doesn't set the state\\n  // *immediately*; it just queues a change for the next update. If you use data\\n  // from `this.state` to determine your new state, you might be using the wrong\\n  // values!\\n  //\\n  // Note that the state doesn't get totally replace by this object; instead,\\n  // React merges this object with the current state.\\n  tick() {\\n    this.setState((oldState) => ({ time: oldState.time + 1 }))\\n  }\\n\\n  // Render is called automatically when a component's state is updated with\\n  // `setState`, `replaceState`, or when `forceUpdate` is called. Composed\\n  // components are automatically re-rendered.\\n  render() {\\n    return <div>Time: {this.state.time}</div>\\n  }\\n}\\n\\nReactDOM.render(<Timer />, document.getElementById(\\\"container\\\"))\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW8zL2RlbW8zLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RlbW8zL2RlbW8zLmpzeD82OGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBSZWFjdERPTSBmcm9tIFxcXCJyZWFjdC1kb21cXFwiXFxuXFxuY2xhc3MgVGltZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xcbiAgLy8gSW4gYWRkaXRpb24gdG8gcHJvcGVydGllcyAoXFxcInByb3BzXFxcIikgcGFzc2VkIGZyb20gcGFyZW50cywgUmVhY3QgY29tcG9uZW50c1xcbiAgLy8gY2FuIGFsc28gY29udGFpbiBpbnRlcm5hbCBzdGF0ZSwgcmVmZXJlbmNlZCBieSBgdGhpcy5zdGF0ZWAuIFRvIHNldCB0aGVcXG4gIC8vIGluaXRpYWwgdmFsdWUgZm9yIHRoZSBzdGF0ZSwgc2V0IGB0aGlzLnN0YXRlYCBpbnNpZGUgdGhlIGNvbnN0cnVjdG9yLiBEb24ndFxcbiAgLy8gZm9yZ2V0IHRvIGNhbGwgdGhlIHBhcmVudCdzIGNvbnN0cnVjdG9yIHdpdGggYHN1cGVyYCFcXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcXG4gICAgc3VwZXIoLi4uYXJncylcXG4gICAgdGhpcy5zdGF0ZSA9IHtcXG4gICAgICB0aW1lOiAwLFxcbiAgICB9XFxuICB9XFxuXFxuICAvLyBSZWFjdCBwcm92aWRlcyBsaWZlY3ljbGUgaG9va3MgdG8gc2V0IHVwIGFuZCB0ZWFyIGRvd24gY29tcG9uZW50cyBhbmRcXG4gIC8vIHRoaXJkLXBhcnR5IEFQSXMgaWYgbmVjZXNzYXJ5LiBIZXJlLCB3ZSBzdGFydCBhIHRpbWVyIHdoZW4gdGhlIGNvbXBvbmVudFxcbiAgLy8gbW91bnRzLi4uXFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcXG4gICAgICB0aGlzLnRpY2soKVxcbiAgICB9LCAxMDAwKVxcbiAgfVxcblxcbiAgLy8gLi4uIGFuZCByZW1vdmUgdGhlIHRpbWVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50cy4gSWYgd2UgZG9uJ3QgZG8gdGhpcyxcXG4gIC8vIHdlJ2xsIGxlYWsgbWVtb3J5IChhbmQgdGhlIHRpbWVyIHdpbGwgY29udGludWUgdG8gZmlyZSBldmVuIHRob3VnaCBvdXJcXG4gIC8vIGNvbXBvbmVudCBpcyBnb25lKS5cXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xcbiAgICB0aGlzLnRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcXG4gIH1cXG5cXG4gIC8vIFVubGlrZSBwcm9wZXJ0aWVzLCBzdGF0ZSBpcyBvd25lZCBieSB0aGUgY29tcG9uZW50LCBhbmQgY2FuIGJlIGNoYW5nZWRcXG4gIC8vIHVzaW5nIGB0aGlzLnNldFN0YXRlYC4gTm90ZSB0aGF0IHlvdSBzaG91bGQgKm5ldmVyKiBtb2RpZnkgYHRoaXMuc3RhdGVgXFxuICAvLyBkaXJlY3RseSAtLSBhbHdheXMgdXNlIGB0aGlzLnNldFN0YXRlYCBzbyB0aGF0IFJlYWN0IGtub3dzIHRoZSBzdGF0ZSBoYXNcXG4gIC8vIGNoYW5nZWQuXFxuICAvL1xcbiAgLy8gT3VyIHRpbWVyIGZ1bmN0aW9uIGNhbGxzIGBzZXRTdGF0ZWAsIHdoaWNoIGFsbG93cyB1cyB0byB1cGRhdGUgb25lIG9yIG1vcmVcXG4gIC8vIGtleXMgaW4gb3VyIHN0YXRlLiBJdCBoYXMgdHdvIHZlcnNpb25zOlxcbiAgLy9cXG4gIC8vIElmIHdlIHdhbnQgdG8gc2V0IHNwZWNpZmljIHN0YXRlIG5vIG1hdHRlciB3aGF0LCB3ZSBjYW4gcGFzcyBhbiBvYmplY3Q6XFxuICAvL1xcbiAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWU6IDEwMCB9KVxcbiAgLy9cXG4gIC8vIEJ1dCBpZiB3ZSB3YW50IHRvIHNldCBzb21lIG5ldyBzdGF0ZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzdGF0ZSAobGlrZSB3ZSBkb1xcbiAgLy8gaGVyZSDigJQgd2Ugd2FudCB0byBhZGQgb25lIHRvIHRoZSB0aW1lciB2YWx1ZSksIHBhc3MgYSBmdW5jdGlvbiB0byBzZXRTdGF0ZVxcbiAgLy8gaW5zdGVhZC4gVGhlIGZ1bmN0aW9uIGdldHMgdGhlIGN1cnJlbnQgc3RhdGUgYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCBhbmRcXG4gIC8vIHdoYXRldmVyIHlvdSByZXR1cm4gaXMgdGhlIG5ldyBzdGF0ZS5cXG4gIC8vXFxuICAvLyAgICB0aGlzLnNldFN0YXRlKG9sZFN0YXRlID0+ICh7IHRpbWU6IG9sZFN0YXRlLnRpbWUgKyAxIH0pKVxcbiAgLy9cXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50IHRvIHJlbWVtYmVyIGJlY2F1c2UgUmVhY3QgZG9lc24ndCBzZXQgdGhlIHN0YXRlXFxuICAvLyAqaW1tZWRpYXRlbHkqOyBpdCBqdXN0IHF1ZXVlcyBhIGNoYW5nZSBmb3IgdGhlIG5leHQgdXBkYXRlLiBJZiB5b3UgdXNlIGRhdGFcXG4gIC8vIGZyb20gYHRoaXMuc3RhdGVgIHRvIGRldGVybWluZSB5b3VyIG5ldyBzdGF0ZSwgeW91IG1pZ2h0IGJlIHVzaW5nIHRoZSB3cm9uZ1xcbiAgLy8gdmFsdWVzIVxcbiAgLy9cXG4gIC8vIE5vdGUgdGhhdCB0aGUgc3RhdGUgZG9lc24ndCBnZXQgdG90YWxseSByZXBsYWNlIGJ5IHRoaXMgb2JqZWN0OyBpbnN0ZWFkLFxcbiAgLy8gUmVhY3QgbWVyZ2VzIHRoaXMgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUuXFxuICB0aWNrKCkge1xcbiAgICB0aGlzLnNldFN0YXRlKChvbGRTdGF0ZSkgPT4gKHsgdGltZTogb2xkU3RhdGUudGltZSArIDEgfSkpXFxuICB9XFxuXFxuICAvLyBSZW5kZXIgaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBhIGNvbXBvbmVudCdzIHN0YXRlIGlzIHVwZGF0ZWQgd2l0aFxcbiAgLy8gYHNldFN0YXRlYCwgYHJlcGxhY2VTdGF0ZWAsIG9yIHdoZW4gYGZvcmNlVXBkYXRlYCBpcyBjYWxsZWQuIENvbXBvc2VkXFxuICAvLyBjb21wb25lbnRzIGFyZSBhdXRvbWF0aWNhbGx5IHJlLXJlbmRlcmVkLlxcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gPGRpdj5UaW1lOiB7dGhpcy5zdGF0ZS50aW1lfTwvZGl2PlxcbiAgfVxcbn1cXG5cXG5SZWFjdERPTS5yZW5kZXIoPFRpbWVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiY29udGFpbmVyXFxcIikpXFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/raw-loader/dist/cjs.js!./demo3/demo3.jsx\n");

/***/ })

}]);