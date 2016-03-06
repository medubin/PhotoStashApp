var React = require('react');
var PropTypes = React.PropTypes;

var PhotoStore = require('../../stores/photo_store');
var PhotoActions = require('../../actions/photo_actions');

var PhotoCaption = require('../photos/photo_caption');
var PhotoLikes = require('../photos/photo_likes');
var PhotoComments = require('../photos/photo_comments');
var UserPageLink = require('../links/user_page_link');
var PhotoLikeButton = require('../photos/photo_like_button');
var PhotoCommentInput = require('../photos/photo_comment_input');
var DeleteCommentStyle = require('../../modal_styles/delete_comment_style');
var UserProfilePicture = require('../links/user_profile_picture');


var Modal = require('react-modal');



var ShowPhotoModalContent = React.createClass({
  getInitialState: function() {
    return({shownPhoto: {image: null, user: {username: null},
            comments: [],
            likes: []},
            modalShown: false,
          });

  },

  componentDidMount: function() {
    this.showPhotoToken = PhotoStore.addListener(this._onChangePhoto);
    PhotoActions.retrieveSinglePhoto(this.props.photo);
  },

  componentWillUnmount: function() {
    this.showPhotoToken.remove();
  },

  _onChangePhoto: function() {
    this.setState({shownPhoto: PhotoStore.singlePhotoShow()});
 },

 deletePhoto: function() {
   PhotoActions.deletePhoto(this.state.shownPhoto);
   this.props.toggle();
 },

 createDeleteButton: function() {
   if (this.state.shownPhoto.user.username === this.props.currentUser.username) {
     return (<span className='user-page-photo-show-delete' onClick={this._toggleModal}>⨉</span>);
   }
 },

 _toggleModal: function() {
   this.setState({modalShown: !this.state.modalShown });
 },

  createDeletePhotoModal: function() {

   return (
     <div className='delete-comment-content'>
       <button className='confirm-delete-comment' onClick={this.deletePhoto}>Delete Photo</button>
       <button className='cancel-delete-comment' onClick={this._toggleModal}>Cancel</button>
     </div> );
   },


  render: function() {
    return (
      <div className='user-page-photo-show'>
        <div className='user-page-photo-show-left'>
          {this.createDeleteButton()}
          <img src={this.state.shownPhoto.image} width='600' height='600' />
        </div>


        <div className='user-page-photo-show-right'>
          <div className='user-page-photo-show-username'>
            <UserProfilePicture class='photo-feed-profile-picture'
                                size='50px'
                                user={this.state.shownPhoto.user}/>

            <UserPageLink username={this.state.shownPhoto.user.username} callback={this.props.toggle} className='photo-top-user-link'/>
          </div>

          <div className='user-page-photo-show-reactions'>
            <PhotoLikes likes={this.state.shownPhoto.likes} callback={this.props.toggle} currentUser={this.state.currentUser}/>
            <PhotoCaption caption={this.state.shownPhoto.caption} username={this.state.shownPhoto.user.username}/>
            <PhotoComments comments={this.state.shownPhoto.comments} callback={this.props.toggle}/>
          </div>

          <div className='user-page-photo-show-input'>
            <PhotoLikeButton photo={this.state.shownPhoto}/>
            <PhotoCommentInput photo={this.state.shownPhoto}/>
          </div>

        </div>

        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this._toggleModal}
          style={DeleteCommentStyle} >
          {this.createDeletePhotoModal()}
        </Modal>


      </div>
    );
  }

});

module.exports = ShowPhotoModalContent;
//
//
