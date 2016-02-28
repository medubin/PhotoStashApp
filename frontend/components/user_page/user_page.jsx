var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');
var UserPhotoItem = require('./user_photo_item');
var UserFollowedList = require('./user_followed_list');
var FollowUserButton = require('./follow_user_button');
var UserFollowedCount = require('./user_followed_count');


var UserPage = React.createClass({
  getInitialState: function() {
    return({
      selectedUser: UserStore.selectedUser() || {username: '', followed: []}
    });
  },
  componentWillReceiveProps: function(newProps) {
    UserActions.retrieveSelectedUser({username: this.props.routeParams.username});
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

 updateSelectedUser: function() {
   if (this.state.selectedUser.username !== this.props.routeParams.username){
     UserActions.retrieveSelectedUser({username: this.props.routeParams.username});
   }
  },

  render: function() {

    this.updateSelectedUser();
    return (
      <div>
        {this.state.selectedUser.username}s page
        <FollowUserButton
         selectedUser={this.state.selectedUser}
         currentUser={this.props.currentUser}
       />
        <UserFollowedCount
          followCount={this.state.selectedUser.followed.length}
       />

       <UserFollowedList
          selectedUser={this.state.selectedUser}

          />

        {(this.state.selectedUser.photos) ? this.createPhotos() : null}
      </div>

    );
  }

});

module.exports = UserPage;
