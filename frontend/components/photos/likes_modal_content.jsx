var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');
var FollowUserButton = require('../links/follow_user_button');
// var UserStore = require('../../stores/user_store');


var LikesModalContent = React.createClass({

  createLikes: function() {
    return (this.props.likes.map(function(user, idx) {
      return(
        <span key={idx + 0.1}>
          <UserPageLink username={user.username} key={idx}/>
          <FollowUserButton selectedUser={user} currentUser={this.props.currentUser} key={idx + 0.2}/>
        </span>
    );

  }.bind(this)));
  },




  render: function() {
    return (
      <div className='likes-overflow-modal'>
        {this.createLikes()}
      </div>
    );
  }

});

module.exports = LikesModalContent;
