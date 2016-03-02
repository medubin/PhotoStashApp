var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchActions = require('../../actions/search_actions');
var SearchResults = require('./search_results');
////

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    // this.preventFirstUpdate = true;
    return( {searchPartial: ''});
  },

  componentDidUpdate: function() {
    if (this.state.searchPartial) {
      SearchActions.retrieveSearch(this.state.searchPartial);
    // } else if (!this.preventFirstUpdate){
      // SearchActions.clearSearch();
    // } else {
      // this.preventFirstUpdate = false;
    }
  },

  renderSearchResults:function() {
    if (this.state.searchPartial) {
      return (<SearchResults callback={this.closeSearch}/>);
    } else {
      return null;
    }
  },

  closeSearch: function() {
    this.setState({searchPartial: ''});
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
