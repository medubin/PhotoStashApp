var React = require('react');
var PropTypes = React.PropTypes;
var LikeActions = require('../../actions/like_actions');
var UserStore = require('../../stores/user_store');

var PhotoLikeButton = React.createClass({

  _userLikedPhoto:function() {
    var currentUsername = UserStore.currentUser().username;
    for (var i = 0; i < this.props.photo.likes.length; i++) {
      if (this.props.photo.likes[i].username === currentUsername) return true;
    }
    return false;
  },


  toggleLike: function() {
    if (this._userLikedPhoto()) {
      LikeActions.deleteLike(this.props.photo);
    } else {
      LikeActions.postLike(this.props.photo);
    }
  },

  render: function() {
    return (
      <div id='photo-like' onClick={this.toggleLike}>
        <img alt="Upload" src="/assets/heart.png" width='50'/>
      </div>
    );
  }

});

module.exports = PhotoLikeButton;
