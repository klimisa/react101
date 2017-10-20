"use strict";

var React = require('react');
var ReactRouterDOM = require('react-router-dom');
var Route = ReactRouterDOM.Route;
var Switch = ReactRouterDOM.Switch;

const Routes = () => (
    <Switch>
        <Route exact path="/" component={require('./components/homePage')} />
        <Route path="/authors" component={require('./components/authors/AuthorRoute')} />
        <Route path="/about" component={require('./components/about/aboutPage')} />
        <Route component={require('./components/notFound')} />
    </Switch>
)

module.exports = Routes;