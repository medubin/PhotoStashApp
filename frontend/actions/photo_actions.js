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

  retrieveAllPhotos: function() {
    ApiUtil.fetchAllPhotos(this.recieveAllPhotos);
  },

  postedPhotoSuccess: function(photo) {

    Dispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_SAVED,
      photo: photo
    });
  },

  postPhoto: function(photo) {
    ApiUtil.addPhoto(photo, this.postedPhotoSuccess);
  },

  recieveSinglePhoto: function(photo) {
    Dispatcher.dispatch({
      actionType: PhotoConstants.SINGLE_PHOTO_RECIEVED,
      photo: photo
    });
  },

  retrieveSinglePhoto: function(photo) {
    ApiUtil.fetchSinglePhoto(photo, this.recieveSinglePhoto);
  }



};

module.exports = PhotoActions;
