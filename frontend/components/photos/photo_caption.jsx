var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');

var PhotoCaption = React.createClass({

  checkForcaption: function() {
    if (this.props.caption) {
      return (
        <span>
          <UserPageLink username={this.props.username} />
          {' ' + this.props.caption}
        </span>
      );
    } else {
      return null;
    }
  },

  render: function() {
    return (
      <div className='caption'>
        {this.checkForcaption()}
      </div>
    );
  }

});

module.exports = PhotoCaption;
