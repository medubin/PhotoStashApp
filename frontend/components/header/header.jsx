var React = require('react');
var Logo = require('./logo');
var UserName = require('./user_name');
var PhotoUploader = require('./photo_uploader_button');
var SearchBar = require('./search_bar');


var Header = React.createClass({




  render: function() {
    return (
      <ul className='header'>
        <Logo/>
        <SearchBar/>
        <PhotoUploader currentUser ={this.props.currentUser}/>
        <UserName currentUser={this.props.currentUser}/>
      </ul>
    );
  }

});

module.exports = Header;
