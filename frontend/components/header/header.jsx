var React = require('react');
var Logo = require('./logo');
var UserName = require('./user_name');
var PhotoUploader = require('./photo_uploader_button');



var Header = React.createClass({




  render: function() {
    return (
      <header>
        <Logo/>
        <PhotoUploader currentUser ={this.props.currentUser}/>
        <UserName currentUser={this.props.currentUser}/>
      </header>
    );
  }

});

module.exports = Header;
