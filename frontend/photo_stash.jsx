// Main Components
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Modal = require('react-modal');



//Dispatcher
var Dispatcher = require('./dispatcher/dispatcher');

//Stores
var PhotoStore = require('./stores/photo_store');
var SearchStore = require('./stores/search_store');


//Components
var App = require('./components/app');
var PhotosIndex = require('./components/photos/photos_index');
var UserPage = require('./components/user_page/user_page');

//Util
var ApiUtil = require('./util/api_util');

//Actions
var PhotoActions = require('./actions/photo_actions');
var UserActions = require('./actions/user_actions');
var FollowUsersActions = require('./actions/follow_users_actions');
var SearchActions = require('./actions/search_actions');



//Testing
window.PhotoStore = PhotoStore;
window.PhotoActions = PhotoActions;
window.UserActions = UserActions;
window.ApiUtil = ApiUtil;
window.FollowUsersActions = FollowUsersActions;
window.SearchActions = SearchActions;
window.SearchStore = SearchStore;


var routes = (
  <Route component={App} path = '/'>
    <IndexRoute component={PhotosIndex}></IndexRoute>
    <Route component={UserPage} path='users/:username'></Route>
  </Route>

);


document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  Modal.setAppElement(root);
  ReactDOM.render(<Router>{routes}</Router>, root);
});
