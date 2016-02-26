var Dispatcher = require('../dispatcher/dispatcher');
var FollowUsersConstants = require('../constants/follow_users_constants');
var ApiUtil = require('../util/api_util');


var FollowUsersActions = {
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
