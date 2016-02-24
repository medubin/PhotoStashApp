var React = require('react');

var UserName = React.createClass({

  render: function() {
    return (
      <detail className='username'>
        {this.props.currentUser.username}
      </detail>
    );
  }

});

module.exports = UserName;
