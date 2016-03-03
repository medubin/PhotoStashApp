var React = require('react');
var PropTypes = React.PropTypes;
var History = require('react-router').History;
var UserActions = require('../../actions/user_actions');



var UserLink = React.createClass({
  mixins: [History],

  _goToUserPage: function() {
    this.history.pushState(null, '/users/' + this.props.username, {});
    if (this.props.callback) this.props.callback();
    UserActions.retrieveSelectedUser({username: this.props.username});

  },


  render: function() {
    return (
      <a onClick={this._goToUserPage} className='user-link'>
        {this.props.username}
      </a>
    );
  }

});

module.exports = UserLink;
