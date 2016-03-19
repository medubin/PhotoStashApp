var React = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({

  forwardToGit: function() {
    window.location.href ='https://github.com/medubin';
  },

  forwardToLinkedin: function() {
    window.location.href ='https://www.linkedin.com/in/medubin';
  },

  forwardToAngelList: function() {
    window.location.href ='https://angel.co/medubin';
  },

  forwardToEmail: function() {
    window.location.href ='mailto:medubin@gmail.com';
  },

  render: function() {
    return (
      <div className ='footer'>
        <img onClick={this.forwardToGit} className='githublink' src='assets/github-icon.png' width='40px'/>
        <img onClick={this.forwardToLinkedin} className='linkedinlink' src='assets/linkedin-icon.png' width='40px'/>
        <img onClick={this.forwardToAngelList} className='angellistlink' src='assets/angellist-icon.png' width='40px'/>
        <img onClick={this.forwardToEmail} className='emaillink' src='assets/email-icon.png' width='40px'/>
      </div>
    );
  }

});

module.exports = Footer;
