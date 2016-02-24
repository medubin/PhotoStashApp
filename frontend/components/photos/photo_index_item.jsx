var React = require('react');

var PhotoIndexItem = React.createClass({

  render: function() {
    return (
      <li className='photo-index-item'>
        <img src={this.props.photo.image}/>
        <br></br>
        {this.props.photo.user.username}
        <br></br>
         {this.props.photo.caption}
         <br></br>
      </li>
    );
  }

});

module.exports = PhotoIndexItem;
