var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');



var PhotoLikes = React.createClass({




  createLikes: function() {

    return this.props.likes.map(function(user, idx) {
      return (<UserPageLink username={user.username} key={idx}/>);
    });
  },

  render: function() {
    return (
      <div>
        {this.props.likes ? this.createLikes() : null}
      </div>
    );
  }

});

module.exports = PhotoLikes;
