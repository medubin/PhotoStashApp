var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var SearchStore = new Store(AppDispatcher);
var _searchResults = [];

SearchStore.resetSearch = function(searchResults) {
  _searchResults = searchResults;
};

SearchStore.all = function() {
  return _searchResults.slice(0);
};

SearchStore.__onDispatch = function(payload) {

  switch(payload.actionType) {
    case 'SEARCH_RESULTS':
      this.resetSearch(payload.searchResults);
      this.__emitChange();
      break;
  }
};



module.exports = SearchStore;
