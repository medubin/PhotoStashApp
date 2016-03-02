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
  }




};


module.exports = CommentActions;
