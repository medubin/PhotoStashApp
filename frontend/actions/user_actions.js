var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var ApiUtil = require('../util/api_util');


var UserActions = {
  recieveCurrentUser: function(currentUser) {
    Dispatcher.dispatch({
      actionType : UserConstants.CURRENT_USER,
      currentUser: currentUser
    });
  },
  retrieveCurrentUser: function() {
    ApiUtil.fetchCurrentUser(this.recieveCurrentUser);
  },



  recieveSelectedUser: function(selectedUser) {
    Dispatcher.dispatch({
      actionType : UserConstants.SELECTED_USER,
      selectedUser: selectedUser
    });
  },

  retrieveSelectedUser: function(selectedUser, count) {
    ApiUtil.fetchSelectedUser(selectedUser, count, this.recieveSelectedUser);
  },


  logoutCurrentUser: function() {
    ApiUtil.logoutCurrentUser();
  },

  logoutSuccessful: function() {
    Dispatcher.dispatch({
      actionType : UserConstants.LOGOUT_CURRENT_USER,
      logout: 'successful'
    });

  },

  updateCurrentUser: function(user) {
    ApiUtil.updateCurrentUser(user, this.UpdateUserSuccessful);
  },

  UpdateUserSuccessful: function(currentUser) {
    Dispatcher.dispatch({
      actionType: UserConstants.UPDATE_CURRENT_USER,
      currentUser: currentUser
    });
  },





};


module.exports = UserActions;
