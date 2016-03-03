var React = require('react');
var PropTypes = React.PropTypes;

var UserPhotoItem = React.createClass({

  render: function() {
    return (
      <li className='user-page-photo'>
        <span className='user-page-photo-likes'>♥ {this.props.photo.likes_count}</span>
        <span className='user-page-photo-comments'>c {this.props.photo.comments_count}</span>
        <span className='user-photo-opacity'>
          <img src={this.props.photo.image}
               className='user-photo-item' />

          </span>


      </li>
    );
  }

});

module.exports = UserPhotoItem;








// onClick={this._toggleModal.bind(this, this.props.photo)}/>
