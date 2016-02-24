var ApiUtil = {
  fetchAllPhotos: function(callback) {
    $.ajax({
      url: 'api/photos',
      dataType: 'json',
      success: callback
    });
  },

  fetchCurrentUser: function(callback) {
    $.ajax({
      url: 'api/session',
      dataType: 'json',
      success: callback
    });
  },

  addPhoto: function(photo, callback) {
    $.ajax({
      url: 'api/photos',
      method: 'post',
      dataType: 'json',
      data: {photo: photo},
      success: function(data) {
        callback(data);
      }
    });
  }


};

module.exports = ApiUtil;
