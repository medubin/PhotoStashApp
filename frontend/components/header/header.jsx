var React = require('react');
var Logo = require('./logo');
var UserName = require('./user_name');

var Header = React.createClass({




  render: function() {
    return (
      <header>
        <Logo/>
        <UserName currentUser={this.props.currentUser}/>
      </header>
    );
  }

});

module.exports = Header;
