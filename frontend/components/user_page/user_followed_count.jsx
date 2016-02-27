var React = require('react');
var PropTypes = React.PropTypes;

var UserFollowedCount = React.createClass({


  componentWillReceiveProps: function(newProps) {
    console.log(newProps.followCount);

  },

  createFollowingButton: function() {
    return (this.props.followCount) ? this.props.followCount + ' following' : null;
  },

  render: function() {

    return (
      <div>
        {this.createFollowingButton()}
      </div>
    );
  }

});

module.exports = UserFollowedCount;
