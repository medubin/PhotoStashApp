var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);
var _currentUser = {};
var _selectedUser = {};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'CURRENT_USER':
      this.resetCurrentUser(payload.currentUser);
      this.__emitChange();
      break;
    case 'SELECTED_USER':
      this.resetSelectedUser(payload.selectedUser);
      this.__emitChange();
      break;
  }
};

UserStore.resetCurrentUser = function(user) {
  _currentUser = user;
};

UserStore.resetSelectedUser = function(user) {
  _selectedUser = user;
};

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.selectedUser = function() {
  return _selectedUser;
};

module.exports = UserStore;
