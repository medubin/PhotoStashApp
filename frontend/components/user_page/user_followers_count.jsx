var React = require('react');
var PropTypes = React.PropTypes;
var UserFollowersList = require('./user_followers_list');

var UserFollowersCount = React.createClass({
  getInitialState: function () {
    return( {followersShown: false});
  },



toggleFollowedList: function() {
  this.setState({followersShown: !this.state.followersShown });

},

  createFollowingButton: function() {
    return (this.props.selectedUser.followers || this.props.selectedUser.followers === 0)
          ? this.props.selectedUser.followers + ' followers'
          : null;
  },

  render: function() {
    return (
      <button id='user-followers-count'>
        <div onClick={this.toggleFollowedList}>
          {this.createFollowingButton()}
        </div>
        {(this.state.followersShown) ? <UserFollowersList
                                        selectedUser={this.props.selectedUser}
                                        callback={this.toggleFollowedList}>
                                      </UserFollowersList> : null}
      </button>
    );
  }

});

module.exports = UserFollowersCount;
