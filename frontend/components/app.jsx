var React = require('react');

var PhotosIndex = require('./photos/photos_index');
var Header = require('./header/header');


var App = React.createClass({

  render: function() {
    return (
      <div >
        <Header/>
        <PhotosIndex />
      </div>
    );
  }

});

module.exports = App;
