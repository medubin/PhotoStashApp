var React = require('react');
var History = require('react-router').History;

var Logo = React.createClass({
  mixins: [History],


  _goToRootPage: function() {
    this.history.pushState(null, '/', {});
  },

  render: function() {
    return (
      <li className='headerItem' onClick={this._goToRootPage}>
        <img alt="Icon" src="/assets/Logo.png" width='125' />
      </li>
    );
  }

});

module.exports = Logo;