import React from 'react';

var Hero = React.createClass({
  render: function(){
    return (
      <div className="hero">
          <div className="-inner">
            <div className="-tag">
              <p><span className="bigger">We build <strong>experienced</strong><br /> digital marketing <strong>teams.</strong><br /></span><em>*without</em> the internal complexities of building and managing one in house.</p></div>
            <div className="-cta _flexible">
              <button className="btn-secondary">who we are</button>
              <button className="btn-primary">our solution</button>
            </div>
            <div className="-hero-image"></div>
          </div>
      </div>
    );
  }
});

module.exports = Hero;
