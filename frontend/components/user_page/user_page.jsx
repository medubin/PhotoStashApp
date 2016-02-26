var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');
var UserPhotoItem = require('./user_photo_item');
var UserFollowed = require('./user_followed');
var FollowUserButton = require('./follow_user_button');


var UserPage = React.createClass({
  getInitialState: function() {
    return({
      selectedUser: {},
    });
  },

  componentDidMount: function() {
    this.selectedUserToken = UserStore.addListener(this._onChangeSelectedUser);
    UserActions.retrieveSelectedUser({username: this.props.routeParams.username});
  },

  componentWillUnmount: function() {
    this.selectedUserToken.remove();
  },

  _onChangeSelectedUser: function() {
   this.setState({selectedUser: UserStore.selectedUser()});
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
          followedUsers = {this.state.selectedUser}
          currentUser={this.props.params.username}
          />

        <UserFollowed
          selectedUser={this.state.selectedUser}
          followedUsers = {this.state.selectedUser}
          />

        {(this.state.selectedUser.photos) ? this.createPhotos() : null}
      </div>

    );
  }

});

module.exports = UserPage;
