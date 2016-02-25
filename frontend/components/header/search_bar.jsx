var React = require('react');

var SearchBar = React.createClass({

  render: function() {
    return (
      <li className='headerItem'>
        <input placeholder='Search...'></input>
      </li>
    );
  }

});

module.exports = SearchBar;
