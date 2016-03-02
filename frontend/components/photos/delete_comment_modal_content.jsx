var React = require('react');
var PropTypes = React.PropTypes;
var CommentActions = require('../../actions/comment_actions');

var DeleteCommentContent = React.createClass({

  render: function() {
    return (
      <div className='delete-comment-content'>
        <button className='confirm-delete-comment' onClick={this._deleteComment}>Delete Comment</button>
        <button className='cancel-delete-comment' onClick={this.props.toggle}>Cancel</button>
      </div>
    );
  },

  _deleteComment: function() {
    CommentActions.deleteComment(this.props.comment);
    this.props.toggle();
  },

});

module.exports = DeleteCommentContent;
