var React = require('react');
var PropTypes = React.PropTypes;

var UserPhotoItem = React.createClass({

  render: function() {
    return (
      <div>
         <img src={this.props.photo.image}/>
      </div>
    );
  }

});

module.exports = UserPhotoItem;
