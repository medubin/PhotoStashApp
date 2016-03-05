var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');
var UserPhotoItem = require('./user_photo_item');
var Modal = require('react-modal');
var PhotoShowPageStyle = require('../../modal_styles/photo_show_page_style');
var PhotoActions = require('../../actions/photo_actions');
var SearchActions = require('../../actions/search_actions');

var UserProfilePicture = require('./user_profile_picture');
var FollowUserButton = require('../links/follow_user_button');
var UserFollowedCount = require('./user_followed_count');
var UserFollowersCount = require('./user_followers_count');
var ShowPhotoModalContent = require('./show_photo_modal_content');

var UserPage = React.createClass({
  getInitialState: function() {
    return({
      selectedUser: UserStore.selectedUser() || {username: '', followed: []},
      modalShown: false,
      photoToShow: null,
      scrollCount: 1
    });
  },

  _toggleModal: function(photoToShow) {
    this.setState({photoToShow: photoToShow});
    this.setState({modalShown: !this.state.modalShown });
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.routeParams && newProps.routeParams.username && newProps.routeParams.username !== this.state.selectedUser.username) {
      UserActions.retrieveSelectedUser({username: newProps.routeParams.username}, 1);
    }
  },

  componentDidMount: function() {
    this.selectedUserToken = UserStore.addListener(this._onChangeSelectedUser);
    this.infiniteScrollToken = window.addEventListener("scroll", this.addNewPhotos);
    UserActions.retrieveSelectedUser({username: this.props.routeParams.username}, this.state.scrollCount);
  },

  addNewPhotos: function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && UserStore.selectedUser().photos.length < UserStore.selectedUser().photos_count ) {
      this.state.scrollCount += 1;
      UserActions.retrieveSelectedUser({username: this.props.routeParams.username}, this.state.scrollCount);
    }
  },

  componentWillUnmount: function() {
    this.selectedUserToken.remove();
  },

  _onChangeSelectedUser: function() {
   this.setState({selectedUser: UserStore.selectedUser()});
 },





 createPhotos: function() {
   return this.state.selectedUser.photos.map(function(photo, idx) {
     return ( <UserPhotoItem key={idx} photo={photo} toggle={this._toggleModal} that={this} /> );
   }.bind(this));
 },

  render: function() {
    return (
      <div className='user-page-landing'>
          <div className='user-page-top'>
            <UserProfilePicture selectedUser={this.state.selectedUser} currentUser={this.props.currentUser}/>
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

        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this._toggleModal}
          style={PhotoShowPageStyle} >

          <ShowPhotoModalContent
            photo={this.state.photoToShow}
            currentUser={this.props.currentUser}
            toggle={this._toggleModal}/>
        </Modal>


      </div>

    );
  }

});

module.exports = UserPage;
