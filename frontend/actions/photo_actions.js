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
  }
};

module.exports = PhotoActions;
