var React = require('react');

var SearchBar = React.createClass({

  render: function() {
    return (
      <li className='headerItem'>
        <input type='text' id='header-search-input' placeholder='Search...'></input>
      </li>
    );
  }

});

module.exports = SearchBar;

//🔍 not working
