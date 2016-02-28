var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);
var _currentUser = {};
var _selectedUser = {username:'', followed: []};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'CURRENT_USER':
      this.resetCurrentUser(payload.currentUser);
      this.__emitChange();
      break;
    case 'SELECTED_USER':
      this.resetSelectedUser(payload.selectedUser);
      break;
    case 'LOGOUT_CURRENT_USER':
      if (payload.logout === 'successful') this.resetCurrentUser({});
      break;
    case 'FOLLOWED_USER':
      this.addFollow(payload.follow);
      this.__emitChange();
      break;
    case 'UNFOLLOWED_USER':
      this.removeFollow(payload.unfollow);
      this.__emitChange();
  }
};

UserStore.addFollow = function(followed) {
  _currentUser.followed.push(followed);
};

UserStore.removeFollow = function(unfollowed) {
  _currentUser.followed.splice(unfollowed, 1);
};

UserStore.resetCurrentUser = function(user) {
  _currentUser = user;
};

UserStore.resetSelectedUser = function(user) {
  if(_selectedUser.username !== user.username){
    _selectedUser = user;
    this.__emitChange();
  }

};

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.selectedUser = function() {
  return _selectedUser;
};

module.exports = UserStore;
