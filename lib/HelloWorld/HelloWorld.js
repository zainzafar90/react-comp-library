"use strict";

var _interopRequireDefault = require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/** My super-lame component  */
var HelloWorld = function HelloWorld(_ref) {
  var message = _ref.message;
  return _react.default.createElement("div", null, "Hello World: ", message);
};

HelloWorld.defaultProps = {
  message: 'World'
};
var _default = HelloWorld;
exports.default = _default;