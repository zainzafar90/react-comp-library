"use strict";

var _interopRequireDefault = require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits"));

var _react = _interopRequireDefault(require("react"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _PasswordInput = _interopRequireDefault(require("../PasswordInput"));

/** Registration form with built-in validation. */
var RegistrationForm =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RegistrationForm);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RegistrationForm).call(this, props));

    _this.onChange = function (event) {
      var user = _this.state.user;
      user[event.target.name] = event.target.value;

      _this.setState({
        user: user
      });
    };

    _this.onSubmit = function () {
      var user = _this.state.user;

      var formIsValid = _this.validate(user);

      if (formIsValid) {
        _this.props.onSubmit(user);

        _this.setState({
          submitted: true
        });
      }
    };

    _this.state = {
      user: {
        email: "",
        password: ""
      },
      errors: {},
      submitted: false
    };
    return _this;
  }

  (0, _createClass2.default)(RegistrationForm, [{
    key: "passwordQuality",
    // Returns a number from 0 to 100 that represents password quality.
    // For simplicity, just returning % of min length entered.
    // Could enhance with checks for number, special char, unique characters, etc.
    value: function passwordQuality(password) {
      if (!password) return null;
      if (password.length >= this.props.minPasswordLength) return 100;
      var percentOfMinLength = parseInt(password.length / this.props.minPasswordLength * 100, 10);
      return percentOfMinLength;
    }
  }, {
    key: "validate",
    value: function validate(_ref) {
      var email = _ref.email,
          password = _ref.password;
      var errors = {};
      var minPasswordLength = this.props.minPasswordLength;
      if (!email) errors.email = "Email required.";
      if (password.length < minPasswordLength) errors.password = "Password must be at least ".concat(minPasswordLength, " characters.");
      this.setState({
        errors: errors
      });
      var formIsValid = Object.getOwnPropertyNames(errors).length === 0;
      return formIsValid;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          errors = _this$state.errors,
          submitted = _this$state.submitted;
      var _this$state$user = this.state.user,
          email = _this$state$user.email,
          password = _this$state$user.password;
      return submitted ? _react.default.createElement("h2", null, this.props.confirmationMessage) : _react.default.createElement("div", null, _react.default.createElement(_TextInput.default, {
        htmlId: "registration-form-email",
        name: "email",
        onChange: this.onChange,
        label: "Email",
        value: email,
        error: errors.email,
        required: true
      }), _react.default.createElement(_PasswordInput.default, {
        htmlId: "registration-form-password",
        name: "password",
        value: password,
        onChange: this.onChange,
        quality: this.passwordQuality(password),
        showVisibilityToggle: true,
        maxLength: 50,
        error: errors.password
      }), _react.default.createElement("input", {
        type: "submit",
        value: "Register",
        onClick: this.onSubmit
      }));
    }
  }]);
  return RegistrationForm;
}(_react.default.Component);

RegistrationForm.defaultProps = {
  confirmationMessage: "Thanks for registering!",
  minPasswordLength: 8
};
var _default = RegistrationForm;
exports.default = _default;