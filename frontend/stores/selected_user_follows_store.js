var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = require('./user_store');

var SelectedUserFollowsStore = new Store(AppDispatcher);
var _followers = [];
var _followed = [];


SelectedUserFollowsStore.resetFollowers = function(followers) {
  _followers = followers;
};

SelectedUserFollowsStore.allFollowers = function() {
    return _followers.slice(0);
};

SelectedUserFollowsStore.resetFollowed = function(followed) {
  _followed = followed;
};

SelectedUserFollowsStore.allFollowed = function() {

    return _followed.slice(0);
};


SelectedUserFollowsStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'FOLLOWED_RECIEVED':

      this.resetFollowed(payload.followed);
      this.__emitChange();
      break;
    case 'FOLLOWERS_RECIEVED':
      this.resetFollowers(payload.followers);
      this.__emitChange();
      break;
    // case 'FOLLOWED_USER':
    //   this.addFollow(payload.follow);
    //   break;
    // case 'UNFOLLOWED_USER':
    //   this.removeFollow(payload.unfollow);
    //   break;
  }
};

// var _findFollowIndexByUsernameInCurrentUser = function(username) {
//   for (var i = 0; i < _followed.length; i++) {
//     if (_followed[i].username === username) return i;
//   }
// };
//
// SelectedUserFollowsStore.addFollow = function(follow) {
//   if(UserStore.selectedUser().username === UserStore.currentUser().username){
//     console.log(follow);
//     _followed.push(follow);
//     this.__emitChange();
//   }
// };
//
// SelectedUserFollowsStore.removeFollow = function(unfollow) {
//   var followIndex = _findFollowIndexByUsernameInCurrentUser(unfollow.username);
//   if(UserStore.selectedUser().username === UserStore.currentUser().username){
//     _followed.splice(followIndex, 1);
//     this.__emitChange();
//   }
// };

module.exports = SelectedUserFollowsStore;
