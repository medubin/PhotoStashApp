var React = require('react');

var Logo = React.createClass({

  render: function() {
    return (
      <detail className='logo'>
        <img alt="Icon" src="/assets/Logo.png" width='125' />
      </detail>
    );
  }

});

module.exports = Logo;
