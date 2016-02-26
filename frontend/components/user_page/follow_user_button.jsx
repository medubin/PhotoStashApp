var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../../stores/user_store');
var UserAction = require('../../actions/user_actions');
// I WANT TO PASS DOWN currentUSer from the App, instead of having
// all of these dumb dumb listeners

var FollowUserButton = React.createClass({
  getInitialState: function() {
    return({currentUser: UserStore.currentUser() });
  },

  componentDidMount: function() {
    this.currentUserToken = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.currentUserToken.remove();
  },

  _onChange: function() {
   this.setState({currentUser: UserStore.currentUser()});
 },

 _toggleButton: function() {

   if (this.state.currentUser.username === this.props.currentUser) {
     return null;
   } else if (true){
    return ("follow");
  //    // I need to add a currentUser followed into the store
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
