
var React = require('react');
var PhotoForm = require('../photo_form/photo_form');
var Modal = require('react-modal');
var PhotoFormStyle = require('../../modal_styles/photo_form_style');






var PhotoUploader = React.createClass({
  getInitialState: function () {
    return( {modalShown: false});
  },



_toggleModal: function() {
  this.setState({modalShown: !this.state.modalShown });

},

  render: function() {
    return (
      <span className='headerItem'>
        <img alt="Upload" src="/assets/Photo_uploader_small.png" width='40' onClick={this._toggleModal} className='photo-upload'/>
        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this._toggleModal}
          style={PhotoFormStyle}
          >
            <PhotoForm toggle={this._toggleModal}/>
        </Modal>
      </span>
    );
  }
});

module.exports = PhotoUploader;

// {(this.state.modalShown) ? <PhotoForm toggle={this._toggleModal}/> : null}
