
var React = require('react');
var PhotoForm = require('../photo_form/photo_form');
var Modal = require('react-modal');
var PhotoFormStyle = require('../../modal_styles/photo_form_style');






var PhotoUploader = React.createClass({
  getInitialState: function () {
    return( {modalShown: false});
  },



toggleModal: function() {
  this.setState({modalShown: !this.state.modalShown });

},

  render: function() {
    return (
      <li className='headerItem'>
        <img alt="Upload" src="/assets/Photo_uploader.png" width='25' onClick={this.toggleModal} />
        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this.toggleModal}
          style={PhotoFormStyle}
          >
            <PhotoForm toggle={this.toggleModal}/>
        </Modal>
      </li>
    );
  }
});

module.exports = PhotoUploader;

// {(this.state.modalShown) ? <PhotoForm toggle={this.toggleModal}/> : null}
