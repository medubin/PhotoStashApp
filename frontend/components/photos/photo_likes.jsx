var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');



var PhotoLikes = React.createClass({


  _createLikeGrammar: function(idx) {
    if (idx === this.props.likes.length - 1 && this.props.likes.length !== 1) {
      return (' like this');
    } else if (idx === this.props.likes.length - 1) {
      return (' likes this');
    } else if (idx === this.props.likes.length - 2) {
      return (' and ');
    } else if (this.props.likes.length !== 1) {
      return (', ');
    }
  },

  createLikes: function() {
    if (this.props.likes.length > 6) return(<span>{this.props.likes.length} likes</span>);

    return this.props.likes.map(function(user, idx) {
      return (
        <span key={idx}>
        <UserPageLink username={user.username} key={idx} />
          {this._createLikeGrammar(idx)} </span>);
    }.bind(this));
  },

  render: function() {
    return (
      <div className='photo-feed-users-who-liked'>
        {this.props.likes ? this.createLikes() : null}
      </div>
    );
  }

});

module.exports = PhotoLikes;
