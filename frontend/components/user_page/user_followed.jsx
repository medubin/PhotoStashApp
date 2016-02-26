var React = require('react');
var FollowUsersStore = require('../../stores/follow_users_store');
var FollowUsersActions = require('../../actions/follow_users_actions');

var UserFollowed = React.createClass({

  createFollowedList: function() {
    return this.props.followedUsers.map(function(user, idx) {
      return (
        <li key={idx}> {user.username} </li>
      );
    });
  },


  componentWillReceiveProps: function(newProps) {
  },

  render: function() {
    return (
      <ul>
        {this.createFollowedList()}
      </ul>
    );
  }
});

module.exports = UserFollowed;
