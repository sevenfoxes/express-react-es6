import React from 'react';
import classNames from 'classNames';

var Hamburger = React.createClass({

  _mainClasses: function () {
    var classes = {
      hamburger: true,
      active: this.props.active
    };
    return classNames(classes);
  },

  render: function(){

    return (
      <div className={this._mainClasses()}>
        <div className="-line"></div>
        <div className="-line"></div>
        <div className="-line"></div>
      </div>
    );
  }
});

module.exports = Hamburger;
