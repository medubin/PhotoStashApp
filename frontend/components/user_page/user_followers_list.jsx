var React = require('react');
var SelectedUserFollowsStore = require('../../stores/selected_user_follows_store');
var SelectedUserFollowsActions = require('../../actions/selected_user_follows_actions');
var UserPageLink = require('../links/user_page_link');


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
        return (  <li key={idx}><UserPageLink username={user.username}/> </li> );
      });
    }

  },
  componentWillReceiveProps: function(newProps) {
    SelectedUserFollowsActions.retrieveAllFollowers(newProps.selectedUser);
  },

  render: function() {
    return ( <ul> {this.createFollowersList()} </ul> );
  }
});

module.exports = UserFollowedList;
