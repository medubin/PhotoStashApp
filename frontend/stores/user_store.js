var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);
var _currentUser = {};
var _selectedUser = {username:'', followed: [], photos: []};

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
      break;
    case 'DELETED_PHOTO':
      this.deletePhotoFromSelectedUser(payload.deletedPhoto);
      this.__emitChange();
      break;
    case 'PHOTO_SAVED':
      this.addPhoto(payload.photo);
      break;
    case 'UPDATE_CURRENT_USER':
      this.updateCurrentUser(payload.currentUser);
      this.__emitChange();
      break;

    case 'LIKED_PHOTO':
      this.likePhoto(payload.like);
      this.__emitChange();
      break;
    case 'UNLIKED_PHOTO':
      this.unlikePhoto(payload.unlike);
      this.__emitChange();
      break;
    case 'POSTED_COMMENT':
      this.commentOnPhoto(payload.comment);
      this.__emitChange();
      break;
    case 'DELETED_COMMENT':
      this.deleteComment(payload.uncomment);
      this.__emitChange();
      break;
  }
};


UserStore.likePhoto = function(like) {
  var likedPhoto = _findPhotoByIdInSelectedUser(like.photo_id);
  _selectedUser.photos[likedPhoto].likes_count += 1;
};

UserStore.unlikePhoto = function(unlike) {
  var unlikedPhoto = _findPhotoByIdInSelectedUser(unlike.photo_id);
  _selectedUser.photos[unlikedPhoto].likes_count -= 1;
};

UserStore.commentOnPhoto = function(comment) {
  var commentedPhoto = _findPhotoByIdInSelectedUser(comment.photo_id);
  _selectedUser.photos[commentedPhoto].comments_count += 1;
};

UserStore.deleteComment = function(uncomment) {
  var uncommentedPhoto = _findPhotoByIdInSelectedUser(uncomment.photo_id);
  _selectedUser.photos[uncommentedPhoto].comments_count -= 1;
};

var _findFollowIndexByUsernameInCurrentUser = function(username) {
  for (var i = 0; i < _currentUser.followed.length; i++) {
    if (_currentUser.followed[i].username === username) return i;
  }
};

var _findPhotoByIdInSelectedUser = function(id) {
  for (var i = 0; i < _selectedUser.photos.length; i++) {
    if (_selectedUser.photos[i].id === id ) return i;
  }
};

UserStore.addPhoto = function(photo) {
  if (_selectedUser.username === photo.user.username) {
    _selectedUser.photos.push(photo);
    this.__emitChange();
  }
};

UserStore.deletePhotoFromSelectedUser = function(deletedPhoto) {
  var deletedPhotoIndex = _findPhotoByIdInSelectedUser(deletedPhoto.id);
  _selectedUser.photos.splice(deletedPhotoIndex, 1);
};


UserStore.addFollow = function(followed) {
  _currentUser.followed.push(followed);
  if (_currentUser.username === _selectedUser.username) _selectedUser.followed += 1;
  if (_selectedUser.username === followed.username) _selectedUser.followers += 1;
};

UserStore.removeFollow = function(unfollowed) {
  var indexOfUnfollow = _findFollowIndexByUsernameInCurrentUser(unfollowed.username);
  if (indexOfUnfollow !== undefined) {
    _currentUser.followed.splice(indexOfUnfollow, 1);
  }
  if (_currentUser.username === _selectedUser.username) _selectedUser.followed -= 1;
  if (_selectedUser.username === unfollowed.username) _selectedUser.followers -= 1;
};

UserStore.resetCurrentUser = function(user) {
  _currentUser = user;
};

UserStore.updateCurrentUser = function(user) {
  _currentUser = user;
  if (_currentUser.username === _selectedUser.username) _selectedUser.picture = user.picture;
};


UserStore.resetSelectedUser = function(user) {
  //TODO 3/5/15 12:25 I DON'T KNOW WHY I HAD I NEED TO REMOVE
  // if(_selectedUser.username !== user.username){
    _selectedUser = user;
    this.__emitChange();
  // }

};

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.selectedUser = function() {
  return _selectedUser;
};

module.exports = UserStore;
