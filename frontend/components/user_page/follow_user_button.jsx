var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../../stores/user_store');
var UserAction = require('../../actions/user_actions');


var FollowUserButton = React.createClass({



 _toggleButton: function() {

   if (this.props.currentUser.username === this.props.currentUser) {
     return null;
   } else if (true){
    return ("follow");
   }
   //toggle follow/unfollow/none based on following/notfollowing/sameuser
  //  if this.state.currentUser
 },

 followOrUnfollow: function() {

   console.log(this.props);
 },


  render: function() {
    return (<div onClick={this.followOrUnfollow}>{this._toggleButton()} </div>);
  }

});

module.exports = FollowUserButton;
