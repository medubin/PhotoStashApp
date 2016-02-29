var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchActions = require('../../actions/search_actions');
var SearchResults = require('./search_results');


var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return( {searchPartial: ''});
  },

  componentDidUpdate: function() {
    if (this.state.searchPartial) SearchActions.retrieveSearch(this.state.searchPartial);
  },

  renderSearchResults:function() {
    if (this.state.searchPartial) {
      return (<SearchResults/>);
    } else {
      return null;
    }
  },

  render: function() {
    return (
      <li className='headerItem'>
        <input type='text'
          id='header-search-input'
          placeholder='Search...'
          valueLink={this.linkState('searchPartial')}>
        </input>
        {this.renderSearchResults()}
      </li>
    );
  }

});

module.exports = SearchBar;

//🔍 not working
