var React = require('react');
var PropTypes = React.PropTypes;
var UserActions = require('../../actions/user_actions');

var LogoutButton = React.createClass({
  logout: function() {
    UserActions.logoutCurrentUser();
  },


  render: function() {
    return (
      <li className='headerItem' id='header-logout' onClick={this.logout}>
        Log out
      </li>
    );
  }

});

module.exports = LogoutButton;
