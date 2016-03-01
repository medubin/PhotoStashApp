var Dispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');
var LikeConstants = require('../constants/like_constants.js');
//WEIRD THAT I NEED JS ON THIS ONE

var LikeActions = {
  postLike: function(photo) {
    ApiUtil.addLike(photo, this.postedLikeSuccessful);
  },

  postedLikeSuccessful: function(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.LIKED_PHOTO,
      like: like
    });
  },

  deleteLike: function(photo) {
    ApiUtil.removeLike(photo, this.deletedLikeSuccessful);
  },

  deletedLikeSuccessful: function(unlike) {
    Dispatcher.dispatch({
      actionType: LikeConstants.UNLIKED_PHOTO,
      unlike: unlike
    });
  },


};

module.exports = LikeActions;
