var React = require('react');
var PropTypes = React.PropTypes;
var UserFollowedList = require('./user_followed_list');
var Modal = require('react-modal');

var FollowListsStyle = require('../../modal_styles/follow_lists_style');


var UserFollowedCount = React.createClass({
  getInitialState: function () {
    return( {followedShown: false});
  },



toggleFollowedList: function() {
  this.setState({followedShown: !this.state.followedShown });
},

  createFollowingButton: function() {
    return (this.props.selectedUser.followed || this.props.selectedUser.followed === 0)
            ? this.props.selectedUser.followed + ' following'
            : null;
  },

  render: function() {
    return (
      <span>
    <button className='user-followed-count'>
      <div onClick={this.toggleFollowedList}>
        {this.createFollowingButton()}
      </div>
        <Modal
          isOpen={this.state.followedShown}
          onRequestClose={this.toggleFollowedList}
          style={FollowListsStyle}
        >
            <UserFollowedList
              selectedUser={this.props.selectedUser}
              currentUser={this.props.currentUser}
              callback={this.toggleFollowedList}>
            </UserFollowedList>

        </Modal>

      </button>
      </span>
    );
  }

});

module.exports = UserFollowedCount;
