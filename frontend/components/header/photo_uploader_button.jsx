
var React = require('react');
var PhotoForm = require('../photo_form/photo_form');

var PhotoUploader = React.createClass({
  getInitialState: function () {
    return( {modalShown: false});
  },



toggleModal: function() {
  this.setState({modalShown: !this.state.modalShown });

},

  render: function() {
    return (
      <div className='container'>
        <li onClick={this.toggleModal} className='headerItem'>
          <img alt="Upload" src="/assets/Photo_uploader.png" width='50' />
        </li>
        {(this.state.modalShown) ? <PhotoForm toggle={this.toggleModal}></PhotoForm> : null}
      </div>
    );
  }
});

module.exports = PhotoUploader;
