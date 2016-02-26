var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../../stores/user_store');
var UserAction = require('../../actions/user_actions');


var FollowUserButton = React.createClass({

_is_following: function() {

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
   } else if (this._is_following()){
     return 'unfollow';
   } else {
     return 'follow';
   }
 },

 followOrUnfollow: function() {

   console.log(this.props);
 },


  render: function() {
    return (<div onClick={this.followOrUnfollow}>{this._toggleButton()} </div>);
  }

});

module.exports = FollowUserButton;
