// Main Components
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

//Dispatcher
var Dispatcher = require('./dispatcher/dispatcher');

//Stores
var PhotoStore = require('./stores/photo_store');

//Components
var App = require('./components/app');

//Util
var ApiUtil = require('./util/api_util');

//Actions
var PhotoActions = require('./actions/photo_actions');

//Testing
window.PhotoStore = PhotoStore;
window.PhotoActions = PhotoActions;

var routes = (
  <Route component={App} path = '/'></Route>
);


document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
