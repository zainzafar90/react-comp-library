"use strict";

var _interopRequireDefault = require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits"));

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("../ProgressBar"));

var _EyeIcon = _interopRequireDefault(require("../EyeIcon"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

/** Password input with integrated label, quality tips, and show password toggle. */
var PasswordInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(PasswordInput, _React$Component);

  function PasswordInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PasswordInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PasswordInput).call(this, props));

    _this.toggleShowPassword = function (event) {
      _this.setState(function (prevState) {
        return {
          showPassword: !prevState.showPassword
        };
      });

      if (event) event.preventDefault();
    };

    _this.state = {
      showPassword: false
    };
    return _this;
  }

  (0, _createClass2.default)(PasswordInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          htmlId = _this$props.htmlId,
          value = _this$props.value,
          label = _this$props.label,
          error = _this$props.error,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          maxLength = _this$props.maxLength,
          showVisibilityToggle = _this$props.showVisibilityToggle,
          quality = _this$props.quality,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["htmlId", "value", "label", "error", "onChange", "placeholder", "maxLength", "showVisibilityToggle", "quality"]);
      var showPassword = this.state.showPassword;
      return _react.default.createElement(_TextInput.default, Object.assign({
        htmlId: htmlId,
        label: label,
        placeholder: placeholder,
        type: showPassword ? "text" : "password",
        onChange: onChange,
        value: value,
        maxLength: maxLength,
        error: error,
        required: true
      }, props), showVisibilityToggle && _react.default.createElement("button", {
        onClick: this.toggleShowPassword,
        style: {
          marginLeft: 5
        }
      }, _react.default.createElement(_EyeIcon.default, null)), value.length > 0 && quality && _react.default.createElement(_ProgressBar.default, {
        percent: quality,
        width: 130
      }));
    }
  }]);
  return PasswordInput;
}(_react.default.Component);

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: "Password"
};
var _default = PasswordInput;
exports.default = _default;