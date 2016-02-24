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
  },



  render: function() {
    return (
      <detail>
        <textarea onChange={this.onChangeOfCaption} placeholder='Caption'>{this.state.caption}</textarea>
        <button onClick={this.selectPhoto}>Choose Photo</button>
        <input onClick={this.submitPhoto} type='submit'></input>

      </detail>
    );
  }

});

module.exports = PhotoForm;
