var React = require('react');
var PropTypes = React.PropTypes;

var UserFollowedCount = React.createClass({
  getInitialState: function() {
    return {selectedUser: {followed:[]}};
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({selectedUser: newProps.selectedUser});
  },

  createFollowingButton: function() {
    return (this.selectedUser) ? this.state.selectedUser.followed.length + 'following' : null;
  },


  render: function() {
    return (
      <div>
        {this.state.selectedUser.followed.length} following
      </div>
    );
  }

});

module.exports = UserFollowedCount;
