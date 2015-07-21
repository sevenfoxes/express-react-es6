var React        = require('react');
var Hamburger    = require('Hamburger');

var HeaderNav = React.createClass({

  getInitialState: function () {
    return {
      activeHamburger: false
    };
  },

  _clickHamburger: function () {
    this.setState({
      activeHamburger: !this.state.activeHamburger
    });
  },

  render: function(){
    return (
      <div className={"_flexible _fixed-top header-nav"}>
        <a className={"-logo"} href="/">orca<span className={"-period"}>.</span><span className={"-highlight"}>digital</span></a>
        <div className={"_flex-space"}></div>
        <div onClick={this._clickHamburger} className={"-menu-trigger"}>
          <Hamburger active={this.state.activeHamburger} />
        </div>
      </div>
    );
  }
});

module.exports = HeaderNav;
