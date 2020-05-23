(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./demo4/demo4.jsx":
/*!*************************!*\
  !*** ./demo4/demo4.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar TodoList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createClass({\n  displayName: \"TodoList\",\n  // `TodoList` takes a prop called `items` which is an array of\n  // strings. We can make this requirement \"official\" using propTypes.\n  // If a component doesn't get the properties listed in its\n  // propTypes, it will warn you in the console (if using a development\n  // build of React).\n  propTypes: {\n    items: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.arrayOf(react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.string).isRequired\n  },\n  render: function render() {\n    // Every component in an array should have a `key` attribute\n    // set so React can uniquely identify the item if it needs\n    // to remove it from the middle of the array without iterating\n    // over every component in the array.\n    // Since our todos can't be reordered, we'll just use the index.\n    //\n    // Also notice the use of another ES6 feature in the call to `map`,\n    // arrow functions. The bodies of arrow functions are automatically\n    // bound to the value of `this` outside of them, so no more calling\n    // `.bind(this)` or `var self = this` juggling.\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, this.props.items.map(function (item, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: index\n      }, item);\n    }));\n  }\n});\nvar TodoForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createClass({\n  displayName: \"TodoForm\",\n  // React has PropTypes for most built-in JS types, as well as the\n  // ability to define your own validation functions.\n  //\n  // `TodoForm` requires an `onSubmit` property that we'll use to notify\n  // our parent component that the form has been submitted; this makes\n  // the component more reusable, since the logic for what to do with\n  // the submitted form isn't hardcoded into the `TodoForm` component.\n  propTypes: {\n    onSubmit: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.func.isRequired\n  },\n  // `TodoForm` contains a text input with a `value` attribute, which\n  // makes the input a \"controlled\" input. This means that the input\n  // will *always* display whatever is passed to its `value` no matter\n  // what the user tries to type in the box. The `text` property of\n  // our state is the current string to display in the box.\n  getInitialState: function getInitialState() {\n    return {\n      text: \"\"\n    };\n  },\n  // The text input has an `onChange` property, which calls a function\n  // any time the user interacts with the box. Here, we update our\n  // state so the text in the box updates.\n  //\n  // This is necessary because React components' `render` functions should\n  // *always* describe how the component should look at *any* point and time;\n  // if we didn't use a controlled input, the text might reset in certain\n  // re-rendering situations.\n  onTextChange: function onTextChange(e) {\n    this.setState({\n      text: e.target.value\n    });\n  },\n  // The form also has a handler for `onSubmit`...\n  onSubmit: function onSubmit(e) {\n    e.preventDefault();\n\n    if (this.state.text.trim()) {\n      // ... which we'll use to indicate to our parent that an\n      // item has been submitted...\n      this.props.onSubmit(this.state.text); // ... and then clear the text box.\n\n      this.setState({\n        text: \"\"\n      });\n    }\n  },\n  render: function render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.onSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      value: this.state.text,\n      onChange: this.onTextChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\",\n      value: \"Add Todo\"\n    }));\n  }\n}); // Our `Todos` component is the full application, which very simply composes\n// the `TodoList` and `TodoForm` components.\n\nvar Todos = react__WEBPACK_IMPORTED_MODULE_0___default.a.createClass({\n  displayName: \"Todos\",\n  getInitialState: function getInitialState() {\n    // It owns the actual items array, so the composed `TodoList`\n    // and `TodoForm` can be reused in many contexts (that is, they\n    // are not application specific).\n    return {\n      items: []\n    };\n  },\n  // `onSubmitTodo` is the function we pass to `TodoForm`'s\n  // `onSubmit` property; so, it will be called when `TodoForm`\n  // calls `this.props.onSubmit(...)`.\n  onSubmitTodo: function onSubmitTodo(newTodo) {\n    var nextItems = this.state.items.concat([newTodo]);\n    this.setState({\n      items: nextItems\n    });\n  },\n  render: function render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"TODO\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TodoList, {\n      items: this.state.items\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TodoForm, {\n      onSubmit: this.onSubmitTodo\n    }));\n  }\n});\nreact__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Todos, null), document.getElementById(\"container\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZW1vNC9kZW1vNC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZW1vNC9kZW1vNC5qc3g/MDc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxudmFyIFRvZG9MaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAvLyBgVG9kb0xpc3RgIHRha2VzIGEgcHJvcCBjYWxsZWQgYGl0ZW1zYCB3aGljaCBpcyBhbiBhcnJheSBvZlxuICAvLyBzdHJpbmdzLiBXZSBjYW4gbWFrZSB0aGlzIHJlcXVpcmVtZW50IFwib2ZmaWNpYWxcIiB1c2luZyBwcm9wVHlwZXMuXG4gIC8vIElmIGEgY29tcG9uZW50IGRvZXNuJ3QgZ2V0IHRoZSBwcm9wZXJ0aWVzIGxpc3RlZCBpbiBpdHNcbiAgLy8gcHJvcFR5cGVzLCBpdCB3aWxsIHdhcm4geW91IGluIHRoZSBjb25zb2xlIChpZiB1c2luZyBhIGRldmVsb3BtZW50XG4gIC8vIGJ1aWxkIG9mIFJlYWN0KS5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaXRlbXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBpbiBhbiBhcnJheSBzaG91bGQgaGF2ZSBhIGBrZXlgIGF0dHJpYnV0ZVxuICAgIC8vIHNldCBzbyBSZWFjdCBjYW4gdW5pcXVlbHkgaWRlbnRpZnkgdGhlIGl0ZW0gaWYgaXQgbmVlZHNcbiAgICAvLyB0byByZW1vdmUgaXQgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSBhcnJheSB3aXRob3V0IGl0ZXJhdGluZ1xuICAgIC8vIG92ZXIgZXZlcnkgY29tcG9uZW50IGluIHRoZSBhcnJheS5cbiAgICAvLyBTaW5jZSBvdXIgdG9kb3MgY2FuJ3QgYmUgcmVvcmRlcmVkLCB3ZSdsbCBqdXN0IHVzZSB0aGUgaW5kZXguXG4gICAgLy9cbiAgICAvLyBBbHNvIG5vdGljZSB0aGUgdXNlIG9mIGFub3RoZXIgRVM2IGZlYXR1cmUgaW4gdGhlIGNhbGwgdG8gYG1hcGAsXG4gICAgLy8gYXJyb3cgZnVuY3Rpb25zLiBUaGUgYm9kaWVzIG9mIGFycm93IGZ1bmN0aW9ucyBhcmUgYXV0b21hdGljYWxseVxuICAgIC8vIGJvdW5kIHRvIHRoZSB2YWx1ZSBvZiBgdGhpc2Agb3V0c2lkZSBvZiB0aGVtLCBzbyBubyBtb3JlIGNhbGxpbmdcbiAgICAvLyBgLmJpbmQodGhpcylgIG9yIGB2YXIgc2VsZiA9IHRoaXNgIGp1Z2dsaW5nLlxuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApXG4gIH0sXG59KVxuXG52YXIgVG9kb0Zvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIC8vIFJlYWN0IGhhcyBQcm9wVHlwZXMgZm9yIG1vc3QgYnVpbHQtaW4gSlMgdHlwZXMsIGFzIHdlbGwgYXMgdGhlXG4gIC8vIGFiaWxpdHkgdG8gZGVmaW5lIHlvdXIgb3duIHZhbGlkYXRpb24gZnVuY3Rpb25zLlxuICAvL1xuICAvLyBgVG9kb0Zvcm1gIHJlcXVpcmVzIGFuIGBvblN1Ym1pdGAgcHJvcGVydHkgdGhhdCB3ZSdsbCB1c2UgdG8gbm90aWZ5XG4gIC8vIG91ciBwYXJlbnQgY29tcG9uZW50IHRoYXQgdGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkOyB0aGlzIG1ha2VzXG4gIC8vIHRoZSBjb21wb25lbnQgbW9yZSByZXVzYWJsZSwgc2luY2UgdGhlIGxvZ2ljIGZvciB3aGF0IHRvIGRvIHdpdGhcbiAgLy8gdGhlIHN1Ym1pdHRlZCBmb3JtIGlzbid0IGhhcmRjb2RlZCBpbnRvIHRoZSBgVG9kb0Zvcm1gIGNvbXBvbmVudC5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgLy8gYFRvZG9Gb3JtYCBjb250YWlucyBhIHRleHQgaW5wdXQgd2l0aCBhIGB2YWx1ZWAgYXR0cmlidXRlLCB3aGljaFxuICAvLyBtYWtlcyB0aGUgaW5wdXQgYSBcImNvbnRyb2xsZWRcIiBpbnB1dC4gVGhpcyBtZWFucyB0aGF0IHRoZSBpbnB1dFxuICAvLyB3aWxsICphbHdheXMqIGRpc3BsYXkgd2hhdGV2ZXIgaXMgcGFzc2VkIHRvIGl0cyBgdmFsdWVgIG5vIG1hdHRlclxuICAvLyB3aGF0IHRoZSB1c2VyIHRyaWVzIHRvIHR5cGUgaW4gdGhlIGJveC4gVGhlIGB0ZXh0YCBwcm9wZXJ0eSBvZlxuICAvLyBvdXIgc3RhdGUgaXMgdGhlIGN1cnJlbnQgc3RyaW5nIHRvIGRpc3BsYXkgaW4gdGhlIGJveC5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBcIlwiLFxuICAgIH1cbiAgfSxcblxuICAvLyBUaGUgdGV4dCBpbnB1dCBoYXMgYW4gYG9uQ2hhbmdlYCBwcm9wZXJ0eSwgd2hpY2ggY2FsbHMgYSBmdW5jdGlvblxuICAvLyBhbnkgdGltZSB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgYm94LiBIZXJlLCB3ZSB1cGRhdGUgb3VyXG4gIC8vIHN0YXRlIHNvIHRoZSB0ZXh0IGluIHRoZSBib3ggdXBkYXRlcy5cbiAgLy9cbiAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBSZWFjdCBjb21wb25lbnRzJyBgcmVuZGVyYCBmdW5jdGlvbnMgc2hvdWxkXG4gIC8vICphbHdheXMqIGRlc2NyaWJlIGhvdyB0aGUgY29tcG9uZW50IHNob3VsZCBsb29rIGF0ICphbnkqIHBvaW50IGFuZCB0aW1lO1xuICAvLyBpZiB3ZSBkaWRuJ3QgdXNlIGEgY29udHJvbGxlZCBpbnB1dCwgdGhlIHRleHQgbWlnaHQgcmVzZXQgaW4gY2VydGFpblxuICAvLyByZS1yZW5kZXJpbmcgc2l0dWF0aW9ucy5cbiAgb25UZXh0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogZS50YXJnZXQudmFsdWUgfSlcbiAgfSxcblxuICAvLyBUaGUgZm9ybSBhbHNvIGhhcyBhIGhhbmRsZXIgZm9yIGBvblN1Ym1pdGAuLi5cbiAgb25TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLnN0YXRlLnRleHQudHJpbSgpKSB7XG4gICAgICAvLyAuLi4gd2hpY2ggd2UnbGwgdXNlIHRvIGluZGljYXRlIHRvIG91ciBwYXJlbnQgdGhhdCBhblxuICAgICAgLy8gaXRlbSBoYXMgYmVlbiBzdWJtaXR0ZWQuLi5cbiAgICAgIHRoaXMucHJvcHMub25TdWJtaXQodGhpcy5zdGF0ZS50ZXh0KVxuICAgICAgLy8gLi4uIGFuZCB0aGVuIGNsZWFyIHRoZSB0ZXh0IGJveC5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBcIlwiIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQgVG9kb1wiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9LFxufSlcblxuLy8gT3VyIGBUb2Rvc2AgY29tcG9uZW50IGlzIHRoZSBmdWxsIGFwcGxpY2F0aW9uLCB3aGljaCB2ZXJ5IHNpbXBseSBjb21wb3Nlc1xuLy8gdGhlIGBUb2RvTGlzdGAgYW5kIGBUb2RvRm9ybWAgY29tcG9uZW50cy5cbnZhciBUb2RvcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vIEl0IG93bnMgdGhlIGFjdHVhbCBpdGVtcyBhcnJheSwgc28gdGhlIGNvbXBvc2VkIGBUb2RvTGlzdGBcbiAgICAvLyBhbmQgYFRvZG9Gb3JtYCBjYW4gYmUgcmV1c2VkIGluIG1hbnkgY29udGV4dHMgKHRoYXQgaXMsIHRoZXlcbiAgICAvLyBhcmUgbm90IGFwcGxpY2F0aW9uIHNwZWNpZmljKS5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgIH1cbiAgfSxcblxuICAvLyBgb25TdWJtaXRUb2RvYCBpcyB0aGUgZnVuY3Rpb24gd2UgcGFzcyB0byBgVG9kb0Zvcm1gJ3NcbiAgLy8gYG9uU3VibWl0YCBwcm9wZXJ0eTsgc28sIGl0IHdpbGwgYmUgY2FsbGVkIHdoZW4gYFRvZG9Gb3JtYFxuICAvLyBjYWxscyBgdGhpcy5wcm9wcy5vblN1Ym1pdCguLi4pYC5cbiAgb25TdWJtaXRUb2RvKG5ld1RvZG8pIHtcbiAgICB2YXIgbmV4dEl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcy5jb25jYXQoW25ld1RvZG9dKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtczogbmV4dEl0ZW1zIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+VE9ETzwvaDM+XG4gICAgICAgIDxUb2RvTGlzdCBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30gLz5cbiAgICAgICAgPFRvZG9Gb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0VG9kb30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcbn0pXG5cblJlYWN0LnJlbmRlcig8VG9kb3MgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpKVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQTVCQTtBQStCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFHQTtBQTFEQTtBQThEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQTFCQTtBQTZCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./demo4/demo4.jsx\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./demo4/demo4.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo4/demo4.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"import React from \\\"react\\\"\\n\\nvar TodoList = React.createClass({\\n  // `TodoList` takes a prop called `items` which is an array of\\n  // strings. We can make this requirement \\\"official\\\" using propTypes.\\n  // If a component doesn't get the properties listed in its\\n  // propTypes, it will warn you in the console (if using a development\\n  // build of React).\\n  propTypes: {\\n    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,\\n  },\\n\\n  render() {\\n    // Every component in an array should have a `key` attribute\\n    // set so React can uniquely identify the item if it needs\\n    // to remove it from the middle of the array without iterating\\n    // over every component in the array.\\n    // Since our todos can't be reordered, we'll just use the index.\\n    //\\n    // Also notice the use of another ES6 feature in the call to `map`,\\n    // arrow functions. The bodies of arrow functions are automatically\\n    // bound to the value of `this` outside of them, so no more calling\\n    // `.bind(this)` or `var self = this` juggling.\\n    return (\\n      <ul>\\n        {this.props.items.map((item, index) => {\\n          return <li key={index}>{item}</li>\\n        })}\\n      </ul>\\n    )\\n  },\\n})\\n\\nvar TodoForm = React.createClass({\\n  // React has PropTypes for most built-in JS types, as well as the\\n  // ability to define your own validation functions.\\n  //\\n  // `TodoForm` requires an `onSubmit` property that we'll use to notify\\n  // our parent component that the form has been submitted; this makes\\n  // the component more reusable, since the logic for what to do with\\n  // the submitted form isn't hardcoded into the `TodoForm` component.\\n  propTypes: {\\n    onSubmit: React.PropTypes.func.isRequired,\\n  },\\n\\n  // `TodoForm` contains a text input with a `value` attribute, which\\n  // makes the input a \\\"controlled\\\" input. This means that the input\\n  // will *always* display whatever is passed to its `value` no matter\\n  // what the user tries to type in the box. The `text` property of\\n  // our state is the current string to display in the box.\\n  getInitialState() {\\n    return {\\n      text: \\\"\\\",\\n    }\\n  },\\n\\n  // The text input has an `onChange` property, which calls a function\\n  // any time the user interacts with the box. Here, we update our\\n  // state so the text in the box updates.\\n  //\\n  // This is necessary because React components' `render` functions should\\n  // *always* describe how the component should look at *any* point and time;\\n  // if we didn't use a controlled input, the text might reset in certain\\n  // re-rendering situations.\\n  onTextChange(e) {\\n    this.setState({ text: e.target.value })\\n  },\\n\\n  // The form also has a handler for `onSubmit`...\\n  onSubmit(e) {\\n    e.preventDefault()\\n    if (this.state.text.trim()) {\\n      // ... which we'll use to indicate to our parent that an\\n      // item has been submitted...\\n      this.props.onSubmit(this.state.text)\\n      // ... and then clear the text box.\\n      this.setState({ text: \\\"\\\" })\\n    }\\n  },\\n\\n  render() {\\n    return (\\n      <form onSubmit={this.onSubmit}>\\n        <input\\n          type=\\\"text\\\"\\n          value={this.state.text}\\n          onChange={this.onTextChange}\\n        />\\n        <input type=\\\"submit\\\" value=\\\"Add Todo\\\" />\\n      </form>\\n    )\\n  },\\n})\\n\\n// Our `Todos` component is the full application, which very simply composes\\n// the `TodoList` and `TodoForm` components.\\nvar Todos = React.createClass({\\n  getInitialState() {\\n    // It owns the actual items array, so the composed `TodoList`\\n    // and `TodoForm` can be reused in many contexts (that is, they\\n    // are not application specific).\\n    return {\\n      items: [],\\n    }\\n  },\\n\\n  // `onSubmitTodo` is the function we pass to `TodoForm`'s\\n  // `onSubmit` property; so, it will be called when `TodoForm`\\n  // calls `this.props.onSubmit(...)`.\\n  onSubmitTodo(newTodo) {\\n    var nextItems = this.state.items.concat([newTodo])\\n    this.setState({ items: nextItems })\\n  },\\n\\n  render() {\\n    return (\\n      <div>\\n        <h3>TODO</h3>\\n        <TodoList items={this.state.items} />\\n        <TodoForm onSubmit={this.onSubmitTodo} />\\n      </div>\\n    )\\n  },\\n})\\n\\nReact.render(<Todos />, document.getElementById(\\\"container\\\"))\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmF3LWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW80L2RlbW80LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RlbW80L2RlbW80LmpzeD85ZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcblxcbnZhciBUb2RvTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcXG4gIC8vIGBUb2RvTGlzdGAgdGFrZXMgYSBwcm9wIGNhbGxlZCBgaXRlbXNgIHdoaWNoIGlzIGFuIGFycmF5IG9mXFxuICAvLyBzdHJpbmdzLiBXZSBjYW4gbWFrZSB0aGlzIHJlcXVpcmVtZW50IFxcXCJvZmZpY2lhbFxcXCIgdXNpbmcgcHJvcFR5cGVzLlxcbiAgLy8gSWYgYSBjb21wb25lbnQgZG9lc24ndCBnZXQgdGhlIHByb3BlcnRpZXMgbGlzdGVkIGluIGl0c1xcbiAgLy8gcHJvcFR5cGVzLCBpdCB3aWxsIHdhcm4geW91IGluIHRoZSBjb25zb2xlIChpZiB1c2luZyBhIGRldmVsb3BtZW50XFxuICAvLyBidWlsZCBvZiBSZWFjdCkuXFxuICBwcm9wVHlwZXM6IHtcXG4gICAgaXRlbXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXFxuICB9LFxcblxcbiAgcmVuZGVyKCkge1xcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgaW4gYW4gYXJyYXkgc2hvdWxkIGhhdmUgYSBga2V5YCBhdHRyaWJ1dGVcXG4gICAgLy8gc2V0IHNvIFJlYWN0IGNhbiB1bmlxdWVseSBpZGVudGlmeSB0aGUgaXRlbSBpZiBpdCBuZWVkc1xcbiAgICAvLyB0byByZW1vdmUgaXQgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSBhcnJheSB3aXRob3V0IGl0ZXJhdGluZ1xcbiAgICAvLyBvdmVyIGV2ZXJ5IGNvbXBvbmVudCBpbiB0aGUgYXJyYXkuXFxuICAgIC8vIFNpbmNlIG91ciB0b2RvcyBjYW4ndCBiZSByZW9yZGVyZWQsIHdlJ2xsIGp1c3QgdXNlIHRoZSBpbmRleC5cXG4gICAgLy9cXG4gICAgLy8gQWxzbyBub3RpY2UgdGhlIHVzZSBvZiBhbm90aGVyIEVTNiBmZWF0dXJlIGluIHRoZSBjYWxsIHRvIGBtYXBgLFxcbiAgICAvLyBhcnJvdyBmdW5jdGlvbnMuIFRoZSBib2RpZXMgb2YgYXJyb3cgZnVuY3Rpb25zIGFyZSBhdXRvbWF0aWNhbGx5XFxuICAgIC8vIGJvdW5kIHRvIHRoZSB2YWx1ZSBvZiBgdGhpc2Agb3V0c2lkZSBvZiB0aGVtLCBzbyBubyBtb3JlIGNhbGxpbmdcXG4gICAgLy8gYC5iaW5kKHRoaXMpYCBvciBgdmFyIHNlbGYgPSB0aGlzYCBqdWdnbGluZy5cXG4gICAgcmV0dXJuIChcXG4gICAgICA8dWw+XFxuICAgICAgICB7dGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XFxuICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+e2l0ZW19PC9saT5cXG4gICAgICAgIH0pfVxcbiAgICAgIDwvdWw+XFxuICAgIClcXG4gIH0sXFxufSlcXG5cXG52YXIgVG9kb0Zvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XFxuICAvLyBSZWFjdCBoYXMgUHJvcFR5cGVzIGZvciBtb3N0IGJ1aWx0LWluIEpTIHR5cGVzLCBhcyB3ZWxsIGFzIHRoZVxcbiAgLy8gYWJpbGl0eSB0byBkZWZpbmUgeW91ciBvd24gdmFsaWRhdGlvbiBmdW5jdGlvbnMuXFxuICAvL1xcbiAgLy8gYFRvZG9Gb3JtYCByZXF1aXJlcyBhbiBgb25TdWJtaXRgIHByb3BlcnR5IHRoYXQgd2UnbGwgdXNlIHRvIG5vdGlmeVxcbiAgLy8gb3VyIHBhcmVudCBjb21wb25lbnQgdGhhdCB0aGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQ7IHRoaXMgbWFrZXNcXG4gIC8vIHRoZSBjb21wb25lbnQgbW9yZSByZXVzYWJsZSwgc2luY2UgdGhlIGxvZ2ljIGZvciB3aGF0IHRvIGRvIHdpdGhcXG4gIC8vIHRoZSBzdWJtaXR0ZWQgZm9ybSBpc24ndCBoYXJkY29kZWQgaW50byB0aGUgYFRvZG9Gb3JtYCBjb21wb25lbnQuXFxuICBwcm9wVHlwZXM6IHtcXG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXFxuICB9LFxcblxcbiAgLy8gYFRvZG9Gb3JtYCBjb250YWlucyBhIHRleHQgaW5wdXQgd2l0aCBhIGB2YWx1ZWAgYXR0cmlidXRlLCB3aGljaFxcbiAgLy8gbWFrZXMgdGhlIGlucHV0IGEgXFxcImNvbnRyb2xsZWRcXFwiIGlucHV0LiBUaGlzIG1lYW5zIHRoYXQgdGhlIGlucHV0XFxuICAvLyB3aWxsICphbHdheXMqIGRpc3BsYXkgd2hhdGV2ZXIgaXMgcGFzc2VkIHRvIGl0cyBgdmFsdWVgIG5vIG1hdHRlclxcbiAgLy8gd2hhdCB0aGUgdXNlciB0cmllcyB0byB0eXBlIGluIHRoZSBib3guIFRoZSBgdGV4dGAgcHJvcGVydHkgb2ZcXG4gIC8vIG91ciBzdGF0ZSBpcyB0aGUgY3VycmVudCBzdHJpbmcgdG8gZGlzcGxheSBpbiB0aGUgYm94LlxcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIHRleHQ6IFxcXCJcXFwiLFxcbiAgICB9XFxuICB9LFxcblxcbiAgLy8gVGhlIHRleHQgaW5wdXQgaGFzIGFuIGBvbkNoYW5nZWAgcHJvcGVydHksIHdoaWNoIGNhbGxzIGEgZnVuY3Rpb25cXG4gIC8vIGFueSB0aW1lIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBib3guIEhlcmUsIHdlIHVwZGF0ZSBvdXJcXG4gIC8vIHN0YXRlIHNvIHRoZSB0ZXh0IGluIHRoZSBib3ggdXBkYXRlcy5cXG4gIC8vXFxuICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIFJlYWN0IGNvbXBvbmVudHMnIGByZW5kZXJgIGZ1bmN0aW9ucyBzaG91bGRcXG4gIC8vICphbHdheXMqIGRlc2NyaWJlIGhvdyB0aGUgY29tcG9uZW50IHNob3VsZCBsb29rIGF0ICphbnkqIHBvaW50IGFuZCB0aW1lO1xcbiAgLy8gaWYgd2UgZGlkbid0IHVzZSBhIGNvbnRyb2xsZWQgaW5wdXQsIHRoZSB0ZXh0IG1pZ2h0IHJlc2V0IGluIGNlcnRhaW5cXG4gIC8vIHJlLXJlbmRlcmluZyBzaXR1YXRpb25zLlxcbiAgb25UZXh0Q2hhbmdlKGUpIHtcXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pXFxuICB9LFxcblxcbiAgLy8gVGhlIGZvcm0gYWxzbyBoYXMgYSBoYW5kbGVyIGZvciBgb25TdWJtaXRgLi4uXFxuICBvblN1Ym1pdChlKSB7XFxuICAgIGUucHJldmVudERlZmF1bHQoKVxcbiAgICBpZiAodGhpcy5zdGF0ZS50ZXh0LnRyaW0oKSkge1xcbiAgICAgIC8vIC4uLiB3aGljaCB3ZSdsbCB1c2UgdG8gaW5kaWNhdGUgdG8gb3VyIHBhcmVudCB0aGF0IGFuXFxuICAgICAgLy8gaXRlbSBoYXMgYmVlbiBzdWJtaXR0ZWQuLi5cXG4gICAgICB0aGlzLnByb3BzLm9uU3VibWl0KHRoaXMuc3RhdGUudGV4dClcXG4gICAgICAvLyAuLi4gYW5kIHRoZW4gY2xlYXIgdGhlIHRleHQgYm94LlxcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBcXFwiXFxcIiB9KVxcbiAgICB9XFxuICB9LFxcblxcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cXG4gICAgICAgIDxpbnB1dFxcbiAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2V9XFxuICAgICAgICAvPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgdmFsdWU9XFxcIkFkZCBUb2RvXFxcIiAvPlxcbiAgICAgIDwvZm9ybT5cXG4gICAgKVxcbiAgfSxcXG59KVxcblxcbi8vIE91ciBgVG9kb3NgIGNvbXBvbmVudCBpcyB0aGUgZnVsbCBhcHBsaWNhdGlvbiwgd2hpY2ggdmVyeSBzaW1wbHkgY29tcG9zZXNcXG4vLyB0aGUgYFRvZG9MaXN0YCBhbmQgYFRvZG9Gb3JtYCBjb21wb25lbnRzLlxcbnZhciBUb2RvcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcXG4gICAgLy8gSXQgb3ducyB0aGUgYWN0dWFsIGl0ZW1zIGFycmF5LCBzbyB0aGUgY29tcG9zZWQgYFRvZG9MaXN0YFxcbiAgICAvLyBhbmQgYFRvZG9Gb3JtYCBjYW4gYmUgcmV1c2VkIGluIG1hbnkgY29udGV4dHMgKHRoYXQgaXMsIHRoZXlcXG4gICAgLy8gYXJlIG5vdCBhcHBsaWNhdGlvbiBzcGVjaWZpYykuXFxuICAgIHJldHVybiB7XFxuICAgICAgaXRlbXM6IFtdLFxcbiAgICB9XFxuICB9LFxcblxcbiAgLy8gYG9uU3VibWl0VG9kb2AgaXMgdGhlIGZ1bmN0aW9uIHdlIHBhc3MgdG8gYFRvZG9Gb3JtYCdzXFxuICAvLyBgb25TdWJtaXRgIHByb3BlcnR5OyBzbywgaXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBgVG9kb0Zvcm1gXFxuICAvLyBjYWxscyBgdGhpcy5wcm9wcy5vblN1Ym1pdCguLi4pYC5cXG4gIG9uU3VibWl0VG9kbyhuZXdUb2RvKSB7XFxuICAgIHZhciBuZXh0SXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zLmNvbmNhdChbbmV3VG9kb10pXFxuICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtczogbmV4dEl0ZW1zIH0pXFxuICB9LFxcblxcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8aDM+VE9ETzwvaDM+XFxuICAgICAgICA8VG9kb0xpc3QgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IC8+XFxuICAgICAgICA8VG9kb0Zvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRUb2RvfSAvPlxcbiAgICAgIDwvZGl2PlxcbiAgICApXFxuICB9LFxcbn0pXFxuXFxuUmVhY3QucmVuZGVyKDxUb2RvcyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcImNvbnRhaW5lclxcXCIpKVxcblwiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/raw-loader/dist/cjs.js!./demo4/demo4.jsx\n");

/***/ })

}]);