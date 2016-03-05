var React = require('react');
var PropTypes = React.PropTypes;
var Modal = require('react-modal');
var UserUpdateProfilePictureModalContent = require('./user_update_profile_picture_modal_content');
var ProfilePictureStyle = require('../../modal_styles/profile_picture_style');






var UserProfilePicture = React.createClass({
  getInitialState: function() {
    return({modalShown: false});
  },



  createProfilePicture: function() {
    if(this.props.selectedUser.picture) {
      return(  <img src={this.props.selectedUser.picture}
                    onClick={this._toggleModal}
                    className='user-page-profile-picture' />);
    } else {
      return(  <img src='assets/Default_profile_pic.png'
                    onClick={this._toggleModal}
                    className='user-page-profile-picture' />);
    }


  },

  _toggleModal: function(photoToShow) {
    if (this.props.currentUser.username === this.props.selectedUser.username) this.setState({modalShown: !this.state.modalShown });
  },

  render: function() {
    return (
      <span>
        {this.createProfilePicture()}

        <Modal
          className = 'photo-upload-modal profile-picture-modal'
          isOpen={this.state.modalShown}
          onRequestClose={this._toggleModal}
          style={ProfilePictureStyle}>
          <UserUpdateProfilePictureModalContent currentUser ={this.props.currentUser} toggle={this._toggleModal} />
        </Modal>
      </span>

    );
  }

});

module.exports = UserProfilePicture;
