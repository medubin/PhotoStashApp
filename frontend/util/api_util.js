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


  fetchSelectedUser: function(user, callback) {
    $.ajax({
      url: 'api/users/' + user.username,
      dataType: 'json',
      success: callback
    });

  },

  logoutCurrentUser: function(callback) {
    $.ajax({
      url: 'session',
      method: 'delete',
      success: function() {
        window.location.reload();
        callback();
      }
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
  },

  addFollow: function(user, callback) {
    $.ajax({
      url: 'api/users/' + user.id + '/follow',
      method: 'post',
      dataType: 'json',
      success: callback

    });
  },

  removeFollow: function(user, callback) {
    $.ajax({
      url: 'api/users/' + user.id + '/follow',
      method: 'delete',
      dataType: 'json',
      success: callback
    });
  },


  fetchAllFollowers: function(user, callback) {
    $.ajax({
      url: 'api/users/' + user.id + '/follows',
      method: 'get',
      dataType: 'json',
      data: {subAction: 'followers'},
      success: callback
    });
  },


  fetchAllFollowed: function(user, callback) {
    $.ajax({
      url: 'api/users/' + user.id + '/follows',
      method: 'get',
      dataType: 'json',
      data: {subAction: 'followed'},
      success: callback
    });
  },

  searchDatabase: function(searchTerm, callback) {
    $.ajax({
      url: 'api/search/',
      method: 'get',
      dataType: 'json',
      data: {searchTerm: searchTerm},
      success: callback
    });
  },

  addLike: function(photo, callback) {
    $.ajax({
      url: 'api/photos/' + photo.id + '/like',
      method: 'post',
      dataType: 'json',
      success: callback
    });
  },

  removeLike: function(photo, callback) {
    $.ajax({
      url: 'api/photos/' + photo.id + '/like',
      method: 'delete',
      dataType: 'json',
      success: callback
    });
  },

};

module.exports = ApiUtil;
