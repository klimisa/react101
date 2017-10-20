"use strict";

var React = require('react');

var ReactRouterDOM = require('react-router-dom');
var Route = ReactRouterDOM.Route;
var Switch = ReactRouterDOM.Switch;

const AuthorRoute = () => (
    <Switch>
      <Route exact path='/authors' component={require('./authorPage')}/>
      <Route exact path='/authors/add' component={require('./manageAuthorPage')}/>
      <Route path='/authors/:authorId' component={require('./manageAuthorPage')}/>
    </Switch>
  )

module.exports = AuthorRoute;