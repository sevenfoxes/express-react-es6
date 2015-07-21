'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classNames = require('classNames');

var _classNames2 = _interopRequireDefault(_classNames);

var Hamburger = _react2['default'].createClass({
  displayName: 'Hamburger',

  _mainClasses: function _mainClasses() {
    var classes = {
      hamburger: true,
      active: this.props.active
    };
    return (0, _classNames2['default'])(classes);
  },

  render: function render() {

    return _react2['default'].createElement(
      'div',
      { className: this._mainClasses() },
      _react2['default'].createElement('div', { className: '-line' }),
      _react2['default'].createElement('div', { className: '-line' }),
      _react2['default'].createElement('div', { className: '-line' })
    );
  }
});

module.exports = Hamburger;