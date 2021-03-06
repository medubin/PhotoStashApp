var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');
var Modal = require('react-modal');
var LikesModalContent = require('./likes_modal_content');
var PhotoLikesListStyle = require('../../modal_styles/photo_form_style');


var PhotoLikes = React.createClass({
  getInitialState: function () {
    return( {modalShown: false});
  },

  toggleModal: function() {
    this.setState({modalShown: !this.state.modalShown });

  },


  _createLikeGrammar: function(idx) {
    if (idx === this.props.likes.length - 1 && this.props.likes.length !== 1) {
      return (' like this');
    } else if (idx === this.props.likes.length - 1) {
      return (' likes this');
    } else if (idx === this.props.likes.length - 2) {
      return (' and ');
    } else if (this.props.likes.length !== 1) {
      return (', ');
    }
  },

  createModal: function(){
    return(
      <span>
        <span className='photo-likes-overflow' onClick={this.toggleModal}>{this.props.likes.length} likes</span>

        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this.toggleModal}
          style={PhotoLikesListStyle}
          >
          <LikesModalContent likes={this.props.likes} currentUser={this.props.currentUser}/>
        </Modal>

      </span> );
  },

  _checkForCallback: function(user,idx) {
    if (this.props.callback) {
      return (<UserPageLink username={user.username} callback={this.props.callback}  key={idx}/>);
    } else {
      return (<UserPageLink username={user.username}  key={idx}/>);
    }
  },


  createLikes: function() {
    if (this.props.likes.length > 10) return (this.createModal());

    return this.props.likes.map(function(user, idx) {
      return (
        <span key={idx}>
          {this._checkForCallback(user, idx)}
          {this._createLikeGrammar(idx)}
        </span>);
    }.bind(this));
  },

  render: function() {
    return (
      <div className='photo-feed-users-who-liked'>
        {this.props.likes ? this.createLikes() : <div></div>}
      </div>
    );
  }

});

module.exports = PhotoLikes;
