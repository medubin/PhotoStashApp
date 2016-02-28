var React = require('react');
var PropTypes = React.PropTypes;

var UserPhotoItem = React.createClass({

  render: function() {
    return (
      <li className='user-page-photo'>
         <img src={this.props.photo.image} className='user-photo-item'/>
      </li>
    );
  }

});

module.exports = UserPhotoItem;
