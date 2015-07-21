"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Hero = _react2["default"].createClass({
  displayName: "Hero",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      { className: "hero" },
      _react2["default"].createElement(
        "div",
        { className: "-inner" },
        _react2["default"].createElement(
          "div",
          { className: "-tag" },
          _react2["default"].createElement(
            "p",
            null,
            _react2["default"].createElement(
              "span",
              { className: "bigger" },
              "We build ",
              _react2["default"].createElement(
                "strong",
                null,
                "experienced"
              ),
              _react2["default"].createElement("br", null),
              " digital marketing ",
              _react2["default"].createElement(
                "strong",
                null,
                "teams."
              ),
              _react2["default"].createElement("br", null)
            ),
            _react2["default"].createElement(
              "em",
              null,
              "*without"
            ),
            " the internal complexities of building and managing one in house."
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: "-cta _flexible" },
          _react2["default"].createElement(
            "button",
            { className: "btn-secondary" },
            "who we are"
          ),
          _react2["default"].createElement(
            "button",
            { className: "btn-primary" },
            "our solution"
          )
        ),
        _react2["default"].createElement("div", { className: "-hero-image" })
      )
    );
  }
});

module.exports = Hero;