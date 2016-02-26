var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var FollowUsersStore = new Store(AppDispatcher);
var _followed = [];

FollowUsersStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'FOLLOWED_RECIEVED':
      this.resetFollowed(payload.followed);
      this.__emitChange();
      break;
  }
};


FollowUsersStore.resetFollowed = function(followed) {
  _followed = followed.followed;
};

FollowUsersStore.followed = function() {
  console.log(_followed);
  return _followed.slice();
};




module.exports = FollowUsersStore;
