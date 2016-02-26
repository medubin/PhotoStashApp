var React = require('react');
var UserActions = require('../../actions/user_actions');
var FollowUsersActions = require('../../actions/follow_users_actions');
var UserStore = require('../../stores/user_store');
var UserPhotoItem = require('./user_photo_item');
var UserFollowed = require('./user_followed');
var FollowUserButton = require('./follow_user_button');
var FollowUsersStore = require('../../stores/follow_users_store');


var UserPage = React.createClass({
  getInitialState: function() {
    return({
      selectedUser: {},
      followedUsers: []
    });
  },

  componentWillReceiveProps: function(newProps) {
    UserActions.retrieveSelectedUser({username: newProps.params.username});
  },

  componentDidMount: function() {
    this.selectedUserToken = UserStore.addListener(this._onChangeSelectedUser);
    UserActions.retrieveSelectedUser({username: this.props.routeParams.username});
    this.followedUsersToken = FollowUsersStore.addListener(this._onChangeFollowUsers);
  },

  componentWillUnmount: function() {
    this.selectedUserToken.remove();
    this.followedUsersToken.remove();
  },

  _onChangeSelectedUser: function() {
   this.setState({selectedUser: UserStore.selectedUser()});
   FollowUsersActions.retrieveAllFollowed(this.state.selectedUser);
 },
  _onChangeFollowUsers: function() {
    this.setState({followedUsers: FollowUsersStore.followed()});
 },

 createPhotos: function() {
   return this.state.selectedUser.photos.map(function(photo, idx) {
     return ( <UserPhotoItem key={idx} photo={photo} /> );
   });
 },

  render: function() {

    return (
      <div>
        hello {this.state.selectedUser.username}

        <FollowUserButton
          selectedUser={this.state.selectedUser}
          followedUsers = {this.state.followedUsers}
          currentUser={this.props.params.username}
          />

        <UserFollowed
          selectedUser={this.state.selectedUser}
          followedUsers = {this.state.followedUsers}
          />

        {(this.state.selectedUser.photos) ? this.createPhotos() : null}
      </div>

    );
  }

});

module.exports = UserPage;
