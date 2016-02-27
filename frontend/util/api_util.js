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
      // url: 'api/users/' + user.id + '/follow',
      url: 'api/users/' + user.id + '/follow',
      method: 'post',
      dataType: 'json',
      data: {follow: {test:'test'}},
      success: callback

    });
  },





  //////DEPRACATED FOR NOW///////////

  fetchAllFollowers: function(callback) {
  $.ajax({
    url: 'api/follows',
    method: 'get',
    dataType: 'json',
    data: {subAction: 'followers'},
    success: callback
  });
},


fetchAllFollowed: function(user, callback) {
  $.ajax({
    url: 'api/follows',
    method: 'get',
    dataType: 'json',
    data: {subAction: 'followed', selectedUser: user.username},
    success: callback
  });
},


};

module.exports = ApiUtil;
