/* global cloudinary */
var React = require('react');
var PhotoActions = require('../../actions/photo_actions');
var PhotoForm = React.createClass({

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
      cropping: 'server',
      cropping_aspect_ratio: 1,
      max_image_height: 1080,
      max_image_width: 1080,
      cloud_name: window.CLOUD_NAME,
      upload_preset: window.UPLOAD_PRESET},
      function(error, results){
      if(!error){
        console.log(results);
        this.state.image = results[0].url;
      }
    }.bind(this));
  },

  onChangeOfCaption: function(e) {
    this.setState({caption:e.target.value});

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
          <textarea onChange={this.onChangeOfCaption} placeholder='Write your caption here...'>{this.state.caption}</textarea>
            <button onClick={this.selectPhoto} id='choose-photo'>Choose Photo</button>
            <input onClick={this.submitPhoto} type='submit' value='Submit' id='submit-photo'></input>
            <input onClick={this.props.toggle} type='submit'value='Go Back' id='go-back'></input>
          </div>
      </detail>
    );
  }

});

module.exports = PhotoForm;
