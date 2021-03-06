"use strict";

var _interopRequireDefault = require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("../Label"));

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput(_ref) {
  var htmlId = _ref.htmlId,
      name = _ref.name,
      label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      error = _ref.error,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["htmlId", "name", "label", "type", "required", "onChange", "placeholder", "value", "error", "children"]);
  return _react.default.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, _react.default.createElement(_Label.default, {
    htmlFor: htmlId,
    label: label,
    required: required
  }), _react.default.createElement("input", Object.assign({
    id: htmlId,
    type: type,
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: error && {
      border: "solid 1px red"
    }
  }, props)), children, error && _react.default.createElement("div", {
    className: "error",
    style: {
      color: "red"
    }
  }, error));
}

var _default = TextInput;
exports.default = _default;