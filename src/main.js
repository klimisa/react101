$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/app');

var ReactRouterDOM = require('react-router-dom');
var Router = ReactRouterDOM.BrowserRouter;

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
