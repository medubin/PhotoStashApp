var React = require('react');

var PhotosIndex = require('./photos/photos_index');
var Header = require('./header/header');

var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');


var App = React.createClass({
  getInitialState: function() {
    return({currentUser: UserStore.currentUser() });
  },

  componentDidMount: function() {
    this.currentUserToken = UserStore.addListener(this._onChange);
    UserActions.retrieveCurrentUser();
  },

  _onChange: function() {
   this.setState({currentUser: UserStore.currentUser()});
   console.log(this.state.currentUser);
 },

  render: function() {

    return (
      <main >
        <Header currentUser={this.state.currentUser}/>
        <PhotosIndex />
      </main>
    );
  }

});

module.exports = App;
