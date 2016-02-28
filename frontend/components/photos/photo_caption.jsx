var React = require('react');
var PropTypes = React.PropTypes;
var UserPageLink = require('../links/user_page_link');

var PhotoCaption = React.createClass({

  checkForUsername: function() {
    if (this.props.caption) {
      return (
        <UserPageLink username={this.props.username} />);
    } else {
      return null;
    }

  },

  render: function() {

    return (
      <div id='caption'>

        {this.checkForUsername()}
        {' ' + this.props.caption}
      </div>
    );
  }

});

module.exports = PhotoCaption;
