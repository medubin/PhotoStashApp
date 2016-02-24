var React = require('react');

var PhotoIndexItem = React.createClass({

  render: function() {
    return (
      <li className='photo-index-item'>
        <img src={this.props.photo.image}/>
        <br></br>
        {this.props.photo.user_id + "----" +
         this.props.photo.image + "----" +
         this.props.photo.caption}
      </li>
    );
  }

});

module.exports = PhotoIndexItem;
