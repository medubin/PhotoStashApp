var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');
var UserPhotoItem = require('./user_photo_item');

var FollowUserButton = require('../links/follow_user_button');
var UserFollowedCount = require('./user_followed_count');
var UserFollowersCount = require('./user_followers_count');

var UserPage = React.createClass({
  getInitialState: function() {
    return({
      selectedUser: UserStore.selectedUser() || {username: '', followed: []}
    });
  },
  componentWillReceiveProps: function(newProps) {
    if (newProps.routeParams && newProps.routeParams.username && newProps.routeParams.username !== this.state.selectedUser.username) {
      UserActions.retrieveSelectedUser({username: newProps.routeParams.username});
    }
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

 // updateSelectedUser: function() {
 //   if (this.state.selectedUser.username !== this.props.routeParams.username){
 //    //  UserActions.retrieveSelectedUser({username: this.props.routeParams.username});
 //   }
 //  },

  render: function() {

    // this.updateSelectedUser();
    return (
      <div className='user-page-landing'>
          <div className='user-page-top'>
            <h3 className='username-user-page'>{this.state.selectedUser.username}</h3>

            <FollowUserButton
            selectedUser={this.state.selectedUser}
            currentUser={this.props.currentUser}
           />
         <br></br>

          <UserFollowersCount
            selectedUser={this.state.selectedUser}
            currentUser={this.props.currentUser}
          />

          <UserFollowedCount
            selectedUser={this.state.selectedUser}
            currentUser={this.props.currentUser}
          />
        </div>
        <ul className='user-photos-index'>
          {(this.state.selectedUser.photos) ? this.createPhotos() : null}
        </ul>
      </div>

    );
  }

});

module.exports = UserPage;
