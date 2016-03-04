var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var PhotoStore = new Store(AppDispatcher);
var _photos = [];
var _singlePhotoShow = {id: undefined};

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
    case 'POSTED_COMMENT':
      this.commentOnPhoto(payload.comment);
      this.__emitChange();
      break;
    case 'DELETED_COMMENT':
      this.deleteComment(payload.uncomment);
      this.__emitChange();
      break;
    case 'SINGLE_PHOTO_RECIEVED':
      this.addSinglePhotoShow(payload.photo);
      this.__emitChange();
      break;
    case 'DELETED_PHOTO':
      this.deletePhoto(payload.deletedPhoto);
      this.__emitChange();
  }
};

var _findPhotoIndexById = function(id) {
  for (var i = 0; i < _photos.length; i++) {
    if (_photos[i].id === id) return i;
  }
};

var _findLikeIndexByUsername = function(username, unlikedPhoto) {
  for (var i = 0; i < unlikedPhoto.likes.length; i++) {
    if (unlikedPhoto.likes[i].username === username) return i;
  }
};

var _findCommentIndexById = function(id, uncommentedPhoto) {
  for (var i = 0; i < uncommentedPhoto.comments.length; i++) {
    if (uncommentedPhoto.comments[i].id === id) return i;
  }
};

PhotoStore.deletePhoto = function(deletedPhoto) {
  var deletedPhotoIndex = _findPhotoIndexById(deletedPhoto.id);
  _photos.splice(deletedPhotoIndex, 1);
};

PhotoStore.addSinglePhotoShow = function(photo) {
  _singlePhotoShow = photo;
};

PhotoStore.deleteComment = function(uncomment) {
  var uncommentedPhoto = _findPhotoIndexById(uncomment.photo_id);
  if (uncomment.photo_id === _singlePhotoShow.id) {
    var removeCommentSinglePhoto = _findCommentIndexById(uncomment.id, _singlePhotoShow);
    _singlePhotoShow.comments.splice(removeCommentSinglePhoto, 1);
  }
  if (uncommentedPhoto !== undefined) {
    var removedComment = _findCommentIndexById(uncomment.id, _photos[uncommentedPhoto]);
    _photos[uncommentedPhoto].comments.splice(removedComment, 1);
  }
};

PhotoStore.commentOnPhoto = function(comment) {
  var commentedPhoto = _findPhotoIndexById(comment.photo_id);
  if (commentedPhoto !== undefined) _photos[commentedPhoto].comments.push(comment);
  if (comment.photo_id === _singlePhotoShow.id) _singlePhotoShow.comments.push(comment);
};


PhotoStore.likePhoto = function(like) {
  var likedPhoto = _findPhotoIndexById(like.photo_id);
  if (likedPhoto !== undefined) _photos[likedPhoto].likes.push({username: like.username});
  if (like.photo_id === _singlePhotoShow.id) _singlePhotoShow.likes.push(like);
};


PhotoStore.unlikePhoto = function(unlike) {
  var unlikedPhoto = _findPhotoIndexById(unlike.photo_id);
  if (unlike.photo_id === _singlePhotoShow.id) {
    var removeLikeSinglePhoto = _findLikeIndexByUsername(unlike.username, _singlePhotoShow);
    _singlePhotoShow.likes.splice(removeLikeSinglePhoto, 1);
  }
  if (unlikedPhoto !== undefined) {
    var removedLike = _findLikeIndexByUsername(unlike.username, _photos[unlikedPhoto]);
    _photos[unlikedPhoto].likes.splice(removedLike, 1);
  }
};




PhotoStore.all = function() {
  return _photos.slice(0);
};

PhotoStore.singlePhotoShow = function() {
  // var copy =  $.extend({}, singlePhotoShow )
  //
  return _singlePhotoShow;
};



module.exports = PhotoStore;
