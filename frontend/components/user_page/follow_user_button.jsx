var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../../stores/user_store');
var UserAction = require('../../actions/user_actions');
var FollowUserActions = require('../../actions/follow_users_actions');


var FollowUserButton = React.createClass({
  // getInitialState: function() {
  //   return ({following: null});
  // },

_isFollowing: function() {
  if (!this.props.currentUser.followed || !this.props.selectedUser) return false;
    return this.props.currentUser.followed.some(function(follow) {
    if (follow.username === this.props.selectedUser.username) {
      return true;
    }
  }.bind(this));

},


 _toggleButton: function() {
   if (this.props.currentUser.username === this.props.selectedUser.username) {
     return null;
   } else if (this._isFollowing()){
     return 'unfollow';
   } else {
     return 'follow';
   }
 },

 followOrUnfollow: function() {

   if (this._isFollowing() === false) {
     FollowUserActions.postFollow(this.props.selectedUser);
   } else {
     FollowUserActions.deleteFollow(this.props.selectedUser);
   }
 },


  render: function() {
    return (<div onClick={this.followOrUnfollow} className='follow-unfollow-button'>{this._toggleButton()} </div>);
  }

});

module.exports = FollowUserButton;
