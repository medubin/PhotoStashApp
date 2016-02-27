var React = require('react');
var PropTypes = React.PropTypes;

var UserFollowedCount = React.createClass({
  getInitialState: function() {
    return {selectedUser: {followed:[]}};
  },

  componentWillReceiveProps: function(newProps) {
    console.log(newProps.selectedUser.followed);
    this.setState({selectedUser: newProps.selectedUser});
  },

  createFollowingButton: function() {
    return (this.state.selectedUser) ? this.state.selectedUser.followed.length + ' following' : null;
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
