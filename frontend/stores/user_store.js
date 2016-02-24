var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);
var _currentUser = {};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'CURRENT_USER':
      this.resetUser(payload.currentUser);
      this.__emitChange();
      break;
  }
},

UserStore.resetUser = function(user) {
  _currentUser = {};
  _currentUser.username = user.username;
  _currentUser.id = user.id;
},

UserStore.currentUser = function() {
  return _currentUser;
};

module.exports = UserStore;
