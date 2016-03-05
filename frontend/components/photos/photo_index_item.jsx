var React = require('react');
var UserPageLink = require('../links/user_page_link');
var PhotoCaption = require('./photo_caption');
var PhotoLikes = require('./photo_likes');
var PhotoLikeButton = require('./photo_like_button');
var PhotoCommentInput = require('./photo_comment_input');
var PhotoComments = require('./photo_comments');

var PhotoIndexItem = React.createClass({

  render: function() {
    return (
      <li className='photo-index-item'>

        <div className='photo-top'>
          <img src={this.props.photo.user.profile_picture} width='50px' height= '50px' className='photo-feed-profile-picture' />
          <UserPageLink username={this.props.photo.user.username} className='photo-top-user-link'/>
        </div>

        <div className='photo-image'>
          <img src={this.props.photo.image} className='image'/>
        </div>

        <div className ='photo-bottom'>
          <PhotoLikes likes={this.props.photo.likes} currentUser={this.props.currentUser}/>
          <PhotoCaption caption={this.props.photo.caption} username={this.props.photo.user.username}/>
          <PhotoComments comments={this.props.photo.comments}/>
        </div>
        <div className = 'photo-input-fields'>
          <PhotoLikeButton photo={this.props.photo}/>
          <PhotoCommentInput photo={this.props.photo}/>
        </div>

      </li>
    );
  }

});

module.exports = PhotoIndexItem;
