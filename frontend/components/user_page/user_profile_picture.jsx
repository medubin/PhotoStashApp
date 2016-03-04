var React = require('react');
var PropTypes = React.PropTypes;
var Modal = require('react-modal');
var UserUpdateProfilePictureModalContent = require('./user_update_profile_picture_modal_content');

var UserProfilePicture = React.createClass({
  getInitialState: function() {
    return({modalShown: false});
  },

  _toggleModal: function(photoToShow) {
    this.setState({modalShown: !this.state.modalShown });
  },

  render: function() {
    return (
      <span>
        <img onClick={this._toggleModal} className='user-page-profile-picture' src={this.props.currentUser.picture}/>

        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this._toggleModal}>
          <UserUpdateProfilePictureModalContent currentUser ={this.props.currentUser} toggle={this._toggleModal} />
        </Modal>
      </span>

    );
  }

});

module.exports = UserProfilePicture;
