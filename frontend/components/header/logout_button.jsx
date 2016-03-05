var React = require('react');
var PropTypes = React.PropTypes;
var UserActions = require('../../actions/user_actions');

var LogoutButton = React.createClass({
  logout: function() {
    UserActions.logoutCurrentUser();
  },


  render: function() {
    return (
      <span className='headerItem' id='header-logout' >
        <div onClick={this.logout} className='link-wrapper'>Log out </div>
      </span>
    );
  }

});

module.exports = LogoutButton;
