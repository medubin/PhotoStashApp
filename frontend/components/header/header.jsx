var React = require('react');

var Header = React.createClass({




  render: function() {
    return (
      <header>
        {this.props.currentUser.username}
      </header>
    );
  }

});

module.exports = Header;
