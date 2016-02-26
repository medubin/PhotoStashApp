var React = require('react');

var UserFollowedList = React.createClass({

  createFollowedList: function() {
    if (this.props.selectedUser.followed) {
      return this.props.selectedUser.followed.map(function(user, idx) {
        return (  <li key={idx}> {user.username} </li> );
      });
    }

  },
  // componentWillReceiveProps: function(newProps) {
  //
  // },

  render: function() {
    return ( <ul> {this.createFollowedList()} </ul> );
  }
});

module.exports = UserFollowedList;
