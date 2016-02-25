var React = require('react');
var UserActions = require('../../actions/user_actions');
var UserStore = require('../../stores/user_store');


var UserPage = React.createClass({
  getInitialState: function() {
    return({
      selectedUser: {}
    });
  },

  componentWillReceiveProps: function(newProps) {
    var user = UserActions.retrieveSelectedUser({username: newProps.params.username});
  },

  componentDidMount: function() {
    this.selectedUserToken = UserStore.addListener(this._onChange);
    UserActions.retrieveSelectedUser({username: this.props.routeParams.username});
  },

  componentWillUnmount: function() {
    this.selectedUserToken.remove();
  },

  _onChange: function() {
   this.setState({selectedUser: UserStore.selectedUser(this.props.routeParams)});
 },

  render: function() {

    return (

      <div>
        hello {this.state.selectedUser.username}
      </div>

    );
  }

});

module.exports = UserPage;
