var React = require('react');
var PropTypes = React.PropTypes;
var History = require('react-router').History;

var UserLink = React.createClass({
  mixins: [History],

  _goToUserPage: function() {
    this.history.pushState(null, '/users/' + this.props.username, {});
    if (this.props.callback) this.props.callback();
  },


  render: function() {
    return (
      <div onClick={this._goToUserPage} id='user-link'>
        {this.props.username}
      </div>
    );
  }

});

module.exports = UserLink;
