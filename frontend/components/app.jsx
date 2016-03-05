var React = require('react');

var PhotosIndex = require('./photos/photos_index');
var Header = require('./header/header');

var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');
var Footer = require('./footer/footer');


var App = React.createClass({
  getInitialState: function() {
    return({currentUser: UserStore.currentUser() });
  },



  componentDidMount: function() {
    this.currentUserToken = UserStore.addListener(this._onChange);
    UserActions.retrieveCurrentUser();
  },

  componentWillUnmount: function() {
    this.currentUserToken.remove();
  },

  _onChange: function() {
   this.setState({currentUser: UserStore.currentUser()});
 },

  render: function() {
    return (
      <main >
        <Header location={this.props.location.pathname} currentUser={this.state.currentUser} selectedUser={this.props.params.username}/>
         {this.props.children && React.cloneElement(this.props.children, {
           currentUser: this.state.currentUser
         })}
         <Footer/>
      </main>
    );
  }

});

module.exports = App;
