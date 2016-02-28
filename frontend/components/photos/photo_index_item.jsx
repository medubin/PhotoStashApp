var React = require('react');
var UserPageLink = require('../links/user_page_link');

var PhotoIndexItem = React.createClass({

  render: function() {
    return (
      <li className='photo-index-item'>
        <UserPageLink username={this.props.photo.user.username}/>
        <br></br>
        <img src={this.props.photo.image} className='image'/>
        <br></br>
        <article className='caption'>{this.props.photo.caption}</article>

      </li>
    );
  }

});

module.exports = PhotoIndexItem;
