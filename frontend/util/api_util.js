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
  }
};

module.exports = ApiUtil;
