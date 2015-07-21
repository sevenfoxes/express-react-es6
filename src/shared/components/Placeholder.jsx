var React        = require('react');

var Placeholder = React.createClass({
  render: function(){
    return (
      <div className="placeholder">
          <div className="logo">Orca<span className="period">.</span><span className="highlight">Digital</span></div>
          <div className="tag">Marketing is changing. Are you?</div>
      </div>
    );
  }
});

module.exports = Placeholder;
