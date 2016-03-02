var React = require('react');
var PropTypes = React.PropTypes;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CommentActions = require('../../actions/comment_actions');
// var ReactDOM = require('react-dom');

var PhotoCommentInput = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return({commentText: ''});
  },



  _submitComment: function() {
    CommentActions.postComment({body: this.state.commentText, photo_id: this.props.photo.id});
    this.setState({commentText: ''});
    (document.getElementById('comment-box')).blur();

  },

  render: function() {
    return (
      <form onSubmit={this._submitComment} className='comment-form'>
        <input type='text'
               id='comment-box'
               placeholder=' Add a comment'
               valueLink ={this.linkState('commentText')} />
      </form>
    );
  }

});

module.exports = PhotoCommentInput;
