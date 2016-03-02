var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');

var PhotoComments = React.createClass({

  createComments: function() {
    return (this.props.comments.map(function(comment, idx) {
      return(
        <div key={idx} className='photo-comment'>
          <UserPageLink username={comment.username} key={idx+ 0.1}/>
          {' ' + comment.body}
        </div>
      );
    }));
  },

  render: function() {
    return (
      <div className='all-photo-comments'>
        {this.createComments()}
      </div>
    );
  }

});

module.exports = PhotoComments;
