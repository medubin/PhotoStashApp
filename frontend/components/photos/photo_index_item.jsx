var React = require('react');
var UserPageLink = require('../links/user_page_link');
var PhotoCaption = require('./photo_caption');
var PhotoLikes = require('./photo_likes');
var PhotoLikeButton = require('./photo_like_button');
var PhotoCommentInput = require('./photo_comment_input');
var PhotoComments = require('./photo_comments');
var UserProfilePicture = require('../links/user_profile_picture');
var PhotoIndexItem = React.createClass({

  render: function() {
    return (
      <li className='photo-index-item'>

        <div className='photo-top'>
          <UserProfilePicture class='photo-feed-profile-picture'
                              size='50px'
                              user={this.props.photo.user}/>

          <UserPageLink username={this.props.photo.user.username}
                        className='photo-top-user-link'/>

                      <span className='photo-top-post-time'>{this.props.photo.time}</span>

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
