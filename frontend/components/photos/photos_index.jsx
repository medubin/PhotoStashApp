var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var PhotoActions = require('../../actions/photo_actions');
var PhotoIndexItem = require('./photo_index_item');
var SearchActions = require('../../actions/search_actions');
var PhotosIndex = React.createClass({
  getInitialState: function() {
    return { photos : PhotoStore.all() };
  },

  createPhotoList: function() {
    return this.state.photos.map(function(el, idx) {
      return (
      <PhotoIndexItem key={idx} photo={el} className='feedItem' currentUser={this.props.currentUser}/>
      );
    }.bind(this));
  },

  render: function() {
    return ( <ul className='feed'> { this.createPhotoList() } </ul> );
  },

  componentDidMount: function () {
    this.photoToken = PhotoStore.addListener(this._onChange);
    PhotoActions.retrieveAllPhotos();
 },

  componentWillUnmount: function() {
    this.photoToken.remove();
 },

  _onChange: function() {
    this.setState({photos: PhotoStore.all()});
  },

  // componentWillMount: function() {
  //   SearchActions.clearSearch();
  // },


});

module.exports = PhotosIndex;
