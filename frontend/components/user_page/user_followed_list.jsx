var React = require('react');
var SelectedUserFollowsStore = require('../../stores/selected_user_follows_store');
var SelectedUserFollowsActions = require('../../actions/selected_user_follows_actions');
var UserFollowedList = React.createClass({
  getInitialState: function() {
    return({selectedUserFollowed: SelectedUserFollowsStore.allFollowed()});
  },

  componentDidMount: function() {

    this.selectedUserFollowedToken = SelectedUserFollowsStore.addListener(this._onChangeFollowed);
    SelectedUserFollowsActions.retrieveAllFollowed(this.props.selectedUser);
  },

  componentWillUnmount: function() {
    this.selectedUserFollowedToken.remove();
  },

  _onChangeFollowed: function() {
    this.setState({selectedUserFollowed: SelectedUserFollowsStore.allFollowed() });

  },

  createFollowedList: function() {
    if (this.state.selectedUserFollowed) {
      return this.state.selectedUserFollowed.map(function(user, idx) {
        return (  <li key={idx}> {user.username} </li> );
      });
    }

  },
  componentWillReceiveProps: function(newProps) {
    SelectedUserFollowsActions.retrieveAllFollowed(newProps.selectedUser);
  },

  render: function() {
    return ( <ul> {this.createFollowedList()} </ul> );
  }
});

module.exports = UserFollowedList;
