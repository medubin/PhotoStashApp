var React = require('react');
var FollowUsersStore = require('../../stores/follow_users_store');
var FollowUsersActions = require('../../actions/follow_users_actions');

var UserFollowed = React.createClass({
  getInitialState: function() {
    return( {followedUsers: [] });
  },

  componentDidMount: function() {
    this.followedUsersToken = FollowUsersStore.addListener(this._onChange);
    FollowUsersActions.retrieveAllFollowed(this.props.selectedUser);
  },

  componentWillReceiveProps: function(newProps) {
      FollowUsersActions.retrieveAllFollowed(newProps.selectedUser);
  },

  componentWillUnmount: function() {
    this.followedUsersToken.remove();
  },

  _onChange: function() {
    this.setState({followedUsers: FollowUsersStore.followed()});
    console.log(this.state.followedUsers);
  },

  createFollowedList: function() {
    return this.state.followedUsers.map(function(user, idx) {
      return (
        <li key={idx}> {user.username} </li>
      );
    });
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
