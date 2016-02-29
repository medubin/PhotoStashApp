var React = require('react');
var History = require('react-router').History;

var Logo = React.createClass({
  mixins: [History],


  _goToRootPage: function() {
    this.history.pushState(null, '/', {});
  },

  render: function() {
    return (
      <li className='headerItem' id='header-title'>
        <div onClick={this._goToRootPage} className='link-wrapper' >Photostash </div>
      </li>
    );
  }

});

module.exports = Logo;

// <img alt="Icon" src="/assets/Logo.png" width='125' />
