var React = require('react');
var PropTypes = React.PropTypes;
var UserFollowersList = require('./user_followers_list');
var FollowListsStyle = require('../../modal_styles/follow_lists_style');
var Modal = require('react-modal');


var UserFollowersCount = React.createClass({
  getInitialState: function () {
    return( {followersShown: false});
  },



toggleFollowersList: function() {
  this.setState({followersShown: !this.state.followersShown });

},

  createFollowingButton: function() {
    return (this.props.selectedUser.followers || this.props.selectedUser.followers === 0)
          ? this.props.selectedUser.followers + ' followers'
          : null;
  },

  render: function() {
    return (
      <span>
        <button className='user-followers-count'>
          <div onClick={this.toggleFollowersList}>
            {this.createFollowingButton()}
          </div>
          <Modal
            isOpen={this.state.followersShown}
            onRequestClose={this.toggleFollowersList}
            style={FollowListsStyle}
          >
        <UserFollowersList
          selectedUser={this.props.selectedUser}
          currentUser={this.props.currentUser}
            callback={this.toggleFollowersList} >
        </UserFollowersList>

        </Modal>
        </button>
      </span>
    );
  }

});

module.exports = UserFollowersCount;
