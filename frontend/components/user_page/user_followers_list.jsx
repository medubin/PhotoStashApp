var React = require('react');
var SelectedUserFollowsStore = require('../../stores/selected_user_follows_store');
var UserStore = require('../../stores/user_store');
var SelectedUserFollowsActions = require('../../actions/selected_user_follows_actions');
var UserPageLink = require('../links/user_page_link');
var FollowUserButton = require('./follow_user_button');



var UserFollowedList = React.createClass({
  getInitialState: function() {
    return({selectedUserFollowers: SelectedUserFollowsStore.allFollowers()});
  },

  componentDidMount: function() {

    this.selectedUserFollowersToken = SelectedUserFollowsStore.addListener(this._onChangeFollowers);
    SelectedUserFollowsActions.retrieveAllFollowers(this.props.selectedUser);
  },

  componentWillUnmount: function() {
    this.selectedUserFollowersToken.remove();
  },

  _onChangeFollowers: function() {
    this.setState({selectedUserFollowers: SelectedUserFollowsStore.allFollowers() });
  },

  createFollowersList: function() {


    if (this.state.selectedUserFollowers) {
      return this.state.selectedUserFollowers.map(function(user, idx) {
        return (  <li key={idx} id='followers-user-list-item'>
          <UserPageLink username={user.username} callback={this.props.callback}/>
          <FollowUserButton selectedUser={user} currentUser={this.props.currentUser}/>
        </li> );
      }.bind(this));
    }

  },
  componentWillReceiveProps: function(newProps) {
    SelectedUserFollowsActions.retrieveAllFollowers(newProps.selectedUser);
  },

  render: function() {
    return ( <ul id='user-followers-list'> {this.createFollowersList()} </ul> );
  }
});

module.exports = UserFollowedList;
