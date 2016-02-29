var Dispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');
var ApiUtil = require('../util/api_util');


var SearchActions = {
  recieveSearch: function(searchResults) {

    Dispatcher.dispatch({
      actionType : SearchConstants.SEARCH_RESULTS,
      searchResults : searchResults
    });
  },

  retrieveSearch: function(searchTerms) {
    ApiUtil.searchDatabase(searchTerms, this.recieveSearch);
  }

};


module.exports = SearchActions;
