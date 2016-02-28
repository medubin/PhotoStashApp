var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

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
  }
};


module.exports = SelectedUserFollowsStore;

/*
FOLLOWED_RECIEVED: 'FOLLOWED_RECIEVED',
FOLLOWERS_RECIEVED: 'FOLLOWERS_RECIEVED'
*/
