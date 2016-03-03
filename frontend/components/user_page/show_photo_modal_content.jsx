var React = require('react');
var PropTypes = React.PropTypes;

var PhotoStore = require('../../stores/photo_store');
var PhotoActions = require('../../actions/photo_actions');


var ShowPhotoModalContent = React.createClass({
  getInitialState: function() {
    return({shownPhoto: {image: null} });

  },

  componentDidMount: function() {
    this.showPhotoToken = PhotoStore.addListener(this._onChangePhoto);
    PhotoActions.retrieveSinglePhoto(this.props.photo);
  },

  componentWillUnmount: function() {
    this.showPhotoToken.remove();
  },

  _onChangePhoto: function() {
   this.setState({shownPhoto: PhotoStore.singlePhotoShow()});
 },


  render: function() {

    return (
      <div className='user-page-photo-show'>
        <div className='user-page-photo-show-left'>
          <img src={this.state.shownPhoto.image} width='600' height='600' />
        </div>

        <div className='user-page-photo-show-left'>
        </div>

        <div className='user-page-photo-show-right'>
        </div>

      </div>
    );
  }

});

module.exports = ShowPhotoModalContent;
