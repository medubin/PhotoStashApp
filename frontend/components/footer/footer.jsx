var React = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({

  forwardToGit: function() {
    window.location.href ='https://github.com/medubin';
  },

  forwardToLinkedin: function() {
    window.location.href ='https://www.linkedin.com/in/medubin';
  },


  render: function() {
    return (
      <div className ='footer'>
        <img onClick={this.forwardToGit} className='githublink' src='assets/GitHub-Mark-32px.png' width='18px'/>
        <img onClick={this.forwardToLinkedin} className='linkedinlink' src='assets/linkedin.png' width='18px'/>
      </div>
    );
  }

});

module.exports = Footer;
