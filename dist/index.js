'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classnames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

var index = (function (_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React__default['default'].createElement("h1", null, title);
});

var Button = function Button(props) {
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: classnames__default['default']('btn', props.type, props.size)
  }, props.children);
};

exports.Button = Button;
exports.Foo = index;
