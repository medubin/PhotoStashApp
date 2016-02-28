var React = require('react');
var UserPageLink = require('../links/user_page_link');
var PhotoCaption = require('./photo_caption');

var PhotoIndexItem = React.createClass({

  render: function() {
    return (
      <li className='photo-index-item'>

        <div id='photo-top'>
          <UserPageLink username={this.props.photo.user.username} id='photo-top-user-link'/>
        </div>

        <div id='photo-image'>
          <img src={this.props.photo.image} className='image'/>
        </div>

        <div id ='photo-bottom'>
          <PhotoCaption caption={this.props.photo.caption} username={this.props.photo.user.username}/>
        </div>

      </li>
    );
  }

});

module.exports = PhotoIndexItem;
