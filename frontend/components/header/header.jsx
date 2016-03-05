var React = require('react');
var Logo = require('./logo');
var UserName = require('./user_name');
var PhotoUploader = require('./photo_uploader_button');
var SearchBar = require('./search_bar');
var LogoutButton = require('./logout_button');
// var UserStore = require('../../stores/user_store');


var Header = React.createClass({

userLinkOrLogout: function() {
  if (this.props.selectedUser === this.props.currentUser.username) {
    return (<LogoutButton/>);
  } else {
    return(<UserName currentUser={this.props.currentUser}/>);
  }

},



  render: function() {
    return (
      <div className='header'>
        <Logo/>
        <PhotoUploader currentUser ={this.props.currentUser}/>
        <SearchBar location={this.props.location}/>
        {this.userLinkOrLogout()}
      </div>
    );
  }

});

module.exports = Header;
