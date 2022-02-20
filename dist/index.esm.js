import React from 'react';
import classnames from 'classnames';

var index = (function (_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React.createElement("h1", null, title);
});

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: classnames('btn', props.type, props.size)
  }, props.children);
};

export { Button, index as Foo };
