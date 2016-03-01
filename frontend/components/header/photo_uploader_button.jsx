
var React = require('react');
var PhotoForm = require('../photo_form/photo_form');
var Modal = require('react-modal');


var customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '340px',
    width: '300px',
    // padding: 25px '20px',
    // padding-bottom: '35px'
  }
};



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
          style={customStyles}
          >
            <PhotoForm toggle={this.toggleModal}/>
        </Modal>
      </li>
    );
  }
});

module.exports = PhotoUploader;

// {(this.state.modalShown) ? <PhotoForm toggle={this.toggleModal}/> : null}
