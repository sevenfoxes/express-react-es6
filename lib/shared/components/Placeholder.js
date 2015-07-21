"use strict";

var React = require("react");

var Placeholder = React.createClass({
  displayName: "Placeholder",

  render: function render() {
    return React.createElement(
      "div",
      { className: "placeholder" },
      React.createElement(
        "div",
        { className: "logo" },
        "Orca",
        React.createElement(
          "span",
          { className: "period" },
          "."
        ),
        React.createElement(
          "span",
          { className: "highlight" },
          "Digital"
        )
      ),
      React.createElement(
        "div",
        { className: "tag" },
        "Marketing is changing. Are you?"
      )
    );
  }
});

module.exports = Placeholder;