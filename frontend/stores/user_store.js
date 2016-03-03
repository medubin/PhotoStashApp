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

var _findFollowIndexByUsernameInCurrentUser = function(username) {
  for (var i = 0; i < _currentUser.followed.length; i++) {
    if (_currentUser.followed[i].username === username) return i;
  }
};


UserStore.addFollow = function(followed) {
  _currentUser.followed.push(followed);
  if (_currentUser.username === _selectedUser.username) _selectedUser.followed += 1;
};

UserStore.removeFollow = function(unfollowed) {
  var indexOfUnfollow = _findFollowIndexByUsernameInCurrentUser(unfollowed.username);
  if (indexOfUnfollow !== undefined) {
    _currentUser.followed.splice(indexOfUnfollow, 1);
  }
  if (_currentUser.username === _selectedUser.username) _selectedUser.followed -= 1;
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
