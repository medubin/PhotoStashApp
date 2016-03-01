/* global cloudinary */
var React = require('react');
var PhotoActions = require('../../actions/photo_actions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var PhotoForm = React.createClass({
  mixins: [LinkedStateMixin],


  getInitialState: function () {
    return({
      image: null,
      caption: null
    });
  },

  selectPhoto: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({
      // make options a hash outside of call
      theme: 'minimal',
      // max_image_height: 1080,
      // max_image_width: 1080,
      cropping: 'server',
      cropping_aspect_ratio: 1,
      cloud_name: window.CLOUD_NAME,
      upload_preset: window.UPLOAD_PRESET},
      function(error, results){
      if(!error){
        this.setState({image: results[0].url});
      }
    }.bind(this));
  },

  // onChangeOfCaption: function(e) {
  //   this.setState({caption:e.target.value});
  // },

  previewPhoto: function() {
    if (this.state.image) {
      return ( <img src={this.state.image} width='100' height='100'></img>);
    } else {
      return null;
    }
  },

  submitPhoto: function() {
    PhotoActions.postPhoto({image: this.state.image, caption: this.state.caption});
    this.props.toggle();
  },



  render: function() {
    return (
      <detail id='modalPhotoForm' className='modal'>
        <h3>Upload A Photo</h3>
        <div id='photo-input-fields'>
          <textarea valueLink={this.linkState('caption')} placeholder='Write your caption here...'></textarea>
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

module.exports = PhotoForm;
