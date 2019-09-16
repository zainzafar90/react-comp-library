"use strict";

var _interopRequireDefault = require("/Users/zainzafar/react-comp-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _PasswordInput = _interopRequireDefault(require("./PasswordInput"));

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

test('toggles input type when show/hide password clicked', function () {
  var wrapper = _enzyme.default.shallow(_react.default.createElement(_PasswordInput.default, {
    htmlId: "test",
    name: "test",
    value: "",
    onChange: function onChange() {},
    showVisibilityToggle: true
  })); // Password input should have a type of password initially


  expect(wrapper.find({
    type: 'password'
  })).toHaveLength(1);
  expect(wrapper.find({
    type: 'text'
  })).toHaveLength(0);
  wrapper.find('button').simulate('click'); // Password input should have a type of text after clicking toggle

  expect(wrapper.find({
    type: 'password'
  })).toHaveLength(0);
  expect(wrapper.find({
    type: 'text'
  })).toHaveLength(1);
});
test('hides password quality by default', function () {
  var tree = _reactTestRenderer.default.create(_react.default.createElement(_PasswordInput.default, {
    htmlId: "test",
    name: "test",
    onChange: function onChange() {},
    value: "Uisi38#8iad"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('shows password quality when enabled and a password is entered', function () {
  var tree = _reactTestRenderer.default.create(_react.default.createElement(_PasswordInput.default, {
    htmlId: "test",
    name: "test",
    onChange: function onChange() {},
    showQuality: true,
    value: "Uisi38#8iad"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('hides password quality when enabled but no password is entered', function () {
  var tree = _reactTestRenderer.default.create(_react.default.createElement(_PasswordInput.default, {
    htmlId: "test",
    name: "test",
    onChange: function onChange() {},
    showQuality: true,
    value: ""
  })).toJSON();

  expect(tree).toMatchSnapshot();
});