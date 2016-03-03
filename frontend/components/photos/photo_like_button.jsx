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


  _toggleLike: function() {
    console.log(this.props.photo);
    if (this._userLikedPhoto()) {
      LikeActions.deleteLike(this.props.photo);
    } else {
      LikeActions.postLike(this.props.photo);
    }
  },

  _setIcon: function() {
    if (this._userLikedPhoto()) {
      return (<img alt="Upload" src="/assets/moustache-monocle-red-small" width='50'/>);
    } else {
      return (<img alt="Upload" src="/assets/moustache-monocle-clear-small" width='50'/>);
    }
  },





  render: function() {
    return (
      <div className='photo-like' onClick={this._toggleLike}>
        {this._setIcon()}
      </div>
    );
  }

});

module.exports = PhotoLikeButton;
