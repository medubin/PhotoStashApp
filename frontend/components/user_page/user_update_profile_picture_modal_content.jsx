/* global cloudinary */
var React = require('react');
var UserActions = require('../../actions/user_actions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var UserUpdateProfilePictureModalContent = React.createClass({
  mixins: [LinkedStateMixin],


  getInitialState: function () {
    return({
      picture: null,
    });
  },

  selectPhoto: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({
      theme: 'minimal',
      cropping: 'server',
      cropping_aspect_ratio: 1,
      cloud_name: window.CLOUD_NAME,
      upload_preset: window.UPLOAD_PRESET},
      function(error, results){
      if(!error){
        this.setState({picture: results[0].url});
      }
    }.bind(this));
  },

  // onChangeOfCaption: function(e) {
  //   this.setState({caption:e.target.value});
  // },

  previewPhoto: function() {
    if (this.state.picture) {
      return ( <img src={this.state.picture} width='100' height='100'></img>);
    } else {
      return null;
    }
  },

  submitPhoto: function() {
    UserActions.updateCurrentUser({user:{username: this.props.currentUser.username, id: this.props.currentUser.id, picture: this.state.picture}});
    this.props.toggle();
  },



  render: function() {
    return (
      <detail>
        <h3>Upload A Photo</h3>
        <div id='photo-input-fields'>
            <button onClick={this.selectPhoto} id='choose-photo'>Choose Photo</button>
            <div id='photo-preview'>
              {this.previewPhoto()}
            </div>
            <input onClick={this.submitPhoto} type='submit' value='Submit' id='submit-photo'></input>
            <input onClick={this.props.toggle} type='submit'value='Go Back' id='go-back'></input>
          </div>
      </detail>
    );
  }

});

module.exports = UserUpdateProfilePictureModalContent ;
