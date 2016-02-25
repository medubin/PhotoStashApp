var React = require('react');

var PhotoIndexItem = React.createClass({

  render: function() {
    return (
      <li className='photo-index-item'>
        <article className='poster'>{this.props.photo.user.username} </article>
        <br></br>
        <img src={this.props.photo.image} className='image'/>
        <br></br>
        <article className='caption'>{this.props.photo.caption}</article>

      </li>
    );
  }

});

module.exports = PhotoIndexItem;
