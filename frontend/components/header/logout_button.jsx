var React = require('react');
var PropTypes = React.PropTypes;
var UserActions = require('../../actions/user_actions');

var LogoutButton = React.createClass({
  logout: function() {
    UserActions.logoutCurrentUser();
  },


  render: function() {
    return (
      <div onClick={this.logout}>
        LOGOUT YO
      </div>
    );
  }

});

module.exports = LogoutButton;
