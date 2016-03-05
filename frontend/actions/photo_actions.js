var Dispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
var ApiUtil = require('../util/api_util');

var PhotoActions = {
  recieveAllPhotos: function(photos) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECIEVED,
      photos: photos
    });
  },

  retrieveAllPhotos: function(count) {
    ApiUtil.fetchAllPhotos(count, this.recieveAllPhotos);
  },

  // recieveNextTenPhotos: function(photos) {
  //   Dispatcher.dispatch({
  //     actionType: PhotoConstants.NEXT_TEN_PHOTOS,
  //     photos: photos
  //   });
  // },
  //
  // retrieveNextTenPhotos: function(count) {
  //   ApiUtil.fetchNextTenPhotos(count, this.recieveNextTenPhotos);
  // },

  postedPhotoSuccessful: function(photo) {

    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_SAVED,
      photo: photo
    });
  },

  postPhoto: function(photo) {
    ApiUtil.addPhoto(photo, this.postedPhotoSuccessful);
  },

  recieveSinglePhoto: function(photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.SINGLE_PHOTO_RECIEVED,
      photo: photo
    });
  },

  retrieveSinglePhoto: function(photo) {
    ApiUtil.fetchSinglePhoto(photo, this.recieveSinglePhoto);
  },

  deletePhoto: function(photo) {
    ApiUtil.removePhoto(photo, this.deletedPhotoSuccessful);
  },

  deletedPhotoSuccessful: function(deletedPhoto) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.DELETED_PHOTO,
      deletedPhoto: deletedPhoto
    });
  }



};

module.exports = PhotoActions;
