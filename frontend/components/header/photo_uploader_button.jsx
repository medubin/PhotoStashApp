
var React = require('react');
var PhotoForm = require('../photo_form/photo_form');

var PhotoUploader = React.createClass({
  getInitialState: function () {
    return( {modalShown: false});
  },



displayModal: function() {
  this.setState({modalShown: !this.state.modalShown });

},

  render: function() {
    return (
      <div>
        <detail onClick={this.displayModal}>
          test
        </detail>
        {(this.state.modalShown) ? <PhotoForm></PhotoForm> : null}
      </div>
    );
  }
});

module.exports = PhotoUploader;
