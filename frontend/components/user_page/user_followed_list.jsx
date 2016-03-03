var React = require('react');
var SelectedUserFollowsStore = require('../../stores/selected_user_follows_store');
var UserStore = require('../../stores/user_store');
var SelectedUserFollowsActions = require('../../actions/selected_user_follows_actions');
var UserPageLink = require('../links/user_page_link');
var FollowUserButton = require('../links/follow_user_button');

var UserFollowedList = React.createClass({
  getInitialState: function() {
    return({
      selectedUserFollowed: SelectedUserFollowsStore.allFollowed(),
    });
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
        return (

          <li key={idx} className='followed-user-list-item'>
            <UserPageLink username={user.username} callback={this.props.callback}/>
            <FollowUserButton selectedUser={user} currentUser={this.props.currentUser}/>
          </li>

        );
      }.bind(this));
    }

  },
  componentWillReceiveProps: function(newProps) {
    SelectedUserFollowsActions.retrieveAllFollowed(newProps.selectedUser);
  },

  render: function() {
    return ( <ul className='user-followed-list'> {this.createFollowedList()} </ul> );
  }
});

module.exports = UserFollowedList;
