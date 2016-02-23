var React = require('react');

var PhotosIndex = require('./photos/photos_index');

var App = React.createClass({

  render: function() {
    return (
      <div >
        <header> Hello World</header>
        <PhotosIndex />
      </div>
    );
  }

});

module.exports = App;
