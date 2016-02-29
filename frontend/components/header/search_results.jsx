var React = require('react');
var PropTypes = React.PropTypes;
var SearchStore = require('../../stores/search_store');
var UserPageLink = require('../links/user_page_link');

var SearchResults = React.createClass({
  getInitialState: function() {
    return( {searchResults: SearchStore.all()});
  },

createSearchResults: function() {
  return this.state.searchResults.map(function(result, idx){
    return ( <li key={idx}> <UserPageLink username={result.username}/> </li> );
  });
},
  componentDidMount: function() {
    this.searchResultsToken = SearchStore.addListener(this.newSearchResults);
  },

  componentWillUnmount: function() {
    this.searchResultsToken.remove();
  },

  newSearchResults: function() {
    this.setState({searchResults: SearchStore.all()});
  },


  render: function() {
    return (
      <ul id='search-results'>
        {this.createSearchResults()}
      </ul>
    );
  }

});

module.exports = SearchResults;
