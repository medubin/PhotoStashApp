var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var PhotoActions = require('../../actions/photo_actions');
var PhotoIndexItem = require('./photo_index_item');

var PhotosIndex = React.createClass({
  getInitialState: function() {
    return { photos : PhotoStore.all() };
  },

  createPhotoList: function() {
    var listOfPhotos = this.state.photos.map(function(el, idx) {
      return (
      <PhotoIndexItem key={idx} photo={el} className='feedItem'/>

      );
    });
    return listOfPhotos;
  },

  render: function() {
    return ( <ul> { this.createPhotoList() } </ul> );
  },

  componentDidMount: function () {
    this.photoToken = PhotoStore.addListener(this._onChange);
    PhotoActions.retrieveAllPhotos();
 },

 _onChange: function() {
  this.setState({photos: PhotoStore.all()});
},


});

module.exports = PhotosIndex;
