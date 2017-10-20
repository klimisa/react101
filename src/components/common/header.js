"use strict";

var React = require('react');

var ReactRouterDOM = require('react-router-dom');
var Link = ReactRouterDOM.Link;

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Pluralsight
          </a>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/will-not-match">Will Not Match</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

module.exports = Header;