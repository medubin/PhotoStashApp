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
        <span onClick={this.toggleModal}>{this.props.likes.length} likes</span>

        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this.toggleModal}
          style={PhotoLikesListStyle}
          >
          <LikesModalContent likes={this.props.likes}/>
        </Modal>

      </span> );
  },

  createLikes: function() {
    if (this.props.likes.length > 6) return (this.createModal());

    return this.props.likes.map(function(user, idx) {
      return (
        <span key={idx}>
        <UserPageLink username={user.username} key={idx} />
          {this._createLikeGrammar(idx)}
        </span>);
    }.bind(this));
  },

  render: function() {
    return (
      <div className='photo-feed-users-who-liked'>
        {this.props.likes ? this.createLikes() : null}
      </div>
    );
  }

});

module.exports = PhotoLikes;
