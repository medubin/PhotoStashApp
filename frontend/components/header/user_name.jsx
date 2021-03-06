var React = require('react');
var History = require('react-router').History;

var UserName = React.createClass({
  mixins: [History],


  _goToUserPage: function() {
    this.history.pushState(null, '/users/' + this.props.currentUser.username, {});
  },

  render: function() {
    return (
      <span className='headerItem'>
        <div onClick={this._goToUserPage} className='link-wrapper'>{this.props.currentUser.username}</div>

      </span>
    );
  }

});

module.exports = UserName;
