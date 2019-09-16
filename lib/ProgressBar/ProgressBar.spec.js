"use strict";

var _interopRequireDefault = require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe("ProgressBar", function () {
  test("getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50", function () {
    var wrapper = _enzyme.default.shallow(_react.default.createElement(_ProgressBar.default, {
      width: 500,
      percent: 50
    }));

    var width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});