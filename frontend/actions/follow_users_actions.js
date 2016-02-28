var Dispatcher = require('../dispatcher/dispatcher');
var FollowUsersConstants = require('../constants/follow_users_constants');
var ApiUtil = require('../util/api_util');


var FollowUsersActions = {

  postFollow: function(user) {
    ApiUtil.addFollow(user, this.postedFollowSuccessful);
  },

  postedFollowSuccessful: function(follow) {
    Dispatcher.dispatch({
      actionType: FollowUsersConstants.FOLLOWED_USER,
      follow: follow
    });
  },

  deleteFollow: function(user) {
    ApiUtil.removeFollow(user, this.removedFollowSuccessful);
  },

  removedFollowSuccessful: function(unfollow) {
    Dispatcher.dispatch({
      actionType: FollowUsersConstants.UNFOLLOWED_USER,
      unfollow: unfollow

    });
  },














////////////DEPRACTED FOR NOW////////////////////////////

  recieveAllFollowed: function(followed) {
    Dispatcher.dispatch({
      actionType: FollowUsersConstants.FOLLOWED_RECIEVED,
      followed: followed
    });
  },

  retrieveAllFollowed: function(selectedUser) {
    ApiUtil.fetchAllFollowed(selectedUser, this.recieveAllFollowed);
  },

};

module.exports = FollowUsersActions;
