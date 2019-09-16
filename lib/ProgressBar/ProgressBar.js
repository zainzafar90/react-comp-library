"use strict";

var _interopRequireDefault = require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits"));

var _react = _interopRequireDefault(require("react"));

var _percentUtils = require("../../utils/percentUtils");

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ProgressBar, _React$Component);

  function ProgressBar() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ProgressBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ProgressBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getColor = function (percent) {
      if (_this.props.percent === 100) return "green";
      return _this.props.percent > 50 ? "lightgreen" : "red";
    };

    _this.getWidthAsPercentOfTotalWidth = function () {
      return parseInt(_this.props.width * (_this.props.percent / 100), 10);
    };

    return _this;
  }

  (0, _createClass2.default)(ProgressBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          percent = _this$props.percent,
          width = _this$props.width,
          height = _this$props.height;
      return _react.default.createElement("div", {
        style: {
          border: "solid 1px lightgray",
          width: width
        }
      }, _react.default.createElement("div", {
        style: {
          width: (0, _percentUtils.getWidthAsPercentOfTotalWidth)(this.props.width, this.props.percent),
          height: height,
          backgroundColor: this.getColor(percent)
        }
      }));
    }
  }]);
  return ProgressBar;
}(_react.default.Component);

ProgressBar.defaultProps = {
  height: 5
};
var _default = ProgressBar;
exports.default = _default;