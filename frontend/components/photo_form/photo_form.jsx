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
      cloud_name: window.CLOUD_NAME,
      upload_preset: window.UPLOAD_PRESET},
      function(error, results){
      if(!error){
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
        Upload A Photo
        <br></br>
        <button onClick={this.selectPhoto}>Choose Photo</button>
        <br></br>
        <textarea onChange={this.onChangeOfCaption} placeholder='Caption'>{this.state.caption}</textarea>
        <br></br>
        <input onClick={this.submitPhoto} type='submit'></input>
      </detail>
    );
  }

});

module.exports = PhotoForm;
