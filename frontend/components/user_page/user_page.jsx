var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');
var UserPhotoItem = require('./user_photo_item');
var UserFollowed = require('./user_followed');


var UserPage = React.createClass({
  getInitialState: function() {
    return({
      selectedUser: {}
    });
  },

  componentWillReceiveProps: function(newProps) {
    UserActions.retrieveSelectedUser({username: newProps.params.username});
  },

  componentDidMount: function() {
    this.selectedUserToken = UserStore.addListener(this._onChange);
    UserActions.retrieveSelectedUser(
                                  {username: this.props.routeParams.username});
  },

  componentWillUnmount: function() {
    this.selectedUserToken.remove();
  },

  _onChange: function() {
   this.setState({selectedUser: UserStore.selectedUser()});
 },

 createPhotos: function() {
   return this.state.selectedUser.photos.map(function(photo, idx) {
     return (
       <UserPhotoItem key={idx} photo={photo} />
     );
   });
 },

  render: function() {
    return (

      <div>
        hello {this.state.selectedUser.username}
        <UserFollowed selectedUser={this.state.selectedUser}/>
        {(this.state.selectedUser.photos) ? this.createPhotos() : null}
      </div>

    );
  }

});

module.exports = UserPage;
