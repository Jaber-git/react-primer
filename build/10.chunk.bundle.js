(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./demo1/demo1.jsx":
/*!*************************!*\
  !*** ./demo1/demo1.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // Create a ReactComponent class with `React.createClass`. Pass the\n// class to `React.createFactory` to create a function that, when\n// called, creates a `ReactElement` object with that type.\n// React uses ReactElements to create a virtual DOM that determines\n// how the real DOM should look and behave.\n\nvar HelloComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createClass({\n  displayName: \"HelloComponent\",\n  // Every component needs a `render` function that returns a\n  // ReactNode. A ReactNode is either:\n  //\n  //  * a ReactElement\n  //  * a string (aka ReactText)\n  //  * a number (aka ReactText)\n  //  * an array of ReactNodes (aka ReactFragment)\n  //\n  // ReactElement factories that produce ReactElements that represent\n  // native HTML elements can be found on `React.DOM`.\n  render: function render() {\n    // ReactElement factories take a hash of properties as their\n    // first argument and their children as remaining arguments.\n    // Here, we utilize `this.props`, which is an object\n    // containing the properties passed to this component.\n    //\n    // Properties should be treated as immutable--you should\n    // not try to change them from inside a component; they\n    // belong to whoever passed them to you!\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.DOM.div(null, \"Hello \", this.props.name, react__WEBPACK_IMPORTED_MODULE_0___default.a.DOM.strong(null, \"!\"));\n  }\n});\nvar HelloElementFactory = react__WEBPACK_IMPORTED_MODULE_0___default.a.createFactory(HelloComponent); // ReactElement factories are just a convenience for creating new\n// ReactElements.\n//\n//     var element = HelloElementFactory(properties, children...)\n//\n// is the same as\n//\n//     var element = React.createElement(HelloComponent, properties, children...)\n// We can render a component into a DOM node with `React.render`,\n// which takes a ReactElement and a DOM node to render into.\n\nreact__WEBPACK_IMPORTED_MODULE_0___default.a.render( // We pass `\"Minerva\"` as the `name` property, which is\n// used in `HelloComponent`'s `render` function.\nHelloElementFactory({\n  name: \"Minerva\"\n}), document.getElementById(\"container\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZW1vMS9kZW1vMS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vMS9kZW1vMS5qc3g/ZGJmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuLy8gQ3JlYXRlIGEgUmVhY3RDb21wb25lbnQgY2xhc3Mgd2l0aCBgUmVhY3QuY3JlYXRlQ2xhc3NgLiBQYXNzIHRoZVxuLy8gY2xhc3MgdG8gYFJlYWN0LmNyZWF0ZUZhY3RvcnlgIHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQsIHdoZW5cbi8vIGNhbGxlZCwgY3JlYXRlcyBhIGBSZWFjdEVsZW1lbnRgIG9iamVjdCB3aXRoIHRoYXQgdHlwZS5cbi8vIFJlYWN0IHVzZXMgUmVhY3RFbGVtZW50cyB0byBjcmVhdGUgYSB2aXJ0dWFsIERPTSB0aGF0IGRldGVybWluZXNcbi8vIGhvdyB0aGUgcmVhbCBET00gc2hvdWxkIGxvb2sgYW5kIGJlaGF2ZS5cbnZhciBIZWxsb0NvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGEgYHJlbmRlcmAgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAgLy8gUmVhY3ROb2RlLiBBIFJlYWN0Tm9kZSBpcyBlaXRoZXI6XG4gIC8vXG4gIC8vICAqIGEgUmVhY3RFbGVtZW50XG4gIC8vICAqIGEgc3RyaW5nIChha2EgUmVhY3RUZXh0KVxuICAvLyAgKiBhIG51bWJlciAoYWthIFJlYWN0VGV4dClcbiAgLy8gICogYW4gYXJyYXkgb2YgUmVhY3ROb2RlcyAoYWthIFJlYWN0RnJhZ21lbnQpXG4gIC8vXG4gIC8vIFJlYWN0RWxlbWVudCBmYWN0b3JpZXMgdGhhdCBwcm9kdWNlIFJlYWN0RWxlbWVudHMgdGhhdCByZXByZXNlbnRcbiAgLy8gbmF0aXZlIEhUTUwgZWxlbWVudHMgY2FuIGJlIGZvdW5kIG9uIGBSZWFjdC5ET01gLlxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZWFjdEVsZW1lbnQgZmFjdG9yaWVzIHRha2UgYSBoYXNoIG9mIHByb3BlcnRpZXMgYXMgdGhlaXJcbiAgICAvLyBmaXJzdCBhcmd1bWVudCBhbmQgdGhlaXIgY2hpbGRyZW4gYXMgcmVtYWluaW5nIGFyZ3VtZW50cy5cbiAgICAvLyBIZXJlLCB3ZSB1dGlsaXplIGB0aGlzLnByb3BzYCwgd2hpY2ggaXMgYW4gb2JqZWN0XG4gICAgLy8gY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAgLy9cbiAgICAvLyBQcm9wZXJ0aWVzIHNob3VsZCBiZSB0cmVhdGVkIGFzIGltbXV0YWJsZS0teW91IHNob3VsZFxuICAgIC8vIG5vdCB0cnkgdG8gY2hhbmdlIHRoZW0gZnJvbSBpbnNpZGUgYSBjb21wb25lbnQ7IHRoZXlcbiAgICAvLyBiZWxvbmcgdG8gd2hvZXZlciBwYXNzZWQgdGhlbSB0byB5b3UhXG4gICAgcmV0dXJuIFJlYWN0LkRPTS5kaXYoXG4gICAgICBudWxsLFxuICAgICAgXCJIZWxsbyBcIixcbiAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgIFJlYWN0LkRPTS5zdHJvbmcobnVsbCwgXCIhXCIpXG4gICAgKVxuICB9LFxufSlcblxudmFyIEhlbGxvRWxlbWVudEZhY3RvcnkgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KEhlbGxvQ29tcG9uZW50KVxuLy8gUmVhY3RFbGVtZW50IGZhY3RvcmllcyBhcmUganVzdCBhIGNvbnZlbmllbmNlIGZvciBjcmVhdGluZyBuZXdcbi8vIFJlYWN0RWxlbWVudHMuXG4vL1xuLy8gICAgIHZhciBlbGVtZW50ID0gSGVsbG9FbGVtZW50RmFjdG9yeShwcm9wZXJ0aWVzLCBjaGlsZHJlbi4uLilcbi8vXG4vLyBpcyB0aGUgc2FtZSBhc1xuLy9cbi8vICAgICB2YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVsbG9Db21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuLi4uKVxuXG4vLyBXZSBjYW4gcmVuZGVyIGEgY29tcG9uZW50IGludG8gYSBET00gbm9kZSB3aXRoIGBSZWFjdC5yZW5kZXJgLFxuLy8gd2hpY2ggdGFrZXMgYSBSZWFjdEVsZW1lbnQgYW5kIGEgRE9NIG5vZGUgdG8gcmVuZGVyIGludG8uXG5SZWFjdC5yZW5kZXIoXG4gIC8vIFdlIHBhc3MgYFwiTWluZXJ2YVwiYCBhcyB0aGUgYG5hbWVgIHByb3BlcnR5LCB3aGljaCBpc1xuICAvLyB1c2VkIGluIGBIZWxsb0NvbXBvbmVudGAncyBgcmVuZGVyYCBmdW5jdGlvbi5cbiAgSGVsbG9FbGVtZW50RmFjdG9yeSh7IG5hbWU6IFwiTWluZXJ2YVwiIH0pLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKVxuKVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBMUJBO0FBNkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./demo1/demo1.jsx\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./demo1/demo1.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo1/demo1.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"import React from \\\"react\\\"\\n\\n// Create a ReactComponent class with `React.createClass`. Pass the\\n// class to `React.createFactory` to create a function that, when\\n// called, creates a `ReactElement` object with that type.\\n// React uses ReactElements to create a virtual DOM that determines\\n// how the real DOM should look and behave.\\nvar HelloComponent = React.createClass({\\n  // Every component needs a `render` function that returns a\\n  // ReactNode. A ReactNode is either:\\n  //\\n  //  * a ReactElement\\n  //  * a string (aka ReactText)\\n  //  * a number (aka ReactText)\\n  //  * an array of ReactNodes (aka ReactFragment)\\n  //\\n  // ReactElement factories that produce ReactElements that represent\\n  // native HTML elements can be found on `React.DOM`.\\n  render: function () {\\n    // ReactElement factories take a hash of properties as their\\n    // first argument and their children as remaining arguments.\\n    // Here, we utilize `this.props`, which is an object\\n    // containing the properties passed to this component.\\n    //\\n    // Properties should be treated as immutable--you should\\n    // not try to change them from inside a component; they\\n    // belong to whoever passed them to you!\\n    return React.DOM.div(\\n      null,\\n      \\\"Hello \\\",\\n      this.props.name,\\n      React.DOM.strong(null, \\\"!\\\")\\n    )\\n  },\\n})\\n\\nvar HelloElementFactory = React.createFactory(HelloComponent)\\n// ReactElement factories are just a convenience for creating new\\n// ReactElements.\\n//\\n//     var element = HelloElementFactory(properties, children...)\\n//\\n// is the same as\\n//\\n//     var element = React.createElement(HelloComponent, properties, children...)\\n\\n// We can render a component into a DOM node with `React.render`,\\n// which takes a ReactElement and a DOM node to render into.\\nReact.render(\\n  // We pass `\\\"Minerva\\\"` as the `name` property, which is\\n  // used in `HelloComponent`'s `render` function.\\n  HelloElementFactory({ name: \\\"Minerva\\\" }),\\n  document.getElementById(\\\"container\\\")\\n)\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW8xL2RlbW8xLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RlbW8xL2RlbW8xLmpzeD82ZTExIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcblxcbi8vIENyZWF0ZSBhIFJlYWN0Q29tcG9uZW50IGNsYXNzIHdpdGggYFJlYWN0LmNyZWF0ZUNsYXNzYC4gUGFzcyB0aGVcXG4vLyBjbGFzcyB0byBgUmVhY3QuY3JlYXRlRmFjdG9yeWAgdG8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCwgd2hlblxcbi8vIGNhbGxlZCwgY3JlYXRlcyBhIGBSZWFjdEVsZW1lbnRgIG9iamVjdCB3aXRoIHRoYXQgdHlwZS5cXG4vLyBSZWFjdCB1c2VzIFJlYWN0RWxlbWVudHMgdG8gY3JlYXRlIGEgdmlydHVhbCBET00gdGhhdCBkZXRlcm1pbmVzXFxuLy8gaG93IHRoZSByZWFsIERPTSBzaG91bGQgbG9vayBhbmQgYmVoYXZlLlxcbnZhciBIZWxsb0NvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcXG4gIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBhIGByZW5kZXJgIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXFxuICAvLyBSZWFjdE5vZGUuIEEgUmVhY3ROb2RlIGlzIGVpdGhlcjpcXG4gIC8vXFxuICAvLyAgKiBhIFJlYWN0RWxlbWVudFxcbiAgLy8gICogYSBzdHJpbmcgKGFrYSBSZWFjdFRleHQpXFxuICAvLyAgKiBhIG51bWJlciAoYWthIFJlYWN0VGV4dClcXG4gIC8vICAqIGFuIGFycmF5IG9mIFJlYWN0Tm9kZXMgKGFrYSBSZWFjdEZyYWdtZW50KVxcbiAgLy9cXG4gIC8vIFJlYWN0RWxlbWVudCBmYWN0b3JpZXMgdGhhdCBwcm9kdWNlIFJlYWN0RWxlbWVudHMgdGhhdCByZXByZXNlbnRcXG4gIC8vIG5hdGl2ZSBIVE1MIGVsZW1lbnRzIGNhbiBiZSBmb3VuZCBvbiBgUmVhY3QuRE9NYC5cXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xcbiAgICAvLyBSZWFjdEVsZW1lbnQgZmFjdG9yaWVzIHRha2UgYSBoYXNoIG9mIHByb3BlcnRpZXMgYXMgdGhlaXJcXG4gICAgLy8gZmlyc3QgYXJndW1lbnQgYW5kIHRoZWlyIGNoaWxkcmVuIGFzIHJlbWFpbmluZyBhcmd1bWVudHMuXFxuICAgIC8vIEhlcmUsIHdlIHV0aWxpemUgYHRoaXMucHJvcHNgLCB3aGljaCBpcyBhbiBvYmplY3RcXG4gICAgLy8gY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBwYXNzZWQgdG8gdGhpcyBjb21wb25lbnQuXFxuICAgIC8vXFxuICAgIC8vIFByb3BlcnRpZXMgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgaW1tdXRhYmxlLS15b3Ugc2hvdWxkXFxuICAgIC8vIG5vdCB0cnkgdG8gY2hhbmdlIHRoZW0gZnJvbSBpbnNpZGUgYSBjb21wb25lbnQ7IHRoZXlcXG4gICAgLy8gYmVsb25nIHRvIHdob2V2ZXIgcGFzc2VkIHRoZW0gdG8geW91IVxcbiAgICByZXR1cm4gUmVhY3QuRE9NLmRpdihcXG4gICAgICBudWxsLFxcbiAgICAgIFxcXCJIZWxsbyBcXFwiLFxcbiAgICAgIHRoaXMucHJvcHMubmFtZSxcXG4gICAgICBSZWFjdC5ET00uc3Ryb25nKG51bGwsIFxcXCIhXFxcIilcXG4gICAgKVxcbiAgfSxcXG59KVxcblxcbnZhciBIZWxsb0VsZW1lbnRGYWN0b3J5ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShIZWxsb0NvbXBvbmVudClcXG4vLyBSZWFjdEVsZW1lbnQgZmFjdG9yaWVzIGFyZSBqdXN0IGEgY29udmVuaWVuY2UgZm9yIGNyZWF0aW5nIG5ld1xcbi8vIFJlYWN0RWxlbWVudHMuXFxuLy9cXG4vLyAgICAgdmFyIGVsZW1lbnQgPSBIZWxsb0VsZW1lbnRGYWN0b3J5KHByb3BlcnRpZXMsIGNoaWxkcmVuLi4uKVxcbi8vXFxuLy8gaXMgdGhlIHNhbWUgYXNcXG4vL1xcbi8vICAgICB2YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVsbG9Db21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuLi4uKVxcblxcbi8vIFdlIGNhbiByZW5kZXIgYSBjb21wb25lbnQgaW50byBhIERPTSBub2RlIHdpdGggYFJlYWN0LnJlbmRlcmAsXFxuLy8gd2hpY2ggdGFrZXMgYSBSZWFjdEVsZW1lbnQgYW5kIGEgRE9NIG5vZGUgdG8gcmVuZGVyIGludG8uXFxuUmVhY3QucmVuZGVyKFxcbiAgLy8gV2UgcGFzcyBgXFxcIk1pbmVydmFcXFwiYCBhcyB0aGUgYG5hbWVgIHByb3BlcnR5LCB3aGljaCBpc1xcbiAgLy8gdXNlZCBpbiBgSGVsbG9Db21wb25lbnRgJ3MgYHJlbmRlcmAgZnVuY3Rpb24uXFxuICBIZWxsb0VsZW1lbnRGYWN0b3J5KHsgbmFtZTogXFxcIk1pbmVydmFcXFwiIH0pLFxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcImNvbnRhaW5lclxcXCIpXFxuKVxcblwiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/raw-loader/dist/cjs.js!./demo1/demo1.jsx\n");

/***/ })

}]);