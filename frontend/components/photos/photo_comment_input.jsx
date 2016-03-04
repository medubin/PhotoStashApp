var React = require('react');
var PropTypes = React.PropTypes;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CommentActions = require('../../actions/comment_actions');


var PhotoCommentInput = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return({commentText: ''});
  },



  _submitComment: function(e) {
    e.preventDefault();
    if (this.state.commentText){
      CommentActions.postComment({body: this.state.commentText, photo_id: this.props.photo.id});
      this.setState({commentText: ''});
      this.refs.input.blur();
    }
  },

  render: function() {
    return (
      <form onSubmit={this._submitComment} className='comment-form'>
        <input type='text'
               className='comment-box'
               ref='input'
               placeholder=' Add a comment'
               valueLink ={this.linkState('commentText')} />
      </form>
    );
  }

});

module.exports = PhotoCommentInput;
