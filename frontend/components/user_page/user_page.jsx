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
    UserActions.retrieveSelectedUser({username: this.props.routeParams.username});
  },

  componentWillUnmount: function() {
    this.selectedUserToken.remove();
  },

  _onChange: function() {
    //I had this.props.routeParams in here. I can't for the life of me figure out why. change on 2/25/16. if removing it didn't break anything i guess it's not needed
  //  this.setState({selectedUser: UserStore.selectedUser(this.props.routeParams)});
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
        <UserFollowed/>
        {(this.state.selectedUser.photos) ? this.createPhotos() : null}
      </div>

    );
  }

});

module.exports = UserPage;
