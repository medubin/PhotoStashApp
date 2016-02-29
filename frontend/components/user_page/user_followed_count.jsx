var React = require('react');
var PropTypes = React.PropTypes;
var UserFollowedList = require('./user_followed_list');

var UserFollowedCount = React.createClass({
  getInitialState: function () {
    return( {followedShown: false});
  },



toggleFollowedList: function() {
  this.setState({followedShown: !this.state.followedShown });

},


  //
  // componentWillReceiveProps: function(newProps) {
  //   console.log(newProps.followCount);
  //
  // },

  createFollowingButton: function() {
    return (this.props.selectedUser.followed || this.props.selectedUser.followed === 0)
            ? this.props.selectedUser.followed + ' following'
            : null;
  },

  render: function() {
    return (
    <button id='user-followed-count'>
      <div onClick={this.toggleFollowedList}>
        {this.createFollowingButton()}
      </div>
        {(this.state.followedShown) ? <UserFollowedList
                                        selectedUser={this.props.selectedUser}
                                        callback={this.toggleFollowedList}>
                                      </UserFollowedList> : null}
      </button>
    );
  }

});

module.exports = UserFollowedCount;
