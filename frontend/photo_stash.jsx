// Main Components
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;


//Dispatcher
var Dispatcher = require('./dispatcher/dispatcher');

//Stores
var PhotoStore = require('./stores/photo_store');

//Components
var App = require('./components/app');
var PhotosIndex = require('./components/photos/photos_index');

//Util
var ApiUtil = require('./util/api_util');

//Actions
var PhotoActions = require('./actions/photo_actions');

//Testing
window.PhotoStore = PhotoStore;
window.PhotoActions = PhotoActions;

var routes = (
  <Route component={App} path = '/'>
    <IndexRoute component={PhotosIndex}></IndexRoute>
  </Route>

  // <Route component={UserPage} path='user'></Route>
);


document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
