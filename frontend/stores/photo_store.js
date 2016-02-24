var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var PhotoStore = new Store(AppDispatcher);
var _photos = [];

PhotoStore.resetPhotos = function(photos) {
  _photos = photos;
};

PhotoStore.addPhoto = function(photo) {
  _photos.push(photo);
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
  }
};

PhotoStore.all = function() {
  return _photos.slice(0);
};



module.exports = PhotoStore;
