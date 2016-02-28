var Dispatcher = require('../dispatcher/dispatcher');
var SelectedUserFollowsConstants = require('../constants/selected_user_follows_constants');
var ApiUtil = require('../util/api_util');

var SelectedUserFollowsActions = {
  recieveAllFollowers: function(followers) {
    Dispatcher.dispatch({
      actionType: SelectedUserFollowsConstants.FOLLOWERS_RECIEVED,
      followers: followers.followers
    });
  },

  retrieveAllFollowers: function(selectedUser) {
    ApiUtil.fetchAllFollowers(selectedUser, this.recieveAllFollowers);
  },



  recieveAllFollowed: function(followed) {
    Dispatcher.dispatch({
      actionType: SelectedUserFollowsConstants.FOLLOWED_RECIEVED,
      followed: followed.followed
    });
  },

  retrieveAllFollowed: function(selectedUser) {
    ApiUtil.fetchAllFollowed(selectedUser, this.recieveAllFollowed);
  }

};


module.exports = SelectedUserFollowsActions;
