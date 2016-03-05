var React = require('react');
var PropTypes = React.PropTypes;

var UserProfilePicture = React.createClass({

  createProfilePicture: function() {
    if(this.props.user.profile_picture) {
      return(  <img src={this.props.user.profile_picture}
                    width={this.props.size}
                    height={this.props.size}
                    className={this.props.class} />);
    } else {
      return(  <img src='assets/Default_profile_pic.png'
                    width={this.props.size}
                    height={this.props.size}
                    className={this.props.class} />);
    }


  },

  render: function() {
    return (  this.createProfilePicture() );
  }

});

module.exports = UserProfilePicture;
