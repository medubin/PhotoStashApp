var React = require('react');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchActions = require('../../actions/search_actions');
var SearchResults = require('./search_results');
var History = require('react-router').History;
////

var SearchBar = React.createClass({
  mixins: [History],
  getInitialState: function() {
    // this.preventFirstUpdate = true;
    return( {searchPartial: ''});
  },

  componentDidUpdate: function() {

    // } else if (!this.preventFirstUpdate){
      // SearchActions.clearSearch();
    // } else {
      // this.preventFirstUpdate = false;

  },

  _searchChanged: function(e) {
    this.setState({searchPartial:e.currentTarget.value});
    if (e.currentTarget.value) {
      SearchActions.retrieveSearch(e.currentTarget.value);
    } else {
      SearchActions.clearSearch();
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

  componentWillReceiveProps: function(newProps) {
    if (newProps.location !== this.props.location) {
      this.closeSearch();
    }

  },

  render: function() {
    return (
      <li className='headerItem search-bar-container'>
        <input type='text'
          id='header-search-input'
          placeholder='Search...'
          value={this.state.searchPartial}
          onChange={this._searchChanged}
          >
        </input>
        {this.renderSearchResults()}
      </li>
    );
  }

});

module.exports = SearchBar;

//🔍 not working
