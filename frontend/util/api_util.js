var ApiUtil = {
  fetchAllPhotos: function(callback) {
    $.ajax({
      url: 'api/photos',
      dataType: 'json',
      success: callback
    });
  }
};

module.exports = ApiUtil;
