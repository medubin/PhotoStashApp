/* global cloudinary */
var React = require('react');
var PhotoActions = require('../../actions/photo_actions');

var PhotoUploader = React.createClass({

upload: function (e) {
  e.preventDefault();
  cloudinary.openUploadWidget({
    cloud_name: window.CLOUD_NAME,
    upload_preset: window.UPLOAD_PRESET},
    function(error, results){
      
    if(!error){
      var photo = {image: results[0].url};
      PhotoActions.postPhoto(photo);
    }
  });
},

  render: function() {
    return (
      <detail onClick={this.upload}>
        test
      </detail>
    );
  }

});

module.exports = PhotoUploader;
