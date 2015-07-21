'use strict';

var React = require('react');
var Hamburger = require('Hamburger');

var HeaderNav = React.createClass({
  displayName: 'HeaderNav',

  getInitialState: function getInitialState() {
    return {
      activeHamburger: false
    };
  },

  _clickHamburger: function _clickHamburger() {
    this.setState({
      activeHamburger: !this.state.activeHamburger
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: '_flexible _fixed-top header-nav' },
      React.createElement(
        'a',
        { className: '-logo', href: '/' },
        'orca',
        React.createElement(
          'span',
          { className: '-period' },
          '.'
        ),
        React.createElement(
          'span',
          { className: '-highlight' },
          'digital'
        )
      ),
      React.createElement('div', { className: '_flex-space' }),
      React.createElement(
        'div',
        { onClick: this._clickHamburger, className: '-menu-trigger' },
        React.createElement(Hamburger, { active: this.state.activeHamburger })
      )
    );
  }
});

module.exports = HeaderNav;