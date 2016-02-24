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
  }


};


module.exports = UserActions;
