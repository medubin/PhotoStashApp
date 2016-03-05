var React = require('react');
var History = require('react-router').History;

var Logo = React.createClass({
  mixins: [History],


  _goToRootPage: function() {
    this.history.pushState(null, '/', {});
  },

  render: function() {
    return (
      <span className='headerItem' id='header-title'>
        <div onClick={this._goToRootPage} className='header-title-link' >Photostash </div>
      </span>
    );
  }

});

module.exports = Logo;

// <img alt="Icon" src="/assets/Logo.png" width='125' />
