var Dispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');
var CommentConstants = require('../constants/comment_constants.js');

var CommentActions = {
  postComment: function(comment) {
    ApiUtil.addComment(comment, this.postedCommentSuccessful);
  },

  postedCommentSuccessful: function(comment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.POSTED_COMMENT,
      comment: comment
    });
  },

  deleteComment: function(comment){
    ApiUtil.removeComment(comment, this.deletedCommentSuccessful);
  },

  deletedCommentSuccessful: function(uncomment) {
    Dispatcher.dispatch({
      actionType: CommentConstants.DELETED_COMMENT,
      uncomment: uncomment
    });
  }




};


module.exports = CommentActions;
