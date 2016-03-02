var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var PhotoStore = new Store(AppDispatcher);
var _photos = [];

PhotoStore.resetPhotos = function(photos) {
  _photos = photos;
};

PhotoStore.addPhoto = function(photo) {
  _photos.unshift(photo);
};

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'PHOTOS_RECIEVED':
      this.resetPhotos(payload.photos);
      this.__emitChange();
      break;
    case 'PHOTO_SAVED':
      this.addPhoto(payload.photo);
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
  }
};

var _findPhotoById = function(id) {
  for (var i = 0; i < _photos.length; i++) {
    if (_photos[i].id === id) return _photos[i];
  }
};

var _findLikeByUsername = function(username, unlikedPhoto) {
  for (var i = 0; i < unlikedPhoto.likes.length; i++) {
    if (unlikedPhoto.likes[i].username === username) return unlikedPhoto.likes[i];
  }
};


PhotoStore.likePhoto = function(like) {
  var likedPhoto = _findPhotoById(like.id);
  likedPhoto.likes.push({username: like.username});
};

PhotoStore.unlikePhoto = function(unlike) {
  var unlikedPhoto = _findPhotoById(unlike.id);
  var removedLike = _findLikeByUsername(unlike.username, unlikedPhoto);
  unlikedPhoto.likes.splice(unlikedPhoto.likes.indexOf(removedLike), 1);
};




PhotoStore.all = function() {
  return _photos.slice(0);
};



module.exports = PhotoStore;
