var React = require('react');
var History = require('react-router').History;

var UserName = React.createClass({
  mixins: [History],


  _goToUserPage: function() {
    this.history.pushState(null, '/users/' + this.props.currentUser.username, {});
  },

  render: function() {
    return (
      <li className='headerItem' onClick={this._goToUserPage}>
        {this.props.currentUser.username}
      </li>
    );
  }

});

module.exports = UserName;
