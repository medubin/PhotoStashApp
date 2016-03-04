var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');
var UserStore = require('../../stores/user_store');
var Modal = require('react-modal');
var DeleteCommentStyle = require('../../modal_styles/delete_comment_style');
// var ModalBackdropStyle = require('../../modal_styles/modal_backdrop_style');
var DeleteCommentModalContent = require('./delete_comment_modal_content');


var PhotoComments = React.createClass({
  getInitialState: function() {
    return(
      {
        modalShown: false,
        commentToDelete: null
      });
  },

  _toggleModal: function(commentToDelete) {
    this.setState({modalShown: !this.state.modalShown });
    this.setState({commentToDelete: commentToDelete });
  },

  createDeleteButton: function(comment) {
    if (comment.username === UserStore.currentUser().username){
      return (<span className='delete-comment-x' onClick={this._toggleModal.bind(this, comment)}>⨉</span>);
    }
  },

  _checkForCallback: function(comment,idx) {
    if (this.props.callback) {
      return (<UserPageLink username={comment.username} callback={this.props.callback}  key={idx+ 0.1}/>);
    } else {
      return (<UserPageLink username={comment.username}  key={idx+ 0.1}/>);
    }
  },


  createComments: function() {
    return (this.props.comments.map(function(comment, idx) {
      return(
        <div key={idx} className='photo-comment'>
          {this.createDeleteButton(comment)}
          {this._checkForCallback(comment, idx)}
          {' ' + comment.body}
        </div>
      );
    }.bind(this)));
  },

  render: function() {
    return (
      <div className='all-photo-comments'>
        {this.createComments()}
        <Modal
          isOpen={this.state.modalShown}
          onRequestClose={this._toggleModal}
          style={DeleteCommentStyle} >
          <DeleteCommentModalContent
            toggle={this._toggleModal}
            comment={this.state.commentToDelete}/>
        </Modal>
      </div>
    );
  }

});

module.exports = PhotoComments;
