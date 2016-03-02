var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');

var LikesModalContent = React.createClass({

  createLikes: function() {
    return (this.props.likes.map(function(user, idx) {
      return( <UserPageLink username={user.username} key={idx}/>);
    }));
  },




  render: function() {
    return (
      <div>
        {this.createLikes()}
      </div>
    );
  }

});

module.exports = LikesModalContent;
